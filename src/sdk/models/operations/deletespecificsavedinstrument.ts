/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteSpecificSavedInstrumentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instrument_id" })
    instrumentId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-version" })
    xApiVersion?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-id" })
    xClientId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-secret" })
    xClientSecret: string;
}

export class DeleteSpecificSavedInstrumentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Any bad or invalid request will lead to following error object
     */
    @SpeakeasyMetadata()
    errorResponse?: shared.ErrorResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    fetchAllSavedInstruments?: shared.FetchAllSavedInstruments;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
