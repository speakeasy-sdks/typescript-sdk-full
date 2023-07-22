/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CardlessEMIQueries } from "./cardlessemiqueries";
import { Expose, Type } from "class-transformer";

export class EligibilityCardlessEMIRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "queries" })
    @Type(() => CardlessEMIQueries)
    queries: CardlessEMIQueries;
}
