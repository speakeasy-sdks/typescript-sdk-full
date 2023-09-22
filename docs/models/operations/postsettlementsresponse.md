# PostSettlementsResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `errorResponse`                                                  | [shared.ErrorResponse](../../models/shared/errorresponse.md)     | :heavy_minus_sign:                                               | Any bad or invalid request will lead to following error object   |
| `fetchSettlement`                                                | [shared.FetchSettlement](../../models/shared/fetchsettlement.md) | :heavy_minus_sign:                                               | OK                                                               |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rawResponse`                                                    | [AxiosResponse](https://axios-http.com/docs/res_schema)          | :heavy_minus_sign:                                               | N/A                                                              |