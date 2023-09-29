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
import { CancelPaymentLinkResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.paymentLinks.cancelPaymentLink({
  linkId: "Mercury Michel",
  xApiVersion: "yellow",
  xClientId: "Draper sweltering Diesel",
  xClientSecret: "Maine",
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
      customerEmail: "grin Fort",
      customerName: "Licensed",
      customerPhone: "firewall Bicycle Jordan",
    },
    linkAmount: 4444.02,
    linkAutoReminders: false,
    linkCurrency: "reintermediate",
    linkExpiryTime: "Forward Reggae Designer",
    linkId: "fuga flexibility",
    linkMeta: {
      notifyUrl: "female",
      paymentMethods: "Northeast Blues Communications",
      returnUrl: "SUV Smart Clothing",
      upiIntent: false,
    },
    linkMinimumPartialAmount: 7331.25,
    linkNotes: {
      "quia": "Bermuda",
    },
    linkNotify: {
      sendEmail: false,
      sendSms: false,
    },
    linkPartialPayments: false,
    linkPurpose: "brr Account",
  },
  xApiVersion: "Colombia",
  xClientId: "firewall Bicycle Ferry",
  xClientSecret: "static",
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
  linkId: "Bayamon male Northwest",
  xApiVersion: "regional Hybrid ew",
  xClientId: "Operative",
  xClientSecret: "migrate Southwest",
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
  linkId: "North sophomore",
  xApiVersion: "Supervisor sue Tunnel",
  xClientId: "Account",
  xClientSecret: "Ferrari South Beauty",
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

