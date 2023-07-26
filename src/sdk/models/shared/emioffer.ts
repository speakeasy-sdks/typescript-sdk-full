/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EMIOffer extends SpeakeasyBase {
    /**
     * Bank Name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bank_name" })
    bankName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tenures" })
    tenures?: number[];

    /**
     * Type of emi offer. Possible values are `credit_card_emi`, `debit_card_emi`, `cardless_emi`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}
