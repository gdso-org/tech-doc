---
sidebar_position: 2
---

# 3.2. Get data from one UII

Although API URLs may differ from one manufacturer to another, all GDSO members involved in the Tire
information service agreed on a standard format for:
* All public information
* Several private information
  
It means that end-user applications can expect the same structure, fields format and fields name, whichever manufacturer they are requesting information from.

In addition to the two kinds of information mentioned above, a manufacturer API’s answer may also include
non-standardized private data. It is often related to very specific needs that an end-user application could have, or to difficulties in finding a common format given the nature of the information. Such data may still be
exchanged through the TIS although its structure may vary between tire makers. However, manufacturers
are aware that these additions shall not interfere with the format agreed on standardized information.

In this last section, we will describe how to build the request that needs to be sent to tire manufacturer’s API
to get data.

## 3.2.1. Unauthenticated request for Public data
This request will return only the Public information related to a tire. User identification is not necessary in
this case.

To build the request you will need:
* The tire manufacturer’s API URL obtained in step 1.3
* The tire’s RFID identifier that was scanned in Pure ID format. It must be appended at the end of the
URL.


```jsx title='Example of url to call, combining url given by the revolver and tire ID'
https://example.com/tire/urn:epc:id:sgtin:12345678.04444.2222222
```

**Possible Optimization:** If you want to retrieve information on several tires produced by the same
manufacturer, there is no need to go through the full resolution step 1.3 every time. You may re-use the API
URL that was provided the first time a resolution has been made for the same Company prefix.

## 3.2.2 Authenticated request for Private data
This request can return some private information in addition to Public information, depending on the
agreement you may have with the concerned manufacturer. User identification is mandatory in this case.

To build the request you will need:
* The tire manufacturer’s API URL obtained in step 1.3
* The Id Token obtained in step 2.2. It will be provided in the request’s header
* The tire’s RFID identifier that was scanned, in pure Id format. It must be appended at the end of the
URL.

```jsx title='Example of header using token obtained'
GET https://example.com/tire/urn:epc:id:sgtin:12345678.04444.2222222

Header:
- Authorization: ‘Bearer
<<ID Token>>’
```