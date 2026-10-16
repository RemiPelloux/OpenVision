"use strict";
class t extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class A extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, A), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class n extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, n), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class r extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, r), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class s extends t {
    constructor(e, t, A, n){
        super(e), Error.captureStackTrace(this, s), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n, this.status = t, this.statusCode = t, this.headers = A;
    }
}
class i extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class a extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, a), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class c extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class l extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class u extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class g extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, g), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class E extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, E), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class h extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, h), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class d extends t {
    constructor(e, t){
        super(e), Error.captureStackTrace(this, d), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = t;
    }
}
class I extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, I), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class B extends Error {
    constructor(e, t, A){
        super(e), Error.captureStackTrace(this, B), this.name = "HTTPParserError", this.code = t ? `HPE_${t}` : void 0, this.data = A ? A.toString() : void 0;
    }
}
class Q extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, Q), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class f extends t {
    constructor(e, t, { headers: A, data: n }){
        super(e), Error.captureStackTrace(this, f), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = t, this.data = n, this.headers = A;
    }
}
module.exports = {
    HTTPParserError: B,
    UndiciError: t,
    HeadersTimeoutError: n,
    HeadersOverflowError: r,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: u,
    ConnectTimeoutError: A,
    ResponseStatusCodeError: s,
    InvalidArgumentError: i,
    InvalidReturnValueError: a,
    RequestAbortedError: c,
    ClientDestroyedError: E,
    ClientClosedError: h,
    InformationalError: l,
    SocketError: d,
    NotSupportedError: I,
    ResponseContentLengthMismatchError: g,
    BalancedPoolMissingUpstreamError: class extends t {
        constructor(e){
            super(e), Error.captureStackTrace(this, I), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: Q,
    RequestRetryError: f
};
