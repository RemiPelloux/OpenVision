"use strict";
const n = require("./module-4434.js"), s = require("./module-5692.js"), i = require("./module-8611.js"), o = require("./module-9278.js"), a = require("./module-4756.js"), { randomBytes: u, createHash: c } = require("./module-6982.js"), { Duplex: l, Readable: m } = require("./module-2203.js"), { URL: d } = require("./module-7016.js"), f = require("./module-1293.js"), p = require("./module-7492.js"), h = require("./module-5100.js"), { isBlob: g } = require("./module-6818.js"), { BINARY_TYPES: A, CLOSE_TIMEOUT: _, EMPTY_BUFFER: y, GUID: w, kForOnEventAttribute: S, kListener: J, kStatusCode: B, kWebSocket: E, NOOP: I } = require("./module-8864.js"), { EventTarget: { addEventListener: C, removeEventListener: b } } = require("./module-6555.js"), { format: k, parse: v } = require("./module-7592.js"), { toBuffer: q } = require("./module-9796.js"), R = Symbol("kAborted"), P = [
    8,
    13
], T = [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
], x = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
class N extends n {
    constructor(t, e, r){
        super(), this._binaryType = A[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = y, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = N.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, null !== t ? (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, void 0 === e ? e = [] : Array.isArray(e) || ("object" == typeof e && null !== e ? (r = e, e = []) : e = [
            e
        ]), D(this, t, e, r)) : (this._autoPong = r.autoPong, this._closeTimeout = r.closeTimeout, this._isServer = !0);
    }
    get binaryType() {
        return this._binaryType;
    }
    set binaryType(t) {
        A.includes(t) && (this._binaryType = t, this._receiver && (this._receiver._binaryType = t));
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
    setSocket(t, e, r) {
        const n = new p({
            allowSynchronousEvents: r.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxBufferedChunks: r.maxBufferedChunks,
            maxFragments: r.maxFragments,
            maxPayload: r.maxPayload,
            skipUTF8Validation: r.skipUTF8Validation
        }), s = new h(t, this._extensions, r.generateMask);
        this._receiver = n, this._sender = s, this._socket = t, n[E] = this, s[E] = this, t[E] = this, n.on("conclude", L), n.on("drain", $), n.on("error", G), n.on("message", K), n.on("ping", V), n.on("pong", z), s.onerror = Y, t.setTimeout && t.setTimeout(0), t.setNoDelay && t.setNoDelay(), e.length > 0 && t.unshift(e), t.on("close", X), t.on("data", Z), t.on("end", tt), t.on("error", et), this._readyState = N.OPEN, this.emit("open");
    }
    emitClose() {
        if (!this._socket) return this._readyState = N.CLOSED, void this.emit("close", this._closeCode, this._closeMessage);
        this._extensions[f.extensionName] && this._extensions[f.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = N.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
    }
    close(t, e) {
        if (this.readyState !== N.CLOSED) {
            if (this.readyState === N.CONNECTING) {
                const t = "WebSocket was closed before the connection was established";
                return void O(this, this._req, t);
            }
            this.readyState !== N.CLOSING ? (this._readyState = N.CLOSING, this._sender.close(t, e, !this._isServer, (t)=>{
                t || (this._closeFrameSent = !0, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
            }), j(this)) : this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
        }
    }
    pause() {
        this.readyState !== N.CONNECTING && this.readyState !== N.CLOSED && (this._paused = !0, this._socket.pause());
    }
    ping(t, e, r) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof t ? (r = t, t = e = void 0) : "function" == typeof e && (r = e, e = void 0), "number" == typeof t && (t = t.toString()), this.readyState === N.OPEN ? (void 0 === e && (e = !this._isServer), this._sender.ping(t || y, e, r)) : F(this, t, r);
    }
    pong(t, e, r) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof t ? (r = t, t = e = void 0) : "function" == typeof e && (r = e, e = void 0), "number" == typeof t && (t = t.toString()), this.readyState === N.OPEN ? (void 0 === e && (e = !this._isServer), this._sender.pong(t || y, e, r)) : F(this, t, r);
    }
    resume() {
        this.readyState !== N.CONNECTING && this.readyState !== N.CLOSED && (this._paused = !1, this._receiver._writableState.needDrain || this._socket.resume());
    }
    send(t, e, r) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if ("function" == typeof e && (r = e, e = {}), "number" == typeof t && (t = t.toString()), this.readyState !== N.OPEN) return void F(this, t, r);
        const n = {
            binary: "string" != typeof t,
            mask: !this._isServer,
            compress: !0,
            fin: !0,
            ...e
        };
        this._extensions[f.extensionName] || (n.compress = !1), this._sender.send(t || y, n, r);
    }
    terminate() {
        if (this.readyState !== N.CLOSED) {
            if (this.readyState === N.CONNECTING) {
                const t = "WebSocket was closed before the connection was established";
                return void O(this, this._req, t);
            }
            this._socket && (this._readyState = N.CLOSING, this._socket.destroy());
        }
    }
}
function D(t, e, r, n) {
    const o = {
        allowSynchronousEvents: !0,
        autoPong: !0,
        closeTimeout: _,
        protocolVersion: P[1],
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
    if (t._autoPong = o.autoPong, t._closeTimeout = o.closeTimeout, !P.includes(o.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${o.protocolVersion} (supported versions: ${P.join(", ")})`);
    let a;
    if (e instanceof d) a = e;
    else try {
        a = new d(e);
    } catch  {
        throw new SyntaxError(`Invalid URL: ${e}`);
    }
    "http:" === a.protocol ? a.protocol = "ws:" : "https:" === a.protocol && (a.protocol = "wss:"), t._url = a.href;
    const l = "wss:" === a.protocol, m = "ws+unix:" === a.protocol;
    let p;
    if ("ws:" === a.protocol || l || m ? m && !a.pathname ? p = "The URL's pathname is empty" : a.hash && (p = "The URL contains a fragment identifier") : p = 'The URL\'s protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"', p) {
        const e = new SyntaxError(p);
        if (0 === t._redirects) throw e;
        return void U(t, e);
    }
    const h = l ? 443 : 80, g = u(16).toString("base64"), A = l ? s.request : i.request, y = new Set;
    let S, J;
    if (o.createConnection = o.createConnection || (l ? M : Q), o.defaultPort = o.defaultPort || h, o.port = a.port || h, o.host = a.hostname.startsWith("[") ? a.hostname.slice(1, -1) : a.hostname, o.headers = {
        ...o.headers,
        "Sec-WebSocket-Version": o.protocolVersion,
        "Sec-WebSocket-Key": g,
        Connection: "Upgrade",
        Upgrade: "websocket"
    }, o.path = a.pathname + a.search, o.timeout = o.handshakeTimeout, o.perMessageDeflate && (S = new f({
        ...o.perMessageDeflate,
        isServer: !1,
        maxPayload: o.maxPayload
    }), o.headers["Sec-WebSocket-Extensions"] = k({
        [f.extensionName]: S.offer()
    })), r.length) {
        for (const t of r){
            if ("string" != typeof t || !x.test(t) || y.has(t)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
            y.add(t);
        }
        o.headers["Sec-WebSocket-Protocol"] = r.join(",");
    }
    if (o.origin && (o.protocolVersion < 13 ? o.headers["Sec-WebSocket-Origin"] = o.origin : o.headers.Origin = o.origin), (a.username || a.password) && (o.auth = `${a.username}:${a.password}`), m) {
        const t = o.path.split(":");
        o.socketPath = t[0], o.path = t[1];
    }
    if (o.followRedirects) {
        if (0 === t._redirects) {
            t._originalIpc = m, t._originalSecure = l, t._originalHostOrSocketPath = m ? o.socketPath : a.host;
            const e = n && n.headers;
            if (n = {
                ...n,
                headers: {}
            }, e) for (const [t, r] of Object.entries(e))n.headers[t.toLowerCase()] = r;
        } else if (0 === t.listenerCount("redirect")) {
            const e = m ? !!t._originalIpc && o.socketPath === t._originalHostOrSocketPath : !t._originalIpc && a.host === t._originalHostOrSocketPath;
            (!e || t._originalSecure && !l) && (delete o.headers.authorization, delete o.headers.cookie, e || delete o.headers.host, o.auth = void 0);
        }
        o.auth && !n.headers.authorization && (n.headers.authorization = "Basic " + Buffer.from(o.auth).toString("base64")), J = t._req = A(o), t._redirects && t.emit("redirect", t.url, J);
    } else J = t._req = A(o);
    o.timeout && J.on("timeout", ()=>{
        O(t, J, "Opening handshake has timed out");
    }), J.on("error", (e)=>{
        null === J || J[R] || (J = t._req = null, U(t, e));
    }), J.on("response", (s)=>{
        const i = s.headers.location, a = s.statusCode;
        if (i && o.followRedirects && a >= 300 && a < 400) {
            if (++t._redirects > o.maxRedirects) return void O(t, J, "Maximum redirects exceeded");
            let s;
            J.abort();
            try {
                s = new d(i, e);
            } catch (e) {
                const r = new SyntaxError(`Invalid URL: ${i}`);
                return void U(t, r);
            }
            D(t, s, r, n);
        } else t.emit("unexpected-response", J, s) || O(t, J, `Unexpected server response: ${s.statusCode}`);
    }), J.on("upgrade", (e, r, n)=>{
        if (t.emit("upgrade", e), t.readyState !== N.CONNECTING) return;
        J = t._req = null;
        const s = e.headers.upgrade;
        if (void 0 === s || "websocket" !== s.toLowerCase()) return void O(t, r, "Invalid Upgrade header");
        const i = c("sha1").update(g + w).digest("base64");
        if (e.headers["sec-websocket-accept"] !== i) return void O(t, r, "Invalid Sec-WebSocket-Accept header");
        const a = e.headers["sec-websocket-protocol"];
        let u;
        if (void 0 !== a ? y.size ? y.has(a) || (u = "Server sent an invalid subprotocol") : u = "Server sent a subprotocol but none was requested" : y.size && (u = "Server sent no subprotocol"), u) return void O(t, r, u);
        a && (t._protocol = a);
        const l = e.headers["sec-websocket-extensions"];
        if (void 0 !== l) {
            if (!S) {
                return void O(t, r, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
            }
            let e;
            try {
                e = v(l);
            } catch (e) {
                return void O(t, r, "Invalid Sec-WebSocket-Extensions header");
            }
            const n = Object.keys(e);
            if (1 !== n.length || n[0] !== f.extensionName) {
                return void O(t, r, "Server indicated an extension that was not requested");
            }
            try {
                S.accept(e[f.extensionName]);
            } catch (e) {
                return void O(t, r, "Invalid Sec-WebSocket-Extensions header");
            }
            t._extensions[f.extensionName] = S;
        }
        t.setSocket(r, n, {
            allowSynchronousEvents: o.allowSynchronousEvents,
            generateMask: o.generateMask,
            maxBufferedChunks: o.maxBufferedChunks,
            maxFragments: o.maxFragments,
            maxPayload: o.maxPayload,
            skipUTF8Validation: o.skipUTF8Validation
        });
    }), o.finishRequest ? o.finishRequest(J, t) : J.end();
}
function U(t, e) {
    t._readyState = N.CLOSING, t._errorEmitted = !0, t.emit("error", e), t.emitClose();
}
function Q(t) {
    return t.path = t.socketPath, o.connect(t);
}
function M(t) {
    return t.path = void 0, t.servername || "" === t.servername || (t.servername = o.isIP(t.host) ? "" : t.host), a.connect(t);
}
function O(t, e, r) {
    t._readyState = N.CLOSING;
    const n = new Error(r);
    Error.captureStackTrace(n, O), e.setHeader ? (e[R] = !0, e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), process.nextTick(U, t, n)) : (e.destroy(n), e.once("error", t.emit.bind(t, "error")), e.once("close", t.emitClose.bind(t)));
}
function F(t, e, r) {
    if (e) {
        const r = g(e) ? e.size : q(e).length;
        t._socket ? t._sender._bufferedBytes += r : t._bufferedAmount += r;
    }
    if (r) {
        const e = new Error(`WebSocket is not open: readyState ${t.readyState} (${T[t.readyState]})`);
        process.nextTick(r, e);
    }
}
function L(t, e) {
    const r = this[E];
    r._closeFrameReceived = !0, r._closeMessage = e, r._closeCode = t, void 0 !== r._socket[E] && (r._socket.removeListener("data", Z), process.nextTick(W, r._socket), 1005 === t ? r.close() : r.close(t, e));
}
function $() {
    const t = this[E];
    t.isPaused || t._socket.resume();
}
function G(t) {
    const e = this[E];
    void 0 !== e._socket[E] && (e._socket.removeListener("data", Z), process.nextTick(W, e._socket), e.close(t[B])), e._errorEmitted || (e._errorEmitted = !0, e.emit("error", t));
}
function H() {
    this[E].emitClose();
}
function K(t, e) {
    this[E].emit("message", t, e);
}
function V(t) {
    const e = this[E];
    e._autoPong && e.pong(t, !this._isServer, I), e.emit("ping", t);
}
function z(t) {
    this[E].emit("pong", t);
}
function W(t) {
    t.resume();
}
function Y(t) {
    const e = this[E];
    e.readyState !== N.CLOSED && (e.readyState === N.OPEN && (e._readyState = N.CLOSING, j(e)), this._socket.end(), e._errorEmitted || (e._errorEmitted = !0, e.emit("error", t)));
}
function j(t) {
    t._closeTimer = setTimeout(t._socket.destroy.bind(t._socket), t._closeTimeout);
}
function X() {
    const t = this[E];
    if (this.removeListener("close", X), this.removeListener("data", Z), this.removeListener("end", tt), t._readyState = N.CLOSING, !this._readableState.endEmitted && !t._closeFrameReceived && !t._receiver._writableState.errorEmitted && 0 !== this._readableState.length) {
        const e = this.read(this._readableState.length);
        t._receiver.write(e);
    }
    t._receiver.end(), this[E] = void 0, clearTimeout(t._closeTimer), t._receiver._writableState.finished || t._receiver._writableState.errorEmitted ? t.emitClose() : (t._receiver.on("error", H), t._receiver.on("finish", H));
}
function Z(t) {
    this[E]._receiver.write(t) || this.pause();
}
function tt() {
    const t = this[E];
    t._readyState = N.CLOSING, t._receiver.end(), this.end();
}
function et() {
    const t = this[E];
    this.removeListener("error", et), this.on("error", I), t && (t._readyState = N.CLOSING, this.destroy());
}
Object.defineProperty(N, "CONNECTING", {
    enumerable: !0,
    value: T.indexOf("CONNECTING")
}), Object.defineProperty(N.prototype, "CONNECTING", {
    enumerable: !0,
    value: T.indexOf("CONNECTING")
}), Object.defineProperty(N, "OPEN", {
    enumerable: !0,
    value: T.indexOf("OPEN")
}), Object.defineProperty(N.prototype, "OPEN", {
    enumerable: !0,
    value: T.indexOf("OPEN")
}), Object.defineProperty(N, "CLOSING", {
    enumerable: !0,
    value: T.indexOf("CLOSING")
}), Object.defineProperty(N.prototype, "CLOSING", {
    enumerable: !0,
    value: T.indexOf("CLOSING")
}), Object.defineProperty(N, "CLOSED", {
    enumerable: !0,
    value: T.indexOf("CLOSED")
}), Object.defineProperty(N.prototype, "CLOSED", {
    enumerable: !0,
    value: T.indexOf("CLOSED")
}), [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url"
].forEach((t)=>{
    Object.defineProperty(N.prototype, t, {
        enumerable: !0
    });
}), [
    "open",
    "error",
    "close",
    "message"
].forEach((t)=>{
    Object.defineProperty(N.prototype, `on${t}`, {
        enumerable: !0,
        get () {
            for (const e of this.listeners(t))if (e[S]) return e[J];
            return null;
        },
        set (e) {
            for (const e of this.listeners(t))if (e[S]) {
                this.removeListener(t, e);
                break;
            }
            "function" == typeof e && this.addEventListener(t, e, {
                [S]: !0
            });
        }
    });
}), N.prototype.addEventListener = C, N.prototype.removeEventListener = b, module.exports = N;
