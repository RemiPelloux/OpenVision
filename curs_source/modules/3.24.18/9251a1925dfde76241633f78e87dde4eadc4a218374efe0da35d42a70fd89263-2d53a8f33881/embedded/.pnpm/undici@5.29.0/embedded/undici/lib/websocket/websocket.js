import { require_util } from "../core/util.js";
import { require_constants3 } from "../fetch/constants.js";
import { require_dataURL } from "../fetch/dataURL.js";
import { require_global } from "../fetch/global.js";
import { require_webidl } from "../fetch/webidl.js";
import { require_global2 } from "../global.js";
import { require_connection } from "./connection.js";
import { require_constants6 } from "./constants.js";
import { require_frame } from "./frame.js";
import { require_receiver } from "./receiver.js";
import { require_symbols5 } from "./symbols.js";
import { require_util7 } from "./util.js";
var __wakaru_require_websocket_cache;
export function require_websocket() {
if (__wakaru_require_websocket_cache) return __wakaru_require_websocket_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_websocket_cache = module2;
"use strict";
var { webidl } = require_webidl();
var { DOMException: DOMException2 } = require_constants3();
var { URLSerializer } = require_dataURL();
var { getGlobalOrigin } = require_global();
var { staticPropertyDescriptors, states, opcodes, emptyBuffer } = require_constants6();
var { kWebSocketURL, kReadyState, kController, kBinaryType, kResponse, kSentClose, kByteParser } = require_symbols5();
var { isEstablished, isClosing, isValidSubprotocol, failWebsocketConnection, fireEvent } = require_util7();
var { establishWebSocketConnection } = require_connection();
var { WebsocketFrameSend } = require_frame();
var { ByteParser } = require_receiver();
var { kEnumerableProperty, isBlobLike } = require_util();
var { getGlobalDispatcher } = require_global2();
var { types: types3 } = require("util");
var experimentalWarned = false;
var WebSocket = class _WebSocket extends EventTarget {
    #events = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #bufferedAmount = 0;
    #protocol = "";
    #extensions = "";
    constructor(url2, protocols = []){
        super();
        webidl.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        });
        if (!experimentalWarned) {
            experimentalWarned = true;
            process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
                code: "UNDICI-WS"
            });
        }
        const options2 = webidl.converters["DOMString or sequence<DOMString> or WebSocketInit"](protocols);
        url2 = webidl.converters.USVString(url2);
        protocols = options2.protocols;
        const baseURL = getGlobalOrigin();
        let urlRecord;
        try {
            urlRecord = new URL(url2, baseURL);
        } catch (e) {
            throw new DOMException2(e, "SyntaxError");
        }
        if (urlRecord.protocol === "http:") {
            urlRecord.protocol = "ws:";
        } else if (urlRecord.protocol === "https:") {
            urlRecord.protocol = "wss:";
        }
        if (urlRecord.protocol !== "ws:" && urlRecord.protocol !== "wss:") {
            throw new DOMException2(`Expected a ws: or wss: protocol, got ${urlRecord.protocol}`, "SyntaxError");
        }
        if (urlRecord.hash || urlRecord.href.endsWith("#")) {
            throw new DOMException2("Got fragment", "SyntaxError");
        }
        if (typeof protocols === "string") {
            protocols = [
                protocols
            ];
        }
        if (protocols.length !== new Set(protocols.map((p2)=>p2.toLowerCase())).size) {
            throw new DOMException2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        if (protocols.length > 0 && !protocols.every((p2)=>isValidSubprotocol(p2))) {
            throw new DOMException2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        this[kWebSocketURL] = new URL(urlRecord.href);
        this[kController] = establishWebSocketConnection(urlRecord, protocols, this, (response)=>this.#onConnectionEstablished(response), options2);
        this[kReadyState] = _WebSocket.CONNECTING;
        this[kBinaryType] = "blob";
    }
    close(code = void 0, reason = void 0) {
        webidl.brandCheck(this, _WebSocket);
        if (code !== void 0) {
            code = webidl.converters["unsigned short"](code, {
                clamp: true
            });
        }
        if (reason !== void 0) {
            reason = webidl.converters.USVString(reason);
        }
        if (code !== void 0) {
            if (code !== 1e3 && (code < 3e3 || code > 4999)) {
                throw new DOMException2("invalid code", "InvalidAccessError");
            }
        }
        let reasonByteLength = 0;
        if (reason !== void 0) {
            reasonByteLength = Buffer.byteLength(reason);
            if (reasonByteLength > 123) {
                throw new DOMException2(`Reason must be less than 123 bytes; received ${reasonByteLength}`, "SyntaxError");
            }
        }
        if (this[kReadyState] === _WebSocket.CLOSING || this[kReadyState] === _WebSocket.CLOSED) {} else if (!isEstablished(this)) {
            failWebsocketConnection(this, "Connection was closed before it was established.");
            this[kReadyState] = _WebSocket.CLOSING;
        } else if (!isClosing(this)) {
            const frame = new WebsocketFrameSend();
            if (code !== void 0 && reason === void 0) {
                frame.frameData = Buffer.allocUnsafe(2);
                frame.frameData.writeUInt16BE(code, 0);
            } else if (code !== void 0 && reason !== void 0) {
                frame.frameData = Buffer.allocUnsafe(2 + reasonByteLength);
                frame.frameData.writeUInt16BE(code, 0);
                frame.frameData.write(reason, 2, "utf-8");
            } else {
                frame.frameData = emptyBuffer;
            }
            const socket = this[kResponse].socket;
            socket.write(frame.createFrame(opcodes.CLOSE), (err)=>{
                if (!err) {
                    this[kSentClose] = true;
                }
            });
            this[kReadyState] = states.CLOSING;
        } else {
            this[kReadyState] = _WebSocket.CLOSING;
        }
    }
    send(data) {
        webidl.brandCheck(this, _WebSocket);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        });
        data = webidl.converters.WebSocketSendData(data);
        if (this[kReadyState] === _WebSocket.CONNECTING) {
            throw new DOMException2("Sent before connected.", "InvalidStateError");
        }
        if (!isEstablished(this) || isClosing(this)) {
            return;
        }
        const socket = this[kResponse].socket;
        if (typeof data === "string") {
            const value = Buffer.from(data);
            const frame = new WebsocketFrameSend(value);
            const buffer = frame.createFrame(opcodes.TEXT);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= value.byteLength;
            });
        } else if (types3.isArrayBuffer(data)) {
            const value = Buffer.from(data);
            const frame = new WebsocketFrameSend(value);
            const buffer = frame.createFrame(opcodes.BINARY);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= value.byteLength;
            });
        } else if (ArrayBuffer.isView(data)) {
            const ab = Buffer.from(data, data.byteOffset, data.byteLength);
            const frame = new WebsocketFrameSend(ab);
            const buffer = frame.createFrame(opcodes.BINARY);
            this.#bufferedAmount += ab.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= ab.byteLength;
            });
        } else if (isBlobLike(data)) {
            const frame = new WebsocketFrameSend();
            data.arrayBuffer().then((ab)=>{
                const value = Buffer.from(ab);
                frame.frameData = value;
                const buffer = frame.createFrame(opcodes.BINARY);
                this.#bufferedAmount += value.byteLength;
                socket.write(buffer, ()=>{
                    this.#bufferedAmount -= value.byteLength;
                });
            });
        }
    }
    get readyState() {
        webidl.brandCheck(this, _WebSocket);
        return this[kReadyState];
    }
    get bufferedAmount() {
        webidl.brandCheck(this, _WebSocket);
        return this.#bufferedAmount;
    }
    get url() {
        webidl.brandCheck(this, _WebSocket);
        return URLSerializer(this[kWebSocketURL]);
    }
    get extensions() {
        webidl.brandCheck(this, _WebSocket);
        return this.#extensions;
    }
    get protocol() {
        webidl.brandCheck(this, _WebSocket);
        return this.#protocol;
    }
    get onopen() {
        webidl.brandCheck(this, _WebSocket);
        return this.#events.open;
    }
    set onopen(fn) {
        webidl.brandCheck(this, _WebSocket);
        if (this.#events.open) {
            this.removeEventListener("open", this.#events.open);
        }
        if (typeof fn === "function") {
            this.#events.open = fn;
            this.addEventListener("open", fn);
        } else {
            this.#events.open = null;
        }
    }
    get onerror() {
        webidl.brandCheck(this, _WebSocket);
        return this.#events.error;
    }
    set onerror(fn) {
        webidl.brandCheck(this, _WebSocket);
        if (this.#events.error) {
            this.removeEventListener("error", this.#events.error);
        }
        if (typeof fn === "function") {
            this.#events.error = fn;
            this.addEventListener("error", fn);
        } else {
            this.#events.error = null;
        }
    }
    get onclose() {
        webidl.brandCheck(this, _WebSocket);
        return this.#events.close;
    }
    set onclose(fn) {
        webidl.brandCheck(this, _WebSocket);
        if (this.#events.close) {
            this.removeEventListener("close", this.#events.close);
        }
        if (typeof fn === "function") {
            this.#events.close = fn;
            this.addEventListener("close", fn);
        } else {
            this.#events.close = null;
        }
    }
    get onmessage() {
        webidl.brandCheck(this, _WebSocket);
        return this.#events.message;
    }
    set onmessage(fn) {
        webidl.brandCheck(this, _WebSocket);
        if (this.#events.message) {
            this.removeEventListener("message", this.#events.message);
        }
        if (typeof fn === "function") {
            this.#events.message = fn;
            this.addEventListener("message", fn);
        } else {
            this.#events.message = null;
        }
    }
    get binaryType() {
        webidl.brandCheck(this, _WebSocket);
        return this[kBinaryType];
    }
    set binaryType(type2) {
        webidl.brandCheck(this, _WebSocket);
        if (type2 !== "blob" && type2 !== "arraybuffer") {
            this[kBinaryType] = "blob";
        } else {
            this[kBinaryType] = type2;
        }
    }
    #onConnectionEstablished(response) {
        this[kResponse] = response;
        const parser = new ByteParser(this);
        parser.on("drain", function onParserDrain() {
            this.ws[kResponse].socket.resume();
        });
        response.socket.ws = this;
        this[kByteParser] = parser;
        this[kReadyState] = states.OPEN;
        const extensions = response.headersList.get("sec-websocket-extensions");
        if (extensions !== null) {
            this.#extensions = extensions;
        }
        const protocol = response.headersList.get("sec-websocket-protocol");
        if (protocol !== null) {
            this.#protocol = protocol;
        }
        fireEvent("open", this);
    }
};
WebSocket.CONNECTING = WebSocket.prototype.CONNECTING = states.CONNECTING;
WebSocket.OPEN = WebSocket.prototype.OPEN = states.OPEN;
WebSocket.CLOSING = WebSocket.prototype.CLOSING = states.CLOSING;
WebSocket.CLOSED = WebSocket.prototype.CLOSED = states.CLOSED;
Object.defineProperties(WebSocket.prototype, {
    CONNECTING: staticPropertyDescriptors,
    OPEN: staticPropertyDescriptors,
    CLOSING: staticPropertyDescriptors,
    CLOSED: staticPropertyDescriptors,
    url: kEnumerableProperty,
    readyState: kEnumerableProperty,
    bufferedAmount: kEnumerableProperty,
    onopen: kEnumerableProperty,
    onerror: kEnumerableProperty,
    onclose: kEnumerableProperty,
    close: kEnumerableProperty,
    onmessage: kEnumerableProperty,
    binaryType: kEnumerableProperty,
    send: kEnumerableProperty,
    extensions: kEnumerableProperty,
    protocol: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties(WebSocket, {
    CONNECTING: staticPropertyDescriptors,
    OPEN: staticPropertyDescriptors,
    CLOSING: staticPropertyDescriptors,
    CLOSED: staticPropertyDescriptors
});
webidl.converters["sequence<DOMString>"] = webidl.sequenceConverter(webidl.converters.DOMString);
webidl.converters["DOMString or sequence<DOMString>"] = function(V2) {
    if (webidl.util.Type(V2) === "Object" && Symbol.iterator in V2) {
        return webidl.converters["sequence<DOMString>"](V2);
    }
    return webidl.converters.DOMString(V2);
};
webidl.converters.WebSocketInit = webidl.dictionaryConverter([
    {
        key: "protocols",
        converter: webidl.converters["DOMString or sequence<DOMString>"],
        get defaultValue () {
            return [];
        }
    },
    {
        key: "dispatcher",
        converter: (V2)=>V2,
        get defaultValue () {
            return getGlobalDispatcher();
        }
    },
    {
        key: "headers",
        converter: webidl.nullableConverter(webidl.converters.HeadersInit)
    }
]);
webidl.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(V2) {
    if (webidl.util.Type(V2) === "Object" && !(Symbol.iterator in V2)) {
        return webidl.converters.WebSocketInit(V2);
    }
    return {
        protocols: webidl.converters["DOMString or sequence<DOMString>"](V2)
    };
};
webidl.converters.WebSocketSendData = function(V2) {
    if (webidl.util.Type(V2) === "Object") {
        if (isBlobLike(V2)) {
            return webidl.converters.Blob(V2, {
                strict: false
            });
        }
        if (ArrayBuffer.isView(V2) || types3.isAnyArrayBuffer(V2)) {
            return webidl.converters.BufferSource(V2);
        }
    }
    return webidl.converters.USVString(V2);
};
module2.exports = {
    WebSocket
};

return module2.exports;
}
