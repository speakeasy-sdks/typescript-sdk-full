/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Authentication } from "./authentication";
import { EligibilityAPIs } from "./eligibilityapis";
import { Offers } from "./offers";
import { Orders } from "./orders";
import { PaymentLinks } from "./paymentlinks";
import { Payments } from "./payments";
import { Reconciliation } from "./reconciliation";
import { Refunds } from "./refunds";
import { Settlements } from "./settlements";
import { SoftPOS } from "./softpos";
import { TokenVault } from "./tokenvault";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Sandbox server
     */
    "https://sandbox.cashfree.com/pg",
    /**
     * Production server
     */
    "https://api.cashfree.com/pg",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2022-09-01";
    sdkVersion = "2.1.1";
    genVersion = "2.225.2";
    userAgent = "speakeasy-sdk/typescript 2.1.1 2.225.2 2022-09-01 PG-Latest";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class PGLatest {
    /**
     * Cashfree's token Vault helps you save cards and tokenize them in a PCI complaint manner. We support creation of network tokens which can be used across acquiring banks
     */
    public tokenVault: TokenVault;
    public eligibilityAPIs: EligibilityAPIs;
    public paymentLinks: PaymentLinks;
    public offers: Offers;
    public orders: Orders;
    /**
     * The Authentication API allows merchants to show a native screen and capture OTP on their own page and submit to Cashfree. This feature is only available on request.
     */
    public authentication: Authentication;
    public payments: Payments;
    public refunds: Refunds;
    public settlements: Settlements;
    public reconciliation: Reconciliation;
    /**
     * softPOS' agent and order management system now supported by APIs
     */
    public softPOS: SoftPOS;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.tokenVault = new TokenVault(this.sdkConfiguration);
        this.eligibilityAPIs = new EligibilityAPIs(this.sdkConfiguration);
        this.paymentLinks = new PaymentLinks(this.sdkConfiguration);
        this.offers = new Offers(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.authentication = new Authentication(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.refunds = new Refunds(this.sdkConfiguration);
        this.settlements = new Settlements(this.sdkConfiguration);
        this.reconciliation = new Reconciliation(this.sdkConfiguration);
        this.softPOS = new SoftPOS(this.sdkConfiguration);
    }
}
