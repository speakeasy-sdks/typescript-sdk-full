/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VendorSplit } from "./vendorsplit";
import { Expose, Type } from "class-transformer";

/**
 * Speed at which the refund is processed. It's an optional field with default being STANDARD
 */
export enum CreateRefundRequestRefundSpeed {
    Standard = "STANDARD",
    Instant = "INSTANT",
}

export class CreateRefundRequest extends SpeakeasyBase {
    /**
     * Amount to be refunded. Should be lesser than or equal to the transaction amount. (Decimals allowed)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund_amount" })
    refundAmount: number;

    /**
     * An unique ID to associate the refund with. Provie alphanumeric values
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund_id" })
    refundId: string;

    /**
     * A refund note for your reference.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund_note" })
    refundNote?: string;

    /**
     * Speed at which the refund is processed. It's an optional field with default being STANDARD
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund_speed" })
    refundSpeed?: CreateRefundRequestRefundSpeed;

    @SpeakeasyMetadata({ elemType: VendorSplit })
    @Expose({ name: "refund_splits" })
    @Type(() => VendorSplit)
    refundSplits?: VendorSplit[];
}