"use strict";
const n = require("./module-4434.js"), s = require("./module-8611.js"), { Duplex: i } = require("./module-2203.js"), { createHash: o } = require("./module-6982.js"), a = require("./module-7592.js"), u = require("./module-1293.js"), c = require("./module-1403.js"), l = require("./module-9038.js"), { CLOSE_TIMEOUT: m, GUID: d, kWebSocket: f } = require("./module-8864.js"), p = /^[+/0-9A-Za-z]{22}==$/;
function h(t) {
    t._state = 2, t.emit("close");
}
function g() {
    this.destroy();
}
function A(t, e, r, n) {
    r = r || s.STATUS_CODES[e], n = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(r),
        ...n
    }, t.once("finish", t.destroy), t.end(`HTTP/1.1 ${e} ${s.STATUS_CODES[e]}\r\n` + Object.keys(n).map((t)=>`${t}: ${n[t]}`).join("\r\n") + "\r\n\r\n" + r);
}
function _(t, e, r, n, s, i) {
    if (t.listenerCount("wsClientError")) {
        const n = new Error(s);
        Error.captureStackTrace(n, _), t.emit("wsClientError", n, r, e);
    } else A(r, n, s, i);
}
module.exports = class extends n {
    constructor(t, e){
        if (super(), null == (t = {
            allowSynchronousEvents: !0,
            autoPong: !0,
            maxBufferedChunks: 262144,
            maxFragments: 16384,
            maxPayload: 104857600,
            skipUTF8Validation: !1,
            perMessageDeflate: !1,
            handleProtocols: null,
            clientTracking: !0,
            closeTimeout: m,
            verifyClient: null,
            noServer: !1,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket: l,
            ...t
        }).port && !t.server && !t.noServer || null != t.port && (t.server || t.noServer) || t.server && t.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (null != t.port ? (this._server = s.createServer((t, e)=>{
            const r = s.STATUS_CODES[426];
            e.writeHead(426, {
                "Content-Length": r.length,
                "Content-Type": "text/plain"
            }), e.end(r);
        }), this._server.listen(t.port, t.host, t.backlog, e)) : t.server && (this._server = t.server), this._server) {
            const t = this.emit.bind(this, "connection");
            this._removeListeners = function(t, e) {
                for (const r of Object.keys(e))t.on(r, e[r]);
                return function() {
                    for (const r of Object.keys(e))t.removeListener(r, e[r]);
                };
            }(this._server, {
                listening: this.emit.bind(this, "listening"),
                error: this.emit.bind(this, "error"),
                upgrade: (e, r, n)=>{
                    this.handleUpgrade(e, r, n, t);
                }
            });
        }
        !0 === t.perMessageDeflate && (t.perMessageDeflate = {}), t.clientTracking && (this.clients = new Set, this._shouldEmitClose = !1), this.options = t, this._state = 0;
    }
    address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
    }
    close(t) {
        if (2 === this._state) return t && this.once("close", ()=>{
            t(new Error("The server is not running"));
        }), void process.nextTick(h, this);
        if (t && this.once("close", t), 1 !== this._state) if (this._state = 1, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients && this.clients.size ? this._shouldEmitClose = !0 : process.nextTick(h, this);
        else {
            const t = this._server;
            this._removeListeners(), this._removeListeners = this._server = null, t.close(()=>{
                h(this);
            });
        }
    }
    shouldHandle(t) {
        if (this.options.path) {
            const e = t.url.indexOf("?");
            if ((-1 !== e ? t.url.slice(0, e) : t.url) !== this.options.path) return !1;
        }
        return !0;
    }
    handleUpgrade(t, e, r, n) {
        e.on("error", g);
        const s = t.headers["sec-websocket-key"], i = t.headers.upgrade, o = +t.headers["sec-websocket-version"];
        if ("GET" !== t.method) {
            return void _(this, t, e, 405, "Invalid HTTP method");
        }
        if (void 0 === i || "websocket" !== i.toLowerCase()) {
            return void _(this, t, e, 400, "Invalid Upgrade header");
        }
        if (void 0 === s || !p.test(s)) {
            return void _(this, t, e, 400, "Missing or invalid Sec-WebSocket-Key header");
        }
        if (13 !== o && 8 !== o) {
            return void _(this, t, e, 400, "Missing or invalid Sec-WebSocket-Version header", {
                "Sec-WebSocket-Version": "13, 8"
            });
        }
        if (!this.shouldHandle(t)) return void A(e, 400);
        const l = t.headers["sec-websocket-protocol"];
        let m = new Set;
        if (void 0 !== l) try {
            m = c.parse(l);
        } catch (r) {
            return void _(this, t, e, 400, "Invalid Sec-WebSocket-Protocol header");
        }
        const d = t.headers["sec-websocket-extensions"], f = {};
        if (this.options.perMessageDeflate && void 0 !== d) {
            const r = new u({
                ...this.options.perMessageDeflate,
                isServer: !0,
                maxPayload: this.options.maxPayload
            });
            try {
                const t = a.parse(d);
                t[u.extensionName] && (r.accept(t[u.extensionName]), f[u.extensionName] = r);
            } catch (r) {
                return void _(this, t, e, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
            }
        }
        if (this.options.verifyClient) {
            const i = {
                origin: t.headers["" + (8 === o ? "sec-websocket-origin" : "origin")],
                secure: !(!t.socket.authorized && !t.socket.encrypted),
                req: t
            };
            if (2 === this.options.verifyClient.length) return void this.options.verifyClient(i, (i, o, a, u)=>{
                if (!i) return A(e, o || 401, a, u);
                this.completeUpgrade(f, s, m, t, e, r, n);
            });
            if (!this.options.verifyClient(i)) return A(e, 401);
        }
        this.completeUpgrade(f, s, m, t, e, r, n);
    }
    completeUpgrade(t, e, r, n, s, i, c) {
        if (!s.readable || !s.writable) return s.destroy();
        if (s[f]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        if (this._state > 0) return A(s, 503);
        const l = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${o("sha1").update(e + d).digest("base64")}`
        ], m = new this.options.WebSocket(null, void 0, this.options);
        if (r.size) {
            const t = this.options.handleProtocols ? this.options.handleProtocols(r, n) : r.values().next().value;
            t && (l.push(`Sec-WebSocket-Protocol: ${t}`), m._protocol = t);
        }
        if (t[u.extensionName]) {
            const e = t[u.extensionName].params, r = a.format({
                [u.extensionName]: [
                    e
                ]
            });
            l.push(`Sec-WebSocket-Extensions: ${r}`), m._extensions = t;
        }
        this.emit("headers", l, n), s.write(l.concat("\r\n").join("\r\n")), s.removeListener("error", g), m.setSocket(s, i, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxBufferedChunks: this.options.maxBufferedChunks,
            maxFragments: this.options.maxFragments,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation
        }), this.clients && (this.clients.add(m), m.on("close", ()=>{
            this.clients.delete(m), this._shouldEmitClose && !this.clients.size && process.nextTick(h, this);
        })), c(m, n);
    }
};
