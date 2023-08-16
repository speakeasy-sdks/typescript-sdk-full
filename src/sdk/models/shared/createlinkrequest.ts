/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LinkCustomerDetailsEntity } from "./linkcustomerdetailsentity";
import { LinkMetaEntity } from "./linkmetaentity";
import { LinkNotifyEntity } from "./linknotifyentity";
import { Expose, Type } from "class-transformer";

export class CreateLinkRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer_details" })
    @Type(() => LinkCustomerDetailsEntity)
    customerDetails: LinkCustomerDetailsEntity;

    /**
     * Amount to be collected using this link. Provide upto two decimals for paise.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_amount" })
    linkAmount: number;

    /**
     * If "true", reminders will be sent to customers for collecting payments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_auto_reminders" })
    linkAutoReminders?: boolean;

    /**
     * Currency for the payment link. Default is INR. Contact care@cashfree.com to enable new currencies.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_currency" })
    linkCurrency: string;

    /**
     * Time after which the link expires. Customers will not be able to make the payment beyond the time specified here. You can provide them in a valid ISO 8601 time format. Default is 30 days.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_expiry_time" })
    linkExpiryTime?: string;

    /**
     * Unique Identifier (provided by merchant) for the Link. Alphanumeric and only - and _ allowed (50 character limit). Use this for other link-related APIs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_id" })
    linkId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "link_meta" })
    @Type(() => LinkMetaEntity)
    linkMeta?: LinkMetaEntity;

    /**
     * Minimum amount in first installment that needs to be paid by the customer if partial payments are enabled. This should be less than the link_amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_minimum_partial_amount" })
    linkMinimumPartialAmount?: number;

    /**
     * Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_notes" })
    linkNotes?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "link_notify" })
    @Type(() => LinkNotifyEntity)
    linkNotify?: LinkNotifyEntity;

    /**
     * If "true", customer can make partial payments for the link.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_partial_payments" })
    linkPartialPayments?: boolean;

    /**
     * A brief description for which payment must be collected. This is shown to the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_purpose" })
    linkPurpose: string;
}