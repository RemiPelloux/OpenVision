"use strict";
const { InvalidArgumentError: r, NotSupportedError: s } = require("./module-38238.js"), o = require(56970), { isValidHTTPToken: n, isValidHeaderValue: i, isStream: a, destroy: Q, isBuffer: g, isFormDataLike: E, isIterable: B, isBlobLike: c, buildURL: I, validateHandler: C, getServerName: h, normalizedMethodRecords: l } = require("./module-55201.js"), { channels: u } = require("./module-98565.js"), { headerNameLowerCasedRecord: d } = require("./module-71648.js"), f = /[^\u0021-\u00ff]/, w = Symbol("handler");
function y(A, e, t) {
    if (t && "object" == typeof t && !Array.isArray(t)) throw new r(`invalid ${e} header`);
    if (void 0 === t) return;
    let o = d[e];
    if (void 0 === o && (o = e.toLowerCase(), void 0 === d[o] && !n(o))) throw new r("invalid header key");
    if (Array.isArray(t)) {
        const A = [];
        for(let s = 0; s < t.length; s++)if ("string" == typeof t[s]) {
            if (!i(t[s])) throw new r(`invalid ${e} header`);
            A.push(t[s]);
        } else if (null === t[s]) A.push("");
        else {
            if ("object" == typeof t[s]) throw new r(`invalid ${e} header`);
            {
                const o = `${t[s]}`;
                if (!i(o)) throw new r(`invalid ${e} header`);
                A.push(o);
            }
        }
        t = A;
    } else if ("string" == typeof t) {
        if (!i(t)) throw new r(`invalid ${e} header`);
    } else if (null === t) t = "";
    else if (!i(t = `${t}`)) throw new r(`invalid ${e} header`);
    if ("host" === o) {
        if (null !== A.host) throw new r("duplicate host header");
        if ("string" != typeof t) throw new r("invalid host header");
        A.host = t;
    } else if ("content-length" === o) {
        if (null !== A.contentLength) throw new r("duplicate content-length header");
        if (A.contentLength = parseInt(t, 10), !Number.isFinite(A.contentLength)) throw new r("invalid content-length header");
    } else if (null === A.contentType && "content-type" === o) A.contentType = t, A.headers.push(e, t);
    else {
        if ("transfer-encoding" === o || "keep-alive" === o || "upgrade" === o) throw new r(`invalid ${o} header`);
        if ("connection" === o) {
            const e = "string" == typeof t ? t.toLowerCase() : null;
            if ("close" !== e && "keep-alive" !== e) throw new r("invalid connection header");
            "close" === e && (A.reset = !0);
        } else {
            if ("expect" === o) throw new s("expect header not supported");
            A.headers.push(e, t);
        }
    }
}
module.exports = class {
    constructor(A, { path: e, method: t, body: s, headers: o, query: d, idempotent: D, blocking: p, upgrade: k, headersTimeout: R, bodyTimeout: F, reset: m, throwOnError: b, expectContinue: N, servername: S }, M){
        if ("string" != typeof e) throw new r("path must be a string");
        if ("/" !== e[0] && !e.startsWith("http://") && !e.startsWith("https://") && "CONNECT" !== t) throw new r("path must be an absolute URL or start with a slash");
        if (f.test(e)) throw new r("invalid request path");
        if ("string" != typeof t) throw new r("method must be a string");
        if (void 0 === l[t] && !n(t)) throw new r("invalid request method");
        if (k && "string" != typeof k) throw new r("upgrade must be a string");
        if (k && !i(k)) throw new r("invalid upgrade header");
        if (null != R && (!Number.isFinite(R) || R < 0)) throw new r("invalid headersTimeout");
        if (null != F && (!Number.isFinite(F) || F < 0)) throw new r("invalid bodyTimeout");
        if (null != m && "boolean" != typeof m) throw new r("invalid reset");
        if (null != N && "boolean" != typeof N) throw new r("invalid expectContinue");
        if (this.headersTimeout = R, this.bodyTimeout = F, this.throwOnError = !0 === b, this.method = t, this.abort = null, null == s) this.body = null;
        else if (a(s)) {
            this.body = s;
            const A = this.body._readableState;
            A && A.autoDestroy || (this.endHandler = function() {
                Q(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (A)=>{
                this.abort ? this.abort(A) : this.error = A;
            }, this.body.on("error", this.errorHandler);
        } else if (g(s)) this.body = s.byteLength ? s : null;
        else if (ArrayBuffer.isView(s)) this.body = s.buffer.byteLength ? Buffer.from(s.buffer, s.byteOffset, s.byteLength) : null;
        else if (s instanceof ArrayBuffer) this.body = s.byteLength ? Buffer.from(s) : null;
        else if ("string" == typeof s) this.body = s.length ? Buffer.from(s) : null;
        else {
            if (!(E(s) || B(s) || c(s))) throw new r("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = s;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = k || null, this.path = d ? I(e, d) : e, this.origin = A, this.idempotent = D ?? ("HEAD" === t || "GET" === t), this.blocking = p ?? !1, this.reset = m ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = [], this.expectContinue = null != N && N, Array.isArray(o)) {
            if (o.length % 2 != 0) throw new r("headers array must be even");
            for(let A = 0; A < o.length; A += 2)y(this, o[A], o[A + 1]);
        } else if (o && "object" == typeof o) if (o[Symbol.iterator]) for (const A of o){
            if (!Array.isArray(A) || 2 !== A.length) throw new r("headers must be in key-value pair format");
            y(this, A[0], A[1]);
        }
        else {
            const A = Object.keys(o);
            for(let e = 0; e < A.length; ++e)y(this, A[e], o[A[e]]);
        }
        else if (null != o) throw new r("headers must be an object or an array");
        C(M, t, k), this.servername = S || h(this.host), this[w] = M, u.create.hasSubscribers && u.create.publish({
            request: this
        });
    }
    onBodySent(A) {
        if (this[w].onBodySent) try {
            return this[w].onBodySent(A);
        } catch (A) {
            this.abort(A);
        }
    }
    onRequestSent() {
        if (u.bodySent.hasSubscribers && u.bodySent.publish({
            request: this
        }), this[w].onRequestSent) try {
            return this[w].onRequestSent();
        } catch (A) {
            this.abort(A);
        }
    }
    onConnect(A) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = A, this[w].onConnect(A);
        A(this.error);
    }
    onResponseStarted() {
        return this[w].onResponseStarted?.();
    }
    onHeaders(A, e, t, r) {
        o(!this.aborted), o(!this.completed), u.headers.hasSubscribers && u.headers.publish({
            request: this,
            response: {
                statusCode: A,
                headers: e,
                statusText: r
            }
        });
        try {
            return this[w].onHeaders(A, e, t, r);
        } catch (A) {
            this.abort(A);
        }
    }
    onData(A) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[w].onData(A);
        } catch (A) {
            return this.abort(A), !1;
        }
    }
    onUpgrade(A, e, t) {
        return o(!this.aborted), o(!this.completed), this[w].onUpgrade(A, e, t);
    }
    onComplete(A) {
        this.onFinally(), o(!this.aborted), this.completed = !0, u.trailers.hasSubscribers && u.trailers.publish({
            request: this,
            trailers: A
        });
        try {
            return this[w].onComplete(A);
        } catch (A) {
            this.onError(A);
        }
    }
    onError(A) {
        if (this.onFinally(), u.error.hasSubscribers && u.error.publish({
            request: this,
            error: A
        }), !this.aborted) return this.aborted = !0, this[w].onError(A);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(A, e) {
        return y(this, A, e), this;
    }
};
