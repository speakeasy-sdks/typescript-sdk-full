/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Card } from "./card";
import { Expose, Type } from "class-transformer";

/**
 * The card payment object is used to make payment using either plain card number, saved card instrument id or using cryptogram
 */
export class CardPaymentMethod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "card" })
    @Type(() => Card)
    card: Card;
}