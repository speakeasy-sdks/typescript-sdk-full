/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of authorization to run. Can be one of 'CAPTURE' , 'VOID'
 */
export enum AuthorizationRequestAction {
    Capture = "CAPTURE",
    Void = "VOID",
}

export class AuthorizationRequest extends SpeakeasyBase {
    /**
     * Type of authorization to run. Can be one of 'CAPTURE' , 'VOID'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action?: AuthorizationRequestAction;

    /**
     * The amount if you are running a 'CAPTURE'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;
}