/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateTerminalRequest extends SpeakeasyBase {
    /**
     * merchant’s internal terminal id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terminal_id" })
    terminalId?: string;

    /**
     * terminal name to be assigned by merchants
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terminal_name" })
    terminalName: string;

    /**
     * phone number assigned to the terminal
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terminal_phone_no" })
    terminalPhoneNo: string;
}
