/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RefundSpeed extends SpeakeasyBase {
    /**
     * Accepted speed of refund.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accepted" })
    accepted?: string;

    /**
     * Error message, if any for refund_speed request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Processed speed of refund.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processed" })
    processed?: string;

    /**
     * Requested speed of refund.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requested" })
    requested?: string;
}