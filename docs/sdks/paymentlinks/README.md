# PaymentLinks
(*paymentLinks*)

### Available Operations

* [cancelPaymentLink](#cancelpaymentlink) - Cancel Payment Link
* [createPaymentLink](#createpaymentlink) - Create Payment Link
* [getPaymentLinkDetails](#getpaymentlinkdetails) - Fetch Payment Link Details
* [getPaymentLinkOrders](#getpaymentlinkorders) - Get Orders for a Payment Link

## cancelPaymentLink

Use this API to cancel a payment link. No further payments can be done against a cancelled link. Only a link in ACTIVE status can be cancelled.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.paymentLinks.cancelPaymentLink({
    linkId: "string",
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CancelPaymentLinkRequest](../../sdk/models/operations/cancelpaymentlinkrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CancelPaymentLinkResponse](../../sdk/models/operations/cancelpaymentlinkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createPaymentLink

Use this API to create a new payment link. The created payment link url will be available in the API response parameter link_url.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.paymentLinks.createPaymentLink({
    createLinkRequest: {
      customerDetails: {
        customerPhone: "string",
      },
      linkAmount: 5411.24,
      linkCurrency: "string",
      linkId: "string",
      linkMeta: {},
      linkNotes: {
        "key_1": "value_1",
        "key_2": "value_2",
      },
      linkNotify: {},
      linkPurpose: "string",
    },
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreatePaymentLinkRequest](../../sdk/models/operations/createpaymentlinkrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreatePaymentLinkResponse](../../sdk/models/operations/createpaymentlinkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentLinkDetails

Use this API to view all details and status of a payment link.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.paymentLinks.getPaymentLinkDetails({
    linkId: "string",
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetPaymentLinkDetailsRequest](../../sdk/models/operations/getpaymentlinkdetailsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetPaymentLinkDetailsResponse](../../sdk/models/operations/getpaymentlinkdetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentLinkOrders

Use this API to view all order details for a payment link.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.paymentLinks.getPaymentLinkOrders({
    linkId: "string",
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPaymentLinkOrdersRequest](../../sdk/models/operations/getpaymentlinkordersrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPaymentLinkOrdersResponse](../../sdk/models/operations/getpaymentlinkordersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
