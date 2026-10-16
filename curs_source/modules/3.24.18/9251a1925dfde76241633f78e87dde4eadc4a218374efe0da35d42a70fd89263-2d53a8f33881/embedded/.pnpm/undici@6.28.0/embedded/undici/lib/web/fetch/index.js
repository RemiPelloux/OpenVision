import { require_util8 } from "../../core/util.js";
import { require_global4 } from "../../global.js";
import { require_body2 } from "./body.js";
import { require_constants11 } from "./constants.js";
import { require_data_url } from "./data-url.js";
import { require_headers5 } from "./headers.js";
import { require_request4 } from "./request.js";
import { require_response2 } from "./response.js";
import { require_symbols7 } from "./symbols.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_fetch2_cache;
export function require_fetch2() {
if (__wakaru_require_fetch2_cache) return __wakaru_require_fetch2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_fetch2_cache = module2;
"use strict";
var { makeNetworkError, makeAppropriateNetworkError, filterResponse, makeResponse, fromInnerResponse } = require_response2();
var { HeadersList } = require_headers5();
var { Request: Request2, cloneRequest } = require_request4();
var zlib2 = require("node:zlib");
var { bytesMatch, makePolicyContainer, clonePolicyContainer, requestBadPort, TAOCheck, appendRequestOriginHeader, responseLocationURL, requestCurrentURL, setRequestReferrerPolicyOnRedirect, tryUpgradeRequestToAPotentiallyTrustworthyURL, createOpaqueTimingInfo, appendFetchMetadata, corsCheck, crossOriginResourcePolicyCheck, determineRequestsReferrer, coarsenedSharedCurrentTime, createDeferredPromise, isBlobLike, sameOrigin, isCancelled, isAborted: isAborted3, isErrorLike: isErrorLike2, fullyReadBody, readableStreamClose, isomorphicEncode, urlIsLocal, urlIsHttpHttpsScheme, urlHasHttpsScheme, clampAndCoarsenConnectionTimingInfo, simpleRangeHeaderValue, buildContentRange, createInflate, extractMimeType } = require_util9();
var { kState, kDispatcher } = require_symbols7();
var assert4 = require("node:assert");
var { safelyExtractBody, extractBody } = require_body2();
var { redirectStatusSet, nullBodyStatus, safeMethodsSet, requestBodyHeader, subresourceSet } = require_constants11();
var EE = require("node:events");
var { Readable: Readable2, pipeline: pipeline2, finished: finished2 } = require("node:stream");
var { addAbortListener, isErrored, isReadable, bufferToLowerCasedHeaderName } = require_util8();
var { dataURLProcessor, serializeAMimeType, minimizeSupportedMimeType } = require_data_url();
var { getGlobalDispatcher } = require_global4();
var { webidl } = require_webidl2();
var { STATUS_CODES } = require("node:http");
var GET_OR_HEAD = [
    "GET",
    "HEAD"
];
var defaultUserAgent = typeof __UNDICI_IS_NODE__ !== "undefined" || typeof esbuildDetection !== "undefined" ? "node" : "undici";
var resolveObjectURL;
var Fetch = class extends EE {
    constructor(dispatcher){
        super();
        this.dispatcher = dispatcher;
        this.connection = null;
        this.dump = false;
        this.state = "ongoing";
    }
    terminate(reason) {
        if (this.state !== "ongoing") {
            return;
        }
        this.state = "terminated";
        this.connection?.destroy(reason);
        this.emit("terminated", reason);
    }
    abort(error3) {
        if (this.state !== "ongoing") {
            return;
        }
        this.state = "aborted";
        if (!error3) {
            error3 = new DOMException("The operation was aborted.", "AbortError");
        }
        this.serializedAbortReason = error3;
        this.connection?.destroy(error3);
        this.emit("terminated", error3);
    }
};
function handleFetchDone(response) {
    finalizeAndReportTiming(response, "fetch");
}
function fetch2(input, init = void 0) {
    webidl.argumentLengthCheck(arguments, 1, "globalThis.fetch");
    let p2 = createDeferredPromise();
    let requestObject;
    try {
        requestObject = new Request2(input, init);
    } catch (e) {
        p2.reject(e);
        return p2.promise;
    }
    const request3 = requestObject[kState];
    if (requestObject.signal.aborted) {
        abortFetch(p2, request3, null, requestObject.signal.reason);
        return p2.promise;
    }
    const globalObject = request3.client.globalObject;
    if (globalObject?.constructor?.name === "ServiceWorkerGlobalScope") {
        request3.serviceWorkers = "none";
    }
    let responseObject = null;
    let locallyAborted = false;
    let controller = null;
    addAbortListener(requestObject.signal, ()=>{
        locallyAborted = true;
        assert4(controller != null);
        controller.abort(requestObject.signal.reason);
        const realResponse = responseObject?.deref();
        abortFetch(p2, request3, realResponse, requestObject.signal.reason);
    });
    const processResponse = (response)=>{
        if (locallyAborted) {
            return;
        }
        if (response.aborted) {
            abortFetch(p2, request3, responseObject, controller.serializedAbortReason);
            return;
        }
        if (response.type === "error") {
            p2.reject(new TypeError("fetch failed", {
                cause: response.error
            }));
            return;
        }
        responseObject = new WeakRef(fromInnerResponse(response, "immutable"));
        p2.resolve(responseObject.deref());
        p2 = null;
    };
    controller = fetching({
        request: request3,
        processResponseEndOfBody: handleFetchDone,
        processResponse,
        dispatcher: requestObject[kDispatcher]
    });
    return p2.promise;
}
function finalizeAndReportTiming(response, initiatorType = "other") {
    if (response.type === "error" && response.aborted) {
        return;
    }
    if (!response.urlList?.length) {
        return;
    }
    const originalURL = response.urlList[0];
    let timingInfo = response.timingInfo;
    let cacheState = response.cacheState;
    if (!urlIsHttpHttpsScheme(originalURL)) {
        return;
    }
    if (timingInfo === null) {
        return;
    }
    if (!response.timingAllowPassed) {
        timingInfo = createOpaqueTimingInfo({
            startTime: timingInfo.startTime
        });
        cacheState = "";
    }
    timingInfo.endTime = coarsenedSharedCurrentTime();
    response.timingInfo = timingInfo;
    markResourceTiming(timingInfo, originalURL.href, initiatorType, globalThis, cacheState);
}
var markResourceTiming = performance.markResourceTiming;
function abortFetch(p2, request3, responseObject, error3) {
    if (p2) {
        p2.reject(error3);
    }
    if (request3.body != null && isReadable(request3.body?.stream)) {
        request3.body.stream.cancel(error3).catch((err)=>{
            if (err.code === "ERR_INVALID_STATE") {
                return;
            }
            throw err;
        });
    }
    if (responseObject == null) {
        return;
    }
    const response = responseObject[kState];
    if (response.body != null && isReadable(response.body?.stream)) {
        response.body.stream.cancel(error3).catch((err)=>{
            if (err.code === "ERR_INVALID_STATE") {
                return;
            }
            throw err;
        });
    }
}
function fetching({ request: request3, processRequestBodyChunkLength, processRequestEndOfBody, processResponse, processResponseEndOfBody, processResponseConsumeBody, useParallelQueue = false, dispatcher = getGlobalDispatcher() }) {
    assert4(dispatcher);
    let taskDestination = null;
    let crossOriginIsolatedCapability = false;
    if (request3.client != null) {
        taskDestination = request3.client.globalObject;
        crossOriginIsolatedCapability = request3.client.crossOriginIsolatedCapability;
    }
    const currentTime = coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
    const timingInfo = createOpaqueTimingInfo({
        startTime: currentTime
    });
    const fetchParams = {
        controller: new Fetch(dispatcher),
        request: request3,
        timingInfo,
        processRequestBodyChunkLength,
        processRequestEndOfBody,
        processResponse,
        processResponseConsumeBody,
        processResponseEndOfBody,
        taskDestination,
        crossOriginIsolatedCapability
    };
    assert4(!request3.body || request3.body.stream);
    if (request3.window === "client") {
        request3.window = request3.client?.globalObject?.constructor?.name === "Window" ? request3.client : "no-window";
    }
    if (request3.origin === "client") {
        request3.origin = request3.client.origin;
    }
    if (request3.policyContainer === "client") {
        if (request3.client != null) {
            request3.policyContainer = clonePolicyContainer(request3.client.policyContainer);
        } else {
            request3.policyContainer = makePolicyContainer();
        }
    }
    if (!request3.headersList.contains("accept", true)) {
        const value = "*/*";
        request3.headersList.append("accept", value, true);
    }
    if (!request3.headersList.contains("accept-language", true)) {
        request3.headersList.append("accept-language", "*", true);
    }
    if (request3.priority === null) {}
    if (subresourceSet.has(request3.destination)) {}
    mainFetch(fetchParams).catch((err)=>{
        fetchParams.controller.terminate(err);
    });
    return fetchParams.controller;
}
async function mainFetch(fetchParams, recursive = false) {
    const request3 = fetchParams.request;
    let response = null;
    if (request3.localURLsOnly && !urlIsLocal(requestCurrentURL(request3))) {
        response = makeNetworkError("local URLs only");
    }
    tryUpgradeRequestToAPotentiallyTrustworthyURL(request3);
    if (requestBadPort(request3) === "blocked") {
        response = makeNetworkError("bad port");
    }
    if (request3.referrerPolicy === "") {
        request3.referrerPolicy = request3.policyContainer.referrerPolicy;
    }
    if (request3.referrer !== "no-referrer") {
        request3.referrer = determineRequestsReferrer(request3);
    }
    if (response === null) {
        response = await (async ()=>{
            const currentURL = requestCurrentURL(request3);
            if (sameOrigin(currentURL, request3.url) && request3.responseTainting === "basic" || currentURL.protocol === "data:" || (request3.mode === "navigate" || request3.mode === "websocket")) {
                request3.responseTainting = "basic";
                return await schemeFetch(fetchParams);
            }
            if (request3.mode === "same-origin") {
                return makeNetworkError('request mode cannot be "same-origin"');
            }
            if (request3.mode === "no-cors") {
                if (request3.redirect !== "follow") {
                    return makeNetworkError('redirect mode cannot be "follow" for "no-cors" request');
                }
                request3.responseTainting = "opaque";
                return await schemeFetch(fetchParams);
            }
            if (!urlIsHttpHttpsScheme(requestCurrentURL(request3))) {
                return makeNetworkError("URL scheme must be a HTTP(S) scheme");
            }
            request3.responseTainting = "cors";
            return await httpFetch(fetchParams);
        })();
    }
    if (recursive) {
        return response;
    }
    if (response.status !== 0 && !response.internalResponse) {
        if (request3.responseTainting === "cors") {}
        if (request3.responseTainting === "basic") {
            response = filterResponse(response, "basic");
        } else if (request3.responseTainting === "cors") {
            response = filterResponse(response, "cors");
        } else if (request3.responseTainting === "opaque") {
            response = filterResponse(response, "opaque");
        } else {
            assert4(false);
        }
    }
    let internalResponse = response.status === 0 ? response : response.internalResponse;
    if (internalResponse.urlList.length === 0) {
        internalResponse.urlList.push(...request3.urlList);
    }
    if (!request3.timingAllowFailed) {
        response.timingAllowPassed = true;
    }
    if (response.type === "opaque" && internalResponse.status === 206 && internalResponse.rangeRequested && !request3.headers.contains("range", true)) {
        response = internalResponse = makeNetworkError();
    }
    if (response.status !== 0 && (request3.method === "HEAD" || request3.method === "CONNECT" || nullBodyStatus.includes(internalResponse.status))) {
        internalResponse.body = null;
        fetchParams.controller.dump = true;
    }
    if (request3.integrity) {
        const processBodyError = (reason)=>fetchFinale(fetchParams, makeNetworkError(reason));
        if (request3.responseTainting === "opaque" || response.body == null) {
            processBodyError(response.error);
            return;
        }
        const processBody = (bytes)=>{
            if (!bytesMatch(bytes, request3.integrity)) {
                processBodyError("integrity mismatch");
                return;
            }
            response.body = safelyExtractBody(bytes)[0];
            fetchFinale(fetchParams, response);
        };
        await fullyReadBody(response.body, processBody, processBodyError);
    } else {
        fetchFinale(fetchParams, response);
    }
}
function schemeFetch(fetchParams) {
    if (isCancelled(fetchParams) && fetchParams.request.redirectCount === 0) {
        return Promise.resolve(makeAppropriateNetworkError(fetchParams));
    }
    const { request: request3 } = fetchParams;
    const { protocol: scheme } = requestCurrentURL(request3);
    switch(scheme){
        case "about:":
            {
                return Promise.resolve(makeNetworkError("about scheme is not supported"));
            }
        case "blob:":
            {
                if (!resolveObjectURL) {
                    resolveObjectURL = require("node:buffer").resolveObjectURL;
                }
                const blobURLEntry = requestCurrentURL(request3);
                if (blobURLEntry.search.length !== 0) {
                    return Promise.resolve(makeNetworkError("NetworkError when attempting to fetch resource."));
                }
                const blob = resolveObjectURL(blobURLEntry.toString());
                if (request3.method !== "GET" || !isBlobLike(blob)) {
                    return Promise.resolve(makeNetworkError("invalid method"));
                }
                const response = makeResponse();
                const fullLength = blob.size;
                const serializedFullLength = isomorphicEncode(`${fullLength}`);
                const type2 = blob.type;
                if (!request3.headersList.contains("range", true)) {
                    const bodyWithType = extractBody(blob);
                    response.statusText = "OK";
                    response.body = bodyWithType[0];
                    response.headersList.set("content-length", serializedFullLength, true);
                    response.headersList.set("content-type", type2, true);
                } else {
                    response.rangeRequested = true;
                    const rangeHeader = request3.headersList.get("range", true);
                    const rangeValue = simpleRangeHeaderValue(rangeHeader, true);
                    if (rangeValue === "failure") {
                        return Promise.resolve(makeNetworkError("failed to fetch the data URL"));
                    }
                    let { rangeStartValue: rangeStart, rangeEndValue: rangeEnd } = rangeValue;
                    if (rangeStart === null) {
                        rangeStart = fullLength - rangeEnd;
                        rangeEnd = rangeStart + rangeEnd - 1;
                    } else {
                        if (rangeStart >= fullLength) {
                            return Promise.resolve(makeNetworkError("Range start is greater than the blob's size."));
                        }
                        if (rangeEnd === null || rangeEnd >= fullLength) {
                            rangeEnd = fullLength - 1;
                        }
                    }
                    const slicedBlob = blob.slice(rangeStart, rangeEnd, type2);
                    const slicedBodyWithType = extractBody(slicedBlob);
                    response.body = slicedBodyWithType[0];
                    const serializedSlicedLength = isomorphicEncode(`${slicedBlob.size}`);
                    const contentRange = buildContentRange(rangeStart, rangeEnd, fullLength);
                    response.status = 206;
                    response.statusText = "Partial Content";
                    response.headersList.set("content-length", serializedSlicedLength, true);
                    response.headersList.set("content-type", type2, true);
                    response.headersList.set("content-range", contentRange, true);
                }
                return Promise.resolve(response);
            }
        case "data:":
            {
                const currentURL = requestCurrentURL(request3);
                const dataURLStruct = dataURLProcessor(currentURL);
                if (dataURLStruct === "failure") {
                    return Promise.resolve(makeNetworkError("failed to fetch the data URL"));
                }
                const mimeType = serializeAMimeType(dataURLStruct.mimeType);
                return Promise.resolve(makeResponse({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: mimeType
                            }
                        ]
                    ],
                    body: safelyExtractBody(dataURLStruct.body)[0]
                }));
            }
        case "file:":
            {
                return Promise.resolve(makeNetworkError("not implemented... yet..."));
            }
        case "http:":
        case "https:":
            {
                return httpFetch(fetchParams).catch((err)=>makeNetworkError(err));
            }
        default:
            {
                return Promise.resolve(makeNetworkError("unknown scheme"));
            }
    }
}
function finalizeResponse(fetchParams, response) {
    fetchParams.request.done = true;
    if (fetchParams.processResponseDone != null) {
        queueMicrotask(()=>fetchParams.processResponseDone(response));
    }
}
function fetchFinale(fetchParams, response) {
    let timingInfo = fetchParams.timingInfo;
    const processResponseEndOfBody = ()=>{
        const unsafeEndTime = Date.now();
        if (fetchParams.request.destination === "document") {
            fetchParams.controller.fullTimingInfo = timingInfo;
        }
        fetchParams.controller.reportTimingSteps = ()=>{
            if (fetchParams.request.url.protocol !== "https:") {
                return;
            }
            timingInfo.endTime = unsafeEndTime;
            let cacheState = response.cacheState;
            const bodyInfo = response.bodyInfo;
            if (!response.timingAllowPassed) {
                timingInfo = createOpaqueTimingInfo(timingInfo);
                cacheState = "";
            }
            let responseStatus = 0;
            if (fetchParams.request.mode !== "navigator" || !response.hasCrossOriginRedirects) {
                responseStatus = response.status;
                const mimeType = extractMimeType(response.headersList);
                if (mimeType !== "failure") {
                    bodyInfo.contentType = minimizeSupportedMimeType(mimeType);
                }
            }
            if (fetchParams.request.initiatorType != null) {
                markResourceTiming(timingInfo, fetchParams.request.url.href, fetchParams.request.initiatorType, globalThis, cacheState, bodyInfo, responseStatus);
            }
        };
        const processResponseEndOfBodyTask = ()=>{
            fetchParams.request.done = true;
            if (fetchParams.processResponseEndOfBody != null) {
                queueMicrotask(()=>fetchParams.processResponseEndOfBody(response));
            }
            if (fetchParams.request.initiatorType != null) {
                fetchParams.controller.reportTimingSteps();
            }
        };
        queueMicrotask(()=>processResponseEndOfBodyTask());
    };
    if (fetchParams.processResponse != null) {
        queueMicrotask(()=>{
            fetchParams.processResponse(response);
            fetchParams.processResponse = null;
        });
    }
    const internalResponse = response.type === "error" ? response : response.internalResponse ?? response;
    if (internalResponse.body == null) {
        processResponseEndOfBody();
    } else {
        finished2(internalResponse.body.stream, ()=>{
            processResponseEndOfBody();
        });
    }
}
async function httpFetch(fetchParams) {
    const request3 = fetchParams.request;
    let response = null;
    let actualResponse = null;
    const timingInfo = fetchParams.timingInfo;
    if (request3.serviceWorkers === "all") {}
    if (response === null) {
        if (request3.redirect === "follow") {
            request3.serviceWorkers = "none";
        }
        actualResponse = response = await httpNetworkOrCacheFetch(fetchParams);
        if (request3.responseTainting === "cors" && corsCheck(request3, response) === "failure") {
            return makeNetworkError("cors failure");
        }
        if (TAOCheck(request3, response) === "failure") {
            request3.timingAllowFailed = true;
        }
    }
    if ((request3.responseTainting === "opaque" || response.type === "opaque") && crossOriginResourcePolicyCheck(request3.origin, request3.client, request3.destination, actualResponse) === "blocked") {
        return makeNetworkError("blocked");
    }
    if (redirectStatusSet.has(actualResponse.status)) {
        if (request3.redirect !== "manual") {
            fetchParams.controller.connection.destroy(void 0, false);
        }
        if (request3.redirect === "error") {
            response = makeNetworkError("unexpected redirect");
        } else if (request3.redirect === "manual") {
            response = actualResponse;
        } else if (request3.redirect === "follow") {
            response = await httpRedirectFetch(fetchParams, response);
        } else {
            assert4(false);
        }
    }
    response.timingInfo = timingInfo;
    return response;
}
function httpRedirectFetch(fetchParams, response) {
    const request3 = fetchParams.request;
    const actualResponse = response.internalResponse ? response.internalResponse : response;
    let locationURL;
    try {
        locationURL = responseLocationURL(actualResponse, requestCurrentURL(request3).hash);
        if (locationURL == null) {
            return response;
        }
    } catch (err) {
        return Promise.resolve(makeNetworkError(err));
    }
    if (!urlIsHttpHttpsScheme(locationURL)) {
        return Promise.resolve(makeNetworkError("URL scheme must be a HTTP(S) scheme"));
    }
    if (request3.redirectCount === 20) {
        return Promise.resolve(makeNetworkError("redirect count exceeded"));
    }
    request3.redirectCount += 1;
    if (request3.mode === "cors" && (locationURL.username || locationURL.password) && !sameOrigin(request3, locationURL)) {
        return Promise.resolve(makeNetworkError('cross origin not allowed for request mode "cors"'));
    }
    if (request3.responseTainting === "cors" && (locationURL.username || locationURL.password)) {
        return Promise.resolve(makeNetworkError('URL cannot contain credentials for request mode "cors"'));
    }
    if (actualResponse.status !== 303 && request3.body != null && request3.body.source == null) {
        return Promise.resolve(makeNetworkError());
    }
    if ([
        301,
        302
    ].includes(actualResponse.status) && request3.method === "POST" || actualResponse.status === 303 && !GET_OR_HEAD.includes(request3.method)) {
        request3.method = "GET";
        request3.body = null;
        for (const headerName of requestBodyHeader){
            request3.headersList.delete(headerName);
        }
    }
    if (!sameOrigin(requestCurrentURL(request3), locationURL)) {
        request3.headersList.delete("authorization", true);
        request3.headersList.delete("proxy-authorization", true);
        request3.headersList.delete("cookie", true);
        request3.headersList.delete("host", true);
    }
    if (request3.body != null) {
        assert4(request3.body.source != null);
        request3.body = safelyExtractBody(request3.body.source)[0];
    }
    const timingInfo = fetchParams.timingInfo;
    timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
    if (timingInfo.redirectStartTime === 0) {
        timingInfo.redirectStartTime = timingInfo.startTime;
    }
    request3.urlList.push(locationURL);
    setRequestReferrerPolicyOnRedirect(request3, actualResponse);
    return mainFetch(fetchParams, true);
}
async function httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch = false, isNewConnectionFetch = false) {
    const request3 = fetchParams.request;
    let httpFetchParams = null;
    let httpRequest = null;
    let response = null;
    const httpCache = null;
    const revalidatingFlag = false;
    if (request3.window === "no-window" && request3.redirect === "error") {
        httpFetchParams = fetchParams;
        httpRequest = request3;
    } else {
        httpRequest = cloneRequest(request3);
        httpFetchParams = {
            ...fetchParams
        };
        httpFetchParams.request = httpRequest;
    }
    const includeCredentials = request3.credentials === "include" || request3.credentials === "same-origin" && request3.responseTainting === "basic";
    const contentLength = httpRequest.body ? httpRequest.body.length : null;
    let contentLengthHeaderValue = null;
    if (httpRequest.body == null && [
        "POST",
        "PUT"
    ].includes(httpRequest.method)) {
        contentLengthHeaderValue = "0";
    }
    if (contentLength != null) {
        contentLengthHeaderValue = isomorphicEncode(`${contentLength}`);
    }
    if (contentLengthHeaderValue != null) {
        httpRequest.headersList.append("content-length", contentLengthHeaderValue, true);
    }
    if (contentLength != null && httpRequest.keepalive) {}
    if (httpRequest.referrer instanceof URL) {
        httpRequest.headersList.append("referer", isomorphicEncode(httpRequest.referrer.href), true);
    }
    appendRequestOriginHeader(httpRequest);
    appendFetchMetadata(httpRequest);
    if (!httpRequest.headersList.contains("user-agent", true)) {
        httpRequest.headersList.append("user-agent", defaultUserAgent);
    }
    if (httpRequest.cache === "default" && (httpRequest.headersList.contains("if-modified-since", true) || httpRequest.headersList.contains("if-none-match", true) || httpRequest.headersList.contains("if-unmodified-since", true) || httpRequest.headersList.contains("if-match", true) || httpRequest.headersList.contains("if-range", true))) {
        httpRequest.cache = "no-store";
    }
    if (httpRequest.cache === "no-cache" && !httpRequest.preventNoCacheCacheControlHeaderModification && !httpRequest.headersList.contains("cache-control", true)) {
        httpRequest.headersList.append("cache-control", "max-age=0", true);
    }
    if (httpRequest.cache === "no-store" || httpRequest.cache === "reload") {
        if (!httpRequest.headersList.contains("pragma", true)) {
            httpRequest.headersList.append("pragma", "no-cache", true);
        }
        if (!httpRequest.headersList.contains("cache-control", true)) {
            httpRequest.headersList.append("cache-control", "no-cache", true);
        }
    }
    if (httpRequest.headersList.contains("range", true)) {
        httpRequest.headersList.append("accept-encoding", "identity", true);
    }
    if (!httpRequest.headersList.contains("accept-encoding", true)) {
        if (urlHasHttpsScheme(requestCurrentURL(httpRequest))) {
            httpRequest.headersList.append("accept-encoding", "br, gzip, deflate", true);
        } else {
            httpRequest.headersList.append("accept-encoding", "gzip, deflate", true);
        }
    }
    httpRequest.headersList.delete("host", true);
    if (includeCredentials) {}
    if (httpCache == null) {
        httpRequest.cache = "no-store";
    }
    if (httpRequest.cache !== "no-store" && httpRequest.cache !== "reload") {}
    if (response == null) {
        if (httpRequest.cache === "only-if-cached") {
            return makeNetworkError("only if cached");
        }
        const forwardResponse = await httpNetworkFetch(httpFetchParams, includeCredentials, isNewConnectionFetch);
        if (!safeMethodsSet.has(httpRequest.method) && forwardResponse.status >= 200 && forwardResponse.status <= 399) {}
        if (revalidatingFlag && forwardResponse.status === 304) {}
        if (response == null) {
            response = forwardResponse;
        }
    }
    response.urlList = [
        ...httpRequest.urlList
    ];
    if (httpRequest.headersList.contains("range", true)) {
        response.rangeRequested = true;
    }
    response.requestIncludesCredentials = includeCredentials;
    if (response.status === 407) {
        if (request3.window === "no-window") {
            return makeNetworkError();
        }
        if (isCancelled(fetchParams)) {
            return makeAppropriateNetworkError(fetchParams);
        }
        return makeNetworkError("proxy authentication required");
    }
    if (response.status === 421 && !isNewConnectionFetch && (request3.body == null || request3.body.source != null)) {
        if (isCancelled(fetchParams)) {
            return makeAppropriateNetworkError(fetchParams);
        }
        fetchParams.controller.connection.destroy();
        response = await httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch, true);
    }
    if (isAuthenticationFetch) {}
    return response;
}
async function httpNetworkFetch(fetchParams, includeCredentials = false, forceNewConnection = false) {
    assert4(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
    fetchParams.controller.connection = {
        abort: null,
        destroyed: false,
        destroy (err, abort = true) {
            if (!this.destroyed) {
                this.destroyed = true;
                if (abort) {
                    this.abort?.(err ?? new DOMException("The operation was aborted.", "AbortError"));
                }
            }
        }
    };
    const request3 = fetchParams.request;
    let response = null;
    const timingInfo = fetchParams.timingInfo;
    const httpCache = null;
    if (httpCache == null) {
        request3.cache = "no-store";
    }
    const newConnection = forceNewConnection ? "yes" : "no";
    if (request3.mode === "websocket") {} else {}
    let requestBody = null;
    if (request3.body == null && fetchParams.processRequestEndOfBody) {
        queueMicrotask(()=>fetchParams.processRequestEndOfBody());
    } else if (request3.body != null) {
        const processBodyChunk = async function*(bytes) {
            if (isCancelled(fetchParams)) {
                return;
            }
            yield bytes;
            fetchParams.processRequestBodyChunkLength?.(bytes.byteLength);
        };
        const processEndOfBody = ()=>{
            if (isCancelled(fetchParams)) {
                return;
            }
            if (fetchParams.processRequestEndOfBody) {
                fetchParams.processRequestEndOfBody();
            }
        };
        const processBodyError = (e)=>{
            if (isCancelled(fetchParams)) {
                return;
            }
            if (e.name === "AbortError") {
                fetchParams.controller.abort();
            } else {
                fetchParams.controller.terminate(e);
            }
        };
        requestBody = (async function*() {
            try {
                for await (const bytes of request3.body.stream){
                    yield* processBodyChunk(bytes);
                }
                processEndOfBody();
            } catch (err) {
                processBodyError(err);
            }
        })();
    }
    try {
        const { body, status, statusText, headersList, socket } = await dispatch({
            body: requestBody
        });
        if (socket) {
            response = makeResponse({
                status,
                statusText,
                headersList,
                socket
            });
        } else {
            const iterator = body[Symbol.asyncIterator]();
            fetchParams.controller.next = ()=>iterator.next();
            response = makeResponse({
                status,
                statusText,
                headersList
            });
        }
    } catch (err) {
        if (err.name === "AbortError") {
            fetchParams.controller.connection.destroy();
            return makeAppropriateNetworkError(fetchParams, err);
        }
        return makeNetworkError(err);
    }
    const pullAlgorithm = async ()=>{
        await fetchParams.controller.resume();
    };
    const cancelAlgorithm = (reason)=>{
        if (!isCancelled(fetchParams)) {
            fetchParams.controller.abort(reason);
        }
    };
    const stream3 = new ReadableStream({
        async start (controller) {
            fetchParams.controller.controller = controller;
        },
        async pull (controller) {
            await pullAlgorithm(controller);
        },
        async cancel (reason) {
            await cancelAlgorithm(reason);
        },
        type: "bytes"
    });
    response.body = {
        stream: stream3,
        source: null,
        length: null
    };
    fetchParams.controller.onAborted = onAborted;
    fetchParams.controller.on("terminated", onAborted);
    fetchParams.controller.resume = async ()=>{
        while(true){
            let bytes;
            let isFailure;
            try {
                const { done, value } = await fetchParams.controller.next();
                if (isAborted3(fetchParams)) {
                    break;
                }
                bytes = done ? void 0 : value;
            } catch (err) {
                if (fetchParams.controller.ended && !timingInfo.encodedBodySize) {
                    bytes = void 0;
                } else {
                    bytes = err;
                    isFailure = true;
                }
            }
            if (bytes === void 0) {
                readableStreamClose(fetchParams.controller.controller);
                finalizeResponse(fetchParams, response);
                return;
            }
            timingInfo.decodedBodySize += bytes?.byteLength ?? 0;
            if (isFailure) {
                fetchParams.controller.terminate(bytes);
                return;
            }
            const buffer = new Uint8Array(bytes);
            if (buffer.byteLength) {
                fetchParams.controller.controller.enqueue(buffer);
            }
            if (isErrored(stream3)) {
                fetchParams.controller.terminate();
                return;
            }
            if (fetchParams.controller.controller.desiredSize <= 0) {
                return;
            }
        }
    };
    function onAborted(reason) {
        if (isAborted3(fetchParams)) {
            response.aborted = true;
            if (isReadable(stream3)) {
                fetchParams.controller.controller.error(fetchParams.controller.serializedAbortReason);
            }
        } else {
            if (isReadable(stream3)) {
                fetchParams.controller.controller.error(new TypeError("terminated", {
                    cause: isErrorLike2(reason) ? reason : void 0
                }));
            }
        }
        fetchParams.controller.connection.destroy();
    }
    return response;
    function dispatch({ body }) {
        const url2 = requestCurrentURL(request3);
        const agent = fetchParams.controller.dispatcher;
        return new Promise((resolve36, reject2)=>agent.dispatch({
                path: url2.pathname + url2.search,
                origin: url2.origin,
                method: request3.method,
                body: agent.isMockActive ? request3.body && (request3.body.source || request3.body.stream) : body,
                headers: request3.headersList.entries,
                maxRedirections: 0,
                upgrade: request3.mode === "websocket" ? "websocket" : void 0
            }, {
                body: null,
                abort: null,
                onConnect (abort) {
                    const { connection } = fetchParams.controller;
                    timingInfo.finalConnectionTimingInfo = clampAndCoarsenConnectionTimingInfo(void 0, timingInfo.postRedirectStartTime, fetchParams.crossOriginIsolatedCapability);
                    if (connection.destroyed) {
                        abort(new DOMException("The operation was aborted.", "AbortError"));
                    } else {
                        fetchParams.controller.on("terminated", abort);
                        this.abort = connection.abort = abort;
                    }
                    timingInfo.finalNetworkRequestStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
                },
                onResponseStarted () {
                    timingInfo.finalNetworkResponseStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
                },
                onHeaders (status, rawHeaders, resume, statusText) {
                    if (status < 200) {
                        return;
                    }
                    let location = "";
                    const headersList = new HeadersList();
                    for(let i = 0; i < rawHeaders.length; i += 2){
                        headersList.append(bufferToLowerCasedHeaderName(rawHeaders[i]), rawHeaders[i + 1].toString("latin1"), true);
                    }
                    location = headersList.get("location", true);
                    this.body = new Readable2({
                        read: resume
                    });
                    const decoders = [];
                    const willFollow = location && request3.redirect === "follow" && redirectStatusSet.has(status);
                    if (request3.method !== "HEAD" && request3.method !== "CONNECT" && !nullBodyStatus.includes(status) && !willFollow) {
                        const contentEncoding = headersList.get("content-encoding", true);
                        const codings = contentEncoding ? contentEncoding.toLowerCase().split(",") : [];
                        const maxContentEncodings = 5;
                        if (codings.length > maxContentEncodings) {
                            reject2(new Error(`too many content-encodings in response: ${codings.length}, maximum allowed is ${maxContentEncodings}`));
                            return true;
                        }
                        for(let i = codings.length - 1; i >= 0; --i){
                            const coding = codings[i].trim();
                            if (coding === "x-gzip" || coding === "gzip") {
                                decoders.push(zlib2.createGunzip({
                                    flush: zlib2.constants.Z_SYNC_FLUSH,
                                    finishFlush: zlib2.constants.Z_SYNC_FLUSH
                                }));
                            } else if (coding === "deflate") {
                                decoders.push(createInflate({
                                    flush: zlib2.constants.Z_SYNC_FLUSH,
                                    finishFlush: zlib2.constants.Z_SYNC_FLUSH
                                }));
                            } else if (coding === "br") {
                                decoders.push(zlib2.createBrotliDecompress({
                                    flush: zlib2.constants.BROTLI_OPERATION_FLUSH,
                                    finishFlush: zlib2.constants.BROTLI_OPERATION_FLUSH
                                }));
                            } else {
                                decoders.length = 0;
                                break;
                            }
                        }
                    }
                    const onError = this.onError.bind(this);
                    resolve36({
                        status,
                        statusText,
                        headersList,
                        body: decoders.length ? pipeline2(this.body, ...decoders, (err)=>{
                            if (err) {
                                this.onError(err);
                            }
                        }).on("error", onError) : this.body.on("error", onError)
                    });
                    return true;
                },
                onData (chunk) {
                    if (fetchParams.controller.dump) {
                        return;
                    }
                    const bytes = chunk;
                    timingInfo.encodedBodySize += bytes.byteLength;
                    return this.body.push(bytes);
                },
                onComplete () {
                    if (this.abort) {
                        fetchParams.controller.off("terminated", this.abort);
                    }
                    if (fetchParams.controller.onAborted) {
                        fetchParams.controller.off("terminated", fetchParams.controller.onAborted);
                    }
                    fetchParams.controller.ended = true;
                    this.body.push(null);
                },
                onError (error3) {
                    if (this.abort) {
                        fetchParams.controller.off("terminated", this.abort);
                    }
                    this.body?.destroy(error3);
                    fetchParams.controller.terminate(error3);
                    reject2(error3);
                },
                onUpgrade (status, rawHeaders, socket) {
                    if (status !== 101) {
                        return;
                    }
                    const headersList = new HeadersList();
                    for(let i = 0; i < rawHeaders.length; i += 2){
                        headersList.append(bufferToLowerCasedHeaderName(rawHeaders[i]), rawHeaders[i + 1].toString("latin1"), true);
                    }
                    resolve36({
                        status,
                        statusText: STATUS_CODES[status],
                        headersList,
                        socket
                    });
                    return true;
                }
            }));
    }
}
module2.exports = {
    fetch: fetch2,
    Fetch,
    fetching,
    finalizeAndReportTiming
};

return module2.exports;
}
