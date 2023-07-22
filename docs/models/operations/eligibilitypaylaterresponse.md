# EligibilityPaylaterResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `eligiblePaylaters`                                                  | [shared.EligiblePaylater](../../models/shared/eligiblepaylater.md)[] | :heavy_minus_sign:                                                   | OK                                                                   |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |