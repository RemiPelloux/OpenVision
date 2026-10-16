const t = require("./module-2613.js"), { kRetryHandlerDefaultRetry: s } = require("./module-8832.js"), { RequestRetryError: o } = require("./module-7902.js"), { isDisturbed: r, parseHeaders: i, parseRangeHeader: A } = require("./module-9361.js");
class l {
    constructor(e, n){
        const { retryOptions: a, ...t } = e, { retry: o, maxRetries: r, maxTimeout: i, minTimeout: A, timeoutFactor: c, methods: m, errorCodes: d, retryAfter: g, statusCodes: u } = a ?? {};
        this.dispatch = n.dispatch, this.handler = n.handler, this.opts = t, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? l[s],
            retryAfter: g ?? !0,
            maxTimeout: i ?? 3e4,
            timeout: A ?? 500,
            timeoutFactor: c ?? 2,
            maxRetries: r ?? 5,
            methods: m ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: u ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: d ?? [
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
    onUpgrade(e, n, a) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, n, a);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [s](e, { state: n, opts: a }, t) {
        const { statusCode: s, code: o, headers: r } = e, { method: i, retryOptions: A } = a, { maxRetries: l, timeout: c, maxTimeout: m, timeoutFactor: d, statusCodes: g, errorCodes: u, methods: E } = A;
        let { counter: p, currentTimeout: T } = n;
        if (T = null != T && T > 0 ? T : c, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !u.includes(o)) return void t(e);
        if (Array.isArray(E) && !E.includes(i)) return void t(e);
        if (null != s && Array.isArray(g) && !g.includes(s)) return void t(e);
        if (p > l) return void t(e);
        let k = null != r && r["retry-after"];
        k && (k = Number(k), k = isNaN(k) ? function(e) {
            const n = Date.now();
            return new Date(e).getTime() - n;
        }(k) : 1e3 * k);
        const I = k > 0 ? Math.min(k, m) : Math.min(T * d ** p, m);
        n.currentTimeout = I, setTimeout(()=>t(null), I);
    }
    onHeaders(e, n, a, s) {
        const r = i(n);
        if (this.retryCount += 1, e >= 300) return this.abort(new o("Request failed", e, {
            headers: r,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== e) return !0;
            const n = A(r["content-range"]);
            if (!n) return this.abort(new o("Content-Range mismatch", e, {
                headers: r,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== r.etag) return this.abort(new o("ETag mismatch", e, {
                headers: r,
                count: this.retryCount
            })), !1;
            const { start: s, size: i, end: l = i } = n;
            return t(this.start === s, "content-range mismatch"), t(null == this.end || this.end === l, "content-range mismatch"), this.resume = a, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = A(r["content-range"]);
                if (null == o) return this.handler.onHeaders(e, n, a, s);
                const { start: i, size: l, end: c = l } = o;
                t(null != i && Number.isFinite(i) && this.start !== i, "content-range mismatch"), t(Number.isFinite(i)), t(null != c && Number.isFinite(c) && this.end !== c, "invalid content-length"), this.start = i, this.end = c;
            }
            if (null == this.end) {
                const e = r["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return t(Number.isFinite(this.start)), t(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = a, this.etag = null != r.etag ? r.etag : null, this.handler.onHeaders(e, n, a, s);
        }
        const l = new o("Request failed", e, {
            headers: r,
            count: this.retryCount
        });
        return this.abort(l), !1;
    }
    onData(e) {
        return this.start += e.length, this.handler.onData(e);
    }
    onComplete(e) {
        return this.retryCount = 0, this.handler.onComplete(e);
    }
    onError(e) {
        if (this.aborted || r(this.opts.body)) return this.handler.onError(e);
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
            if (null != e || this.aborted || r(this.opts.body)) return this.handler.onError(e);
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
module.exports = l;
