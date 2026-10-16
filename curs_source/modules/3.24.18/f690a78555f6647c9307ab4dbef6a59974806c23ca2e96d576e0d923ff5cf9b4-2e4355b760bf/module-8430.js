"use strict";
const { webidl: n } = require("./module-8005.js"), { DOMException: r } = require("./module-6687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: s } = require("./module-9523.js"), { staticPropertyDescriptors: a, states: i, opcodes: c, emptyBuffer: l } = require("./module-5440.js"), { kWebSocketURL: g, kReadyState: E, kController: u, kBinaryType: d, kResponse: I, kSentClose: h, kByteParser: Q } = require("./module-7696.js"), { isEstablished: m, isClosing: C, isValidSubprotocol: B, failWebsocketConnection: p, fireEvent: f } = require("./module-4321.js"), { establishWebSocketConnection: y } = require("./module-9809.js"), { WebsocketFrameSend: T } = require("./module-1808.js"), { ByteParser: k } = require("./module-9044.js"), { kEnumerableProperty: w, isBlobLike: N } = require("./module-9361.js"), { getGlobalDispatcher: D } = require("./module-7362.js"), { types: R } = require("./module-9023.js");
let S = !1;
class b extends EventTarget {
    #t = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #n = 0;
    #r = "";
    #o = "";
    constructor(e, A = []){
        super(), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), S || (S = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const t = n.converters["DOMString or sequence<DOMString> or WebSocketInit"](A);
        e = n.converters.USVString(e), A = t.protocols;
        const o = s();
        let a;
        try {
            a = new URL(e, o);
        } catch (e) {
            throw new r(e, "SyntaxError");
        }
        if ("http:" === a.protocol ? a.protocol = "ws:" : "https:" === a.protocol && (a.protocol = "wss:"), "ws:" !== a.protocol && "wss:" !== a.protocol) throw new r(`Expected a ws: or wss: protocol, got ${a.protocol}`, "SyntaxError");
        if (a.hash || a.href.endsWith("#")) throw new r("Got fragment", "SyntaxError");
        if ("string" == typeof A && (A = [
            A
        ]), A.length !== new Set(A.map((e)=>e.toLowerCase())).size) throw new r("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (A.length > 0 && !A.every((e)=>B(e))) throw new r("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[g] = new URL(a.href), this[u] = y(a, A, this, (e)=>this.#s(e), t), this[E] = b.CONNECTING, this[d] = "blob";
    }
    close(e = void 0, A = void 0) {
        if (n.brandCheck(this, b), void 0 !== e && (e = n.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== A && (A = n.converters.USVString(A)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new r("invalid code", "InvalidAccessError");
        let t = 0;
        if (void 0 !== A && (t = Buffer.byteLength(A), t > 123)) throw new r(`Reason must be less than 123 bytes; received ${t}`, "SyntaxError");
        if (this[E] === b.CLOSING || this[E] === b.CLOSED) ;
        else if (m(this)) if (C(this)) this[E] = b.CLOSING;
        else {
            const n = new T;
            void 0 !== e && void 0 === A ? (n.frameData = Buffer.allocUnsafe(2), n.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== A ? (n.frameData = Buffer.allocUnsafe(2 + t), n.frameData.writeUInt16BE(e, 0), n.frameData.write(A, 2, "utf-8")) : n.frameData = l;
            this[I].socket.write(n.createFrame(c.CLOSE), (e)=>{
                e || (this[h] = !0);
            }), this[E] = i.CLOSING;
        }
        else p(this, "Connection was closed before it was established."), this[E] = b.CLOSING;
    }
    send(e) {
        if (n.brandCheck(this, b), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = n.converters.WebSocketSendData(e), this[E] === b.CONNECTING) throw new r("Sent before connected.", "InvalidStateError");
        if (!m(this) || C(this)) return;
        const A = this[I].socket;
        if ("string" == typeof e) {
            const t = Buffer.from(e), n = new T(t).createFrame(c.TEXT);
            this.#n += t.byteLength, A.write(n, ()=>{
                this.#n -= t.byteLength;
            });
        } else if (R.isArrayBuffer(e)) {
            const t = Buffer.from(e), n = new T(t).createFrame(c.BINARY);
            this.#n += t.byteLength, A.write(n, ()=>{
                this.#n -= t.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const t = Buffer.from(e, e.byteOffset, e.byteLength), n = new T(t).createFrame(c.BINARY);
            this.#n += t.byteLength, A.write(n, ()=>{
                this.#n -= t.byteLength;
            });
        } else if (N(e)) {
            const t = new T;
            e.arrayBuffer().then((e)=>{
                const n = Buffer.from(e);
                t.frameData = n;
                const r = t.createFrame(c.BINARY);
                this.#n += n.byteLength, A.write(r, ()=>{
                    this.#n -= n.byteLength;
                });
            });
        }
    }
    get readyState() {
        return n.brandCheck(this, b), this[E];
    }
    get bufferedAmount() {
        return n.brandCheck(this, b), this.#n;
    }
    get url() {
        return n.brandCheck(this, b), o(this[g]);
    }
    get extensions() {
        return n.brandCheck(this, b), this.#o;
    }
    get protocol() {
        return n.brandCheck(this, b), this.#r;
    }
    get onopen() {
        return n.brandCheck(this, b), this.#t.open;
    }
    set onopen(e) {
        n.brandCheck(this, b), this.#t.open && this.removeEventListener("open", this.#t.open), "function" == typeof e ? (this.#t.open = e, this.addEventListener("open", e)) : this.#t.open = null;
    }
    get onerror() {
        return n.brandCheck(this, b), this.#t.error;
    }
    set onerror(e) {
        n.brandCheck(this, b), this.#t.error && this.removeEventListener("error", this.#t.error), "function" == typeof e ? (this.#t.error = e, this.addEventListener("error", e)) : this.#t.error = null;
    }
    get onclose() {
        return n.brandCheck(this, b), this.#t.close;
    }
    set onclose(e) {
        n.brandCheck(this, b), this.#t.close && this.removeEventListener("close", this.#t.close), "function" == typeof e ? (this.#t.close = e, this.addEventListener("close", e)) : this.#t.close = null;
    }
    get onmessage() {
        return n.brandCheck(this, b), this.#t.message;
    }
    set onmessage(e) {
        n.brandCheck(this, b), this.#t.message && this.removeEventListener("message", this.#t.message), "function" == typeof e ? (this.#t.message = e, this.addEventListener("message", e)) : this.#t.message = null;
    }
    get binaryType() {
        return n.brandCheck(this, b), this[d];
    }
    set binaryType(e) {
        n.brandCheck(this, b), this[d] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #s(e) {
        this[I] = e;
        const A = new k(this);
        A.on("drain", function() {
            this.ws[I].socket.resume();
        }), e.socket.ws = this, this[Q] = A, this[E] = i.OPEN;
        const t = e.headersList.get("sec-websocket-extensions");
        null !== t && (this.#o = t);
        const n = e.headersList.get("sec-websocket-protocol");
        null !== n && (this.#r = n), f("open", this);
    }
}
b.CONNECTING = b.prototype.CONNECTING = i.CONNECTING, b.OPEN = b.prototype.OPEN = i.OPEN, b.CLOSING = b.prototype.CLOSING = i.CLOSING, b.CLOSED = b.prototype.CLOSED = i.CLOSED, Object.defineProperties(b.prototype, {
    CONNECTING: a,
    OPEN: a,
    CLOSING: a,
    CLOSED: a,
    url: w,
    readyState: w,
    bufferedAmount: w,
    onopen: w,
    onerror: w,
    onclose: w,
    close: w,
    onmessage: w,
    binaryType: w,
    send: w,
    extensions: w,
    protocol: w,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(b, {
    CONNECTING: a,
    OPEN: a,
    CLOSING: a,
    CLOSED: a
}), n.converters["sequence<DOMString>"] = n.sequenceConverter(n.converters.DOMString), n.converters["DOMString or sequence<DOMString>"] = function(e) {
    return "Object" === n.util.Type(e) && Symbol.iterator in e ? n.converters["sequence<DOMString>"](e) : n.converters.DOMString(e);
}, n.converters.WebSocketInit = n.dictionaryConverter([
    {
        key: "protocols",
        converter: n.converters["DOMString or sequence<DOMString>"],
        get defaultValue () {
            return [];
        }
    },
    {
        key: "dispatcher",
        converter: (e)=>e,
        get defaultValue () {
            return D();
        }
    },
    {
        key: "headers",
        converter: n.nullableConverter(n.converters.HeadersInit)
    }
]), n.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e) {
    return "Object" !== n.util.Type(e) || Symbol.iterator in e ? {
        protocols: n.converters["DOMString or sequence<DOMString>"](e)
    } : n.converters.WebSocketInit(e);
}, n.converters.WebSocketSendData = function(e) {
    if ("Object" === n.util.Type(e)) {
        if (N(e)) return n.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || R.isAnyArrayBuffer(e)) return n.converters.BufferSource(e);
    }
    return n.converters.USVString(e);
}, module.exports = {
    WebSocket: b
};
