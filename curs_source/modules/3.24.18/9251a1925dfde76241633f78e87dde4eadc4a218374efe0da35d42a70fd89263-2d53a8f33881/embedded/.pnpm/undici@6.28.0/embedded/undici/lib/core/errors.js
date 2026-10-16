var __wakaru_require_errors2_cache;
export function require_errors2() {
if (__wakaru_require_errors2_cache) return __wakaru_require_errors2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_errors2_cache = module2;
"use strict";
var kUndiciError = Symbol.for("undici.error.UND_ERR");
var UndiciError = class extends Error {
    constructor(message){
        super(message);
        this.name = "UndiciError";
        this.code = "UND_ERR";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kUndiciError] === true;
    }
    [kUndiciError] = true;
};
var kConnectTimeoutError = Symbol.for("undici.error.UND_ERR_CONNECT_TIMEOUT");
var ConnectTimeoutError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "ConnectTimeoutError";
        this.message = message || "Connect Timeout Error";
        this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kConnectTimeoutError] === true;
    }
    [kConnectTimeoutError] = true;
};
var kHeadersTimeoutError = Symbol.for("undici.error.UND_ERR_HEADERS_TIMEOUT");
var HeadersTimeoutError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "HeadersTimeoutError";
        this.message = message || "Headers Timeout Error";
        this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHeadersTimeoutError] === true;
    }
    [kHeadersTimeoutError] = true;
};
var kHeadersOverflowError = Symbol.for("undici.error.UND_ERR_HEADERS_OVERFLOW");
var HeadersOverflowError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "HeadersOverflowError";
        this.message = message || "Headers Overflow Error";
        this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHeadersOverflowError] === true;
    }
    [kHeadersOverflowError] = true;
};
var kBodyTimeoutError = Symbol.for("undici.error.UND_ERR_BODY_TIMEOUT");
var BodyTimeoutError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "BodyTimeoutError";
        this.message = message || "Body Timeout Error";
        this.code = "UND_ERR_BODY_TIMEOUT";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kBodyTimeoutError] === true;
    }
    [kBodyTimeoutError] = true;
};
var kResponseStatusCodeError = Symbol.for("undici.error.UND_ERR_RESPONSE_STATUS_CODE");
var ResponseStatusCodeError = class extends UndiciError {
    constructor(message, statusCode, headers, body){
        super(message);
        this.name = "ResponseStatusCodeError";
        this.message = message || "Response Status Code Error";
        this.code = "UND_ERR_RESPONSE_STATUS_CODE";
        this.body = body;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseStatusCodeError] === true;
    }
    [kResponseStatusCodeError] = true;
};
var kInvalidArgumentError = Symbol.for("undici.error.UND_ERR_INVALID_ARG");
var InvalidArgumentError3 = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "InvalidArgumentError";
        this.message = message || "Invalid Argument Error";
        this.code = "UND_ERR_INVALID_ARG";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInvalidArgumentError] === true;
    }
    [kInvalidArgumentError] = true;
};
var kInvalidReturnValueError = Symbol.for("undici.error.UND_ERR_INVALID_RETURN_VALUE");
var InvalidReturnValueError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "InvalidReturnValueError";
        this.message = message || "Invalid Return Value Error";
        this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInvalidReturnValueError] === true;
    }
    [kInvalidReturnValueError] = true;
};
var kAbortError = Symbol.for("undici.error.UND_ERR_ABORT");
var AbortError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "AbortError";
        this.message = message || "The operation was aborted";
        this.code = "UND_ERR_ABORT";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kAbortError] === true;
    }
    [kAbortError] = true;
};
var kRequestAbortedError = Symbol.for("undici.error.UND_ERR_ABORTED");
var RequestAbortedError = class extends AbortError {
    constructor(message){
        super(message);
        this.name = "AbortError";
        this.message = message || "Request aborted";
        this.code = "UND_ERR_ABORTED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestAbortedError] === true;
    }
    [kRequestAbortedError] = true;
};
var kInformationalError = Symbol.for("undici.error.UND_ERR_INFO");
var InformationalError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "InformationalError";
        this.message = message || "Request information";
        this.code = "UND_ERR_INFO";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInformationalError] === true;
    }
    [kInformationalError] = true;
};
var kRequestContentLengthMismatchError = Symbol.for("undici.error.UND_ERR_REQ_CONTENT_LENGTH_MISMATCH");
var RequestContentLengthMismatchError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "RequestContentLengthMismatchError";
        this.message = message || "Request body length does not match content-length header";
        this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestContentLengthMismatchError] === true;
    }
    [kRequestContentLengthMismatchError] = true;
};
var kResponseContentLengthMismatchError = Symbol.for("undici.error.UND_ERR_RES_CONTENT_LENGTH_MISMATCH");
var ResponseContentLengthMismatchError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "ResponseContentLengthMismatchError";
        this.message = message || "Response body length does not match content-length header";
        this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseContentLengthMismatchError] === true;
    }
    [kResponseContentLengthMismatchError] = true;
};
var kClientDestroyedError = Symbol.for("undici.error.UND_ERR_DESTROYED");
var ClientDestroyedError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "ClientDestroyedError";
        this.message = message || "The client is destroyed";
        this.code = "UND_ERR_DESTROYED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kClientDestroyedError] === true;
    }
    [kClientDestroyedError] = true;
};
var kClientClosedError = Symbol.for("undici.error.UND_ERR_CLOSED");
var ClientClosedError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "ClientClosedError";
        this.message = message || "The client is closed";
        this.code = "UND_ERR_CLOSED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kClientClosedError] === true;
    }
    [kClientClosedError] = true;
};
var kSocketError = Symbol.for("undici.error.UND_ERR_SOCKET");
var SocketError = class extends UndiciError {
    constructor(message, socket){
        super(message);
        this.name = "SocketError";
        this.message = message || "Socket error";
        this.code = "UND_ERR_SOCKET";
        this.socket = socket;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kSocketError] === true;
    }
    [kSocketError] = true;
};
var kNotSupportedError = Symbol.for("undici.error.UND_ERR_NOT_SUPPORTED");
var NotSupportedError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "NotSupportedError";
        this.message = message || "Not supported error";
        this.code = "UND_ERR_NOT_SUPPORTED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kNotSupportedError] === true;
    }
    [kNotSupportedError] = true;
};
var kBalancedPoolMissingUpstreamError = Symbol.for("undici.error.UND_ERR_BPL_MISSING_UPSTREAM");
var BalancedPoolMissingUpstreamError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "MissingUpstreamError";
        this.message = message || "No upstream has been added to the BalancedPool";
        this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kBalancedPoolMissingUpstreamError] === true;
    }
    [kBalancedPoolMissingUpstreamError] = true;
};
var kHTTPParserError = Symbol.for("undici.error.UND_ERR_HTTP_PARSER");
var HTTPParserError = class extends Error {
    constructor(message, code, data){
        super(message);
        this.name = "HTTPParserError";
        this.code = code ? `HPE_${code}` : void 0;
        this.data = data ? data.toString() : void 0;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHTTPParserError] === true;
    }
    [kHTTPParserError] = true;
};
var kResponseExceededMaxSizeError = Symbol.for("undici.error.UND_ERR_RES_EXCEEDED_MAX_SIZE");
var ResponseExceededMaxSizeError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "ResponseExceededMaxSizeError";
        this.message = message || "Response content exceeded max size";
        this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseExceededMaxSizeError] === true;
    }
    [kResponseExceededMaxSizeError] = true;
};
var kRequestRetryError = Symbol.for("undici.error.UND_ERR_REQ_RETRY");
var RequestRetryError = class extends UndiciError {
    constructor(message, code, { headers, data }){
        super(message);
        this.name = "RequestRetryError";
        this.message = message || "Request retry error";
        this.code = "UND_ERR_REQ_RETRY";
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestRetryError] === true;
    }
    [kRequestRetryError] = true;
};
var kResponseError = Symbol.for("undici.error.UND_ERR_RESPONSE");
var ResponseError = class extends UndiciError {
    constructor(message, code, { headers, data }){
        super(message);
        this.name = "ResponseError";
        this.message = message || "Response error";
        this.code = "UND_ERR_RESPONSE";
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseError] === true;
    }
    [kResponseError] = true;
};
var kSecureProxyConnectionError = Symbol.for("undici.error.UND_ERR_PRX_TLS");
var SecureProxyConnectionError = class extends UndiciError {
    constructor(cause, message, options2){
        super(message, {
            cause,
            ...options2 ?? {}
        });
        this.name = "SecureProxyConnectionError";
        this.message = message || "Secure Proxy Connection failed";
        this.code = "UND_ERR_PRX_TLS";
        this.cause = cause;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kSecureProxyConnectionError] === true;
    }
    [kSecureProxyConnectionError] = true;
};
var kMessageSizeExceededError = Symbol.for("undici.error.UND_ERR_WS_MESSAGE_SIZE_EXCEEDED");
var MessageSizeExceededError = class extends UndiciError {
    constructor(message){
        super(message);
        this.name = "MessageSizeExceededError";
        this.message = message || "Max decompressed message size exceeded";
        this.code = "UND_ERR_WS_MESSAGE_SIZE_EXCEEDED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kMessageSizeExceededError] === true;
    }
    get [kMessageSizeExceededError]() {
        return true;
    }
};
module2.exports = {
    AbortError,
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
    RequestRetryError,
    ResponseError,
    SecureProxyConnectionError,
    MessageSizeExceededError
};

return module2.exports;
}
