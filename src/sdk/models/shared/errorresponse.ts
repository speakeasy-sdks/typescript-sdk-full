/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * One of ["invalid_request_error", "authentication_error", "rate_limit_error", "validation_error", "api_error"]
 */
export enum ErrorResponseType {
    InvalidRequestError = "invalid_request_error",
    AuthenticationError = "authentication_error",
    RateLimitError = "rate_limit_error",
    ValidationError = "validation_error",
    ApiError = "api_error",
}

/**
 * Any bad or invalid request will lead to following error object
 */
export class ErrorResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * One of ["invalid_request_error", "authentication_error", "rate_limit_error", "validation_error", "api_error"]
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ErrorResponseType;
}