# FetchPGRecon


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `cursor`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Specifies from where the next set of settlement details should be fetched. |
| `data`                                                                     | [FetchPGReconData](../../models/shared/fetchpgrecondata.md)[]              | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Number of settlements you want to fetch in the next iteration.             |