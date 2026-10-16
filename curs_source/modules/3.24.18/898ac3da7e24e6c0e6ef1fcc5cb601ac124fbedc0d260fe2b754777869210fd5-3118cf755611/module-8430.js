"use strict";
const { webidl: t } = require("./module-8005.js"), { DOMException: s } = require("./module-6687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { staticPropertyDescriptors: i, states: A, opcodes: l, emptyBuffer: c } = require("./module-5440.js"), { kWebSocketURL: m, kReadyState: d, kController: g, kBinaryType: u, kResponse: E, kSentClose: p, kByteParser: T } = require("./module-7696.js"), { isEstablished: k, isClosing: I, isValidSubprotocol: h, failWebsocketConnection: _, fireEvent: C } = require("./module-4321.js"), { establishWebSocketConnection: f } = require("./module-9809.js"), { WebsocketFrameSend: B } = require("./module-1808.js"), { ByteParser: Q } = require("./module-9044.js"), { kEnumerableProperty: y, isBlobLike: R } = require("./module-9361.js"), { getGlobalDispatcher: N } = require("./module-7362.js"), { types: v } = require("./module-9023.js");
let S = !1;
class D extends EventTarget {
    #a = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #t = 0;
    #s = "";
    #o = "";
    constructor(e, n = []){
        super(), t.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), S || (S = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const a = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](n);
        e = t.converters.USVString(e), n = a.protocols;
        const o = r();
        let i;
        try {
            i = new URL(e, o);
        } catch (e) {
            throw new s(e, "SyntaxError");
        }
        if ("http:" === i.protocol ? i.protocol = "ws:" : "https:" === i.protocol && (i.protocol = "wss:"), "ws:" !== i.protocol && "wss:" !== i.protocol) throw new s(`Expected a ws: or wss: protocol, got ${i.protocol}`, "SyntaxError");
        if (i.hash || i.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof n && (n = [
            n
        ]), n.length !== new Set(n.map((e)=>e.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (n.length > 0 && !n.every((e)=>h(e))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[m] = new URL(i.href), this[g] = f(i, n, this, (e)=>this.#r(e), a), this[d] = D.CONNECTING, this[u] = "blob";
    }
    close(e = void 0, n = void 0) {
        if (t.brandCheck(this, D), void 0 !== e && (e = t.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== n && (n = t.converters.USVString(n)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new s("invalid code", "InvalidAccessError");
        let a = 0;
        if (void 0 !== n && (a = Buffer.byteLength(n), a > 123)) throw new s(`Reason must be less than 123 bytes; received ${a}`, "SyntaxError");
        if (this[d] === D.CLOSING || this[d] === D.CLOSED) ;
        else if (k(this)) if (I(this)) this[d] = D.CLOSING;
        else {
            const t = new B;
            void 0 !== e && void 0 === n ? (t.frameData = Buffer.allocUnsafe(2), t.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== n ? (t.frameData = Buffer.allocUnsafe(2 + a), t.frameData.writeUInt16BE(e, 0), t.frameData.write(n, 2, "utf-8")) : t.frameData = c;
            this[E].socket.write(t.createFrame(l.CLOSE), (e)=>{
                e || (this[p] = !0);
            }), this[d] = A.CLOSING;
        }
        else _(this, "Connection was closed before it was established."), this[d] = D.CLOSING;
    }
    send(e) {
        if (t.brandCheck(this, D), t.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = t.converters.WebSocketSendData(e), this[d] === D.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!k(this) || I(this)) return;
        const n = this[E].socket;
        if ("string" == typeof e) {
            const a = Buffer.from(e), t = new B(a).createFrame(l.TEXT);
            this.#t += a.byteLength, n.write(t, ()=>{
                this.#t -= a.byteLength;
            });
        } else if (v.isArrayBuffer(e)) {
            const a = Buffer.from(e), t = new B(a).createFrame(l.BINARY);
            this.#t += a.byteLength, n.write(t, ()=>{
                this.#t -= a.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const a = Buffer.from(e, e.byteOffset, e.byteLength), t = new B(a).createFrame(l.BINARY);
            this.#t += a.byteLength, n.write(t, ()=>{
                this.#t -= a.byteLength;
            });
        } else if (R(e)) {
            const a = new B;
            e.arrayBuffer().then((e)=>{
                const t = Buffer.from(e);
                a.frameData = t;
                const s = a.createFrame(l.BINARY);
                this.#t += t.byteLength, n.write(s, ()=>{
                    this.#t -= t.byteLength;
                });
            });
        }
    }
    get readyState() {
        return t.brandCheck(this, D), this[d];
    }
    get bufferedAmount() {
        return t.brandCheck(this, D), this.#t;
    }
    get url() {
        return t.brandCheck(this, D), o(this[m]);
    }
    get extensions() {
        return t.brandCheck(this, D), this.#o;
    }
    get protocol() {
        return t.brandCheck(this, D), this.#s;
    }
    get onopen() {
        return t.brandCheck(this, D), this.#a.open;
    }
    set onopen(e) {
        t.brandCheck(this, D), this.#a.open && this.removeEventListener("open", this.#a.open), "function" == typeof e ? (this.#a.open = e, this.addEventListener("open", e)) : this.#a.open = null;
    }
    get onerror() {
        return t.brandCheck(this, D), this.#a.error;
    }
    set onerror(e) {
        t.brandCheck(this, D), this.#a.error && this.removeEventListener("error", this.#a.error), "function" == typeof e ? (this.#a.error = e, this.addEventListener("error", e)) : this.#a.error = null;
    }
    get onclose() {
        return t.brandCheck(this, D), this.#a.close;
    }
    set onclose(e) {
        t.brandCheck(this, D), this.#a.close && this.removeEventListener("close", this.#a.close), "function" == typeof e ? (this.#a.close = e, this.addEventListener("close", e)) : this.#a.close = null;
    }
    get onmessage() {
        return t.brandCheck(this, D), this.#a.message;
    }
    set onmessage(e) {
        t.brandCheck(this, D), this.#a.message && this.removeEventListener("message", this.#a.message), "function" == typeof e ? (this.#a.message = e, this.addEventListener("message", e)) : this.#a.message = null;
    }
    get binaryType() {
        return t.brandCheck(this, D), this[u];
    }
    set binaryType(e) {
        t.brandCheck(this, D), this[u] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #r(e) {
        this[E] = e;
        const n = new Q(this);
        n.on("drain", function() {
            this.ws[E].socket.resume();
        }), e.socket.ws = this, this[T] = n, this[d] = A.OPEN;
        const a = e.headersList.get("sec-websocket-extensions");
        null !== a && (this.#o = a);
        const t = e.headersList.get("sec-websocket-protocol");
        null !== t && (this.#s = t), C("open", this);
    }
}
D.CONNECTING = D.prototype.CONNECTING = A.CONNECTING, D.OPEN = D.prototype.OPEN = A.OPEN, D.CLOSING = D.prototype.CLOSING = A.CLOSING, D.CLOSED = D.prototype.CLOSED = A.CLOSED, Object.defineProperties(D.prototype, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i,
    url: y,
    readyState: y,
    bufferedAmount: y,
    onopen: y,
    onerror: y,
    onclose: y,
    close: y,
    onmessage: y,
    binaryType: y,
    send: y,
    extensions: y,
    protocol: y,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(D, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i
}), t.converters["sequence<DOMString>"] = t.sequenceConverter(t.converters.DOMString), t.converters["DOMString or sequence<DOMString>"] = function(e) {
    return "Object" === t.util.Type(e) && Symbol.iterator in e ? t.converters["sequence<DOMString>"](e) : t.converters.DOMString(e);
}, t.converters.WebSocketInit = t.dictionaryConverter([
    {
        key: "protocols",
        converter: t.converters["DOMString or sequence<DOMString>"],
        get defaultValue () {
            return [];
        }
    },
    {
        key: "dispatcher",
        converter: (e)=>e,
        get defaultValue () {
            return N();
        }
    },
    {
        key: "headers",
        converter: t.nullableConverter(t.converters.HeadersInit)
    }
]), t.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e) {
    return "Object" !== t.util.Type(e) || Symbol.iterator in e ? {
        protocols: t.converters["DOMString or sequence<DOMString>"](e)
    } : t.converters.WebSocketInit(e);
}, t.converters.WebSocketSendData = function(e) {
    if ("Object" === t.util.Type(e)) {
        if (R(e)) return t.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || v.isAnyArrayBuffer(e)) return t.converters.BufferSource(e);
    }
    return t.converters.USVString(e);
}, module.exports = {
    WebSocket: D
};
