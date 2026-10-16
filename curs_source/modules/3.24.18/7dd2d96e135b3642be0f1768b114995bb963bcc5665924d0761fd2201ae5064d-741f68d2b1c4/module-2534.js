const a = require("./module-2613.js"), { kRetryHandlerDefaultRetry: s } = require("./module-8832.js"), { RequestRetryError: o } = require("./module-7902.js"), { isDisturbed: r, parseHeaders: i, parseRangeHeader: A } = require("./module-9361.js");
class c {
    constructor(e, n){
        const { retryOptions: t, ...a } = e, { retry: o, maxRetries: r, maxTimeout: i, minTimeout: A, timeoutFactor: l, methods: d, errorCodes: m, retryAfter: u, statusCodes: g } = t ?? {};
        this.dispatch = n.dispatch, this.handler = n.handler, this.opts = a, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? c[s],
            retryAfter: u ?? !0,
            maxTimeout: i ?? 3e4,
            timeout: A ?? 500,
            timeoutFactor: l ?? 2,
            maxRetries: r ?? 5,
            methods: d ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: g ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: m ?? [
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
    onUpgrade(e, n, t) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, n, t);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [s](e, { state: n, opts: t }, a) {
        const { statusCode: s, code: o, headers: r } = e, { method: i, retryOptions: A } = t, { maxRetries: c, timeout: l, maxTimeout: d, timeoutFactor: m, statusCodes: u, errorCodes: g, methods: p } = A;
        let { counter: E, currentTimeout: h } = n;
        if (h = null != h && h > 0 ? h : l, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !g.includes(o)) return void a(e);
        if (Array.isArray(p) && !p.includes(i)) return void a(e);
        if (null != s && Array.isArray(u) && !u.includes(s)) return void a(e);
        if (E > c) return void a(e);
        let T = null != r && r["retry-after"];
        T && (T = Number(T), T = isNaN(T) ? function(e) {
            const n = Date.now();
            return new Date(e).getTime() - n;
        }(T) : 1e3 * T);
        const k = T > 0 ? Math.min(T, d) : Math.min(h * m ** E, d);
        n.currentTimeout = k, setTimeout(()=>a(null), k);
    }
    onHeaders(e, n, t, s) {
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
            const { start: s, size: i, end: c = i } = n;
            return a(this.start === s, "content-range mismatch"), a(null == this.end || this.end === c, "content-range mismatch"), this.resume = t, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = A(r["content-range"]);
                if (null == o) return this.handler.onHeaders(e, n, t, s);
                const { start: i, size: c, end: l = c } = o;
                a(null != i && Number.isFinite(i) && this.start !== i, "content-range mismatch"), a(Number.isFinite(i)), a(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = i, this.end = l;
            }
            if (null == this.end) {
                const e = r["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return a(Number.isFinite(this.start)), a(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t, this.etag = null != r.etag ? r.etag : null, this.handler.onHeaders(e, n, t, s);
        }
        const c = new o("Request failed", e, {
            headers: r,
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
module.exports = c;
