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
  orderId: "Liaison",
  xApiVersion: "Lawrencium aggregate black",
  xClientId: "Kids sole",
  xClientSecret: "Modern Corporate redouble",
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
        297769,
      ],
      endDate: "provided",
      settlementUtrs: [
        "Interactions",
      ],
      startDate: "Bedfordshire Planner Representative",
    },
    pagination: {
      cursor: "program Senior",
      limit: 325622,
    },
  },
  xApiVersion: "generate Abbie South",
  xClientId: "incidentally up",
  xClientSecret: "Account Northwest",
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

