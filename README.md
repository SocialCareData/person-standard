# Person Data Standard (Identification)

## Status

Version 0.2 - ready for testing

Effective Date: 2025-09-11

The MAIS Standards Working Group on 3rd September 2025 agreed to take this initial version of the specification forward to testing with implementers.

## Purpose
This Person Data Standard will standardise some of the data collected about individuals in children’s and adult social care systems, focussing initially on those fields required to distinguish one person from another, and to identify relationships between people. Its goal is to unblock the use of ‘Single View’ systems, as an aid to multi-agency information sharing.

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Purpose" class="web-button" target="_blank">Raise an issue about Purpose</a>

## Scope
This standard applies to the digital collection, storage, and exchange of key personal details to enable the Single View use case, as an enabler for multi-agency information sharing.

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Scope" class="web-button" target="_blank">Raise an issue about Scope</a>

## Audience
This document is for all personnel involved in collecting, storing and processing person data, including social workers and administrative staff, data teams, and the developers of case management systems, single view systems or systems these interoperate with.

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Audience" class="web-button" target="_blank">Raise an issue about Audience</a>

## Alignment with other specifications

In creating this specification, we reviewed the following:

- Adult Social Care Minimum Operational Data Standard (MODS)
- PRSB Healthy Child Record Standard
- PRSB Core Information Standard (CIS)
- Fast Health Interoperability Resource (FHIR, patient resource, not person)
- Department for Education Common Basic Dataset (CBDS)
- schema.org
- iStandUK Scalable Approach to Vulnerability via Interoperability (SAVVI)

Our person specification is based on a reduced set of attributes from the FHIR 'Patient' resource, a foundational standard for describing individuals receiving services across health and social care sectors. We also relate data elements to the Person Demographics Service (PDS), the national NHS database for patient details.

## Conformance
The following keywords are used to define requirement levels:
  - MUST: This word means that the definition is an absolute requirement of the specification.
  - SHOULD: This word means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.
  - MAY: This word means that an item is truly optional. An implementation which does not include a particular option MUST be prepared to interoperate with another implementation which does include the option, though perhaps with reduced functionality.

Example: A conformant record MUST include at least a `Family Name`, `Given Name(s)`, and `Date of Birth`.

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Conformance" class="web-button" target="_blank">Raise an issue about Conformance</a>

## Context

Social Finance, the Open Data Institute and Coram are working in partnership to develop data and interoperability standards for Children's and Adults’ Social Care. This work is jointly funded by the Department for Education (DfE) and Department of Health and Social Care (DHSC) and is under the direction of a steering board which brings together a range of stakeholders.

This creation of these standards aims to make it easier for data created in one system to be accessed in another, and to be meaningful in another. It aims to deliver:
- Improved safeguarding – with social workers in more LAs able to look up information in partners’ systems.
- Improved analysis – by making it easier to analyse the interaction of different services.
- Reduced administration – with productivity-enhancing tools for social workers more easily able to integrate with Case Management Systems (CMS), and routine exchange and recording of notifications now easier to automate.

We also plan to use the opportunity of developing national standards to normalise approaches to data sharing which implement privacy by design and by default.

<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Context" class="web-button" target="_blank">Raise an issue about Context</a>

## Guiding principles

1. **Privacy By Design**: The data specifications must be developed to allow controlled access to data preserving privacy by default.
2. **Security By Design**: The specifications must ensure information flow between parties adheres to security and confidentiality best practices.
3. **Unambiguous Personal Data Representation**: The data specifications must enable the unambiguous identification of individuals and ensure that data about a person is always accurately linked to the person.
4. **Enabling Quality Data**: The data specifications must define clear expectations for data types, formats, and permissible values, enabling systems to generate, exchange, and consume high-quality, reliable information that is fit for its intended purpose.
5. **Collaborative Data Exchange**: The data specifications must promote seamless interoperability and collaborative data sharing among stakeholders.
6. **Simplicity**: The data specifications must prioritise ease of understanding and implementation. Complexity should only be introduced when to address specific professional or regulatory requirements.
7. **Reuse Existing Standards**: Where possible, specifications should align with UK implementations of HL7 FHIR, an established international standard widely used in health systems and increasingly in social care. We will align with FHIR unless:
    - It affects our ability to deliver the use case
    - The burden of change (for suppliers) is too great.
    - Counterparties are unable to adopt it.
    - There is a prescribed government standard.
    In which case, we will aim to select from another, established data standard in the fields of health and social care, before resorting to defining new standards.
8. **Develop Standards in the Open**: Encourage check and challenge from suppliers, the sector and others.


<a href="https://github.com/SocialCareData/person-standard/issues/new?template=content_issue.yml&title=Issue+regarding+People+Spec+Principles" class="web-button" target="_blank">Raise an issue about Guiding Principles</a>



