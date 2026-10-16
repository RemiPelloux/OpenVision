"use strict";
const { webidl: n } = require("./module-8193.js"), { DOMException: s } = require("./module-2955.js"), { URLSerializer: i } = require("./module-4387.js"), { getGlobalOrigin: o } = require("./module-3967.js"), { staticPropertyDescriptors: a, states: u, opcodes: c, emptyBuffer: l } = require("./module-5948.js"), { kWebSocketURL: m, kReadyState: d, kController: f, kBinaryType: p, kResponse: h, kSentClose: g, kByteParser: A } = require("./module-6140.js"), { isEstablished: _, isClosing: y, isValidSubprotocol: w, failWebsocketConnection: S, fireEvent: J } = require("./module-8149.js"), { establishWebSocketConnection: B } = require("./module-5333.js"), { WebsocketFrameSend: E } = require("./module-7324.js"), { ByteParser: I } = require("./module-3552.js"), { kEnumerableProperty: C, isBlobLike: b } = require("./module-3589.js"), { getGlobalDispatcher: k } = require("./module-7582.js"), { types: v } = require("./module-9023.js");
let q = !1;
class R extends EventTarget {
    #o = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #a = 0;
    #u = "";
    #c = "";
    constructor(t, e = []){
        super(), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), q || (q = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const r = n.converters["DOMString or sequence<DOMString> or WebSocketInit"](e);
        t = n.converters.USVString(t), e = r.protocols;
        const i = o();
        let a;
        try {
            a = new URL(t, i);
        } catch (t) {
            throw new s(t, "SyntaxError");
        }
        if ("http:" === a.protocol ? a.protocol = "ws:" : "https:" === a.protocol && (a.protocol = "wss:"), "ws:" !== a.protocol && "wss:" !== a.protocol) throw new s(`Expected a ws: or wss: protocol, got ${a.protocol}`, "SyntaxError");
        if (a.hash || a.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof e && (e = [
            e
        ]), e.length !== new Set(e.map((t)=>t.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (e.length > 0 && !e.every((t)=>w(t))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[m] = new URL(a.href), this[f] = B(a, e, this, (t)=>this.#l(t), r), this[d] = R.CONNECTING, this[p] = "blob";
    }
    close(t = void 0, e = void 0) {
        if (n.brandCheck(this, R), void 0 !== t && (t = n.converters["unsigned short"](t, {
            clamp: !0
        })), void 0 !== e && (e = n.converters.USVString(e)), void 0 !== t && 1e3 !== t && (t < 3e3 || t > 4999)) throw new s("invalid code", "InvalidAccessError");
        let r = 0;
        if (void 0 !== e && (r = Buffer.byteLength(e), r > 123)) throw new s(`Reason must be less than 123 bytes; received ${r}`, "SyntaxError");
        if (this[d] === R.CLOSING || this[d] === R.CLOSED) ;
        else if (_(this)) if (y(this)) this[d] = R.CLOSING;
        else {
            const n = new E;
            void 0 !== t && void 0 === e ? (n.frameData = Buffer.allocUnsafe(2), n.frameData.writeUInt16BE(t, 0)) : void 0 !== t && void 0 !== e ? (n.frameData = Buffer.allocUnsafe(2 + r), n.frameData.writeUInt16BE(t, 0), n.frameData.write(e, 2, "utf-8")) : n.frameData = l;
            this[h].socket.write(n.createFrame(c.CLOSE), (t)=>{
                t || (this[g] = !0);
            }), this[d] = u.CLOSING;
        }
        else S(this, "Connection was closed before it was established."), this[d] = R.CLOSING;
    }
    send(t) {
        if (n.brandCheck(this, R), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), t = n.converters.WebSocketSendData(t), this[d] === R.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!_(this) || y(this)) return;
        const e = this[h].socket;
        if ("string" == typeof t) {
            const r = Buffer.from(t), n = new E(r).createFrame(c.TEXT);
            this.#a += r.byteLength, e.write(n, ()=>{
                this.#a -= r.byteLength;
            });
        } else if (v.isArrayBuffer(t)) {
            const r = Buffer.from(t), n = new E(r).createFrame(c.BINARY);
            this.#a += r.byteLength, e.write(n, ()=>{
                this.#a -= r.byteLength;
            });
        } else if (ArrayBuffer.isView(t)) {
            const r = Buffer.from(t, t.byteOffset, t.byteLength), n = new E(r).createFrame(c.BINARY);
            this.#a += r.byteLength, e.write(n, ()=>{
                this.#a -= r.byteLength;
            });
        } else if (b(t)) {
            const r = new E;
            t.arrayBuffer().then((t)=>{
                const n = Buffer.from(t);
                r.frameData = n;
                const s = r.createFrame(c.BINARY);
                this.#a += n.byteLength, e.write(s, ()=>{
                    this.#a -= n.byteLength;
                });
            });
        }
    }
    get readyState() {
        return n.brandCheck(this, R), this[d];
    }
    get bufferedAmount() {
        return n.brandCheck(this, R), this.#a;
    }
    get url() {
        return n.brandCheck(this, R), i(this[m]);
    }
    get extensions() {
        return n.brandCheck(this, R), this.#c;
    }
    get protocol() {
        return n.brandCheck(this, R), this.#u;
    }
    get onopen() {
        return n.brandCheck(this, R), this.#o.open;
    }
    set onopen(t) {
        n.brandCheck(this, R), this.#o.open && this.removeEventListener("open", this.#o.open), "function" == typeof t ? (this.#o.open = t, this.addEventListener("open", t)) : this.#o.open = null;
    }
    get onerror() {
        return n.brandCheck(this, R), this.#o.error;
    }
    set onerror(t) {
        n.brandCheck(this, R), this.#o.error && this.removeEventListener("error", this.#o.error), "function" == typeof t ? (this.#o.error = t, this.addEventListener("error", t)) : this.#o.error = null;
    }
    get onclose() {
        return n.brandCheck(this, R), this.#o.close;
    }
    set onclose(t) {
        n.brandCheck(this, R), this.#o.close && this.removeEventListener("close", this.#o.close), "function" == typeof t ? (this.#o.close = t, this.addEventListener("close", t)) : this.#o.close = null;
    }
    get onmessage() {
        return n.brandCheck(this, R), this.#o.message;
    }
    set onmessage(t) {
        n.brandCheck(this, R), this.#o.message && this.removeEventListener("message", this.#o.message), "function" == typeof t ? (this.#o.message = t, this.addEventListener("message", t)) : this.#o.message = null;
    }
    get binaryType() {
        return n.brandCheck(this, R), this[p];
    }
    set binaryType(t) {
        n.brandCheck(this, R), this[p] = "blob" !== t && "arraybuffer" !== t ? "blob" : t;
    }
    #l(t) {
        this[h] = t;
        const e = new I(this);
        e.on("drain", function() {
            this.ws[h].socket.resume();
        }), t.socket.ws = this, this[A] = e, this[d] = u.OPEN;
        const r = t.headersList.get("sec-websocket-extensions");
        null !== r && (this.#c = r);
        const n = t.headersList.get("sec-websocket-protocol");
        null !== n && (this.#u = n), J("open", this);
    }
}
R.CONNECTING = R.prototype.CONNECTING = u.CONNECTING, R.OPEN = R.prototype.OPEN = u.OPEN, R.CLOSING = R.prototype.CLOSING = u.CLOSING, R.CLOSED = R.prototype.CLOSED = u.CLOSED, Object.defineProperties(R.prototype, {
    CONNECTING: a,
    OPEN: a,
    CLOSING: a,
    CLOSED: a,
    url: C,
    readyState: C,
    bufferedAmount: C,
    onopen: C,
    onerror: C,
    onclose: C,
    close: C,
    onmessage: C,
    binaryType: C,
    send: C,
    extensions: C,
    protocol: C,
    [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(R, {
    CONNECTING: a,
    OPEN: a,
    CLOSING: a,
    CLOSED: a
}), n.converters["sequence<DOMString>"] = n.sequenceConverter(n.converters.DOMString), n.converters["DOMString or sequence<DOMString>"] = function(t) {
    return "Object" === n.util.Type(t) && Symbol.iterator in t ? n.converters["sequence<DOMString>"](t) : n.converters.DOMString(t);
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
        converter: (t)=>t,
        get defaultValue () {
            return k();
        }
    },
    {
        key: "headers",
        converter: n.nullableConverter(n.converters.HeadersInit)
    }
]), n.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(t) {
    return "Object" !== n.util.Type(t) || Symbol.iterator in t ? {
        protocols: n.converters["DOMString or sequence<DOMString>"](t)
    } : n.converters.WebSocketInit(t);
}, n.converters.WebSocketSendData = function(t) {
    if ("Object" === n.util.Type(t)) {
        if (b(t)) return n.converters.Blob(t, {
            strict: !1
        });
        if (ArrayBuffer.isView(t) || v.isAnyArrayBuffer(t)) return n.converters.BufferSource(t);
    }
    return n.converters.USVString(t);
}, module.exports = {
    WebSocket: R
};
