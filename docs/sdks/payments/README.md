# Payments
(*payments*)

### Available Operations

* [getPaymentbyId](#getpaymentbyid) - Get Payment by ID
* [getPaymentsfororder](#getpaymentsfororder) - Get Payments for an Order

## getPaymentbyId

Use this API to view payment details of an order for a payment ID.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.payments.getPaymentbyId({
    cfPaymentId: 310675,
    orderId: "string",
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPaymentbyIdRequest](../../sdk/models/operations/getpaymentbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPaymentbyIdResponse](../../sdk/models/operations/getpaymentbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsfororder

Use this API to view all payment details for an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.payments.getPaymentsfororder({
    orderId: "string",
    xClientId: "string",
    xClientSecret: "string",
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
| `request`                                                                                          | [operations.GetPaymentsfororderRequest](../../sdk/models/operations/getpaymentsfororderrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPaymentsfororderResponse](../../sdk/models/operations/getpaymentsfororderresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
