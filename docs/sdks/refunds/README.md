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

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.refunds.createrefund({
    createRefundRequest: {
      refundAmount: 1,
      refundId: "refund_00912",
      refundNote: "refund note for reference",
      refundSpeed: CreateRefundRequestRefundSpeed.Standard,
      refundSplits: [
        {
          amount: 100.1,
          vendorId: "Vendor01",
        },
      ],
    },
    orderId: "<value>",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreaterefundRequest](../../sdk/models/operations/createrefundrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreaterefundResponse](../../sdk/models/operations/createrefundresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getRefund

Use this API to fetch a specific refund processed on your Cashfree Account.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.refunds.getRefund({
    orderId: "<value>",
    refundId: "<value>",
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetRefundRequest](../../sdk/models/operations/getrefundrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetRefundResponse](../../sdk/models/operations/getrefundresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getallrefundsfororder

Use this API to fetch all refunds processed against an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.refunds.getallrefundsfororder({
    orderId: "<value>",
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetallrefundsfororderRequest](../../sdk/models/operations/getallrefundsfororderrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetallrefundsfororderResponse](../../sdk/models/operations/getallrefundsfororderresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
