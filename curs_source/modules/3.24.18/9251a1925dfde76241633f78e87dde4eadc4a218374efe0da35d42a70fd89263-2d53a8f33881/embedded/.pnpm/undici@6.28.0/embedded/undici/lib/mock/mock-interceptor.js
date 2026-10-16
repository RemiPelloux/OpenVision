import { require_errors2 } from "../core/errors.js";
import { require_util8 } from "../core/util.js";
import { require_mock_symbols2 } from "./mock-symbols.js";
import { require_mock_utils2 } from "./mock-utils.js";
var __wakaru_require_mock_interceptor2_cache;
export function require_mock_interceptor2() {
if (__wakaru_require_mock_interceptor2_cache) return __wakaru_require_mock_interceptor2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_interceptor2_cache = module2;
"use strict";
var { getResponseData, buildKey, addMockDispatch } = require_mock_utils2();
var { kDispatches, kDispatchKey, kDefaultHeaders, kDefaultTrailers, kContentLength, kMockDispatch } = require_mock_symbols2();
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var { buildURL } = require_util8();
var MockScope = class {
    constructor(mockDispatch){
        this[kMockDispatch] = mockDispatch;
    }
    delay(waitInMs) {
        if (typeof waitInMs !== "number" || !Number.isInteger(waitInMs) || waitInMs <= 0) {
            throw new InvalidArgumentError3("waitInMs must be a valid integer > 0");
        }
        this[kMockDispatch].delay = waitInMs;
        return this;
    }
    persist() {
        this[kMockDispatch].persist = true;
        return this;
    }
    times(repeatTimes) {
        if (typeof repeatTimes !== "number" || !Number.isInteger(repeatTimes) || repeatTimes <= 0) {
            throw new InvalidArgumentError3("repeatTimes must be a valid integer > 0");
        }
        this[kMockDispatch].times = repeatTimes;
        return this;
    }
};
var MockInterceptor = class {
    constructor(opts, mockDispatches){
        if (typeof opts !== "object") {
            throw new InvalidArgumentError3("opts must be an object");
        }
        if (typeof opts.path === "undefined") {
            throw new InvalidArgumentError3("opts.path must be defined");
        }
        if (typeof opts.method === "undefined") {
            opts.method = "GET";
        }
        if (typeof opts.path === "string") {
            if (opts.query) {
                opts.path = buildURL(opts.path, opts.query);
            } else {
                const parsedURL = new URL(opts.path, "data://");
                opts.path = parsedURL.pathname + parsedURL.search;
            }
        }
        if (typeof opts.method === "string") {
            opts.method = opts.method.toUpperCase();
        }
        this[kDispatchKey] = buildKey(opts);
        this[kDispatches] = mockDispatches;
        this[kDefaultHeaders] = {};
        this[kDefaultTrailers] = {};
        this[kContentLength] = false;
    }
    createMockScopeDispatchData({ statusCode, data, responseOptions }) {
        const responseData = getResponseData(data);
        const contentLength = this[kContentLength] ? {
            "content-length": responseData.length
        } : {};
        const headers = {
            ...this[kDefaultHeaders],
            ...contentLength,
            ...responseOptions.headers
        };
        const trailers = {
            ...this[kDefaultTrailers],
            ...responseOptions.trailers
        };
        return {
            statusCode,
            data,
            headers,
            trailers
        };
    }
    validateReplyParameters(replyParameters) {
        if (typeof replyParameters.statusCode === "undefined") {
            throw new InvalidArgumentError3("statusCode must be defined");
        }
        if (typeof replyParameters.responseOptions !== "object" || replyParameters.responseOptions === null) {
            throw new InvalidArgumentError3("responseOptions must be an object");
        }
    }
    reply(replyOptionsCallbackOrStatusCode) {
        if (typeof replyOptionsCallbackOrStatusCode === "function") {
            const wrappedDefaultsCallback = (opts)=>{
                const resolvedData = replyOptionsCallbackOrStatusCode(opts);
                if (typeof resolvedData !== "object" || resolvedData === null) {
                    throw new InvalidArgumentError3("reply options callback must return an object");
                }
                const replyParameters2 = {
                    data: "",
                    responseOptions: {},
                    ...resolvedData
                };
                this.validateReplyParameters(replyParameters2);
                return {
                    ...this.createMockScopeDispatchData(replyParameters2)
                };
            };
            const newMockDispatch2 = addMockDispatch(this[kDispatches], this[kDispatchKey], wrappedDefaultsCallback);
            return new MockScope(newMockDispatch2);
        }
        const replyParameters = {
            statusCode: replyOptionsCallbackOrStatusCode,
            data: arguments[1] === void 0 ? "" : arguments[1],
            responseOptions: arguments[2] === void 0 ? {} : arguments[2]
        };
        this.validateReplyParameters(replyParameters);
        const dispatchData = this.createMockScopeDispatchData(replyParameters);
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], dispatchData);
        return new MockScope(newMockDispatch);
    }
    replyWithError(error3) {
        if (typeof error3 === "undefined") {
            throw new InvalidArgumentError3("error must be defined");
        }
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], {
            error: error3
        });
        return new MockScope(newMockDispatch);
    }
    defaultReplyHeaders(headers) {
        if (typeof headers === "undefined") {
            throw new InvalidArgumentError3("headers must be defined");
        }
        this[kDefaultHeaders] = headers;
        return this;
    }
    defaultReplyTrailers(trailers) {
        if (typeof trailers === "undefined") {
            throw new InvalidArgumentError3("trailers must be defined");
        }
        this[kDefaultTrailers] = trailers;
        return this;
    }
    replyContentLength() {
        this[kContentLength] = true;
        return this;
    }
};
module2.exports.MockInterceptor = MockInterceptor;
module2.exports.MockScope = MockScope;

return module2.exports;
}
