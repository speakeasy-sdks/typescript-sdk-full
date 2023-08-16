# GetPaymentLinkOrdersResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `linkOrdersResponses`                                                    | [shared.LinkOrdersResponse](../../models/shared/linkordersresponse.md)[] | :heavy_minus_sign:                                                       | OK                                                                       |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |