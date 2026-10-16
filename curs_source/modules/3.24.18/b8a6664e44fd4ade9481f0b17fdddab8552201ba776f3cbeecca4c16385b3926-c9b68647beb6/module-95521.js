"use strict";
class e extends Error {
    constructor(A){
        super(A), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class t extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, t), this.name = "ConnectTimeoutError", this.message = A || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class r extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, r), this.name = "HeadersTimeoutError", this.message = A || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class s extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = A || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = A || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class n extends e {
    constructor(A, e, t, r){
        super(A), Error.captureStackTrace(this, n), this.name = "ResponseStatusCodeError", this.message = A || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = r, this.status = e, this.statusCode = e, this.headers = t;
    }
}
class i extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = A || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class E extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, E), this.name = "InvalidReturnValueError", this.message = A || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class Q extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, Q), this.name = "AbortError", this.message = A || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class g extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, g), this.name = "InformationalError", this.message = A || "Request information", this.code = "UND_ERR_INFO";
    }
}
class C extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, C), this.name = "RequestContentLengthMismatchError", this.message = A || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class B extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, B), this.name = "ResponseContentLengthMismatchError", this.message = A || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class a extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, a), this.name = "ClientDestroyedError", this.message = A || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class I extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, I), this.name = "ClientClosedError", this.message = A || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class c extends e {
    constructor(A, e){
        super(A), Error.captureStackTrace(this, c), this.name = "SocketError", this.message = A || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = e;
    }
}
class h extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, h), this.name = "NotSupportedError", this.message = A || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class l extends Error {
    constructor(A, e, t){
        super(A), Error.captureStackTrace(this, l), this.name = "HTTPParserError", this.code = e ? `HPE_${e}` : void 0, this.data = t ? t.toString() : void 0;
    }
}
class u extends e {
    constructor(A){
        super(A), Error.captureStackTrace(this, u), this.name = "ResponseExceededMaxSizeError", this.message = A || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class d extends e {
    constructor(A, e, { headers: t, data: r }){
        super(A), Error.captureStackTrace(this, d), this.name = "RequestRetryError", this.message = A || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = e, this.data = r, this.headers = t;
    }
}
module.exports = {
    HTTPParserError: l,
    UndiciError: e,
    HeadersTimeoutError: r,
    HeadersOverflowError: s,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: C,
    ConnectTimeoutError: t,
    ResponseStatusCodeError: n,
    InvalidArgumentError: i,
    InvalidReturnValueError: E,
    RequestAbortedError: Q,
    ClientDestroyedError: a,
    ClientClosedError: I,
    InformationalError: g,
    SocketError: c,
    NotSupportedError: h,
    ResponseContentLengthMismatchError: B,
    BalancedPoolMissingUpstreamError: class extends e {
        constructor(A){
            super(A), Error.captureStackTrace(this, h), this.name = "MissingUpstreamError", this.message = A || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: u,
    RequestRetryError: d
};
