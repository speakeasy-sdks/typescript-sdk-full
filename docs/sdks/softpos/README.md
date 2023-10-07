# SoftPOS
(*softPOS*)

## Overview

softPOS' agent and order management system now supported by APIs

### Available Operations

* [createTerminals](#createterminals) - Create Terminal
* [getTerminalByMobileNumber](#getterminalbymobilenumber) - Get terminal status using phone number

## createTerminals

Use this API to create new terminals to use softPOS.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.softPOS.createTerminals({
    createTerminalRequest: {
      terminalName: "opium navigating Schaden",
      terminalPhoneNo: "parse Branding passage",
    },
    xClientId: "siemens",
    xClientSecret: "Account",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateTerminalsRequest](../../models/operations/createterminalsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateTerminalsResponse](../../models/operations/createterminalsresponse.md)>**


## getTerminalByMobileNumber

Use this API to view all details of a terminal.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.softPOS.getTerminalByMobileNumber({
    terminalPhoneNo: "coulomb Bedfordshire",
    xClientId: "Producer Trial",
    xClientSecret: "Maine Global",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTerminalByMobileNumberRequest](../../models/operations/getterminalbymobilenumberrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTerminalByMobileNumberResponse](../../models/operations/getterminalbymobilenumberresponse.md)>**

