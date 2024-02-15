# Settlements
(*settlements*)

### Available Operations

* [getsettlements](#getsettlements) - Get Settlements by Order ID
* [postSettlements](#postsettlements) - Get All Settlements

## getsettlements

Use this API to view all the settlements of a particular order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.settlements.getsettlements({
    orderId: "<value>",
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetsettlementsRequest](../../sdk/models/operations/getsettlementsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetsettlementsResponse](../../sdk/models/operations/getsettlementsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postSettlements

Use this API to get all settlement details by specifying the settlement ID, settlement UTR or date range.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.settlements.postSettlements({
    fetchSettlementReconRequest: {
      filters: {
        cfSettlementIds: [
          4234233,
        ],
        endDate: "2022-07-21T23:59:59Z",
        settlementUtrs: [
          "utr1",
          "utr2",
        ],
        startDate: "2022-07-20T00:00:00Z",
      },
      pagination: {
        cursor: "eyJzZWFyY2hBZnRlciI6eyJsaXN0IjpbMTg4NjcxNDVdLCJlbXB0eSI6ZmFsc2V9LCJyZWNvbkFQSVR5cGUiOiJMRURHRVIifQ==",
        limit: 10,
      },
    },
    xClientId: "<value>",
    xClientSecret: "<value>",
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
| `request`                                                                                  | [operations.PostSettlementsRequest](../../sdk/models/operations/postsettlementsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostSettlementsResponse](../../sdk/models/operations/postsettlementsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
