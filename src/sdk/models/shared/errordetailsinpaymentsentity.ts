/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The error details are present only for failed payments
 */
export class ErrorDetailsInPaymentsEntity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error_code" })
    errorCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "error_description" })
    errorDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "error_reason" })
    errorReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "error_source" })
    errorSource?: string;
}
