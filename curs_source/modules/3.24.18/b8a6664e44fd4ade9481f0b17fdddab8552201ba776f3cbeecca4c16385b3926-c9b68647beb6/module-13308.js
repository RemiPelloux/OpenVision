"use strict";
const { InvalidArgumentError: r, NotSupportedError: s } = require("./module-95521.js"), o = require(42613), { kHTTP2BuildRequest: n, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: E } = require("./module-58832.js"), Q = require("./module-9361.js"), g = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, C = /[^\t\x20-\x7e\x80-\xff]/, B = /[^\u0021-\u00ff]/, a = Symbol("handler"), I = {};
let c;
try {
    const A = require(31637);
    I.create = A.channel("undici:request:create"), I.bodySent = A.channel("undici:request:bodySent"), I.headers = A.channel("undici:request:headers"), I.trailers = A.channel("undici:request:trailers"), I.error = A.channel("undici:request:error");
} catch  {
    I.create = {
        hasSubscribers: !1
    }, I.bodySent = {
        hasSubscribers: !1
    }, I.headers = {
        hasSubscribers: !1
    }, I.trailers = {
        hasSubscribers: !1
    }, I.error = {
        hasSubscribers: !1
    };
}
class h {
    constructor(A, { path: e, method: s, body: o, headers: n, query: i, idempotent: E, blocking: C, upgrade: h, headersTimeout: l, bodyTimeout: d, reset: f, throwOnError: y, expectContinue: D }, R){
        if ("string" != typeof e) throw new r("path must be a string");
        if ("/" !== e[0] && !e.startsWith("http://") && !e.startsWith("https://") && "CONNECT" !== s) throw new r("path must be an absolute URL or start with a slash");
        if (null !== B.exec(e)) throw new r("invalid request path");
        if ("string" != typeof s) throw new r("method must be a string");
        if (null === g.exec(s)) throw new r("invalid request method");
        if (h && "string" != typeof h) throw new r("upgrade must be a string");
        if (null != l && (!Number.isFinite(l) || l < 0)) throw new r("invalid headersTimeout");
        if (null != d && (!Number.isFinite(d) || d < 0)) throw new r("invalid bodyTimeout");
        if (null != f && "boolean" != typeof f) throw new r("invalid reset");
        if (null != D && "boolean" != typeof D) throw new r("invalid expectContinue");
        if (this.headersTimeout = l, this.bodyTimeout = d, this.throwOnError = !0 === y, this.method = s, this.abort = null, null == o) this.body = null;
        else if (Q.isStream(o)) {
            this.body = o;
            const A = this.body._readableState;
            A && A.autoDestroy || (this.endHandler = function() {
                Q.destroy(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (A)=>{
                this.abort ? this.abort(A) : this.error = A;
            }, this.body.on("error", this.errorHandler);
        } else if (Q.isBuffer(o)) this.body = o.byteLength ? o : null;
        else if (ArrayBuffer.isView(o)) this.body = o.buffer.byteLength ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : null;
        else if (o instanceof ArrayBuffer) this.body = o.byteLength ? Buffer.from(o) : null;
        else if ("string" == typeof o) this.body = o.length ? Buffer.from(o) : null;
        else {
            if (!(Q.isFormDataLike(o) || Q.isIterable(o) || Q.isBlobLike(o))) throw new r("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = h || null, this.path = i ? Q.buildURL(e, i) : e, this.origin = A, this.idempotent = E ?? ("HEAD" === s || "GET" === s), this.blocking = C ?? !1, this.reset = f ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != D && D, Array.isArray(n)) {
            if (n.length % 2 != 0) throw new r("headers array must be even");
            for(let A = 0; A < n.length; A += 2)u(this, n[A], n[A + 1]);
        } else if (n && "object" == typeof n) {
            const A = Object.keys(n);
            for(let e = 0; e < A.length; e++){
                const t = A[e];
                u(this, t, n[t]);
            }
        } else if (null != n) throw new r("headers must be an object or an array");
        if (Q.isFormDataLike(this.body)) {
            if (Q.nodeMajor < 16 || 16 === Q.nodeMajor && Q.nodeMinor < 8) throw new r("Form-Data bodies are only supported in node v16.8 and newer.");
            c || (c = require("./module-87052.js").extractBody);
            const [A, e] = c(o);
            null == this.contentType && (this.contentType = e, this.headers += `content-type: ${e}\r\n`), this.body = A.stream, this.contentLength = A.length;
        } else Q.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        Q.validateHandler(R, s, h), this.servername = Q.getServerName(this.host), this[a] = R, I.create.hasSubscribers && I.create.publish({
            request: this
        });
    }
    onBodySent(A) {
        if (this[a].onBodySent) try {
            return this[a].onBodySent(A);
        } catch (A) {
            this.abort(A);
        }
    }
    onRequestSent() {
        if (I.bodySent.hasSubscribers && I.bodySent.publish({
            request: this
        }), this[a].onRequestSent) try {
            return this[a].onRequestSent();
        } catch (A) {
            this.abort(A);
        }
    }
    onConnect(A) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = A, this[a].onConnect(A);
        A(this.error);
    }
    onHeaders(A, e, t, r) {
        o(!this.aborted), o(!this.completed), I.headers.hasSubscribers && I.headers.publish({
            request: this,
            response: {
                statusCode: A,
                headers: e,
                statusText: r
            }
        });
        try {
            return this[a].onHeaders(A, e, t, r);
        } catch (A) {
            this.abort(A);
        }
    }
    onData(A) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[a].onData(A);
        } catch (A) {
            return this.abort(A), !1;
        }
    }
    onUpgrade(A, e, t) {
        return o(!this.aborted), o(!this.completed), this[a].onUpgrade(A, e, t);
    }
    onComplete(A) {
        this.onFinally(), o(!this.aborted), this.completed = !0, I.trailers.hasSubscribers && I.trailers.publish({
            request: this,
            trailers: A
        });
        try {
            return this[a].onComplete(A);
        } catch (A) {
            this.onError(A);
        }
    }
    onError(A) {
        if (this.onFinally(), I.error.hasSubscribers && I.error.publish({
            request: this,
            error: A
        }), !this.aborted) return this.aborted = !0, this[a].onError(A);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(A, e) {
        return u(this, A, e), this;
    }
    static [E](A, e, t) {
        return new h(A, e, t);
    }
    static [n](A, e, t) {
        const s = e.headers;
        e = {
            ...e,
            headers: null
        };
        const o = new h(A, e, t);
        if (o.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new r("headers array must be even");
            for(let A = 0; A < s.length; A += 2)u(o, s[A], s[A + 1], !0);
        } else if (s && "object" == typeof s) {
            const A = Object.keys(s);
            for(let e = 0; e < A.length; e++){
                const t = A[e];
                u(o, t, s[t], !0);
            }
        } else if (null != s) throw new r("headers must be an object or an array");
        return o;
    }
    static [i](A) {
        const e = A.split("\r\n"), t = {};
        for (const A of e){
            const [e, r] = A.split(": ");
            null != r && 0 !== r.length && (t[e] ? t[e] += `,${r}` : t[e] = r);
        }
        return t;
    }
}
function l(A, e, t) {
    if (e && "object" == typeof e) throw new r(`invalid ${A} header`);
    if (e = null != e ? `${e}` : "", null !== C.exec(e)) throw new r(`invalid ${A} header`);
    return t ? e : `${A}: ${e}\r\n`;
}
function u(A, e, t, o = !1) {
    if (t && "object" == typeof t && !Array.isArray(t)) throw new r(`invalid ${e} header`);
    if (void 0 !== t) if (null === A.host && 4 === e.length && "host" === e.toLowerCase()) {
        if (null !== C.exec(t)) throw new r(`invalid ${e} header`);
        A.host = t;
    } else if (null === A.contentLength && 14 === e.length && "content-length" === e.toLowerCase()) {
        if (A.contentLength = parseInt(t, 10), !Number.isFinite(A.contentLength)) throw new r("invalid content-length header");
    } else if (null === A.contentType && 12 === e.length && "content-type" === e.toLowerCase()) A.contentType = t, o ? A.headers[e] = l(e, t, o) : A.headers += l(e, t);
    else {
        if (17 === e.length && "transfer-encoding" === e.toLowerCase()) throw new r("invalid transfer-encoding header");
        if (10 === e.length && "connection" === e.toLowerCase()) {
            const e = "string" == typeof t ? t.toLowerCase() : null;
            if ("close" !== e && "keep-alive" !== e) throw new r("invalid connection header");
            "close" === e && (A.reset = !0);
        } else {
            if (10 === e.length && "keep-alive" === e.toLowerCase()) throw new r("invalid keep-alive header");
            if (7 === e.length && "upgrade" === e.toLowerCase()) throw new r("invalid upgrade header");
            if (6 === e.length && "expect" === e.toLowerCase()) throw new s("expect header not supported");
            if (null === g.exec(e)) throw new r("invalid header key");
            if (Array.isArray(t)) for(let r = 0; r < t.length; r++)o ? A.headers[e] ? A.headers[e] += `,${l(e, t[r], o)}` : A.headers[e] = l(e, t[r], o) : A.headers += l(e, t[r]);
            else o ? A.headers[e] = l(e, t, o) : A.headers += l(e, t);
        }
    }
}
module.exports = h;
