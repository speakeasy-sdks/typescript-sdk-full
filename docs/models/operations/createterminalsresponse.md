# CreateTerminalsResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse](https://axios-http.com/docs/res_schema)            | :heavy_minus_sign:                                                 | N/A                                                                |
| `terminalResponse`                                                 | [shared.TerminalResponse](../../models/shared/terminalresponse.md) | :heavy_minus_sign:                                                 | Terminal created                                                   |