---
sidebar_position: 2
---

# 1. ONS resolution

GDSO’s Tire Information Service (TIS) does not own data from all RFID tires of every tire maker. Its role is to
guide the user to the appropriate Tire manufacturer’s service. It is this service, belonging to each maker,
that will provide the data under a standardized format that is shared with the others.
Therefore, the ONS resolution step is here to deliver the right API URL that a user would be able to call to
get the data about his tire.
To identify the company that made the tire that was scanned, it uses what is called a ‘company prefix’ which
is encoded in RFID identifiers. Based on this information, the TIS will know which company’s API has to be
called. The actions required to extract the company prefix and use the Resolution service are described
below.
## 1.1 Obtain a GS1 Identification Key from UII

1. Capture a valid EPC/UII by scanning a tire for example. A valid UII shall follow ISO 20909/20910
standards. According to these ISO standards, this identifier should be SGTIN-96 format (96 bits of data).
Example of SGTIN-96 (hexadecimal) captured by a system: 301854AAC1493D023119400A
Depending on the capture system level, EPC could be written in different ways: Raw (hexadecimal), Tag
URI, Pure Identity URI.

2. According to ONS 2.01 standard in order to query the DNS for an UII, the identifier form must be
converted to a GS1 Identification Key in order to convert it for ONS resolution.
In TIS context, GS1 Identification Key needed is GTIN (Global Trade Item Number).

![GS1Key translation](/img/gs1_key_translation.png)

How to know the size of Company Prefix/ Indicator digit & item reference column?
Please refer to the partition value and the following table.
At this stage, the GS1 Identification Key obtained is a GTIN: 008669903371400 .
It exists some libraries/tools to perform the conversion:
[S1 EPC encoding/decoding tools](https://www.gs1.org/services/epc-encoderdecoder)
[EPCtagCoder by jlcout](https://github.com/jlcout/epctagcoder)

## 1.2. Transform GS1 Identification Key to a valid key for ONS (Fully Qualified Domain Name)

In general, the format of the first valid key for ONS is:
The first valid key as follows:
Append a transformation of the GS1 Identification Key (GTIN obtained in the previous step 1.1) within
the AUS.
Strip the checksum digit, if applicable.
```jsx
00866990337140 0 --> 00866990337140
```
Hold the leading digit (in this case GTIN indicator digit) in its position
```jsx
0 0866990337140
```
Reverse all the remaining characters.
```jsx
0 0866990337140 --> 0 041733996680
```

For each character, append a ‘.’ (period).
```jsx
0041733996680 --> 0.0.4.1.7.3.3.9.9.6.6.8.0
```

Append the identification key type, in this case: “gtin“
```jsx
0.0.4.1.7.3.3.9.9.6.6.8.0.gtin
```

Append “.gs1.id.”
```jsx
0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.
```

Append a valid ONS root domain name, in TIS case: “testing.gdso.org “

```jsx
0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.testing.gdso.org
```

Root domain may be different depending on the environment you would like to use: Testing environment or
Production environment (See Annex 1 for the root domains).
## 1.3. Request the ONS to find the URL endpoint

1. Once you have the URL to request (result of step 1.2) you will have to launch a DNS NAPTR request to
resolve this URL. You should receive the following information in answer:


![DNS google answer](/img/example_dnsgoogle_resolver.png)

The most important information in this answer will be:

```jsx
<transformation of the identification key>.<identification key type>.<organisation
namespace>.id.<valid ONS Peer Root domain name>
```

The service name (in orange in the example below) /!\ Service name format may evolve in the
future.
The Regexp (in green in the example below) which contains the URL to the specific tire
manufacturer’s API

#### Example 1 (using google DNS resolve):
https://dns.google/resolve?name=0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.testing.gdso.org&type=NAPTR
Answer:

#### Example 2 (using ‘dig’ command):
Answer:

```jsx
{
"Status": 0,
"TC": false,
"RD": true,
"RA": true,
"AD": false,
"CD": false,
"Question": [
{
"name": "0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.testing.gdso.org.",
"type": 35
}
],
"Answer": [
{
"name": "0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.testing.gdso.org.",
"type": 35,
"TTL": 60,
"data": "0 0 u GetTireBySgtin !^.*$!https://indus.api.michelin.com/tid-ultimv1/
etrto/! ."
}
],
"Comment": "Response from 2600:9000:5304:7000::1."
}
```

```jsx
dig -t NAPTR 0.0.4.1.7.3.3.9.9.6.6.8.0.gtin.gs1.id.testing.gdso.org
```

![Resolver answer](/img/example_resolver_answer.png)

The resolution may sometimes return more than 1 service (unlike the example above).

1. Then you may select the appropriate service that you will use to request data from the tire’s
manufacturer in the following steps. The service to retrieve standard data on a tire MUST be named
GetTireBySgtin

1. Retrieve the regexp associated to the chosen service name:
Example: !^.*$! https://indus.api.michelingroup.com/gateway/ultim/1.0/etrto/!

1. Extract the API URL from it
Example: https://indus.api.michelingroup.com/gateway/ultim/1.0/etrto/
It exists some libraries/tools available to request TIS Resolver:
[Google DNS resolve (using HTTP request)](https://dns.google/resolve?name=%3Cvalid_key%3E&type=NAPTR)
[Java library with NAPTR request implementation](https://github.com/dnsjava/dnsjava)