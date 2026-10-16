"use strict";
const { webidl: t } = require("./module-8005.js"), { DOMException: s } = require("./module-6687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { staticPropertyDescriptors: i, states: l, opcodes: d, emptyBuffer: m } = require("./module-5440.js"), { kWebSocketURL: c, kReadyState: p, kController: A, kBinaryType: u, kResponse: g, kSentClose: T, kByteParser: h } = require("./module-7696.js"), { isEstablished: k, isClosing: _, isValidSubprotocol: E, failWebsocketConnection: f, fireEvent: C } = require("./module-4321.js"), { establishWebSocketConnection: I } = require("./module-9809.js"), { WebsocketFrameSend: v } = require("./module-1808.js"), { ByteParser: y } = require("./module-9044.js"), { kEnumerableProperty: S, isBlobLike: R } = require("./module-9361.js"), { getGlobalDispatcher: N } = require("./module-7362.js"), { types: B } = require("./module-9023.js");
let w = !1;
class b extends EventTarget {
    #n = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #t = 0;
    #s = "";
    #o = "";
    constructor(e, a = []){
        super(), t.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), w || (w = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const n = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](a);
        e = t.converters.USVString(e), a = n.protocols;
        const o = r();
        let i;
        try {
            i = new URL(e, o);
        } catch (e) {
            throw new s(e, "SyntaxError");
        }
        if ("http:" === i.protocol ? i.protocol = "ws:" : "https:" === i.protocol && (i.protocol = "wss:"), "ws:" !== i.protocol && "wss:" !== i.protocol) throw new s(`Expected a ws: or wss: protocol, got ${i.protocol}`, "SyntaxError");
        if (i.hash || i.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof a && (a = [
            a
        ]), a.length !== new Set(a.map((e)=>e.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (a.length > 0 && !a.every((e)=>E(e))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[c] = new URL(i.href), this[A] = I(i, a, this, (e)=>this.#r(e), n), this[p] = b.CONNECTING, this[u] = "blob";
    }
    close(e = void 0, a = void 0) {
        if (t.brandCheck(this, b), void 0 !== e && (e = t.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== a && (a = t.converters.USVString(a)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new s("invalid code", "InvalidAccessError");
        let n = 0;
        if (void 0 !== a && (n = Buffer.byteLength(a), n > 123)) throw new s(`Reason must be less than 123 bytes; received ${n}`, "SyntaxError");
        if (this[p] === b.CLOSING || this[p] === b.CLOSED) ;
        else if (k(this)) if (_(this)) this[p] = b.CLOSING;
        else {
            const t = new v;
            void 0 !== e && void 0 === a ? (t.frameData = Buffer.allocUnsafe(2), t.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== a ? (t.frameData = Buffer.allocUnsafe(2 + n), t.frameData.writeUInt16BE(e, 0), t.frameData.write(a, 2, "utf-8")) : t.frameData = m;
            this[g].socket.write(t.createFrame(d.CLOSE), (e)=>{
                e || (this[T] = !0);
            }), this[p] = l.CLOSING;
        }
        else f(this, "Connection was closed before it was established."), this[p] = b.CLOSING;
    }
    send(e) {
        if (t.brandCheck(this, b), t.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = t.converters.WebSocketSendData(e), this[p] === b.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!k(this) || _(this)) return;
        const a = this[g].socket;
        if ("string" == typeof e) {
            const n = Buffer.from(e), t = new v(n).createFrame(d.TEXT);
            this.#t += n.byteLength, a.write(t, ()=>{
                this.#t -= n.byteLength;
            });
        } else if (B.isArrayBuffer(e)) {
            const n = Buffer.from(e), t = new v(n).createFrame(d.BINARY);
            this.#t += n.byteLength, a.write(t, ()=>{
                this.#t -= n.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const n = Buffer.from(e, e.byteOffset, e.byteLength), t = new v(n).createFrame(d.BINARY);
            this.#t += n.byteLength, a.write(t, ()=>{
                this.#t -= n.byteLength;
            });
        } else if (R(e)) {
            const n = new v;
            e.arrayBuffer().then((e)=>{
                const t = Buffer.from(e);
                n.frameData = t;
                const s = n.createFrame(d.BINARY);
                this.#t += t.byteLength, a.write(s, ()=>{
                    this.#t -= t.byteLength;
                });
            });
        }
    }
    get readyState() {
        return t.brandCheck(this, b), this[p];
    }
    get bufferedAmount() {
        return t.brandCheck(this, b), this.#t;
    }
    get url() {
        return t.brandCheck(this, b), o(this[c]);
    }
    get extensions() {
        return t.brandCheck(this, b), this.#o;
    }
    get protocol() {
        return t.brandCheck(this, b), this.#s;
    }
    get onopen() {
        return t.brandCheck(this, b), this.#n.open;
    }
    set onopen(e) {
        t.brandCheck(this, b), this.#n.open && this.removeEventListener("open", this.#n.open), "function" == typeof e ? (this.#n.open = e, this.addEventListener("open", e)) : this.#n.open = null;
    }
    get onerror() {
        return t.brandCheck(this, b), this.#n.error;
    }
    set onerror(e) {
        t.brandCheck(this, b), this.#n.error && this.removeEventListener("error", this.#n.error), "function" == typeof e ? (this.#n.error = e, this.addEventListener("error", e)) : this.#n.error = null;
    }
    get onclose() {
        return t.brandCheck(this, b), this.#n.close;
    }
    set onclose(e) {
        t.brandCheck(this, b), this.#n.close && this.removeEventListener("close", this.#n.close), "function" == typeof e ? (this.#n.close = e, this.addEventListener("close", e)) : this.#n.close = null;
    }
    get onmessage() {
        return t.brandCheck(this, b), this.#n.message;
    }
    set onmessage(e) {
        t.brandCheck(this, b), this.#n.message && this.removeEventListener("message", this.#n.message), "function" == typeof e ? (this.#n.message = e, this.addEventListener("message", e)) : this.#n.message = null;
    }
    get binaryType() {
        return t.brandCheck(this, b), this[u];
    }
    set binaryType(e) {
        t.brandCheck(this, b), this[u] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #r(e) {
        this[g] = e;
        const a = new y(this);
        a.on("drain", function() {
            this.ws[g].socket.resume();
        }), e.socket.ws = this, this[h] = a, this[p] = l.OPEN;
        const n = e.headersList.get("sec-websocket-extensions");
        null !== n && (this.#o = n);
        const t = e.headersList.get("sec-websocket-protocol");
        null !== t && (this.#s = t), C("open", this);
    }
}
b.CONNECTING = b.prototype.CONNECTING = l.CONNECTING, b.OPEN = b.prototype.OPEN = l.OPEN, b.CLOSING = b.prototype.CLOSING = l.CLOSING, b.CLOSED = b.prototype.CLOSED = l.CLOSED, Object.defineProperties(b.prototype, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i,
    url: S,
    readyState: S,
    bufferedAmount: S,
    onopen: S,
    onerror: S,
    onclose: S,
    close: S,
    onmessage: S,
    binaryType: S,
    send: S,
    extensions: S,
    protocol: S,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(b, {
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
        if (ArrayBuffer.isView(e) || B.isAnyArrayBuffer(e)) return t.converters.BufferSource(e);
    }
    return t.converters.USVString(e);
}, module.exports = {
    WebSocket: b
};
