# Person Data Standard (Identification)

Status: Initial Draft
Effective Date: 2025-06-17

## Purpose
This Person Data Standard will standardise some of the data collected about individuals in the children’s social care system, focussing on those fields required to distinguish one person from another, and to identify relationships between people. Its goal is to unblock the use of ‘Single View’ systems, as an aid to multi-agency information sharing.  

* [Raise an issue about Purpose](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Purpose)

## Scope
This standard applies to the digital collection, storage, and exchange of key personal details to enable the Single View use case, as an enabler for multi-agency information sharing. 

* [Raise an issue about Scope](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Scope)

## Audience
This document is for developers of case management systems; single view systems or systems these interoperate with. 

* [Raise an issue about Audience](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Audience)

## Context
Social Finance, the Open Data Institute and Coram are working in partnership to develop data and interoperability standards for Children's Social Care. This work is funded by the Department for Education (DfE) as a part of the manifesto commitment to establish a Single Unique Identifier and secure its benefits for vulnerable children and young people.

This creation of these standards aims to make it easier for data created in one system to be accessed in another, and to be meaningful in another. It aims to deliver:  
- Improved safeguarding – with social workers in more LAs able to look up information in partners’ systems.  
- Improved analysis – by making it easier to analyse the interaction of different services. E.g. for understanding the impact of timely CAMHS provision (or its absence) on children’s journeys into care.  
- Reduced administration – with productivity-enhancing tools for social workers more easily able to integrate with Case Management Systems (CMS), and routine exchange and recording of notifications now easier to automate.  
  

We also plan to use the opportunity of developing national standards to normalise approaches to data sharing which implement privacy by design and by default.    

This work is being delivered in close coordination with the Department for Health and Social Care (DHSC) given the important overlaps with adult social care, and under the direction of a steering board which brings together a range of stakeholders.

* [Raise an issue about Context](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Context)


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
8. Develop Standards in the Open: Encourage check and challenge from suppliers, the sector and others. 

* [Raise an issue about Guiding Principles](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Scope+Principles)


## Conformance
The following keywords are used to define requirement levels:
- MUST: This word means that the definition is an absolute requirement of the specification. 
- SHOULD: This word means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course. 
Example: A conformant record MUST include at least a `Family Name`, `Given Name(s)`, and `Date of Birth`. 

* [Raise an issue about Conformance](https://github.com/SocialCareData/person-standard/issues/new?body=Issue+Regarding+People+Spec+Conformance)
