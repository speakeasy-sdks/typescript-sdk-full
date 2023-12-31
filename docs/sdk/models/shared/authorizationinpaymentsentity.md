# AuthorizationInPaymentsEntity

The authorization details are present for payments which go through the preauthorization workflow. Or else this parameter will be null.


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `action`                                                              | [shared.Action](../../../sdk/models/shared/action.md)                 | :heavy_minus_sign:                                                    | One of CAPTURE or VOID                                                |
| `actionReference`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | CAPTURE or VOID reference number based on action                      |
| `actionTime`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | Time of action (CAPTURE or VOID)                                      |
| `approveBy`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Approve by time as passed in the authorization request (only for UPI) |
| `capturedAmount`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | The captured amount for this authorization request                    |
| `endTime`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | End time of this authorization hold (only for UPI)                    |
| `startTime`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Start time of this authorization hold (only for UPI)                  |
| `status`                                                              | [shared.Status](../../../sdk/models/shared/status.md)                 | :heavy_minus_sign:                                                    | One of SUCCESS or PENDING                                             |