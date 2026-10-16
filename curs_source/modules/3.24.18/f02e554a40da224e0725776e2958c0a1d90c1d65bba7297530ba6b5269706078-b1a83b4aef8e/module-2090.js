const n = require("./module-2613.js"), { kRetryHandlerDefaultRetry: s } = require("./module-5532.js"), { RequestRetryError: i } = require("./module-8762.js"), { isDisturbed: o, parseHeaders: a, parseRangeHeader: u } = require("./module-3589.js");
class c {
    constructor(t, e){
        const { retryOptions: r, ...n } = t, { retry: i, maxRetries: o, maxTimeout: a, minTimeout: u, timeoutFactor: l, methods: m, errorCodes: d, retryAfter: f, statusCodes: p } = r ?? {};
        this.dispatch = e.dispatch, this.handler = e.handler, this.opts = n, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: i ?? c[s],
            retryAfter: f ?? !0,
            maxTimeout: a ?? 3e4,
            timeout: u ?? 500,
            timeoutFactor: l ?? 2,
            maxRetries: o ?? 5,
            methods: m ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: p ?? [
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
        }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((t)=>{
            this.aborted = !0, this.abort ? this.abort(t) : this.reason = t;
        });
    }
    onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
    }
    onUpgrade(t, e, r) {
        this.handler.onUpgrade && this.handler.onUpgrade(t, e, r);
    }
    onConnect(t) {
        this.aborted ? t(this.reason) : this.abort = t;
    }
    onBodySent(t) {
        if (this.handler.onBodySent) return this.handler.onBodySent(t);
    }
    static [s](t, { state: e, opts: r }, n) {
        const { statusCode: s, code: i, headers: o } = t, { method: a, retryOptions: u } = r, { maxRetries: c, timeout: l, maxTimeout: m, timeoutFactor: d, statusCodes: f, errorCodes: p, methods: h } = u;
        let { counter: g, currentTimeout: A } = e;
        if (A = null != A && A > 0 ? A : l, i && "UND_ERR_REQ_RETRY" !== i && "UND_ERR_SOCKET" !== i && !p.includes(i)) return void n(t);
        if (Array.isArray(h) && !h.includes(a)) return void n(t);
        if (null != s && Array.isArray(f) && !f.includes(s)) return void n(t);
        if (g > c) return void n(t);
        let _ = null != o && o["retry-after"];
        _ && (_ = Number(_), _ = isNaN(_) ? function(t) {
            const e = Date.now();
            return new Date(t).getTime() - e;
        }(_) : 1e3 * _);
        const y = _ > 0 ? Math.min(_, m) : Math.min(A * d ** g, m);
        e.currentTimeout = y, setTimeout(()=>n(null), y);
    }
    onHeaders(t, e, r, s) {
        const o = a(e);
        if (this.retryCount += 1, t >= 300) return this.abort(new i("Request failed", t, {
            headers: o,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== t) return !0;
            const e = u(o["content-range"]);
            if (!e) return this.abort(new i("Content-Range mismatch", t, {
                headers: o,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== o.etag) return this.abort(new i("ETag mismatch", t, {
                headers: o,
                count: this.retryCount
            })), !1;
            const { start: s, size: a, end: c = a } = e;
            return n(this.start === s, "content-range mismatch"), n(null == this.end || this.end === c, "content-range mismatch"), this.resume = r, !0;
        }
        if (null == this.end) {
            if (206 === t) {
                const i = u(o["content-range"]);
                if (null == i) return this.handler.onHeaders(t, e, r, s);
                const { start: a, size: c, end: l = c } = i;
                n(null != a && Number.isFinite(a) && this.start !== a, "content-range mismatch"), n(Number.isFinite(a)), n(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = a, this.end = l;
            }
            if (null == this.end) {
                const t = o["content-length"];
                this.end = null != t ? Number(t) : null;
            }
            return n(Number.isFinite(this.start)), n(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = r, this.etag = null != o.etag ? o.etag : null, this.handler.onHeaders(t, e, r, s);
        }
        const c = new i("Request failed", t, {
            headers: o,
            count: this.retryCount
        });
        return this.abort(c), !1;
    }
    onData(t) {
        return this.start += t.length, this.handler.onData(t);
    }
    onComplete(t) {
        return this.retryCount = 0, this.handler.onComplete(t);
    }
    onError(t) {
        if (this.aborted || o(this.opts.body)) return this.handler.onError(t);
        this.retryOpts.retry(t, {
            state: {
                counter: this.retryCount++,
                currentTimeout: this.retryAfter
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, (function(t) {
            if (null != t || this.aborted || o(this.opts.body)) return this.handler.onError(t);
            0 !== this.start && (this.opts = {
                ...this.opts,
                headers: {
                    ...this.opts.headers,
                    range: `bytes=${this.start}-${this.end ?? ""}`
                }
            });
            try {
                this.dispatch(this.opts, this);
            } catch (t) {
                this.handler.onError(t);
            }
        }).bind(this));
    }
}
module.exports = c;
