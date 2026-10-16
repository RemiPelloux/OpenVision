"use strict";
class t extends Error {
    constructor(e){
        super(e), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class r extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, r), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class n extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, n), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class s extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class o extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class i extends t {
    constructor(e, t, r, n){
        super(e), Error.captureStackTrace(this, i), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n, this.status = t, this.statusCode = t, this.headers = r;
    }
}
class a extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class c extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, c), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class l extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, l), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class u extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, u), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
    }
}
class d extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, d), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class p extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, p), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class m extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, m), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class h extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, h), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class f extends t {
    constructor(e, t){
        super(e), Error.captureStackTrace(this, f), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = t;
    }
}
class g extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, g), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class y extends Error {
    constructor(e, t, r){
        super(e), Error.captureStackTrace(this, y), this.name = "HTTPParserError", this.code = t ? `HPE_${t}` : void 0, this.data = r ? r.toString() : void 0;
    }
}
class w extends t {
    constructor(e){
        super(e), Error.captureStackTrace(this, w), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class v extends t {
    constructor(e, t, { headers: r, data: n }){
        super(e), Error.captureStackTrace(this, v), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = t, this.data = n, this.headers = r;
    }
}
module.exports = {
    HTTPParserError: y,
    UndiciError: t,
    HeadersTimeoutError: n,
    HeadersOverflowError: s,
    BodyTimeoutError: o,
    RequestContentLengthMismatchError: d,
    ConnectTimeoutError: r,
    ResponseStatusCodeError: i,
    InvalidArgumentError: a,
    InvalidReturnValueError: c,
    RequestAbortedError: l,
    ClientDestroyedError: m,
    ClientClosedError: h,
    InformationalError: u,
    SocketError: f,
    NotSupportedError: g,
    ResponseContentLengthMismatchError: p,
    BalancedPoolMissingUpstreamError: class extends t {
        constructor(e){
            super(e), Error.captureStackTrace(this, g), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: w,
    RequestRetryError: v
};
