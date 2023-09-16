# PaymentLinks

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
import { CancelPaymentLinkResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.paymentLinks.cancelPaymentLink({
  linkId: "perferendis",
  xApiVersion: "ad",
  xClientId: "natus",
  xClientSecret: "sed",
}).then((res: CancelPaymentLinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CancelPaymentLinkRequest](../../models/operations/cancelpaymentlinkrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CancelPaymentLinkResponse](../../models/operations/cancelpaymentlinkresponse.md)>**


## createPaymentLink

Use this API to create a new payment link. The created payment link url will be available in the API response parameter link_url.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { CreatePaymentLinkResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.paymentLinks.createPaymentLink({
  createLinkRequest: {
    customerDetails: {
      customerEmail: "iste",
      customerName: "dolor",
      customerPhone: "natus",
    },
    linkAmount: 3864.89,
    linkAutoReminders: false,
    linkCurrency: "hic",
    linkExpiryTime: "saepe",
    linkId: "fuga",
    linkMeta: {
      notifyUrl: "in",
      paymentMethods: "corporis",
      returnUrl: "iste",
      upiIntent: false,
    },
    linkMinimumPartialAmount: 4370.32,
    linkNotes: {
      "saepe": "quidem",
    },
    linkNotify: {
      sendEmail: false,
      sendSms: false,
    },
    linkPartialPayments: false,
    linkPurpose: "architecto",
  },
  xApiVersion: "ipsa",
  xClientId: "reiciendis",
  xClientSecret: "est",
}).then((res: CreatePaymentLinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreatePaymentLinkRequest](../../models/operations/createpaymentlinkrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreatePaymentLinkResponse](../../models/operations/createpaymentlinkresponse.md)>**


## getPaymentLinkDetails

Use this API to view all details and status of a payment link.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetPaymentLinkDetailsResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.paymentLinks.getPaymentLinkDetails({
  linkId: "mollitia",
  xApiVersion: "laborum",
  xClientId: "dolores",
  xClientSecret: "dolorem",
}).then((res: GetPaymentLinkDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPaymentLinkDetailsRequest](../../models/operations/getpaymentlinkdetailsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPaymentLinkDetailsResponse](../../models/operations/getpaymentlinkdetailsresponse.md)>**


## getPaymentLinkOrders

Use this API to view all order details for a payment link.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetPaymentLinkOrdersResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.paymentLinks.getPaymentLinkOrders({
  linkId: "corporis",
  xApiVersion: "explicabo",
  xClientId: "nobis",
  xClientSecret: "enim",
}).then((res: GetPaymentLinkOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPaymentLinkOrdersRequest](../../models/operations/getpaymentlinkordersrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPaymentLinkOrdersResponse](../../models/operations/getpaymentlinkordersresponse.md)>**

