/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Terminal created
 */
export class TerminalResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "added_on" })
    addedOn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cf_terminal_id" })
    cfTerminalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_updated_on" })
    lastUpdatedOn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "teminal_id" })
    teminalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal_area" })
    terminalArea?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal_name" })
    terminalName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal_note" })
    terminalNote?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal_phone_no" })
    terminalPhoneNo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "terminal_status" })
    terminalStatus?: string;
}