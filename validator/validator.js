import fs from 'fs';
import path from 'path';
import SHACLValidator from 'rdf-validate-shacl';
import { Parser, Store } from 'n3';
import jsonld from 'jsonld';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function jsonldToN3Store(jsonldData) {
    try {
        const expanded = await jsonld.expand(jsonldData);
        const nquads = await jsonld.toRDF(expanded, {
            format: 'application/n-quads',
            produceGeneralizedRdf: false
        });
        const store = new Store();
        const parser = new Parser();
        const quads = parser.parse(nquads);
        quads.forEach(quad => store.add(quad));
        return store;
    } catch (error) {
        throw error;
    }
}

function isValidXsdDate(value) {
    // ISO 8601 date (YYYY-MM-DD)
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isValidAccuracyIndicator(value) {
    // Accepts AAA, AAE, AAU, etc. (A/E/U for each position)
    return /^[AEU]{3}$/.test(value);
}

function checkStrictLiterals(store) {
    let valid = true;
    store.getQuads(null, null, null, null).forEach(quad => {
        // Strict xsd:date check
        if (
            quad.object.datatype &&
            quad.object.datatype.value === 'http://www.w3.org/2001/XMLSchema#date'
        ) {
            if (!isValidXsdDate(quad.object.value)) {
                console.error(
                    `Invalid xsd:date literal: "${quad.object.value}" at predicate ${quad.predicate.value}`
                );
                valid = false;
            }
        }
        // // Strict accuracyIndicator check
        // if (
        //     quad.predicate.value === 'https://socialcaredata.github.io/spec/accuracyIndicator'
        // ) {
        //     if (!isValidAccuracyIndicator(quad.object.value)) {
        //         console.error(
        //             `Invalid accuracyIndicator: "${quad.object.value}" at predicate ${quad.predicate.value}`
        //         );
        //         valid = false;
        //     }
        // }
        // Add more strict rules here as needed
    });
    return valid;
}

async function validateRecord(recordPath) {
    try {
        // Read files
        const record = JSON.parse(fs.readFileSync(recordPath, 'utf-8'));
        const schemaPath = path.join(path.dirname(recordPath), 'recordschema.jsonld');
        const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

        // Merge schema context with record
        record['@context'] = [record['@context'], schema['@context']];

        // Convert JSON-LD to N3 stores
        const recordStore = await jsonldToN3Store(record);
        const schemaStore = await jsonldToN3Store(schema);

        // Strict literal checks
        if (!checkStrictLiterals(recordStore)) {
            console.error('✗ Validation failed: Invalid literal(s) found.');
            return false;
        }

        // Create validator
        const validator = new SHACLValidator(schemaStore);

        // Validate
        const report = await validator.validate(recordStore);

        if (report.conforms) {
            console.log('✓ Record is valid');
            return true;
        } else {
            console.error('✗ Validation failed:');
            report.results.forEach(result => {
                console.error(`- ${result.message}`);
                console.error(`  Path: ${result.path}`);
                console.error(`  Value: ${result.value}`);
            });
            return false;
        }
    } catch (error) {
        console.error('Validation error:', error);
        return false;
    }
}

// CLI interface
if (process.argv.length < 3) {
    console.error('Usage: node validator.js <path-to-record>');
    process.exit(1);
}

validateRecord(process.argv[2])
    .then(isValid => process.exit(isValid ? 0 : 1));
