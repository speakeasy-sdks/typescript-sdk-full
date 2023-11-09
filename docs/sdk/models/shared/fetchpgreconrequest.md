# FetchPGReconRequest


## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filters`                                                                                                                                                                                                                                | [shared.Filters](../../../sdk/models/shared/filters.md)                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |
| `pagination`                                                                                                                                                                                                                             | [shared.Pagination](../../../sdk/models/shared/pagination.md)                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                       | To fetch the next set of settlements, pass the cursor received in the response to the next API call. <br/> To receive the data for the first time, pass the cursor as null. <br/> Limit would be number of settlements that you want to receive. |