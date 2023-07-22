/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PreauthorizationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    authorizationRequest?: shared.AuthorizationRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
    orderId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-version" })
    xApiVersion?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-id" })
    xClientId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-secret" })
    xClientSecret: string;
}

export class PreauthorizationResponse extends SpeakeasyBase {
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
    paymentsEntity?: shared.PaymentsEntity;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
