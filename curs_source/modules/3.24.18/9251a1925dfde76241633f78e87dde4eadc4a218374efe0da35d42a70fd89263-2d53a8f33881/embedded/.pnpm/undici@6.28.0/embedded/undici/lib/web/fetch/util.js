import { require_util8 } from "../../core/util.js";
import { require_constants11 } from "./constants.js";
import { require_data_url } from "./data-url.js";
import { require_global3 } from "./global.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_util9_cache;
export function require_util9() {
if (__wakaru_require_util9_cache) return __wakaru_require_util9_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util9_cache = module2;
"use strict";
var { Transform: Transform2 } = require("node:stream");
var zlib2 = require("node:zlib");
var { redirectStatusSet, referrerPolicySet: referrerPolicyTokens, badPortsSet } = require_constants11();
var { getGlobalOrigin } = require_global3();
var { collectASequenceOfCodePoints, collectAnHTTPQuotedString, removeChars, parseMIMEType } = require_data_url();
var { performance: performance6 } = require("node:perf_hooks");
var { isBlobLike, ReadableStreamFrom, isValidHTTPToken, normalizedMethodRecordsBase } = require_util8();
var assert4 = require("node:assert");
var { isUint8Array } = require("node:util/types");
var { webidl } = require_webidl2();
var supportedHashes = [];
var crypto8;
try {
    crypto8 = require("node:crypto");
    const possibleRelevantHashes = [
        "sha256",
        "sha384",
        "sha512"
    ];
    supportedHashes = crypto8.getHashes().filter((hash)=>possibleRelevantHashes.includes(hash));
} catch  {}
function responseURL(response) {
    const urlList = response.urlList;
    const length = urlList.length;
    return length === 0 ? null : urlList[length - 1].toString();
}
function responseLocationURL(response, requestFragment) {
    if (!redirectStatusSet.has(response.status)) {
        return null;
    }
    let location = response.headersList.get("location", true);
    if (location !== null && isValidHeaderValue(location)) {
        if (!isValidEncodedURL(location)) {
            location = normalizeBinaryStringToUtf8(location);
        }
        location = new URL(location, responseURL(response));
    }
    if (location && !location.hash) {
        location.hash = requestFragment;
    }
    return location;
}
function isValidEncodedURL(url2) {
    for(let i = 0; i < url2.length; ++i){
        const code = url2.charCodeAt(i);
        if (code > 126 || code < 32) {
            return false;
        }
    }
    return true;
}
function normalizeBinaryStringToUtf8(value) {
    return Buffer.from(value, "binary").toString("utf8");
}
function requestCurrentURL(request3) {
    return request3.urlList[request3.urlList.length - 1];
}
function requestBadPort(request3) {
    const url2 = requestCurrentURL(request3);
    if (urlIsHttpHttpsScheme(url2) && badPortsSet.has(url2.port)) {
        return "blocked";
    }
    return "allowed";
}
function isErrorLike2(object4) {
    return object4 instanceof Error || (object4?.constructor?.name === "Error" || object4?.constructor?.name === "DOMException");
}
function isValidReasonPhrase(statusText) {
    for(let i = 0; i < statusText.length; ++i){
        const c = statusText.charCodeAt(i);
        if (!(c === 9 || c >= 32 && c <= 126 || c >= 128 && c <= 255)) {
            return false;
        }
    }
    return true;
}
var isValidHeaderName = isValidHTTPToken;
function isValidHeaderValue(potentialValue) {
    return (potentialValue[0] === "	" || potentialValue[0] === " " || potentialValue[potentialValue.length - 1] === "	" || potentialValue[potentialValue.length - 1] === " " || potentialValue.includes("\n") || potentialValue.includes("\r") || potentialValue.includes("\0")) === false;
}
function setRequestReferrerPolicyOnRedirect(request3, actualResponse) {
    const { headersList } = actualResponse;
    const policyHeader = (headersList.get("referrer-policy", true) ?? "").split(",");
    let policy = "";
    if (policyHeader.length > 0) {
        for(let i = policyHeader.length; i !== 0; i--){
            const token = policyHeader[i - 1].trim();
            if (referrerPolicyTokens.has(token)) {
                policy = token;
                break;
            }
        }
    }
    if (policy !== "") {
        request3.referrerPolicy = policy;
    }
}
function crossOriginResourcePolicyCheck() {
    return "allowed";
}
function corsCheck() {
    return "success";
}
function TAOCheck() {
    return "success";
}
function appendFetchMetadata(httpRequest) {
    let header = null;
    header = httpRequest.mode;
    httpRequest.headersList.set("sec-fetch-mode", header, true);
}
function appendRequestOriginHeader(request3) {
    let serializedOrigin = request3.origin;
    if (serializedOrigin === "client" || serializedOrigin === void 0) {
        return;
    }
    if (request3.responseTainting === "cors" || request3.mode === "websocket") {
        request3.headersList.append("origin", serializedOrigin, true);
    } else if (request3.method !== "GET" && request3.method !== "HEAD") {
        switch(request3.referrerPolicy){
            case "no-referrer":
                serializedOrigin = null;
                break;
            case "no-referrer-when-downgrade":
            case "strict-origin":
            case "strict-origin-when-cross-origin":
                if (request3.origin && urlHasHttpsScheme(request3.origin) && !urlHasHttpsScheme(requestCurrentURL(request3))) {
                    serializedOrigin = null;
                }
                break;
            case "same-origin":
                if (!sameOrigin(request3, requestCurrentURL(request3))) {
                    serializedOrigin = null;
                }
                break;
            default:
        }
        request3.headersList.append("origin", serializedOrigin, true);
    }
}
function coarsenTime(timestamp2, crossOriginIsolatedCapability) {
    return timestamp2;
}
function clampAndCoarsenConnectionTimingInfo(connectionTimingInfo, defaultStartTime, crossOriginIsolatedCapability) {
    if (!connectionTimingInfo?.startTime || connectionTimingInfo.startTime < defaultStartTime) {
        return {
            domainLookupStartTime: defaultStartTime,
            domainLookupEndTime: defaultStartTime,
            connectionStartTime: defaultStartTime,
            connectionEndTime: defaultStartTime,
            secureConnectionStartTime: defaultStartTime,
            ALPNNegotiatedProtocol: connectionTimingInfo?.ALPNNegotiatedProtocol
        };
    }
    return {
        domainLookupStartTime: coarsenTime(connectionTimingInfo.domainLookupStartTime, crossOriginIsolatedCapability),
        domainLookupEndTime: coarsenTime(connectionTimingInfo.domainLookupEndTime, crossOriginIsolatedCapability),
        connectionStartTime: coarsenTime(connectionTimingInfo.connectionStartTime, crossOriginIsolatedCapability),
        connectionEndTime: coarsenTime(connectionTimingInfo.connectionEndTime, crossOriginIsolatedCapability),
        secureConnectionStartTime: coarsenTime(connectionTimingInfo.secureConnectionStartTime, crossOriginIsolatedCapability),
        ALPNNegotiatedProtocol: connectionTimingInfo.ALPNNegotiatedProtocol
    };
}
function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
    return coarsenTime(performance6.now(), crossOriginIsolatedCapability);
}
function createOpaqueTimingInfo(timingInfo) {
    return {
        startTime: timingInfo.startTime ?? 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: timingInfo.startTime ?? 0,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
    };
}
function makePolicyContainer() {
    return {
        referrerPolicy: "strict-origin-when-cross-origin"
    };
}
function clonePolicyContainer(policyContainer) {
    return {
        referrerPolicy: policyContainer.referrerPolicy
    };
}
function determineRequestsReferrer(request3) {
    const policy = request3.referrerPolicy;
    assert4(policy);
    let referrerSource = null;
    if (request3.referrer === "client") {
        const globalOrigin = getGlobalOrigin();
        if (!globalOrigin || globalOrigin.origin === "null") {
            return "no-referrer";
        }
        referrerSource = new URL(globalOrigin);
    } else if (request3.referrer instanceof URL) {
        referrerSource = request3.referrer;
    }
    let referrerURL = stripURLForReferrer(referrerSource);
    const referrerOrigin = stripURLForReferrer(referrerSource, true);
    if (referrerURL.toString().length > 4096) {
        referrerURL = referrerOrigin;
    }
    const areSameOrigin = sameOrigin(request3, referrerURL);
    const isNonPotentiallyTrustWorthy = isURLPotentiallyTrustworthy(referrerURL) && !isURLPotentiallyTrustworthy(request3.url);
    switch(policy){
        case "origin":
            return referrerOrigin != null ? referrerOrigin : stripURLForReferrer(referrerSource, true);
        case "unsafe-url":
            return referrerURL;
        case "same-origin":
            return areSameOrigin ? referrerOrigin : "no-referrer";
        case "origin-when-cross-origin":
            return areSameOrigin ? referrerURL : referrerOrigin;
        case "strict-origin-when-cross-origin":
            {
                const currentURL = requestCurrentURL(request3);
                if (sameOrigin(referrerURL, currentURL)) {
                    return referrerURL;
                }
                if (isURLPotentiallyTrustworthy(referrerURL) && !isURLPotentiallyTrustworthy(currentURL)) {
                    return "no-referrer";
                }
                return referrerOrigin;
            }
        case "strict-origin":
        case "no-referrer-when-downgrade":
        default:
            return isNonPotentiallyTrustWorthy ? "no-referrer" : referrerOrigin;
    }
}
function stripURLForReferrer(url2, originOnly) {
    assert4(url2 instanceof URL);
    url2 = new URL(url2);
    if (url2.protocol === "file:" || url2.protocol === "about:" || url2.protocol === "blank:") {
        return "no-referrer";
    }
    url2.username = "";
    url2.password = "";
    url2.hash = "";
    if (originOnly) {
        url2.pathname = "";
        url2.search = "";
    }
    return url2;
}
function isURLPotentiallyTrustworthy(url2) {
    if (!(url2 instanceof URL)) {
        return false;
    }
    if (url2.href === "about:blank" || url2.href === "about:srcdoc") {
        return true;
    }
    if (url2.protocol === "data:") return true;
    if (url2.protocol === "file:") return true;
    return isOriginPotentiallyTrustworthy(url2.origin);
    function isOriginPotentiallyTrustworthy(origin) {
        if (origin == null || origin === "null") return false;
        const originAsURL = new URL(origin);
        if (originAsURL.protocol === "https:" || originAsURL.protocol === "wss:") {
            return true;
        }
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(originAsURL.hostname) || (originAsURL.hostname === "localhost" || originAsURL.hostname.includes("localhost.")) || originAsURL.hostname.endsWith(".localhost")) {
            return true;
        }
        return false;
    }
}
function bytesMatch(bytes, metadataList) {
    if (crypto8 === void 0) {
        return true;
    }
    const parsedMetadata = parseMetadata(metadataList);
    if (parsedMetadata === "no metadata") {
        return true;
    }
    if (parsedMetadata.length === 0) {
        return true;
    }
    const strongest = getStrongestMetadata(parsedMetadata);
    const metadata = filterMetadataListByAlgorithm(parsedMetadata, strongest);
    for (const item of metadata){
        const algorithm = item.algo;
        const expectedValue = item.hash;
        let actualValue = crypto8.createHash(algorithm).update(bytes).digest("base64");
        if (actualValue[actualValue.length - 1] === "=") {
            if (actualValue[actualValue.length - 2] === "=") {
                actualValue = actualValue.slice(0, -2);
            } else {
                actualValue = actualValue.slice(0, -1);
            }
        }
        if (compareBase64Mixed(actualValue, expectedValue)) {
            return true;
        }
    }
    return false;
}
var parseHashWithOptions = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function parseMetadata(metadata) {
    const result = [];
    let empty = true;
    for (const token of metadata.split(" ")){
        empty = false;
        const parsedToken = parseHashWithOptions.exec(token);
        if (parsedToken === null || parsedToken.groups === void 0 || parsedToken.groups.algo === void 0) {
            continue;
        }
        const algorithm = parsedToken.groups.algo.toLowerCase();
        if (supportedHashes.includes(algorithm)) {
            result.push(parsedToken.groups);
        }
    }
    if (empty === true) {
        return "no metadata";
    }
    return result;
}
function getStrongestMetadata(metadataList) {
    let algorithm = metadataList[0].algo;
    if (algorithm[3] === "5") {
        return algorithm;
    }
    for(let i = 1; i < metadataList.length; ++i){
        const metadata = metadataList[i];
        if (metadata.algo[3] === "5") {
            algorithm = "sha512";
            break;
        } else if (algorithm[3] === "3") {
            continue;
        } else if (metadata.algo[3] === "3") {
            algorithm = "sha384";
        }
    }
    return algorithm;
}
function filterMetadataListByAlgorithm(metadataList, algorithm) {
    if (metadataList.length === 1) {
        return metadataList;
    }
    let pos = 0;
    for(let i = 0; i < metadataList.length; ++i){
        if (metadataList[i].algo === algorithm) {
            metadataList[pos++] = metadataList[i];
        }
    }
    metadataList.length = pos;
    return metadataList;
}
function compareBase64Mixed(actualValue, expectedValue) {
    if (actualValue.length !== expectedValue.length) {
        return false;
    }
    for(let i = 0; i < actualValue.length; ++i){
        if (actualValue[i] !== expectedValue[i]) {
            if (actualValue[i] === "+" && expectedValue[i] === "-" || actualValue[i] === "/" && expectedValue[i] === "_") {
                continue;
            }
            return false;
        }
    }
    return true;
}
function tryUpgradeRequestToAPotentiallyTrustworthyURL(request3) {}
function sameOrigin(A2, B2) {
    if (A2.origin === B2.origin && A2.origin === "null") {
        return true;
    }
    if (A2.protocol === B2.protocol && A2.hostname === B2.hostname && A2.port === B2.port) {
        return true;
    }
    return false;
}
function createDeferredPromise() {
    let res;
    let rej;
    const promise = new Promise((resolve36, reject2)=>{
        res = resolve36;
        rej = reject2;
    });
    return {
        promise,
        resolve: res,
        reject: rej
    };
}
function isAborted3(fetchParams) {
    return fetchParams.controller.state === "aborted";
}
function isCancelled(fetchParams) {
    return fetchParams.controller.state === "aborted" || fetchParams.controller.state === "terminated";
}
function normalizeMethod(method) {
    return normalizedMethodRecordsBase[method.toLowerCase()] ?? method;
}
function serializeJavascriptValueToJSONString(value) {
    const result = JSON.stringify(value);
    if (result === void 0) {
        throw new TypeError("Value is not JSON serializable");
    }
    assert4(typeof result === "string");
    return result;
}
var esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
function createIterator(name17, kInternalIterator, keyIndex = 0, valueIndex = 1) {
    class FastIterableIterator {
        #target;
        #kind;
        #index;
        constructor(target, kind){
            this.#target = target;
            this.#kind = kind;
            this.#index = 0;
        }
        next() {
            if (typeof this !== "object" || this === null || !(#target in this)) {
                throw new TypeError(`'next' called on an object that does not implement interface ${name17} Iterator.`);
            }
            const index = this.#index;
            const values = this.#target[kInternalIterator];
            const len = values.length;
            if (index >= len) {
                return {
                    value: void 0,
                    done: true
                };
            }
            const { [keyIndex]: key, [valueIndex]: value } = values[index];
            this.#index = index + 1;
            let result;
            switch(this.#kind){
                case "key":
                    result = key;
                    break;
                case "value":
                    result = value;
                    break;
                case "key+value":
                    result = [
                        key,
                        value
                    ];
                    break;
            }
            return {
                value: result,
                done: false
            };
        }
    }
    delete FastIterableIterator.prototype.constructor;
    Object.setPrototypeOf(FastIterableIterator.prototype, esIteratorPrototype);
    Object.defineProperties(FastIterableIterator.prototype, {
        [Symbol.toStringTag]: {
            writable: false,
            enumerable: false,
            configurable: true,
            value: `${name17} Iterator`
        },
        next: {
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    return function(target, kind) {
        return new FastIterableIterator(target, kind);
    };
}
function iteratorMixin(name17, object4, kInternalIterator, keyIndex = 0, valueIndex = 1) {
    const makeIterator = createIterator(name17, kInternalIterator, keyIndex, valueIndex);
    const properties = {
        keys: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function keys() {
                webidl.brandCheck(this, object4);
                return makeIterator(this, "key");
            }
        },
        values: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function values() {
                webidl.brandCheck(this, object4);
                return makeIterator(this, "value");
            }
        },
        entries: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function entries() {
                webidl.brandCheck(this, object4);
                return makeIterator(this, "key+value");
            }
        },
        forEach: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function forEach(callbackfn, thisArg = globalThis) {
                webidl.brandCheck(this, object4);
                webidl.argumentLengthCheck(arguments, 1, `${name17}.forEach`);
                if (typeof callbackfn !== "function") {
                    throw new TypeError(`Failed to execute 'forEach' on '${name17}': parameter 1 is not of type 'Function'.`);
                }
                for (const { 0: key, 1: value } of makeIterator(this, "key+value")){
                    callbackfn.call(thisArg, value, key, this);
                }
            }
        }
    };
    return Object.defineProperties(object4.prototype, {
        ...properties,
        [Symbol.iterator]: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: properties.entries.value
        }
    });
}
async function fullyReadBody(body, processBody, processBodyError) {
    const successSteps = processBody;
    const errorSteps = processBodyError;
    let reader;
    try {
        reader = body.stream.getReader();
    } catch (e) {
        errorSteps(e);
        return;
    }
    try {
        successSteps(await readAllBytes2(reader));
    } catch (e) {
        errorSteps(e);
    }
}
function isReadableStreamLike(stream3) {
    return stream3 instanceof ReadableStream || stream3[Symbol.toStringTag] === "ReadableStream" && typeof stream3.tee === "function";
}
function readableStreamClose(controller) {
    try {
        controller.close();
        controller.byobRequest?.respond(0);
    } catch (err) {
        if (!err.message.includes("Controller is already closed") && !err.message.includes("ReadableStream is already closed")) {
            throw err;
        }
    }
}
var invalidIsomorphicEncodeValueRegex = /[^\x00-\xFF]/;
function isomorphicEncode(input) {
    assert4(!invalidIsomorphicEncodeValueRegex.test(input));
    return input;
}
async function readAllBytes2(reader) {
    const bytes = [];
    let byteLength2 = 0;
    while(true){
        const { done, value: chunk } = await reader.read();
        if (done) {
            return Buffer.concat(bytes, byteLength2);
        }
        if (!isUint8Array(chunk)) {
            throw new TypeError("Received non-Uint8Array chunk");
        }
        bytes.push(chunk);
        byteLength2 += chunk.length;
    }
}
function urlIsLocal(url2) {
    assert4("protocol" in url2);
    const protocol = url2.protocol;
    return protocol === "about:" || protocol === "blob:" || protocol === "data:";
}
function urlHasHttpsScheme(url2) {
    return typeof url2 === "string" && url2[5] === ":" && url2[0] === "h" && url2[1] === "t" && url2[2] === "t" && url2[3] === "p" && url2[4] === "s" || url2.protocol === "https:";
}
function urlIsHttpHttpsScheme(url2) {
    assert4("protocol" in url2);
    const protocol = url2.protocol;
    return protocol === "http:" || protocol === "https:";
}
function simpleRangeHeaderValue(value, allowWhitespace) {
    const data = value;
    if (!data.startsWith("bytes")) {
        return "failure";
    }
    const position = {
        position: 5
    };
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === "	" || char === " ", data, position);
    }
    if (data.charCodeAt(position.position) !== 61) {
        return "failure";
    }
    position.position++;
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === "	" || char === " ", data, position);
    }
    const rangeStart = collectASequenceOfCodePoints((char)=>{
        const code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
    }, data, position);
    const rangeStartValue = rangeStart.length ? Number(rangeStart) : null;
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === "	" || char === " ", data, position);
    }
    if (data.charCodeAt(position.position) !== 45) {
        return "failure";
    }
    position.position++;
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === "	" || char === " ", data, position);
    }
    const rangeEnd = collectASequenceOfCodePoints((char)=>{
        const code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
    }, data, position);
    const rangeEndValue = rangeEnd.length ? Number(rangeEnd) : null;
    if (position.position < data.length) {
        return "failure";
    }
    if (rangeEndValue === null && rangeStartValue === null) {
        return "failure";
    }
    if (rangeStartValue > rangeEndValue) {
        return "failure";
    }
    return {
        rangeStartValue,
        rangeEndValue
    };
}
function buildContentRange(rangeStart, rangeEnd, fullLength) {
    let contentRange = "bytes ";
    contentRange += isomorphicEncode(`${rangeStart}`);
    contentRange += "-";
    contentRange += isomorphicEncode(`${rangeEnd}`);
    contentRange += "/";
    contentRange += isomorphicEncode(`${fullLength}`);
    return contentRange;
}
var InflateStream = class extends Transform2 {
    #zlibOptions;
    constructor(zlibOptions){
        super();
        this.#zlibOptions = zlibOptions;
    }
    _transform(chunk, encoding, callback) {
        if (!this._inflateStream) {
            if (chunk.length === 0) {
                callback();
                return;
            }
            this._inflateStream = (chunk[0] & 15) === 8 ? zlib2.createInflate(this.#zlibOptions) : zlib2.createInflateRaw(this.#zlibOptions);
            this._inflateStream.on("data", this.push.bind(this));
            this._inflateStream.on("end", ()=>this.push(null));
            this._inflateStream.on("error", (err)=>this.destroy(err));
        }
        this._inflateStream.write(chunk, encoding, callback);
    }
    _final(callback) {
        if (this._inflateStream) {
            this._inflateStream.end();
            this._inflateStream = null;
        }
        callback();
    }
};
function createInflate(zlibOptions) {
    return new InflateStream(zlibOptions);
}
function extractMimeType(headers) {
    let charset2 = null;
    let essence = null;
    let mimeType = null;
    const values = getDecodeSplit("content-type", headers);
    if (values === null) {
        return "failure";
    }
    for (const value of values){
        const temporaryMimeType = parseMIMEType(value);
        if (temporaryMimeType === "failure" || temporaryMimeType.essence === "*/*") {
            continue;
        }
        mimeType = temporaryMimeType;
        if (mimeType.essence !== essence) {
            charset2 = null;
            if (mimeType.parameters.has("charset")) {
                charset2 = mimeType.parameters.get("charset");
            }
            essence = mimeType.essence;
        } else if (!mimeType.parameters.has("charset") && charset2 !== null) {
            mimeType.parameters.set("charset", charset2);
        }
    }
    if (mimeType == null) {
        return "failure";
    }
    return mimeType;
}
function gettingDecodingSplitting(value) {
    const input = value;
    const position = {
        position: 0
    };
    const values = [];
    let temporaryValue = "";
    while(position.position < input.length){
        temporaryValue += collectASequenceOfCodePoints((char)=>char !== '"' && char !== ",", input, position);
        if (position.position < input.length) {
            if (input.charCodeAt(position.position) === 34) {
                temporaryValue += collectAnHTTPQuotedString(input, position);
                if (position.position < input.length) {
                    continue;
                }
            } else {
                assert4(input.charCodeAt(position.position) === 44);
                position.position++;
            }
        }
        temporaryValue = removeChars(temporaryValue, true, true, (char)=>char === 9 || char === 32);
        values.push(temporaryValue);
        temporaryValue = "";
    }
    return values;
}
function getDecodeSplit(name17, list2) {
    const value = list2.get(name17, true);
    if (value === null) {
        return null;
    }
    return gettingDecodingSplitting(value);
}
var textDecoder3 = new TextDecoder();
function utf8DecodeBytes(buffer) {
    if (buffer.length === 0) {
        return "";
    }
    if (buffer[0] === 239 && buffer[1] === 187 && buffer[2] === 191) {
        buffer = buffer.subarray(3);
    }
    const output = textDecoder3.decode(buffer);
    return output;
}
var EnvironmentSettingsObjectBase = class {
    get baseUrl() {
        return getGlobalOrigin();
    }
    get origin() {
        return this.baseUrl?.origin;
    }
    policyContainer = makePolicyContainer();
};
var EnvironmentSettingsObject = class {
    settingsObject = new EnvironmentSettingsObjectBase();
};
var environmentSettingsObject = new EnvironmentSettingsObject();
module2.exports = {
    isAborted: isAborted3,
    isCancelled,
    isValidEncodedURL,
    createDeferredPromise,
    ReadableStreamFrom,
    tryUpgradeRequestToAPotentiallyTrustworthyURL,
    clampAndCoarsenConnectionTimingInfo,
    coarsenedSharedCurrentTime,
    determineRequestsReferrer,
    makePolicyContainer,
    clonePolicyContainer,
    appendFetchMetadata,
    appendRequestOriginHeader,
    TAOCheck,
    corsCheck,
    crossOriginResourcePolicyCheck,
    createOpaqueTimingInfo,
    setRequestReferrerPolicyOnRedirect,
    isValidHTTPToken,
    requestBadPort,
    requestCurrentURL,
    responseURL,
    responseLocationURL,
    isBlobLike,
    isURLPotentiallyTrustworthy,
    isValidReasonPhrase,
    sameOrigin,
    normalizeMethod,
    serializeJavascriptValueToJSONString,
    iteratorMixin,
    createIterator,
    isValidHeaderName,
    isValidHeaderValue,
    isErrorLike: isErrorLike2,
    fullyReadBody,
    bytesMatch,
    isReadableStreamLike,
    readableStreamClose,
    isomorphicEncode,
    urlIsLocal,
    urlHasHttpsScheme,
    urlIsHttpHttpsScheme,
    readAllBytes: readAllBytes2,
    simpleRangeHeaderValue,
    buildContentRange,
    parseMetadata,
    createInflate,
    extractMimeType,
    getDecodeSplit,
    utf8DecodeBytes,
    environmentSettingsObject
};

return module2.exports;
}
