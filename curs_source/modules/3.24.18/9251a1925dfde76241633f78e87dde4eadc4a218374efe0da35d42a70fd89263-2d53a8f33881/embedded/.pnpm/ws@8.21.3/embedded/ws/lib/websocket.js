import { require_buffer_util } from "./buffer-util.js";
import { require_constants8 } from "./constants.js";
import { require_event_target } from "./event-target.js";
import { require_extension } from "./extension.js";
import { require_permessage_deflate } from "./permessage-deflate.js";
import { require_receiver2 } from "./receiver.js";
import { require_sender } from "./sender.js";
import { require_validation } from "./validation.js";
var __wakaru_require_websocket2_cache;
export function require_websocket2() {
if (__wakaru_require_websocket2_cache) return __wakaru_require_websocket2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_websocket2_cache = module2;
"use strict";
var EventEmitter = require("events");
var https3 = require("https");
var http4 = require("http");
var net = require("net");
var tls3 = require("tls");
var { randomBytes: randomBytes5, createHash: createHash31 } = require("crypto");
var { Duplex, Readable: Readable2 } = require("stream");
var { URL: URL2 } = require("url");
var PerMessageDeflate = require_permessage_deflate();
var Receiver = require_receiver2();
var Sender = require_sender();
var { isBlob } = require_validation();
var { BINARY_TYPES, CLOSE_TIMEOUT, EMPTY_BUFFER, GUID, kForOnEventAttribute, kListener, kStatusCode, kWebSocket, NOOP } = require_constants8();
var { EventTarget: { addEventListener, removeEventListener } } = require_event_target();
var { format: format2, parse: parse11 } = require_extension();
var { toBuffer: toBuffer2 } = require_buffer_util();
var kAborted = Symbol("kAborted");
var protocolVersions = [
    8,
    13
];
var readyStates = [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
];
var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
var WebSocket = class _WebSocket extends EventEmitter {
    constructor(address, protocols, options2){
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
            this._bufferedAmount = 0;
            this._isServer = false;
            this._redirects = 0;
            if (protocols === void 0) {
                protocols = [];
            } else if (!Array.isArray(protocols)) {
                if (typeof protocols === "object" && protocols !== null) {
                    options2 = protocols;
                    protocols = [];
                } else {
                    protocols = [
                        protocols
                    ];
                }
            }
            initAsClient(this, address, protocols, options2);
        } else {
            this._autoPong = options2.autoPong;
            this._closeTimeout = options2.closeTimeout;
            this._isServer = true;
        }
    }
    get binaryType() {
        return this._binaryType;
    }
    set binaryType(type2) {
        if (!BINARY_TYPES.includes(type2)) return;
        this._binaryType = type2;
        if (this._receiver) this._receiver._binaryType = type2;
    }
    get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    get extensions() {
        return Object.keys(this._extensions).join();
    }
    get isPaused() {
        return this._paused;
    }
    get onclose() {
        return null;
    }
    get onerror() {
        return null;
    }
    get onopen() {
        return null;
    }
    get onmessage() {
        return null;
    }
    get protocol() {
        return this._protocol;
    }
    get readyState() {
        return this._readyState;
    }
    get url() {
        return this._url;
    }
    setSocket(socket, head, options2) {
        const receiver = new Receiver({
            allowSynchronousEvents: options2.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxBufferedChunks: options2.maxBufferedChunks,
            maxFragments: options2.maxFragments,
            maxPayload: options2.maxPayload,
            skipUTF8Validation: options2.skipUTF8Validation
        });
        const sender = new Sender(socket, this._extensions, options2.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
    }
    emitClose() {
        if (!this._socket) {
            this._readyState = _WebSocket.CLOSED;
            this.emit("close", this._closeCode, this._closeMessage);
            return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
            this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
    }
    close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
            const msg = "WebSocket was closed before the connection was established";
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
            if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                this._socket.end();
            }
            return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err)=>{
            if (err) return;
            this._closeFrameSent = true;
            if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
                this._socket.end();
            }
        });
        setCloseTimer(this);
    }
    pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
            return;
        }
        this._paused = true;
        this._socket.pause();
    }
    ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
            throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
            cb = data;
            data = mask = void 0;
        } else if (typeof mask === "function") {
            cb = mask;
            mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
            throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
            cb = data;
            data = mask = void 0;
        } else if (typeof mask === "function") {
            cb = mask;
            mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
            return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    send(data, options2, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
            throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options2 === "function") {
            cb = options2;
            options2 = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        const opts = {
            binary: typeof data !== "string",
            mask: !this._isServer,
            compress: true,
            fin: true,
            ...options2
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
            opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
            const msg = "WebSocket was closed before the connection was established";
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this._socket) {
            this._readyState = _WebSocket.CLOSING;
            this._socket.destroy();
        }
    }
};
Object.defineProperty(WebSocket, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
});
Object.defineProperty(WebSocket.prototype, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
});
Object.defineProperty(WebSocket, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
});
Object.defineProperty(WebSocket.prototype, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
});
Object.defineProperty(WebSocket, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
});
Object.defineProperty(WebSocket.prototype, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
});
Object.defineProperty(WebSocket, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
});
Object.defineProperty(WebSocket.prototype, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
});
[
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url"
].forEach((property)=>{
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
[
    "open",
    "error",
    "close",
    "message"
].forEach((method)=>{
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get () {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) return listener[kListener];
            }
            return null;
        },
        set (handler) {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) {
                    this.removeListener(method, listener);
                    break;
                }
            }
            if (typeof handler !== "function") return;
            this.addEventListener(method, handler, {
                [kForOnEventAttribute]: true
            });
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module2.exports = WebSocket;
function initAsClient(websocket, address, protocols, options2) {
    const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxBufferedChunks: 256 * 1024,
        maxFragments: 16 * 1024,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options2,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
    };
    websocket._autoPong = opts.autoPong;
    websocket._closeTimeout = opts.closeTimeout;
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`);
    }
    let parsedUrl;
    if (address instanceof URL2) {
        parsedUrl = address;
    } else {
        try {
            parsedUrl = new URL2(address);
        } catch  {
            throw new SyntaxError(`Invalid URL: ${address}`);
        }
    }
    if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
    } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
    }
    websocket._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === "wss:";
    const isIpcUrl = parsedUrl.protocol === "ws+unix:";
    let invalidUrlMessage;
    if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
    } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
    }
    if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
            throw err;
        } else {
            emitErrorAndClose(websocket, err);
            return;
        }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes5(16).toString("base64");
    const request3 = isSecure ? https3.request : http4.request;
    const protocolSet = new Set();
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate({
            ...opts.perMessageDeflate,
            isServer: false,
            maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format2({
            [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
    }
    if (protocols.length) {
        for (const protocol of protocols){
            if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
                throw new SyntaxError("An invalid or duplicated subprotocol was specified");
            }
            protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
        if (websocket._redirects === 0) {
            websocket._originalIpc = isIpcUrl;
            websocket._originalSecure = isSecure;
            websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
            const headers = options2 && options2.headers;
            options2 = {
                ...options2,
                headers: {}
            };
            if (headers) {
                for (const [key2, value] of Object.entries(headers)){
                    options2.headers[key2.toLowerCase()] = value;
                }
            }
        } else if (websocket.listenerCount("redirect") === 0) {
            const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
            if (!isSameHost || websocket._originalSecure && !isSecure) {
                delete opts.headers.authorization;
                delete opts.headers.cookie;
                if (!isSameHost) delete opts.headers.host;
                opts.auth = void 0;
            }
        }
        if (opts.auth && !options2.headers.authorization) {
            options2.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request3(opts);
        if (websocket._redirects) {
            websocket.emit("redirect", websocket.url, req);
        }
    } else {
        req = websocket._req = request3(opts);
    }
    if (opts.timeout) {
        req.on("timeout", ()=>{
            abortHandshake(websocket, req, "Opening handshake has timed out");
        });
    }
    req.on("error", (err)=>{
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
    });
    req.on("response", (res)=>{
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, "Maximum redirects exceeded");
                return;
            }
            req.abort();
            let addr;
            try {
                addr = new URL2(location, address);
            } catch (e) {
                const err = new SyntaxError(`Invalid URL: ${location}`);
                emitErrorAndClose(websocket, err);
                return;
            }
            initAsClient(websocket, addr, protocols, options2);
        } else if (!websocket.emit("unexpected-response", req, res)) {
            abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
    });
    req.on("upgrade", (res, socket, head)=>{
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
            abortHandshake(websocket, socket, "Invalid Upgrade header");
            return;
        }
        const digest = createHash31("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
            abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
            return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
            if (!protocolSet.size) {
                protError = "Server sent a subprotocol but none was requested";
            } else if (!protocolSet.has(serverProt)) {
                protError = "Server sent an invalid subprotocol";
            }
        } else if (protocolSet.size) {
            protError = "Server sent no subprotocol";
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
            if (!perMessageDeflate) {
                const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
                abortHandshake(websocket, socket, message);
                return;
            }
            let extensions;
            try {
                extensions = parse11(secWebSocketExtensions);
            } catch (err) {
                const message = "Invalid Sec-WebSocket-Extensions header";
                abortHandshake(websocket, socket, message);
                return;
            }
            const extensionNames = Object.keys(extensions);
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                const message = "Server indicated an extension that was not requested";
                abortHandshake(websocket, socket, message);
                return;
            }
            try {
                perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err) {
                const message = "Invalid Sec-WebSocket-Extensions header";
                abortHandshake(websocket, socket, message);
                return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
            allowSynchronousEvents: opts.allowSynchronousEvents,
            generateMask: opts.generateMask,
            maxBufferedChunks: opts.maxBufferedChunks,
            maxFragments: opts.maxFragments,
            maxPayload: opts.maxPayload,
            skipUTF8Validation: opts.skipUTF8Validation
        });
    });
    if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
    } else {
        req.end();
    }
}
function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    websocket._errorEmitted = true;
    websocket.emit("error", err);
    websocket.emitClose();
}
function netConnect(options2) {
    options2.path = options2.socketPath;
    return net.connect(options2);
}
function tlsConnect(options2) {
    options2.path = void 0;
    if (!options2.servername && options2.servername !== "") {
        options2.servername = net.isIP(options2.host) ? "" : options2.host;
    }
    return tls3.connect(options2);
}
function abortHandshake(websocket, stream3, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream3.setHeader) {
        stream3[kAborted] = true;
        stream3.abort();
        if (stream3.socket && !stream3.socket.destroyed) {
            stream3.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
    } else {
        stream3.destroy(err);
        stream3.once("error", websocket.emit.bind(websocket, "error"));
        stream3.once("close", websocket.emitClose.bind(websocket));
    }
}
function sendAfterClose(websocket, data, cb) {
    if (data) {
        const length = isBlob(data) ? data.size : toBuffer2(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`);
        process.nextTick(cb, err);
    }
}
function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === void 0) return;
    websocket._socket.removeListener("data", socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
}
function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
    }
    if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
    }
}
function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit("message", data, isBinary);
}
function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
    websocket.emit("ping", data);
}
function receiverOnPong(data) {
    this[kWebSocket].emit("pong", data);
}
function resume(stream3) {
    stream3.resume();
}
function senderOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket.readyState === WebSocket.CLOSED) return;
    if (websocket.readyState === WebSocket.OPEN) {
        websocket._readyState = WebSocket.CLOSING;
        setCloseTimer(websocket);
    }
    this._socket.end();
    if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
    }
}
function setCloseTimer(websocket) {
    websocket._closeTimer = setTimeout(websocket._socket.destroy.bind(websocket._socket), websocket._closeTimeout);
}
function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener("close", socketOnClose);
    this.removeListener("data", socketOnData);
    this.removeListener("end", socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = void 0;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
    }
}
function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener("error", socketOnError);
    this.on("error", NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}

return module2.exports;
}
