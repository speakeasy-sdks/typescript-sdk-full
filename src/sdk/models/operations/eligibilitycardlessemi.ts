/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class EligibilityCardlessEMIRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    eligibilityCardlessEMIRequest?: shared.EligibilityCardlessEMIRequest;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-version" })
    xApiVersion?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-id" })
    xClientId: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-client-secret" })
    xClientSecret: string;
}

export class EligibilityCardlessEMIResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.EligibleCardlessEMIEntity })
    eligibleCardlessEMIEntities?: shared.EligibleCardlessEMIEntity[];

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}