"use strict";
class n extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class a extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, a), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class t extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, t), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
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
    constructor(e, n, a, t){
        super(e), Error.captureStackTrace(this, r), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = t, this.status = n, this.statusCode = n, this.headers = a;
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
class l extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class c extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class m extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, m), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class d extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, d), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class g extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, g), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class u extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class E extends n {
    constructor(e, n){
        super(e), Error.captureStackTrace(this, E), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = n;
    }
}
class p extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, p), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class T extends Error {
    constructor(e, n, a){
        super(e), Error.captureStackTrace(this, T), this.name = "HTTPParserError", this.code = n ? `HPE_${n}` : void 0, this.data = a ? a.toString() : void 0;
    }
}
class k extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, k), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class I extends n {
    constructor(e, n, { headers: a, data: t }){
        super(e), Error.captureStackTrace(this, I), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = n, this.data = t, this.headers = a;
    }
}
module.exports = {
    HTTPParserError: T,
    UndiciError: n,
    HeadersTimeoutError: t,
    HeadersOverflowError: s,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: m,
    ConnectTimeoutError: a,
    ResponseStatusCodeError: r,
    InvalidArgumentError: i,
    InvalidReturnValueError: A,
    RequestAbortedError: l,
    ClientDestroyedError: g,
    ClientClosedError: u,
    InformationalError: c,
    SocketError: E,
    NotSupportedError: p,
    ResponseContentLengthMismatchError: d,
    BalancedPoolMissingUpstreamError: class extends n {
        constructor(e){
            super(e), Error.captureStackTrace(this, p), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: k,
    RequestRetryError: I
};
