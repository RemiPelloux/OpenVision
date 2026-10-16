"use strict";
const { InvalidArgumentError: n, NotSupportedError: s } = require("./module-48762.js"), o = require("./module-42613.js"), { kHTTP2BuildRequest: i, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: c } = require("./module-15532.js"), l = require("./module-83589.js"), u = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, d = /[^\t\x20-\x7e\x80-\xff]/, p = /[^\u0021-\u00ff]/, m = Symbol("handler"), h = {};
let f;
try {
    const e = require("./module-31637.js");
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
class g {
    constructor(e, { path: t, method: s, body: o, headers: i, query: a, idempotent: c, blocking: d, upgrade: g, headersTimeout: y, bodyTimeout: v, reset: _, throwOnError: A, expectContinue: S }, b){
        if ("string" != typeof t) throw new n("path must be a string");
        if ("/" !== t[0] && !t.startsWith("http://") && !t.startsWith("https://") && "CONNECT" !== s) throw new n("path must be an absolute URL or start with a slash");
        if (null !== p.exec(t)) throw new n("invalid request path");
        if ("string" != typeof s) throw new n("method must be a string");
        if (null === u.exec(s)) throw new n("invalid request method");
        if (g && "string" != typeof g) throw new n("upgrade must be a string");
        if (null != y && (!Number.isFinite(y) || y < 0)) throw new n("invalid headersTimeout");
        if (null != v && (!Number.isFinite(v) || v < 0)) throw new n("invalid bodyTimeout");
        if (null != _ && "boolean" != typeof _) throw new n("invalid reset");
        if (null != S && "boolean" != typeof S) throw new n("invalid expectContinue");
        if (this.headersTimeout = y, this.bodyTimeout = v, this.throwOnError = !0 === A, this.method = s, this.abort = null, null == o) this.body = null;
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
            if (!(l.isFormDataLike(o) || l.isIterable(o) || l.isBlobLike(o))) throw new n("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            this.body = o;
        }
        if (this.completed = !1, this.aborted = !1, this.upgrade = g || null, this.path = a ? l.buildURL(t, a) : t, this.origin = e, this.idempotent = c ?? ("HEAD" === s || "GET" === s), this.blocking = d ?? !1, this.reset = _ ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != S && S, Array.isArray(i)) {
            if (i.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < i.length; e += 2)w(this, i[e], i[e + 1]);
        } else if (i && "object" == typeof i) {
            const e = Object.keys(i);
            for(let t = 0; t < e.length; t++){
                const r = e[t];
                w(this, r, i[r]);
            }
        } else if (null != i) throw new n("headers must be an object or an array");
        if (l.isFormDataLike(this.body)) {
            if (l.nodeMajor < 16 || 16 === l.nodeMajor && l.nodeMinor < 8) throw new n("Form-Data bodies are only supported in node v16.8 and newer.");
            f || (f = require("./module-29608.js").extractBody);
            const [e, t] = f(o);
            null == this.contentType && (this.contentType = t, this.headers += `content-type: ${t}\r\n`), this.body = e.stream, this.contentLength = e.length;
        } else l.isBlobLike(o) && null == this.contentType && o.type && (this.contentType = o.type, this.headers += `content-type: ${o.type}\r\n`);
        l.validateHandler(b, s, g), this.servername = l.getServerName(this.host), this[m] = b, h.create.hasSubscribers && h.create.publish({
            request: this
        });
    }
    onBodySent(e) {
        if (this[m].onBodySent) try {
            return this[m].onBodySent(e);
        } catch (e) {
            this.abort(e);
        }
    }
    onRequestSent() {
        if (h.bodySent.hasSubscribers && h.bodySent.publish({
            request: this
        }), this[m].onRequestSent) try {
            return this[m].onRequestSent();
        } catch (e) {
            this.abort(e);
        }
    }
    onConnect(e) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e, this[m].onConnect(e);
        e(this.error);
    }
    onHeaders(e, t, r, n) {
        o(!this.aborted), o(!this.completed), h.headers.hasSubscribers && h.headers.publish({
            request: this,
            response: {
                statusCode: e,
                headers: t,
                statusText: n
            }
        });
        try {
            return this[m].onHeaders(e, t, r, n);
        } catch (e) {
            this.abort(e);
        }
    }
    onData(e) {
        o(!this.aborted), o(!this.completed);
        try {
            return this[m].onData(e);
        } catch (e) {
            return this.abort(e), !1;
        }
    }
    onUpgrade(e, t, r) {
        return o(!this.aborted), o(!this.completed), this[m].onUpgrade(e, t, r);
    }
    onComplete(e) {
        this.onFinally(), o(!this.aborted), this.completed = !0, h.trailers.hasSubscribers && h.trailers.publish({
            request: this,
            trailers: e
        });
        try {
            return this[m].onComplete(e);
        } catch (e) {
            this.onError(e);
        }
    }
    onError(e) {
        if (this.onFinally(), h.error.hasSubscribers && h.error.publish({
            request: this,
            error: e
        }), !this.aborted) return this.aborted = !0, this[m].onError(e);
    }
    onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(e, t) {
        return w(this, e, t), this;
    }
    static [c](e, t, r) {
        return new g(e, t, r);
    }
    static [i](e, t, r) {
        const s = t.headers;
        t = {
            ...t,
            headers: null
        };
        const o = new g(e, t, r);
        if (o.headers = {}, Array.isArray(s)) {
            if (s.length % 2 != 0) throw new n("headers array must be even");
            for(let e = 0; e < s.length; e += 2)w(o, s[e], s[e + 1], !0);
        } else if (s && "object" == typeof s) {
            const e = Object.keys(s);
            for(let t = 0; t < e.length; t++){
                const r = e[t];
                w(o, r, s[r], !0);
            }
        } else if (null != s) throw new n("headers must be an object or an array");
        return o;
    }
    static [a](e) {
        const t = e.split("\r\n"), r = {};
        for (const e of t){
            const [t, n] = e.split(": ");
            null != n && 0 !== n.length && (r[t] ? r[t] += `,${n}` : r[t] = n);
        }
        return r;
    }
}
function y(e, t, r) {
    if (t && "object" == typeof t) throw new n(`invalid ${e} header`);
    if (t = null != t ? `${t}` : "", null !== d.exec(t)) throw new n(`invalid ${e} header`);
    return r ? t : `${e}: ${t}\r\n`;
}
function w(e, t, r, o = !1) {
    if (r && "object" == typeof r && !Array.isArray(r)) throw new n(`invalid ${t} header`);
    if (void 0 !== r) if (null === e.host && 4 === t.length && "host" === t.toLowerCase()) {
        if (null !== d.exec(r)) throw new n(`invalid ${t} header`);
        e.host = r;
    } else if (null === e.contentLength && 14 === t.length && "content-length" === t.toLowerCase()) {
        if (e.contentLength = parseInt(r, 10), !Number.isFinite(e.contentLength)) throw new n("invalid content-length header");
    } else if (null === e.contentType && 12 === t.length && "content-type" === t.toLowerCase()) e.contentType = r, o ? e.headers[t] = y(t, r, o) : e.headers += y(t, r);
    else {
        if (17 === t.length && "transfer-encoding" === t.toLowerCase()) throw new n("invalid transfer-encoding header");
        if (10 === t.length && "connection" === t.toLowerCase()) {
            const t = "string" == typeof r ? r.toLowerCase() : null;
            if ("close" !== t && "keep-alive" !== t) throw new n("invalid connection header");
            "close" === t && (e.reset = !0);
        } else {
            if (10 === t.length && "keep-alive" === t.toLowerCase()) throw new n("invalid keep-alive header");
            if (7 === t.length && "upgrade" === t.toLowerCase()) throw new n("invalid upgrade header");
            if (6 === t.length && "expect" === t.toLowerCase()) throw new s("expect header not supported");
            if (null === u.exec(t)) throw new n("invalid header key");
            if (Array.isArray(r)) for(let n = 0; n < r.length; n++)o ? e.headers[t] ? e.headers[t] += `,${y(t, r[n], o)}` : e.headers[t] = y(t, r[n], o) : e.headers += y(t, r[n]);
            else o ? e.headers[t] = y(t, r, o) : e.headers += y(t, r);
        }
    }
}
module.exports = g;
