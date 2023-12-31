/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Cryptogram extends SpeakeasyBase {
    /**
     * last 4 digits of original card number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card_display" })
    cardDisplay?: string;

    /**
     * token pan expiry month
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card_expiry_mm" })
    cardExpiryMm?: string;

    /**
     * token pan expiry year
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card_expiry_yy" })
    cardExpiryYy?: string;

    /**
     * token pan number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card_number" })
    cardNumber?: string;

    /**
     * cryptogram
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cryptogram" })
    cryptogram?: string;

    /**
     * instrument_id of saved instrument
     */
    @SpeakeasyMetadata()
    @Expose({ name: "instrument_id" })
    instrumentId?: string;

    /**
     * TRID issued by card networks
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_requestor_id" })
    tokenRequestorId?: string;
}
