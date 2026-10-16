"use strict";
const { InvalidArgumentError: n, NotSupportedError: r } = require("./module-7902.js"), o = require("./module-2613.js"), { kHTTP2BuildRequest: s, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: i } = require("./module-8832.js"), c = require("./module-9361.js"), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, g = /[^\t\x20-\x7e\x80-\xff]/, E = /[^\u0021-\u00ff]/, u = Symbol("handler"), d = {};
let I;
try {
    const e = require("./module-1637.js");
    d.create = e.channel("undici:request:create"), d.bodySent = e.channel("undici:request:bodySent"), d.headers = e.channel("undici:request:headers"), d.trailers = e.channel("undici:request:trailers"), d.error = e.channel("undici:request:error");
} catch  {
    d.create = {
        hasSubscribers: !1
    }, d.bodySent = {
        hasSubscribers: !1
    }, d.headers = {
        hasSubscribers: !1
    }, d.trailers = {
        hasSubscribers: !1
    }, d.error = {
        hasSubscribers: !1
    };
}
class h {
    constructor(e, { path: A, method: r, body: o, headers: s, query: a, idempotent: i, blocking: g, upgrade: h, headersTimeout: Q, bodyTimeout: C, reset: B, throwOnError: p, expectContinue: f }, y){
        if ("string" != typeof A) throw new n("path must be a string");
        if ("/" !== A[0] && !A.startsWith("http://") && !A.startsWith("https://") && "CONNECT" !== r) throw new n("path must be an absolute URL or start with a slash");
        if (null !== E.exec(A)) throw new n("invalid request path");
        if ("string" != typeof r) throw new n("method must be a string");
        if (null === l.exec(r)) throw new n("invalid request method");
        if (h && "string" != typeof h) throw new n("upgrade must be a string");
        if (null != Q && (!Number.isFinite(Q) || Q < 0)) throw new n("invalid headersTimeout");
        if (null != C && (!Number.isFinite(C) || C < 0)) throw new n("invalid bodyTimeout");
        if (null != B && "boolean" != typeof B) throw new n("invalid reset");
        if (null != f && "boolean" != typeof f) throw new n("invalid expectContinue");
        if (this.headersTimeout = Q, this.bodyTimeout = C, this.throwOnError = !0 === p, this.method = r, this.abort = null, null == o) this.body = null;
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
            if (!(c.isFormDataLike(o) || c.isIterable(o) || c.isBlobLike(o))) throw new n("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = h || null, this.path = a ? c.buildURL(A, a) : A, this.origin = e, this.idempotent = i ?? ("HEAD" === r || "GET" === r), this.blocking = g ?? !1, this.reset = B ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != f && f, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < s.length; e += 2)m(this, s[e], s[e + 1]);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let A = 0; A < e.length; A++){
                const t = e[A];
                m(this, t, s[t]);
            }
        } else if (null != s) throw new n("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
            if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n("Form-Data bodies are only supported in node v16.8 and newer.");
            I || (I = require("./module-7052.js").extractBody);
            const [e, A] = I(o);
            null == this.contentType && (this.contentType = A, this.headers += `content-type: ${A}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else c.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        c.validateHandler(y, r, h), this.servername = c.getServerName(this.host), this[u] = y, d.create.hasSubscribers && d.create.publish({
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
        if (d.bodySent.hasSubscribers && d.bodySent.publish({
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
    onHeaders(e, A, t, n) {
        o(!this.aborted), o(!this.completed), d.headers.hasSubscribers && d.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: A,
                statusText: n
            }
        });
        try {
            return this[u].onHeaders(e, A, t, n);
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
    onUpgrade(e, A, t) {
        return o(!this.aborted), o(!this.completed), this[u].onUpgrade(e, A, t);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, d.trailers.hasSubscribers && d.trailers.publish({
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
        if (this.onFinally(), d.error.hasSubscribers && d.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[u].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, A) {
        return m(this, e, A), this;
    }
    static [i](e, A, t) {
        return new h(e, A, t);
    }
    static [s](e, A, t) {
        const r = A.headers;
        A = {
            ...A,
            headers: null
        };
        const o = new h(e, A, t);
        if (o.headers = {}, Array.isArray(r)) {
            if (r.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < r.length; e += 2)m(o, r[e], r[e + 1], !0);
        } else if (r && "object" == typeof r) {
            const e = Object.keys(r);
            for(let A = 0; A < e.length; A++){
                const t = e[A];
                m(o, t, r[t], !0);
            }
        } else if (null != r) throw new n("headers must be an object or an array");
        return o;
    }
    static [a](e) {
        const A = e.split("\r\n"), t = {};
        for (const e of A){
            const [A, n] = e.split(": ");
            null != n && 0 !== n.length && (t[A] ? t[A] += `,${n}` : t[A] = n);
        }
        return t;
    }
}
function Q(e, A, t) {
    if (A && "object" == typeof A) throw new n(`invalid ${e} header`);
    if (A = null != A ? `${A}` : "", null !== g.exec(A)) throw new n(`invalid ${e} header`);
    return t ? A : `${e}: ${A}\r\n`;
}
function m(e, A, t, o = !1) {
    if (t && "object" == typeof t && !Array.isArray(t)) throw new n(`invalid ${A} header`);
    if (void 0 !== t) if (null === e.host && 4 === A.length && "host" === A.toLowerCase()) {
        if (null !== g.exec(t)) throw new n(`invalid ${A} header`);
        e.host = t;
    } else if (null === e.contentLength && 14 === A.length && "content-length" === A.toLowerCase()) {
        if (e.contentLength = parseInt(t, 10), !Number.isFinite(e.contentLength)) throw new n("invalid content-length header");
    } else if (null === e.contentType && 12 === A.length && "content-type" === A.toLowerCase()) e.contentType = t, o ? e.headers[A] = Q(A, t, o) : e.headers += Q(A, t);
    else {
        if (17 === A.length && "transfer-encoding" === A.toLowerCase()) throw new n("invalid transfer-encoding header");
        if (10 === A.length && "connection" === A.toLowerCase()) {
            const A = "string" == typeof t ? t.toLowerCase() : null;
            if ("close" !== A && "keep-alive" !== A) throw new n("invalid connection header");
            "close" === A && (e.reset = !0);
        } else {
            if (10 === A.length && "keep-alive" === A.toLowerCase()) throw new n("invalid keep-alive header");
            if (7 === A.length && "upgrade" === A.toLowerCase()) throw new n("invalid upgrade header");
            if (6 === A.length && "expect" === A.toLowerCase()) throw new r("expect header not supported");
            if (null === l.exec(A)) throw new n("invalid header key");
            if (Array.isArray(t)) for(let n = 0; n < t.length; n++)o ? e.headers[A] ? e.headers[A] += `,${Q(A, t[n], o)}` : e.headers[A] = Q(A, t[n], o) : e.headers += Q(A, t[n]);
            else o ? e.headers[A] = Q(A, t, o) : e.headers += Q(A, t);
        }
    }
}
module.exports = h;
