"use strict";
const { webidl: r } = require("./module-48005.js"), { DOMException: s } = require("./module-96687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: n } = require("./module-69523.js"), { staticPropertyDescriptors: i, states: E, opcodes: Q, emptyBuffer: g } = require("./module-85440.js"), { kWebSocketURL: C, kReadyState: B, kController: a, kBinaryType: I, kResponse: c, kSentClose: h, kByteParser: l } = require("./module-35315.js"), { isEstablished: u, isClosing: d, isValidSubprotocol: f, failWebsocketConnection: y, fireEvent: D } = require("./module-44321.js"), { establishWebSocketConnection: R } = require("./module-9809.js"), { WebsocketFrameSend: w } = require("./module-11808.js"), { ByteParser: p } = require("./module-9044.js"), { kEnumerableProperty: k, isBlobLike: F } = require("./module-9361.js"), { getGlobalDispatcher: N } = require("./module-37362.js"), { types: b } = require(39023);
let S = !1;
class m extends EventTarget {
    #i = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #E = 0;
    #Q = "";
    #g = "";
    constructor(A, e = []){
        super(), r.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), S || (S = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const t = r.converters["DOMString or sequence<DOMString> or WebSocketInit"](e);
        A = r.converters.USVString(A), e = t.protocols;
        const o = n();
        let i;
        try {
            i = new URL(A, o);
        } catch (A) {
            throw new s(A, "SyntaxError");
        }
        if ("http:" === i.protocol ? i.protocol = "ws:" : "https:" === i.protocol && (i.protocol = "wss:"), "ws:" !== i.protocol && "wss:" !== i.protocol) throw new s(`Expected a ws: or wss: protocol, got ${i.protocol}`, "SyntaxError");
        if (i.hash || i.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof e && (e = [
            e
        ]), e.length !== new Set(e.map((A)=>A.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (e.length > 0 && !e.every((A)=>f(A))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[C] = new URL(i.href), this[a] = R(i, e, this, (A)=>this.#C(A), t), this[B] = m.CONNECTING, this[I] = "blob";
    }
    close(A = void 0, e = void 0) {
        if (r.brandCheck(this, m), void 0 !== A && (A = r.converters["unsigned short"](A, {
            clamp: !0
        })), void 0 !== e && (e = r.converters.USVString(e)), void 0 !== A && 1e3 !== A && (A < 3e3 || A > 4999)) throw new s("invalid code", "InvalidAccessError");
        let t = 0;
        if (void 0 !== e && (t = Buffer.byteLength(e), t > 123)) throw new s(`Reason must be less than 123 bytes; received ${t}`, "SyntaxError");
        if (this[B] === m.CLOSING || this[B] === m.CLOSED) ;
        else if (u(this)) if (d(this)) this[B] = m.CLOSING;
        else {
            const r = new w;
            void 0 !== A && void 0 === e ? (r.frameData = Buffer.allocUnsafe(2), r.frameData.writeUInt16BE(A, 0)) : void 0 !== A && void 0 !== e ? (r.frameData = Buffer.allocUnsafe(2 + t), r.frameData.writeUInt16BE(A, 0), r.frameData.write(e, 2, "utf-8")) : r.frameData = g;
            this[c].socket.write(r.createFrame(Q.CLOSE), (A)=>{
                A || (this[h] = !0);
            }), this[B] = E.CLOSING;
        }
        else y(this, "Connection was closed before it was established."), this[B] = m.CLOSING;
    }
    send(A) {
        if (r.brandCheck(this, m), r.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), A = r.converters.WebSocketSendData(A), this[B] === m.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!u(this) || d(this)) return;
        const e = this[c].socket;
        if ("string" == typeof A) {
            const t = Buffer.from(A), r = new w(t).createFrame(Q.TEXT);
            this.#E += t.byteLength, e.write(r, ()=>{
                this.#E -= t.byteLength;
            });
        } else if (b.isArrayBuffer(A)) {
            const t = Buffer.from(A), r = new w(t).createFrame(Q.BINARY);
            this.#E += t.byteLength, e.write(r, ()=>{
                this.#E -= t.byteLength;
            });
        } else if (ArrayBuffer.isView(A)) {
            const t = Buffer.from(A, A.byteOffset, A.byteLength), r = new w(t).createFrame(Q.BINARY);
            this.#E += t.byteLength, e.write(r, ()=>{
                this.#E -= t.byteLength;
            });
        } else if (F(A)) {
            const t = new w;
            A.arrayBuffer().then((A)=>{
                const r = Buffer.from(A);
                t.frameData = r;
                const s = t.createFrame(Q.BINARY);
                this.#E += r.byteLength, e.write(s, ()=>{
                    this.#E -= r.byteLength;
                });
            });
        }
    }
    get readyState() {
        return r.brandCheck(this, m), this[B];
    }
    get bufferedAmount() {
        return r.brandCheck(this, m), this.#E;
    }
    get url() {
        return r.brandCheck(this, m), o(this[C]);
    }
    get extensions() {
        return r.brandCheck(this, m), this.#g;
    }
    get protocol() {
        return r.brandCheck(this, m), this.#Q;
    }
    get onopen() {
        return r.brandCheck(this, m), this.#i.open;
    }
    set onopen(A) {
        r.brandCheck(this, m), this.#i.open && this.removeEventListener("open", this.#i.open), "function" == typeof A ? (this.#i.open = A, this.addEventListener("open", A)) : this.#i.open = null;
    }
    get onerror() {
        return r.brandCheck(this, m), this.#i.error;
    }
    set onerror(A) {
        r.brandCheck(this, m), this.#i.error && this.removeEventListener("error", this.#i.error), "function" == typeof A ? (this.#i.error = A, this.addEventListener("error", A)) : this.#i.error = null;
    }
    get onclose() {
        return r.brandCheck(this, m), this.#i.close;
    }
    set onclose(A) {
        r.brandCheck(this, m), this.#i.close && this.removeEventListener("close", this.#i.close), "function" == typeof A ? (this.#i.close = A, this.addEventListener("close", A)) : this.#i.close = null;
    }
    get onmessage() {
        return r.brandCheck(this, m), this.#i.message;
    }
    set onmessage(A) {
        r.brandCheck(this, m), this.#i.message && this.removeEventListener("message", this.#i.message), "function" == typeof A ? (this.#i.message = A, this.addEventListener("message", A)) : this.#i.message = null;
    }
    get binaryType() {
        return r.brandCheck(this, m), this[I];
    }
    set binaryType(A) {
        r.brandCheck(this, m), this[I] = "blob" !== A && "arraybuffer" !== A ? "blob" : A;
    }
    #C(A) {
        this[c] = A;
        const e = new p(this);
        e.on("drain", function() {
            this.ws[c].socket.resume();
        }), A.socket.ws = this, this[l] = e, this[B] = E.OPEN;
        const t = A.headersList.get("sec-websocket-extensions");
        null !== t && (this.#g = t);
        const r = A.headersList.get("sec-websocket-protocol");
        null !== r && (this.#Q = r), D("open", this);
    }
}
m.CONNECTING = m.prototype.CONNECTING = E.CONNECTING, m.OPEN = m.prototype.OPEN = E.OPEN, m.CLOSING = m.prototype.CLOSING = E.CLOSING, m.CLOSED = m.prototype.CLOSED = E.CLOSED, Object.defineProperties(m.prototype, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i,
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
}), Object.defineProperties(m, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i
}), r.converters["sequence<DOMString>"] = r.sequenceConverter(r.converters.DOMString), r.converters["DOMString or sequence<DOMString>"] = function(A) {
    return "Object" === r.util.Type(A) && Symbol.iterator in A ? r.converters["sequence<DOMString>"](A) : r.converters.DOMString(A);
}, r.converters.WebSocketInit = r.dictionaryConverter([
    {
        key: "protocols",
        converter: r.converters["DOMString or sequence<DOMString>"],
        get defaultValue () {
            return [];
        }
    },
    {
        key: "dispatcher",
        converter: (A)=>A,
        get defaultValue () {
            return N();
        }
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
        if (F(A)) return r.converters.Blob(A, {
            strict: !1
        });
        if (ArrayBuffer.isView(A) || b.isAnyArrayBuffer(A)) return r.converters.BufferSource(A);
    }
    return r.converters.USVString(A);
}, module.exports = {
    WebSocket: m
};
