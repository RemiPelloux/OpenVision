import { require_dispatcher_weakref } from "../compat/dispatcher-weakref.js";
import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
import { require_body } from "./body.js";
import { require_constants3 } from "./constants.js";
import { require_dataURL } from "./dataURL.js";
import { require_global } from "./global.js";
import { require_headers } from "./headers.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_request2_cache;
export function require_request2() {
if (__wakaru_require_request2_cache) return __wakaru_require_request2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_request2_cache = module2;
"use strict";
var { extractBody, mixinBody, cloneBody } = require_body();
var { Headers: Headers2, fill: fillHeaders, HeadersList } = require_headers();
var { FinalizationRegistry: FinalizationRegistry2 } = require_dispatcher_weakref()();
var util2 = require_util();
var { isValidHTTPToken, sameOrigin, normalizeMethod, makePolicyContainer, normalizeMethodRecord } = require_util2();
var { forbiddenMethodsSet, corsSafeListedMethodsSet, referrerPolicy, requestRedirect, requestMode, requestCredentials, requestCache, requestDuplex } = require_constants3();
var { kEnumerableProperty } = util2;
var { kHeaders, kSignal, kState, kGuard, kRealm } = require_symbols2();
var { webidl } = require_webidl();
var { getGlobalOrigin } = require_global();
var { URLSerializer } = require_dataURL();
var { kHeadersList, kConstruct } = require_symbols();
var assert4 = require("assert");
var { getMaxListeners, setMaxListeners, getEventListeners, defaultMaxListeners } = require("events");
var TransformStream2 = globalThis.TransformStream;
var kAbortController = Symbol("abortController");
var requestFinalizer = new FinalizationRegistry2(({ signal, abort })=>{
    signal.removeEventListener("abort", abort);
});
var Request2 = class _Request {
    constructor(input, init = {}){
        if (input === kConstruct) {
            return;
        }
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        });
        input = webidl.converters.RequestInfo(input);
        init = webidl.converters.RequestInit(init);
        this[kRealm] = {
            settingsObject: {
                baseUrl: getGlobalOrigin(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: makePolicyContainer()
            }
        };
        let request3 = null;
        let fallbackMode = null;
        const baseUrl = this[kRealm].settingsObject.baseUrl;
        let signal = null;
        if (typeof input === "string") {
            let parsedURL;
            try {
                parsedURL = new URL(input, baseUrl);
            } catch (err) {
                throw new TypeError("Failed to parse URL from " + input, {
                    cause: err
                });
            }
            if (parsedURL.username || parsedURL.password) {
                throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + input);
            }
            request3 = makeRequest({
                urlList: [
                    parsedURL
                ]
            });
            fallbackMode = "cors";
        } else {
            assert4(input instanceof _Request);
            request3 = input[kState];
            signal = input[kSignal];
        }
        const origin = this[kRealm].settingsObject.origin;
        let window2 = "client";
        if (request3.window?.constructor?.name === "EnvironmentSettingsObject" && sameOrigin(request3.window, origin)) {
            window2 = request3.window;
        }
        if (init.window != null) {
            throw new TypeError(`'window' option '${window2}' must be null`);
        }
        if ("window" in init) {
            window2 = "no-window";
        }
        request3 = makeRequest({
            method: request3.method,
            headersList: request3.headersList,
            unsafeRequest: request3.unsafeRequest,
            client: this[kRealm].settingsObject,
            window: window2,
            priority: request3.priority,
            origin: request3.origin,
            referrer: request3.referrer,
            referrerPolicy: request3.referrerPolicy,
            mode: request3.mode,
            credentials: request3.credentials,
            cache: request3.cache,
            redirect: request3.redirect,
            integrity: request3.integrity,
            keepalive: request3.keepalive,
            reloadNavigation: request3.reloadNavigation,
            historyNavigation: request3.historyNavigation,
            urlList: [
                ...request3.urlList
            ]
        });
        const initHasKey = Object.keys(init).length !== 0;
        if (initHasKey) {
            if (request3.mode === "navigate") {
                request3.mode = "same-origin";
            }
            request3.reloadNavigation = false;
            request3.historyNavigation = false;
            request3.origin = "client";
            request3.referrer = "client";
            request3.referrerPolicy = "";
            request3.url = request3.urlList[request3.urlList.length - 1];
            request3.urlList = [
                request3.url
            ];
        }
        if (init.referrer !== void 0) {
            const referrer = init.referrer;
            if (referrer === "") {
                request3.referrer = "no-referrer";
            } else {
                let parsedReferrer;
                try {
                    parsedReferrer = new URL(referrer, baseUrl);
                } catch (err) {
                    throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, {
                        cause: err
                    });
                }
                if (parsedReferrer.protocol === "about:" && parsedReferrer.hostname === "client" || origin && !sameOrigin(parsedReferrer, this[kRealm].settingsObject.baseUrl)) {
                    request3.referrer = "client";
                } else {
                    request3.referrer = parsedReferrer;
                }
            }
        }
        if (init.referrerPolicy !== void 0) {
            request3.referrerPolicy = init.referrerPolicy;
        }
        let mode;
        if (init.mode !== void 0) {
            mode = init.mode;
        } else {
            mode = fallbackMode;
        }
        if (mode === "navigate") {
            throw webidl.errors.exception({
                header: "Request constructor",
                message: "invalid request mode navigate."
            });
        }
        if (mode != null) {
            request3.mode = mode;
        }
        if (init.credentials !== void 0) {
            request3.credentials = init.credentials;
        }
        if (init.cache !== void 0) {
            request3.cache = init.cache;
        }
        if (request3.cache === "only-if-cached" && request3.mode !== "same-origin") {
            throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        }
        if (init.redirect !== void 0) {
            request3.redirect = init.redirect;
        }
        if (init.integrity != null) {
            request3.integrity = String(init.integrity);
        }
        if (init.keepalive !== void 0) {
            request3.keepalive = Boolean(init.keepalive);
        }
        if (init.method !== void 0) {
            let method = init.method;
            if (!isValidHTTPToken(method)) {
                throw new TypeError(`'${method}' is not a valid HTTP method.`);
            }
            if (forbiddenMethodsSet.has(method.toUpperCase())) {
                throw new TypeError(`'${method}' HTTP method is unsupported.`);
            }
            method = normalizeMethodRecord[method] ?? normalizeMethod(method);
            request3.method = method;
        }
        if (init.signal !== void 0) {
            signal = init.signal;
        }
        this[kState] = request3;
        const ac = new AbortController();
        this[kSignal] = ac.signal;
        this[kSignal][kRealm] = this[kRealm];
        if (signal != null) {
            if (!signal || typeof signal.aborted !== "boolean" || typeof signal.addEventListener !== "function") {
                throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            }
            if (signal.aborted) {
                ac.abort(signal.reason);
            } else {
                this[kAbortController] = ac;
                const acRef = new WeakRef(ac);
                const abort = function() {
                    const ac2 = acRef.deref();
                    if (ac2 !== void 0) {
                        ac2.abort(this.reason);
                    }
                };
                try {
                    if (typeof getMaxListeners === "function" && getMaxListeners(signal) === defaultMaxListeners) {
                        setMaxListeners(100, signal);
                    } else if (getEventListeners(signal, "abort").length >= defaultMaxListeners) {
                        setMaxListeners(100, signal);
                    }
                } catch  {}
                util2.addAbortListener(signal, abort);
                requestFinalizer.register(ac, {
                    signal,
                    abort
                });
            }
        }
        this[kHeaders] = new Headers2(kConstruct);
        this[kHeaders][kHeadersList] = request3.headersList;
        this[kHeaders][kGuard] = "request";
        this[kHeaders][kRealm] = this[kRealm];
        if (mode === "no-cors") {
            if (!corsSafeListedMethodsSet.has(request3.method)) {
                throw new TypeError(`'${request3.method} is unsupported in no-cors mode.`);
            }
            this[kHeaders][kGuard] = "request-no-cors";
        }
        if (initHasKey) {
            const headersList = this[kHeaders][kHeadersList];
            const headers = init.headers !== void 0 ? init.headers : new HeadersList(headersList);
            headersList.clear();
            if (headers instanceof HeadersList) {
                for (const [key, val] of headers){
                    headersList.append(key, val);
                }
                headersList.cookies = headers.cookies;
            } else {
                fillHeaders(this[kHeaders], headers);
            }
        }
        const inputBody = input instanceof _Request ? input[kState].body : null;
        if ((init.body != null || inputBody != null) && (request3.method === "GET" || request3.method === "HEAD")) {
            throw new TypeError("Request with GET/HEAD method cannot have body.");
        }
        let initBody = null;
        if (init.body != null) {
            const [extractedBody, contentType] = extractBody(init.body, request3.keepalive);
            initBody = extractedBody;
            if (contentType && !this[kHeaders][kHeadersList].contains("content-type")) {
                this[kHeaders].append("content-type", contentType);
            }
        }
        const inputOrInitBody = initBody ?? inputBody;
        if (inputOrInitBody != null && inputOrInitBody.source == null) {
            if (initBody != null && init.duplex == null) {
                throw new TypeError("RequestInit: duplex option is required when sending a body.");
            }
            if (request3.mode !== "same-origin" && request3.mode !== "cors") {
                throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            }
            request3.useCORSPreflightFlag = true;
        }
        let finalBody = inputOrInitBody;
        if (initBody == null && inputBody != null) {
            if (util2.isDisturbed(inputBody.stream) || inputBody.stream.locked) {
                throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            }
            if (!TransformStream2) {
                TransformStream2 = require("stream/web").TransformStream;
            }
            const identityTransform = new TransformStream2();
            inputBody.stream.pipeThrough(identityTransform);
            finalBody = {
                source: inputBody.source,
                length: inputBody.length,
                stream: identityTransform.readable
            };
        }
        this[kState].body = finalBody;
    }
    get method() {
        webidl.brandCheck(this, _Request);
        return this[kState].method;
    }
    get url() {
        webidl.brandCheck(this, _Request);
        return URLSerializer(this[kState].url);
    }
    get headers() {
        webidl.brandCheck(this, _Request);
        return this[kHeaders];
    }
    get destination() {
        webidl.brandCheck(this, _Request);
        return this[kState].destination;
    }
    get referrer() {
        webidl.brandCheck(this, _Request);
        if (this[kState].referrer === "no-referrer") {
            return "";
        }
        if (this[kState].referrer === "client") {
            return "about:client";
        }
        return this[kState].referrer.toString();
    }
    get referrerPolicy() {
        webidl.brandCheck(this, _Request);
        return this[kState].referrerPolicy;
    }
    get mode() {
        webidl.brandCheck(this, _Request);
        return this[kState].mode;
    }
    get credentials() {
        return this[kState].credentials;
    }
    get cache() {
        webidl.brandCheck(this, _Request);
        return this[kState].cache;
    }
    get redirect() {
        webidl.brandCheck(this, _Request);
        return this[kState].redirect;
    }
    get integrity() {
        webidl.brandCheck(this, _Request);
        return this[kState].integrity;
    }
    get keepalive() {
        webidl.brandCheck(this, _Request);
        return this[kState].keepalive;
    }
    get isReloadNavigation() {
        webidl.brandCheck(this, _Request);
        return this[kState].reloadNavigation;
    }
    get isHistoryNavigation() {
        webidl.brandCheck(this, _Request);
        return this[kState].historyNavigation;
    }
    get signal() {
        webidl.brandCheck(this, _Request);
        return this[kSignal];
    }
    get body() {
        webidl.brandCheck(this, _Request);
        return this[kState].body ? this[kState].body.stream : null;
    }
    get bodyUsed() {
        webidl.brandCheck(this, _Request);
        return !!this[kState].body && util2.isDisturbed(this[kState].body.stream);
    }
    get duplex() {
        webidl.brandCheck(this, _Request);
        return "half";
    }
    clone() {
        webidl.brandCheck(this, _Request);
        if (this.bodyUsed || this.body?.locked) {
            throw new TypeError("unusable");
        }
        const clonedRequest = cloneRequest(this[kState]);
        const clonedRequestObject = new _Request(kConstruct);
        clonedRequestObject[kState] = clonedRequest;
        clonedRequestObject[kRealm] = this[kRealm];
        clonedRequestObject[kHeaders] = new Headers2(kConstruct);
        clonedRequestObject[kHeaders][kHeadersList] = clonedRequest.headersList;
        clonedRequestObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedRequestObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        const ac = new AbortController();
        if (this.signal.aborted) {
            ac.abort(this.signal.reason);
        } else {
            util2.addAbortListener(this.signal, ()=>{
                ac.abort(this.signal.reason);
            });
        }
        clonedRequestObject[kSignal] = ac.signal;
        return clonedRequestObject;
    }
};
mixinBody(Request2);
function makeRequest(init) {
    const request3 = {
        method: "GET",
        localURLsOnly: false,
        unsafeRequest: false,
        body: null,
        client: null,
        reservedClient: null,
        replacesClientId: "",
        window: "client",
        keepalive: false,
        serviceWorkers: "all",
        initiator: "",
        destination: "",
        priority: null,
        origin: "client",
        policyContainer: "client",
        referrer: "client",
        referrerPolicy: "",
        mode: "no-cors",
        useCORSPreflightFlag: false,
        credentials: "same-origin",
        useCredentials: false,
        cache: "default",
        redirect: "follow",
        integrity: "",
        cryptoGraphicsNonceMetadata: "",
        parserMetadata: "",
        reloadNavigation: false,
        historyNavigation: false,
        userActivation: false,
        taintedOrigin: false,
        redirectCount: 0,
        responseTainting: "basic",
        preventNoCacheCacheControlHeaderModification: false,
        done: false,
        timingAllowFailed: false,
        ...init,
        headersList: init.headersList ? new HeadersList(init.headersList) : new HeadersList()
    };
    request3.url = request3.urlList[0];
    return request3;
}
function cloneRequest(request3) {
    const newRequest = makeRequest({
        ...request3,
        body: null
    });
    if (request3.body != null) {
        newRequest.body = cloneBody(request3.body);
    }
    return newRequest;
}
Object.defineProperties(Request2.prototype, {
    method: kEnumerableProperty,
    url: kEnumerableProperty,
    headers: kEnumerableProperty,
    redirect: kEnumerableProperty,
    clone: kEnumerableProperty,
    signal: kEnumerableProperty,
    duplex: kEnumerableProperty,
    destination: kEnumerableProperty,
    body: kEnumerableProperty,
    bodyUsed: kEnumerableProperty,
    isHistoryNavigation: kEnumerableProperty,
    isReloadNavigation: kEnumerableProperty,
    keepalive: kEnumerableProperty,
    integrity: kEnumerableProperty,
    cache: kEnumerableProperty,
    credentials: kEnumerableProperty,
    attribute: kEnumerableProperty,
    referrerPolicy: kEnumerableProperty,
    referrer: kEnumerableProperty,
    mode: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: true
    }
});
webidl.converters.Request = webidl.interfaceConverter(Request2);
webidl.converters.RequestInfo = function(V2) {
    if (typeof V2 === "string") {
        return webidl.converters.USVString(V2);
    }
    if (V2 instanceof Request2) {
        return webidl.converters.Request(V2);
    }
    return webidl.converters.USVString(V2);
};
webidl.converters.AbortSignal = webidl.interfaceConverter(AbortSignal);
webidl.converters.RequestInit = webidl.dictionaryConverter([
    {
        key: "method",
        converter: webidl.converters.ByteString
    },
    {
        key: "headers",
        converter: webidl.converters.HeadersInit
    },
    {
        key: "body",
        converter: webidl.nullableConverter(webidl.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: webidl.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: webidl.converters.DOMString,
        allowedValues: referrerPolicy
    },
    {
        key: "mode",
        converter: webidl.converters.DOMString,
        allowedValues: requestMode
    },
    {
        key: "credentials",
        converter: webidl.converters.DOMString,
        allowedValues: requestCredentials
    },
    {
        key: "cache",
        converter: webidl.converters.DOMString,
        allowedValues: requestCache
    },
    {
        key: "redirect",
        converter: webidl.converters.DOMString,
        allowedValues: requestRedirect
    },
    {
        key: "integrity",
        converter: webidl.converters.DOMString
    },
    {
        key: "keepalive",
        converter: webidl.converters.boolean
    },
    {
        key: "signal",
        converter: webidl.nullableConverter((signal)=>webidl.converters.AbortSignal(signal, {
                strict: false
            }))
    },
    {
        key: "window",
        converter: webidl.converters.any
    },
    {
        key: "duplex",
        converter: webidl.converters.DOMString,
        allowedValues: requestDuplex
    }
]);
module2.exports = {
    Request: Request2,
    makeRequest
};

return module2.exports;
}
