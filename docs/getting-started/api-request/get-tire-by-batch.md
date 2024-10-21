---
sidebar_position: 3
---

# 3.3 Get data from a list of UII

For a logistics application wanting to retrieve data associated to the content of a delivery (1000 tires), using the GetTireBySgtin endpoint will require 1000 requests.
To dicrease the number of requests, we have standardized a new endpoint allowing request by 100 tires maximum.

## 3.3.1 Guidelines to manage the resolution for a list of UIIs

When you have a list of UIIs, you could have different brands, different company prefixes so potentially different URL endpoints to call.

:::tip
To facilitate the resolution of all possible URLs, we purpose to sort the list of UIIs by grouping by Company Prefix and make the resolution (as described in [1. ONS Resolution](../ons-resolution.md) for the first UII of each Company Prefix group. Then use the URL retrieved for each group for all UIIs of the group.
:::

To illustrate this behaviour, take this list for example :

```
- urn:epc:id:sgtin:12345678.04444.2222222
- urn:epc:id:sgtin:12345678.07777.123456
- urn:epc:id:sgtin:87654321.01111.10101010
- urn:epc:id:sgtin:87654321.02222.2468
```

We group by Company Prefix

```
- "12345678"
    * urn:epc:id:sgtin:12345678.04444.2222222
    * urn:epc:id:sgtin:12345678.07777.123456
- "87654321"
    * urn:epc:id:sgtin:87654321.01111.10101010
    * urn:epc:id:sgtin:87654321.02222.2468
```

As described in [1. ONS Resolution](../ons-resolution.md), we request the resolver to obtain the URL of **GetTireByBatch** endpoint for each group by resolving one of the UII of each group. This URL could be used for each UII of the group.

```
- "12345678"
    * urn:epc:id:sgtin:12345678.04444.2222222
    * urn:epc:id:sgtin:12345678.07777.123456
- "87654321"
    * urn:epc:id:sgtin:87654321.01111.10101010
    * urn:epc:id:sgtin:87654321.02222.2468
```

```
- "12345678" --> "https://example.com/tire"
    * urn:epc:id:sgtin:12345678.04444.2222222
    * urn:epc:id:sgtin:12345678.07777.123456
- "87654321" --> "https://example2.org/tires"
    * urn:epc:id:sgtin:87654321.01111.10101010
    * urn:epc:id:sgtin:87654321.02222.2468
```

# 3.3.2 Request

Following API specificiation with version > 2.X.X, a POST request is available (with a limit of 100 UIIs per call)

Based on the previous example, 2 POST requests are required.
```jsx
POST "https://example.com/tire"
[
    "urn:epc:id:sgtin:12345678.04444.2222222",
    "urn:epc:id:sgtin:12345678.07777.123456"
]

POST "https://example2.org/tires"
[
    "urn:epc:id:sgtin:87654321.01111.10101010",
    "urn:epc:id:sgtin:87654321.02222.2468"
]
```