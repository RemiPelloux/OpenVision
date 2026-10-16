var __wakaru_require_errors_cache;
export function require_errors() {
if (__wakaru_require_errors_cache) return __wakaru_require_errors_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_errors_cache = module2;
"use strict";
var UndiciError = class extends Error {
    constructor(message){
        super(message);
        this.name = "UndiciError";
        this.code = "UND_ERR";
    }
};
var ConnectTimeoutError = class _ConnectTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _ConnectTimeoutError);
        this.name = "ConnectTimeoutError";
        this.message = message || "Connect Timeout Error";
        this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
};
var HeadersTimeoutError = class _HeadersTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _HeadersTimeoutError);
        this.name = "HeadersTimeoutError";
        this.message = message || "Headers Timeout Error";
        this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
};
var HeadersOverflowError = class _HeadersOverflowError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _HeadersOverflowError);
        this.name = "HeadersOverflowError";
        this.message = message || "Headers Overflow Error";
        this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
};
var BodyTimeoutError = class _BodyTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _BodyTimeoutError);
        this.name = "BodyTimeoutError";
        this.message = message || "Body Timeout Error";
        this.code = "UND_ERR_BODY_TIMEOUT";
    }
};
var ResponseStatusCodeError = class _ResponseStatusCodeError extends UndiciError {
    constructor(message, statusCode, headers, body){
        super(message);
        Error.captureStackTrace(this, _ResponseStatusCodeError);
        this.name = "ResponseStatusCodeError";
        this.message = message || "Response Status Code Error";
        this.code = "UND_ERR_RESPONSE_STATUS_CODE";
        this.body = body;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
    }
};
var InvalidArgumentError3 = class _InvalidArgumentError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _InvalidArgumentError);
        this.name = "InvalidArgumentError";
        this.message = message || "Invalid Argument Error";
        this.code = "UND_ERR_INVALID_ARG";
    }
};
var InvalidReturnValueError = class _InvalidReturnValueError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _InvalidReturnValueError);
        this.name = "InvalidReturnValueError";
        this.message = message || "Invalid Return Value Error";
        this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
};
var RequestAbortedError = class _RequestAbortedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _RequestAbortedError);
        this.name = "AbortError";
        this.message = message || "Request aborted";
        this.code = "UND_ERR_ABORTED";
    }
};
var InformationalError = class _InformationalError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _InformationalError);
        this.name = "InformationalError";
        this.message = message || "Request information";
        this.code = "UND_ERR_INFO";
    }
};
var RequestContentLengthMismatchError = class _RequestContentLengthMismatchError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _RequestContentLengthMismatchError);
        this.name = "RequestContentLengthMismatchError";
        this.message = message || "Request body length does not match content-length header";
        this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
};
var ResponseContentLengthMismatchError = class _ResponseContentLengthMismatchError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _ResponseContentLengthMismatchError);
        this.name = "ResponseContentLengthMismatchError";
        this.message = message || "Response body length does not match content-length header";
        this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
};
var ClientDestroyedError = class _ClientDestroyedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _ClientDestroyedError);
        this.name = "ClientDestroyedError";
        this.message = message || "The client is destroyed";
        this.code = "UND_ERR_DESTROYED";
    }
};
var ClientClosedError = class _ClientClosedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _ClientClosedError);
        this.name = "ClientClosedError";
        this.message = message || "The client is closed";
        this.code = "UND_ERR_CLOSED";
    }
};
var SocketError = class _SocketError extends UndiciError {
    constructor(message, socket){
        super(message);
        Error.captureStackTrace(this, _SocketError);
        this.name = "SocketError";
        this.message = message || "Socket error";
        this.code = "UND_ERR_SOCKET";
        this.socket = socket;
    }
};
var NotSupportedError = class _NotSupportedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _NotSupportedError);
        this.name = "NotSupportedError";
        this.message = message || "Not supported error";
        this.code = "UND_ERR_NOT_SUPPORTED";
    }
};
var BalancedPoolMissingUpstreamError = class extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, NotSupportedError);
        this.name = "MissingUpstreamError";
        this.message = message || "No upstream has been added to the BalancedPool";
        this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
    }
};
var HTTPParserError = class _HTTPParserError extends Error {
    constructor(message, code, data){
        super(message);
        Error.captureStackTrace(this, _HTTPParserError);
        this.name = "HTTPParserError";
        this.code = code ? `HPE_${code}` : void 0;
        this.data = data ? data.toString() : void 0;
    }
};
var ResponseExceededMaxSizeError = class _ResponseExceededMaxSizeError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _ResponseExceededMaxSizeError);
        this.name = "ResponseExceededMaxSizeError";
        this.message = message || "Response content exceeded max size";
        this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
};
var RequestRetryError = class _RequestRetryError extends UndiciError {
    constructor(message, code, { headers, data }){
        super(message);
        Error.captureStackTrace(this, _RequestRetryError);
        this.name = "RequestRetryError";
        this.message = message || "Request retry error";
        this.code = "UND_ERR_REQ_RETRY";
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
};
module2.exports = {
    HTTPParserError,
    UndiciError,
    HeadersTimeoutError,
    HeadersOverflowError,
    BodyTimeoutError,
    RequestContentLengthMismatchError,
    ConnectTimeoutError,
    ResponseStatusCodeError,
    InvalidArgumentError: InvalidArgumentError3,
    InvalidReturnValueError,
    RequestAbortedError,
    ClientDestroyedError,
    ClientClosedError,
    InformationalError,
    SocketError,
    NotSupportedError,
    ResponseContentLengthMismatchError,
    BalancedPoolMissingUpstreamError,
    ResponseExceededMaxSizeError,
    RequestRetryError
};

return module2.exports;
}
