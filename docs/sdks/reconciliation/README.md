# Reconciliation
(*reconciliation*)

### Available Operations

* [postRecon](#postrecon) - PG Reconciliation
* [postSettlementRecon](#postsettlementrecon) - Settlement Reconciliation

## postRecon

Use this API to get the payment gateway reconciliation details with date range.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.reconciliation.postRecon({
    fetchPGReconRequest: {
      filters: {
        endDate: "string",
        startDate: "string",
      },
      pagination: {
        limit: 85382,
      },
    },
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.PostReconRequest](../../sdk/models/operations/postreconrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostReconResponse](../../sdk/models/operations/postreconresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postSettlementRecon

Use this API to get settlement reconciliation details using Settlement ID, settlement UTR or date range.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.reconciliation.postSettlementRecon({
    fetchSettlementReconRequest: {
      filters: {
        cfSettlementIds: [
          956121,
        ],
        settlementUtrs: [
          "string",
        ],
      },
      pagination: {
        limit: 71166,
      },
    },
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
| `request`                                                                                          | [operations.PostSettlementReconRequest](../../sdk/models/operations/postsettlementreconrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostSettlementReconResponse](../../sdk/models/operations/postsettlementreconresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
