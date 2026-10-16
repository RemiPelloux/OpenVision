"use strict";
const { webidl: a } = require("./module-8005.js"), { DOMException: s } = require("./module-6687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { staticPropertyDescriptors: i, states: A, opcodes: c, emptyBuffer: l } = require("./module-5440.js"), { kWebSocketURL: d, kReadyState: m, kController: u, kBinaryType: g, kResponse: p, kSentClose: E, kByteParser: h } = require("./module-7696.js"), { isEstablished: T, isClosing: k, isValidSubprotocol: f, failWebsocketConnection: _, fireEvent: I } = require("./module-4321.js"), { establishWebSocketConnection: C } = require("./module-9809.js"), { WebsocketFrameSend: y } = require("./module-1808.js"), { ByteParser: B } = require("./module-9044.js"), { kEnumerableProperty: Q, isBlobLike: v } = require("./module-9361.js"), { getGlobalDispatcher: R } = require("./module-7362.js"), { types: N } = require("./module-9023.js");
let S = !1;
class w extends EventTarget {
    #t = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #a = 0;
    #s = "";
    #o = "";
    constructor(e, n = []){
        super(), a.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), S || (S = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const t = a.converters["DOMString or sequence<DOMString> or WebSocketInit"](n);
        e = a.converters.USVString(e), n = t.protocols;
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
        if (n.length > 0 && !n.every((e)=>f(e))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[d] = new URL(i.href), this[u] = C(i, n, this, (e)=>this.#r(e), t), this[m] = w.CONNECTING, this[g] = "blob";
    }
    close(e = void 0, n = void 0) {
        if (a.brandCheck(this, w), void 0 !== e && (e = a.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== n && (n = a.converters.USVString(n)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new s("invalid code", "InvalidAccessError");
        let t = 0;
        if (void 0 !== n && (t = Buffer.byteLength(n), t > 123)) throw new s(`Reason must be less than 123 bytes; received ${t}`, "SyntaxError");
        if (this[m] === w.CLOSING || this[m] === w.CLOSED) ;
        else if (T(this)) if (k(this)) this[m] = w.CLOSING;
        else {
            const a = new y;
            void 0 !== e && void 0 === n ? (a.frameData = Buffer.allocUnsafe(2), a.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== n ? (a.frameData = Buffer.allocUnsafe(2 + t), a.frameData.writeUInt16BE(e, 0), a.frameData.write(n, 2, "utf-8")) : a.frameData = l;
            this[p].socket.write(a.createFrame(c.CLOSE), (e)=>{
                e || (this[E] = !0);
            }), this[m] = A.CLOSING;
        }
        else _(this, "Connection was closed before it was established."), this[m] = w.CLOSING;
    }
    send(e) {
        if (a.brandCheck(this, w), a.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = a.converters.WebSocketSendData(e), this[m] === w.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!T(this) || k(this)) return;
        const n = this[p].socket;
        if ("string" == typeof e) {
            const t = Buffer.from(e), a = new y(t).createFrame(c.TEXT);
            this.#a += t.byteLength, n.write(a, ()=>{
                this.#a -= t.byteLength;
            });
        } else if (N.isArrayBuffer(e)) {
            const t = Buffer.from(e), a = new y(t).createFrame(c.BINARY);
            this.#a += t.byteLength, n.write(a, ()=>{
                this.#a -= t.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const t = Buffer.from(e, e.byteOffset, e.byteLength), a = new y(t).createFrame(c.BINARY);
            this.#a += t.byteLength, n.write(a, ()=>{
                this.#a -= t.byteLength;
            });
        } else if (v(e)) {
            const t = new y;
            e.arrayBuffer().then((e)=>{
                const a = Buffer.from(e);
                t.frameData = a;
                const s = t.createFrame(c.BINARY);
                this.#a += a.byteLength, n.write(s, ()=>{
                    this.#a -= a.byteLength;
                });
            });
        }
    }
    get readyState() {
        return a.brandCheck(this, w), this[m];
    }
    get bufferedAmount() {
        return a.brandCheck(this, w), this.#a;
    }
    get url() {
        return a.brandCheck(this, w), o(this[d]);
    }
    get extensions() {
        return a.brandCheck(this, w), this.#o;
    }
    get protocol() {
        return a.brandCheck(this, w), this.#s;
    }
    get onopen() {
        return a.brandCheck(this, w), this.#t.open;
    }
    set onopen(e) {
        a.brandCheck(this, w), this.#t.open && this.removeEventListener("open", this.#t.open), "function" == typeof e ? (this.#t.open = e, this.addEventListener("open", e)) : this.#t.open = null;
    }
    get onerror() {
        return a.brandCheck(this, w), this.#t.error;
    }
    set onerror(e) {
        a.brandCheck(this, w), this.#t.error && this.removeEventListener("error", this.#t.error), "function" == typeof e ? (this.#t.error = e, this.addEventListener("error", e)) : this.#t.error = null;
    }
    get onclose() {
        return a.brandCheck(this, w), this.#t.close;
    }
    set onclose(e) {
        a.brandCheck(this, w), this.#t.close && this.removeEventListener("close", this.#t.close), "function" == typeof e ? (this.#t.close = e, this.addEventListener("close", e)) : this.#t.close = null;
    }
    get onmessage() {
        return a.brandCheck(this, w), this.#t.message;
    }
    set onmessage(e) {
        a.brandCheck(this, w), this.#t.message && this.removeEventListener("message", this.#t.message), "function" == typeof e ? (this.#t.message = e, this.addEventListener("message", e)) : this.#t.message = null;
    }
    get binaryType() {
        return a.brandCheck(this, w), this[g];
    }
    set binaryType(e) {
        a.brandCheck(this, w), this[g] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #r(e) {
        this[p] = e;
        const n = new B(this);
        n.on("drain", function() {
            this.ws[p].socket.resume();
        }), e.socket.ws = this, this[h] = n, this[m] = A.OPEN;
        const t = e.headersList.get("sec-websocket-extensions");
        null !== t && (this.#o = t);
        const a = e.headersList.get("sec-websocket-protocol");
        null !== a && (this.#s = a), I("open", this);
    }
}
w.CONNECTING = w.prototype.CONNECTING = A.CONNECTING, w.OPEN = w.prototype.OPEN = A.OPEN, w.CLOSING = w.prototype.CLOSING = A.CLOSING, w.CLOSED = w.prototype.CLOSED = A.CLOSED, Object.defineProperties(w.prototype, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i,
    url: Q,
    readyState: Q,
    bufferedAmount: Q,
    onopen: Q,
    onerror: Q,
    onclose: Q,
    close: Q,
    onmessage: Q,
    binaryType: Q,
    send: Q,
    extensions: Q,
    protocol: Q,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(w, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i
}), a.converters["sequence<DOMString>"] = a.sequenceConverter(a.converters.DOMString), a.converters["DOMString or sequence<DOMString>"] = function(e) {
    return "Object" === a.util.Type(e) && Symbol.iterator in e ? a.converters["sequence<DOMString>"](e) : a.converters.DOMString(e);
}, a.converters.WebSocketInit = a.dictionaryConverter([
    {
        key: "protocols",
        converter: a.converters["DOMString or sequence<DOMString>"],
        get defaultValue () {
            return [];
        }
    },
    {
        key: "dispatcher",
        converter: (e)=>e,
        get defaultValue () {
            return R();
        }
    },
    {
        key: "headers",
        converter: a.nullableConverter(a.converters.HeadersInit)
    }
]), a.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e) {
    return "Object" !== a.util.Type(e) || Symbol.iterator in e ? {
        protocols: a.converters["DOMString or sequence<DOMString>"](e)
    } : a.converters.WebSocketInit(e);
}, a.converters.WebSocketSendData = function(e) {
    if ("Object" === a.util.Type(e)) {
        if (v(e)) return a.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || N.isAnyArrayBuffer(e)) return a.converters.BufferSource(e);
    }
    return a.converters.USVString(e);
}, module.exports = {
    WebSocket: w
};
