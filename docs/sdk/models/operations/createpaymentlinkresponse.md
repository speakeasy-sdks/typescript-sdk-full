# CreatePaymentLinkResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `headers`                                                         | Record<string, *string*[]>                                        | :heavy_check_mark:                                                | N/A                                                               |
| `linkResponse`                                                    | [shared.LinkResponse](../../../sdk/models/shared/linkresponse.md) | :heavy_minus_sign:                                                | Payment Link created                                              |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_check_mark:                                                | Raw HTTP response; suitable for custom response parsing           |