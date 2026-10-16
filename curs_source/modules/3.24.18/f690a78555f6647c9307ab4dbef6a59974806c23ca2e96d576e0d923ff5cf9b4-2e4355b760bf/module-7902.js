"use strict";
class A extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class t extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, t), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class n extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, n), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class r extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, r), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class s extends A {
    constructor(e, A, t, n){
        super(e), Error.captureStackTrace(this, s), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n, this.status = A, this.statusCode = A, this.headers = t;
    }
}
class a extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class i extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, i), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class c extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class l extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class g extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, g), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class E extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, E), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class u extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class d extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, d), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class I extends A {
    constructor(e, A){
        super(e), Error.captureStackTrace(this, I), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A;
    }
}
class h extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, h), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class Q extends Error {
    constructor(e, A, t){
        super(e), Error.captureStackTrace(this, Q), this.name = "HTTPParserError", this.code = A ? `HPE_${A}` : void 0, this.data = t ? t.toString() : void 0;
    }
}
class m extends A {
    constructor(e){
        super(e), Error.captureStackTrace(this, m), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class C extends A {
    constructor(e, A, { headers: t, data: n }){
        super(e), Error.captureStackTrace(this, C), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = A, this.data = n, this.headers = t;
    }
}
module.exports = {
    HTTPParserError: Q,
    UndiciError: A,
    HeadersTimeoutError: n,
    HeadersOverflowError: r,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: g,
    ConnectTimeoutError: t,
    ResponseStatusCodeError: s,
    InvalidArgumentError: a,
    InvalidReturnValueError: i,
    RequestAbortedError: c,
    ClientDestroyedError: u,
    ClientClosedError: d,
    InformationalError: l,
    SocketError: I,
    NotSupportedError: h,
    ResponseContentLengthMismatchError: E,
    BalancedPoolMissingUpstreamError: class extends A {
        constructor(e){
            super(e), Error.captureStackTrace(this, h), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: m,
    RequestRetryError: C
};
