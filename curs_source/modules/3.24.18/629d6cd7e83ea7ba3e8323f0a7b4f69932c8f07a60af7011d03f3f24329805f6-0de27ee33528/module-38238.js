"use strict";
const e = Symbol.for("undici.error.UND_ERR");
class t extends Error {
    constructor(A){
        super(A), this.name = "UndiciError", this.code = "UND_ERR";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[e];
    }
    [e] = !0;
}
const r = Symbol.for("undici.error.UND_ERR_CONNECT_TIMEOUT");
class s extends t {
    constructor(A){
        super(A), this.name = "ConnectTimeoutError", this.message = A || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[r];
    }
    [r] = !0;
}
const o = Symbol.for("undici.error.UND_ERR_HEADERS_TIMEOUT");
class n extends t {
    constructor(A){
        super(A), this.name = "HeadersTimeoutError", this.message = A || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[o];
    }
    [o] = !0;
}
const i = Symbol.for("undici.error.UND_ERR_HEADERS_OVERFLOW");
class a extends t {
    constructor(A){
        super(A), this.name = "HeadersOverflowError", this.message = A || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[i];
    }
    [i] = !0;
}
const Q = Symbol.for("undici.error.UND_ERR_BODY_TIMEOUT");
class g extends t {
    constructor(A){
        super(A), this.name = "BodyTimeoutError", this.message = A || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[Q];
    }
    [Q] = !0;
}
const E = Symbol.for("undici.error.UND_ERR_RESPONSE_STATUS_CODE");
class B extends t {
    constructor(A, e, t, r){
        super(A), this.name = "ResponseStatusCodeError", this.message = A || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = r, this.status = e, this.statusCode = e, this.headers = t;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[E];
    }
    [E] = !0;
}
const c = Symbol.for("undici.error.UND_ERR_INVALID_ARG");
class I extends t {
    constructor(A){
        super(A), this.name = "InvalidArgumentError", this.message = A || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[c];
    }
    [c] = !0;
}
const C = Symbol.for("undici.error.UND_ERR_INVALID_RETURN_VALUE");
class h extends t {
    constructor(A){
        super(A), this.name = "InvalidReturnValueError", this.message = A || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[C];
    }
    [C] = !0;
}
const l = Symbol.for("undici.error.UND_ERR_ABORT");
class u extends t {
    constructor(A){
        super(A), this.name = "AbortError", this.message = A || "The operation was aborted", this.code = "UND_ERR_ABORT";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[l];
    }
    [l] = !0;
}
const d = Symbol.for("undici.error.UND_ERR_ABORTED");
class f extends u {
    constructor(A){
        super(A), this.name = "AbortError", this.message = A || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[d];
    }
    [d] = !0;
}
const w = Symbol.for("undici.error.UND_ERR_INFO");
class y extends t {
    constructor(A){
        super(A), this.name = "InformationalError", this.message = A || "Request information", this.code = "UND_ERR_INFO";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[w];
    }
    [w] = !0;
}
const D = Symbol.for("undici.error.UND_ERR_REQ_CONTENT_LENGTH_MISMATCH");
class p extends t {
    constructor(A){
        super(A), this.name = "RequestContentLengthMismatchError", this.message = A || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[D];
    }
    [D] = !0;
}
const k = Symbol.for("undici.error.UND_ERR_RES_CONTENT_LENGTH_MISMATCH");
class R extends t {
    constructor(A){
        super(A), this.name = "ResponseContentLengthMismatchError", this.message = A || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[k];
    }
    [k] = !0;
}
const F = Symbol.for("undici.error.UND_ERR_DESTROYED");
class m extends t {
    constructor(A){
        super(A), this.name = "ClientDestroyedError", this.message = A || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[F];
    }
    [F] = !0;
}
const b = Symbol.for("undici.error.UND_ERR_CLOSED");
class N extends t {
    constructor(A){
        super(A), this.name = "ClientClosedError", this.message = A || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[b];
    }
    [b] = !0;
}
const S = Symbol.for("undici.error.UND_ERR_SOCKET");
class M extends t {
    constructor(A, e){
        super(A), this.name = "SocketError", this.message = A || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = e;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[S];
    }
    [S] = !0;
}
const U = Symbol.for("undici.error.UND_ERR_NOT_SUPPORTED");
class L extends t {
    constructor(A){
        super(A), this.name = "NotSupportedError", this.message = A || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[U];
    }
    [U] = !0;
}
const T = Symbol.for("undici.error.UND_ERR_BPL_MISSING_UPSTREAM");
class Y extends t {
    constructor(A){
        super(A), this.name = "MissingUpstreamError", this.message = A || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[T];
    }
    [T] = !0;
}
const G = Symbol.for("undici.error.UND_ERR_HTTP_PARSER");
class J extends Error {
    constructor(A, e, t){
        super(A), this.name = "HTTPParserError", this.code = e ? `HPE_${e}` : void 0, this.data = t ? t.toString() : void 0;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[G];
    }
    [G] = !0;
}
const v = Symbol.for("undici.error.UND_ERR_RES_EXCEEDED_MAX_SIZE");
class H extends t {
    constructor(A){
        super(A), this.name = "ResponseExceededMaxSizeError", this.message = A || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[v];
    }
    [v] = !0;
}
const V = Symbol.for("undici.error.UND_ERR_REQ_RETRY");
class x extends t {
    constructor(A, e, { headers: t, data: r }){
        super(A), this.name = "RequestRetryError", this.message = A || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = e, this.data = r, this.headers = t;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[V];
    }
    [V] = !0;
}
const W = Symbol.for("undici.error.UND_ERR_RESPONSE");
class O extends t {
    constructor(A, e, { headers: t, data: r }){
        super(A), this.name = "ResponseError", this.message = A || "Response error", this.code = "UND_ERR_RESPONSE", this.statusCode = e, this.data = r, this.headers = t;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[W];
    }
    [W] = !0;
}
const P = Symbol.for("undici.error.UND_ERR_PRX_TLS");
class q extends t {
    constructor(A, e, t){
        super(e, {
            cause: A,
            ...t ?? {}
        }), this.name = "SecureProxyConnectionError", this.message = e || "Secure Proxy Connection failed", this.code = "UND_ERR_PRX_TLS", this.cause = A;
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[P];
    }
    [P] = !0;
}
const Z = Symbol.for("undici.error.UND_ERR_WS_MESSAGE_SIZE_EXCEEDED");
class z extends t {
    constructor(A){
        super(A), this.name = "MessageSizeExceededError", this.message = A || "Max decompressed message size exceeded", this.code = "UND_ERR_WS_MESSAGE_SIZE_EXCEEDED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[Z];
    }
    get [Z]() {
        return !0;
    }
}
module.exports = {
    AbortError: u,
    HTTPParserError: J,
    UndiciError: t,
    HeadersTimeoutError: n,
    HeadersOverflowError: a,
    BodyTimeoutError: g,
    RequestContentLengthMismatchError: p,
    ConnectTimeoutError: s,
    ResponseStatusCodeError: B,
    InvalidArgumentError: I,
    InvalidReturnValueError: h,
    RequestAbortedError: f,
    ClientDestroyedError: m,
    ClientClosedError: N,
    InformationalError: y,
    SocketError: M,
    NotSupportedError: L,
    ResponseContentLengthMismatchError: R,
    BalancedPoolMissingUpstreamError: Y,
    ResponseExceededMaxSizeError: H,
    RequestRetryError: x,
    ResponseError: O,
    SecureProxyConnectionError: q,
    MessageSizeExceededError: z
};
