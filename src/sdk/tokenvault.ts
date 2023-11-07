/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Cashfree's token Vault helps you save cards and tokenize them in a PCI complaint manner. We support creation of network tokens which can be used across acquiring banks
 */

export class TokenVault {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete Saved Instrument
     *
     * @remarks
     * To delete a saved instrument for a customer id and instrument id
     */
    async deleteSpecificSavedInstrument(
        req: operations.DeleteSpecificSavedInstrumentRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteSpecificSavedInstrumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSpecificSavedInstrumentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/customers/{customer_id}/instruments/{instrument_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteSpecificSavedInstrumentResponse =
            new operations.DeleteSpecificSavedInstrumentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fetchAllSavedInstruments = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.FetchAllSavedInstruments
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
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
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
     * Fetch All Saved Instruments
     *
     * @remarks
     * To get all saved instruments for a customer id
     */
    async fetchAllSavedInstruments(
        req: operations.FetchAllSavedInstrumentsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FetchAllSavedInstrumentsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchAllSavedInstrumentsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/customers/{customer_id}/instruments", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
        };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FetchAllSavedInstrumentsResponse =
            new operations.FetchAllSavedInstrumentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.classes = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.classes = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.FetchAllSavedInstruments,
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
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
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
     * Fetch cryptogram for saved instrument
     *
     * @remarks
     * To get the card network token, token expiry and cryptogram for a saved instrument using instrument id
     */
    async fetchCryptogram(
        req: operations.FetchCryptogramRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FetchCryptogramResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchCryptogramRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/customers/{customer_id}/instruments/{instrument_id}/cryptogram",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.FetchCryptogramResponse = new operations.FetchCryptogramResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
            headers: utils.getHeadersFromResponse(httpRes.headers),
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.cryptogram = utils.objectToClass(JSON.parse(decodedRes), shared.Cryptogram);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
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
     * Fetch Single Saved Instrument
     *
     * @remarks
     * To get specific saved instrument for a customer id and instrument id
     */
    async fetchSpecificSavedInstrument(
        req: operations.FetchSpecificSavedInstrumentRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FetchSpecificSavedInstrumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchSpecificSavedInstrumentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/customers/{customer_id}/instruments/{instrument_id}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.FetchSpecificSavedInstrumentResponse =
            new operations.FetchSpecificSavedInstrumentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fetchAllSavedInstruments = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.FetchAllSavedInstruments
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
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
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
