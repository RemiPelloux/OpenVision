const n = require("./module-42613.js"), { kRetryHandlerDefaultRetry: s } = require("./module-15532.js"), { RequestRetryError: o } = require("./module-48762.js"), { isDisturbed: i, parseHeaders: a, parseRangeHeader: c } = require("./module-83589.js");
class l {
    constructor(e, t){
        const { retryOptions: r, ...n } = e, { retry: o, maxRetries: i, maxTimeout: a, minTimeout: c, timeoutFactor: u, methods: d, errorCodes: p, retryAfter: m, statusCodes: h } = r ?? {};
        this.dispatch = t.dispatch, this.handler = t.handler, this.opts = n, this.abort = null, this.aborted = !1, this.retryOpts = {
            retry: o ?? l[s],
            retryAfter: m ?? !0,
            maxTimeout: a ?? 3e4,
            timeout: c ?? 500,
            timeoutFactor: u ?? 2,
            maxRetries: i ?? 5,
            methods: d ?? [
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
    onUpgrade(e, t, r) {
        this.handler.onUpgrade && this.handler.onUpgrade(e, t, r);
    }
    onConnect(e) {
        this.aborted ? e(this.reason) : this.abort = e;
    }
    onBodySent(e) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e);
    }
    static [s](e, { state: t, opts: r }, n) {
        const { statusCode: s, code: o, headers: i } = e, { method: a, retryOptions: c } = r, { maxRetries: l, timeout: u, maxTimeout: d, timeoutFactor: p, statusCodes: m, errorCodes: h, methods: f } = c;
        let { counter: g, currentTimeout: y } = t;
        if (y = null != y && y > 0 ? y : u, o && "UND_ERR_REQ_RETRY" !== o && "UND_ERR_SOCKET" !== o && !h.includes(o)) return void n(e);
        if (Array.isArray(f) && !f.includes(a)) return void n(e);
        if (null != s && Array.isArray(m) && !m.includes(s)) return void n(e);
        if (g > l) return void n(e);
        let w = null != i && i["retry-after"];
        w && (w = Number(w), w = isNaN(w) ? function(e) {
            const t = Date.now();
            return new Date(e).getTime() - t;
        }(w) : 1e3 * w);
        const v = w > 0 ? Math.min(w, d) : Math.min(y * p ** g, d);
        t.currentTimeout = v, setTimeout(()=>n(null), v);
    }
    onHeaders(e, t, r, s) {
        const i = a(t);
        if (this.retryCount += 1, e >= 300) return this.abort(new o("Request failed", e, {
            headers: i,
            count: this.retryCount
        })), !1;
        if (null != this.resume) {
            if (this.resume = null, 206 !== e) return !0;
            const t = c(i["content-range"]);
            if (!t) return this.abort(new o("Content-Range mismatch", e, {
                headers: i,
                count: this.retryCount
            })), !1;
            if (null != this.etag && this.etag !== i.etag) return this.abort(new o("ETag mismatch", e, {
                headers: i,
                count: this.retryCount
            })), !1;
            const { start: s, size: a, end: l = a } = t;
            return n(this.start === s, "content-range mismatch"), n(null == this.end || this.end === l, "content-range mismatch"), this.resume = r, !0;
        }
        if (null == this.end) {
            if (206 === e) {
                const o = c(i["content-range"]);
                if (null == o) return this.handler.onHeaders(e, t, r, s);
                const { start: a, size: l, end: u = l } = o;
                n(null != a && Number.isFinite(a) && this.start !== a, "content-range mismatch"), n(Number.isFinite(a)), n(null != u && Number.isFinite(u) && this.end !== u, "invalid content-length"), this.start = a, this.end = u;
            }
            if (null == this.end) {
                const e = i["content-length"];
                this.end = null != e ? Number(e) : null;
            }
            return n(Number.isFinite(this.start)), n(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = r, this.etag = null != i.etag ? i.etag : null, this.handler.onHeaders(e, t, r, s);
        }
        const l = new o("Request failed", e, {
            headers: i,
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
        if (this.aborted || i(this.opts.body)) return this.handler.onError(e);
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
            if (null != e || this.aborted || i(this.opts.body)) return this.handler.onError(e);
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
