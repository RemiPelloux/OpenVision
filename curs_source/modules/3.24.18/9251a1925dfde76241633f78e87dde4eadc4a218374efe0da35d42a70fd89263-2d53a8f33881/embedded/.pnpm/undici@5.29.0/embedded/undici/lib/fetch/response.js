import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
import { require_body } from "./body.js";
import { require_constants3 } from "./constants.js";
import { require_dataURL } from "./dataURL.js";
import { require_formdata } from "./formdata.js";
import { require_global } from "./global.js";
import { require_headers } from "./headers.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_response_cache;
export function require_response() {
if (__wakaru_require_response_cache) return __wakaru_require_response_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_response_cache = module2;
"use strict";
var { Headers: Headers2, HeadersList, fill } = require_headers();
var { extractBody, cloneBody, mixinBody } = require_body();
var util2 = require_util();
var { kEnumerableProperty } = util2;
var { isValidReasonPhrase, isCancelled, isAborted: isAborted3, isBlobLike, serializeJavascriptValueToJSONString, isErrorLike: isErrorLike2, isomorphicEncode } = require_util2();
var { redirectStatusSet, nullBodyStatus, DOMException: DOMException2 } = require_constants3();
var { kState, kHeaders, kGuard, kRealm } = require_symbols2();
var { webidl } = require_webidl();
var { FormData: FormData2 } = require_formdata();
var { getGlobalOrigin } = require_global();
var { URLSerializer } = require_dataURL();
var { kHeadersList, kConstruct } = require_symbols();
var assert4 = require("assert");
var { types: types3 } = require("util");
var ReadableStream2 = globalThis.ReadableStream || require("stream/web").ReadableStream;
var textEncoder2 = new TextEncoder("utf-8");
var Response2 = class _Response {
    static error() {
        const relevantRealm = {
            settingsObject: {}
        };
        const responseObject = new _Response();
        responseObject[kState] = makeNetworkError();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kHeadersList] = responseObject[kState].headersList;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        return responseObject;
    }
    static json(data, init = {}) {
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        });
        if (init !== null) {
            init = webidl.converters.ResponseInit(init);
        }
        const bytes = textEncoder2.encode(serializeJavascriptValueToJSONString(data));
        const body = extractBody(bytes);
        const relevantRealm = {
            settingsObject: {}
        };
        const responseObject = new _Response();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "response";
        responseObject[kHeaders][kRealm] = relevantRealm;
        initializeResponse(responseObject, init, {
            body: body[0],
            type: "application/json"
        });
        return responseObject;
    }
    static redirect(url2, status = 302) {
        const relevantRealm = {
            settingsObject: {}
        };
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        });
        url2 = webidl.converters.USVString(url2);
        status = webidl.converters["unsigned short"](status);
        let parsedURL;
        try {
            parsedURL = new URL(url2, getGlobalOrigin());
        } catch (err) {
            throw Object.assign(new TypeError("Failed to parse URL from " + url2), {
                cause: err
            });
        }
        if (!redirectStatusSet.has(status)) {
            throw new RangeError("Invalid status code " + status);
        }
        const responseObject = new _Response();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        responseObject[kState].status = status;
        const value = isomorphicEncode(URLSerializer(parsedURL));
        responseObject[kState].headersList.append("location", value);
        return responseObject;
    }
    constructor(body = null, init = {}){
        if (body !== null) {
            body = webidl.converters.BodyInit(body);
        }
        init = webidl.converters.ResponseInit(init);
        this[kRealm] = {
            settingsObject: {}
        };
        this[kState] = makeResponse({});
        this[kHeaders] = new Headers2(kConstruct);
        this[kHeaders][kGuard] = "response";
        this[kHeaders][kHeadersList] = this[kState].headersList;
        this[kHeaders][kRealm] = this[kRealm];
        let bodyWithType = null;
        if (body != null) {
            const [extractedBody, type2] = extractBody(body);
            bodyWithType = {
                body: extractedBody,
                type: type2
            };
        }
        initializeResponse(this, init, bodyWithType);
    }
    get type() {
        webidl.brandCheck(this, _Response);
        return this[kState].type;
    }
    get url() {
        webidl.brandCheck(this, _Response);
        const urlList = this[kState].urlList;
        const url2 = urlList[urlList.length - 1] ?? null;
        if (url2 === null) {
            return "";
        }
        return URLSerializer(url2, true);
    }
    get redirected() {
        webidl.brandCheck(this, _Response);
        return this[kState].urlList.length > 1;
    }
    get status() {
        webidl.brandCheck(this, _Response);
        return this[kState].status;
    }
    get ok() {
        webidl.brandCheck(this, _Response);
        return this[kState].status >= 200 && this[kState].status <= 299;
    }
    get statusText() {
        webidl.brandCheck(this, _Response);
        return this[kState].statusText;
    }
    get headers() {
        webidl.brandCheck(this, _Response);
        return this[kHeaders];
    }
    get body() {
        webidl.brandCheck(this, _Response);
        return this[kState].body ? this[kState].body.stream : null;
    }
    get bodyUsed() {
        webidl.brandCheck(this, _Response);
        return !!this[kState].body && util2.isDisturbed(this[kState].body.stream);
    }
    clone() {
        webidl.brandCheck(this, _Response);
        if (this.bodyUsed || this.body && this.body.locked) {
            throw webidl.errors.exception({
                header: "Response.clone",
                message: "Body has already been consumed."
            });
        }
        const clonedResponse = cloneResponse(this[kState]);
        const clonedResponseObject = new _Response();
        clonedResponseObject[kState] = clonedResponse;
        clonedResponseObject[kRealm] = this[kRealm];
        clonedResponseObject[kHeaders][kHeadersList] = clonedResponse.headersList;
        clonedResponseObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedResponseObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        return clonedResponseObject;
    }
};
mixinBody(Response2);
Object.defineProperties(Response2.prototype, {
    type: kEnumerableProperty,
    url: kEnumerableProperty,
    status: kEnumerableProperty,
    ok: kEnumerableProperty,
    redirected: kEnumerableProperty,
    statusText: kEnumerableProperty,
    headers: kEnumerableProperty,
    clone: kEnumerableProperty,
    body: kEnumerableProperty,
    bodyUsed: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: true
    }
});
Object.defineProperties(Response2, {
    json: kEnumerableProperty,
    redirect: kEnumerableProperty,
    error: kEnumerableProperty
});
function cloneResponse(response) {
    if (response.internalResponse) {
        return filterResponse(cloneResponse(response.internalResponse), response.type);
    }
    const newResponse = makeResponse({
        ...response,
        body: null
    });
    if (response.body != null) {
        newResponse.body = cloneBody(response.body);
    }
    return newResponse;
}
function makeResponse(init) {
    return {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: false,
        requestIncludesCredentials: false,
        type: "default",
        status: 200,
        timingInfo: null,
        cacheState: "",
        statusText: "",
        ...init,
        headersList: init.headersList ? new HeadersList(init.headersList) : new HeadersList(),
        urlList: init.urlList ? [
            ...init.urlList
        ] : []
    };
}
function makeNetworkError(reason) {
    const isError = isErrorLike2(reason);
    return makeResponse({
        type: "error",
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason),
        aborted: reason && reason.name === "AbortError"
    });
}
function makeFilteredResponse(response, state) {
    state = {
        internalResponse: response,
        ...state
    };
    return new Proxy(response, {
        get (target, p2) {
            return p2 in state ? state[p2] : target[p2];
        },
        set (target, p2, value) {
            assert4(!(p2 in state));
            target[p2] = value;
            return true;
        }
    });
}
function filterResponse(response, type2) {
    if (type2 === "basic") {
        return makeFilteredResponse(response, {
            type: "basic",
            headersList: response.headersList
        });
    } else if (type2 === "cors") {
        return makeFilteredResponse(response, {
            type: "cors",
            headersList: response.headersList
        });
    } else if (type2 === "opaque") {
        return makeFilteredResponse(response, {
            type: "opaque",
            urlList: Object.freeze([]),
            status: 0,
            statusText: "",
            body: null
        });
    } else if (type2 === "opaqueredirect") {
        return makeFilteredResponse(response, {
            type: "opaqueredirect",
            status: 0,
            statusText: "",
            headersList: [],
            body: null
        });
    } else {
        assert4(false);
    }
}
function makeAppropriateNetworkError(fetchParams, err = null) {
    assert4(isCancelled(fetchParams));
    return isAborted3(fetchParams) ? makeNetworkError(Object.assign(new DOMException2("The operation was aborted.", "AbortError"), {
        cause: err
    })) : makeNetworkError(Object.assign(new DOMException2("Request was cancelled."), {
        cause: err
    }));
}
function initializeResponse(response, init, body) {
    if (init.status !== null && (init.status < 200 || init.status > 599)) {
        throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    }
    if ("statusText" in init && init.statusText != null) {
        if (!isValidReasonPhrase(String(init.statusText))) {
            throw new TypeError("Invalid statusText");
        }
    }
    if ("status" in init && init.status != null) {
        response[kState].status = init.status;
    }
    if ("statusText" in init && init.statusText != null) {
        response[kState].statusText = init.statusText;
    }
    if ("headers" in init && init.headers != null) {
        fill(response[kHeaders], init.headers);
    }
    if (body) {
        if (nullBodyStatus.includes(response.status)) {
            throw webidl.errors.exception({
                header: "Response constructor",
                message: "Invalid response status code " + response.status
            });
        }
        response[kState].body = body.body;
        if (body.type != null && !response[kState].headersList.contains("Content-Type")) {
            response[kState].headersList.append("content-type", body.type);
        }
    }
}
webidl.converters.ReadableStream = webidl.interfaceConverter(ReadableStream2);
webidl.converters.FormData = webidl.interfaceConverter(FormData2);
webidl.converters.URLSearchParams = webidl.interfaceConverter(URLSearchParams);
webidl.converters.XMLHttpRequestBodyInit = function(V2) {
    if (typeof V2 === "string") {
        return webidl.converters.USVString(V2);
    }
    if (isBlobLike(V2)) {
        return webidl.converters.Blob(V2, {
            strict: false
        });
    }
    if (types3.isArrayBuffer(V2) || types3.isTypedArray(V2) || types3.isDataView(V2)) {
        return webidl.converters.BufferSource(V2);
    }
    if (util2.isFormDataLike(V2)) {
        return webidl.converters.FormData(V2, {
            strict: false
        });
    }
    if (V2 instanceof URLSearchParams) {
        return webidl.converters.URLSearchParams(V2);
    }
    return webidl.converters.DOMString(V2);
};
webidl.converters.BodyInit = function(V2) {
    if (V2 instanceof ReadableStream2) {
        return webidl.converters.ReadableStream(V2);
    }
    if (V2?.[Symbol.asyncIterator]) {
        return V2;
    }
    return webidl.converters.XMLHttpRequestBodyInit(V2);
};
webidl.converters.ResponseInit = webidl.dictionaryConverter([
    {
        key: "status",
        converter: webidl.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: webidl.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: webidl.converters.HeadersInit
    }
]);
module2.exports = {
    makeNetworkError,
    makeResponse,
    makeAppropriateNetworkError,
    filterResponse,
    Response: Response2,
    cloneResponse
};

return module2.exports;
}
