# payments

### Available Operations

* [getPaymentbyId](#getpaymentbyid) - Get Payment by ID
* [getPaymentsfororder](#getpaymentsfororder) - Get Payments for an Order

## getPaymentbyId

Use this API to view payment details of an order for a payment ID.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetPaymentbyIdResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.payments.getPaymentbyId({
  cfPaymentId: 338007,
  orderId: "vitae",
  xApiVersion: "laborum",
  xClientId: "animi",
  xClientSecret: "enim",
}).then((res: GetPaymentbyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetPaymentbyIdRequest](../../models/operations/getpaymentbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetPaymentbyIdResponse](../../models/operations/getpaymentbyidresponse.md)>**


## getPaymentsfororder

Use this API to view all payment details for an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetPaymentsfororderResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.payments.getPaymentsfororder({
  orderId: "odit",
  xApiVersion: "quo",
  xClientId: "sequi",
  xClientSecret: "tenetur",
}).then((res: GetPaymentsfororderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPaymentsfororderRequest](../../models/operations/getpaymentsfororderrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPaymentsfororderResponse](../../models/operations/getpaymentsfororderresponse.md)>**

