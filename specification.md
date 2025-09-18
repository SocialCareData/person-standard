# Describing a `Person`: Specification

|Field name|FHIR alignment|PDS alignment|Cardinality|Data Type & Format|Description|
|----------|--------------|-------------|-----------|------------------|-----------|
|`Identifier`|`Identifier`||1, Many (MUST)|Object|Unique identifiers (IDs) associated with the person.|
|↳ `Identifier Value`|`Identifier.value`|`UNIQUE_REFERENCE`|1 (MUST)|String(UTF-8)|A single unique identifier attached to the person (e.g., NHS number).|
|↳ `Identifier System`|`Identifier.system`||1 (MUST)|URI|System that the identifier adheres to (e.g., https://fhir.nhs.uk/Id/nhs-number).|
|`Name`|`Patient.name (HumanName)`|-|1 (MUST)|Object|Container for name parts.|
|↳ `Family Name`|`HumanName.family`|`FAMILY_NAME`|1, Many (MUST)|String(UTF-8)|Surname or family name.|
|↳ `Given Name(s)`|`HumanName.given`|`GIVEN_NAME`|1, Many (MUST)|String(UTF-8)|First and any middle names. If multiple, store as separate entries if possible.|
|↳ `Preferred Name(s)`|-|`OTHER_GIVEN_NAME`|0, Many (MAY)|String(UTF-8)|Any preferred names used by the person.|
|↳ `Use`|`HumanName.use`||0,1 (SHOULD)|Code:{usual, official, temp, nickname, anonymous, old, maiden}|How this name instance is used.|
|`Date of Birth`|`Patient.birthDate`|`DATE_OF_BIRTH`|1 (MUST)|Date (ISO8601: `YYYY-MM-DD`)|The person's date of birth.|
|↳ `Birth Date Accuracy Indicator`|Extension:`date-accuracy-indicator`| - |0,1 (MAY)|Code: {e.g. AAA, AEU}|Indicates which parts of the date are known to be accurate (A), estimated (E) or unknown (U)|
|`Address`|`Patient.address (Address)`|-|0, Many (SHOULD)|Object|Physical location(s) where the person can be contacted.|
|↳ `Line 1`|`Address.line`|`ADDRESS_LINE1`|1 (MUST, if Address is present)|String(UTF-8)|Street address, c/o.|
|↳ `Line 2`|`Address.line`|`ADDRESS_LINE2`|0,1 (MAY)|String(UTF-8)|Apartment, suite, unit, building, floor, etc.|
|↳ `City`|`Address.city`|-|1 (MUST, if Address is present)|String(UTF-8)|City, town, or village.|
|↳ `Postal Code`|`Address.postalCode`|`POSTCODE`|1 (MUST, if Address is present)|String(UTF-8)|Postcode for address.|
|↳ `UPRN`|-|-|0,1 (MAY)|Float16|Unique Property Reference Number of the address.|
|↳ `USRN`|-|-|0,1 (MAY)|Float16|Unique Street Reference Number of the address.|
|`Gender`|Extension: UK Core `PersonStatedGenderCode`|`PERSON_STATED_GENDER_CODE`|0,1 (MUST)|CodeableConcept (NHS Person Stated Gender Code: {1=male, 2=female, 3=non-binary, 4=other, X=not known, Z=not stated})|The person’s stated gender. This information does not pertain to biological sex.|
|`Sex`|Extension: UK Core `PersonPhenotypicSex`|`PERSON_PHENOTYPIC_SEX`|0,1 (MAY)|CodeableConcept (NHS Person Phenotypic Sex: {1=male, 2=female, 3=indeterminate, X=not known, Z=not stated})|Observed phenotypic sex, where recorded.|


Notes
- Name: Store name parts separately to support correct sorting, searching, and formal communication; avoid a single “Full Name” text field.
- Preferred Name(s): While FHIR lacks a dedicated preferred-name field, capturing it is important in social care and person-centred contexts. The name.use field can be used to indicate 'usual' name or 'nickname' rather than 'official' or legal name.
- Address: Use a structured address to support validation, mapping, and mail services; avoid a single free-text address block. A person may have more than one address. FHIR's [address use](https://packages.fhir.org/guide/uk-core-implementation-guide/Home/Guidance/DataTypeGuidance/Address?version=0.1.0) field is somewhat limited but may be useful in describing different address types e.g. home, temporary.
- Gender vs Sex: We recognise this is an emotive topic. Our approach recognises government policy but ensures practitioners' and service delivery needs are met. Sex is used in matching in some systems.
- Birth date accuracy: Indicates where the parts of a date are unknown or estimated.


<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Specification" class="web-button" target="_blank">Raise an issue about Specification</a>
