"use strict";
const n = require("./module-24434.js"), s = require("./module-65692.js"), o = require("./module-58611.js"), i = require("./module-69278.js"), a = require("./module-64756.js"), { randomBytes: c, createHash: l } = require("./module-76982.js"), { Duplex: u, Readable: d } = require("./module-2203.js"), { URL: p } = require("./module-87016.js"), m = require("./module-31293.js"), h = require("./module-87492.js"), f = require("./module-35100.js"), { isBlob: g } = require("./module-16818.js"), { BINARY_TYPES: y, CLOSE_TIMEOUT: w, EMPTY_BUFFER: v, GUID: _, kForOnEventAttribute: b, kListener: S, kStatusCode: k, kWebSocket: x, NOOP: E } = require("./module-78864.js"), { EventTarget: { addEventListener: I, removeEventListener: T } } = require("./module-86555.js"), { format: C, parse: P } = require("./module-67592.js"), { toBuffer: A } = require("./module-39796.js"), R = Symbol("kAborted"), M = [
    8,
    13
], J = [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
], O = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
class B extends n {
    constructor(e, t, r){
        super(), this._binaryType = y[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = v, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = B.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, null !== e ? (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, void 0 === t ? t = [] : Array.isArray(t) || ("object" == typeof t && null !== t ? (r = t, t = []) : t = [
            t
        ]), D(this, e, t, r)) : (this._autoPong = r.autoPong, this._closeTimeout = r.closeTimeout, this._isServer = !0);
    }
    get binaryType() {
        return this._binaryType;
    }
    set binaryType(e) {
        y.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
    }
    get bufferedAmount() {
        return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
    }
    get extensions() {
        return Object.keys(this._extensions).join();
    }
    get isPaused() {
        return this._paused;
    }
    get onclose() {
        return null;
    }
    get onerror() {
        return null;
    }
    get onopen() {
        return null;
    }
    get onmessage() {
        return null;
    }
    get protocol() {
        return this._protocol;
    }
    get readyState() {
        return this._readyState;
    }
    get url() {
        return this._url;
    }
    setSocket(e, t, r) {
        const n = new h({
            allowSynchronousEvents: r.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxBufferedChunks: r.maxBufferedChunks,
            maxFragments: r.maxFragments,
            maxPayload: r.maxPayload,
            skipUTF8Validation: r.skipUTF8Validation
        }), s = new f(e, this._extensions, r.generateMask);
        this._receiver = n, this._sender = s, this._socket = e, n[x] = this, s[x] = this, e[x] = this, n.on("conclude", $), n.on("drain", j), n.on("error", G), n.on("message", W), n.on("ping", H), n.on("pong", K), s.onerror = Y, e.setTimeout && e.setTimeout(0), e.setNoDelay && e.setNoDelay(), t.length > 0 && e.unshift(t), e.on("close", X), e.on("data", Z), e.on("end", ee), e.on("error", te), this._readyState = B.OPEN, this.emit("open");
    }
    emitClose() {
        if (!this._socket) return this._readyState = B.CLOSED, void this.emit("close", this._closeCode, this._closeMessage);
        this._extensions[m.extensionName] && this._extensions[m.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = B.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
    }
    close(e, t) {
        if (this.readyState !== B.CLOSED) {
            if (this.readyState === B.CONNECTING) {
                const e = "WebSocket was closed before the connection was established";
                return void U(this, this._req, e);
            }
            this.readyState !== B.CLOSING ? (this._readyState = B.CLOSING, this._sender.close(e, t, !this._isServer, (e)=>{
                e || (this._closeFrameSent = !0, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
            }), Q(this)) : this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
        }
    }
    pause() {
        this.readyState !== B.CONNECTING && this.readyState !== B.CLOSED && (this._paused = !0, this._socket.pause());
    }
    ping(e, t, r) {
        if (this.readyState === B.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof e ? (r = e, e = t = void 0) : "function" == typeof t && (r = t, t = void 0), "number" == typeof e && (e = e.toString()), this.readyState === B.OPEN ? (void 0 === t && (t = !this._isServer), this._sender.ping(e || v, t, r)) : L(this, e, r);
    }
    pong(e, t, r) {
        if (this.readyState === B.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof e ? (r = e, e = t = void 0) : "function" == typeof t && (r = t, t = void 0), "number" == typeof e && (e = e.toString()), this.readyState === B.OPEN ? (void 0 === t && (t = !this._isServer), this._sender.pong(e || v, t, r)) : L(this, e, r);
    }
    resume() {
        this.readyState !== B.CONNECTING && this.readyState !== B.CLOSED && (this._paused = !1, this._receiver._writableState.needDrain || this._socket.resume());
    }
    send(e, t, r) {
        if (this.readyState === B.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if ("function" == typeof t && (r = t, t = {}), "number" == typeof e && (e = e.toString()), this.readyState !== B.OPEN) return void L(this, e, r);
        const n = {
            binary: "string" != typeof e,
            mask: !this._isServer,
            compress: !0,
            fin: !0,
            ...t
        };
        this._extensions[m.extensionName] || (n.compress = !1), this._sender.send(e || v, n, r);
    }
    terminate() {
        if (this.readyState !== B.CLOSED) {
            if (this.readyState === B.CONNECTING) {
                const e = "WebSocket was closed before the connection was established";
                return void U(this, this._req, e);
            }
            this._socket && (this._readyState = B.CLOSING, this._socket.destroy());
        }
    }
}
function D(e, t, r, n) {
    const i = {
        allowSynchronousEvents: !0,
        autoPong: !0,
        closeTimeout: w,
        protocolVersion: M[1],
        maxBufferedChunks: 262144,
        maxFragments: 16384,
        maxPayload: 104857600,
        skipUTF8Validation: !1,
        perMessageDeflate: !0,
        followRedirects: !1,
        maxRedirects: 10,
        ...n,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
    };
    if (e._autoPong = i.autoPong, e._closeTimeout = i.closeTimeout, !M.includes(i.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${i.protocolVersion} (supported versions: ${M.join(", ")})`);
    let a;
    if (t instanceof p) a = t;
    else try {
        a = new p(t);
    } catch  {
        throw new SyntaxError(`Invalid URL: ${t}`);
    }
    "http:" === a.protocol ? a.protocol = "ws:" : "https:" === a.protocol && (a.protocol = "wss:"), e._url = a.href;
    const u = "wss:" === a.protocol, d = "ws+unix:" === a.protocol;
    let h;
    if ("ws:" === a.protocol || u || d ? d && !a.pathname ? h = "The URL's pathname is empty" : a.hash && (h = "The URL contains a fragment identifier") : h = 'The URL\'s protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"', h) {
        const t = new SyntaxError(h);
        if (0 === e._redirects) throw t;
        return void q(e, t);
    }
    const f = u ? 443 : 80, g = c(16).toString("base64"), y = u ? s.request : o.request, v = new Set;
    let b, S;
    if (i.createConnection = i.createConnection || (u ? F : N), i.defaultPort = i.defaultPort || f, i.port = a.port || f, i.host = a.hostname.startsWith("[") ? a.hostname.slice(1, -1) : a.hostname, i.headers = {
        ...i.headers,
        "Sec-WebSocket-Version": i.protocolVersion,
        "Sec-WebSocket-Key": g,
        Connection: "Upgrade",
        Upgrade: "websocket"
    }, i.path = a.pathname + a.search, i.timeout = i.handshakeTimeout, i.perMessageDeflate && (b = new m({
        ...i.perMessageDeflate,
        isServer: !1,
        maxPayload: i.maxPayload
    }), i.headers["Sec-WebSocket-Extensions"] = C({
        [m.extensionName]: b.offer()
    })), r.length) {
        for (const e of r){
            if ("string" != typeof e || !O.test(e) || v.has(e)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
            v.add(e);
        }
        i.headers["Sec-WebSocket-Protocol"] = r.join(",");
    }
    if (i.origin && (i.protocolVersion < 13 ? i.headers["Sec-WebSocket-Origin"] = i.origin : i.headers.Origin = i.origin), (a.username || a.password) && (i.auth = `${a.username}:${a.password}`), d) {
        const e = i.path.split(":");
        i.socketPath = e[0], i.path = e[1];
    }
    if (i.followRedirects) {
        if (0 === e._redirects) {
            e._originalIpc = d, e._originalSecure = u, e._originalHostOrSocketPath = d ? i.socketPath : a.host;
            const t = n && n.headers;
            if (n = {
                ...n,
                headers: {}
            }, t) for (const [e, r] of Object.entries(t))n.headers[e.toLowerCase()] = r;
        } else if (0 === e.listenerCount("redirect")) {
            const t = d ? !!e._originalIpc && i.socketPath === e._originalHostOrSocketPath : !e._originalIpc && a.host === e._originalHostOrSocketPath;
            (!t || e._originalSecure && !u) && (delete i.headers.authorization, delete i.headers.cookie, t || delete i.headers.host, i.auth = void 0);
        }
        i.auth && !n.headers.authorization && (n.headers.authorization = "Basic " + Buffer.from(i.auth).toString("base64")), S = e._req = y(i), e._redirects && e.emit("redirect", e.url, S);
    } else S = e._req = y(i);
    i.timeout && S.on("timeout", ()=>{
        U(e, S, "Opening handshake has timed out");
    }), S.on("error", (t)=>{
        null === S || S[R] || (S = e._req = null, q(e, t));
    }), S.on("response", (s)=>{
        const o = s.headers.location, a = s.statusCode;
        if (o && i.followRedirects && a >= 300 && a < 400) {
            if (++e._redirects > i.maxRedirects) return void U(e, S, "Maximum redirects exceeded");
            let s;
            S.abort();
            try {
                s = new p(o, t);
            } catch (t) {
                const r = new SyntaxError(`Invalid URL: ${o}`);
                return void q(e, r);
            }
            D(e, s, r, n);
        } else e.emit("unexpected-response", S, s) || U(e, S, `Unexpected server response: ${s.statusCode}`);
    }), S.on("upgrade", (t, r, n)=>{
        if (e.emit("upgrade", t), e.readyState !== B.CONNECTING) return;
        S = e._req = null;
        const s = t.headers.upgrade;
        if (void 0 === s || "websocket" !== s.toLowerCase()) return void U(e, r, "Invalid Upgrade header");
        const o = l("sha1").update(g + _).digest("base64");
        if (t.headers["sec-websocket-accept"] !== o) return void U(e, r, "Invalid Sec-WebSocket-Accept header");
        const a = t.headers["sec-websocket-protocol"];
        let c;
        if (void 0 !== a ? v.size ? v.has(a) || (c = "Server sent an invalid subprotocol") : c = "Server sent a subprotocol but none was requested" : v.size && (c = "Server sent no subprotocol"), c) return void U(e, r, c);
        a && (e._protocol = a);
        const u = t.headers["sec-websocket-extensions"];
        if (void 0 !== u) {
            if (!b) {
                return void U(e, r, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
            }
            let t;
            try {
                t = P(u);
            } catch (t) {
                return void U(e, r, "Invalid Sec-WebSocket-Extensions header");
            }
            const n = Object.keys(t);
            if (1 !== n.length || n[0] !== m.extensionName) {
                return void U(e, r, "Server indicated an extension that was not requested");
            }
            try {
                b.accept(t[m.extensionName]);
            } catch (t) {
                return void U(e, r, "Invalid Sec-WebSocket-Extensions header");
            }
            e._extensions[m.extensionName] = b;
        }
        e.setSocket(r, n, {
            allowSynchronousEvents: i.allowSynchronousEvents,
            generateMask: i.generateMask,
            maxBufferedChunks: i.maxBufferedChunks,
            maxFragments: i.maxFragments,
            maxPayload: i.maxPayload,
            skipUTF8Validation: i.skipUTF8Validation
        });
    }), i.finishRequest ? i.finishRequest(S, e) : S.end();
}
function q(e, t) {
    e._readyState = B.CLOSING, e._errorEmitted = !0, e.emit("error", t), e.emitClose();
}
function N(e) {
    return e.path = e.socketPath, i.connect(e);
}
function F(e) {
    return e.path = void 0, e.servername || "" === e.servername || (e.servername = i.isIP(e.host) ? "" : e.host), a.connect(e);
}
function U(e, t, r) {
    e._readyState = B.CLOSING;
    const n = new Error(r);
    Error.captureStackTrace(n, U), t.setHeader ? (t[R] = !0, t.abort(), t.socket && !t.socket.destroyed && t.socket.destroy(), process.nextTick(q, e, n)) : (t.destroy(n), t.once("error", e.emit.bind(e, "error")), t.once("close", e.emitClose.bind(e)));
}
function L(e, t, r) {
    if (t) {
        const r = g(t) ? t.size : A(t).length;
        e._socket ? e._sender._bufferedBytes += r : e._bufferedAmount += r;
    }
    if (r) {
        const t = new Error(`WebSocket is not open: readyState ${e.readyState} (${J[e.readyState]})`);
        process.nextTick(r, t);
    }
}
function $(e, t) {
    const r = this[x];
    r._closeFrameReceived = !0, r._closeMessage = t, r._closeCode = e, void 0 !== r._socket[x] && (r._socket.removeListener("data", Z), process.nextTick(V, r._socket), 1005 === e ? r.close() : r.close(e, t));
}
function j() {
    const e = this[x];
    e.isPaused || e._socket.resume();
}
function G(e) {
    const t = this[x];
    void 0 !== t._socket[x] && (t._socket.removeListener("data", Z), process.nextTick(V, t._socket), t.close(e[k])), t._errorEmitted || (t._errorEmitted = !0, t.emit("error", e));
}
function z() {
    this[x].emitClose();
}
function W(e, t) {
    this[x].emit("message", e, t);
}
function H(e) {
    const t = this[x];
    t._autoPong && t.pong(e, !this._isServer, E), t.emit("ping", e);
}
function K(e) {
    this[x].emit("pong", e);
}
function V(e) {
    e.resume();
}
function Y(e) {
    const t = this[x];
    t.readyState !== B.CLOSED && (t.readyState === B.OPEN && (t._readyState = B.CLOSING, Q(t)), this._socket.end(), t._errorEmitted || (t._errorEmitted = !0, t.emit("error", e)));
}
function Q(e) {
    e._closeTimer = setTimeout(e._socket.destroy.bind(e._socket), e._closeTimeout);
}
function X() {
    const e = this[x];
    if (this.removeListener("close", X), this.removeListener("data", Z), this.removeListener("end", ee), e._readyState = B.CLOSING, !this._readableState.endEmitted && !e._closeFrameReceived && !e._receiver._writableState.errorEmitted && 0 !== this._readableState.length) {
        const t = this.read(this._readableState.length);
        e._receiver.write(t);
    }
    e._receiver.end(), this[x] = void 0, clearTimeout(e._closeTimer), e._receiver._writableState.finished || e._receiver._writableState.errorEmitted ? e.emitClose() : (e._receiver.on("error", z), e._receiver.on("finish", z));
}
function Z(e) {
    this[x]._receiver.write(e) || this.pause();
}
function ee() {
    const e = this[x];
    e._readyState = B.CLOSING, e._receiver.end(), this.end();
}
function te() {
    const e = this[x];
    this.removeListener("error", te), this.on("error", E), e && (e._readyState = B.CLOSING, this.destroy());
}
Object.defineProperty(B, "CONNECTING", {
    enumerable: !0,
    value: J.indexOf("CONNECTING")
}), Object.defineProperty(B.prototype, "CONNECTING", {
    enumerable: !0,
    value: J.indexOf("CONNECTING")
}), Object.defineProperty(B, "OPEN", {
    enumerable: !0,
    value: J.indexOf("OPEN")
}), Object.defineProperty(B.prototype, "OPEN", {
    enumerable: !0,
    value: J.indexOf("OPEN")
}), Object.defineProperty(B, "CLOSING", {
    enumerable: !0,
    value: J.indexOf("CLOSING")
}), Object.defineProperty(B.prototype, "CLOSING", {
    enumerable: !0,
    value: J.indexOf("CLOSING")
}), Object.defineProperty(B, "CLOSED", {
    enumerable: !0,
    value: J.indexOf("CLOSED")
}), Object.defineProperty(B.prototype, "CLOSED", {
    enumerable: !0,
    value: J.indexOf("CLOSED")
}), [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url"
].forEach((e)=>{
    Object.defineProperty(B.prototype, e, {
        enumerable: !0
    });
}), [
    "open",
    "error",
    "close",
    "message"
].forEach((e)=>{
    Object.defineProperty(B.prototype, `on${e}`, {
        enumerable: !0,
        get () {
            for (const t of this.listeners(e))if (t[b]) return t[S];
            return null;
        },
        set (t) {
            for (const t of this.listeners(e))if (t[b]) {
                this.removeListener(e, t);
                break;
            }
            "function" == typeof t && this.addEventListener(e, t, {
                [b]: !0
            });
        }
    });
}), B.prototype.addEventListener = I, B.prototype.removeEventListener = T, module.exports = B;
