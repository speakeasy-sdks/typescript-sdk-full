# EligibilityAPIs
(*eligibilityAPIs*)

### Available Operations

* [eligibilityCardlessEMI](#eligibilitycardlessemi) - Get eligible Cardless EMI
* [eligibilityOffer](#eligibilityoffer) - Get eligible Offers
* [eligibilityPaylater](#eligibilitypaylater) - Get eligible Paylater

## eligibilityCardlessEMI

Use this API to get eligible Cardless EMI Payment Methods for a customer on an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.eligibilityAPIs.eligibilityCardlessEMI({
    eligibilityCardlessEMIRequest: {
      queries: {
        amount: 100,
        customerDetails: {
          customerPhone: "9898989898",
        },
        orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
      },
    },
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EligibilityCardlessEMIRequest](../../sdk/models/operations/eligibilitycardlessemirequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EligibilityCardlessEMIResponse](../../sdk/models/operations/eligibilitycardlessemiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## eligibilityOffer

Use this API to get eligible offers for an order or amount.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { OfferType } from "PG-Latest/dist/sdk/models/shared";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.eligibilityAPIs.eligibilityOffer({
    eligibilityOffersRequest: {
      filters: {
        offerType: [
          OfferType.Cashback,
        ],
      },
      queries: {
        amount: 100,
        orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
      },
    },
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EligibilityOfferRequest](../../sdk/models/operations/eligibilityofferrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EligibilityOfferResponse](../../sdk/models/operations/eligibilityofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## eligibilityPaylater

Use this API to get eligible Paylater Payment Methods for a customer on an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.eligibilityAPIs.eligibilityPaylater({
    eligibilityCardlessEMIRequest: {
      queries: {
        amount: 100,
        customerDetails: {
          customerPhone: "9898989898",
        },
        orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
      },
    },
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EligibilityPaylaterRequest](../../sdk/models/operations/eligibilitypaylaterrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EligibilityPaylaterResponse](../../sdk/models/operations/eligibilitypaylaterresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
