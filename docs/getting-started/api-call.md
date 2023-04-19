---
sidebar_position: 4
---

# 3. API Call to Tire Manufacturer

Although API URLs may differ from one manufacturer to another, all GDSO members involved in the Tire
information service agreed on a standard format for:
* All public information
* Several private information
  
It means customers can expect the same structure, fields format and fields name, whichever manufacturer
they are requesting information from.

In addition to the two kinds of information mentioned above, a manufacturer API’s answer may also include
non-standardized private data. It is often related to very specific needs a customer could have, or to
difficulties in finding a common format given the nature of the information. Such data may still be
exchanged through the TIS although its structure may vary between tire makers. However, manufacturers
are aware that these additions shall not interfere with the format agreed on standardized information.

In this last section, we will describe how to build the request that needs to be sent to tire manufacturer’s API
to get data.

## 3.1. Unauthenticated request for Public data
This request will return only the Public information related to a tire. User identification is not necessary in
this case.

To build the request you will need:
* The tire manufacturer’s API URL obtained in step 1.3
* The tire’s RFID identifier that was scanned in Pure ID format. It must be appended at the end of the
URL.


```jsx title='Example of url to call, combining url given by the revolver and tire ID'
https://api.michelin.com/tid-ultim-v1/gdso/urn:epc:id:sgtin:086699.0337140.9413672970
```

**Possible Optimization:** If you want to retrieve information on several tires produced by the same
manufacturer, there is no need to go through the full resolution step 1.3 every time. You may re-use the API
URL that was provided the first time a resolution has been made for the same Company prefix.

## 3.2. Authenticated request for Private data
This request can return some private information in addition to Public information, depending on the
agreement you may have with the concerned manufacturer. User identification is mandatory in this case.

To build the request you will need:
* The tire manufacturer’s API URL obtained in step 1.3
* The Id Token obtained in step 2.2. It will be provided in the request’s header
* The tire’s RFID identifier that was scanned, in pure Id format. It must be appended at the end of the
URL.



```jsx title='Example of header using token obtained'
GET https://api.michelin.com/tid-ultim-v1/gdso/urn:epc:id:sgtin:086699.0337140.9413672970

Header:
- Authorization: ‘Bearer
eyJraWQiOiJWR0QrQlhsY0Z1ZFwvSDhRc3NHNCtnNnlxT1pKXC81T1RlWm9CeEt3RDhScmc9IiwiYWxnIjoiUlM
yNTYifQ.eyJhdF9oYXNoIjoiY1hjbkxDYjc2alVHd2VOMnlNQ3E1USIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF
3czppYW06OjQ2Nzc0NjQ2MDE2Nzpyb2xlXC9tYWludGFpbmVyLXVpLWdyb3VwLXJvbGUiXSwic3ViIjoiN2Y4ZD
czZmYtMDBhNi00MjRkLWE3NDctMDY3NGI2MGYzMDlhIiwiYXVkIjoiNjR2MTRndW5wZDloaWNmNHVmazY3dGF2O
GoiLCJjb2duaXRvOmdyb3VwcyI6WyJtYWludGFpbmVyLXVpIl0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1l
IjoxNjE0MDg4NjIyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5
jb21cL2V1LWNlbnRyYWwtMV9sTkZGaFdlRFkiLCJjb2duaXRvOnVzZXJuYW1lIjoiai5kdXJpZiIsImV4cCI6MT
YxNDA5MjIyMiwiaWF0IjoxNjE0MDg4NjIyLCJlbWFpbCI6Implcm9tZS5kdXJpZl9leHRAbWljaGVsaW4uY29tI
n0.pUNTrgjkB19gpCxFnKQAPTeTprZVzBCIQ6HbkY8xz0tPzyIg1BgsgoJFyB7xC9vw9t7b3oWheStB08eh9s9v
-2Vgh17W0kNWGBM4u-ZsfdCb7m4LXCjw4L0OIdfjxdXrPnZ2PC_w-
D20nLpr01prD3aDIZmjHP2v65WVcziGdn6-ORuY-jzLqUJn2-
v3EbcIwZs9i_r4sg4JPFjqYAMrcAi1UIi1WA2wV0zbIvaj3i-XGyTt-
LPthkine6vbCKLwrbEATajWOK9lhyKveSwpsdt34Fhxlw4dsP4hQ5pP5We-pCrW2wKs3-sD8srmhELAgmNYCrWIabipwyK-
e9g7Q’
```