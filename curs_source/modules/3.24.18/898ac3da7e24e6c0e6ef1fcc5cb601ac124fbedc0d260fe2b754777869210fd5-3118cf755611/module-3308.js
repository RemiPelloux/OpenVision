"use strict";
const { InvalidArgumentError: t, NotSupportedError: s } = require("./module-7902.js"), o = require("./module-2613.js"), { kHTTP2BuildRequest: r, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: A } = require("./module-8832.js"), l = require("./module-9361.js"), c = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, m = /[^\t\x20-\x7e\x80-\xff]/, d = /[^\u0021-\u00ff]/, g = Symbol("handler"), u = {};
let E;
try {
    const e = require("./module-1637.js");
    u.create = e.channel("undici:request:create"), u.bodySent = e.channel("undici:request:bodySent"), u.headers = e.channel("undici:request:headers"), u.trailers = e.channel("undici:request:trailers"), u.error = e.channel("undici:request:error");
} catch  {
    u.create = {
        hasSubscribers: !1
    }, u.bodySent = {
        hasSubscribers: !1
    }, u.headers = {
        hasSubscribers: !1
    }, u.trailers = {
        hasSubscribers: !1
    }, u.error = {
        hasSubscribers: !1
    };
}
class p {
    constructor(e, { path: n, method: s, body: o, headers: r, query: i, idempotent: A, blocking: m, upgrade: p, headersTimeout: T, bodyTimeout: I, reset: h, throwOnError: _, expectContinue: C }, f){
        if ("string" != typeof n) throw new t("path must be a string");
        if ("/" !== n[0] && !n.startsWith("http://") && !n.startsWith("https://") && "CONNECT" !== s) throw new t("path must be an absolute URL or start with a slash");
        if (null !== d.exec(n)) throw new t("invalid request path");
        if ("string" != typeof s) throw new t("method must be a string");
        if (null === c.exec(s)) throw new t("invalid request method");
        if (p && "string" != typeof p) throw new t("upgrade must be a string");
        if (null != T && (!Number.isFinite(T) || T < 0)) throw new t("invalid headersTimeout");
        if (null != I && (!Number.isFinite(I) || I < 0)) throw new t("invalid bodyTimeout");
        if (null != h && "boolean" != typeof h) throw new t("invalid reset");
        if (null != C && "boolean" != typeof C) throw new t("invalid expectContinue");
        if (this.headersTimeout = T, this.bodyTimeout = I, this.throwOnError = !0 === _, this.method = s, this.abort = null, null == o) this.body = null;
        else if (l.isStream(o)) {
            this.body = o;
            const e = this.body._readableState;
            e && e.autoDestroy || (this.endHandler = function() {
                l.destroy(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (e)=>{
                this.abort ? this.abort(e) : this.error = e;
            }, this.body.on("error", this.errorHandler);
        } else if (l.isBuffer(o)) this.body = o.byteLength ? o : null;
        else if (ArrayBuffer.isView(o)) this.body = o.buffer.byteLength ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : null;
        else if (o instanceof ArrayBuffer) this.body = o.byteLength ? Buffer.from(o) : null;
        else if ("string" == typeof o) this.body = o.length ? Buffer.from(o) : null;
        else {
            if (!(l.isFormDataLike(o) || l.isIterable(o) || l.isBlobLike(o))) throw new t("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = p || null, this.path = i ? l.buildURL(n, i) : n, this.origin = e, this.idempotent = A ?? ("HEAD" === s || "GET" === s), this.blocking = m ?? !1, this.reset = h ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != C && C, Array.isArray(r)) {
            if (r.length % 2 != 0) throw new t("headers array must be even");
            for(let e = 0; e < r.length; e += 2)k(this, r[e], r[e + 1]);
        } else if (r && "object" == typeof r) {
            const e = Object.keys(r);
            for(let n = 0; n < e.length; n++){
                const a = e[n];
                k(this, a, r[a]);
            }
        } else if (null != r) throw new t("headers must be an object or an array");
        if (l.isFormDataLike(this.body)) {
            if (l.nodeMajor < 16 || 16 === l.nodeMajor && l.nodeMinor < 8) throw new t("Form-Data bodies are only supported in node v16.8 and newer.");
            E || (E = require("./module-7052.js").extractBody);
            const [e, n] = E(o);
            null == this.contentType && (this.contentType = n, this.headers += `content-type: ${n}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else l.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        l.validateHandler(f, s, p), this.servername = l.getServerName(this.host), this[g] = f, u.create.hasSubscribers && u.create.publish({
            request: this
        });
    }
    onBodySent(e) {
        if (this[g].onBodySent) try {
            return this[g].onBodySent(e);
        } catch (e) {
            this.abort(e);
        }
    }
    onRequestSent() {
        if (u.bodySent.hasSubscribers && u.bodySent.publish({
            request: this
        }), this[g].onRequestSent) try {
            return this[g].onRequestSent();
        } catch (e) {
            this.abort(e);
        }
    }
    onConnect(e) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e, this[g].onConnect(e);
        e(this.error);
    }
    onHeaders(e, n, a, t) {
        o(!this.aborted), o(!this.completed), u.headers.hasSubscribers && u.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: n,
                statusText: t
            }
        });
        try {
            return this[g].onHeaders(e, n, a, t);
        } catch (e) {
            this.abort(e);
        }
    }
    onData(e) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[g].onData(e);
        } catch (e) {
            return this.abort(e), !1;
        }
    }
    onUpgrade(e, n, a) {
        return o(!this.aborted), o(!this.completed), this[g].onUpgrade(e, n, a);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, u.trailers.hasSubscribers && u.trailers.publish({
            request: this,
            trailers: e
        });
        try {
            return this[g].onComplete(e);
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        if (this.onFinally(), u.error.hasSubscribers && u.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[g].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, n) {
        return k(this, e, n), this;
    }
    static [A](e, n, a) {
        return new p(e, n, a);
    }
    static [r](e, n, a) {
        const s = n.headers;
        n = {
            ...n,
            headers: null
        };
        const o = new p(e, n, a);
        if (o.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new t("headers array must be even");
            for(let e = 0; e < s.length; e += 2)k(o, s[e], s[e + 1], !0);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let n = 0; n < e.length; n++){
                const a = e[n];
                k(o, a, s[a], !0);
            }
        } else if (null != s) throw new t("headers must be an object or an array");
        return o;
    }
    static [i](e) {
        const n = e.split("\r\n"), a = {};
        for (const e of n){
            const [n, t] = e.split(": ");
            null != t && 0 !== t.length && (a[n] ? a[n] += `,${t}` : a[n] = t);
        }
        return a;
    }
}
function T(e, n, a) {
    if (n && "object" == typeof n) throw new t(`invalid ${e} header`);
    if (n = null != n ? `${n}` : "", null !== m.exec(n)) throw new t(`invalid ${e} header`);
    return a ? n : `${e}: ${n}\r\n`;
}
function k(e, n, a, o = !1) {
    if (a && "object" == typeof a && !Array.isArray(a)) throw new t(`invalid ${n} header`);
    if (void 0 !== a) if (null === e.host && 4 === n.length && "host" === n.toLowerCase()) {
        if (null !== m.exec(a)) throw new t(`invalid ${n} header`);
        e.host = a;
    } else if (null === e.contentLength && 14 === n.length && "content-length" === n.toLowerCase()) {
        if (e.contentLength = parseInt(a, 10), !Number.isFinite(e.contentLength)) throw new t("invalid content-length header");
    } else if (null === e.contentType && 12 === n.length && "content-type" === n.toLowerCase()) e.contentType = a, o ? e.headers[n] = T(n, a, o) : e.headers += T(n, a);
    else {
        if (17 === n.length && "transfer-encoding" === n.toLowerCase()) throw new t("invalid transfer-encoding header");
        if (10 === n.length && "connection" === n.toLowerCase()) {
            const n = "string" == typeof a ? a.toLowerCase() : null;
            if ("close" !== n && "keep-alive" !== n) throw new t("invalid connection header");
            "close" === n && (e.reset = !0);
        } else {
            if (10 === n.length && "keep-alive" === n.toLowerCase()) throw new t("invalid keep-alive header");
            if (7 === n.length && "upgrade" === n.toLowerCase()) throw new t("invalid upgrade header");
            if (6 === n.length && "expect" === n.toLowerCase()) throw new s("expect header not supported");
            if (null === c.exec(n)) throw new t("invalid header key");
            if (Array.isArray(a)) for(let t = 0; t < a.length; t++)o ? e.headers[n] ? e.headers[n] += `,${T(n, a[t], o)}` : e.headers[n] = T(n, a[t], o) : e.headers += T(n, a[t]);
            else o ? e.headers[n] = T(n, a, o) : e.headers += T(n, a);
        }
    }
}
module.exports = p;
