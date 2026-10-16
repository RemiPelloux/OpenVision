"use strict";
class e extends Error {
    constructor(t){
        super(t), this.name = "UndiciError", this.code = "UND_ERR";
    }
}
class r extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, r), this.name = "ConnectTimeoutError", this.message = t || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
}
class n extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, n), this.name = "HeadersTimeoutError", this.message = t || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
}
class s extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = t || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
}
class i extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, i), this.name = "BodyTimeoutError", this.message = t || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
}
class o extends e {
    constructor(t, e, r, n){
        super(t), Error.captureStackTrace(this, o), this.name = "ResponseStatusCodeError", this.message = t || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n, this.status = e, this.statusCode = e, this.headers = r;
    }
}
class a extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = t || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
}
class u extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, u), this.name = "InvalidReturnValueError", this.message = t || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
}
class c extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = t || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
}
class l extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = t || "Request information", this.code = "UND_ERR_INFO";
    }
}
class m extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, m), this.name = "RequestContentLengthMismatchError", this.message = t || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
}
class d extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, d), this.name = "ResponseContentLengthMismatchError", this.message = t || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
}
class f extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, f), this.name = "ClientDestroyedError", this.message = t || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
}
class p extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, p), this.name = "ClientClosedError", this.message = t || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
}
class h extends e {
    constructor(t, e){
        super(t), Error.captureStackTrace(this, h), this.name = "SocketError", this.message = t || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = e;
    }
}
class g extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, g), this.name = "NotSupportedError", this.message = t || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
}
class A extends Error {
    constructor(t, e, r){
        super(t), Error.captureStackTrace(this, A), this.name = "HTTPParserError", this.code = e ? `HPE_${e}` : void 0, this.data = r ? r.toString() : void 0;
    }
}
class _ extends e {
    constructor(t){
        super(t), Error.captureStackTrace(this, _), this.name = "ResponseExceededMaxSizeError", this.message = t || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
}
class y extends e {
    constructor(t, e, { headers: r, data: n }){
        super(t), Error.captureStackTrace(this, y), this.name = "RequestRetryError", this.message = t || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = e, this.data = n, this.headers = r;
    }
}
module.exports = {
    HTTPParserError: A,
    UndiciError: e,
    HeadersTimeoutError: n,
    HeadersOverflowError: s,
    BodyTimeoutError: i,
    RequestContentLengthMismatchError: m,
    ConnectTimeoutError: r,
    ResponseStatusCodeError: o,
    InvalidArgumentError: a,
    InvalidReturnValueError: u,
    RequestAbortedError: c,
    ClientDestroyedError: f,
    ClientClosedError: p,
    InformationalError: l,
    SocketError: h,
    NotSupportedError: g,
    ResponseContentLengthMismatchError: d,
    BalancedPoolMissingUpstreamError: class extends e {
        constructor(t){
            super(t), Error.captureStackTrace(this, g), this.name = "MissingUpstreamError", this.message = t || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
        }
    },
    ResponseExceededMaxSizeError: _,
    RequestRetryError: y
};
