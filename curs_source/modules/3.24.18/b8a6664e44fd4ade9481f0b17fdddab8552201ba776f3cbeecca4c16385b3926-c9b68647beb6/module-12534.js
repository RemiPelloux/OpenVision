const r = require(42613), { kRetryHandlerDefaultRetry: s } = require("./module-58832.js"), { RequestRetryError: o } = require("./module-95521.js"), { isDisturbed: n, parseHeaders: i, parseRangeHeader: E } = require("./module-9361.js");
class Q {
    constructor(A, e){
        const { retryOptions: t, ...r } = A, { retry: o, maxRetries: n, maxTimeout: i, minTimeout: E, timeoutFactor: g, methods: C, errorCodes: B, retryAfter: a, statusCodes: I } = t ?? {};
        this.dispatch = e.dispatch, this.handler = e.handler, this.opts = r, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? Q[s],
            retryAfter: a ?? !0,
            maxTimeout: i ?? 3e4,
            timeout: E ?? 500,
            timeoutFactor: g ?? 2,
            maxRetries: n ?? 5,
            methods: C ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: I ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: B ?? [
                "ECONNRESET",
                "ECONNREFUSED",
                "ENOTFOUND",
                "ENETDOWN",
                "ENETUNREACH",
                "EHOSTDOWN",
                "EHOSTUNREACH",
                "EPIPE"
            ]
        }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((A)=>{
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
        const { statusCode: s, code: o, headers: n } = A, { method: i, retryOptions: E } = t, { maxRetries: Q, timeout: g, maxTimeout: C, timeoutFactor: B, statusCodes: a, errorCodes: I, methods: c } = E;
        let { counter: h, currentTimeout: l } = e;
        if (l = null != l && l > 0 ? l : g, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !I.includes(o)) return void r(A);
        if (Array.isArray(c) && !c.includes(i)) return void r(A);
        if (null != s && Array.isArray(a) && !a.includes(s)) return void r(A);
        if (h > Q) return void r(A);
        let u = null != n && n["retry-after"];
        u && (u = Number(u), u = isNaN(u) ? function(A) {
            const e = Date.now();
            return new Date(A).getTime() - e;
        }(u) : 1e3 * u);
        const d = u > 0 ? Math.min(u, C) : Math.min(l * B ** h, C);
        e.currentTimeout = d, setTimeout(()=>r(null), d);
    }
    onHeaders(A, e, t, s) {
        const n = i(e);
        if (this.retryCount += 1, A >= 300) return this.abort(new o("Request failed", A, {
            headers: n,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== A) return !0;
            const e = E(n["content-range"]);
            if (!e) return this.abort(new o("Content-Range mismatch", A, {
                headers: n,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== n.etag) return this.abort(new o("ETag mismatch", A, {
                headers: n,
                count: this.retryCount
            })), !1;
            const { start: s, size: i, end: Q = i } = e;
            return r(this.start === s, "content-range mismatch"), r(null == this.end || this.end === Q, "content-range mismatch"), this.resume = t, !0;
        }
        if (null == this.end) {
            if (206 === A) {
                const o = E(n["content-range"]);
                if (null == o) return this.handler.onHeaders(A, e, t, s);
                const { start: i, size: Q, end: g = Q } = o;
                r(null != i && Number.isFinite(i) && this.start !== i, "content-range mismatch"), r(Number.isFinite(i)), r(null != g && Number.isFinite(g) && this.end !== g, "invalid content-length"), this.start = i, this.end = g;
            }
            if (null == this.end) {
                const A = n["content-length"];
                this.end = null != A ? Number(A) : null;
            }
            return r(Number.isFinite(this.start)), r(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t, this.etag = null != n.etag ? n.etag : null, this.handler.onHeaders(A, e, t, s);
        }
        const Q = new o("Request failed", A, {
            headers: n,
            count: this.retryCount
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
        this.retryOpts.retry(A, {
            state: {
                counter: this.retryCount++,
                currentTimeout: this.retryAfter
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, (function(A) {
            if (null != A || this.aborted || n(this.opts.body)) return this.handler.onError(A);
            0 !== this.start && (this.opts = {
                ...this.opts,
                headers: {
                    ...this.opts.headers,
                    range: `bytes=${this.start}-${this.end ?? ""}`
                }
            });
            try {
                this.dispatch(this.opts, this);
            } catch (A) {
                this.handler.onError(A);
            }
        }).bind(this));
    }
}
module.exports = Q;
