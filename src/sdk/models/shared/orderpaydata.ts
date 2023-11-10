/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Payload extends SpeakeasyBase {}

export class OrderPayData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content_type" })
    contentType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "method" })
    method?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payload" })
    @Type(() => Payload)
    payload?: Payload;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
