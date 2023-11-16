/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class CreaterefundRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createRefundRequest?: shared.CreateRefundRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
    orderId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-version" })
    xApiVersion?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-id" })
    xClientId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-secret" })
    xClientSecret: string;
}

export class CreaterefundResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Any bad or invalid request will lead to following error object
     */
    @SpeakeasyMetadata()
    errorResponse?: shared.ErrorResponse;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    /**
     * Refund created
     */
    @SpeakeasyMetadata()
    refundsEntity?: shared.RefundsEntity;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
