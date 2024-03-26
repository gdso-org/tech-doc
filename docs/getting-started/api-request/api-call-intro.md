---
sidebar_position: 1
---

# 3.1. Introduction

Although API URLs may differ from one manufacturer to another, all GDSO members involved in the Tire
information service agreed on a standard format for:
* All public information
* Several private information
  
It means that end-user applications can expect the same structure, fields format and fields name, whichever manufacturer they are requesting information from.

In addition to the two kinds of information mentioned above, a manufacturer API’s answer may also include
non-standardized private data. It is often related to very specific needs a end-user could have, or to
difficulties in finding a common format given the nature of the information. Such data may still be
exchanged through the TIS although its structure may vary between tire makers. However, manufacturers
are aware that these additions shall not interfere with the format agreed on standardized information.

In this last section, we will describe how to build the request that needs to be sent to tire manufacturer’s API
to get data.


| |GetTireBySgtin| GetTireByBatch (max. 100 UII) |
| --- | --- | --- |
|**Public Acess**  |	   Only 3 mandatory fields are returned | Not available |
|**Private Access** | X (depends on agreement with Tire anufacturers)  | X (depends on agreement with Tire manufacturers)  |