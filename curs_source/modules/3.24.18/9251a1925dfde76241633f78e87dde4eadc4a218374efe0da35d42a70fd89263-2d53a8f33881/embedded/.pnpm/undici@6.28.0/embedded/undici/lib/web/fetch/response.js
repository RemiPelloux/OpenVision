import { require_symbols6 } from "../../core/symbols.js";
import { require_util8 } from "../../core/util.js";
import { require_body2 } from "./body.js";
import { require_constants11 } from "./constants.js";
import { require_data_url } from "./data-url.js";
import { require_formdata2 } from "./formdata.js";
import { require_headers5 } from "./headers.js";
import { require_symbols7 } from "./symbols.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_response2_cache;
export function require_response2() {
if (__wakaru_require_response2_cache) return __wakaru_require_response2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_response2_cache = module2;
"use strict";
var { Headers: Headers2, HeadersList, fill, getHeadersGuard, setHeadersGuard, setHeadersList } = require_headers5();
var { extractBody, cloneBody, mixinBody, hasFinalizationRegistry, streamRegistry, bodyUnusable } = require_body2();
var util2 = require_util8();
var nodeUtil = require("node:util");
var { kEnumerableProperty } = util2;
var { isValidReasonPhrase, isCancelled, isAborted: isAborted3, isBlobLike, serializeJavascriptValueToJSONString, isErrorLike: isErrorLike2, isomorphicEncode, environmentSettingsObject: relevantRealm } = require_util9();
var { redirectStatusSet, nullBodyStatus } = require_constants11();
var { kState, kHeaders } = require_symbols7();
var { webidl } = require_webidl2();
var { FormData: FormData2 } = require_formdata2();
var { URLSerializer } = require_data_url();
var { kConstruct } = require_symbols6();
var assert4 = require("node:assert");
var { types: types3 } = require("node:util");
var textEncoder2 = new TextEncoder("utf-8");
var Response2 = class _Response {
    static error() {
        const responseObject = fromInnerResponse(makeNetworkError(), "immutable");
        return responseObject;
    }
    static json(data, init = {}) {
        webidl.argumentLengthCheck(arguments, 1, "Response.json");
        if (init !== null) {
            init = webidl.converters.ResponseInit(init);
        }
        const bytes = textEncoder2.encode(serializeJavascriptValueToJSONString(data));
        const body = extractBody(bytes);
        const responseObject = fromInnerResponse(makeResponse({}), "response");
        initializeResponse(responseObject, init, {
            body: body[0],
            type: "application/json"
        });
        return responseObject;
    }
    static redirect(url2, status = 302) {
        webidl.argumentLengthCheck(arguments, 1, "Response.redirect");
        url2 = webidl.converters.USVString(url2);
        status = webidl.converters["unsigned short"](status);
        let parsedURL;
        try {
            parsedURL = new URL(url2, relevantRealm.settingsObject.baseUrl);
        } catch (err) {
            throw new TypeError(`Failed to parse URL from ${url2}`, {
                cause: err
            });
        }
        if (!redirectStatusSet.has(status)) {
            throw new RangeError(`Invalid status code ${status}`);
        }
        const responseObject = fromInnerResponse(makeResponse({}), "immutable");
        responseObject[kState].status = status;
        const value = isomorphicEncode(URLSerializer(parsedURL));
        responseObject[kState].headersList.append("location", value, true);
        return responseObject;
    }
    constructor(body = null, init = {}){
        webidl.util.markAsUncloneable(this);
        if (body === kConstruct) {
            return;
        }
        if (body !== null) {
            body = webidl.converters.BodyInit(body);
        }
        init = webidl.converters.ResponseInit(init);
        this[kState] = makeResponse({});
        this[kHeaders] = new Headers2(kConstruct);
        setHeadersGuard(this[kHeaders], "response");
        setHeadersList(this[kHeaders], this[kState].headersList);
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
        if (bodyUnusable(this)) {
            throw webidl.errors.exception({
                header: "Response.clone",
                message: "Body has already been consumed."
            });
        }
        const clonedResponse = cloneResponse(this[kState]);
        if (hasFinalizationRegistry && this[kState].body?.stream) {
            streamRegistry.register(this, new WeakRef(this[kState].body.stream));
        }
        return fromInnerResponse(clonedResponse, getHeadersGuard(this[kHeaders]));
    }
    [nodeUtil.inspect.custom](depth, options2) {
        if (options2.depth === null) {
            options2.depth = 2;
        }
        options2.colors ??= true;
        const properties = {
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            body: this.body,
            bodyUsed: this.bodyUsed,
            ok: this.ok,
            redirected: this.redirected,
            type: this.type,
            url: this.url
        };
        return `Response ${nodeUtil.formatWithOptions(options2, properties)}`;
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
        newResponse.body = cloneBody(newResponse, response.body);
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
        headersList: init?.headersList ? new HeadersList(init?.headersList) : new HeadersList(),
        urlList: init?.urlList ? [
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
function isNetworkError(response) {
    return (response.type === "error" && response.status === 0);
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
    return isAborted3(fetchParams) ? makeNetworkError(Object.assign(new DOMException("The operation was aborted.", "AbortError"), {
        cause: err
    })) : makeNetworkError(Object.assign(new DOMException("Request was cancelled."), {
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
                message: `Invalid response status code ${response.status}`
            });
        }
        response[kState].body = body.body;
        if (body.type != null && !response[kState].headersList.contains("content-type", true)) {
            response[kState].headersList.append("content-type", body.type, true);
        }
    }
}
function fromInnerResponse(innerResponse, guard) {
    const response = new Response2(kConstruct);
    response[kState] = innerResponse;
    response[kHeaders] = new Headers2(kConstruct);
    setHeadersList(response[kHeaders], innerResponse.headersList);
    setHeadersGuard(response[kHeaders], guard);
    if (hasFinalizationRegistry && innerResponse.body?.stream) {
        streamRegistry.register(response, new WeakRef(innerResponse.body.stream));
    }
    return response;
}
webidl.converters.ReadableStream = webidl.interfaceConverter(ReadableStream);
webidl.converters.FormData = webidl.interfaceConverter(FormData2);
webidl.converters.URLSearchParams = webidl.interfaceConverter(URLSearchParams);
webidl.converters.XMLHttpRequestBodyInit = function(V2, prefix, name17) {
    if (typeof V2 === "string") {
        return webidl.converters.USVString(V2, prefix, name17);
    }
    if (isBlobLike(V2)) {
        return webidl.converters.Blob(V2, prefix, name17, {
            strict: false
        });
    }
    if (ArrayBuffer.isView(V2) || types3.isArrayBuffer(V2)) {
        return webidl.converters.BufferSource(V2, prefix, name17);
    }
    if (util2.isFormDataLike(V2)) {
        return webidl.converters.FormData(V2, prefix, name17, {
            strict: false
        });
    }
    if (V2 instanceof URLSearchParams) {
        return webidl.converters.URLSearchParams(V2, prefix, name17);
    }
    return webidl.converters.DOMString(V2, prefix, name17);
};
webidl.converters.BodyInit = function(V2, prefix, argument) {
    if (V2 instanceof ReadableStream) {
        return webidl.converters.ReadableStream(V2, prefix, argument);
    }
    if (V2?.[Symbol.asyncIterator]) {
        return V2;
    }
    return webidl.converters.XMLHttpRequestBodyInit(V2, prefix, argument);
};
webidl.converters.ResponseInit = webidl.dictionaryConverter([
    {
        key: "status",
        converter: webidl.converters["unsigned short"],
        defaultValue: ()=>200
    },
    {
        key: "statusText",
        converter: webidl.converters.ByteString,
        defaultValue: ()=>""
    },
    {
        key: "headers",
        converter: webidl.converters.HeadersInit
    }
]);
module2.exports = {
    isNetworkError,
    makeNetworkError,
    makeResponse,
    makeAppropriateNetworkError,
    filterResponse,
    Response: Response2,
    cloneResponse,
    fromInnerResponse
};

return module2.exports;
}
