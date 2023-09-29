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
import { PostReconResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.reconciliation.postRecon({
  fetchPGReconRequest: {
    filters: {
      endDate: "Bentley",
      startDate: "Bolingbrook Generic",
    },
    pagination: {
      cursor: "Shoes framework",
      limit: 805084,
    },
  },
  xApiVersion: "Liaison",
  xClientId: "calculating Universal",
  xClientSecret: "mostly Checking",
}).then((res: PostReconResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PostSettlementReconResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.reconciliation.postSettlementRecon({
  fetchSettlementReconRequest: {
    filters: {
      cfSettlementIds: [
        956121,
      ],
      endDate: "olive",
      settlementUtrs: [
        "Reynolds",
      ],
      startDate: "schemas Recumbent API",
    },
    pagination: {
      cursor: "wireless Movies",
      limit: 781173,
    },
  },
  xApiVersion: "or Bicycle navigate",
  xClientId: "Agent North",
  xClientSecret: "Savings",
}).then((res: PostSettlementReconResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostSettlementReconRequest](../../models/operations/postsettlementreconrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostSettlementReconResponse](../../models/operations/postsettlementreconresponse.md)>**

