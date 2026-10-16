import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_retry_handler_cache;
export function require_retry_handler() {
if (__wakaru_require_retry_handler_cache) return __wakaru_require_retry_handler_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_retry_handler_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { kRetryHandlerDefaultRetry } = require_symbols6();
var { RequestRetryError } = require_errors2();
var { isDisturbed, parseHeaders: parseHeaders2, parseRangeHeader, wrapRequestBody } = require_util8();
function calculateRetryAfterHeader(retryAfter) {
    const current = Date.now();
    return new Date(retryAfter).getTime() - current;
}
function validatePartialResponseContentLength(headers, range2, statusCode, retryCount) {
    const contentLength = headers["content-length"];
    if (contentLength == null) {
        return null;
    }
    if (!Number.isFinite(range2.start) || !Number.isFinite(range2.end)) {
        return null;
    }
    const length = Number(contentLength);
    const expectedLength = range2.end - range2.start + 1;
    if (!Number.isFinite(length) || length !== expectedLength) {
        return new RequestRetryError("Content-Length mismatch", statusCode, {
            headers,
            data: {
                count: retryCount
            }
        });
    }
    return null;
}
var RetryHandler = class _RetryHandler {
    constructor(opts, handlers){
        const { retryOptions, ...dispatchOpts } = opts;
        const { retry: retryFn, maxRetries, maxTimeout, minTimeout, timeoutFactor, methods: methods2, errorCodes, retryAfter, statusCodes } = retryOptions ?? {};
        this.dispatch = handlers.dispatch;
        this.handler = handlers.handler;
        this.opts = {
            ...dispatchOpts,
            body: wrapRequestBody(opts.body)
        };
        this.abort = null;
        this.aborted = false;
        this.retryOpts = {
            retry: retryFn ?? _RetryHandler[kRetryHandlerDefaultRetry],
            retryAfter: retryAfter ?? true,
            maxTimeout: maxTimeout ?? 30 * 1e3,
            minTimeout: minTimeout ?? 500,
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
                "EPIPE",
                "UND_ERR_SOCKET"
            ]
        };
        this.retryCount = 0;
        this.retryCountCheckpoint = 0;
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
        const { maxRetries, minTimeout, maxTimeout, timeoutFactor, statusCodes, errorCodes, methods: methods2 } = retryOptions;
        const { counter } = state;
        if (code && code !== "UND_ERR_REQ_RETRY" && !errorCodes.includes(code)) {
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
        let retryAfterHeader = headers?.["retry-after"];
        if (retryAfterHeader) {
            retryAfterHeader = Number(retryAfterHeader);
            retryAfterHeader = Number.isNaN(retryAfterHeader) ? calculateRetryAfterHeader(retryAfterHeader) : retryAfterHeader * 1e3;
        }
        const retryTimeout = retryAfterHeader > 0 ? Math.min(retryAfterHeader, maxTimeout) : Math.min(minTimeout * timeoutFactor ** (counter - 1), maxTimeout);
        setTimeout(()=>cb(null), retryTimeout);
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const headers = parseHeaders2(rawHeaders);
        this.retryCount += 1;
        if (statusCode >= 300) {
            if (this.retryOpts.statusCodes.includes(statusCode) === false) {
                return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
            } else {
                this.abort(new RequestRetryError("Request failed", statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                }));
                return false;
            }
        }
        if (this.resume != null) {
            this.resume = null;
            if (statusCode !== 206 && (this.start > 0 || statusCode !== 200)) {
                this.abort(new RequestRetryError("server does not support the range header and the payload was partially consumed", statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                }));
                return false;
            }
            const contentRange = parseRangeHeader(headers["content-range"]);
            if (!contentRange) {
                this.abort(new RequestRetryError("Content-Range mismatch", statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                }));
                return false;
            }
            if (this.etag != null && this.etag !== headers.etag) {
                this.abort(new RequestRetryError("ETag mismatch", statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                }));
                return false;
            }
            const contentLengthError = validatePartialResponseContentLength(headers, contentRange, statusCode, this.retryCount);
            if (contentLengthError != null) {
                this.abort(contentLengthError);
                return false;
            }
            const { start, size, end = size - 1 } = contentRange;
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
                const contentLengthError = validatePartialResponseContentLength(headers, range2, statusCode, this.retryCount);
                if (contentLengthError != null) {
                    this.abort(contentLengthError);
                    return false;
                }
                const { start, size, end = size - 1 } = range2;
                assert4(start != null && Number.isFinite(start), "content-range mismatch");
                assert4(end != null && Number.isFinite(end), "invalid content-length");
                this.start = start;
                this.end = end;
            }
            if (this.end == null) {
                const contentLength = headers["content-length"];
                this.end = contentLength != null ? Number(contentLength) - 1 : null;
            }
            assert4(Number.isFinite(this.start));
            assert4(this.end == null || Number.isFinite(this.end), "invalid content-length");
            this.resume = resume;
            this.etag = headers.etag != null ? headers.etag : null;
            if (this.etag != null && this.etag.startsWith("W/")) {
                this.etag = null;
            }
            return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
        }
        const err = new RequestRetryError("Request failed", statusCode, {
            headers,
            data: {
                count: this.retryCount
            }
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
        if (this.retryCount - this.retryCountCheckpoint > 0) {
            this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint);
        } else {
            this.retryCount += 1;
        }
        this.retryOpts.retry(err, {
            state: {
                counter: this.retryCount
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
                const headers = {
                    range: `bytes=${this.start}-${this.end ?? ""}`
                };
                if (this.etag != null) {
                    headers["if-match"] = this.etag;
                }
                this.opts = {
                    ...this.opts,
                    headers: {
                        ...this.opts.headers,
                        ...headers
                    }
                };
            }
            try {
                this.retryCountCheckpoint = this.retryCount;
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
