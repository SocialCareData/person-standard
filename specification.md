# Describing a `Person`: Specification

|Field name|FHIR alignment|PDS alignment|Cardinality|Data Type & Format|Description & Reasoning|
|----------|--------------|-------------|-----------|------------------|-----------------------|
|`Identifier`|`Identifier.value`|`UNIQUE_REFERENCE` and `NHS_NO`|1 (MUST)|String(UTF-8)|A single unique identifier attached to the person. In our case, this will be a person’s NHS number.|
|`Name`|`Patient.name (HumanName)`|-|1 (MUST)|**Object**|A container for the parts of a person's name. **Reasoning**: Storing name parts separately is essential for correct sorting, searching, and formal communication. Avoids a single "Full Name" field. |
|↳ `Family Name`|`HumanName.family`|`FAMILY_NAME`|1 (MUST)|String(UTF-8)|The person's surname or family name. |
|↳ `Given Name(s)`|`HumanName.given`|`GIVEN_NAME`|1, Many (MUST)|String(UTF-8)|The person's first name, and any middle names. If multiple, they SHOULD be stored as separate entries if possible, or as a single space-separated string.|
|↳ `Preferred Name(s)`|-|`OTHER_GIVEN_NAME`|0, Many|String(UTF-8)|Any preferred names used by the person. **Reasoning**: although FHIR does not have a field for preferred names, this information is too crucial for social care situations for it to not be considered in this specification. |
|`Date of Birth`|`Patient.birthDate`|`DATE_OF_BIRTH`|1 (MUST)|Date (ISO8601: `YYY-MM-DD`)|The person's date of birth. The `YYYY-MM-DD` ISO8601 format is the international standard, utilised by the NHS for date records.|
|`Address`|`Patient.address (Address)`|-|0, Many (SHOULD)|**Object**|The physical location where the person can be contacted. A person can have more than one address (e.g., home, work). A structured address is required for validation, mapping, and mail services. Avoids a single "Full Address" text block. |
|↳ `Line 1`|`Address.line`|`ADDRESS_LINE1`|1 (MUST, if Address is present)|String(UTF-8)|Street address, c/o.|
|↳ `Line 2`|`Address.line`|`ADDRESS_LINE1`|0,1 (MAY)|String(UTF-8)|Apartment, suite, unit, building, floor, etc|
|↳ `City`|`Address.city`|-|1 (MUST, if Address is present)|String(UTF-8)|City, town, or village|
|↳ `Postal Code`|Address.postalCode|`POSTCODE`|1 (MUST, if Address is present)|String(UTF-8)|Postcode for address|
|↳ `UPRN`|-|-|0,1 (MAY)|Float16|The Unique Property Reference Number of the person's home address|
|↳ `USRN`|-|-|0,1 (MAY)|Float16|The Unique Stree Reference Number of the person's home street address|
|`Gender`|-|-|0,1 (MAY)|Code: {1=male (incl. trans male), 2=female (incl. trans female), 3=non-binary, 4=other, x=not known, z=not stated}|TThe person’s stated gender. This information does not pertain to biological sex.|

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Specification" class="web-button" target="_blank">Raise an issue about Specification</a>