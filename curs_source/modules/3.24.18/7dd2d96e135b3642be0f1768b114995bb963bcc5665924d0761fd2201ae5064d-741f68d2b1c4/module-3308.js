"use strict";
const { InvalidArgumentError: a, NotSupportedError: s } = require("./module-7902.js"), o = require("./module-2613.js"), { kHTTP2BuildRequest: r, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: A } = require("./module-8832.js"), c = require("./module-9361.js"), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, d = /[^\t\x20-\x7e\x80-\xff]/, m = /[^\u0021-\u00ff]/, u = Symbol("handler"), g = {};
let p;
try {
    const e = require("./module-1637.js");
    g.create = e.channel("undici:request:create"), g.bodySent = e.channel("undici:request:bodySent"), g.headers = e.channel("undici:request:headers"), g.trailers = e.channel("undici:request:trailers"), g.error = e.channel("undici:request:error");
} catch  {
    g.create = {
        hasSubscribers: !1
    }, g.bodySent = {
        hasSubscribers: !1
    }, g.headers = {
        hasSubscribers: !1
    }, g.trailers = {
        hasSubscribers: !1
    }, g.error = {
        hasSubscribers: !1
    };
}
class E {
    constructor(e, { path: n, method: s, body: o, headers: r, query: i, idempotent: A, blocking: d, upgrade: E, headersTimeout: h, bodyTimeout: k, reset: f, throwOnError: _, expectContinue: I }, C){
        if ("string" != typeof n) throw new a("path must be a string");
        if ("/" !== n[0] && !n.startsWith("http://") && !n.startsWith("https://") && "CONNECT" !== s) throw new a("path must be an absolute URL or start with a slash");
        if (null !== m.exec(n)) throw new a("invalid request path");
        if ("string" != typeof s) throw new a("method must be a string");
        if (null === l.exec(s)) throw new a("invalid request method");
        if (E && "string" != typeof E) throw new a("upgrade must be a string");
        if (null != h && (!Number.isFinite(h) || h < 0)) throw new a("invalid headersTimeout");
        if (null != k && (!Number.isFinite(k) || k < 0)) throw new a("invalid bodyTimeout");
        if (null != f && "boolean" != typeof f) throw new a("invalid reset");
        if (null != I && "boolean" != typeof I) throw new a("invalid expectContinue");
        if (this.headersTimeout = h, this.bodyTimeout = k, this.throwOnError = !0 === _, this.method = s, this.abort = null, null == o) this.body = null;
        else if (c.isStream(o)) {
            this.body = o;
            const e = this.body._readableState;
            e && e.autoDestroy || (this.endHandler = function() {
                c.destroy(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (e)=>{
                this.abort ? this.abort(e) : this.error = e;
            }, this.body.on("error", this.errorHandler);
        } else if (c.isBuffer(o)) this.body = o.byteLength ? o : null;
        else if (ArrayBuffer.isView(o)) this.body = o.buffer.byteLength ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : null;
        else if (o instanceof ArrayBuffer) this.body = o.byteLength ? Buffer.from(o) : null;
        else if ("string" == typeof o) this.body = o.length ? Buffer.from(o) : null;
        else {
            if (!(c.isFormDataLike(o) || c.isIterable(o) || c.isBlobLike(o))) throw new a("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = E || null, this.path = i ? c.buildURL(n, i) : n, this.origin = e, this.idempotent = A ?? ("HEAD" === s || "GET" === s), this.blocking = d ?? !1, this.reset = f ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != I && I, Array.isArray(r)) {
            if (r.length % 2 != 0) throw new a("headers array must be even");
            for(let e = 0; e < r.length; e += 2)T(this, r[e], r[e + 1]);
        } else if (r && "object" == typeof r) {
            const e = Object.keys(r);
            for(let n = 0; n < e.length; n++){
                const t = e[n];
                T(this, t, r[t]);
            }
        } else if (null != r) throw new a("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
            if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new a("Form-Data bodies are only supported in node v16.8 and newer.");
            p || (p = require("./module-7052.js").extractBody);
            const [e, n] = p(o);
            null == this.contentType && (this.contentType = n, this.headers += `content-type: ${n}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else c.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        c.validateHandler(C, s, E), this.servername = c.getServerName(this.host), this[u] = C, g.create.hasSubscribers && g.create.publish({
            request: this
        });
    }
    onBodySent(e) {
        if (this[u].onBodySent) try {
            return this[u].onBodySent(e);
        } catch (e) {
            this.abort(e);
        }
    }
    onRequestSent() {
        if (g.bodySent.hasSubscribers && g.bodySent.publish({
            request: this
        }), this[u].onRequestSent) try {
            return this[u].onRequestSent();
        } catch (e) {
            this.abort(e);
        }
    }
    onConnect(e) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e, this[u].onConnect(e);
        e(this.error);
    }
    onHeaders(e, n, t, a) {
        o(!this.aborted), o(!this.completed), g.headers.hasSubscribers && g.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: n,
                statusText: a
            }
        });
        try {
            return this[u].onHeaders(e, n, t, a);
        } catch (e) {
            this.abort(e);
        }
    }
    onData(e) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[u].onData(e);
        } catch (e) {
            return this.abort(e), !1;
        }
    }
    onUpgrade(e, n, t) {
        return o(!this.aborted), o(!this.completed), this[u].onUpgrade(e, n, t);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, g.trailers.hasSubscribers && g.trailers.publish({
            request: this,
            trailers: e
        });
        try {
            return this[u].onComplete(e);
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        if (this.onFinally(), g.error.hasSubscribers && g.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[u].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, n) {
        return T(this, e, n), this;
    }
    static [A](e, n, t) {
        return new E(e, n, t);
    }
    static [r](e, n, t) {
        const s = n.headers;
        n = {
            ...n,
            headers: null
        };
        const o = new E(e, n, t);
        if (o.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new a("headers array must be even");
            for(let e = 0; e < s.length; e += 2)T(o, s[e], s[e + 1], !0);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let n = 0; n < e.length; n++){
                const t = e[n];
                T(o, t, s[t], !0);
            }
        } else if (null != s) throw new a("headers must be an object or an array");
        return o;
    }
    static [i](e) {
        const n = e.split("\r\n"), t = {};
        for (const e of n){
            const [n, a] = e.split(": ");
            null != a && 0 !== a.length && (t[n] ? t[n] += `,${a}` : t[n] = a);
        }
        return t;
    }
}
function h(e, n, t) {
    if (n && "object" == typeof n) throw new a(`invalid ${e} header`);
    if (n = null != n ? `${n}` : "", null !== d.exec(n)) throw new a(`invalid ${e} header`);
    return t ? n : `${e}: ${n}\r\n`;
}
function T(e, n, t, o = !1) {
    if (t && "object" == typeof t && !Array.isArray(t)) throw new a(`invalid ${n} header`);
    if (void 0 !== t) if (null === e.host && 4 === n.length && "host" === n.toLowerCase()) {
        if (null !== d.exec(t)) throw new a(`invalid ${n} header`);
        e.host = t;
    } else if (null === e.contentLength && 14 === n.length && "content-length" === n.toLowerCase()) {
        if (e.contentLength = parseInt(t, 10), !Number.isFinite(e.contentLength)) throw new a("invalid content-length header");
    } else if (null === e.contentType && 12 === n.length && "content-type" === n.toLowerCase()) e.contentType = t, o ? e.headers[n] = h(n, t, o) : e.headers += h(n, t);
    else {
        if (17 === n.length && "transfer-encoding" === n.toLowerCase()) throw new a("invalid transfer-encoding header");
        if (10 === n.length && "connection" === n.toLowerCase()) {
            const n = "string" == typeof t ? t.toLowerCase() : null;
            if ("close" !== n && "keep-alive" !== n) throw new a("invalid connection header");
            "close" === n && (e.reset = !0);
        } else {
            if (10 === n.length && "keep-alive" === n.toLowerCase()) throw new a("invalid keep-alive header");
            if (7 === n.length && "upgrade" === n.toLowerCase()) throw new a("invalid upgrade header");
            if (6 === n.length && "expect" === n.toLowerCase()) throw new s("expect header not supported");
            if (null === l.exec(n)) throw new a("invalid header key");
            if (Array.isArray(t)) for(let a = 0; a < t.length; a++)o ? e.headers[n] ? e.headers[n] += `,${h(n, t[a], o)}` : e.headers[n] = h(n, t[a], o) : e.headers += h(n, t[a]);
            else o ? e.headers[n] = h(n, t, o) : e.headers += h(n, t);
        }
    }
}
module.exports = E;
