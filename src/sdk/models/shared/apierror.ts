/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * api_error
 */
export enum ApiErrorType {
    ApiError = "api_error",
}

/**
 * API related Errors
 */
export class ApiError extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * api_error
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ApiErrorType;
}