/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OfferFilters } from "./offerfilters";
import { OfferQueries } from "./offerqueries";
import { Expose, Type } from "class-transformer";

export class EligibilityOffersRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    @Type(() => OfferFilters)
    filters?: OfferFilters;

    @SpeakeasyMetadata()
    @Expose({ name: "queries" })
    @Type(() => OfferQueries)
    queries: OfferQueries;
}
