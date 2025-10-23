import fs from 'fs';
import path from 'path';
import SHACLValidator from 'rdf-validate-shacl';
import { Parser } from 'n3';
import jsonld from 'jsonld';

async function validateRecord(recordPath) {
    try {
        // Read files
        const record = JSON.parse(fs.readFileSync(recordPath, 'utf-8'));
        const schemaPath = path.join(path.dirname(recordPath), '..', 'recordschema.jsonld');
        const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

        // Convert JSON-LD to RDF quads
        const recordQuads = await jsonld.toRDF(record);
        const schemaQuads = await jsonld.toRDF(schema);

        // Create validator
        const validator = new SHACLValidator(schemaQuads);
        
        // Validate
        const report = await validator.validate(recordQuads);
        
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
        console.error('Error during validation:', error.message);
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
