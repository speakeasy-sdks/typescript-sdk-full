# Refunds
(*refunds*)

### Available Operations

* [createrefund](#createrefund) - Create Refund
* [getRefund](#getrefund) - Get Refund
* [getallrefundsfororder](#getallrefundsfororder) - Get All Refunds for an Order

## createrefund

Use this API to initiate refunds.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { CreateRefundRequestRefundSpeed } from "PG-Latest/dist/sdk/models/shared";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.refunds.createrefund({
    createRefundRequest: {
      refundAmount: 567.71,
      refundId: "overstate Rutherfordium",
      refundSplits: [
        {},
      ],
    },
    orderId: "perferendis Account",
    xClientId: "hence Interactions invoice",
    xClientSecret: "Division program Miami",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.refunds.getRefund({
    orderId: "Connecticut East aliquid",
    refundId: "Chair",
    xClientId: "Elbert Personal Electric",
    xClientSecret: "Director Beach Borders",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.refunds.getallrefundsfororder({
    orderId: "trial South",
    xClientId: "Music",
    xClientSecret: "Recycled red",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetallrefundsfororderRequest](../../models/operations/getallrefundsfororderrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetallrefundsfororderResponse](../../models/operations/getallrefundsfororderresponse.md)>**

