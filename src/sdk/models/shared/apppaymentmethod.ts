/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { App } from "./app";
import { Expose, Type } from "class-transformer";

export class AppPaymentMethod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => App)
    app: App;
}
