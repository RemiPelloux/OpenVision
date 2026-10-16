"use strict";
const t = {
    invalidType: "FAST_JWT_INVALID_TYPE",
    invalidOption: "FAST_JWT_INVALID_OPTION",
    invalidAlgorithm: "FAST_JWT_INVALID_ALGORITHM",
    invalidClaimType: "FAST_JWT_INVALID_CLAIM_TYPE",
    invalidClaimValue: "FAST_JWT_INVALID_CLAIM_VALUE",
    invalidKey: "FAST_JWT_INVALID_KEY",
    invalidSignature: "FAST_JWT_INVALID_SIGNATURE",
    invalidPayload: "FAST_JWT_INVALID_PAYLOAD",
    malformed: "FAST_JWT_MALFORMED",
    inactive: "FAST_JWT_INACTIVE",
    expired: "FAST_JWT_EXPIRED",
    missingKey: "FAST_JWT_MISSING_KEY",
    keyFetchingError: "FAST_JWT_KEY_FETCHING_ERROR",
    signError: "FAST_JWT_SIGN_ERROR",
    verifyError: "FAST_JWT_VERIFY_ERROR",
    missingRequiredClaim: "FAST_JWT_MISSING_REQUIRED_CLAIM",
    missingSignature: "FAST_JWT_MISSING_SIGNATURE"
};
class A extends Error {
    constructor(e, t, A){
        if (super(t), Error.captureStackTrace(this, this.constructor), this.code = e, A) for(const e in A)this[e] = A[e];
    }
}
A.codes = t, A.wrap = function(e, t, n) {
    return e instanceof A ? e : new A(t, n, {
        originalError: e
    });
}, module.exports = {
    TokenError: A,
    TOKEN_ERROR_CODES: t
};
