import { require_symbols6 } from "../../core/symbols.js";
import { require_util8 } from "../../core/util.js";
import { require_body2 } from "./body.js";
import { require_constants11 } from "./constants.js";
import { require_data_url } from "./data-url.js";
import { require_dispatcher_weakref2 } from "./dispatcher-weakref.js";
import { require_headers5 } from "./headers.js";
import { require_symbols7 } from "./symbols.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_request4_cache;
export function require_request4() {
if (__wakaru_require_request4_cache) return __wakaru_require_request4_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_request4_cache = module2;
"use strict";
var { extractBody, mixinBody, cloneBody, bodyUnusable } = require_body2();
var { Headers: Headers2, fill: fillHeaders, HeadersList, setHeadersGuard, getHeadersGuard, setHeadersList, getHeadersList } = require_headers5();
var { FinalizationRegistry: FinalizationRegistry2 } = require_dispatcher_weakref2()();
var util2 = require_util8();
var nodeUtil = require("node:util");
var { isValidHTTPToken, sameOrigin, environmentSettingsObject } = require_util9();
var { forbiddenMethodsSet, corsSafeListedMethodsSet, referrerPolicy, requestRedirect, requestMode, requestCredentials, requestCache, requestDuplex } = require_constants11();
var { kEnumerableProperty, normalizedMethodRecordsBase, normalizedMethodRecords } = util2;
var { kHeaders, kSignal, kState, kDispatcher } = require_symbols7();
var { webidl } = require_webidl2();
var { URLSerializer } = require_data_url();
var { kConstruct } = require_symbols6();
var assert4 = require("node:assert");
var { getMaxListeners, setMaxListeners, getEventListeners, defaultMaxListeners } = require("node:events");
var kAbortController = Symbol("abortController");
var requestFinalizer = new FinalizationRegistry2(({ signal, abort })=>{
    signal.removeEventListener("abort", abort);
});
var dependentControllerMap = new WeakMap();
function buildAbort(acRef) {
    return abort;
    function abort() {
        const ac = acRef.deref();
        if (ac !== void 0) {
            requestFinalizer.unregister(abort);
            this.removeEventListener("abort", abort);
            ac.abort(this.reason);
            const controllerList = dependentControllerMap.get(ac.signal);
            if (controllerList !== void 0) {
                if (controllerList.size !== 0) {
                    for (const ref of controllerList){
                        const ctrl = ref.deref();
                        if (ctrl !== void 0) {
                            ctrl.abort(this.reason);
                        }
                    }
                    controllerList.clear();
                }
                dependentControllerMap.delete(ac.signal);
            }
        }
    }
}
var patchMethodWarning = false;
var Request2 = class _Request {
    constructor(input, init = {}){
        webidl.util.markAsUncloneable(this);
        if (input === kConstruct) {
            return;
        }
        const prefix = "Request constructor";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        input = webidl.converters.RequestInfo(input, prefix, "input");
        init = webidl.converters.RequestInit(init, prefix, "init");
        let request3 = null;
        let fallbackMode = null;
        const baseUrl = environmentSettingsObject.settingsObject.baseUrl;
        let signal = null;
        if (typeof input === "string") {
            this[kDispatcher] = init.dispatcher;
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
            this[kDispatcher] = init.dispatcher || input[kDispatcher];
            assert4(input instanceof _Request);
            request3 = input[kState];
            signal = input[kSignal];
        }
        const origin = environmentSettingsObject.settingsObject.origin;
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
            client: environmentSettingsObject.settingsObject,
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
                if (parsedReferrer.protocol === "about:" && parsedReferrer.hostname === "client" || origin && !sameOrigin(parsedReferrer, environmentSettingsObject.settingsObject.baseUrl)) {
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
            const mayBeNormalized = normalizedMethodRecords[method];
            if (mayBeNormalized !== void 0) {
                request3.method = mayBeNormalized;
            } else {
                if (!isValidHTTPToken(method)) {
                    throw new TypeError(`'${method}' is not a valid HTTP method.`);
                }
                const upperCase = method.toUpperCase();
                if (forbiddenMethodsSet.has(upperCase)) {
                    throw new TypeError(`'${method}' HTTP method is unsupported.`);
                }
                method = normalizedMethodRecordsBase[upperCase] ?? method;
                request3.method = method;
            }
            if (!patchMethodWarning && request3.method === "patch") {
                process.emitWarning("Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.", {
                    code: "UNDICI-FETCH-patch"
                });
                patchMethodWarning = true;
            }
        }
        if (init.signal !== void 0) {
            signal = init.signal;
        }
        this[kState] = request3;
        const ac = new AbortController();
        this[kSignal] = ac.signal;
        if (signal != null) {
            if (!signal || typeof signal.aborted !== "boolean" || typeof signal.addEventListener !== "function") {
                throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            }
            if (signal.aborted) {
                ac.abort(signal.reason);
            } else {
                this[kAbortController] = ac;
                const acRef = new WeakRef(ac);
                const abort = buildAbort(acRef);
                try {
                    if (typeof getMaxListeners === "function" && getMaxListeners(signal) === defaultMaxListeners) {
                        setMaxListeners(1500, signal);
                    } else if (getEventListeners(signal, "abort").length >= defaultMaxListeners) {
                        setMaxListeners(1500, signal);
                    }
                } catch  {}
                util2.addAbortListener(signal, abort);
                requestFinalizer.register(ac, {
                    signal,
                    abort
                }, abort);
            }
        }
        this[kHeaders] = new Headers2(kConstruct);
        setHeadersList(this[kHeaders], request3.headersList);
        setHeadersGuard(this[kHeaders], "request");
        if (mode === "no-cors") {
            if (!corsSafeListedMethodsSet.has(request3.method)) {
                throw new TypeError(`'${request3.method} is unsupported in no-cors mode.`);
            }
            setHeadersGuard(this[kHeaders], "request-no-cors");
        }
        if (initHasKey) {
            const headersList = getHeadersList(this[kHeaders]);
            const headers = init.headers !== void 0 ? init.headers : new HeadersList(headersList);
            headersList.clear();
            if (headers instanceof HeadersList) {
                for (const { name: name17, value } of headers.rawValues()){
                    headersList.append(name17, value, false);
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
            if (contentType && !getHeadersList(this[kHeaders]).contains("content-type", true)) {
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
            if (bodyUnusable(input)) {
                throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            }
            const identityTransform = new TransformStream();
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
        if (bodyUnusable(this)) {
            throw new TypeError("unusable");
        }
        const clonedRequest = cloneRequest(this[kState]);
        const ac = new AbortController();
        if (this.signal.aborted) {
            ac.abort(this.signal.reason);
        } else {
            let list2 = dependentControllerMap.get(this.signal);
            if (list2 === void 0) {
                list2 = new Set();
                dependentControllerMap.set(this.signal, list2);
            }
            const acRef = new WeakRef(ac);
            list2.add(acRef);
            util2.addAbortListener(ac.signal, buildAbort(acRef));
        }
        return fromInnerRequest(clonedRequest, ac.signal, getHeadersGuard(this[kHeaders]));
    }
    [nodeUtil.inspect.custom](depth, options2) {
        if (options2.depth === null) {
            options2.depth = 2;
        }
        options2.colors ??= true;
        const properties = {
            method: this.method,
            url: this.url,
            headers: this.headers,
            destination: this.destination,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            mode: this.mode,
            credentials: this.credentials,
            cache: this.cache,
            redirect: this.redirect,
            integrity: this.integrity,
            keepalive: this.keepalive,
            isReloadNavigation: this.isReloadNavigation,
            isHistoryNavigation: this.isHistoryNavigation,
            signal: this.signal
        };
        return `Request ${nodeUtil.formatWithOptions(options2, properties)}`;
    }
};
mixinBody(Request2);
function makeRequest(init) {
    return {
        method: init.method ?? "GET",
        localURLsOnly: init.localURLsOnly ?? false,
        unsafeRequest: init.unsafeRequest ?? false,
        body: init.body ?? null,
        client: init.client ?? null,
        reservedClient: init.reservedClient ?? null,
        replacesClientId: init.replacesClientId ?? "",
        window: init.window ?? "client",
        keepalive: init.keepalive ?? false,
        serviceWorkers: init.serviceWorkers ?? "all",
        initiator: init.initiator ?? "",
        destination: init.destination ?? "",
        priority: init.priority ?? null,
        origin: init.origin ?? "client",
        policyContainer: init.policyContainer ?? "client",
        referrer: init.referrer ?? "client",
        referrerPolicy: init.referrerPolicy ?? "",
        mode: init.mode ?? "no-cors",
        useCORSPreflightFlag: init.useCORSPreflightFlag ?? false,
        credentials: init.credentials ?? "same-origin",
        useCredentials: init.useCredentials ?? false,
        cache: init.cache ?? "default",
        redirect: init.redirect ?? "follow",
        integrity: init.integrity ?? "",
        cryptoGraphicsNonceMetadata: init.cryptoGraphicsNonceMetadata ?? "",
        parserMetadata: init.parserMetadata ?? "",
        reloadNavigation: init.reloadNavigation ?? false,
        historyNavigation: init.historyNavigation ?? false,
        userActivation: init.userActivation ?? false,
        taintedOrigin: init.taintedOrigin ?? false,
        redirectCount: init.redirectCount ?? 0,
        responseTainting: init.responseTainting ?? "basic",
        preventNoCacheCacheControlHeaderModification: init.preventNoCacheCacheControlHeaderModification ?? false,
        done: init.done ?? false,
        timingAllowFailed: init.timingAllowFailed ?? false,
        urlList: init.urlList,
        url: init.urlList[0],
        headersList: init.headersList ? new HeadersList(init.headersList) : new HeadersList()
    };
}
function cloneRequest(request3) {
    const newRequest = makeRequest({
        ...request3,
        body: null
    });
    if (request3.body != null) {
        newRequest.body = cloneBody(newRequest, request3.body);
    }
    return newRequest;
}
function fromInnerRequest(innerRequest, signal, guard) {
    const request3 = new Request2(kConstruct);
    request3[kState] = innerRequest;
    request3[kSignal] = signal;
    request3[kHeaders] = new Headers2(kConstruct);
    setHeadersList(request3[kHeaders], innerRequest.headersList);
    setHeadersGuard(request3[kHeaders], guard);
    return request3;
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
webidl.converters.RequestInfo = function(V2, prefix, argument) {
    if (typeof V2 === "string") {
        return webidl.converters.USVString(V2, prefix, argument);
    }
    if (V2 instanceof Request2) {
        return webidl.converters.Request(V2, prefix, argument);
    }
    return webidl.converters.USVString(V2, prefix, argument);
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
        converter: webidl.nullableConverter((signal)=>webidl.converters.AbortSignal(signal, "RequestInit", "signal", {
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
    },
    {
        key: "dispatcher",
        converter: webidl.converters.any
    }
]);
module2.exports = {
    Request: Request2,
    makeRequest,
    fromInnerRequest,
    cloneRequest
};

return module2.exports;
}
