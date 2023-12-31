/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SettlementsEntity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cf_payment_id" })
    cfPaymentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cf_settlement_id" })
    cfSettlementId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "entity" })
    entity?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_amount" })
    orderAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "order_id" })
    orderId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_time" })
    paymentTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_charge" })
    serviceCharge?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "service_tax" })
    serviceTax?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "settlement_amount" })
    settlementAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "settlement_currency" })
    settlementCurrency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "settlement_id" })
    settlementId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "transfer_id" })
    transferId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "transfer_time" })
    transferTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "transfer_utr" })
    transferUtr?: string;
}
