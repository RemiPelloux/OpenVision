import { require_errors } from "../core/errors.js";
import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
var __wakaru_require_RetryHandler_cache;
export function require_RetryHandler() {
if (__wakaru_require_RetryHandler_cache) return __wakaru_require_RetryHandler_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_RetryHandler_cache = module2;
var assert4 = require("assert");
var { kRetryHandlerDefaultRetry } = require_symbols();
var { RequestRetryError } = require_errors();
var { isDisturbed, parseHeaders: parseHeaders2, parseRangeHeader } = require_util();
function calculateRetryAfterHeader(retryAfter) {
    const current = Date.now();
    const diff = new Date(retryAfter).getTime() - current;
    return diff;
}
var RetryHandler = class _RetryHandler {
    constructor(opts, handlers){
        const { retryOptions, ...dispatchOpts } = opts;
        const { retry: retryFn, maxRetries, maxTimeout, minTimeout, timeoutFactor, methods: methods2, errorCodes, retryAfter, statusCodes } = retryOptions ?? {};
        this.dispatch = handlers.dispatch;
        this.handler = handlers.handler;
        this.opts = dispatchOpts;
        this.abort = null;
        this.aborted = false;
        this.retryOpts = {
            retry: retryFn ?? _RetryHandler[kRetryHandlerDefaultRetry],
            retryAfter: retryAfter ?? true,
            maxTimeout: maxTimeout ?? 30 * 1e3,
            timeout: minTimeout ?? 500,
            timeoutFactor: timeoutFactor ?? 2,
            maxRetries: maxRetries ?? 5,
            methods: methods2 ?? [
                "GET",
                "HEAD",
                "OPTIONS",
                "PUT",
                "DELETE",
                "TRACE"
            ],
            statusCodes: statusCodes ?? [
                500,
                502,
                503,
                504,
                429
            ],
            errorCodes: errorCodes ?? [
                "ECONNRESET",
                "ECONNREFUSED",
                "ENOTFOUND",
                "ENETDOWN",
                "ENETUNREACH",
                "EHOSTDOWN",
                "EHOSTUNREACH",
                "EPIPE"
            ]
        };
        this.retryCount = 0;
        this.start = 0;
        this.end = null;
        this.etag = null;
        this.resume = null;
        this.handler.onConnect((reason)=>{
            this.aborted = true;
            if (this.abort) {
                this.abort(reason);
            } else {
                this.reason = reason;
            }
        });
    }
    onRequestSent() {
        if (this.handler.onRequestSent) {
            this.handler.onRequestSent();
        }
    }
    onUpgrade(statusCode, headers, socket) {
        if (this.handler.onUpgrade) {
            this.handler.onUpgrade(statusCode, headers, socket);
        }
    }
    onConnect(abort) {
        if (this.aborted) {
            abort(this.reason);
        } else {
            this.abort = abort;
        }
    }
    onBodySent(chunk) {
        if (this.handler.onBodySent) return this.handler.onBodySent(chunk);
    }
    static [kRetryHandlerDefaultRetry](err, { state, opts }, cb) {
        const { statusCode, code, headers } = err;
        const { method, retryOptions } = opts;
        const { maxRetries, timeout: timeout2, maxTimeout, timeoutFactor, statusCodes, errorCodes, methods: methods2 } = retryOptions;
        let { counter, currentTimeout } = state;
        currentTimeout = currentTimeout != null && currentTimeout > 0 ? currentTimeout : timeout2;
        if (code && code !== "UND_ERR_REQ_RETRY" && code !== "UND_ERR_SOCKET" && !errorCodes.includes(code)) {
            cb(err);
            return;
        }
        if (Array.isArray(methods2) && !methods2.includes(method)) {
            cb(err);
            return;
        }
        if (statusCode != null && Array.isArray(statusCodes) && !statusCodes.includes(statusCode)) {
            cb(err);
            return;
        }
        if (counter > maxRetries) {
            cb(err);
            return;
        }
        let retryAfterHeader = headers != null && headers["retry-after"];
        if (retryAfterHeader) {
            retryAfterHeader = Number(retryAfterHeader);
            retryAfterHeader = isNaN(retryAfterHeader) ? calculateRetryAfterHeader(retryAfterHeader) : retryAfterHeader * 1e3;
        }
        const retryTimeout = retryAfterHeader > 0 ? Math.min(retryAfterHeader, maxTimeout) : Math.min(currentTimeout * timeoutFactor ** counter, maxTimeout);
        state.currentTimeout = retryTimeout;
        setTimeout(()=>cb(null), retryTimeout);
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const headers = parseHeaders2(rawHeaders);
        this.retryCount += 1;
        if (statusCode >= 300) {
            this.abort(new RequestRetryError("Request failed", statusCode, {
                headers,
                count: this.retryCount
            }));
            return false;
        }
        if (this.resume != null) {
            this.resume = null;
            if (statusCode !== 206) {
                return true;
            }
            const contentRange = parseRangeHeader(headers["content-range"]);
            if (!contentRange) {
                this.abort(new RequestRetryError("Content-Range mismatch", statusCode, {
                    headers,
                    count: this.retryCount
                }));
                return false;
            }
            if (this.etag != null && this.etag !== headers.etag) {
                this.abort(new RequestRetryError("ETag mismatch", statusCode, {
                    headers,
                    count: this.retryCount
                }));
                return false;
            }
            const { start, size, end = size } = contentRange;
            assert4(this.start === start, "content-range mismatch");
            assert4(this.end == null || this.end === end, "content-range mismatch");
            this.resume = resume;
            return true;
        }
        if (this.end == null) {
            if (statusCode === 206) {
                const range2 = parseRangeHeader(headers["content-range"]);
                if (range2 == null) {
                    return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
                }
                const { start, size, end = size } = range2;
                assert4(start != null && Number.isFinite(start) && this.start !== start, "content-range mismatch");
                assert4(Number.isFinite(start));
                assert4(end != null && Number.isFinite(end) && this.end !== end, "invalid content-length");
                this.start = start;
                this.end = end;
            }
            if (this.end == null) {
                const contentLength = headers["content-length"];
                this.end = contentLength != null ? Number(contentLength) : null;
            }
            assert4(Number.isFinite(this.start));
            assert4(this.end == null || Number.isFinite(this.end), "invalid content-length");
            this.resume = resume;
            this.etag = headers.etag != null ? headers.etag : null;
            return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
        }
        const err = new RequestRetryError("Request failed", statusCode, {
            headers,
            count: this.retryCount
        });
        this.abort(err);
        return false;
    }
    onData(chunk) {
        this.start += chunk.length;
        return this.handler.onData(chunk);
    }
    onComplete(rawTrailers) {
        this.retryCount = 0;
        return this.handler.onComplete(rawTrailers);
    }
    onError(err) {
        if (this.aborted || isDisturbed(this.opts.body)) {
            return this.handler.onError(err);
        }
        this.retryOpts.retry(err, {
            state: {
                counter: this.retryCount++,
                currentTimeout: this.retryAfter
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, onRetry.bind(this));
        function onRetry(err2) {
            if (err2 != null || this.aborted || isDisturbed(this.opts.body)) {
                return this.handler.onError(err2);
            }
            if (this.start !== 0) {
                this.opts = {
                    ...this.opts,
                    headers: {
                        ...this.opts.headers,
                        range: `bytes=${this.start}-${this.end ?? ""}`
                    }
                };
            }
            try {
                this.dispatch(this.opts, this);
            } catch (err3) {
                this.handler.onError(err3);
            }
        }
    }
};
module2.exports = RetryHandler;

return module2.exports;
}
