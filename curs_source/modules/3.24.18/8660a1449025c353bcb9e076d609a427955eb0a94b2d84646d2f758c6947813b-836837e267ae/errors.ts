import { pr } from "./code_3.js";
import { dp } from "./connect.js";
import { OT } from "./index_5.ts";
import { B1m } from "./relayed-attempt-failure.ts";
import { E } from "./tslib.es6.js";
import { Hu, wo } from "./utils_pb.js";
var kpe, BO, rPe, bJ, V1m, K1m, T1, Y1m, X1m, Z1m, Q1m, aUa, J1m, ekm, dYr, lUa, cUa, tkm, uUa, dUa, nkm;
export { BO, J1m, K1m, Q1m, T1, V1m, X1m, Y1m, Z1m, aUa, bJ, cUa, dUa, dYr, ekm, kpe, lUa, nkm, rPe, tkm, uUa };
var __wakaru_ETn_initialized = false;
export function ETn() {
if (__wakaru_ETn_initialized) return;
__wakaru_ETn_initialized = true;
"use strict";
E(), OT(), Hu(), dp(), B1m(), kpe = class extends Error {
    constructor(t, e = {}){
        super(t), Object.setPrototypeOf(this, new.target.prototype), this.cause = e.cause, this.requestId = e.requestId, this.displayInfo = e.displayInfo, this.isTransport = e.isTransport;
    }
    get name() {
        return this.kind;
    }
}, BO = class extends kpe {
    get kind() {
        return "RetriableError";
    }
}, rPe = class extends kpe {
    constructor(t, e, n = {}){
        super(t, n), this.action = e;
    }
    get kind() {
        return "ActionRequiredError";
    }
}, bJ = class extends kpe {
    get kind() {
        return "NonRetriableError";
    }
}, V1m = class extends bJ {
    constructor(t){
        const e = `This turn's step limit (${t}) needs an in-process agent loop; the network client cannot send it.`;
        super(e, {
            displayInfo: {
                title: "Step limit not supported",
                detail: e,
                isRetryable: !1
            }
        }), this.maxSteps = t;
    }
}, K1m = class extends bJ {
    constructor(t, e = {}){
        const n = `The model "${t}" is not supported. Please choose a different model.`;
        super(n, {
            ...e,
            displayInfo: {
                ...e.displayInfo,
                title: "Unsupported Model",
                detail: n,
                isRetryable: !1
            }
        }), this.modelName = t;
    }
    get kind() {
        return "IncompatibleModelError";
    }
}, T1 = class extends kpe {
    get kind() {
        return "CancelledError";
    }
}, Y1m = new Set([
    wo.NOT_LOGGED_IN,
    wo.AGENT_REQUIRES_LOGIN,
    wo.AUTH_TOKEN_NOT_FOUND,
    wo.AUTH_TOKEN_EXPIRED,
    wo.INVALID_AUTH_ID,
    wo.UNAUTHORIZED,
    wo.GITHUB_NO_USER_CREDENTIALS,
    wo.GITHUB_USER_NO_ACCESS
]), X1m = new Set([
    wo.FREE_USER_USAGE_LIMIT,
    wo.FREE_USER_RATE_LIMIT_EXCEEDED,
    wo.PRO_USER_ONLY,
    wo.PRO_USER_USAGE_LIMIT,
    wo.PRO_USER_RATE_LIMIT_EXCEEDED,
    wo.RATE_LIMITED,
    wo.RATE_LIMITED_CHANGEABLE,
    wo.GENERIC_RATE_LIMIT_EXCEEDED
]), Z1m = new Set([
    wo.USAGE_PRICING_REQUIRED,
    wo.USAGE_PRICING_REQUIRED_CHANGEABLE
]), Q1m = new Set([
    wo.BAD_API_KEY,
    wo.BAD_USER_API_KEY,
    wo.OUTDATED_CLIENT
]), aUa = new Set([
    wo.USER_ABORTED_REQUEST,
    wo.DEBOUNCED
]), J1m = new Set([
    wo.CUSTOM_MESSAGE
]), ekm = new Map([
    [
        pr.PermissionDenied,
        "Permission Denied"
    ]
]), dYr = [
    "NGHTTP2",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE",
    "socket hang up",
    "Premature close",
    "UND_ERR_SOCKET",
    "ERR_STREAM",
    "protocol error",
    "http/2 stream",
    "ERR_HTTP2_SESSION_ERROR",
    "Session closed with error code",
    "connection aborted"
], lUa = new Set([
    "ENOTFOUND",
    "EAI_AGAIN",
    "EAI_FAIL",
    "ENODATA",
    "ESERVFAIL",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ECONNABORTED"
]), cUa = new RegExp(`\\b(${[
    ...lUa
].join("|")})\\b`), tkm = [
    "IMAGE_TOO_LARGE",
    "MAX_TOKENS",
    "CONVERSATION_TOO_LONG",
    "CONTENT_POLICY",
    "DEPRECATED",
    "MAX_MODE_REQUIRED",
    "MODEL_NO_LONGER_SUPPORTED",
    "UNSUPPORTED_REGION",
    "OUTDATED_CLIENT"
], uUa = "x-cursor-inference-request-error-type", dUa = "AgentWebSocketDeliveryAmbiguousError", nkm = "SummaryPlaceholderRejectedError";

}
