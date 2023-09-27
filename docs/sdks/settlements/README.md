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
import { GetsettlementsResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.settlements.getsettlements({
  orderId: "dicta",
  xApiVersion: "harum",
  xClientId: "enim",
  xClientSecret: "accusamus",
}).then((res: GetsettlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetsettlementsRequest](../../models/operations/getsettlementsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetsettlementsResponse](../../models/operations/getsettlementsresponse.md)>**


## postSettlements

Use this API to get all settlement details by specifying the settlement ID, settlement UTR or date range.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { PostSettlementsResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.settlements.postSettlements({
  fetchSettlementReconRequest: {
    filters: {
      cfSettlementIds: [
        414263,
      ],
      endDate: "repudiandae",
      settlementUtrs: [
        "quae",
      ],
      startDate: "ipsum",
    },
    pagination: {
      cursor: "quidem",
      limit: 565189,
    },
  },
  xApiVersion: "excepturi",
  xClientId: "pariatur",
  xClientSecret: "modi",
}).then((res: PostSettlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PostSettlementsRequest](../../models/operations/postsettlementsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostSettlementsResponse](../../models/operations/postsettlementsresponse.md)>**

