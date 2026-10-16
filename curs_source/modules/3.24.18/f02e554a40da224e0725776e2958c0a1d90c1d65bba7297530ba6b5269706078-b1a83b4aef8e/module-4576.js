"use strict";
const { InvalidArgumentError: n, NotSupportedError: s } = require("./module-8762.js"), i = require("./module-2613.js"), { kHTTP2BuildRequest: o, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: u } = require("./module-5532.js"), c = require("./module-3589.js"), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, m = /[^\t\x20-\x7e\x80-\xff]/, d = /[^\u0021-\u00ff]/, f = Symbol("handler"), p = {};
let h;
try {
    const t = require("./module-1637.js");
    p.create = t.channel("undici:request:create"), p.bodySent = t.channel("undici:request:bodySent"), p.headers = t.channel("undici:request:headers"), p.trailers = t.channel("undici:request:trailers"), p.error = t.channel("undici:request:error");
} catch  {
    p.create = {
        hasSubscribers: !1
    }, p.bodySent = {
        hasSubscribers: !1
    }, p.headers = {
        hasSubscribers: !1
    }, p.trailers = {
        hasSubscribers: !1
    }, p.error = {
        hasSubscribers: !1
    };
}
class g {
    constructor(t, { path: e, method: s, body: i, headers: o, query: a, idempotent: u, blocking: m, upgrade: g, headersTimeout: A, bodyTimeout: y, reset: w, throwOnError: S, expectContinue: J }, B){
        if ("string" != typeof e) throw new n("path must be a string");
        if ("/" !== e[0] && !e.startsWith("http://") && !e.startsWith("https://") && "CONNECT" !== s) throw new n("path must be an absolute URL or start with a slash");
        if (null !== d.exec(e)) throw new n("invalid request path");
        if ("string" != typeof s) throw new n("method must be a string");
        if (null === l.exec(s)) throw new n("invalid request method");
        if (g && "string" != typeof g) throw new n("upgrade must be a string");
        if (null != A && (!Number.isFinite(A) || A < 0)) throw new n("invalid headersTimeout");
        if (null != y && (!Number.isFinite(y) || y < 0)) throw new n("invalid bodyTimeout");
        if (null != w && "boolean" != typeof w) throw new n("invalid reset");
        if (null != J && "boolean" != typeof J) throw new n("invalid expectContinue");
        if (this.headersTimeout = A, this.bodyTimeout = y, this.throwOnError = !0 === S, this.method = s, this.abort = null, null == i) this.body = null;
        else if (c.isStream(i)) {
            this.body = i;
            const t = this.body._readableState;
            t && t.autoDestroy || (this.endHandler = function() {
                c.destroy(this);
            }, this.body.on("end", this.endHandler)), this.errorHandler = (t)=>{
                this.abort ? this.abort(t) : this.error = t;
            }, this.body.on("error", this.errorHandler);
        } else if (c.isBuffer(i)) this.body = i.byteLength ? i : null;
        else if (ArrayBuffer.isView(i)) this.body = i.buffer.byteLength ? Buffer.from(i.buffer, i.byteOffset, i.byteLength) : null;
        else if (i instanceof ArrayBuffer) this.body = i.byteLength ? Buffer.from(i) : null;
        else if ("string" == typeof i) this.body = i.length ? Buffer.from(i) : null;
        else {
            if (!(c.isFormDataLike(i) || c.isIterable(i) || c.isBlobLike(i))) throw new n("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = i;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = g || null, this.path = a ? c.buildURL(e, a) : e, this.origin = t, this.idempotent = u ?? ("HEAD" === s || "GET" === s), this.blocking = m ?? !1, this.reset = w ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != J && J, Array.isArray(o)) {
            if (o.length % 2 != 0) throw new n("headers array must be even");
            for(let t = 0; t < o.length; t += 2)_(this, o[t], o[t + 1]);
        } else if (o && "object" == typeof o) {
            const t = Object.keys(o);
            for(let e = 0; e < t.length; e++){
                const r = t[e];
                _(this, r, o[r]);
            }
        } else if (null != o) throw new n("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
            if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n("Form-Data bodies are only supported in node v16.8 and newer.");
            h || (h = require("./module-9608.js").extractBody);
            const [t, e] = h(i);
            null == this.contentType && (this.contentType = e, this.headers += `content-type: ${e}\r\n`), this.body = t.stream, this.contentLength = t.length;
        } else c.isBlobLike(i) && null == this.contentType && i.type && (this.contentType = i.type, this.headers += `content-type: ${i.type}\r\n`);
        c.validateHandler(B, s, g), this.servername = c.getServerName(this.host), this[f] = B, p.create.hasSubscribers && p.create.publish({
            request: this
        });
    }
    onBodySent(t) {
        if (this[f].onBodySent) try {
            return this[f].onBodySent(t);
        } catch (t) {
            this.abort(t);
        }
    }
    onRequestSent() {
        if (p.bodySent.hasSubscribers && p.bodySent.publish({
            request: this
        }), this[f].onRequestSent) try {
            return this[f].onRequestSent();
        } catch (t) {
            this.abort(t);
        }
    }
    onConnect(t) {
        if (i(!this.aborted), i(!this.completed), !this.error) return this.abort = t, this[f].onConnect(t);
        t(this.error);
    }
    onHeaders(t, e, r, n) {
        i(!this.aborted), i(!this.completed), p.headers.hasSubscribers && p.headers.publish({
            request: this,
            response: {
                statusCode: t,
                headers: e,
                statusText: n
            }
        });
        try {
            return this[f].onHeaders(t, e, r, n);
        } catch (t) {
            this.abort(t);
        }
    }
    onData(t) {
        i(!this.aborted), i(!this.completed);
        try {
            return this[f].onData(t);
        } catch (t) {
            return this.abort(t), !1;
        }
    }
    onUpgrade(t, e, r) {
        return i(!this.aborted), i(!this.completed), this[f].onUpgrade(t, e, r);
    }
    onComplete(t) {
        this.onFinally(), i(!this.aborted), this.completed = !0, p.trailers.hasSubscribers && p.trailers.publish({
            request: this,
            trailers: t
        });
        try {
            return this[f].onComplete(t);
        } catch (t) {
            this.onError(t);
        }
    }
    onError(t) {
        if (this.onFinally(), p.error.hasSubscribers && p.error.publish({
            request: this,
            error: t
        }), !this.aborted) return this.aborted = !0, this[f].onError(t);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(t, e) {
        return _(this, t, e), this;
    }
    static [u](t, e, r) {
        return new g(t, e, r);
    }
    static [o](t, e, r) {
        const s = e.headers;
        e = {
            ...e,
            headers: null
        };
        const i = new g(t, e, r);
        if (i.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new n("headers array must be even");
            for(let t = 0; t < s.length; t += 2)_(i, s[t], s[t + 1], !0);
        } else if (s && "object" == typeof s) {
            const t = Object.keys(s);
            for(let e = 0; e < t.length; e++){
                const r = t[e];
                _(i, r, s[r], !0);
            }
        } else if (null != s) throw new n("headers must be an object or an array");
        return i;
    }
    static [a](t) {
        const e = t.split("\r\n"), r = {};
        for (const t of e){
            const [e, n] = t.split(": ");
            null != n && 0 !== n.length && (r[e] ? r[e] += `,${n}` : r[e] = n);
        }
        return r;
    }
}
function A(t, e, r) {
    if (e && "object" == typeof e) throw new n(`invalid ${t} header`);
    if (e = null != e ? `${e}` : "", null !== m.exec(e)) throw new n(`invalid ${t} header`);
    return r ? e : `${t}: ${e}\r\n`;
}
function _(t, e, r, i = !1) {
    if (r && "object" == typeof r && !Array.isArray(r)) throw new n(`invalid ${e} header`);
    if (void 0 !== r) if (null === t.host && 4 === e.length && "host" === e.toLowerCase()) {
        if (null !== m.exec(r)) throw new n(`invalid ${e} header`);
        t.host = r;
    } else if (null === t.contentLength && 14 === e.length && "content-length" === e.toLowerCase()) {
        if (t.contentLength = parseInt(r, 10), !Number.isFinite(t.contentLength)) throw new n("invalid content-length header");
    } else if (null === t.contentType && 12 === e.length && "content-type" === e.toLowerCase()) t.contentType = r, i ? t.headers[e] = A(e, r, i) : t.headers += A(e, r);
    else {
        if (17 === e.length && "transfer-encoding" === e.toLowerCase()) throw new n("invalid transfer-encoding header");
        if (10 === e.length && "connection" === e.toLowerCase()) {
            const e = "string" == typeof r ? r.toLowerCase() : null;
            if ("close" !== e && "keep-alive" !== e) throw new n("invalid connection header");
            "close" === e && (t.reset = !0);
        } else {
            if (10 === e.length && "keep-alive" === e.toLowerCase()) throw new n("invalid keep-alive header");
            if (7 === e.length && "upgrade" === e.toLowerCase()) throw new n("invalid upgrade header");
            if (6 === e.length && "expect" === e.toLowerCase()) throw new s("expect header not supported");
            if (null === l.exec(e)) throw new n("invalid header key");
            if (Array.isArray(r)) for(let n = 0; n < r.length; n++)i ? t.headers[e] ? t.headers[e] += `,${A(e, r[n], i)}` : t.headers[e] = A(e, r[n], i) : t.headers += A(e, r[n]);
            else i ? t.headers[e] = A(e, r, i) : t.headers += A(e, r);
        }
    }
}
module.exports = g;
