---
sidebar_position: 2
---

# Abbreviations, terms and definitions

## Public Access
Access to the service without any need to identify or authorize the requester. This will only return generic
information at the GTIN (Global Trade Item Number) level of the product (Stock Keeping Unit level). All
requesters will receive the same message structure from all participating members, based on / utilizing a
defined subset of Standardized Fields (Core Set of Data).

## Private Access (Authenticated Access)
Access to the service upon identification and authentication of the requester. This will return information
based on the authorization level of the requester and can include information at the SGTIN (Serialized GTIN
for the specific product) level. The resulting fields can be part of the Standardized Fields list or be
customized based on the specific agreements between the requester and the Tire Company.

## Standardized Fields
Standardized Fields are a list of tire related data for which the definition and format are clearly defined for
the information exchange by any party using the interface. This list will be updated regularly according to
stakeholder needs.

## Core Set of Data
The Core Set of Data is the subset of the Standardized Fields that is publicly accessible.
The Core Set of Data shall be implemented by all the participating Tire Companies (to be defined within
governance agreement) and are always delivered in the message structure to the requester except when a
specific field does not apply to the considered tire category or when the information is not available from
one or more participating members. In that case the concerned fields will not be returned in the message.
Example: “load index for dual fitment” is currently not relevant for European Passenger Cars tires therefore,
the field will be missing in the API response.

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