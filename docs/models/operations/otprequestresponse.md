# OTPRequestResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `errorResponse`                                                      | [shared.ErrorResponse](../../models/shared/errorresponse.md)         | :heavy_minus_sign:                                                   | Any bad or invalid request will lead to following error object       |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `otpResponseEntity`                                                  | [shared.OTPResponseEntity](../../models/shared/otpresponseentity.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | N/A                                                                  |