"use strict";
class n extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class t extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, t), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class a extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, a), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class s extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class r extends n {
    constructor(e, n, t, a){
        super(e), Error.captureStackTrace(this, r), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = a, this.status = n, this.statusCode = n, this.headers = t;
    }
}
class i extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class A extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, A), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class c extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class l extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class d extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, d), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class m extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, m), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class u extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class g extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, g), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class p extends n {
    constructor(e, n){
        super(e), Error.captureStackTrace(this, p), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = n;
    }
}
class E extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, E), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class h extends Error {
    constructor(e, n, t){
        super(e), Error.captureStackTrace(this, h), this.name = "HTTPParserError", this.code = n ? `HPE_${n}` : void 0, this.data = t ? t.toString() : void 0;
    }
}
class T extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, T), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class k extends n {
    constructor(e, n, { headers: t, data: a }){
        super(e), Error.captureStackTrace(this, k), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = n, this.data = a, this.headers = t;
    }
}
module.exports = {
    HTTPParserError: h,
    UndiciError: n,
    HeadersTimeoutError: a,
    HeadersOverflowError: s,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: d,
    ConnectTimeoutError: t,
    ResponseStatusCodeError: r,
    InvalidArgumentError: i,
    InvalidReturnValueError: A,
    RequestAbortedError: c,
    ClientDestroyedError: u,
    ClientClosedError: g,
    InformationalError: l,
    SocketError: p,
    NotSupportedError: E,
    ResponseContentLengthMismatchError: m,
    BalancedPoolMissingUpstreamError: class extends n {
        constructor(e){
            super(e), Error.captureStackTrace(this, E), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: T,
    RequestRetryError: k
};
