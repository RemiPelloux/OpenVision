const n = require("./module-2613.js"), { kRetryHandlerDefaultRetry: r } = require("./module-8832.js"), { RequestRetryError: o } = require("./module-7902.js"), { isDisturbed: s, parseHeaders: i, parseRangeHeader: a } = require("./module-9361.js");
class c {
    constructor(e, t){
        const { retryOptions: A, ...n } = e, { retry: o, maxRetries: s, maxTimeout: i, minTimeout: a, timeoutFactor: l, methods: u, errorCodes: g, retryAfter: E, statusCodes: h } = A ?? {};
        this.dispatch = t.dispatch, this.handler = t.handler, this.opts = n, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? c[r],
            retryAfter: E ?? !0,
            maxTimeout: i ?? 3e4,
            timeout: a ?? 500,
            timeoutFactor: l ?? 2,
            maxRetries: s ?? 5,
            methods: u ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: h ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: g ?? [
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
    onUpgrade(e, t, A) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, t, A);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [r](e, { state: t, opts: A }, n) {
        const { statusCode: r, code: o, headers: s } = e, { method: i, retryOptions: a } = A, { maxRetries: c, timeout: l, maxTimeout: u, timeoutFactor: g, statusCodes: E, errorCodes: h, methods: d } = a;
        let { counter: I, currentTimeout: B } = t;
        if (B = null != B && B > 0 ? B : l, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !h.includes(o)) return void n(e);
        if (Array.isArray(d) && !d.includes(i)) return void n(e);
        if (null != r && Array.isArray(E) && !E.includes(r)) return void n(e);
        if (I > c) return void n(e);
        let Q = null != s && s["retry-after"];
        Q && (Q = Number(Q), Q = isNaN(Q) ? function(e) {
            const t = Date.now();
            return new Date(e).getTime() - t;
        }(Q) : 1e3 * Q);
        const f = Q > 0 ? Math.min(Q, u) : Math.min(B * g ** I, u);
        t.currentTimeout = f, setTimeout(()=>n(null), f);
    }
    onHeaders(e, t, A, r) {
        const s = i(t);
        if (this.retryCount += 1, e >= 300) return this.abort(new o("Request failed", e, {
            headers: s,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== e) return !0;
            const t = a(s["content-range"]);
            if (!t) return this.abort(new o("Content-Range mismatch", e, {
                headers: s,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== s.etag) return this.abort(new o("ETag mismatch", e, {
                headers: s,
                count: this.retryCount
            })), !1;
            const { start: r, size: i, end: c = i } = t;
            return n(this.start === r, "content-range mismatch"), n(null == this.end || this.end === c, "content-range mismatch"), this.resume = A, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = a(s["content-range"]);
                if (null == o) return this.handler.onHeaders(e, t, A, r);
                const { start: i, size: c, end: l = c } = o;
                n(null != i && Number.isFinite(i) && this.start !== i, "content-range mismatch"), n(Number.isFinite(i)), n(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = i, this.end = l;
            }
            if (null == this.end) {
                const e = s["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return n(Number.isFinite(this.start)), n(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = A, this.etag = null != s.etag ? s.etag : null, this.handler.onHeaders(e, t, A, r);
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
