/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaymentMethodUPIInPaymentsEntity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel: string;

    @SpeakeasyMetadata()
    @Expose({ name: "upi_id" })
    upiId?: string;
}