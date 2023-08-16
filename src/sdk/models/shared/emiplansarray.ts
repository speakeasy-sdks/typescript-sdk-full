/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EMIPlansArray extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emi" })
    emi?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "interest_rate" })
    interestRate?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tenure" })
    tenure?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_interest" })
    totalInterest?: number;
}