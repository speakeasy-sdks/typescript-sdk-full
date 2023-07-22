# tokenVault

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
import { DeleteSpecificSavedInstrumentResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.tokenVault.deleteSpecificSavedInstrument({
  customerId: "perferendis",
  instrumentId: "magni",
  xApiVersion: "assumenda",
  xClientId: "ipsam",
  xClientSecret: "alias",
}).then((res: DeleteSpecificSavedInstrumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteSpecificSavedInstrumentRequest](../../models/operations/deletespecificsavedinstrumentrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteSpecificSavedInstrumentResponse](../../models/operations/deletespecificsavedinstrumentresponse.md)>**


## fetchAllSavedInstruments

To get all saved instruments for a customer id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { FetchAllSavedInstrumentsInstrumentType, FetchAllSavedInstrumentsResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.tokenVault.fetchAllSavedInstruments({
  customerId: "fugit",
  instrumentType: FetchAllSavedInstrumentsInstrumentType.Card,
  xApiVersion: "dolorum",
  xClientId: "excepturi",
  xClientSecret: "tempora",
}).then((res: FetchAllSavedInstrumentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.FetchAllSavedInstrumentsRequest](../../models/operations/fetchallsavedinstrumentsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.FetchAllSavedInstrumentsResponse](../../models/operations/fetchallsavedinstrumentsresponse.md)>**


## fetchCryptogram

To get the card network token, token expiry and cryptogram for a saved instrument using instrument id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { FetchCryptogramResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.tokenVault.fetchCryptogram({
  customerId: "facilis",
  instrumentId: "tempore",
  xApiVersion: "labore",
  xClientId: "delectus",
  xClientSecret: "eum",
}).then((res: FetchCryptogramResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FetchCryptogramRequest](../../models/operations/fetchcryptogramrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FetchCryptogramResponse](../../models/operations/fetchcryptogramresponse.md)>**


## fetchSpecificSavedInstrument

To get specific saved instrument for a customer id and instrument id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { FetchSpecificSavedInstrumentResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.tokenVault.fetchSpecificSavedInstrument({
  customerId: "non",
  instrumentId: "eligendi",
  xApiVersion: "sint",
  xClientId: "aliquid",
  xClientSecret: "provident",
}).then((res: FetchSpecificSavedInstrumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FetchSpecificSavedInstrumentRequest](../../models/operations/fetchspecificsavedinstrumentrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FetchSpecificSavedInstrumentResponse](../../models/operations/fetchspecificsavedinstrumentresponse.md)>**

