/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class PaymentLinks {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Cancel Payment Link
     *
     * @remarks
     * Use this API to cancel a payment link. No further payments can be done against a cancelled link. Only a link in ACTIVE status can be cancelled.
     */
    async cancelPaymentLink(
        req: operations.CancelPaymentLinkRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CancelPaymentLinkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CancelPaymentLinkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/links/{link_id}/cancel", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CancelPaymentLinkResponse = new operations.CancelPaymentLinkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
            headers: utils.getHeadersFromResponse(httpRes.headers),
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkCancelledResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkCancelledResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkCancelledError = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkCancelledError
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create Payment Link
     *
     * @remarks
     * Use this API to create a new payment link. The created payment link url will be available in the API response parameter link_url.
     */
    async createPaymentLink(
        req: operations.CreatePaymentLinkRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreatePaymentLinkResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreatePaymentLinkRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/links";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createLinkRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreatePaymentLinkResponse = new operations.CreatePaymentLinkResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
            headers: utils.getHeadersFromResponse(httpRes.headers),
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Fetch Payment Link Details
     *
     * @remarks
     * Use this API to view all details and status of a payment link.
     */
    async getPaymentLinkDetails(
        req: operations.GetPaymentLinkDetailsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPaymentLinkDetailsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentLinkDetailsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/links/{link_id}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetPaymentLinkDetailsResponse =
            new operations.GetPaymentLinkDetailsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get Orders for a Payment Link
     *
     * @remarks
     * Use this API to view all order details for a payment link.
     */
    async getPaymentLinkOrders(
        req: operations.GetPaymentLinkOrdersRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPaymentLinkOrdersResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentLinkOrdersRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/links/{link_id}/orders", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetPaymentLinkOrdersResponse =
            new operations.GetPaymentLinkOrdersResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkOrdersResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.linkOrdersResponses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkOrdersResponse,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
