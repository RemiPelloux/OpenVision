"use strict";
require.d(exports, {
    h5: ()=>u,
    S0: ()=>l,
    GQ: ()=>f,
    Qb: ()=>d,
    bV: ()=>h
});
const n = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch"
], s = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
], i = [
    "TimeoutError",
    "RequestTimeout",
    "RequestTimeoutException"
], o = [
    500,
    502,
    503,
    504
], a = [
    "ECONNRESET",
    "ECONNREFUSED",
    "EPIPE",
    "ETIMEDOUT"
], c = [
    "EHOSTUNREACH",
    "ENETUNREACH",
    "ENOTFOUND"
], l = (e)=>void 0 !== e?.$retryable, u = (e)=>n.includes(e.name), d = (e)=>429 === e.$metadata?.httpStatusCode || s.includes(e.name) || 1 == e.$retryable?.throttling, h = (e, t = 0)=>l(e) || ((e)=>e.$metadata?.clockSkewCorrected)(e) || "InvalidSignatureException" === e.name && e.message?.includes("Signature expired") || i.includes(e.name) || a.includes(e?.code || "") || c.includes(e?.code || "") || o.includes(e.$metadata?.httpStatusCode || 0) || ((e)=>{
        const t = new Set([
            "Failed to fetch",
            "NetworkError when attempting to fetch resource",
            "The Internet connection appears to be offline",
            "Load failed",
            "Network request failed"
        ]);
        return !!(e && e instanceof TypeError) && t.has(e.message);
    })(e) || function(e) {
        return "ERR_HTTP2_STREAM_ERROR" === e.code && e.message.includes("NGHTTP2_REFUSED_STREAM");
    }(e) || void 0 !== e.cause && t <= 10 && h(e.cause, t + 1), f = (e)=>{
    if (void 0 !== e.$metadata?.httpStatusCode) {
        const t = e.$metadata.httpStatusCode;
        return 500 <= t && t <= 599 && !h(e);
    }
    return !1;
};
