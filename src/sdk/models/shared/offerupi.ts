/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UPIOffer } from "./upioffer";
import { Expose, Type } from "class-transformer";

export class OfferUPI extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "upi" })
    @Type(() => UPIOffer)
    upi: UPIOffer;
}