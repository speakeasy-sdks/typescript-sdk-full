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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.reconciliation.postRecon({
    fetchPGReconRequest: {
      filters: {
        endDate: "Bentley",
        startDate: "Bolingbrook Generic",
      },
      pagination: {
        limit: 405830,
      },
    },
    xClientId: "joule",
    xClientSecret: "Diesel Liaison",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.PostReconRequest](../../models/operations/postreconrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostReconResponse](../../models/operations/postreconresponse.md)>**


## postSettlementRecon

Use this API to get settlement reconciliation details using Settlement ID, settlement UTR or date range.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.reconciliation.postSettlementRecon({
    fetchSettlementReconRequest: {
      filters: {
        cfSettlementIds: [
          956121,
        ],
        settlementUtrs: [
          "Buckinghamshire",
        ],
      },
      pagination: {
        limit: 661166,
      },
    },
    xClientId: "pro",
    xClientSecret: "Southeast schemas",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostSettlementReconRequest](../../models/operations/postsettlementreconrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostSettlementReconResponse](../../models/operations/postsettlementreconresponse.md)>**

