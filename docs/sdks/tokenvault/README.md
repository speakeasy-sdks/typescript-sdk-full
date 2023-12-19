# TokenVault
(*tokenVault*)

## Overview

Cashfree's token Vault helps you save cards and tokenize them in a PCI complaint manner. We support creation of network tokens which can be used across acquiring banks

### Available Operations

* [deleteSpecificSavedInstrument](#deletespecificsavedinstrument) - Delete Saved Instrument
* [fetchAllSavedInstruments](#fetchallsavedinstruments) - Fetch All Saved Instruments
* [fetchCryptogram](#fetchcryptogram) - Fetch cryptogram for saved instrument
* [fetchSpecificSavedInstrument](#fetchspecificsavedinstrument) - Fetch Single Saved Instrument

## deleteSpecificSavedInstrument

To delete a saved instrument for a customer id and instrument id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
    customerId: "string",
    instrumentId: "string",
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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteSpecificSavedInstrumentRequest](../../sdk/models/operations/deletespecificsavedinstrumentrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteSpecificSavedInstrumentResponse](../../sdk/models/operations/deletespecificsavedinstrumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchAllSavedInstruments

To get all saved instruments for a customer id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { InstrumentType } from "PG-Latest/dist/sdk/models/operations";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.tokenVault.fetchAllSavedInstruments({
    customerId: "string",
    instrumentType: InstrumentType.Card,
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FetchAllSavedInstrumentsRequest](../../sdk/models/operations/fetchallsavedinstrumentsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FetchAllSavedInstrumentsResponse](../../sdk/models/operations/fetchallsavedinstrumentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchCryptogram

To get the card network token, token expiry and cryptogram for a saved instrument using instrument id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.tokenVault.fetchCryptogram({
    customerId: "string",
    instrumentId: "string",
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FetchCryptogramRequest](../../sdk/models/operations/fetchcryptogramrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FetchCryptogramResponse](../../sdk/models/operations/fetchcryptogramresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetchSpecificSavedInstrument

To get specific saved instrument for a customer id and instrument id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.tokenVault.fetchSpecificSavedInstrument({
    customerId: "string",
    instrumentId: "string",
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

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FetchSpecificSavedInstrumentRequest](../../sdk/models/operations/fetchspecificsavedinstrumentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FetchSpecificSavedInstrumentResponse](../../sdk/models/operations/fetchspecificsavedinstrumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
