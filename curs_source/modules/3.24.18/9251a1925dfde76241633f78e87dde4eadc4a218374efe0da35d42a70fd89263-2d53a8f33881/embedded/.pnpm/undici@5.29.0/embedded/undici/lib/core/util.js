import { require_constants2 } from "./constants.js";
import { require_errors } from "./errors.js";
import { require_symbols } from "./symbols.js";
var __wakaru_require_util_cache;
export function require_util() {
if (__wakaru_require_util_cache) return __wakaru_require_util_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util_cache = module2;
"use strict";
var assert4 = require("assert");
var { kDestroyed, kBodyUsed } = require_symbols();
var { IncomingMessage } = require("http");
var stream3 = require("stream");
var net = require("net");
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var { Blob: Blob2 } = require("buffer");
var nodeUtil = require("util");
var { stringify: stringify2 } = require("querystring");
var { headerNameLowerCasedRecord } = require_constants2();
var [nodeMajor, nodeMinor] = process.versions.node.split(".").map((v2)=>Number(v2));
function nop() {}
function isStream(obj) {
    return obj && typeof obj === "object" && typeof obj.pipe === "function" && typeof obj.on === "function";
}
function isBlobLike(object4) {
    return Blob2 && object4 instanceof Blob2 || object4 && typeof object4 === "object" && (typeof object4.stream === "function" || typeof object4.arrayBuffer === "function") && /^(Blob|File)$/.test(object4[Symbol.toStringTag]);
}
function buildURL(url2, queryParams) {
    if (url2.includes("?") || url2.includes("#")) {
        throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    }
    const stringified = stringify2(queryParams);
    if (stringified) {
        url2 += "?" + stringified;
    }
    return url2;
}
function parseURL(url2) {
    if (typeof url2 === "string") {
        url2 = new URL(url2);
        if (!/^https?:/.test(url2.origin || url2.protocol)) {
            throw new InvalidArgumentError3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        }
        return url2;
    }
    if (!url2 || typeof url2 !== "object") {
        throw new InvalidArgumentError3("Invalid URL: The URL argument must be a non-null object.");
    }
    if (!/^https?:/.test(url2.origin || url2.protocol)) {
        throw new InvalidArgumentError3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    }
    if (!(url2 instanceof URL)) {
        if (url2.port != null && url2.port !== "" && !Number.isFinite(parseInt(url2.port))) {
            throw new InvalidArgumentError3("Invalid URL: port must be a valid integer or a string representation of an integer.");
        }
        if (url2.path != null && typeof url2.path !== "string") {
            throw new InvalidArgumentError3("Invalid URL path: the path must be a string or null/undefined.");
        }
        if (url2.pathname != null && typeof url2.pathname !== "string") {
            throw new InvalidArgumentError3("Invalid URL pathname: the pathname must be a string or null/undefined.");
        }
        if (url2.hostname != null && typeof url2.hostname !== "string") {
            throw new InvalidArgumentError3("Invalid URL hostname: the hostname must be a string or null/undefined.");
        }
        if (url2.origin != null && typeof url2.origin !== "string") {
            throw new InvalidArgumentError3("Invalid URL origin: the origin must be a string or null/undefined.");
        }
        const port = url2.port != null ? url2.port : url2.protocol === "https:" ? 443 : 80;
        let origin = url2.origin != null ? url2.origin : `${url2.protocol}//${url2.hostname}:${port}`;
        let path64 = url2.path != null ? url2.path : `${url2.pathname || ""}${url2.search || ""}`;
        if (origin.endsWith("/")) {
            origin = origin.substring(0, origin.length - 1);
        }
        if (path64 && !path64.startsWith("/")) {
            path64 = `/${path64}`;
        }
        url2 = new URL(origin + path64);
    }
    return url2;
}
function parseOrigin(url2) {
    url2 = parseURL(url2);
    if (url2.pathname !== "/" || url2.search || url2.hash) {
        throw new InvalidArgumentError3("invalid url");
    }
    return url2;
}
function getHostname(host) {
    if (host[0] === "[") {
        const idx2 = host.indexOf("]");
        assert4(idx2 !== -1);
        return host.substring(1, idx2);
    }
    const idx = host.indexOf(":");
    if (idx === -1) return host;
    return host.substring(0, idx);
}
function getServerName(host) {
    if (!host) {
        return null;
    }
    assert4.strictEqual(typeof host, "string");
    const servername = getHostname(host);
    if (net.isIP(servername)) {
        return "";
    }
    return servername;
}
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function isAsyncIterable3(obj) {
    return !!(obj != null && typeof obj[Symbol.asyncIterator] === "function");
}
function isIterable(obj) {
    return !!(obj != null && (typeof obj[Symbol.iterator] === "function" || typeof obj[Symbol.asyncIterator] === "function"));
}
function bodyLength(body) {
    if (body == null) {
        return 0;
    } else if (isStream(body)) {
        const state = body._readableState;
        return state && state.objectMode === false && state.ended === true && Number.isFinite(state.length) ? state.length : null;
    } else if (isBlobLike(body)) {
        return body.size != null ? body.size : null;
    } else if (isBuffer(body)) {
        return body.byteLength;
    }
    return null;
}
function isDestroyed(stream4) {
    return !stream4 || !!(stream4.destroyed || stream4[kDestroyed]);
}
function isReadableAborted(stream4) {
    const state = stream4 && stream4._readableState;
    return isDestroyed(stream4) && state && !state.endEmitted;
}
function destroy(stream4, err) {
    if (stream4 == null || !isStream(stream4) || isDestroyed(stream4)) {
        return;
    }
    if (typeof stream4.destroy === "function") {
        if (Object.getPrototypeOf(stream4).constructor === IncomingMessage) {
            stream4.socket = null;
        }
        stream4.destroy(err);
    } else if (err) {
        process.nextTick((stream5, err2)=>{
            stream5.emit("error", err2);
        }, stream4, err);
    }
    if (stream4.destroyed !== true) {
        stream4[kDestroyed] = true;
    }
}
var KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
function parseKeepAliveTimeout(val) {
    const m2 = val.toString().match(KEEPALIVE_TIMEOUT_EXPR);
    return m2 ? parseInt(m2[1], 10) * 1e3 : null;
}
function headerNameToString(value) {
    return headerNameLowerCasedRecord[value] || value.toLowerCase();
}
function parseHeaders2(headers, obj = {}) {
    if (!Array.isArray(headers)) return headers;
    for(let i = 0; i < headers.length; i += 2){
        const key = headers[i].toString().toLowerCase();
        let val = obj[key];
        if (!val) {
            if (Array.isArray(headers[i + 1])) {
                obj[key] = headers[i + 1].map((x)=>x.toString("utf8"));
            } else {
                obj[key] = headers[i + 1].toString("utf8");
            }
        } else {
            if (!Array.isArray(val)) {
                val = [
                    val
                ];
                obj[key] = val;
            }
            val.push(headers[i + 1].toString("utf8"));
        }
    }
    if ("content-length" in obj && "content-disposition" in obj) {
        obj["content-disposition"] = Buffer.from(obj["content-disposition"]).toString("latin1");
    }
    return obj;
}
function parseRawHeaders(headers) {
    const ret = [];
    let hasContentLength = false;
    let contentDispositionIdx = -1;
    for(let n = 0; n < headers.length; n += 2){
        const key = headers[n + 0].toString();
        const val = headers[n + 1].toString("utf8");
        if (key.length === 14 && (key === "content-length" || key.toLowerCase() === "content-length")) {
            ret.push(key, val);
            hasContentLength = true;
        } else if (key.length === 19 && (key === "content-disposition" || key.toLowerCase() === "content-disposition")) {
            contentDispositionIdx = ret.push(key, val) - 1;
        } else {
            ret.push(key, val);
        }
    }
    if (hasContentLength && contentDispositionIdx !== -1) {
        ret[contentDispositionIdx] = Buffer.from(ret[contentDispositionIdx]).toString("latin1");
    }
    return ret;
}
function isBuffer(buffer) {
    return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
}
function validateHandler(handler, method, upgrade) {
    if (!handler || typeof handler !== "object") {
        throw new InvalidArgumentError3("handler must be an object");
    }
    if (typeof handler.onConnect !== "function") {
        throw new InvalidArgumentError3("invalid onConnect method");
    }
    if (typeof handler.onError !== "function") {
        throw new InvalidArgumentError3("invalid onError method");
    }
    if (typeof handler.onBodySent !== "function" && handler.onBodySent !== void 0) {
        throw new InvalidArgumentError3("invalid onBodySent method");
    }
    if (upgrade || method === "CONNECT") {
        if (typeof handler.onUpgrade !== "function") {
            throw new InvalidArgumentError3("invalid onUpgrade method");
        }
    } else {
        if (typeof handler.onHeaders !== "function") {
            throw new InvalidArgumentError3("invalid onHeaders method");
        }
        if (typeof handler.onData !== "function") {
            throw new InvalidArgumentError3("invalid onData method");
        }
        if (typeof handler.onComplete !== "function") {
            throw new InvalidArgumentError3("invalid onComplete method");
        }
    }
}
function isDisturbed(body) {
    return !!(body && (stream3.isDisturbed ? stream3.isDisturbed(body) || body[kBodyUsed] : body[kBodyUsed] || body.readableDidRead || body._readableState && body._readableState.dataEmitted || isReadableAborted(body)));
}
function isErrored(body) {
    return !!(body && (stream3.isErrored ? stream3.isErrored(body) : /state: 'errored'/.test(nodeUtil.inspect(body))));
}
function isReadable(body) {
    return !!(body && (stream3.isReadable ? stream3.isReadable(body) : /state: 'readable'/.test(nodeUtil.inspect(body))));
}
function getSocketInfo(socket) {
    return {
        localAddress: socket.localAddress,
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        remoteFamily: socket.remoteFamily,
        timeout: socket.timeout,
        bytesWritten: socket.bytesWritten,
        bytesRead: socket.bytesRead
    };
}
async function* convertIterableToBuffer(iterable) {
    for await (const chunk of iterable){
        yield Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    }
}
var ReadableStream2;
function ReadableStreamFrom(iterable) {
    if (!ReadableStream2) {
        ReadableStream2 = require("stream/web").ReadableStream;
    }
    if (ReadableStream2.from) {
        return ReadableStream2.from(convertIterableToBuffer(iterable));
    }
    let iterator;
    return new ReadableStream2({
        async start () {
            iterator = iterable[Symbol.asyncIterator]();
        },
        async pull (controller) {
            const { done, value } = await iterator.next();
            if (done) {
                queueMicrotask(()=>{
                    controller.close();
                });
            } else {
                const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
                controller.enqueue(new Uint8Array(buf));
            }
            return controller.desiredSize > 0;
        },
        async cancel (reason) {
            await iterator.return();
        }
    }, 0);
}
function isFormDataLike(object4) {
    return object4 && typeof object4 === "object" && typeof object4.append === "function" && typeof object4.delete === "function" && typeof object4.get === "function" && typeof object4.getAll === "function" && typeof object4.has === "function" && typeof object4.set === "function" && object4[Symbol.toStringTag] === "FormData";
}
function throwIfAborted2(signal) {
    if (!signal) {
        return;
    }
    if (typeof signal.throwIfAborted === "function") {
        signal.throwIfAborted();
    } else {
        if (signal.aborted) {
            const err = new Error("The operation was aborted");
            err.name = "AbortError";
            throw err;
        }
    }
}
function addAbortListener(signal, listener) {
    if ("addEventListener" in signal) {
        signal.addEventListener("abort", listener, {
            once: true
        });
        return ()=>signal.removeEventListener("abort", listener);
    }
    signal.addListener("abort", listener);
    return ()=>signal.removeListener("abort", listener);
}
var hasToWellFormed = !!String.prototype.toWellFormed;
function toUSVString(val) {
    if (hasToWellFormed) {
        return `${val}`.toWellFormed();
    } else if (nodeUtil.toUSVString) {
        return nodeUtil.toUSVString(val);
    }
    return `${val}`;
}
function parseRangeHeader(range2) {
    if (range2 == null || range2 === "") return {
        start: 0,
        end: null,
        size: null
    };
    const m2 = range2 ? range2.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
    return m2 ? {
        start: parseInt(m2[1]),
        end: m2[2] ? parseInt(m2[2]) : null,
        size: m2[3] ? parseInt(m2[3]) : null
    } : null;
}
var kEnumerableProperty = Object.create(null);
kEnumerableProperty.enumerable = true;
module2.exports = {
    kEnumerableProperty,
    nop,
    isDisturbed,
    isErrored,
    isReadable,
    toUSVString,
    isReadableAborted,
    isBlobLike,
    parseOrigin,
    parseURL,
    getServerName,
    isStream,
    isIterable,
    isAsyncIterable: isAsyncIterable3,
    isDestroyed,
    headerNameToString,
    parseRawHeaders,
    parseHeaders: parseHeaders2,
    parseKeepAliveTimeout,
    destroy,
    bodyLength,
    deepClone,
    ReadableStreamFrom,
    isBuffer,
    validateHandler,
    getSocketInfo,
    isFormDataLike,
    buildURL,
    throwIfAborted: throwIfAborted2,
    addAbortListener,
    parseRangeHeader,
    nodeMajor,
    nodeMinor,
    nodeHasAutoSelectFamily: nodeMajor > 18 || nodeMajor === 18 && nodeMinor >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};

return module2.exports;
}
