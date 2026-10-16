import { Rs } from "./code_3.js";
import { hg } from "./connect.js";
import { A1 } from "./index_5.ts";
import { gLd } from "./relayed-attempt-failure.ts";
import { x } from "./tslib.es6.js";
import { hu, io } from "./utils_pb.js";
var Hse, jM, c_e, YW, CLd, TLd, hb, ELd, xLd, ILd, ALd, qso, RLd, DLd, FWi, zso, Kso, MLd, Yso, Xso, PLd;
export { ALd, CLd, DLd, ELd, FWi, Hse, ILd, Kso, MLd, PLd, RLd, TLd, Xso, YW, Yso, c_e, hb, jM, qso, xLd, zso };
var __wakaru_FHt_initialized = false;
export function FHt() {
if (__wakaru_FHt_initialized) return;
__wakaru_FHt_initialized = true;
"use strict";
x(), A1(), hu(), hg(), gLd(), Hse = class extends Error {
    constructor(e, t = {}){
        super(e), Object.setPrototypeOf(this, new.target.prototype), this.cause = t.cause, this.requestId = t.requestId, this.displayInfo = t.displayInfo, this.isTransport = t.isTransport;
    }
    get name() {
        return this.kind;
    }
}, jM = class extends Hse {
    get kind() {
        return "RetriableError";
    }
}, c_e = class extends Hse {
    constructor(e, t, n = {}){
        super(e, n), this.action = t;
    }
    get kind() {
        return "ActionRequiredError";
    }
}, YW = class extends Hse {
    get kind() {
        return "NonRetriableError";
    }
}, CLd = class extends YW {
    constructor(e){
        const t = `This turn's step limit (${e}) needs an in-process agent loop; the network client cannot send it.`;
        super(t, {
            displayInfo: {
                title: "Step limit not supported",
                detail: t,
                isRetryable: !1
            }
        }), this.maxSteps = e;
    }
}, TLd = class extends YW {
    constructor(e, t = {}){
        const n = `The model "${e}" is not supported. Please choose a different model.`;
        super(n, {
            ...t,
            displayInfo: {
                ...t.displayInfo,
                title: "Unsupported Model",
                detail: n,
                isRetryable: !1
            }
        }), this.modelName = e;
    }
    get kind() {
        return "IncompatibleModelError";
    }
}, hb = class extends Hse {
    get kind() {
        return "CancelledError";
    }
}, ELd = new Set([
    io.NOT_LOGGED_IN,
    io.AGENT_REQUIRES_LOGIN,
    io.AUTH_TOKEN_NOT_FOUND,
    io.AUTH_TOKEN_EXPIRED,
    io.INVALID_AUTH_ID,
    io.UNAUTHORIZED,
    io.GITHUB_NO_USER_CREDENTIALS,
    io.GITHUB_USER_NO_ACCESS
]), xLd = new Set([
    io.FREE_USER_USAGE_LIMIT,
    io.FREE_USER_RATE_LIMIT_EXCEEDED,
    io.PRO_USER_ONLY,
    io.PRO_USER_USAGE_LIMIT,
    io.PRO_USER_RATE_LIMIT_EXCEEDED,
    io.RATE_LIMITED,
    io.RATE_LIMITED_CHANGEABLE,
    io.GENERIC_RATE_LIMIT_EXCEEDED
]), ILd = new Set([
    io.USAGE_PRICING_REQUIRED,
    io.USAGE_PRICING_REQUIRED_CHANGEABLE
]), ALd = new Set([
    io.BAD_API_KEY,
    io.BAD_USER_API_KEY,
    io.OUTDATED_CLIENT
]), qso = new Set([
    io.USER_ABORTED_REQUEST,
    io.DEBOUNCED
]), RLd = new Set([
    io.CUSTOM_MESSAGE
]), DLd = new Map([
    [
        Rs.PermissionDenied,
        "Permission Denied"
    ]
]), FWi = [
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
], zso = new Set([
    "ENOTFOUND",
    "EAI_AGAIN",
    "EAI_FAIL",
    "ENODATA",
    "ESERVFAIL",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ECONNABORTED"
]), Kso = new RegExp(`\\b(${[
    ...zso
].join("|")})\\b`), MLd = [
    "IMAGE_TOO_LARGE",
    "MAX_TOKENS",
    "CONVERSATION_TOO_LONG",
    "CONTENT_POLICY",
    "DEPRECATED",
    "MAX_MODE_REQUIRED",
    "MODEL_NO_LONGER_SUPPORTED",
    "UNSUPPORTED_REGION",
    "OUTDATED_CLIENT"
], Yso = "x-cursor-inference-request-error-type", Xso = "AgentWebSocketDeliveryAmbiguousError", PLd = "SummaryPlaceholderRejectedError";

}
