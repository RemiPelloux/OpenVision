"use strict";
const { webidl: n } = require("./module-8005.js"), { DOMException: r } = require("./module-6687.js"), { URLSerializer: o } = require("./module-3631.js"), { getGlobalOrigin: s } = require("./module-9523.js"), { staticPropertyDescriptors: i, states: a, opcodes: c, emptyBuffer: l } = require("./module-5440.js"), { kWebSocketURL: u, kReadyState: g, kController: E, kBinaryType: h, kResponse: d, kSentClose: I, kByteParser: B } = require("./module-7696.js"), { isEstablished: Q, isClosing: f, isValidSubprotocol: C, failWebsocketConnection: p, fireEvent: m } = require("./module-4321.js"), { establishWebSocketConnection: y } = require("./module-9809.js"), { WebsocketFrameSend: w } = require("./module-1808.js"), { ByteParser: k } = require("./module-9044.js"), { kEnumerableProperty: b, isBlobLike: N } = require("./module-9361.js"), { getGlobalDispatcher: T } = require("./module-7362.js"), { types: D } = require("./module-9023.js");
let S = !1;
class R extends EventTarget {
    #A = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #n = 0;
    #r = "";
    #o = "";
    constructor(e, t = []){
        super(), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), S || (S = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const A = n.converters["DOMString or sequence<DOMString> or WebSocketInit"](t);
        e = n.converters.USVString(e), t = A.protocols;
        const o = s();
        let i;
        try {
            i = new URL(e, o);
        } catch (e) {
            throw new r(e, "SyntaxError");
        }
        if ("http:" === i.protocol ? i.protocol = "ws:" : "https:" === i.protocol && (i.protocol = "wss:"), "ws:" !== i.protocol && "wss:" !== i.protocol) throw new r(`Expected a ws: or wss: protocol, got ${i.protocol}`, "SyntaxError");
        if (i.hash || i.href.endsWith("#")) throw new r("Got fragment", "SyntaxError");
        if ("string" == typeof t && (t = [
            t
        ]), t.length !== new Set(t.map((e)=>e.toLowerCase())).size) throw new r("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (t.length > 0 && !t.every((e)=>C(e))) throw new r("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[u] = new URL(i.href), this[E] = y(i, t, this, (e)=>this.#s(e), A), this[g] = R.CONNECTING, this[h] = "blob";
    }
    close(e = void 0, t = void 0) {
        if (n.brandCheck(this, R), void 0 !== e && (e = n.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== t && (t = n.converters.USVString(t)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new r("invalid code", "InvalidAccessError");
        let A = 0;
        if (void 0 !== t && (A = Buffer.byteLength(t), A > 123)) throw new r(`Reason must be less than 123 bytes; received ${A}`, "SyntaxError");
        if (this[g] === R.CLOSING || this[g] === R.CLOSED) ;
        else if (Q(this)) if (f(this)) this[g] = R.CLOSING;
        else {
            const n = new w;
            void 0 !== e && void 0 === t ? (n.frameData = Buffer.allocUnsafe(2), n.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== t ? (n.frameData = Buffer.allocUnsafe(2 + A), n.frameData.writeUInt16BE(e, 0), n.frameData.write(t, 2, "utf-8")) : n.frameData = l;
            this[d].socket.write(n.createFrame(c.CLOSE), (e)=>{
                e || (this[I] = !0);
            }), this[g] = a.CLOSING;
        }
        else p(this, "Connection was closed before it was established."), this[g] = R.CLOSING;
    }
    send(e) {
        if (n.brandCheck(this, R), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = n.converters.WebSocketSendData(e), this[g] === R.CONNECTING) throw new r("Sent before connected.", "InvalidStateError");
        if (!Q(this) || f(this)) return;
        const t = this[d].socket;
        if ("string" == typeof e) {
            const A = Buffer.from(e), n = new w(A).createFrame(c.TEXT);
            this.#n += A.byteLength, t.write(n, ()=>{
                this.#n -= A.byteLength;
            });
        } else if (D.isArrayBuffer(e)) {
            const A = Buffer.from(e), n = new w(A).createFrame(c.BINARY);
            this.#n += A.byteLength, t.write(n, ()=>{
                this.#n -= A.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const A = Buffer.from(e, e.byteOffset, e.byteLength), n = new w(A).createFrame(c.BINARY);
            this.#n += A.byteLength, t.write(n, ()=>{
                this.#n -= A.byteLength;
            });
        } else if (N(e)) {
            const A = new w;
            e.arrayBuffer().then((e)=>{
                const n = Buffer.from(e);
                A.frameData = n;
                const r = A.createFrame(c.BINARY);
                this.#n += n.byteLength, t.write(r, ()=>{
                    this.#n -= n.byteLength;
                });
            });
        }
    }
    get readyState() {
        return n.brandCheck(this, R), this[g];
    }
    get bufferedAmount() {
        return n.brandCheck(this, R), this.#n;
    }
    get url() {
        return n.brandCheck(this, R), o(this[u]);
    }
    get extensions() {
        return n.brandCheck(this, R), this.#o;
    }
    get protocol() {
        return n.brandCheck(this, R), this.#r;
    }
    get onopen() {
        return n.brandCheck(this, R), this.#A.open;
    }
    set onopen(e) {
        n.brandCheck(this, R), this.#A.open && this.removeEventListener("open", this.#A.open), "function" == typeof e ? (this.#A.open = e, this.addEventListener("open", e)) : this.#A.open = null;
    }
    get onerror() {
        return n.brandCheck(this, R), this.#A.error;
    }
    set onerror(e) {
        n.brandCheck(this, R), this.#A.error && this.removeEventListener("error", this.#A.error), "function" == typeof e ? (this.#A.error = e, this.addEventListener("error", e)) : this.#A.error = null;
    }
    get onclose() {
        return n.brandCheck(this, R), this.#A.close;
    }
    set onclose(e) {
        n.brandCheck(this, R), this.#A.close && this.removeEventListener("close", this.#A.close), "function" == typeof e ? (this.#A.close = e, this.addEventListener("close", e)) : this.#A.close = null;
    }
    get onmessage() {
        return n.brandCheck(this, R), this.#A.message;
    }
    set onmessage(e) {
        n.brandCheck(this, R), this.#A.message && this.removeEventListener("message", this.#A.message), "function" == typeof e ? (this.#A.message = e, this.addEventListener("message", e)) : this.#A.message = null;
    }
    get binaryType() {
        return n.brandCheck(this, R), this[h];
    }
    set binaryType(e) {
        n.brandCheck(this, R), this[h] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #s(e) {
        this[d] = e;
        const t = new k(this);
        t.on("drain", function() {
            this.ws[d].socket.resume();
        }), e.socket.ws = this, this[B] = t, this[g] = a.OPEN;
        const A = e.headersList.get("sec-websocket-extensions");
        null !== A && (this.#o = A);
        const n = e.headersList.get("sec-websocket-protocol");
        null !== n && (this.#r = n), m("open", this);
    }
}
R.CONNECTING = R.prototype.CONNECTING = a.CONNECTING, R.OPEN = R.prototype.OPEN = a.OPEN, R.CLOSING = R.prototype.CLOSING = a.CLOSING, R.CLOSED = R.prototype.CLOSED = a.CLOSED, Object.defineProperties(R.prototype, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i,
    url: b,
    readyState: b,
    bufferedAmount: b,
    onopen: b,
    onerror: b,
    onclose: b,
    close: b,
    onmessage: b,
    binaryType: b,
    send: b,
    extensions: b,
    protocol: b,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(R, {
    CONNECTING: i,
    OPEN: i,
    CLOSING: i,
    CLOSED: i
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
            return T();
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
        if (ArrayBuffer.isView(e) || D.isAnyArrayBuffer(e)) return n.converters.BufferSource(e);
    }
    return n.converters.USVString(e);
}, module.exports = {
    WebSocket: R
};
