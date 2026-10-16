import { require_util } from "../core/util.js";
import { require_constants3 } from "./constants.js";
import { require_global } from "./global.js";
var __wakaru_require_util2_cache;
export function require_util2() {
if (__wakaru_require_util2_cache) return __wakaru_require_util2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util2_cache = module2;
"use strict";
var { redirectStatusSet, referrerPolicySet: referrerPolicyTokens, badPortsSet } = require_constants3();
var { getGlobalOrigin } = require_global();
var { performance: performance6 } = require("perf_hooks");
var { isBlobLike, toUSVString, ReadableStreamFrom } = require_util();
var assert4 = require("assert");
var { isUint8Array } = require("util/types");
var supportedHashes = [];
var crypto8;
try {
    crypto8 = require("crypto");
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
    let location = response.headersList.get("location");
    if (location !== null && isValidHeaderValue(location)) {
        location = new URL(location, responseURL(response));
    }
    if (location && !location.hash) {
        location.hash = requestFragment;
    }
    return location;
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
function isTokenCharCode(c) {
    switch(c){
        case 34:
        case 40:
        case 41:
        case 44:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 123:
        case 125:
            return false;
        default:
            return c >= 33 && c <= 126;
    }
}
function isValidHTTPToken(characters) {
    if (characters.length === 0) {
        return false;
    }
    for(let i = 0; i < characters.length; ++i){
        if (!isTokenCharCode(characters.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}
function isValidHeaderName(potentialValue) {
    return isValidHTTPToken(potentialValue);
}
function isValidHeaderValue(potentialValue) {
    if (potentialValue.startsWith("	") || potentialValue.startsWith(" ") || potentialValue.endsWith("	") || potentialValue.endsWith(" ")) {
        return false;
    }
    if (potentialValue.includes("\0") || potentialValue.includes("\r") || potentialValue.includes("\n")) {
        return false;
    }
    return true;
}
function setRequestReferrerPolicyOnRedirect(request3, actualResponse) {
    const { headersList } = actualResponse;
    const policyHeader = (headersList.get("referrer-policy") ?? "").split(",");
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
    httpRequest.headersList.set("sec-fetch-mode", header);
}
function appendRequestOriginHeader(request3) {
    let serializedOrigin = request3.origin;
    if (request3.responseTainting === "cors" || request3.mode === "websocket") {
        if (serializedOrigin) {
            request3.headersList.append("origin", serializedOrigin);
        }
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
        if (serializedOrigin) {
            request3.headersList.append("origin", serializedOrigin);
        }
    }
}
function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
    return performance6.now();
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
var normalizeMethodRecord = {
    delete: "DELETE",
    DELETE: "DELETE",
    get: "GET",
    GET: "GET",
    head: "HEAD",
    HEAD: "HEAD",
    options: "OPTIONS",
    OPTIONS: "OPTIONS",
    post: "POST",
    POST: "POST",
    put: "PUT",
    PUT: "PUT"
};
Object.setPrototypeOf(normalizeMethodRecord, null);
function normalizeMethod(method) {
    return normalizeMethodRecord[method.toLowerCase()] ?? method;
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
function makeIterator(iterator, name17, kind) {
    const object4 = {
        index: 0,
        kind,
        target: iterator
    };
    const i = {
        next () {
            if (Object.getPrototypeOf(this) !== i) {
                throw new TypeError(`'next' called on an object that does not implement interface ${name17} Iterator.`);
            }
            const { index, kind: kind2, target } = object4;
            const values = target();
            const len = values.length;
            if (index >= len) {
                return {
                    value: void 0,
                    done: true
                };
            }
            const pair = values[index];
            object4.index = index + 1;
            return iteratorResult(pair, kind2);
        },
        [Symbol.toStringTag]: `${name17} Iterator`
    };
    Object.setPrototypeOf(i, esIteratorPrototype);
    return Object.setPrototypeOf({}, i);
}
function iteratorResult(pair, kind) {
    let result;
    switch(kind){
        case "key":
            {
                result = pair[0];
                break;
            }
        case "value":
            {
                result = pair[1];
                break;
            }
        case "key+value":
            {
                result = pair;
                break;
            }
    }
    return {
        value: result,
        done: false
    };
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
        const result = await readAllBytes2(reader);
        successSteps(result);
    } catch (e) {
        errorSteps(e);
    }
}
var ReadableStream2 = globalThis.ReadableStream;
function isReadableStreamLike(stream3) {
    if (!ReadableStream2) {
        ReadableStream2 = require("stream/web").ReadableStream;
    }
    return stream3 instanceof ReadableStream2 || stream3[Symbol.toStringTag] === "ReadableStream" && typeof stream3.tee === "function";
}
var MAXIMUM_ARGUMENT_LENGTH = 65535;
function isomorphicDecode(input) {
    if (input.length < MAXIMUM_ARGUMENT_LENGTH) {
        return String.fromCharCode(...input);
    }
    return input.reduce((previous, current)=>previous + String.fromCharCode(current), "");
}
function readableStreamClose(controller) {
    try {
        controller.close();
    } catch (err) {
        if (!err.message.includes("Controller is already closed")) {
            throw err;
        }
    }
}
function isomorphicEncode(input) {
    for(let i = 0; i < input.length; i++){
        assert4(input.charCodeAt(i) <= 255);
    }
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
    if (typeof url2 === "string") {
        return url2.startsWith("https:");
    }
    return url2.protocol === "https:";
}
function urlIsHttpHttpsScheme(url2) {
    assert4("protocol" in url2);
    const protocol = url2.protocol;
    return protocol === "http:" || protocol === "https:";
}
var hasOwn = Object.hasOwn || ((dict, key)=>Object.prototype.hasOwnProperty.call(dict, key));
module2.exports = {
    isAborted: isAborted3,
    isCancelled,
    createDeferredPromise,
    ReadableStreamFrom,
    toUSVString,
    tryUpgradeRequestToAPotentiallyTrustworthyURL,
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
    makeIterator,
    isValidHeaderName,
    isValidHeaderValue,
    hasOwn,
    isErrorLike: isErrorLike2,
    fullyReadBody,
    bytesMatch,
    isReadableStreamLike,
    readableStreamClose,
    isomorphicEncode,
    isomorphicDecode,
    urlIsLocal,
    urlHasHttpsScheme,
    urlIsHttpHttpsScheme,
    readAllBytes: readAllBytes2,
    normalizeMethodRecord,
    parseMetadata
};

return module2.exports;
}
