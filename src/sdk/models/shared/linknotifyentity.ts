/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LinkNotifyEntity extends SpeakeasyBase {
    /**
     * If "true", Cashfree will send email on customer_email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "send_email" })
    sendEmail?: boolean;

    /**
     * If "true", Cashfree will send sms on customer_phone
     */
    @SpeakeasyMetadata()
    @Expose({ name: "send_sms" })
    sendSms?: boolean;
}
