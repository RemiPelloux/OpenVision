import { require_symbols4 } from "./symbols.js";
import { require_util5 } from "./util.js";
import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
import { require_fetch } from "../fetch/index.js";
import { require_request2 } from "../fetch/request.js";
import { require_response } from "../fetch/response.js";
import { require_symbols2 } from "../fetch/symbols.js";
import { require_util2 } from "../fetch/util.js";
import { require_webidl } from "../fetch/webidl.js";
import { require_global2 } from "../global.js";
var __wakaru_require_cache_cache;
export function require_cache() {
if (__wakaru_require_cache_cache) return __wakaru_require_cache_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_cache_cache = module2;
"use strict";
var { kConstruct } = require_symbols4();
var { urlEquals, fieldValues: getFieldValues } = require_util5();
var { kEnumerableProperty, isDisturbed } = require_util();
var { kHeadersList } = require_symbols();
var { webidl } = require_webidl();
var { Response: Response2, cloneResponse } = require_response();
var { Request: Request2 } = require_request2();
var { kState, kHeaders, kGuard, kRealm } = require_symbols2();
var { fetching } = require_fetch();
var { urlIsHttpHttpsScheme, createDeferredPromise, readAllBytes: readAllBytes2 } = require_util2();
var assert4 = require("assert");
var { getGlobalDispatcher } = require_global2();
var Cache = class _Cache {
    #relevantRequestResponseList;
    constructor(){
        if (arguments[0] !== kConstruct) {
            webidl.illegalConstructor();
        }
        this.#relevantRequestResponseList = arguments[1];
    }
    async match(request3, options2 = {}) {
        webidl.brandCheck(this, _Cache);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        });
        request3 = webidl.converters.RequestInfo(request3);
        options2 = webidl.converters.CacheQueryOptions(options2);
        const p2 = await this.matchAll(request3, options2);
        if (p2.length === 0) {
            return;
        }
        return p2[0];
    }
    async matchAll(request3 = void 0, options2 = {}) {
        webidl.brandCheck(this, _Cache);
        if (request3 !== void 0) request3 = webidl.converters.RequestInfo(request3);
        options2 = webidl.converters.CacheQueryOptions(options2);
        let r = null;
        if (request3 !== void 0) {
            if (request3 instanceof Request2) {
                r = request3[kState];
                if (r.method !== "GET" && !options2.ignoreMethod) {
                    return [];
                }
            } else if (typeof request3 === "string") {
                r = new Request2(request3)[kState];
            }
        }
        const responses = [];
        if (request3 === void 0) {
            for (const requestResponse of this.#relevantRequestResponseList){
                responses.push(requestResponse[1]);
            }
        } else {
            const requestResponses = this.#queryCache(r, options2);
            for (const requestResponse of requestResponses){
                responses.push(requestResponse[1]);
            }
        }
        const responseList = [];
        for (const response of responses){
            const responseObject = new Response2(response.body?.source ?? null);
            const body = responseObject[kState].body;
            responseObject[kState] = response;
            responseObject[kState].body = body;
            responseObject[kHeaders][kHeadersList] = response.headersList;
            responseObject[kHeaders][kGuard] = "immutable";
            responseList.push(responseObject);
        }
        return Object.freeze(responseList);
    }
    async add(request3) {
        webidl.brandCheck(this, _Cache);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        request3 = webidl.converters.RequestInfo(request3);
        const requests = [
            request3
        ];
        const responseArrayPromise = this.addAll(requests);
        return await responseArrayPromise;
    }
    async addAll(requests) {
        webidl.brandCheck(this, _Cache);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        });
        requests = webidl.converters["sequence<RequestInfo>"](requests);
        const responsePromises = [];
        const requestList = [];
        for (const request3 of requests){
            if (typeof request3 === "string") {
                continue;
            }
            const r = request3[kState];
            if (!urlIsHttpHttpsScheme(r.url) || r.method !== "GET") {
                throw webidl.errors.exception({
                    header: "Cache.addAll",
                    message: "Expected http/s scheme when method is not GET."
                });
            }
        }
        const fetchControllers = [];
        for (const request3 of requests){
            const r = new Request2(request3)[kState];
            if (!urlIsHttpHttpsScheme(r.url)) {
                throw webidl.errors.exception({
                    header: "Cache.addAll",
                    message: "Expected http/s scheme."
                });
            }
            r.initiator = "fetch";
            r.destination = "subresource";
            requestList.push(r);
            const responsePromise = createDeferredPromise();
            fetchControllers.push(fetching({
                request: r,
                dispatcher: getGlobalDispatcher(),
                processResponse (response) {
                    if (response.type === "error" || response.status === 206 || response.status < 200 || response.status > 299) {
                        responsePromise.reject(webidl.errors.exception({
                            header: "Cache.addAll",
                            message: "Received an invalid status code or the request failed."
                        }));
                    } else if (response.headersList.contains("vary")) {
                        const fieldValues = getFieldValues(response.headersList.get("vary"));
                        for (const fieldValue2 of fieldValues){
                            if (fieldValue2 === "*") {
                                responsePromise.reject(webidl.errors.exception({
                                    header: "Cache.addAll",
                                    message: "invalid vary field value"
                                }));
                                for (const controller of fetchControllers){
                                    controller.abort();
                                }
                                return;
                            }
                        }
                    }
                },
                processResponseEndOfBody (response) {
                    if (response.aborted) {
                        responsePromise.reject(new DOMException("aborted", "AbortError"));
                        return;
                    }
                    responsePromise.resolve(response);
                }
            }));
            responsePromises.push(responsePromise.promise);
        }
        const p2 = Promise.all(responsePromises);
        const responses = await p2;
        const operations2 = [];
        let index = 0;
        for (const response of responses){
            const operation = {
                type: "put",
                request: requestList[index],
                response
            };
            operations2.push(operation);
            index++;
        }
        const cacheJobPromise = createDeferredPromise();
        let errorData = null;
        try {
            this.#batchCacheOperations(operations2);
        } catch (e) {
            errorData = e;
        }
        queueMicrotask(()=>{
            if (errorData === null) {
                cacheJobPromise.resolve(void 0);
            } else {
                cacheJobPromise.reject(errorData);
            }
        });
        return cacheJobPromise.promise;
    }
    async put(request3, response) {
        webidl.brandCheck(this, _Cache);
        webidl.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        });
        request3 = webidl.converters.RequestInfo(request3);
        response = webidl.converters.Response(response);
        let innerRequest = null;
        if (request3 instanceof Request2) {
            innerRequest = request3[kState];
        } else {
            innerRequest = new Request2(request3)[kState];
        }
        if (!urlIsHttpHttpsScheme(innerRequest.url) || innerRequest.method !== "GET") {
            throw webidl.errors.exception({
                header: "Cache.put",
                message: "Expected an http/s scheme when method is not GET"
            });
        }
        const innerResponse = response[kState];
        if (innerResponse.status === 206) {
            throw webidl.errors.exception({
                header: "Cache.put",
                message: "Got 206 status"
            });
        }
        if (innerResponse.headersList.contains("vary")) {
            const fieldValues = getFieldValues(innerResponse.headersList.get("vary"));
            for (const fieldValue2 of fieldValues){
                if (fieldValue2 === "*") {
                    throw webidl.errors.exception({
                        header: "Cache.put",
                        message: "Got * vary field value"
                    });
                }
            }
        }
        if (innerResponse.body && (isDisturbed(innerResponse.body.stream) || innerResponse.body.stream.locked)) {
            throw webidl.errors.exception({
                header: "Cache.put",
                message: "Response body is locked or disturbed"
            });
        }
        const clonedResponse = cloneResponse(innerResponse);
        const bodyReadPromise = createDeferredPromise();
        if (innerResponse.body != null) {
            const stream3 = innerResponse.body.stream;
            const reader = stream3.getReader();
            readAllBytes2(reader).then(bodyReadPromise.resolve, bodyReadPromise.reject);
        } else {
            bodyReadPromise.resolve(void 0);
        }
        const operations2 = [];
        const operation = {
            type: "put",
            request: innerRequest,
            response: clonedResponse
        };
        operations2.push(operation);
        const bytes = await bodyReadPromise.promise;
        if (clonedResponse.body != null) {
            clonedResponse.body.source = bytes;
        }
        const cacheJobPromise = createDeferredPromise();
        let errorData = null;
        try {
            this.#batchCacheOperations(operations2);
        } catch (e) {
            errorData = e;
        }
        queueMicrotask(()=>{
            if (errorData === null) {
                cacheJobPromise.resolve();
            } else {
                cacheJobPromise.reject(errorData);
            }
        });
        return cacheJobPromise.promise;
    }
    async delete(request3, options2 = {}) {
        webidl.brandCheck(this, _Cache);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        });
        request3 = webidl.converters.RequestInfo(request3);
        options2 = webidl.converters.CacheQueryOptions(options2);
        let r = null;
        if (request3 instanceof Request2) {
            r = request3[kState];
            if (r.method !== "GET" && !options2.ignoreMethod) {
                return false;
            }
        } else {
            assert4(typeof request3 === "string");
            r = new Request2(request3)[kState];
        }
        const operations2 = [];
        const operation = {
            type: "delete",
            request: r,
            options: options2
        };
        operations2.push(operation);
        const cacheJobPromise = createDeferredPromise();
        let errorData = null;
        let requestResponses;
        try {
            requestResponses = this.#batchCacheOperations(operations2);
        } catch (e) {
            errorData = e;
        }
        queueMicrotask(()=>{
            if (errorData === null) {
                cacheJobPromise.resolve(!!requestResponses?.length);
            } else {
                cacheJobPromise.reject(errorData);
            }
        });
        return cacheJobPromise.promise;
    }
    async keys(request3 = void 0, options2 = {}) {
        webidl.brandCheck(this, _Cache);
        if (request3 !== void 0) request3 = webidl.converters.RequestInfo(request3);
        options2 = webidl.converters.CacheQueryOptions(options2);
        let r = null;
        if (request3 !== void 0) {
            if (request3 instanceof Request2) {
                r = request3[kState];
                if (r.method !== "GET" && !options2.ignoreMethod) {
                    return [];
                }
            } else if (typeof request3 === "string") {
                r = new Request2(request3)[kState];
            }
        }
        const promise = createDeferredPromise();
        const requests = [];
        if (request3 === void 0) {
            for (const requestResponse of this.#relevantRequestResponseList){
                requests.push(requestResponse[0]);
            }
        } else {
            const requestResponses = this.#queryCache(r, options2);
            for (const requestResponse of requestResponses){
                requests.push(requestResponse[0]);
            }
        }
        queueMicrotask(()=>{
            const requestList = [];
            for (const request4 of requests){
                const requestObject = new Request2("https://a");
                requestObject[kState] = request4;
                requestObject[kHeaders][kHeadersList] = request4.headersList;
                requestObject[kHeaders][kGuard] = "immutable";
                requestObject[kRealm] = request4.client;
                requestList.push(requestObject);
            }
            promise.resolve(Object.freeze(requestList));
        });
        return promise.promise;
    }
    #batchCacheOperations(operations2) {
        const cache2 = this.#relevantRequestResponseList;
        const backupCache = [
            ...cache2
        ];
        const addedItems = [];
        const resultList = [];
        try {
            for (const operation of operations2){
                if (operation.type !== "delete" && operation.type !== "put") {
                    throw webidl.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: 'operation type does not match "delete" or "put"'
                    });
                }
                if (operation.type === "delete" && operation.response != null) {
                    throw webidl.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "delete operation should not have an associated response"
                    });
                }
                if (this.#queryCache(operation.request, operation.options, addedItems).length) {
                    throw new DOMException("???", "InvalidStateError");
                }
                let requestResponses;
                if (operation.type === "delete") {
                    requestResponses = this.#queryCache(operation.request, operation.options);
                    if (requestResponses.length === 0) {
                        return [];
                    }
                    for (const requestResponse of requestResponses){
                        const idx = cache2.indexOf(requestResponse);
                        assert4(idx !== -1);
                        cache2.splice(idx, 1);
                    }
                } else if (operation.type === "put") {
                    if (operation.response == null) {
                        throw webidl.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "put operation should have an associated response"
                        });
                    }
                    const r = operation.request;
                    if (!urlIsHttpHttpsScheme(r.url)) {
                        throw webidl.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "expected http or https scheme"
                        });
                    }
                    if (r.method !== "GET") {
                        throw webidl.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "not get method"
                        });
                    }
                    if (operation.options != null) {
                        throw webidl.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "options must not be defined"
                        });
                    }
                    requestResponses = this.#queryCache(operation.request);
                    for (const requestResponse of requestResponses){
                        const idx = cache2.indexOf(requestResponse);
                        assert4(idx !== -1);
                        cache2.splice(idx, 1);
                    }
                    cache2.push([
                        operation.request,
                        operation.response
                    ]);
                    addedItems.push([
                        operation.request,
                        operation.response
                    ]);
                }
                resultList.push([
                    operation.request,
                    operation.response
                ]);
            }
            return resultList;
        } catch (e) {
            this.#relevantRequestResponseList.length = 0;
            this.#relevantRequestResponseList = backupCache;
            throw e;
        }
    }
    #queryCache(requestQuery, options2, targetStorage) {
        const resultList = [];
        const storage = targetStorage ?? this.#relevantRequestResponseList;
        for (const requestResponse of storage){
            const [cachedRequest, cachedResponse] = requestResponse;
            if (this.#requestMatchesCachedItem(requestQuery, cachedRequest, cachedResponse, options2)) {
                resultList.push(requestResponse);
            }
        }
        return resultList;
    }
    #requestMatchesCachedItem(requestQuery, request3, response = null, options2) {
        const queryURL = new URL(requestQuery.url);
        const cachedURL = new URL(request3.url);
        if (options2?.ignoreSearch) {
            cachedURL.search = "";
            queryURL.search = "";
        }
        if (!urlEquals(queryURL, cachedURL, true)) {
            return false;
        }
        if (response == null || options2?.ignoreVary || !response.headersList.contains("vary")) {
            return true;
        }
        const fieldValues = getFieldValues(response.headersList.get("vary"));
        for (const fieldValue2 of fieldValues){
            if (fieldValue2 === "*") {
                return false;
            }
            const requestValue = request3.headersList.get(fieldValue2);
            const queryValue = requestQuery.headersList.get(fieldValue2);
            if (requestValue !== queryValue) {
                return false;
            }
        }
        return true;
    }
};
Object.defineProperties(Cache.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: true
    },
    match: kEnumerableProperty,
    matchAll: kEnumerableProperty,
    add: kEnumerableProperty,
    addAll: kEnumerableProperty,
    put: kEnumerableProperty,
    delete: kEnumerableProperty,
    keys: kEnumerableProperty
});
var cacheQueryOptionConverters = [
    {
        key: "ignoreSearch",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "ignoreMethod",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "ignoreVary",
        converter: webidl.converters.boolean,
        defaultValue: false
    }
];
webidl.converters.CacheQueryOptions = webidl.dictionaryConverter(cacheQueryOptionConverters);
webidl.converters.MultiCacheQueryOptions = webidl.dictionaryConverter([
    ...cacheQueryOptionConverters,
    {
        key: "cacheName",
        converter: webidl.converters.DOMString
    }
]);
webidl.converters.Response = webidl.interfaceConverter(Response2);
webidl.converters["sequence<RequestInfo>"] = webidl.sequenceConverter(webidl.converters.RequestInfo);
module2.exports = {
    Cache
};

return module2.exports;
}
