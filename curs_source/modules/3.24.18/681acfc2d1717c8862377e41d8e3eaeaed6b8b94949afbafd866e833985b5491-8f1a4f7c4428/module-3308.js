"use strict";
const { InvalidArgumentError: n, NotSupportedError: r } = require("./module-7902.js"), o = require("./module-2613.js"), { kHTTP2BuildRequest: s, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: a } = require("./module-8832.js"), c = require("./module-9361.js"), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, u = /[^\t\x20-\x7e\x80-\xff]/, g = /[^\u0021-\u00ff]/, E = Symbol("handler"), h = {};
let d;
try {
    const e = require("./module-1637.js");
    h.create = e.channel("undici:request:create"), h.bodySent = e.channel("undici:request:bodySent"), h.headers = e.channel("undici:request:headers"), h.trailers = e.channel("undici:request:trailers"), h.error = e.channel("undici:request:error");
} catch  {
    h.create = {
        hasSubscribers: !1
    }, h.bodySent = {
        hasSubscribers: !1
    }, h.headers = {
        hasSubscribers: !1
    }, h.trailers = {
        hasSubscribers: !1
    }, h.error = {
        hasSubscribers: !1
    };
}
class I {
    constructor(e, { path: t, method: r, body: o, headers: s, query: i, idempotent: a, blocking: u, upgrade: I, headersTimeout: B, bodyTimeout: f, reset: C, throwOnError: p, expectContinue: m }, y){
        if ("string" != typeof t) throw new n("path must be a string");
        if ("/" !== t[0] && !t.startsWith("http://") && !t.startsWith("https://") && "CONNECT" !== r) throw new n("path must be an absolute URL or start with a slash");
        if (null !== g.exec(t)) throw new n("invalid request path");
        if ("string" != typeof r) throw new n("method must be a string");
        if (null === l.exec(r)) throw new n("invalid request method");
        if (I && "string" != typeof I) throw new n("upgrade must be a string");
        if (null != B && (!Number.isFinite(B) || B < 0)) throw new n("invalid headersTimeout");
        if (null != f && (!Number.isFinite(f) || f < 0)) throw new n("invalid bodyTimeout");
        if (null != C && "boolean" != typeof C) throw new n("invalid reset");
        if (null != m && "boolean" != typeof m) throw new n("invalid expectContinue");
        if (this.headersTimeout = B, this.bodyTimeout = f, this.throwOnError = !0 === p, this.method = r, this.abort = null, null == o) this.body = null;
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
        if (this.completed = !1, this.aborted = !1, this.upgrade = I || null, this.path = i ? c.buildURL(t, i) : t, this.origin = e, this.idempotent = a ?? ("HEAD" === r || "GET" === r), this.blocking = u ?? !1, this.reset = C ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != m && m, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < s.length; e += 2)Q(this, s[e], s[e + 1]);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let t = 0; t < e.length; t++){
                const A = e[t];
                Q(this, A, s[A]);
            }
        } else if (null != s) throw new n("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
            if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n("Form-Data bodies are only supported in node v16.8 and newer.");
            d || (d = require("./module-7052.js").extractBody);
            const [e, t] = d(o);
            null == this.contentType && (this.contentType = t, this.headers += `content-type: ${t}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else c.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        c.validateHandler(y, r, I), this.servername = c.getServerName(this.host), this[E] = y, h.create.hasSubscribers && h.create.publish({
            request: this
        });
    }
    onBodySent(e) {
        if (this[E].onBodySent) try {
            return this[E].onBodySent(e);
        } catch (e) {
            this.abort(e);
        }
    }
    onRequestSent() {
        if (h.bodySent.hasSubscribers && h.bodySent.publish({
            request: this
        }), this[E].onRequestSent) try {
            return this[E].onRequestSent();
        } catch (e) {
            this.abort(e);
        }
    }
    onConnect(e) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e, this[E].onConnect(e);
        e(this.error);
    }
    onHeaders(e, t, A, n) {
        o(!this.aborted), o(!this.completed), h.headers.hasSubscribers && h.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: t,
                statusText: n
            }
        });
        try {
            return this[E].onHeaders(e, t, A, n);
        } catch (e) {
            this.abort(e);
        }
    }
    onData(e) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[E].onData(e);
        } catch (e) {
            return this.abort(e), !1;
        }
    }
    onUpgrade(e, t, A) {
        return o(!this.aborted), o(!this.completed), this[E].onUpgrade(e, t, A);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, h.trailers.hasSubscribers && h.trailers.publish({
            request: this,
            trailers: e
        });
        try {
            return this[E].onComplete(e);
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        if (this.onFinally(), h.error.hasSubscribers && h.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[E].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, t) {
        return Q(this, e, t), this;
    }
    static [a](e, t, A) {
        return new I(e, t, A);
    }
    static [s](e, t, A) {
        const r = t.headers;
        t = {
            ...t,
            headers: null
        };
        const o = new I(e, t, A);
        if (o.headers = {}, Array.isArray(r)) {
            if (r.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < r.length; e += 2)Q(o, r[e], r[e + 1], !0);
        } else if (r && "object" == typeof r) {
            const e = Object.keys(r);
            for(let t = 0; t < e.length; t++){
                const A = e[t];
                Q(o, A, r[A], !0);
            }
        } else if (null != r) throw new n("headers must be an object or an array");
        return o;
    }
    static [i](e) {
        const t = e.split("\r\n"), A = {};
        for (const e of t){
            const [t, n] = e.split(": ");
            null != n && 0 !== n.length && (A[t] ? A[t] += `,${n}` : A[t] = n);
        }
        return A;
    }
}
function B(e, t, A) {
    if (t && "object" == typeof t) throw new n(`invalid ${e} header`);
    if (t = null != t ? `${t}` : "", null !== u.exec(t)) throw new n(`invalid ${e} header`);
    return A ? t : `${e}: ${t}\r\n`;
}
function Q(e, t, A, o = !1) {
    if (A && "object" == typeof A && !Array.isArray(A)) throw new n(`invalid ${t} header`);
    if (void 0 !== A) if (null === e.host && 4 === t.length && "host" === t.toLowerCase()) {
        if (null !== u.exec(A)) throw new n(`invalid ${t} header`);
        e.host = A;
    } else if (null === e.contentLength && 14 === t.length && "content-length" === t.toLowerCase()) {
        if (e.contentLength = parseInt(A, 10), !Number.isFinite(e.contentLength)) throw new n("invalid content-length header");
    } else if (null === e.contentType && 12 === t.length && "content-type" === t.toLowerCase()) e.contentType = A, o ? e.headers[t] = B(t, A, o) : e.headers += B(t, A);
    else {
        if (17 === t.length && "transfer-encoding" === t.toLowerCase()) throw new n("invalid transfer-encoding header");
        if (10 === t.length && "connection" === t.toLowerCase()) {
            const t = "string" == typeof A ? A.toLowerCase() : null;
            if ("close" !== t && "keep-alive" !== t) throw new n("invalid connection header");
            "close" === t && (e.reset = !0);
        } else {
            if (10 === t.length && "keep-alive" === t.toLowerCase()) throw new n("invalid keep-alive header");
            if (7 === t.length && "upgrade" === t.toLowerCase()) throw new n("invalid upgrade header");
            if (6 === t.length && "expect" === t.toLowerCase()) throw new r("expect header not supported");
            if (null === l.exec(t)) throw new n("invalid header key");
            if (Array.isArray(A)) for(let n = 0; n < A.length; n++)o ? e.headers[t] ? e.headers[t] += `,${B(t, A[n], o)}` : e.headers[t] = B(t, A[n], o) : e.headers += B(t, A[n]);
            else o ? e.headers[t] = B(t, A, o) : e.headers += B(t, A);
        }
    }
}
module.exports = I;
