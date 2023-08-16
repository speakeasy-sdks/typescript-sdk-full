/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateOrderRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createOrderBackendRequest?: shared.CreateOrderBackendRequest;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-version" })
    xApiVersion?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-id" })
    xClientId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-secret" })
    xClientSecret: string;
}

export class CreateOrderResponse extends SpeakeasyBase {
    /**
     * API related Errors
     */
    @SpeakeasyMetadata()
    apiError?: shared.ApiError;

    /**
     * Authentication Error
     */
    @SpeakeasyMetadata()
    authenticationError?: shared.AuthenticationError;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Any bad or invalid request will lead to following error object
     */
    @SpeakeasyMetadata()
    errorResponse?: shared.ErrorResponse;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    ordersEntity?: shared.OrdersEntity;

    /**
     * Rate Limit Error
     */
    @SpeakeasyMetadata()
    rateLimitError?: shared.RateLimitError;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}