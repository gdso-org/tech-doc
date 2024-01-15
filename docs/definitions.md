---
sidebar_position: 2
---

# Abbreviations, terms and definitions

## Public Access
Access to the service without any need to identify or authorize the requester. This will only return generic
information at the GTIN (Global Trade Item Number) level of the product (Stock Keeping Unit level). 
Allrequesters will receive the same message structure from all participating members (only 3 fields are considered mandatory in the answer and have to be provived by each tire manufacturer, because they are applicable whatever type of tires).

:::caution

With public access, there is `no Service Level Agreement` defined with tire manufactures. Take care if you imagine build a service using only this type of access.

:::

## Private Access (Authenticated Access)
Access to the service upon identification and authentication of the requester. This will return information
based on the authorization level of the requester and can include information at the SGTIN (Serialized GTIN
for the specific product) level. The resulting fields can be part of the Standardized Fields list or be
customized based on the specific agreements between the requester and the Tire Company.

## Standardized Fields
Standardized Fields are a list of tire related data for which the definition and format are clearly defined for
the information exchange by any party using the interface. This list will be updated regularly according to
stakeholder needs.

## Mandatory Fields
The list of mandatory fields is the subset of the Standardized Fields that is publicly accessible.
These fields shall be implemented by all the GDSO members (to be defined within
governance agreement) and are always delivered in the message structure to the requester.

3 mandatory fields :
- Brandname
- Commercial long description
- Geometry tire size

## User Interface
Local information system (mobile app, web app or back-office system) used to access the Tire Information
Service.

## User
Entity utilizing or intending to utilize the User Interface to get access to the Tire Information Service (i.e.
Application Requester).

## Tire Company/Manufacturer
A company that manufactures tire-related goods with the purpose of selling them either to the individual or
to a wholesaler, distributor, or retailer.
A tire manufacturer commonly produces tires on a large scale, using raw materials or parts that are then
assembled ready for distribution.