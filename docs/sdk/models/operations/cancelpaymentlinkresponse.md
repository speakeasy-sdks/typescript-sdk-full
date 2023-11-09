# CancelPaymentLinkResponse


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `linkCancelledError`                                                                | [shared.LinkCancelledError](../../../sdk/models/shared/linkcancellederror.md)       | :heavy_minus_sign:                                                                  | Cannot cancel Payment Link if status is not ACTIVE                                  |
| `linkCancelledResponse`                                                             | [shared.LinkCancelledResponse](../../../sdk/models/shared/linkcancelledresponse.md) | :heavy_minus_sign:                                                                  | Payment Link cancelled                                                              |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)                             | :heavy_minus_sign:                                                                  | Raw HTTP response; suitable for custom response parsing                             |