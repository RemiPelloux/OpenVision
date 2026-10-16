"use strict";
const n = require("./module-24434.js"), s = require("./module-58611.js"), { Duplex: o } = require("./module-2203.js"), { createHash: i } = require("./module-76982.js"), a = require("./module-67592.js"), c = require("./module-31293.js"), l = require("./module-41403.js"), u = require("./module-49038.js"), { CLOSE_TIMEOUT: d, GUID: p, kWebSocket: m } = require("./module-78864.js"), h = /^[+/0-9A-Za-z]{22}==$/;
function f(e) {
    e._state = 2, e.emit("close");
}
function g() {
    this.destroy();
}
function y(e, t, r, n) {
    r = r || s.STATUS_CODES[t], n = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(r),
        ...n
    }, e.once("finish", e.destroy), e.end(`HTTP/1.1 ${t} ${s.STATUS_CODES[t]}\r\n` + Object.keys(n).map((e)=>`${e}: ${n[e]}`).join("\r\n") + "\r\n\r\n" + r);
}
function w(e, t, r, n, s, o) {
    if (e.listenerCount("wsClientError")) {
        const n = new Error(s);
        Error.captureStackTrace(n, w), e.emit("wsClientError", n, r, t);
    } else y(r, n, s, o);
}
module.exports = class extends n {
    constructor(e, t){
        if (super(), null == (e = {
            allowSynchronousEvents: !0,
            autoPong: !0,
            maxBufferedChunks: 262144,
            maxFragments: 16384,
            maxPayload: 104857600,
            skipUTF8Validation: !1,
            perMessageDeflate: !1,
            handleProtocols: null,
            clientTracking: !0,
            closeTimeout: d,
            verifyClient: null,
            noServer: !1,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket: u,
            ...e
        }).port && !e.server && !e.noServer || null != e.port && (e.server || e.noServer) || e.server && e.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (null != e.port ? (this._server = s.createServer((e, t)=>{
            const r = s.STATUS_CODES[426];
            t.writeHead(426, {
                "Content-Length": r.length,
                "Content-Type": "text/plain"
            }), t.end(r);
        }), this._server.listen(e.port, e.host, e.backlog, t)) : e.server && (this._server = e.server), this._server) {
            const e = this.emit.bind(this, "connection");
            this._removeListeners = function(e, t) {
                for (const r of Object.keys(t))e.on(r, t[r]);
                return function() {
                    for (const r of Object.keys(t))e.removeListener(r, t[r]);
                };
            }(this._server, {
                listening: this.emit.bind(this, "listening"),
                error: this.emit.bind(this, "error"),
                upgrade: (t, r, n)=>{
                    this.handleUpgrade(t, r, n, e);
                }
            });
        }
        !0 === e.perMessageDeflate && (e.perMessageDeflate = {}), e.clientTracking && (this.clients = new Set, this._shouldEmitClose = !1), this.options = e, this._state = 0;
    }
    address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
    }
    close(e) {
        if (2 === this._state) return e && this.once("close", ()=>{
            e(new Error("The server is not running"));
        }), void process.nextTick(f, this);
        if (e && this.once("close", e), 1 !== this._state) if (this._state = 1, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients && this.clients.size ? this._shouldEmitClose = !0 : process.nextTick(f, this);
        else {
            const e = this._server;
            this._removeListeners(), this._removeListeners = this._server = null, e.close(()=>{
                f(this);
            });
        }
    }
    shouldHandle(e) {
        if (this.options.path) {
            const t = e.url.indexOf("?");
            if ((-1 !== t ? e.url.slice(0, t) : e.url) !== this.options.path) return !1;
        }
        return !0;
    }
    handleUpgrade(e, t, r, n) {
        t.on("error", g);
        const s = e.headers["sec-websocket-key"], o = e.headers.upgrade, i = +e.headers["sec-websocket-version"];
        if ("GET" !== e.method) {
            return void w(this, e, t, 405, "Invalid HTTP method");
        }
        if (void 0 === o || "websocket" !== o.toLowerCase()) {
            return void w(this, e, t, 400, "Invalid Upgrade header");
        }
        if (void 0 === s || !h.test(s)) {
            return void w(this, e, t, 400, "Missing or invalid Sec-WebSocket-Key header");
        }
        if (13 !== i && 8 !== i) {
            return void w(this, e, t, 400, "Missing or invalid Sec-WebSocket-Version header", {
                "Sec-WebSocket-Version": "13, 8"
            });
        }
        if (!this.shouldHandle(e)) return void y(t, 400);
        const u = e.headers["sec-websocket-protocol"];
        let d = new Set;
        if (void 0 !== u) try {
            d = l.parse(u);
        } catch (r) {
            return void w(this, e, t, 400, "Invalid Sec-WebSocket-Protocol header");
        }
        const p = e.headers["sec-websocket-extensions"], m = {};
        if (this.options.perMessageDeflate && void 0 !== p) {
            const r = new c({
                ...this.options.perMessageDeflate,
                isServer: !0,
                maxPayload: this.options.maxPayload
            });
            try {
                const e = a.parse(p);
                e[c.extensionName] && (r.accept(e[c.extensionName]), m[c.extensionName] = r);
            } catch (r) {
                return void w(this, e, t, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
            }
        }
        if (this.options.verifyClient) {
            const o = {
                origin: e.headers["" + (8 === i ? "sec-websocket-origin" : "origin")],
                secure: !(!e.socket.authorized && !e.socket.encrypted),
                req: e
            };
            if (2 === this.options.verifyClient.length) return void this.options.verifyClient(o, (o, i, a, c)=>{
                if (!o) return y(t, i || 401, a, c);
                this.completeUpgrade(m, s, d, e, t, r, n);
            });
            if (!this.options.verifyClient(o)) return y(t, 401);
        }
        this.completeUpgrade(m, s, d, e, t, r, n);
    }
    completeUpgrade(e, t, r, n, s, o, l) {
        if (!s.readable || !s.writable) return s.destroy();
        if (s[m]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        if (this._state > 0) return y(s, 503);
        const u = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${i("sha1").update(t + p).digest("base64")}`
        ], d = new this.options.WebSocket(null, void 0, this.options);
        if (r.size) {
            const e = this.options.handleProtocols ? this.options.handleProtocols(r, n) : r.values().next().value;
            e && (u.push(`Sec-WebSocket-Protocol: ${e}`), d._protocol = e);
        }
        if (e[c.extensionName]) {
            const t = e[c.extensionName].params, r = a.format({
                [c.extensionName]: [
                    t
                ]
            });
            u.push(`Sec-WebSocket-Extensions: ${r}`), d._extensions = e;
        }
        this.emit("headers", u, n), s.write(u.concat("\r\n").join("\r\n")), s.removeListener("error", g), d.setSocket(s, o, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxBufferedChunks: this.options.maxBufferedChunks,
            maxFragments: this.options.maxFragments,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation
        }), this.clients && (this.clients.add(d), d.on("close", ()=>{
            this.clients.delete(d), this._shouldEmitClose && !this.clients.size && process.nextTick(f, this);
        })), l(d, n);
    }
};
