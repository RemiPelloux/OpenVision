import { require_constants9 } from "./constants.js";
import { require_errors2 } from "./errors.js";
import { require_symbols6 } from "./symbols.js";
import { require_tree } from "./tree.js";
var __wakaru_require_util8_cache;
export function require_util8() {
if (__wakaru_require_util8_cache) return __wakaru_require_util8_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util8_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { kDestroyed, kBodyUsed, kListeners, kBody } = require_symbols6();
var { IncomingMessage } = require("node:http");
var stream3 = require("node:stream");
var net = require("node:net");
var { Blob: Blob2 } = require("node:buffer");
var nodeUtil = require("node:util");
var { stringify: stringify2 } = require("node:querystring");
var { EventEmitter: EE } = require("node:events");
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var { headerNameLowerCasedRecord } = require_constants9();
var { tree } = require_tree();
var [nodeMajor, nodeMinor] = process.versions.node.split(".").map((v2)=>Number(v2));
var BodyAsyncIterable = class {
    constructor(body){
        this[kBody] = body;
        this[kBodyUsed] = false;
    }
    async *[Symbol.asyncIterator]() {
        assert4(!this[kBodyUsed], "disturbed");
        this[kBodyUsed] = true;
        yield* this[kBody];
    }
};
function wrapRequestBody(body) {
    if (isStream(body)) {
        if (bodyLength(body) === 0) {
            body.on("data", function() {
                assert4(false);
            });
        }
        if (typeof body.readableDidRead !== "boolean") {
            body[kBodyUsed] = false;
            EE.prototype.on.call(body, "data", function() {
                this[kBodyUsed] = true;
            });
        }
        return body;
    } else if (body && typeof body.pipeTo === "function") {
        return new BodyAsyncIterable(body);
    } else if (body && typeof body !== "string" && !ArrayBuffer.isView(body) && isIterable(body)) {
        return new BodyAsyncIterable(body);
    } else {
        return body;
    }
}
function nop() {}
function isStream(obj) {
    return obj && typeof obj === "object" && typeof obj.pipe === "function" && typeof obj.on === "function";
}
function isBlobLike(object4) {
    if (object4 === null) {
        return false;
    } else if (object4 instanceof Blob2) {
        return true;
    } else if (typeof object4 !== "object") {
        return false;
    } else {
        const sTag = object4[Symbol.toStringTag];
        return (sTag === "Blob" || sTag === "File") && ("stream" in object4 && typeof object4.stream === "function" || "arrayBuffer" in object4 && typeof object4.arrayBuffer === "function");
    }
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
function isValidPort(port) {
    const value = parseInt(port, 10);
    return value === Number(port) && value >= 0 && value <= 65535;
}
function isHttpOrHttpsPrefixed(value) {
    return value != null && value[0] === "h" && value[1] === "t" && value[2] === "t" && value[3] === "p" && (value[4] === ":" || value[4] === "s" && value[5] === ":");
}
function parseURL(url2) {
    if (typeof url2 === "string") {
        url2 = new URL(url2);
        if (!isHttpOrHttpsPrefixed(url2.origin || url2.protocol)) {
            throw new InvalidArgumentError3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        }
        return url2;
    }
    if (!url2 || typeof url2 !== "object") {
        throw new InvalidArgumentError3("Invalid URL: The URL argument must be a non-null object.");
    }
    if (!(url2 instanceof URL)) {
        if (url2.port != null && url2.port !== "" && isValidPort(url2.port) === false) {
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
        if (!isHttpOrHttpsPrefixed(url2.origin || url2.protocol)) {
            throw new InvalidArgumentError3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        }
        const port = url2.port != null ? url2.port : url2.protocol === "https:" ? 443 : 80;
        let origin = url2.origin != null ? url2.origin : `${url2.protocol || ""}//${url2.hostname || ""}:${port}`;
        let path64 = url2.path != null ? url2.path : `${url2.pathname || ""}${url2.search || ""}`;
        if (origin[origin.length - 1] === "/") {
            origin = origin.slice(0, origin.length - 1);
        }
        if (path64 && path64[0] !== "/") {
            path64 = `/${path64}`;
        }
        return new URL(`${origin}${path64}`);
    }
    if (!isHttpOrHttpsPrefixed(url2.origin || url2.protocol)) {
        throw new InvalidArgumentError3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
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
    assert4(typeof host === "string");
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
function isDestroyed(body) {
    return body && !!(body.destroyed || body[kDestroyed] || stream3.isDestroyed?.(body));
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
        queueMicrotask(()=>{
            stream4.emit("error", err);
        });
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
    return typeof value === "string" ? headerNameLowerCasedRecord[value] ?? value.toLowerCase() : tree.lookup(value) ?? value.toString("latin1").toLowerCase();
}
function bufferToLowerCasedHeaderName(value) {
    return tree.lookup(value) ?? value.toString("latin1").toLowerCase();
}
function parseHeaders2(headers, obj) {
    if (obj === void 0) obj = {};
    for(let i = 0; i < headers.length; i += 2){
        const key = headerNameToString(headers[i]);
        let val = obj[key];
        if (val) {
            if (typeof val === "string") {
                val = [
                    val
                ];
                obj[key] = val;
            }
            val.push(headers[i + 1].toString("utf8"));
        } else {
            const headersValue = headers[i + 1];
            if (typeof headersValue === "string") {
                obj[key] = headersValue;
            } else {
                obj[key] = Array.isArray(headersValue) ? headersValue.map((x)=>x.toString("utf8")) : headersValue.toString("utf8");
            }
        }
    }
    if ("content-length" in obj && "content-disposition" in obj) {
        obj["content-disposition"] = Buffer.from(obj["content-disposition"]).toString("latin1");
    }
    return obj;
}
function parseRawHeaders(headers) {
    const len = headers.length;
    const ret = new Array(len);
    let hasContentLength = false;
    let contentDispositionIdx = -1;
    let key;
    let val;
    let kLen = 0;
    for(let n = 0; n < headers.length; n += 2){
        key = headers[n];
        val = headers[n + 1];
        typeof key !== "string" && (key = key.toString());
        typeof val !== "string" && (val = val.toString("utf8"));
        kLen = key.length;
        if (kLen === 14 && key[7] === "-" && (key === "content-length" || key.toLowerCase() === "content-length")) {
            hasContentLength = true;
        } else if (kLen === 19 && key[7] === "-" && (key === "content-disposition" || key.toLowerCase() === "content-disposition")) {
            contentDispositionIdx = n + 1;
        }
        ret[n] = key;
        ret[n + 1] = val;
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
    return !!(body && (stream3.isDisturbed(body) || body[kBodyUsed]));
}
function isErrored(body) {
    return !!(body && stream3.isErrored(body));
}
function isReadable(body) {
    return !!(body && stream3.isReadable(body));
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
function ReadableStreamFrom(iterable) {
    let iterator;
    return new ReadableStream({
        async start () {
            iterator = iterable[Symbol.asyncIterator]();
        },
        async pull (controller) {
            const { done, value } = await iterator.next();
            if (done) {
                queueMicrotask(()=>{
                    controller.close();
                    controller.byobRequest?.respond(0);
                });
            } else {
                const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
                if (buf.byteLength) {
                    controller.enqueue(new Uint8Array(buf));
                }
            }
            return controller.desiredSize > 0;
        },
        async cancel (reason) {
            await iterator.return();
        },
        type: "bytes"
    });
}
function isFormDataLike(object4) {
    return object4 && typeof object4 === "object" && typeof object4.append === "function" && typeof object4.delete === "function" && typeof object4.get === "function" && typeof object4.getAll === "function" && typeof object4.has === "function" && typeof object4.set === "function" && object4[Symbol.toStringTag] === "FormData";
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
var hasToWellFormed = typeof String.prototype.toWellFormed === "function";
var hasIsWellFormed = typeof String.prototype.isWellFormed === "function";
function toUSVString(val) {
    return hasToWellFormed ? `${val}`.toWellFormed() : nodeUtil.toUSVString(val);
}
function isUSVString(val) {
    return hasIsWellFormed ? `${val}`.isWellFormed() : toUSVString(val) === `${val}`;
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
var headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function isValidHeaderValue(characters) {
    return !headerCharRegex.test(characters);
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
function addListener(obj, name17, listener) {
    const listeners = obj[kListeners] ??= [];
    listeners.push([
        name17,
        listener
    ]);
    obj.on(name17, listener);
    return obj;
}
function removeAllListeners(obj) {
    for (const [name17, listener] of obj[kListeners] ?? []){
        obj.removeListener(name17, listener);
    }
    obj[kListeners] = null;
}
function errorRequest(client, request3, err) {
    try {
        request3.onError(err);
        assert4(request3.aborted);
    } catch (err2) {
        client.emit("error", err2);
    }
}
var kEnumerableProperty = Object.create(null);
kEnumerableProperty.enumerable = true;
var normalizedMethodRecordsBase = {
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
var normalizedMethodRecords = {
    ...normalizedMethodRecordsBase,
    patch: "patch",
    PATCH: "PATCH"
};
Object.setPrototypeOf(normalizedMethodRecordsBase, null);
Object.setPrototypeOf(normalizedMethodRecords, null);
module2.exports = {
    kEnumerableProperty,
    nop,
    isDisturbed,
    isErrored,
    isReadable,
    toUSVString,
    isUSVString,
    isBlobLike,
    parseOrigin,
    parseURL,
    getServerName,
    isStream,
    isIterable,
    isAsyncIterable: isAsyncIterable3,
    isDestroyed,
    headerNameToString,
    bufferToLowerCasedHeaderName,
    addListener,
    removeAllListeners,
    errorRequest,
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
    addAbortListener,
    isValidHTTPToken,
    isValidHeaderValue,
    isTokenCharCode,
    parseRangeHeader,
    normalizedMethodRecordsBase,
    normalizedMethodRecords,
    isValidPort,
    isHttpOrHttpsPrefixed,
    nodeMajor,
    nodeMinor,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ],
    wrapRequestBody
};

return module2.exports;
}
