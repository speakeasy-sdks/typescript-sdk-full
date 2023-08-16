/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class OrderPayRequest extends SpeakeasyBase {
    /**
     * This is required if any offers needs to be applied to the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "offer_id" })
    offerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_method" })
    paymentMethod: any;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_session_id" })
    paymentSessionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "save_instrument" })
    saveInstrument?: boolean;
}