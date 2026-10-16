"use strict";
const r = require(56970), { kRetryHandlerDefaultRetry: s } = require("./module-76992.js"), { RequestRetryError: o } = require("./module-38238.js"), { isDisturbed: n, parseHeaders: i, parseRangeHeader: a, wrapRequestBody: Q } = require("./module-55201.js");
function g(A, e, t, r) {
    const s = A["content-length"];
    if (null == s) return null;
    if (!Number.isFinite(e.start) || !Number.isFinite(e.end)) return null;
    const n = Number(s), i = e.end - e.start + 1;
    return Number.isFinite(n) && n === i ? null : new o("Content-Length mismatch", t, {
        headers: A,
        data: {
            count: r
        }
    });
}
class E {
    constructor(A, e){
        const { retryOptions: t, ...r } = A, { retry: o, maxRetries: n, maxTimeout: i, minTimeout: a, timeoutFactor: g, methods: B, errorCodes: c, retryAfter: I, statusCodes: C } = t ?? {};
        this.dispatch = e.dispatch, this.handler = e.handler, this.opts = {
            ...r,
            body: Q(A.body)
        }, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? E[s],
            retryAfter: I ?? !0,
            maxTimeout: i ?? 3e4,
            minTimeout: a ?? 500,
            timeoutFactor: g ?? 2,
            maxRetries: n ?? 5,
            methods: B ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: C ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: c ?? [
                "ECONNRESET",
                "ECONNREFUSED",
                "ENOTFOUND",
                "ENETDOWN",
                "ENETUNREACH",
                "EHOSTDOWN",
                "EHOSTUNREACH",
                "EPIPE",
                "UND_ERR_SOCKET"
            ]
        }, this.retryCount = 0, this.retryCountCheckpoint = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((A)=>{
            this.aborted = !0, this.abort ? this.abort(A) : this.reason = A;
        });
    }
    onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
    }
    onUpgrade(A, e, t) {
        this.handler.onUpgrade && this.handler.onUpgrade(A, e, t);
    }
    onConnect(A) {
        this.aborted ? A(this.reason) : this.abort = A;
    }
    onBodySent(A) {
        if (this.handler.onBodySent) return this.handler.onBodySent(A);
    }
    static [s](A, { state: e, opts: t }, r) {
        const { statusCode: s, code: o, headers: n } = A, { method: i, retryOptions: a } = t, { maxRetries: Q, minTimeout: g, maxTimeout: E, timeoutFactor: B, statusCodes: c, errorCodes: I, methods: C } = a, { counter: h } = e;
        if (o && "UND_ERR_REQ_RETRY" !== o && !I.includes(o)) return void r(A);
        if (Array.isArray(C) && !C.includes(i)) return void r(A);
        if (null != s && Array.isArray(c) && !c.includes(s)) return void r(A);
        if (h > Q) return void r(A);
        let l = n?.["retry-after"];
        l && (l = Number(l), l = Number.isNaN(l) ? function(A) {
            const e = Date.now();
            return new Date(A).getTime() - e;
        }(l) : 1e3 * l);
        const u = l > 0 ? Math.min(l, E) : Math.min(g * B ** (h - 1), E);
        setTimeout(()=>r(null), u);
    }
    onHeaders(A, e, t, s) {
        const n = i(e);
        if (this.retryCount += 1, A >= 300) return !1 === this.retryOpts.statusCodes.includes(A) ? this.handler.onHeaders(A, e, t, s) : (this.abort(new o("Request failed", A, {
            headers: n,
            data: {
                count: this.retryCount
            }
        })), !1);
        if (null != this.resume) {
            if (this.resume = null, 206 !== A && (this.start > 0 || 200 !== A)) return this.abort(new o("server does not support the range header and the payload was partially consumed", A, {
                headers: n,
                data: {
                    count: this.retryCount
                }
            })), !1;
            const e = a(n["content-range"]);
            if (!e) return this.abort(new o("Content-Range mismatch", A, {
                headers: n,
                data: {
                    count: this.retryCount
                }
            })), !1;
            if (null != this.etag && this.etag !== n.etag) return this.abort(new o("ETag mismatch", A, {
                headers: n,
                data: {
                    count: this.retryCount
                }
            })), !1;
            const s = g(n, e, A, this.retryCount);
            if (null != s) return this.abort(s), !1;
            const { start: i, size: Q, end: E = Q - 1 } = e;
            return r(this.start === i, "content-range mismatch"), r(null == this.end || this.end === E, "content-range mismatch"), this.resume = t, !0;
        }
        if (null == this.end) {
            if (206 === A) {
                const o = a(n["content-range"]);
                if (null == o) return this.handler.onHeaders(A, e, t, s);
                const i = g(n, o, A, this.retryCount);
                if (null != i) return this.abort(i), !1;
                const { start: Q, size: E, end: B = E - 1 } = o;
                r(null != Q && Number.isFinite(Q), "content-range mismatch"), r(null != B && Number.isFinite(B), "invalid content-length"), this.start = Q, this.end = B;
            }
            if (null == this.end) {
                const A = n["content-length"];
                this.end = null != A ? Number(A) - 1 : null;
            }
            return r(Number.isFinite(this.start)), r(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t, this.etag = null != n.etag ? n.etag : null, null != this.etag && this.etag.startsWith("W/") && (this.etag = null), this.handler.onHeaders(A, e, t, s);
        }
        const Q = new o("Request failed", A, {
            headers: n,
            data: {
                count: this.retryCount
            }
        });
        return this.abort(Q), !1;
    }
    onData(A) {
        return this.start += A.length, this.handler.onData(A);
    }
    onComplete(A) {
        return this.retryCount = 0, this.handler.onComplete(A);
    }
    onError(A) {
        if (this.aborted || n(this.opts.body)) return this.handler.onError(A);
        this.retryCount - this.retryCountCheckpoint > 0 ? this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint) : this.retryCount += 1, this.retryOpts.retry(A, {
            state: {
                counter: this.retryCount
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, (function(A) {
            if (null != A || this.aborted || n(this.opts.body)) return this.handler.onError(A);
            if (0 !== this.start) {
                const A = {
                    range: `bytes=${this.start}-${this.end ?? ""}`
                };
                null != this.etag && (A["if-match"] = this.etag), this.opts = {
                    ...this.opts,
                    headers: {
                        ...this.opts.headers,
                        ...A
                    }
                };
            }
            try {
                this.retryCountCheckpoint = this.retryCount, this.dispatch(this.opts, this);
            } catch (A) {
                this.handler.onError(A);
            }
        }).bind(this));
    }
}
module.exports = E;
