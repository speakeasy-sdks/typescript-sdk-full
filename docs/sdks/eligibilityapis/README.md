# EligibilityAPIs

### Available Operations

* [eligibilityCardlessEMI](#eligibilitycardlessemi) - Get eligible Cardless EMI
* [eligibilityOffer](#eligibilityoffer) - Get eligible Offers
* [eligibilityPaylater](#eligibilitypaylater) - Get eligible Paylater

## eligibilityCardlessEMI

Use this API to get eligible Cardless EMI Payment Methods for a customer on an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { EligibilityCardlessEMIResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.eligibilityAPIs.eligibilityCardlessEMI({
  eligibilityCardlessEMIRequest: {
    queries: {
      amount: 100,
      customerDetails: {
        customerPhone: "9898989898",
      },
      orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
    },
  },
  xApiVersion: "iure",
  xClientId: "magnam",
  xClientSecret: "debitis",
}).then((res: EligibilityCardlessEMIResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.EligibilityCardlessEMIRequest](../../models/operations/eligibilitycardlessemirequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.EligibilityCardlessEMIResponse](../../models/operations/eligibilitycardlessemiresponse.md)>**


## eligibilityOffer

Use this API to get eligible offers for an order or amount.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { EligibilityOfferResponse } from "PG-Latest/dist/sdk/models/operations";
import { OfferType } from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.eligibilityAPIs.eligibilityOffer({
  eligibilityOffersRequest: {
    filters: {
      offerType: [
        OfferType.Discount,
      ],
    },
    queries: {
      amount: 100,
      orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
    },
  },
  xApiVersion: "delectus",
  xClientId: "tempora",
  xClientSecret: "suscipit",
}).then((res: EligibilityOfferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EligibilityOfferRequest](../../models/operations/eligibilityofferrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EligibilityOfferResponse](../../models/operations/eligibilityofferresponse.md)>**


## eligibilityPaylater

Use this API to get eligible Paylater Payment Methods for a customer on an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { EligibilityPaylaterResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.eligibilityAPIs.eligibilityPaylater({
  eligibilityCardlessEMIRequest: {
    queries: {
      amount: 100,
      customerDetails: {
        customerPhone: "9898989898",
      },
      orderId: "order_413462PK1RI1IwYB1X69LgzUQWiSxYDF",
    },
  },
  xApiVersion: "molestiae",
  xClientId: "minus",
  xClientSecret: "placeat",
}).then((res: EligibilityPaylaterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EligibilityPaylaterRequest](../../models/operations/eligibilitypaylaterrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EligibilityPaylaterResponse](../../models/operations/eligibilitypaylaterresponse.md)>**

