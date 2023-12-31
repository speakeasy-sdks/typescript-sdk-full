/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of discount
 */
export enum DiscountType {
    Flat = "flat",
    Percentage = "percentage",
}

export class DiscountDetails extends SpeakeasyBase {
    /**
     * Type of discount
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_type" })
    discountType: DiscountType;

    /**
     * Value of Discount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_value" })
    discountValue: string;

    /**
     * Maximum Value of Discount allowed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_discount_amount" })
    maxDiscountAmount: string;
}
