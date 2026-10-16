import { require_util8 } from "../../core/util.js";
import { require_global4 } from "../../global.js";
import { require_data_url } from "../fetch/data-url.js";
import { require_util9 } from "../fetch/util.js";
import { require_webidl2 } from "../fetch/webidl.js";
import { require_connection2 } from "./connection.js";
import { require_constants13 } from "./constants.js";
import { require_events2 } from "./events.js";
import { require_receiver3 } from "./receiver.js";
import { require_sender2 } from "./sender.js";
import { require_symbols10 } from "./symbols.js";
import { require_util14 } from "./util.js";
var __wakaru_require_websocket3_cache;
export function require_websocket3() {
if (__wakaru_require_websocket3_cache) return __wakaru_require_websocket3_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_websocket3_cache = module2;
"use strict";
var { webidl } = require_webidl2();
var { URLSerializer } = require_data_url();
var { environmentSettingsObject } = require_util9();
var { staticPropertyDescriptors, states, sentCloseFrameState, sendHints } = require_constants13();
var { kWebSocketURL, kReadyState, kController, kBinaryType, kResponse, kSentClose, kByteParser } = require_symbols10();
var { isConnecting, isEstablished, isClosing, isValidSubprotocol, fireEvent } = require_util14();
var { establishWebSocketConnection, closeWebSocketConnection } = require_connection2();
var { ByteParser } = require_receiver3();
var { kEnumerableProperty, isBlobLike } = require_util8();
var { getGlobalDispatcher } = require_global4();
var { types: types3 } = require("node:util");
var { ErrorEvent: ErrorEvent2, CloseEvent } = require_events2();
var { SendQueue } = require_sender2();
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
    #sendQueue;
    constructor(url2, protocols = []){
        super();
        webidl.util.markAsUncloneable(this);
        const prefix = "WebSocket constructor";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        const options2 = webidl.converters["DOMString or sequence<DOMString> or WebSocketInit"](protocols, prefix, "options");
        url2 = webidl.converters.USVString(url2, prefix, "url");
        protocols = options2.protocols;
        const baseURL = environmentSettingsObject.settingsObject.baseUrl;
        let urlRecord;
        try {
            urlRecord = new URL(url2, baseURL);
        } catch (e) {
            throw new DOMException(e, "SyntaxError");
        }
        if (urlRecord.protocol === "http:") {
            urlRecord.protocol = "ws:";
        } else if (urlRecord.protocol === "https:") {
            urlRecord.protocol = "wss:";
        }
        if (urlRecord.protocol !== "ws:" && urlRecord.protocol !== "wss:") {
            throw new DOMException(`Expected a ws: or wss: protocol, got ${urlRecord.protocol}`, "SyntaxError");
        }
        if (urlRecord.hash || urlRecord.href.endsWith("#")) {
            throw new DOMException("Got fragment", "SyntaxError");
        }
        if (typeof protocols === "string") {
            protocols = [
                protocols
            ];
        }
        if (protocols.length !== new Set(protocols.map((p2)=>p2.toLowerCase())).size) {
            throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        if (protocols.length > 0 && !protocols.every((p2)=>isValidSubprotocol(p2))) {
            throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        this[kWebSocketURL] = new URL(urlRecord.href);
        const client = environmentSettingsObject.settingsObject;
        this[kController] = establishWebSocketConnection(urlRecord, protocols, client, this, (response, extensions)=>this.#onConnectionEstablished(response, extensions), options2);
        this[kReadyState] = _WebSocket.CONNECTING;
        this[kSentClose] = sentCloseFrameState.NOT_SENT;
        this[kBinaryType] = "blob";
    }
    close(code = void 0, reason = void 0) {
        webidl.brandCheck(this, _WebSocket);
        const prefix = "WebSocket.close";
        if (code !== void 0) {
            code = webidl.converters["unsigned short"](code, prefix, "code", {
                clamp: true
            });
        }
        if (reason !== void 0) {
            reason = webidl.converters.USVString(reason, prefix, "reason");
        }
        if (code !== void 0) {
            if (code !== 1e3 && (code < 3e3 || code > 4999)) {
                throw new DOMException("invalid code", "InvalidAccessError");
            }
        }
        let reasonByteLength = 0;
        if (reason !== void 0) {
            reasonByteLength = Buffer.byteLength(reason);
            if (reasonByteLength > 123) {
                throw new DOMException(`Reason must be less than 123 bytes; received ${reasonByteLength}`, "SyntaxError");
            }
        }
        closeWebSocketConnection(this, code, reason, reasonByteLength);
    }
    send(data) {
        webidl.brandCheck(this, _WebSocket);
        const prefix = "WebSocket.send";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        data = webidl.converters.WebSocketSendData(data, prefix, "data");
        if (isConnecting(this)) {
            throw new DOMException("Sent before connected.", "InvalidStateError");
        }
        if (!isEstablished(this) || isClosing(this)) {
            return;
        }
        if (typeof data === "string") {
            const length = Buffer.byteLength(data);
            this.#bufferedAmount += length;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= length;
            }, sendHints.string);
        } else if (types3.isArrayBuffer(data)) {
            this.#bufferedAmount += data.byteLength;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.byteLength;
            }, sendHints.arrayBuffer);
        } else if (ArrayBuffer.isView(data)) {
            this.#bufferedAmount += data.byteLength;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.byteLength;
            }, sendHints.typedArray);
        } else if (isBlobLike(data)) {
            this.#bufferedAmount += data.size;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.size;
            }, sendHints.blob);
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
    #onConnectionEstablished(response, parsedExtensions) {
        this[kResponse] = response;
        const webSocketOptions = this[kController]?.dispatcher?.webSocketOptions;
        const maxFragments = webSocketOptions?.maxFragments;
        const maxPayloadSize = webSocketOptions?.maxPayloadSize;
        const parser = new ByteParser(this, parsedExtensions, {
            maxFragments,
            maxPayloadSize
        });
        parser.on("drain", onParserDrain);
        parser.on("error", onParserError.bind(this));
        response.socket.ws = this;
        this[kByteParser] = parser;
        this.#sendQueue = new SendQueue(response.socket);
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
webidl.converters["DOMString or sequence<DOMString>"] = function(V2, prefix, argument) {
    if (webidl.util.Type(V2) === "Object" && Symbol.iterator in V2) {
        return webidl.converters["sequence<DOMString>"](V2);
    }
    return webidl.converters.DOMString(V2, prefix, argument);
};
webidl.converters.WebSocketInit = webidl.dictionaryConverter([
    {
        key: "protocols",
        converter: webidl.converters["DOMString or sequence<DOMString>"],
        defaultValue: ()=>new Array(0)
    },
    {
        key: "dispatcher",
        converter: webidl.converters.any,
        defaultValue: ()=>getGlobalDispatcher()
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
        if (ArrayBuffer.isView(V2) || types3.isArrayBuffer(V2)) {
            return webidl.converters.BufferSource(V2);
        }
    }
    return webidl.converters.USVString(V2);
};
function onParserDrain() {
    this.ws[kResponse].socket.resume();
}
function onParserError(err) {
    let message;
    let code;
    if (err instanceof CloseEvent) {
        message = err.reason;
        code = err.code;
    } else {
        message = err.message;
    }
    fireEvent("error", this, ()=>new ErrorEvent2("error", {
            error: err,
            message
        }));
    closeWebSocketConnection(this, code);
}
module2.exports = {
    WebSocket
};

return module2.exports;
}
