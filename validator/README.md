# Person Standard Validator

A JSON-LD validator for checking Person records against the Person Standard schema.

## Installation

1. Ensure you have Node.js installed (version 14 or higher)
2. Install dependencies:
```bash
npm install
```

## Usage

Validate a single record:
```bash
npm run validate <path-to-record>
```

Example:
```bash
npm run validate ../examplerecord.jsonld
```

## Validation Rules

The validator checks:
- JSON-LD syntax validity
- Conformance to the Person Standard schema
- Required fields presence
- Data type correctness
- Controlled vocabulary usage

## Exit Codes

- 0: Validation successful
- 1: Validation failed or error occurred

## Error Messages

The validator will output detailed messages for any validation failures, including:
- Missing required fields
- Incorrect data types
- Invalid controlled vocabulary values
- Structural errors

Example error output:
```
✗ Validation failed:
- Missing required field
  Path: Person.Name.familyName
  Value: undefined
```
