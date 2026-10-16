const n = require("./module-2613.js"), { kRetryHandlerDefaultRetry: r } = require("./module-8832.js"), { RequestRetryError: o } = require("./module-7902.js"), { isDisturbed: s, parseHeaders: a, parseRangeHeader: i } = require("./module-9361.js");
class c {
    constructor(e, A){
        const { retryOptions: t, ...n } = e, { retry: o, maxRetries: s, maxTimeout: a, minTimeout: i, timeoutFactor: l, methods: g, errorCodes: E, retryAfter: u, statusCodes: d } = t ?? {};
        this.dispatch = A.dispatch, this.handler = A.handler, this.opts = n, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? c[r],
            retryAfter: u ?? !0,
            maxTimeout: a ?? 3e4,
            timeout: i ?? 500,
            timeoutFactor: l ?? 2,
            maxRetries: s ?? 5,
            methods: g ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: d ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: E ?? [
                "ECONNRESET",
                "ECONNREFUSED",
                "ENOTFOUND",
                "ENETDOWN",
                "ENETUNREACH",
                "EHOSTDOWN",
                "EHOSTUNREACH",
                "EPIPE"
            ]
        }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e)=>{
            this.aborted = !0, this.abort ? this.abort(e) : this.reason = e;
        });
    }
    onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
    }
    onUpgrade(e, A, t) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, A, t);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [r](e, { state: A, opts: t }, n) {
        const { statusCode: r, code: o, headers: s } = e, { method: a, retryOptions: i } = t, { maxRetries: c, timeout: l, maxTimeout: g, timeoutFactor: E, statusCodes: u, errorCodes: d, methods: I } = i;
        let { counter: h, currentTimeout: Q } = A;
        if (Q = null != Q && Q > 0 ? Q : l, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !d.includes(o)) return void n(e);
        if (Array.isArray(I) && !I.includes(a)) return void n(e);
        if (null != r && Array.isArray(u) && !u.includes(r)) return void n(e);
        if (h > c) return void n(e);
        let m = null != s && s["retry-after"];
        m && (m = Number(m), m = isNaN(m) ? function(e) {
            const A = Date.now();
            return new Date(e).getTime() - A;
        }(m) : 1e3 * m);
        const C = m > 0 ? Math.min(m, g) : Math.min(Q * E ** h, g);
        A.currentTimeout = C, setTimeout(()=>n(null), C);
    }
    onHeaders(e, A, t, r) {
        const s = a(A);
        if (this.retryCount += 1, e >= 300) return this.abort(new o("Request failed", e, {
            headers: s,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== e) return !0;
            const A = i(s["content-range"]);
            if (!A) return this.abort(new o("Content-Range mismatch", e, {
                headers: s,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== s.etag) return this.abort(new o("ETag mismatch", e, {
                headers: s,
                count: this.retryCount
            })), !1;
            const { start: r, size: a, end: c = a } = A;
            return n(this.start === r, "content-range mismatch"), n(null == this.end || this.end === c, "content-range mismatch"), this.resume = t, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = i(s["content-range"]);
                if (null == o) return this.handler.onHeaders(e, A, t, r);
                const { start: a, size: c, end: l = c } = o;
                n(null != a && Number.isFinite(a) && this.start !== a, "content-range mismatch"), n(Number.isFinite(a)), n(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = a, this.end = l;
            }
            if (null == this.end) {
                const e = s["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return n(Number.isFinite(this.start)), n(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t, this.etag = null != s.etag ? s.etag : null, this.handler.onHeaders(e, A, t, r);
        }
        const c = new o("Request failed", e, {
            headers: s,
            count: this.retryCount
        });
        return this.abort(c), !1;
    }
    onData(e) {
        return this.start += e.length, this.handler.onData(e);
    }
    onComplete(e) {
        return this.retryCount = 0, this.handler.onComplete(e);
    }
    onError(e) {
        if (this.aborted || s(this.opts.body)) return this.handler.onError(e);
        this.retryOpts.retry(e, {
            state: {
                counter: this.retryCount++,
                currentTimeout: this.retryAfter
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, (function(e) {
            if (null != e || this.aborted || s(this.opts.body)) return this.handler.onError(e);
            0 !== this.start && (this.opts = {
                ...this.opts,
                headers: {
                    ...this.opts.headers,
                    range: `bytes=${this.start}-${this.end ?? ""}`
                }
            });
            try {
                this.dispatch(this.opts, this);
            } catch (e) {
                this.handler.onError(e);
            }
        }).bind(this));
    }
}
module.exports = c;
