"use strict";
const { webidl: r } = require("./module-43290.js"), { URLSerializer: s } = require("./module-52603.js"), { environmentSettingsObject: o } = require("./module-48215.js"), { staticPropertyDescriptors: n, states: i, sentCloseFrameState: a, sendHints: Q } = require("./module-30229.js"), { kWebSocketURL: g, kReadyState: E, kController: B, kBinaryType: c, kResponse: I, kSentClose: C, kByteParser: h } = require("./module-47489.js"), { isConnecting: l, isEstablished: u, isClosing: d, isValidSubprotocol: f, fireEvent: w } = require("./module-79946.js"), { establishWebSocketConnection: y, closeWebSocketConnection: D } = require("./module-81674.js"), { ByteParser: p } = require("./module-41135.js"), { kEnumerableProperty: k, isBlobLike: R } = require("./module-55201.js"), { getGlobalDispatcher: F } = require("./module-37922.js"), { types: m } = require(57975), { ErrorEvent: b, CloseEvent: N } = require("./module-63315.js"), { SendQueue: S } = require("./module-62187.js");
class M extends EventTarget {
    #_ = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #j = 0;
    #$ = "";
    #F = "";
    #AA;
    constructor(A, e = []){
        super(), r.util.markAsUncloneable(this);
        const t = "WebSocket constructor";
        r.argumentLengthCheck(arguments, 1, t);
        const s = r.converters["DOMString or sequence<DOMString> or WebSocketInit"](e, t, "options");
        A = r.converters.USVString(A, t, "url"), e = s.protocols;
        const n = o.settingsObject.baseUrl;
        let i;
        try {
            i = new URL(A, n);
        } catch (A) {
            throw new DOMException(A, "SyntaxError");
        }
        if ("http:" === i.protocol ? i.protocol = "ws:" : "https:" === i.protocol && (i.protocol = "wss:"), "ws:" !== i.protocol && "wss:" !== i.protocol) throw new DOMException(`Expected a ws: or wss: protocol, got ${i.protocol}`, "SyntaxError");
        if (i.hash || i.href.endsWith("#")) throw new DOMException("Got fragment", "SyntaxError");
        if ("string" == typeof e && (e = [
            e
        ]), e.length !== new Set(e.map((A)=>A.toLowerCase())).size) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (e.length > 0 && !e.every((A)=>f(A))) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[g] = new URL(i.href);
        const Q = o.settingsObject;
        this[B] = y(i, e, Q, this, (A, e)=>this.#eA(A, e), s), this[E] = M.CONNECTING, this[C] = a.NOT_SENT, this[c] = "blob";
    }
    close(A = void 0, e = void 0) {
        r.brandCheck(this, M);
        const t = "WebSocket.close";
        if (void 0 !== A && (A = r.converters["unsigned short"](A, t, "code", {
            clamp: !0
        })), void 0 !== e && (e = r.converters.USVString(e, t, "reason")), void 0 !== A && 1e3 !== A && (A < 3e3 || A > 4999)) throw new DOMException("invalid code", "InvalidAccessError");
        let s = 0;
        if (void 0 !== e && (s = Buffer.byteLength(e), s > 123)) throw new DOMException(`Reason must be less than 123 bytes; received ${s}`, "SyntaxError");
        D(this, A, e, s);
    }
    send(A) {
        r.brandCheck(this, M);
        const e = "WebSocket.send";
        if (r.argumentLengthCheck(arguments, 1, e), A = r.converters.WebSocketSendData(A, e, "data"), l(this)) throw new DOMException("Sent before connected.", "InvalidStateError");
        if (u(this) && !d(this)) if ("string" == typeof A) {
            const e = Buffer.byteLength(A);
            this.#j += e, this.#AA.add(A, ()=>{
                this.#j -= e;
            }, Q.string);
        } else m.isArrayBuffer(A) ? (this.#j += A.byteLength, this.#AA.add(A, ()=>{
            this.#j -= A.byteLength;
        }, Q.arrayBuffer)) : ArrayBuffer.isView(A) ? (this.#j += A.byteLength, this.#AA.add(A, ()=>{
            this.#j -= A.byteLength;
        }, Q.typedArray)) : R(A) && (this.#j += A.size, this.#AA.add(A, ()=>{
            this.#j -= A.size;
        }, Q.blob));
    }
    get readyState() {
        return r.brandCheck(this, M), this[E];
    }
    get bufferedAmount() {
        return r.brandCheck(this, M), this.#j;
    }
    get url() {
        return r.brandCheck(this, M), s(this[g]);
    }
    get extensions() {
        return r.brandCheck(this, M), this.#F;
    }
    get protocol() {
        return r.brandCheck(this, M), this.#$;
    }
    get onopen() {
        return r.brandCheck(this, M), this.#_.open;
    }
    set onopen(A) {
        r.brandCheck(this, M), this.#_.open && this.removeEventListener("open", this.#_.open), "function" == typeof A ? (this.#_.open = A, this.addEventListener("open", A)) : this.#_.open = null;
    }
    get onerror() {
        return r.brandCheck(this, M), this.#_.error;
    }
    set onerror(A) {
        r.brandCheck(this, M), this.#_.error && this.removeEventListener("error", this.#_.error), "function" == typeof A ? (this.#_.error = A, this.addEventListener("error", A)) : this.#_.error = null;
    }
    get onclose() {
        return r.brandCheck(this, M), this.#_.close;
    }
    set onclose(A) {
        r.brandCheck(this, M), this.#_.close && this.removeEventListener("close", this.#_.close), "function" == typeof A ? (this.#_.close = A, this.addEventListener("close", A)) : this.#_.close = null;
    }
    get onmessage() {
        return r.brandCheck(this, M), this.#_.message;
    }
    set onmessage(A) {
        r.brandCheck(this, M), this.#_.message && this.removeEventListener("message", this.#_.message), "function" == typeof A ? (this.#_.message = A, this.addEventListener("message", A)) : this.#_.message = null;
    }
    get binaryType() {
        return r.brandCheck(this, M), this[c];
    }
    set binaryType(A) {
        r.brandCheck(this, M), this[c] = "blob" !== A && "arraybuffer" !== A ? "blob" : A;
    }
    #eA(A, e) {
        this[I] = A;
        const t = this[B]?.dispatcher?.webSocketOptions, r = t?.maxFragments, s = t?.maxPayloadSize, o = new p(this, e, {
            maxFragments: r,
            maxPayloadSize: s
        });
        o.on("drain", U), o.on("error", L.bind(this)), A.socket.ws = this, this[h] = o, this.#AA = new S(A.socket), this[E] = i.OPEN;
        const n = A.headersList.get("sec-websocket-extensions");
        null !== n && (this.#F = n);
        const a = A.headersList.get("sec-websocket-protocol");
        null !== a && (this.#$ = a), w("open", this);
    }
}
function U() {
    this.ws[I].socket.resume();
}
function L(A) {
    let e, t;
    A instanceof N ? (e = A.reason, t = A.code) : e = A.message, w("error", this, ()=>new b("error", {
            error: A,
            message: e
        })), D(this, t);
}
M.CONNECTING = M.prototype.CONNECTING = i.CONNECTING, M.OPEN = M.prototype.OPEN = i.OPEN, M.CLOSING = M.prototype.CLOSING = i.CLOSING, M.CLOSED = M.prototype.CLOSED = i.CLOSED, Object.defineProperties(M.prototype, {
    CONNECTING: n,
    OPEN: n,
    CLOSING: n,
    CLOSED: n,
    url: k,
    readyState: k,
    bufferedAmount: k,
    onopen: k,
    onerror: k,
    onclose: k,
    close: k,
    onmessage: k,
    binaryType: k,
    send: k,
    extensions: k,
    protocol: k,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(M, {
    CONNECTING: n,
    OPEN: n,
    CLOSING: n,
    CLOSED: n
}), r.converters["sequence<DOMString>"] = r.sequenceConverter(r.converters.DOMString), r.converters["DOMString or sequence<DOMString>"] = function(A, e, t) {
    return "Object" === r.util.Type(A) && Symbol.iterator in A ? r.converters["sequence<DOMString>"](A) : r.converters.DOMString(A, e, t);
}, r.converters.WebSocketInit = r.dictionaryConverter([
    {
        key: "protocols",
        converter: r.converters["DOMString or sequence<DOMString>"],
        defaultValue: ()=>new Array(0)
    },
    {
        key: "dispatcher",
        converter: r.converters.any,
        defaultValue: ()=>F()
    },
    {
        key: "headers",
        converter: r.nullableConverter(r.converters.HeadersInit)
    }
]), r.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(A) {
    return "Object" !== r.util.Type(A) || Symbol.iterator in A ? {
        protocols: r.converters["DOMString or sequence<DOMString>"](A)
    } : r.converters.WebSocketInit(A);
}, r.converters.WebSocketSendData = function(A) {
    if ("Object" === r.util.Type(A)) {
        if (R(A)) return r.converters.Blob(A, {
            strict: !1
        });
        if (ArrayBuffer.isView(A) || m.isArrayBuffer(A)) return r.converters.BufferSource(A);
    }
    return r.converters.USVString(A);
}, module.exports = {
    WebSocket: M
};
