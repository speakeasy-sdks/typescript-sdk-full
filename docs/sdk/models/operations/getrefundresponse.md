# GetRefundResponse


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contentType`                                                       | *string*                                                            | :heavy_check_mark:                                                  | HTTP response content type for this operation                       |
| `errorResponse`                                                     | [shared.ErrorResponse](../../../sdk/models/shared/errorresponse.md) | :heavy_minus_sign:                                                  | Any bad or invalid request will lead to following error object      |
| `headers`                                                           | Record<string, *string*[]>                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `refundsEntity`                                                     | [shared.RefundsEntity](../../../sdk/models/shared/refundsentity.md) | :heavy_minus_sign:                                                  | OK                                                                  |
| `statusCode`                                                        | *number*                                                            | :heavy_check_mark:                                                  | HTTP response status code for this operation                        |
| `rawResponse`                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                  | Raw HTTP response; suitable for custom response parsing             |