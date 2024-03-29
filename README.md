# PG-Latest

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/typescript-sdk-full
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/typescript-sdk-full
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
    const sdk = new PGLatest();

    const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
        customerId: "<value>",
        instrumentId: "<value>",
        xClientId: "<value>",
        xClientSecret: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [tokenVault](docs/sdks/tokenvault/README.md)

* [deleteSpecificSavedInstrument](docs/sdks/tokenvault/README.md#deletespecificsavedinstrument) - Delete Saved Instrument
* [fetchAllSavedInstruments](docs/sdks/tokenvault/README.md#fetchallsavedinstruments) - Fetch All Saved Instruments
* [fetchCryptogram](docs/sdks/tokenvault/README.md#fetchcryptogram) - Fetch cryptogram for saved instrument
* [fetchSpecificSavedInstrument](docs/sdks/tokenvault/README.md#fetchspecificsavedinstrument) - Fetch Single Saved Instrument

### [eligibilityAPIs](docs/sdks/eligibilityapis/README.md)

* [eligibilityCardlessEMI](docs/sdks/eligibilityapis/README.md#eligibilitycardlessemi) - Get eligible Cardless EMI
* [eligibilityOffer](docs/sdks/eligibilityapis/README.md#eligibilityoffer) - Get eligible Offers
* [eligibilityPaylater](docs/sdks/eligibilityapis/README.md#eligibilitypaylater) - Get eligible Paylater

### [paymentLinks](docs/sdks/paymentlinks/README.md)

* [cancelPaymentLink](docs/sdks/paymentlinks/README.md#cancelpaymentlink) - Cancel Payment Link
* [createPaymentLink](docs/sdks/paymentlinks/README.md#createpaymentlink) - Create Payment Link
* [getPaymentLinkDetails](docs/sdks/paymentlinks/README.md#getpaymentlinkdetails) - Fetch Payment Link Details
* [getPaymentLinkOrders](docs/sdks/paymentlinks/README.md#getpaymentlinkorders) - Get Orders for a Payment Link

### [offers](docs/sdks/offers/README.md)

* [createOffer](docs/sdks/offers/README.md#createoffer) - Create Offer
* [getOffer](docs/sdks/offers/README.md#getoffer) - Get Offer by ID

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [getOrder](docs/sdks/orders/README.md#getorder) - Get Order
* [orderPay](docs/sdks/orders/README.md#orderpay) - Order Pay
* [preauthorization](docs/sdks/orders/README.md#preauthorization) - Preauthorization

### [authentication](docs/sdks/authentication/README.md)

* [otpRequest](docs/sdks/authentication/README.md#otprequest) - Submit or Resend OTP

### [payments](docs/sdks/payments/README.md)

* [getPaymentbyId](docs/sdks/payments/README.md#getpaymentbyid) - Get Payment by ID
* [getPaymentsfororder](docs/sdks/payments/README.md#getpaymentsfororder) - Get Payments for an Order

### [refunds](docs/sdks/refunds/README.md)

* [createrefund](docs/sdks/refunds/README.md#createrefund) - Create Refund
* [getRefund](docs/sdks/refunds/README.md#getrefund) - Get Refund
* [getallrefundsfororder](docs/sdks/refunds/README.md#getallrefundsfororder) - Get All Refunds for an Order

### [settlements](docs/sdks/settlements/README.md)

* [getsettlements](docs/sdks/settlements/README.md#getsettlements) - Get Settlements by Order ID
* [postSettlements](docs/sdks/settlements/README.md#postsettlements) - Get All Settlements

### [reconciliation](docs/sdks/reconciliation/README.md)

* [postRecon](docs/sdks/reconciliation/README.md#postrecon) - PG Reconciliation
* [postSettlementRecon](docs/sdks/reconciliation/README.md#postsettlementrecon) - Settlement Reconciliation

### [softPOS](docs/sdks/softpos/README.md)

* [createTerminals](docs/sdks/softpos/README.md#createterminals) - Create Terminal
* [getTerminalByMobileNumber](docs/sdks/softpos/README.md#getterminalbymobilenumber) - Get terminal status using phone number
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
    const sdk = new PGLatest();

    let res;
    try {
        res = await sdk.tokenVault.deleteSpecificSavedInstrument({
            customerId: "<value>",
            instrumentId: "<value>",
            xClientId: "<value>",
            xClientSecret: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://sandbox.cashfree.com/pg` | None |
| 1 | `https://api.cashfree.com/pg` | None |

#### Example

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
    const sdk = new PGLatest({
        serverIdx: 1,
    });

    const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
        customerId: "<value>",
        instrumentId: "<value>",
        xClientId: "<value>",
        xClientSecret: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PGLatest } from "PG-Latest";

async function run() {
    const sdk = new PGLatest({
        serverURL: "https://sandbox.cashfree.com/pg",
    });

    const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
        customerId: "<value>",
        instrumentId: "<value>",
        xClientId: "<value>",
        xClientSecret: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { PG-Latest } from "PGLatest";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new PGLatest({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
