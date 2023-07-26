/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specify the provider through which the payment must be processed.
 */
export enum AppProvider {
    Gpay = "gpay",
    Phonepe = "phonepe",
    Ola = "ola",
    Paytm = "paytm",
    Amazon = "amazon",
    Airtel = "airtel",
    Freecharge = "freecharge",
    Mobikwik = "mobikwik",
    Jio = "jio",
}

export class App extends SpeakeasyBase {
    /**
     * Specify the channel through which the payment must be processed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel: string;

    /**
     * Customer phone number associated with a wallet for payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone: string;

    /**
     * Specify the provider through which the payment must be processed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: AppProvider;
}
