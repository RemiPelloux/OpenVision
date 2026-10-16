"use strict";
const { InvalidArgumentError: t, NotSupportedError: s } = require("./module-7902.js"), o = require("./module-2613.js"), { kHTTP2BuildRequest: r, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: l } = require("./module-8832.js"), d = require("./module-9361.js"), m = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, c = /[^\t\x20-\x7e\x80-\xff]/, p = /[^\u0021-\u00ff]/, A = Symbol("handler"), u = {};
let g;
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
class T {
    constructor(e, { path: a, method: s, body: o, headers: r, query: i, idempotent: l, blocking: c, upgrade: T, headersTimeout: h, bodyTimeout: _, reset: E, throwOnError: f, expectContinue: C }, I){
        if ("string" != typeof a) throw new t("path must be a string");
        if ("/" !== a[0] && !a.startsWith("http://") && !a.startsWith("https://") && "CONNECT" !== s) throw new t("path must be an absolute URL or start with a slash");
        if (null !== p.exec(a)) throw new t("invalid request path");
        if ("string" != typeof s) throw new t("method must be a string");
        if (null === m.exec(s)) throw new t("invalid request method");
        if (T && "string" != typeof T) throw new t("upgrade must be a string");
        if (null != h && (!Number.isFinite(h) || h < 0)) throw new t("invalid headersTimeout");
        if (null != _ && (!Number.isFinite(_) || _ < 0)) throw new t("invalid bodyTimeout");
        if (null != E && "boolean" != typeof E) throw new t("invalid reset");
        if (null != C && "boolean" != typeof C) throw new t("invalid expectContinue");
        if (this.headersTimeout = h, this.bodyTimeout = _, this.throwOnError = !0 === f, this.method = s, this.abort = null, null == o) this.body = null;
        else if (d.isStream(o)) {
            this.body = o;
            const e = this.body._readableState;
            e && e.autoDestroy || (this.endHandler = function() {
                d.destroy(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (e)=>{
                this.abort ? this.abort(e) : this.error = e;
            }, this.body.on("error", this.errorHandler);
        } else if (d.isBuffer(o)) this.body = o.byteLength ? o : null;
        else if (ArrayBuffer.isView(o)) this.body = o.buffer.byteLength ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : null;
        else if (o instanceof ArrayBuffer) this.body = o.byteLength ? Buffer.from(o) : null;
        else if ("string" == typeof o) this.body = o.length ? Buffer.from(o) : null;
        else {
            if (!(d.isFormDataLike(o) || d.isIterable(o) || d.isBlobLike(o))) throw new t("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = T || null, this.path = i ? d.buildURL(a, i) : a, this.origin = e, this.idempotent = l ?? ("HEAD" === s || "GET" === s), this.blocking = c ?? !1, this.reset = E ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != C && C, Array.isArray(r)) {
            if (r.length % 2 != 0) throw new t("headers array must be even");
            for(let e = 0; e < r.length; e += 2)k(this, r[e], r[e + 1]);
        } else if (r && "object" == typeof r) {
            const e = Object.keys(r);
            for(let a = 0; a < e.length; a++){
                const n = e[a];
                k(this, n, r[n]);
            }
        } else if (null != r) throw new t("headers must be an object or an array");
        if (d.isFormDataLike(this.body)) {
            if (d.nodeMajor < 16 || 16 === d.nodeMajor && d.nodeMinor < 8) throw new t("Form-Data bodies are only supported in node v16.8 and newer.");
            g || (g = require("./module-7052.js").extractBody);
            const [e, a] = g(o);
            null == this.contentType && (this.contentType = a, this.headers += `content-type: ${a}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else d.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        d.validateHandler(I, s, T), this.servername = d.getServerName(this.host), this[A] = I, u.create.hasSubscribers && u.create.publish({
            request: this
        });
    }
    onBodySent(e) {
        if (this[A].onBodySent) try {
            return this[A].onBodySent(e);
        } catch (e) {
            this.abort(e);
        }
    }
    onRequestSent() {
        if (u.bodySent.hasSubscribers && u.bodySent.publish({
            request: this
        }), this[A].onRequestSent) try {
            return this[A].onRequestSent();
        } catch (e) {
            this.abort(e);
        }
    }
    onConnect(e) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e, this[A].onConnect(e);
        e(this.error);
    }
    onHeaders(e, a, n, t) {
        o(!this.aborted), o(!this.completed), u.headers.hasSubscribers && u.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: a,
                statusText: t
            }
        });
        try {
            return this[A].onHeaders(e, a, n, t);
        } catch (e) {
            this.abort(e);
        }
    }
    onData(e) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[A].onData(e);
        } catch (e) {
            return this.abort(e), !1;
        }
    }
    onUpgrade(e, a, n) {
        return o(!this.aborted), o(!this.completed), this[A].onUpgrade(e, a, n);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, u.trailers.hasSubscribers && u.trailers.publish({
            request: this,
            trailers: e
        });
        try {
            return this[A].onComplete(e);
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        if (this.onFinally(), u.error.hasSubscribers && u.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[A].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, a) {
        return k(this, e, a), this;
    }
    static [l](e, a, n) {
        return new T(e, a, n);
    }
    static [r](e, a, n) {
        const s = a.headers;
        a = {
            ...a,
            headers: null
        };
        const o = new T(e, a, n);
        if (o.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new t("headers array must be even");
            for(let e = 0; e < s.length; e += 2)k(o, s[e], s[e + 1], !0);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let a = 0; a < e.length; a++){
                const n = e[a];
                k(o, n, s[n], !0);
            }
        } else if (null != s) throw new t("headers must be an object or an array");
        return o;
    }
    static [i](e) {
        const a = e.split("\r\n"), n = {};
        for (const e of a){
            const [a, t] = e.split(": ");
            null != t && 0 !== t.length && (n[a] ? n[a] += `,${t}` : n[a] = t);
        }
        return n;
    }
}
function h(e, a, n) {
    if (a && "object" == typeof a) throw new t(`invalid ${e} header`);
    if (a = null != a ? `${a}` : "", null !== c.exec(a)) throw new t(`invalid ${e} header`);
    return n ? a : `${e}: ${a}\r\n`;
}
function k(e, a, n, o = !1) {
    if (n && "object" == typeof n && !Array.isArray(n)) throw new t(`invalid ${a} header`);
    if (void 0 !== n) if (null === e.host && 4 === a.length && "host" === a.toLowerCase()) {
        if (null !== c.exec(n)) throw new t(`invalid ${a} header`);
        e.host = n;
    } else if (null === e.contentLength && 14 === a.length && "content-length" === a.toLowerCase()) {
        if (e.contentLength = parseInt(n, 10), !Number.isFinite(e.contentLength)) throw new t("invalid content-length header");
    } else if (null === e.contentType && 12 === a.length && "content-type" === a.toLowerCase()) e.contentType = n, o ? e.headers[a] = h(a, n, o) : e.headers += h(a, n);
    else {
        if (17 === a.length && "transfer-encoding" === a.toLowerCase()) throw new t("invalid transfer-encoding header");
        if (10 === a.length && "connection" === a.toLowerCase()) {
            const a = "string" == typeof n ? n.toLowerCase() : null;
            if ("close" !== a && "keep-alive" !== a) throw new t("invalid connection header");
            "close" === a && (e.reset = !0);
        } else {
            if (10 === a.length && "keep-alive" === a.toLowerCase()) throw new t("invalid keep-alive header");
            if (7 === a.length && "upgrade" === a.toLowerCase()) throw new t("invalid upgrade header");
            if (6 === a.length && "expect" === a.toLowerCase()) throw new s("expect header not supported");
            if (null === m.exec(a)) throw new t("invalid header key");
            if (Array.isArray(n)) for(let t = 0; t < n.length; t++)o ? e.headers[a] ? e.headers[a] += `,${h(a, n[t], o)}` : e.headers[a] = h(a, n[t], o) : e.headers += h(a, n[t]);
            else o ? e.headers[a] = h(a, n, o) : e.headers += h(a, n);
        }
    }
}
module.exports = T;
