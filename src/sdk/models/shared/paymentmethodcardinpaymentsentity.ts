/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaymentMethodCardInPaymentsEntity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "card_bank_name" })
    cardBankName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "card_country" })
    cardCountry?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "card_network" })
    cardNetwork?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "card_network_reference_id" })
    cardNetworkReferenceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "card_number" })
    cardNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "card_type" })
    cardType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel?: string;
}
