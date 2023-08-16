/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaylaterOffer } from "./paylateroffer";
import { Expose, Type } from "class-transformer";

export class OfferPaylater extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "paylater" })
    @Type(() => PaylaterOffer)
    paylater: PaylaterOffer;
}