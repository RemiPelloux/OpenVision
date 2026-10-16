const t = require("./module-2613.js"), { kRetryHandlerDefaultRetry: s } = require("./module-8832.js"), { RequestRetryError: o } = require("./module-7902.js"), { isDisturbed: r, parseHeaders: i, parseRangeHeader: l } = require("./module-9361.js");
class d {
    constructor(e, a){
        const { retryOptions: n, ...t } = e, { retry: o, maxRetries: r, maxTimeout: i, minTimeout: l, timeoutFactor: m, methods: c, errorCodes: p, retryAfter: A, statusCodes: u } = n ?? {};
        this.dispatch = a.dispatch, this.handler = a.handler, this.opts = t, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? d[s],
            retryAfter: A ?? !0,
            maxTimeout: i ?? 3e4,
            timeout: l ?? 500,
            timeoutFactor: m ?? 2,
            maxRetries: r ?? 5,
            methods: c ?? [
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
            errorCodes: p ?? [
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
    onUpgrade(e, a, n) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, a, n);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [s](e, { state: a, opts: n }, t) {
        const { statusCode: s, code: o, headers: r } = e, { method: i, retryOptions: l } = n, { maxRetries: d, timeout: m, maxTimeout: c, timeoutFactor: p, statusCodes: A, errorCodes: u, methods: g } = l;
        let { counter: T, currentTimeout: h } = a;
        if (h = null != h && h > 0 ? h : m, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !u.includes(o)) return void t(e);
        if (Array.isArray(g) && !g.includes(i)) return void t(e);
        if (null != s && Array.isArray(A) && !A.includes(s)) return void t(e);
        if (T > d) return void t(e);
        let k = null != r && r["retry-after"];
        k && (k = Number(k), k = isNaN(k) ? function(e) {
            const a = Date.now();
            return new Date(e).getTime() - a;
        }(k) : 1e3 * k);
        const _ = k > 0 ? Math.min(k, c) : Math.min(h * p ** T, c);
        a.currentTimeout = _, setTimeout(()=>t(null), _);
    }
    onHeaders(e, a, n, s) {
        const r = i(a);
        if (this.retryCount += 1, e >= 300) return this.abort(new o("Request failed", e, {
            headers: r,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== e) return !0;
            const a = l(r["content-range"]);
            if (!a) return this.abort(new o("Content-Range mismatch", e, {
                headers: r,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== r.etag) return this.abort(new o("ETag mismatch", e, {
                headers: r,
                count: this.retryCount
            })), !1;
            const { start: s, size: i, end: d = i } = a;
            return t(this.start === s, "content-range mismatch"), t(null == this.end || this.end === d, "content-range mismatch"), this.resume = n, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = l(r["content-range"]);
                if (null == o) return this.handler.onHeaders(e, a, n, s);
                const { start: i, size: d, end: m = d } = o;
                t(null != i && Number.isFinite(i) && this.start !== i, "content-range mismatch"), t(Number.isFinite(i)), t(null != m && Number.isFinite(m) && this.end !== m, "invalid content-length"), this.start = i, this.end = m;
            }
            if (null == this.end) {
                const e = r["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return t(Number.isFinite(this.start)), t(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = n, this.etag = null != r.etag ? r.etag : null, this.handler.onHeaders(e, a, n, s);
        }
        const d = new o("Request failed", e, {
            headers: r,
            count: this.retryCount
        });
        return this.abort(d), !1;
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
module.exports = d;
