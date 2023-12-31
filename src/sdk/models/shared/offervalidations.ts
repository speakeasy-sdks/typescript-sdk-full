/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class OfferValidations extends SpeakeasyBase {
    /**
     * Maximum amount of Offer that can be availed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_allowed" })
    maxAllowed: string;

    /**
     * Minimum Amount for Offer to be Applicable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "min_amount" })
    minAmount?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_method" })
    paymentMethod: any;
}
