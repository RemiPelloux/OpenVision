"use strict";
const { webidl: n } = require("./module-18193.js"), { DOMException: s } = require("./module-22955.js"), { URLSerializer: o } = require("./module-64387.js"), { getGlobalOrigin: i } = require("./module-13967.js"), { staticPropertyDescriptors: a, states: c, opcodes: l, emptyBuffer: u } = require("./module-15948.js"), { kWebSocketURL: d, kReadyState: p, kController: m, kBinaryType: h, kResponse: f, kSentClose: g, kByteParser: y } = require("./module-96140.js"), { isEstablished: w, isClosing: v, isValidSubprotocol: _, failWebsocketConnection: A, fireEvent: S } = require("./module-18149.js"), { establishWebSocketConnection: b } = require("./module-55333.js"), { WebsocketFrameSend: E } = require("./module-87324.js"), { ByteParser: I } = require("./module-23552.js"), { kEnumerableProperty: C, isBlobLike: k } = require("./module-83589.js"), { getGlobalDispatcher: x } = require("./module-17582.js"), { types: T } = require("./module-39023.js");
let R = !1;
class B extends EventTarget {
    #u = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #d = 0;
    #p = "";
    #m = "";
    constructor(e, t = []){
        super(), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket constructor"
        }), R || (R = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
        }));
        const r = n.converters["DOMString or sequence<DOMString> or WebSocketInit"](t);
        e = n.converters.USVString(e), t = r.protocols;
        const o = i();
        let a;
        try {
            a = new URL(e, o);
        } catch (e) {
            throw new s(e, "SyntaxError");
        }
        if ("http:" === a.protocol ? a.protocol = "ws:" : "https:" === a.protocol && (a.protocol = "wss:"), "ws:" !== a.protocol && "wss:" !== a.protocol) throw new s(`Expected a ws: or wss: protocol, got ${a.protocol}`, "SyntaxError");
        if (a.hash || a.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof t && (t = [
            t
        ]), t.length !== new Set(t.map((e)=>e.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (t.length > 0 && !t.every((e)=>_(e))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[d] = new URL(a.href), this[m] = b(a, t, this, (e)=>this.#h(e), r), this[p] = B.CONNECTING, this[h] = "blob";
    }
    close(e = void 0, t = void 0) {
        if (n.brandCheck(this, B), void 0 !== e && (e = n.converters["unsigned short"](e, {
            clamp: !0
        })), void 0 !== t && (t = n.converters.USVString(t)), void 0 !== e && 1e3 !== e && (e < 3e3 || e > 4999)) throw new s("invalid code", "InvalidAccessError");
        let r = 0;
        if (void 0 !== t && (r = Buffer.byteLength(t), r > 123)) throw new s(`Reason must be less than 123 bytes; received ${r}`, "SyntaxError");
        if (this[p] === B.CLOSING || this[p] === B.CLOSED) ;
        else if (w(this)) if (v(this)) this[p] = B.CLOSING;
        else {
            const n = new E;
            void 0 !== e && void 0 === t ? (n.frameData = Buffer.allocUnsafe(2), n.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== t ? (n.frameData = Buffer.allocUnsafe(2 + r), n.frameData.writeUInt16BE(e, 0), n.frameData.write(t, 2, "utf-8")) : n.frameData = u;
            this[f].socket.write(n.createFrame(l.CLOSE), (e)=>{
                e || (this[g] = !0);
            }), this[p] = c.CLOSING;
        }
        else A(this, "Connection was closed before it was established."), this[p] = B.CLOSING;
    }
    send(e) {
        if (n.brandCheck(this, B), n.argumentLengthCheck(arguments, 1, {
            header: "WebSocket.send"
        }), e = n.converters.WebSocketSendData(e), this[p] === B.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!w(this) || v(this)) return;
        const t = this[f].socket;
        if ("string" == typeof e) {
            const r = Buffer.from(e), n = new E(r).createFrame(l.TEXT);
            this.#d += r.byteLength, t.write(n, ()=>{
                this.#d -= r.byteLength;
            });
        } else if (T.isArrayBuffer(e)) {
            const r = Buffer.from(e), n = new E(r).createFrame(l.BINARY);
            this.#d += r.byteLength, t.write(n, ()=>{
                this.#d -= r.byteLength;
            });
        } else if (ArrayBuffer.isView(e)) {
            const r = Buffer.from(e, e.byteOffset, e.byteLength), n = new E(r).createFrame(l.BINARY);
            this.#d += r.byteLength, t.write(n, ()=>{
                this.#d -= r.byteLength;
            });
        } else if (k(e)) {
            const r = new E;
            e.arrayBuffer().then((e)=>{
                const n = Buffer.from(e);
                r.frameData = n;
                const s = r.createFrame(l.BINARY);
                this.#d += n.byteLength, t.write(s, ()=>{
                    this.#d -= n.byteLength;
                });
            });
        }
    }
    get readyState() {
        return n.brandCheck(this, B), this[p];
    }
    get bufferedAmount() {
        return n.brandCheck(this, B), this.#d;
    }
    get url() {
        return n.brandCheck(this, B), o(this[d]);
    }
    get extensions() {
        return n.brandCheck(this, B), this.#m;
    }
    get protocol() {
        return n.brandCheck(this, B), this.#p;
    }
    get onopen() {
        return n.brandCheck(this, B), this.#u.open;
    }
    set onopen(e) {
        n.brandCheck(this, B), this.#u.open && this.removeEventListener("open", this.#u.open), "function" == typeof e ? (this.#u.open = e, this.addEventListener("open", e)) : this.#u.open = null;
    }
    get onerror() {
        return n.brandCheck(this, B), this.#u.error;
    }
    set onerror(e) {
        n.brandCheck(this, B), this.#u.error && this.removeEventListener("error", this.#u.error), "function" == typeof e ? (this.#u.error = e, this.addEventListener("error", e)) : this.#u.error = null;
    }
    get onclose() {
        return n.brandCheck(this, B), this.#u.close;
    }
    set onclose(e) {
        n.brandCheck(this, B), this.#u.close && this.removeEventListener("close", this.#u.close), "function" == typeof e ? (this.#u.close = e, this.addEventListener("close", e)) : this.#u.close = null;
    }
    get onmessage() {
        return n.brandCheck(this, B), this.#u.message;
    }
    set onmessage(e) {
        n.brandCheck(this, B), this.#u.message && this.removeEventListener("message", this.#u.message), "function" == typeof e ? (this.#u.message = e, this.addEventListener("message", e)) : this.#u.message = null;
    }
    get binaryType() {
        return n.brandCheck(this, B), this[h];
    }
    set binaryType(e) {
        n.brandCheck(this, B), this[h] = "blob" !== e && "arraybuffer" !== e ? "blob" : e;
    }
    #h(e) {
        this[f] = e;
        const t = new I(this);
        t.on("drain", function() {
            this.ws[f].socket.resume();
        }), e.socket.ws = this, this[y] = t, this[p] = c.OPEN;
        const r = e.headersList.get("sec-websocket-extensions");
        null !== r && (this.#m = r);
        const n = e.headersList.get("sec-websocket-protocol");
        null !== n && (this.#p = n), S("open", this);
    }
}
B.CONNECTING = B.prototype.CONNECTING = c.CONNECTING, B.OPEN = B.prototype.OPEN = c.OPEN, B.CLOSING = B.prototype.CLOSING = c.CLOSING, B.CLOSED = B.prototype.CLOSED = c.CLOSED, Object.defineProperties(B.prototype, {
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
}), Object.defineProperties(B, {
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
            return x();
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
        if (k(e)) return n.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || T.isAnyArrayBuffer(e)) return n.converters.BufferSource(e);
    }
    return n.converters.USVString(e);
}, module.exports = {
    WebSocket: B
};
