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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.settlements.getsettlements({
    orderId: "Liaison",
    xClientId: "Lawrencium aggregate black",
    xClientSecret: "Kids sole",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.settlements.postSettlements({
    fetchSettlementReconRequest: {
      filters: {
        cfSettlementIds: [
          297769,
        ],
        settlementUtrs: [
          "Southwest",
        ],
      },
      pagination: {
        limit: 542580,
      },
    },
    xClientId: "Southwest Stacy Planner",
    xClientSecret: "length program Senior",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PostSettlementsRequest](../../models/operations/postsettlementsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostSettlementsResponse](../../models/operations/postsettlementsresponse.md)>**

