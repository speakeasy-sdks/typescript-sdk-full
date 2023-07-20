# refunds

### Available Operations

* [createrefund](#createrefund) - Create Refund
* [getRefund](#getrefund) - Get Refund
* [getallrefundsfororder](#getallrefundsfororder) - Get All Refunds for an Order

## createrefund

Use this API to initiate refunds.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { CreaterefundResponse } from "PG-Latest/dist/sdk/models/operations";
import { CreateRefundRequestRefundSpeed } from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.refunds.createrefund({
  createRefundRequest: {
    refundAmount: 4417.11,
    refundId: "ut",
    refundNote: "maiores",
    refundSpeed: CreateRefundRequestRefundSpeed.Standard,
    refundSplits: [
      {
        amount: 2961.4,
        percentage: 4808.94,
        vendorId: "dicta",
      },
      {
        amount: 6886.61,
        percentage: 3179.83,
        vendorId: "accusamus",
      },
    ],
  },
  orderId: "commodi",
  xApiVersion: "repudiandae",
  xClientId: "quae",
  xClientSecret: "ipsum",
}).then((res: CreaterefundResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreaterefundRequest](../../models/operations/createrefundrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreaterefundResponse](../../models/operations/createrefundresponse.md)>**


## getRefund

Use this API to fetch a specific refund processed on your Cashfree Account.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetRefundResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.refunds.getRefund({
  orderId: "quidem",
  refundId: "molestias",
  xApiVersion: "excepturi",
  xClientId: "pariatur",
  xClientSecret: "modi",
}).then((res: GetRefundResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetRefundRequest](../../models/operations/getrefundrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetRefundResponse](../../models/operations/getrefundresponse.md)>**


## getallrefundsfororder

Use this API to fetch all refunds processed against an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetallrefundsfororderResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.refunds.getallrefundsfororder({
  orderId: "praesentium",
  xApiVersion: "rem",
  xClientId: "voluptates",
  xClientSecret: "quasi",
}).then((res: GetallrefundsfororderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetallrefundsfororderRequest](../../models/operations/getallrefundsfororderrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetallrefundsfororderResponse](../../models/operations/getallrefundsfororderresponse.md)>**

