# Data


## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `adjustment`                                                                                                                                      | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Amount that is adjusted from the settlement amount because of any credit/debit event such as refund, refund_reverse etc.                          |
| `adjustmentRemarks`                                                                                                                               | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Other adjustment remarks.                                                                                                                         |
| `amountSettled`                                                                                                                                   | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Net amount that is settled after considering the adjustments, settlement charge and tax.                                                          |
| `cfPaymentId`                                                                                                                                     | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Cashfree Payments unique ID to identify a payment.                                                                                                |
| `cfSettlementId`                                                                                                                                  | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Unique ID to identify the settlement.                                                                                                             |
| `closedInFavorOf`                                                                                                                                 | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Specifies whether the dispute was closed in favor of the merchant or customer. /n Possible values - Merchant, Customer                            |
| `customerEmail`                                                                                                                                   | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Customer email.                                                                                                                                   |
| `customerName`                                                                                                                                    | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Customer name.                                                                                                                                    |
| `customerPhone`                                                                                                                                   | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Customer phone number.                                                                                                                            |
| `disputeCategory`                                                                                                                                 | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Category of the dispute - Dispute code and the reason for dispute is shown.                                                                       |
| `disputeNote`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Note regarding the dispute.                                                                                                                       |
| `disputeResolvedOn`                                                                                                                               | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Date and time when the dispute was resolved.                                                                                                      |
| `entity`                                                                                                                                          | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Recon                                                                                                                                             |
| `eventAmount`                                                                                                                                     | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Amount of the event. Example, refund amount, dispute amount, payment amount, etc.                                                                 |
| `eventCurrency`                                                                                                                                   | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Curreny type - INR.                                                                                                                               |
| `eventId`                                                                                                                                         | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Unique ID associated with the event.                                                                                                              |
| `eventSettlementAmount`                                                                                                                           | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Amount that is part of the settlement corresponding to the event.                                                                                 |
| `eventStatus`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Status of the event. Example - SUCCESS, FAILED, PENDING, CANCELLED.                                                                               |
| `eventTime`                                                                                                                                       | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Time associated with the event. Example, transaction time, dispute initiation time                                                                |
| `eventType`                                                                                                                                       | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The event type can be SETTLEMENT, PAYMENT, REFUND, REFUND_REVERSAL, DISPUTE, DISPUTE_REVERSAL, CHARGEBACK, CHARGEBACK_REVERSAL, OTHER_ADJUSTMENT. |
| `orderAmount`                                                                                                                                     | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The amount which was passed at the order creation time.                                                                                           |
| `orderId`                                                                                                                                         | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Unique order ID. Alphanumeric and only '-' and '_' allowed.                                                                                       |
| `paymentAmount`                                                                                                                                   | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Payment amount captured.                                                                                                                          |
| `paymentFrom`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The start time of the time range of the payments considered for the settlement.                                                                   |
| `paymentServiceCharge`                                                                                                                            | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service charge applicable for the payment.                                                                                                        |
| `paymentServiceTax`                                                                                                                               | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service tax applicable on the payment.                                                                                                            |
| `paymentTill`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The end time of time range of the payments considered for the settlement.                                                                         |
| `paymentTime`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Date and time when the payment was initiated.                                                                                                     |
| `paymentUtr`                                                                                                                                      | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Unique transaction reference number of the payment.                                                                                               |
| `reason`                                                                                                                                          | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Reason for settlement failure.                                                                                                                    |
| `refundArn`                                                                                                                                       | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The bank reference number for the refund.                                                                                                         |
| `refundId`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | An unique ID to associate the refund with.                                                                                                        |
| `refundNote`                                                                                                                                      | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | A refund note for your reference.                                                                                                                 |
| `refundProcessedAt`                                                                                                                               | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Date and time when the refund was processed.                                                                                                      |
| `remarks`                                                                                                                                         | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Remarks on the settlement.                                                                                                                        |
| `saleType`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Indicates if it is CREDIT/DEBIT sale.                                                                                                             |
| `serviceCharge`                                                                                                                                   | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service charge applicable on the settlement amount.                                                                                               |
| `serviceTax`                                                                                                                                      | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service tax applicable on the settlement amount.                                                                                                  |
| `settlementCharge`                                                                                                                                | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Settlement charges applicable on the settlement.                                                                                                  |
| `settlementDate`                                                                                                                                  | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Date and time when the settlement was processed.                                                                                                  |
| `settlementInitiatedOn`                                                                                                                           | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Date and time when the settlement was initiated.                                                                                                  |
| `settlementTax`                                                                                                                                   | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Settlement tax applicable on the settlement.                                                                                                      |
| `settlementType`                                                                                                                                  | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Type of settlement. Possible values - Standard, Instant, On demand.                                                                               |
| `settlementUtr`                                                                                                                                   | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Unique transaction reference number of the settlement.                                                                                            |
| `splitServiceCharge`                                                                                                                              | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service charge that is applicable for splitting the payment.                                                                                      |
| `splitServiceTax`                                                                                                                                 | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Service tax applicable for splitting the amount to vendors.                                                                                       |
| `vendorCommission`                                                                                                                                | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Vendor commission applicable for this transaction.                                                                                                |