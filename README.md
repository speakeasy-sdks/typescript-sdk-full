# PG-Latest

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/typescript-sdk-full
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/typescript-sdk-full
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { PGLatest } from "PG-Latest";
import { OTPRequestResponse } from "PG-Latest/dist/sdk/models/operations";
import { OTPRequestAction } from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.authentication.otpRequest({
  otpRequest: {
    action: OTPRequestAction.ResendOtp,
    otp: "provident",
  },
  paymentId: "distinctio",
  xApiVersion: "quibusdam",
}).then((res: OTPRequestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Authentication](docs/sdks/authentication/README.md)

* [otpRequest](docs/sdks/authentication/README.md#otprequest) - Submit or Resend OTP

### [EligibilityAPIs](docs/sdks/eligibilityapis/README.md)

* [eligibilityCardlessEMI](docs/sdks/eligibilityapis/README.md#eligibilitycardlessemi) - Get eligible Cardless EMI
* [eligibilityOffer](docs/sdks/eligibilityapis/README.md#eligibilityoffer) - Get eligible Offers
* [eligibilityPaylater](docs/sdks/eligibilityapis/README.md#eligibilitypaylater) - Get eligible Paylater

### [Offers](docs/sdks/offers/README.md)

* [createOffer](docs/sdks/offers/README.md#createoffer) - Create Offer
* [getOffer](docs/sdks/offers/README.md#getoffer) - Get Offer by ID

### [Orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [getOrder](docs/sdks/orders/README.md#getorder) - Get Order
* [orderPay](docs/sdks/orders/README.md#orderpay) - Order Pay
* [preauthorization](docs/sdks/orders/README.md#preauthorization) - Preauthorization

### [PaymentLinks](docs/sdks/paymentlinks/README.md)

* [cancelPaymentLink](docs/sdks/paymentlinks/README.md#cancelpaymentlink) - Cancel Payment Link
* [createPaymentLink](docs/sdks/paymentlinks/README.md#createpaymentlink) - Create Payment Link
* [getPaymentLinkDetails](docs/sdks/paymentlinks/README.md#getpaymentlinkdetails) - Fetch Payment Link Details
* [getPaymentLinkOrders](docs/sdks/paymentlinks/README.md#getpaymentlinkorders) - Get Orders for a Payment Link

### [Payments](docs/sdks/payments/README.md)

* [getPaymentbyId](docs/sdks/payments/README.md#getpaymentbyid) - Get Payment by ID
* [getPaymentsfororder](docs/sdks/payments/README.md#getpaymentsfororder) - Get Payments for an Order

### [Reconciliation](docs/sdks/reconciliation/README.md)

* [postRecon](docs/sdks/reconciliation/README.md#postrecon) - PG Reconciliation
* [postSettlementRecon](docs/sdks/reconciliation/README.md#postsettlementrecon) - Settlement Reconciliation

### [Refunds](docs/sdks/refunds/README.md)

* [createrefund](docs/sdks/refunds/README.md#createrefund) - Create Refund
* [getRefund](docs/sdks/refunds/README.md#getrefund) - Get Refund
* [getallrefundsfororder](docs/sdks/refunds/README.md#getallrefundsfororder) - Get All Refunds for an Order

### [Settlements](docs/sdks/settlements/README.md)

* [getsettlements](docs/sdks/settlements/README.md#getsettlements) - Get Settlements by Order ID
* [postSettlements](docs/sdks/settlements/README.md#postsettlements) - Get All Settlements

### [TokenVault](docs/sdks/tokenvault/README.md)

* [deleteSpecificSavedInstrument](docs/sdks/tokenvault/README.md#deletespecificsavedinstrument) - Delete Saved Instrument
* [fetchAllSavedInstruments](docs/sdks/tokenvault/README.md#fetchallsavedinstruments) - Fetch All Saved Instruments
* [fetchCryptogram](docs/sdks/tokenvault/README.md#fetchcryptogram) - Fetch cryptogram for saved instrument
* [fetchSpecificSavedInstrument](docs/sdks/tokenvault/README.md#fetchspecificsavedinstrument) - Fetch Single Saved Instrument

### [SoftPOS](docs/sdks/softpos/README.md)

* [createTerminals](docs/sdks/softpos/README.md#createterminals) - Create Terminal
* [getTerminalByMobileNumber](docs/sdks/softpos/README.md#getterminalbymobilenumber) - Get terminal status using phone number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
