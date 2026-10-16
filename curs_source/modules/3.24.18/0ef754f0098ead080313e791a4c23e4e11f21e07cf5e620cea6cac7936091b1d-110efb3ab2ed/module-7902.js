"use strict";
class a extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class n extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, n), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class t extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, t), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class s extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class r extends a {
    constructor(e, a, n, t){
        super(e), Error.captureStackTrace(this, r), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = t, this.status = a, this.statusCode = a, this.headers = n;
    }
}
class i extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class l extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class d extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, d), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class m extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, m), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class c extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class p extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, p), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class A extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, A), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class u extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class g extends a {
    constructor(e, a){
        super(e), Error.captureStackTrace(this, g), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = a;
    }
}
class T extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, T), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class h extends Error {
    constructor(e, a, n){
        super(e), Error.captureStackTrace(this, h), this.name = "HTTPParserError", this.code = a ? `HPE_${a}` : void 0, this.data = n ? n.toString() : void 0;
    }
}
class k extends a {
    constructor(e){
        super(e), Error.captureStackTrace(this, k), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class _ extends a {
    constructor(e, a, { headers: n, data: t }){
        super(e), Error.captureStackTrace(this, _), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = a, this.data = t, this.headers = n;
    }
}
module.exports = {
    HTTPParserError: h,
    UndiciError: a,
    HeadersTimeoutError: t,
    HeadersOverflowError: s,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: c,
    ConnectTimeoutError: n,
    ResponseStatusCodeError: r,
    InvalidArgumentError: i,
    InvalidReturnValueError: l,
    RequestAbortedError: d,
    ClientDestroyedError: A,
    ClientClosedError: u,
    InformationalError: m,
    SocketError: g,
    NotSupportedError: T,
    ResponseContentLengthMismatchError: p,
    BalancedPoolMissingUpstreamError: class extends a {
        constructor(e){
            super(e), Error.captureStackTrace(this, T), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: k,
    RequestRetryError: _
};
