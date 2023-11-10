/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * TnC Type for the Offer. It can be either `text` or `link`
 */
export enum OfferTncType {
    Link = "link",
    Post = "post",
}

export class OfferTnc extends SpeakeasyBase {
    /**
     * TnC Type for the Offer. It can be either `text` or `link`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "offer_tnc_type" })
    offerTncType: OfferTncType;

    /**
     * TnC for the Offer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "offer_tnc_value" })
    offerTncValue: string;
}
