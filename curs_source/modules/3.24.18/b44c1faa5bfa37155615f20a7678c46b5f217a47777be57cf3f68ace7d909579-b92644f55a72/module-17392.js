"use strict";
require.d(exports, {
    ao: ()=>L,
    PW: ()=>Xt,
    Yv: ()=>F,
    cc: ()=>G,
    i6: ()=>Q,
    SK: ()=>$,
    DN: ()=>U,
    r0: ()=>xt,
    rS: ()=>Qt,
    IQ: ()=>er,
    gZ: ()=>pt,
    T8: ()=>tr,
    EF: ()=>Zt,
    tK: ()=>Ge,
    wq: ()=>Ar,
    qi: ()=>Dt,
    Xs: ()=>c,
    yM: ()=>we,
    W7: ()=>ht,
    RN: ()=>Fr,
    vX: ()=>Nr,
    dI: ()=>Or,
    uu: ()=>ut,
    By: ()=>At,
    fZ: ()=>Ut,
    Wt: ()=>_t,
    P_: ()=>Ft,
    oo: ()=>yr,
    yp: ()=>O
});
var n = require("./module-98875.js"), s = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, o = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class i {
    constructor(e, t, r){
        this.checkpointStream = e, this.checkpointHandler = t, this.ctx = r;
    }
    async run() {
        const e = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const t = s(e, (0, n.VI)(this.ctx.withName("CheckpointController.run")), !1).ctx, r = [];
            for await (const e of this.checkpointStream)r.push(this.checkpointHandler.handleCheckpoint(t, e.checkpoint, e.metadata));
            await Promise.all(r);
        } catch (t) {
            e.error = t, e.hasError = !0;
        } finally{
            o(e);
        }
    }
}
var a = require("./module-9639.js");
function c(e) {
    return void 0 !== e.subagentTypeName && "" !== e.subagentTypeName;
}
const l = (e)=>String(e).replace(/[\r\n]/g, "");
function u(e) {
    return {
        ...void 0 !== e.parentRequestId ? {
            "x-parent-request-id": l(e.parentRequestId)
        } : {},
        ...void 0 !== e.rootParentRequestId ? {
            "x-root-parent-request-id": l(e.rootParentRequestId)
        } : {},
        ...void 0 !== e.parentAgentToolCallId ? {
            "x-parent-agent-tool-call-id": l(e.parentAgentToolCallId)
        } : {},
        ...!0 === e.directMetaParentChildSubagent ? {
            "x-direct-meta-parent-child-subagent": "true"
        } : {}
    };
}
const d = "x-inference-authentication-jwt";
function p() {
    const e = globalThis.process?.env, t = e?.INFERENCE_PROXY_JWT?.trim();
    return void 0 === t || "" === t || t.startsWith("$") ? {} : {
        [d]: t
    };
}
var m = require("./module-57124.js"), h = require("./module-14101.js"), f = require("./module-27322.js"), g = require("./module-33002.js"), y = require("./module-37949.js"), w = require("./module-70144.js"), v = require("./module-69584.js"), _ = require("./module-68100.js"), A = require("./module-55094.js"), S = require("./module-62671.js"), b = require("./module-77598.js"), E = require("./module-73024.js");
const I = "/dev/urandom";
let C, k = !1;
function x() {
    const e = function(e) {
        if (!k) try {
            void 0 === C && (C = (0, E.openSync)(I, "r"));
            const t = Buffer.alloc(e);
            let r = 0;
            for(; r < e;){
                const n = (0, E.readSync)(C, t, r, e - r, null);
                if (n <= 0) return;
                r += n;
            }
            return t;
        } catch  {
            if (k = !0, void 0 !== C) {
                try {
                    (0, E.closeSync)(C);
                } catch  {}
                C = void 0;
            }
            return;
        }
    }(16);
    return void 0 === e ? (0, b.randomUUID)({
        disableEntropyCache: !0
    }) : function(e) {
        const t = e[6] ?? 0, r = e[8] ?? 0;
        e[6] = 15 & t | 64, e[8] = 63 & r | 128;
        const n = e.toString("hex");
        return `${n.slice(0, 8)}-${n.slice(8, 12)}-${n.slice(12, 16)}-${n.slice(16, 20)}-${n.slice(20)}`;
    }(e);
}
var T = require("./module-91434.js"), R = require("./module-36038.js"), B = require("./module-84959.js"), P = require("./module-2788.js"), J = require("./module-67918.js"), M = require("./module-81958.js");
const q = "relayedAttemptFailure", D = M.Ik({
    transport: M.zM(),
    stallAborted: M.zM(),
    errorName: M.Yj(),
    connectCode: M.ai().optional(),
    connectCodeName: M.Yj().optional(),
    connectCause: M.Ik({
        code: M.KC([
            M.Yj(),
            M.ai()
        ]).optional(),
        name: M.Yj().optional()
    }).optional(),
    transportFailureKind: M.Yj().optional(),
    loop: M.Yj().optional(),
    transportMode: M.Yj().optional()
});
function O(e, t) {
    const r = e.clone();
    return r.details ??= new J.CustomErrorDetails, r.details.additionalInfo[q] = JSON.stringify(t), r;
}
function N(e) {
    const t = e?.details?.additionalInfo[q];
    if (void 0 !== t) try {
        const e = D.safeParse(JSON.parse(t));
        return e.success ? e.data : void 0;
    } catch  {
        return;
    }
}
class F extends Error {
    constructor(e, t = {}){
        super(e), Object.setPrototypeOf(this, new.target.prototype), this.cause = t.cause, this.requestId = t.requestId, this.displayInfo = t.displayInfo, this.isTransport = t.isTransport;
    }
    get name() {
        return this.kind;
    }
}
class U extends F {
    get kind() {
        return "RetriableError";
    }
}
class L extends F {
    constructor(e, t, r = {}){
        super(e, r), this.action = t;
    }
    get kind() {
        return "ActionRequiredError";
    }
}
class $ extends F {
    get kind() {
        return "NonRetriableError";
    }
}
class Q extends $ {
    constructor(e, t = {}){
        const r = `Stopped at this turn's step limit (${e}).`;
        super(r, {
            ...t,
            displayInfo: {
                ...t.displayInfo,
                title: "Maximum steps reached",
                detail: r,
                isRetryable: !1
            }
        }), this.maxSteps = e;
    }
    get kind() {
        return "MaxStepsReachedError";
    }
}
class j extends $ {
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
}
class G extends F {
    get kind() {
        return "CancelledError";
    }
}
const H = new Set([
    J.ErrorDetails_Error.NOT_LOGGED_IN,
    J.ErrorDetails_Error.AGENT_REQUIRES_LOGIN,
    J.ErrorDetails_Error.AUTH_TOKEN_NOT_FOUND,
    J.ErrorDetails_Error.AUTH_TOKEN_EXPIRED,
    J.ErrorDetails_Error.INVALID_AUTH_ID,
    J.ErrorDetails_Error.UNAUTHORIZED,
    J.ErrorDetails_Error.GITHUB_NO_USER_CREDENTIALS,
    J.ErrorDetails_Error.GITHUB_USER_NO_ACCESS
]), z = new Set([
    J.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
    J.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED,
    J.ErrorDetails_Error.PRO_USER_ONLY,
    J.ErrorDetails_Error.PRO_USER_USAGE_LIMIT,
    J.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED,
    J.ErrorDetails_Error.RATE_LIMITED,
    J.ErrorDetails_Error.RATE_LIMITED_CHANGEABLE,
    J.ErrorDetails_Error.GENERIC_RATE_LIMIT_EXCEEDED
]), W = new Set([
    J.ErrorDetails_Error.USAGE_PRICING_REQUIRED,
    J.ErrorDetails_Error.USAGE_PRICING_REQUIRED_CHANGEABLE
]), V = new Set([
    J.ErrorDetails_Error.BAD_API_KEY,
    J.ErrorDetails_Error.BAD_USER_API_KEY,
    J.ErrorDetails_Error.OUTDATED_CLIENT
]), K = new Set([
    J.ErrorDetails_Error.USER_ABORTED_REQUEST,
    J.ErrorDetails_Error.DEBOUNCED
]), Y = new Set([
    J.ErrorDetails_Error.CUSTOM_MESSAGE
]), Z = new Map([
    [
        B.C.PermissionDenied,
        "Permission Denied"
    ]
]), X = [
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
], ee = new Set([
    "ENOTFOUND",
    "EAI_AGAIN",
    "EAI_FAIL",
    "ENODATA",
    "ESERVFAIL",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ECONNABORTED"
]), te = new RegExp(`\\b(${[
    ...ee
].join("|")})\\b`), re = [
    "IMAGE_TOO_LARGE",
    "MAX_TOKENS",
    "CONVERSATION_TOO_LONG",
    "CONTENT_POLICY",
    "DEPRECATED",
    "MAX_MODE_REQUIRED",
    "MODEL_NO_LONGER_SUPPORTED",
    "UNSUPPORTED_REGION",
    "OUTDATED_CLIENT"
], ne = "x-cursor-inference-request-error-type", se = "AgentWebSocketDeliveryAmbiguousError";
function oe(e, t = {}) {
    const { requestId: r } = t;
    if (e instanceof F) return e;
    if (ie(e)) return function(e, t) {
        const r = ce(e), n = r.code, s = le(e), o = void 0 === s ? void 0 : function(e) {
            if (void 0 === e.details?.additionalInfo[q]) return e;
            const t = e.clone();
            return void 0 !== t.details && (delete t.details.additionalInfo[q], t.details.equals(new J.CustomErrorDetails) && (t.details = void 0)), t;
        }(s), i = {
            title: o?.details?.title,
            detail: o?.details?.detail,
            isRetryable: o?.details?.isRetryable,
            connectCode: n,
            errorCode: o?.error,
            inferenceRequestErrorType: ue(r, ne) ?? ue(e, ne),
            errorDetails: o
        }, a = {
            cause: e,
            requestId: t,
            displayInfo: i,
            ...!0 === N(s)?.transport ? {
                isTransport: !0
            } : {}
        };
        if (n === B.C.Canceled || n === B.C.Aborted) return ge(e) ? new U(e.message, a) : new G(e.message, a);
        if (void 0 !== o?.error) {
            const t = o.error;
            if (K.has(t)) return new G(he(e, o), a);
            const r = o.details?.analyticsMetadata?.actionRequired;
            if (void 0 !== r && "" !== r) return new L(he(e, o), r, a);
            if (H.has(t)) return new L(he(e, o), "login", a);
            if (z.has(t)) return new L(he(e, o), "upgrade", a);
            if (W.has(t)) return new L(he(e, o), "payment", a);
            if (V.has(t)) return new L(he(e, o), "config", a);
            if (Y.has(t) && !0 !== o.details?.isRetryable) return new $(he(e, o), a);
            if (!1 === o.details?.isRetryable) return new $(he(e, o), a);
        }
        if (n === B.C.Unauthenticated) return new L(e.message, "login", {
            ...a,
            displayInfo: ae(i, "Sign in required", r)
        });
        const c = Z.get(n);
        if (void 0 !== c && !0 !== o?.details?.isRetryable && !ge(e)) return new $(he(e, o), {
            ...a,
            displayInfo: ae(i, c, r)
        });
        return new U(e.message, a);
    }(e, r);
    const n = (0, f.y_)(e);
    if (void 0 !== n) return new $(n.message, {
        cause: e instanceof Error ? e : void 0,
        requestId: r,
        displayInfo: {
            title: "Conversation data missing",
            detail: n.message,
            isRetryable: !1
        }
    });
    const s = function(e) {
        const t = new Set;
        let r = e;
        for(; r instanceof Error && !t.has(r);){
            if (r.name === fe) return r;
            t.add(r), r = r.cause;
        }
        return;
    }(e);
    if (void 0 !== s) return new $(s.message, {
        cause: e instanceof Error ? e : void 0,
        requestId: r,
        displayInfo: {
            title: "Context summarization failed",
            detail: s.message,
            isRetryable: !1
        }
    });
    if (e instanceof Error) {
        if ("AbortError" === e.name) return new G(e.message, {
            cause: e,
            requestId: r
        });
        if (e.name === se) return new U(e.message, {
            cause: e,
            requestId: r,
            isTransport: !0
        });
        if (ge(e)) return new U(e.message, {
            cause: e,
            requestId: r
        });
    }
    const o = e instanceof Error ? e.message : String(e);
    return new U(o, {
        cause: e instanceof Error ? e : void 0,
        requestId: r
    });
}
function ie(e) {
    if (null === e || "object" != typeof e || !("code" in e) || !("name" in e)) return !1;
    if ("ConnectError" === e.name) return !0;
    const t = e;
    return "string" == typeof t.rawMessage && Array.isArray(t.details) && "function" == typeof t.findDetails;
}
function ae(e, t, r) {
    return {
        ...e,
        title: e.title || t,
        detail: e.detail || me(r),
        isRetryable: e.isRetryable ?? !1
    };
}
function ce(e) {
    let t = e;
    for(let e = 0; e < 10 && t.code === B.C.Unknown; e++){
        const e = t.cause;
        if (!ie(e)) break;
        t = e;
    }
    return t;
}
function le(e) {
    let t = e;
    for(let e = 0; e < 10 && ie(t); e++){
        try {
            const e = t.findDetails?.(J.ErrorDetails);
            if (void 0 !== e && e.length > 0) return e[0];
        } catch  {}
        t = t.cause;
    }
}
function ue(e, t) {
    const r = e.metadata;
    if (null !== r && "object" == typeof r && "function" == typeof r.get) return r.get(t) ?? void 0;
}
function de(e) {
    let t = e;
    for(let e = 0; e < 10 && "object" == typeof t && null !== t; e++){
        if (ie(t)) return t;
        t = "cause" in t ? t.cause : void 0;
    }
}
function pe(e) {
    const t = de(e);
    return void 0 === t ? void 0 : ce(t);
}
function me(e) {
    const t = e.rawMessage;
    return "string" == typeof t ? t : e.message.replace(/^\[[a-z_]+\] /, "");
}
function he(e, t) {
    if (t?.details) {
        const { title: r, detail: n } = t.details;
        return r && n ? `${r} ${n}` : r || n || e.message;
    }
    return e.message;
}
const fe = "SummaryPlaceholderRejectedError";
function ge(e) {
    const t = new Set;
    let r = e;
    for(; r instanceof Error && !t.has(r);){
        t.add(r);
        const e = `${r.name}: ${r.message}`;
        if (X.some((t)=>e.includes(t)) || te.test(e)) return !0;
        const n = r.code;
        if ("string" == typeof n && (X.some((e)=>n.includes(e)) || ee.has(n))) return !0;
        r = r.cause;
    }
    return !1;
}
function ye(e) {
    return X.some((t)=>e.includes(t)) || te.test(e);
}
function we(e) {
    return !0 === e.isTransport || (e.cause instanceof Error ? ge(e.cause) : ye(e.message));
}
function ve(e) {
    return e instanceof F && e.cause instanceof Error ? ge(e.cause) : e instanceof Error ? ge(e) : "string" == typeof e && ye(e);
}
function _e(e) {
    return void 0 !== e && e > 0;
}
function Ae(e) {
    return e + 1;
}
function Se(e) {
    return Object.defineProperty(e, "code", {
        value: "connection_stalled",
        enumerable: !0,
        configurable: !0
    }), e;
}
function be(e) {
    const { cause: t, requestId: r, transportErrorRetries: n, connectCode: s } = e;
    return _e(n) ? Se(new U("Connection stalled repeatedly", {
        cause: t,
        requestId: r,
        displayInfo: {
            title: "Connection stalled",
            detail: `The connection stalled ${Ae(n)} times. Please check your network connection and try again.`,
            isRetryable: !0,
            connectCode: s
        }
    })) : Se(new U("Connection stalled", {
        cause: t,
        requestId: r,
        displayInfo: {
            title: "Connection stalled",
            detail: "The connection stalled. Please try again.",
            isRetryable: !0,
            connectCode: s
        }
    }));
}
function Ee(e) {
    let t = e.cause;
    for(let e = 0; e < 10 && void 0 !== t; e++){
        if (t instanceof Error && "AbortError" === t.name) return !0;
        if (ie(t) && (t.code === B.C.Canceled || t.code === B.C.Aborted)) return !0;
        t = null !== t && "object" == typeof t && "cause" in t ? t.cause : void 0;
    }
    return !1;
}
var Ie = require("./module-92801.js"), Ce = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ke = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class xe extends Error {
    constructor(e){
        super(e), this.name = "LostConnection";
    }
}
class Te {
    constructor(e, t, r){
        this.serverStream = e, this.clientStream = t, this.controlledExecManager = r;
    }
    async run(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Ce(t, (0, n.VI)(e.withName("ClientExecController.run")), !1);
            const r = [];
            try {
                for await (const t of this.serverStream){
                    if ((0, R.isMessage)(t, A.Nv)) {
                        this.controlledExecManager.handleControlMessage(t);
                        continue;
                    }
                    const s = (async ()=>{
                        const r = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            let s, o;
                            if (t.spanContext) {
                                const r = t.spanContext;
                                s = (0, n.V5)({
                                    traceId: r.traceId,
                                    spanId: r.spanId,
                                    traceFlags: r.traceFlags ?? 1
                                }, "exec.handle", e), o = (0, n.fU)(s);
                            } else s = e;
                            Ce(r, o ? new n.r2(s, o) : void 0, !1);
                            const i = this.controlledExecManager.handle(s, t);
                            for await (const e of i)await this.clientStream.write(e);
                        } catch (e) {
                            r.error = e, r.hasError = !0;
                        } finally{
                            ke(r);
                        }
                    })();
                    r.push(s);
                }
                await Promise.all(r);
            } catch (e) {
                if (e instanceof Ie.T && "protocol error: missing EndStreamResponse" === e.rawMessage) throw new xe(e.message);
                if (e instanceof Ie.T && e.code === B.C.Aborted) {
                    const t = e.cause;
                    if (t instanceof Error && "code" in t && "string" == typeof t.code && t.code.includes("ERR_STREAM_WRITE_AFTER_END")) throw new xe(e.message);
                } else {
                    if (e instanceof T.W2) throw new xe(e.message);
                    if (e instanceof Ie.T && e.code === B.C.Internal) {
                        const t = e.cause;
                        if (t instanceof Error && t.message.includes("NGHTTP2_PROTOCOL_ERROR")) throw new xe(e.message);
                    }
                }
                throw e;
            }
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            ke(t);
        }
    }
}
var Re = require("./module-38812.js"), Be = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Pe = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Je = (0, y.h)("ClientInteractionController"), Me = new Set([
    "askQuestionInteractionQuery",
    "switchModeRequestQuery",
    "mcpAuthRequestQuery",
    "connectScmRequestQuery"
]);
class qe {
    constructor(e, t, r, n){
        this.interactionStream = e, this.interactionListener = t, this.queryResponseStream = r, this.stallSuspender = n, this.pendingHumanQueries = 0;
    }
    async run(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = Be(t, (0, n.VI)(e.withName("ClientInteractionController.run")), !1);
            e = r.ctx;
            let s, o = Promise.resolve();
            for await (const t of this.interactionStream){
                const r = ()=>"interactionQuery" === t.case ? this.handleInteractionQuery(e, t.value) : this.handleInteractionUpdate(e, t.value);
                o = o.then(r).catch((r)=>{
                    Je.error(e, "Error handling interaction message", r, {
                        messageCase: t.case
                    }), s ??= r;
                });
            }
            if (await o, void 0 !== s) throw s;
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Pe(t);
        }
    }
    async handleInteractionUpdate(e, t) {
        await this.interactionListener.sendUpdate(e, t);
    }
    handleInteractionQuery(e, t) {
        const r = void 0 !== t.query.case && Me.has(t.query.case);
        let n = !1;
        const s = ()=>{
            r && !n && (n = !0, this.pendingHumanQueries--, 0 === this.pendingHumanQueries && this.stallSuspender?.setPaused(!1));
        };
        r && (this.pendingHumanQueries++, 1 === this.pendingHumanQueries && this.stallSuspender?.setPaused(!0)), (async ()=>this.interactionListener.query(e, t))().catch((r)=>{
            const n = (0, Re.oF)(t, "The client could not show this request to the user");
            if (!(n instanceof v.Y5)) throw r;
            return Je.error(e, "Error handling interaction query; answering with a fail-closed response", {
                queryCase: t.query.case,
                error: r
            }), n;
        }).then((e)=>(s(), this.queryResponseStream.write(e))).catch((t)=>{
            Je.error(e, "Error handling interaction query", t);
        }).finally(s);
    }
}
async function De(e, t) {
    let r;
    try {
        r = await e(t.signal);
    } catch (e) {
        if (t.isCanceled()) throw new G("User aborted request");
        throw new $("Failed to mint LLM Gateway credential", {
            cause: e instanceof Error ? e : void 0,
            requestId: t.requestId
        });
    }
    if (void 0 === r) throw new $("LLM Gateway credential minter returned no credential", {
        requestId: t.requestId
    });
    if ("" === r.bearerToken.trim()) throw new $("LLM Gateway credential minter returned an empty bearer token", {
        requestId: t.requestId
    });
    return new v.Ibo({
        bearerToken: r.bearerToken
    });
}
var Oe = require("./module-46144.js"), Ne = require("./module-89396.js"), Fe = require("./module-65716.js");
const Ue = 15728640, Le = 1048576, $e = (0, Oe.Pu)("agent_client.request_context_blob.prepared", {
    description: "Prepared RequestContext blob references"
}), Qe = (0, Oe.v5)("agent_client.request_context_blob.bytes", {
    description: "Serialized RequestContext bytes staged by the client"
}), je = (0, Oe.v5)("agent_client.request_context_blob.preparation_ms", {
    description: "Time to hydrate, serialize, and hash RequestContext"
});
function Ge(e) {
    switch(e.action.case){
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
            return e.action.value;
        default:
            return;
    }
}
class He {
    constructor(e, t = 62914560){
        this.parent = e, this.maxTransientBytes = t, this.transientBlobs = new Map, this.persistedBlobIds = new Set, this.transientBytes = 0;
    }
    seed(e, t) {
        return this.seedAll([
            {
                blobId: e,
                blobData: t
            }
        ]);
    }
    seedAll(e) {
        const t = new Map;
        for (const { blobId: r, blobData: n } of e)t.set((0, f.nj)(r), n.byteLength);
        let r = this.transientBytes;
        for (const [e, n] of t)r -= this.transientBlobs.get(e)?.byteLength ?? 0, r += n;
        if (r > this.maxTransientBytes) return !1;
        for (const { blobId: t, blobData: r } of e)this.transientBlobs.set((0, f.nj)(t), r);
        return this.transientBytes = r, !0;
    }
    has(e) {
        return this.transientBlobs.has((0, f.nj)(e));
    }
    hasAll(e) {
        return e.every((e)=>this.has(e));
    }
    async getBlob(e, t) {
        const r = (0, f.nj)(t), n = this.transientBlobs.get(r);
        return void 0 === n ? await this.parent.getBlob(e, t) : n;
    }
    async persistForRemoteRead(e, t) {
        const r = (0, f.nj)(t), n = this.transientBlobs.get(r);
        void 0 === n || this.persistedBlobIds.has(r) || (await (0, Fe.O$)(()=>this.parent.setBlob(e, t, n), 2), this.persistedBlobIds.add(r));
    }
    async setBlob(e, t, r) {
        await this.parent.setBlob(e, t, r);
    }
    async setBlobLocallyOnly(e, t, r) {
        await this.parent.setBlobLocallyOnly(e, t, r);
    }
    async flush(e) {
        await this.parent.flush(e);
    }
}
async function ze({ ctx: e, action: t, resources: r, blobStore: n, mode: s, maxBlobBytes: o, maxInlineDynamicBytes: i = 1048576, notesSessionId: c }) {
    const l = performance.now(), u = Ge(t);
    if (void 0 === u) return {
        kind: "not_applicable"
    };
    if ("legacy" === s) return t.requestContextParts = void 0, {
        kind: "legacy"
    };
    if (void 0 !== t.requestContextParts) {
        const e = void 0 === (d = t.requestContextParts) ? [] : [
            d.rulesBlobId,
            d.skillsBlobId,
            d.subagentsBlobId,
            d.mcpsBlobId
        ], r = void 0 !== u.requestContext, o = e.length > 0 && n.hasAll(e);
        if (r || o) {
            const e = t.requestContextParts;
            return "ref_only" === s && r && o && void 0 !== e?.dynamicContext && (u.requestContext = void 0), {
                kind: "already_prepared"
            };
        }
    }
    var d;
    t.requestContextParts = void 0;
    const p = void 0 === u.requestContext, m = u.requestContext ?? await async function({ ctx: e, resources: t, notesSessionId: r }) {
        const n = t.get(a.MZM), s = await n.execute(e, new Ne._K({
            notesSessionId: r
        })), o = "success" === s.result.case ? s.result.value.requestContext : void 0;
        if (void 0 === o) throw new Error(`Failed to compute request context: ${s.result.case}`);
        return o;
    }({
        ctx: e,
        resources: r,
        notesSessionId: c
    }), h = Math.min(Math.max(0, o), Ue), g = await async function({ requestContext: e, mode: t, maxBlobBytes: r, maxInlineDynamicBytes: n }) {
        const s = (0, a.Nw4)(e);
        let o;
        if ("ref_only" === t && (o = s.dynamicContext.toBinary().byteLength, o > n)) return;
        const i = s.rules.toBinary(), c = s.skills.toBinary(), l = s.subagents.toBinary(), u = s.mcps.toBinary(), d = i.byteLength + c.byteLength + l.byteLength + u.byteLength;
        if (d > r) return;
        const [p, m, h, g] = await Promise.all([
            (0, f.Bk)(i),
            (0, f.Bk)(c),
            (0, f.Bk)(l),
            (0, f.Bk)(u)
        ]), y = [
            {
                blobId: p,
                blobData: i
            },
            {
                blobId: m,
                blobData: c
            },
            {
                blobId: h,
                blobData: l
            },
            {
                blobId: g,
                blobData: u
            }
        ], w = new Ne.sG({
            rulesBlobId: p,
            rulesByteLength: i.byteLength,
            skillsBlobId: m,
            skillsByteLength: c.byteLength,
            subagentsBlobId: h,
            subagentsByteLength: l.byteLength,
            mcpsBlobId: g,
            mcpsByteLength: u.byteLength,
            dynamicContext: "ref_only" === t ? s.dynamicContext : void 0
        });
        return "dual" === t ? {
            kind: "dual",
            inlineContext: e,
            byteLength: d,
            parts: w
        } : {
            kind: "ref_only",
            stagedBlobs: y,
            byteLength: d,
            parts: w,
            dynamicByteLength: o
        };
    }({
        requestContext: m,
        mode: s,
        maxBlobBytes: h,
        maxInlineDynamicBytes: Math.min(Math.max(0, i), h)
    });
    if (void 0 === g) return u.requestContext = m, t.requestContextParts = void 0, $e.increment(e, 1, {
        mode: s,
        outcome: "oversized"
    }), {
        kind: "oversized"
    };
    if ("ref_only" === g.kind && !n.seedAll(g.stagedBlobs)) return u.requestContext = m, t.requestContextParts = void 0, $e.increment(e, 1, {
        mode: s,
        outcome: "transient_budget_exceeded"
    }), {
        kind: "transient_budget_exceeded"
    };
    u.requestContext = "dual" === g.kind ? g.inlineContext : void 0, t.requestContextParts = g.parts;
    const y = g.byteLength;
    return $e.increment(e, 1, {
        mode: s,
        outcome: p ? "hydrated" : "inline"
    }), Qe.histogram(e, y, {
        mode: s
    }), je.histogram(e, performance.now() - l, {
        mode: s
    }), {
        kind: "prepared",
        byteLength: y,
        hydrated: p,
        rulesByteLength: g.parts.rulesByteLength,
        skillsByteLength: g.parts.skillsByteLength,
        subagentsByteLength: g.parts.subagentsByteLength,
        mcpsByteLength: g.parts.mcpsByteLength,
        dynamicByteLength: "ref_only" === g.kind ? g.dynamicByteLength : void 0
    };
}
function We(e) {
    return void 0 !== e && Number.isFinite(e) && Number.isInteger(e);
}
function Ve(e, t) {
    const { rulesByteLength: r, skillsByteLength: n } = e, { subagentsByteLength: s, mcpsByteLength: o } = e;
    if (!(We(r) && We(n) && We(s) && We(o))) return;
    const i = t?.dynamicByteLength;
    return {
        bytes: r + n + s + o + (i ?? 0),
        bytesSource: "blob_parts",
        rulesBytes: r,
        skillsBytes: n,
        mcpBytes: o,
        subagentsBytes: s,
        ...We(i) ? {
            dynamicBytes: i
        } : {}
    };
}
const Ke = [
    "alpn_failure",
    "poll_seqno_gap",
    "append_fatal",
    "http_464",
    "http_404_unimplemented",
    "socket_reset",
    "stream_closed_early",
    "idle_deadline",
    "stall",
    "other"
];
const Ye = "cursorBidiAppendFatal", Ze = "ALPN protocol failed to negotiate", Xe = "Unexpected seqno", et = "http1_poll", tt = /\bHTTP (\d{3})\b/, rt = "unsupported content type null";
function nt(e) {
    const t = e.message;
    return "string" == typeof t ? t : "";
}
function st(e) {
    return e instanceof Error && ("AbortError" === e.name || e.name === se);
}
function ot(e, t = {}) {
    const r = function(e) {
        const t = [], r = new Set;
        let n = e;
        for(; "object" == typeof n && null !== n && !r.has(n);)r.add(n), t.push(n), n = "cause" in n ? n.cause : void 0;
        return t;
    }(e);
    if (r.some((e)=>Ye in e)) return "append_fatal";
    const n = r.map(nt), s = (e)=>n.some((t)=>t.includes(e)), o = function(e) {
        return pe(e)?.code;
    }(e), i = void 0 === t.transportMode;
    if (i && o === B.C.Unavailable && s(Ze)) return "alpn_failure";
    if ((i || t.transportMode === et) && o === B.C.Unavailable && s(Xe)) return "poll_seqno_gap";
    const a = n.map((e)=>tt.exec(e)?.[1]).find((e)=>void 0 !== e);
    return i && o === B.C.Unknown && "464" === a ? "http_464" : i && o === B.C.Unimplemented && "404" === a ? "http_404_unimplemented" : o === B.C.DeadlineExceeded && function(e) {
        const t = de(e);
        return void 0 === t ? void 0 : le(t)?.error;
    }(e) === J.ErrorDetails_Error.TIMEOUT ? "idle_deadline" : i && o === B.C.Unknown && s(rt) ? "stream_closed_early" : ve(e) || function(e) {
        return e instanceof Error && !0 === e.isTransport;
    }(e) || r.some(st) ? "socket_reset" : "other";
}
const it = {
    serverCap: 3,
    transportCap: 10
}, at = 2, ct = 18e4, lt = {
    alpn_failure: "server",
    poll_seqno_gap: "server",
    append_fatal: "by_signature",
    http_464: "server",
    http_404_unimplemented: "server",
    socket_reset: "transport",
    stream_closed_early: "server",
    idle_deadline: "server",
    stall: "transport",
    other: "server"
};
function ut(e, t, r = it) {
    return {
        serverCap: r.serverCap,
        transportCap: !0 === e.isRunningInTest ? Math.min(r.transportCap, at) : r.transportCap,
        endless: t.endlessRetries,
        retryAllInference: !0 === e.retryAllInferenceErrors
    };
}
function dt(e) {
    return {
        action: "retry",
        countAsServerError: !0,
        countAsTransportError: !1,
        transportFailureKind: e
    };
}
function pt(e, t, r) {
    const n = r.attemptRequestId, s = !0 === t.endless, o = r.retriesEnabled || s;
    let i = e instanceof F ? e : oe(e, {
        requestId: n
    });
    const a = i instanceof G && ("owner" === r.abortOrigin || function(e) {
        const t = e.displayInfo?.errorCode;
        return void 0 !== t && K.has(t);
    }(i)), c = "stall_detector" === r.abortOrigin && !a && (i instanceof G || i instanceof U), l = "owner" === r.abortOrigin && i instanceof U && Ee(i), u = function(e, t, r) {
        return t.stalled ? "stall" : t.userStop ? "other" : ot(e, r);
    }(e, {
        stalled: c,
        userStop: a || l
    }, {
        transportMode: r.attemptTransportMode
    }), d = (e, t = {})=>({
            action: "throw",
            error: e,
            ...t,
            transportFailureKind: u
        }), p = (e, n)=>o ? !s && r.transportErrorRetries >= t.transportCap ? d(e(), {
            countAsTransportError: !0
        }) : function(e) {
            return {
                action: "retry",
                countAsServerError: !1,
                countAsTransportError: !0,
                transportFailureKind: e
            };
        }(u) : d(n(), {
            countAsTransportError: !0
        }), m = ()=>({
            cause: i.cause,
            requestId: n,
            transportErrorRetries: r.transportErrorRetries,
            connectCode: i.displayInfo?.connectCode
        });
    if (c) {
        if (o && void 0 !== r.stallRetryElapsedMs && r.stallRetryElapsedMs >= ct) return d(be(m()), {
            countAsTransportError: !0
        });
        const e = p(()=>be(m()), ()=>be({
                ...m(),
                transportErrorRetries: void 0
            }));
        return "retry" === e.action ? {
            ...e,
            stall: !0
        } : e;
    }
    return i instanceof G && !a && Ee(i) && (i = new U(i.message, {
        cause: i.cause,
        requestId: n,
        displayInfo: i.displayInfo,
        isTransport: !0
    })), l ? d(new G(i.message, {
        cause: i.cause,
        requestId: n,
        displayInfo: i.displayInfo
    })) : !0 === t.retryAllInference && (i instanceof L || i instanceof $) && function(e) {
        const t = e.displayInfo?.inferenceRequestErrorType;
        return void 0 !== t && !re.some((e)=>e === t);
    }(i) ? !s && r.serverErrorRetries >= t.serverCap ? d(i) : dt(u) : i instanceof G || i instanceof L || i instanceof $ ? d(i) : i instanceof U && (!0 === i.isTransport || function(e, t) {
        const r = lt[e];
        return "by_signature" === r ? ve(t) : "transport" === r;
    }(u, i) || "owner" !== r.abortOrigin && Ee(i)) ? p(()=>(function(e) {
            const { cause: t, requestId: r, transportErrorRetries: n, connectCode: s } = e;
            return _e(n) ? new U("Connection failed repeatedly", {
                cause: t,
                requestId: r,
                displayInfo: {
                    title: "Connection failed",
                    detail: `The connection failed ${Ae(n)} times. Please check your network connection and try again.`,
                    isRetryable: !0,
                    connectCode: s
                }
            }) : new U("Connection failed", {
                cause: t,
                requestId: r,
                displayInfo: {
                    title: "Connection failed",
                    detail: "The connection was interrupted. Please check your network connection and try again.",
                    isRetryable: !0,
                    connectCode: s
                }
            });
        })(m()), ()=>i) : o ? !s && r.serverErrorRetries >= t.serverCap ? d(function(e) {
        const { classified: t, requestId: r, serverErrorRetries: n } = e, s = t.displayInfo;
        return new U(t.message, {
            cause: t.cause,
            requestId: r,
            displayInfo: {
                ...s,
                title: s?.title || "Server error",
                detail: s?.detail || `The server failed ${Ae(n)} times. Please try again, or contact support if the issue persists.`,
                isRetryable: !0
            }
        });
    }({
        classified: i,
        requestId: n,
        serverErrorRetries: r.serverErrorRetries
    })) : dt(u) : d(i);
}
var mt = require("./module-34175.js");
function ht(e) {
    return new mt.Or({
        mcpTools: e.map((e)=>({
                name: e.name,
                providerIdentifier: e.providerIdentifier,
                toolName: e.toolName,
                description: e.description,
                inputSchema: e.inputSchema ? R.Value.fromJson(e.inputSchema) : void 0,
                outputSchemaJson: void 0 !== e.outputSchema ? JSON.stringify(e.outputSchema) : void 0
            }))
    });
}
const ft = (0, y.h)("@anysphere/agent-client:stall-detector"), gt = 3e4, yt = 2e4, wt = 4294967295, vt = (e)=>"number" == typeof e && Number.isFinite(e) ? e : void 0;
function _t(e) {
    const t = vt(e);
    if (void 0 !== t) return Math.min(Math.max(Math.round(t), 0), wt);
}
function At(e, t) {
    const r = vt(e?.failTimeoutMs) ?? gt, n = r > 0 && !0 !== t?.isRunningInTest ? Math.max(r, yt) : r, s = vt(e?.advisoryTimeoutMs);
    return {
        failThresholdMs: n,
        advisoryThresholdMs: void 0 !== s && s > 0 && (n <= 0 || s < n) ? s : void 0
    };
}
const St = {
    nal: "[NAL client stall detector]",
    local_loop: "[local-loop client stall detector]",
    module: "[module client stall detector]"
}, bt = (0, Oe.Pu)("agent_client.stream.stall.count", {
    description: "Number of bidirectional stream stalls detected",
    labelNames: [
        "activity_type",
        "message_type",
        "loop"
    ]
}), Et = (0, Oe.v5)("agent_client.stream.stall.duration_ms", {
    description: "Duration of stream stalls in milliseconds",
    labelNames: [
        "activity_type",
        "loop"
    ]
}), It = (0, Oe.Pu)("agent_client.stream.did_stall", {
    description: "Number of streams that experienced at least one stall",
    labelNames: [
        "loop"
    ]
}), Ct = (0, Oe.Pu)("agent_client.stream.total", {
    description: "Total number of streams monitored",
    labelNames: [
        "loop"
    ]
});
class kt {
    constructor(){
        this.handlers = new Map;
    }
    track(e, t) {
        return this.handlers.set(e, {
            name: e,
            state: "started",
            startedAt: Date.now()
        }), t.then((t)=>{
            const r = this.handlers.get(e);
            return r && (r.state = "completed", r.endedAt = Date.now()), t;
        }).catch((t)=>{
            const r = this.handlers.get(e);
            throw r && (r.state = "errored", r.endedAt = Date.now(), r.error = t instanceof Error ? t.message : String(t)), t;
        });
    }
    getHandlerStates() {
        const e = Date.now(), t = {};
        for (const [r, n] of this.handlers)t[r] = {
            state: n.state,
            durationMs: (n.endedAt ?? e) - n.startedAt,
            error: n.error
        };
        return t;
    }
}
class xt {
    constructor(e, t, r){
        this.lastActivityTime = Date.now(), this.lastMeaningfulActivityTime = Date.now(), this.hasLogged = !1, this.hasLoggedAdvisory = !1, this.hasLoggedHeartbeatOnly = !1, this.hasEverStalled = !1, this.paused = !1, this.disposed = !1, this.activityHistory = [], this.ctx = e, "number" == typeof t ? (this.thresholdMs = t, this.advisoryThresholdMs = void 0, this.heartbeatOnlyThresholdMs = 3 * t, this.onStall = r, this.onStallCallback = void 0, this.handlerTracker = void 0, this.loop = "nal") : (this.thresholdMs = t.thresholdMs, this.advisoryThresholdMs = t.advisoryThresholdMs, this.heartbeatOnlyThresholdMs = t.heartbeatOnlyThresholdMs ?? 3 * t.thresholdMs, this.onStall = t.onStall, this.onStallCallback = t.onStallCallback, this.handlerTracker = t.handlerTracker, this.loop = t.loop ?? "nal"), this.logPrefix = St[this.loop], this.startTimer(), this.startAdvisoryTimer(), this.startHeartbeatOnlyTimer(), Ct.increment(this.ctx, 1, {
            loop: this.loop
        }), this.onCtxSignalAbort = ()=>{
            this.trackActivity("ctx.signal", "abort"), this.abortedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream aborted while stall detector active`, "aborted");
        }, e.signal.addEventListener("abort", this.onCtxSignalAbort);
    }
    trackActivity(e, t) {
        const r = {
            type: e,
            messageType: t
        };
        this.lastActivity = r, "inbound_message" === e ? this.lastInboundMessage = r : "outbound_write" === e && (this.lastOutboundMessage = r);
        const n = this.activityHistory.at(-1);
        n?.type === e && n.messageType === t ? n.repeat = (n.repeat ?? 1) + 1 : (this.activityHistory.push(r), this.activityHistory.length > 10 && this.activityHistory.shift());
    }
    reset(e = "inbound_message", t, r = !0) {
        if (this.trackActivity(e, t), "inbound_message" === e) {
            const e = this.hasLogged, t = this.hasLoggedAdvisory, n = this.hasLoggedHeartbeatOnly;
            e && (this.hasLogged = !1, this.emitLogAndMetric()), n && r && (this.hasLoggedHeartbeatOnly = !1), t && (this.hasLoggedAdvisory = !1), this.lastActivityTime = Date.now(), r && (this.lastMeaningfulActivityTime = Date.now()), void 0 === this.timer && this.startTimer(), void 0 === this.advisoryTimer && this.startAdvisoryTimer(), r && void 0 === this.heartbeatOnlyTimer && this.startHeartbeatOnlyTimer();
        }
    }
    onStreamEnded() {
        this.trackActivity("stream", "ended"), this.streamEndedAt = Date.now();
    }
    onClientSentHeartbeat() {
        this.lastClientSentHeartbeatAt = Date.now();
    }
    onServerSentHeartbeat() {
        this.lastServerSentHeartbeatAt = Date.now();
    }
    setPaused(e) {
        if (!this.disposed && e !== this.paused && (this.paused = e, !e)) {
            const e = Date.now();
            this.lastActivityTime = e, this.lastMeaningfulActivityTime = e, void 0 === this.timer && this.startTimer(), void 0 === this.advisoryTimer && this.startAdvisoryTimer(), void 0 === this.heartbeatOnlyTimer && this.startHeartbeatOnlyTimer();
        }
    }
    startTimer() {
        if (this.disposed || this.thresholdMs <= 0 || void 0 !== this.timer) return;
        const e = ()=>{
            if (this.paused) return void (this.timer = setTimeout(e, this.thresholdMs));
            const t = this.thresholdMs - (Date.now() - this.lastActivityTime);
            if (t <= 0) return this.timer = void 0, void this.onStallDetected("no_activity");
            this.timer = setTimeout(e, t);
        };
        this.timer = setTimeout(e, this.thresholdMs);
    }
    startAdvisoryTimer() {
        if (this.disposed || void 0 === this.advisoryThresholdMs || this.advisoryThresholdMs <= 0 || void 0 !== this.advisoryTimer) return;
        const e = this.advisoryThresholdMs, t = ()=>{
            if (this.paused) return void (this.advisoryTimer = setTimeout(t, e));
            const r = e - (Date.now() - this.lastActivityTime);
            if (r <= 0) return this.advisoryTimer = void 0, void this.onAdvisoryDetected();
            this.advisoryTimer = setTimeout(t, r);
        };
        this.advisoryTimer = setTimeout(t, e);
    }
    startHeartbeatOnlyTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.heartbeatOnlyThresholdMs <= 0 || void 0 !== this.heartbeatOnlyTimer) return;
        const e = ()=>{
            if (this.paused) return void (this.heartbeatOnlyTimer = setTimeout(e, this.heartbeatOnlyThresholdMs));
            const t = this.heartbeatOnlyThresholdMs - (Date.now() - this.lastMeaningfulActivityTime);
            if (t <= 0) return this.heartbeatOnlyTimer = void 0, void this.onStallDetected("heartbeat_only");
            this.heartbeatOnlyTimer = setTimeout(e, t);
        };
        this.heartbeatOnlyTimer = setTimeout(e, this.heartbeatOnlyThresholdMs);
    }
    buildLogMetadata(e) {
        const t = this.ctx.get(Qt), r = {
            ...e
        };
        t?.modelDetails?.displayName && (r.model_name = t.modelDetails.displayName), this.abortedAt && (r.aborted_ago_ms = Date.now() - this.abortedAt), this.disposedAt && (r.disposed_ago_ms = Date.now() - this.disposedAt), this.lastClientSentHeartbeatAt && (r.last_client_sent_heartbeat_ago_ms = Date.now() - this.lastClientSentHeartbeatAt), this.lastServerSentHeartbeatAt && (r.last_server_sent_heartbeat_ago_ms = Date.now() - this.lastServerSentHeartbeatAt), this.streamEndedAt && (r.stream_ended_ago_ms = Date.now() - this.streamEndedAt), this.lastInboundMessage && (r.last_inbound_message_type = this.lastInboundMessage.messageType), this.lastOutboundMessage && (r.last_outbound_message_type = this.lastOutboundMessage.messageType);
        const n = [];
        let s;
        for(let e = this.activityHistory.length - 1; e >= 0; e--){
            const { type: t, messageType: r, repeat: o } = this.activityHistory[e];
            s !== t && (s ? n.push(`[${t}]`) : n.push(`[${t}] (MOST RECENT)`), s = t), n.push(`${r}${o ? ` (x${o})` : ""}`);
        }
        return r.activities = n.join("\n"), {
            reqId: t?.requestId,
            loop: this.loop,
            stall: r
        };
    }
    onAdvisoryDetected() {
        if (this.hasLogged || this.hasLoggedAdvisory) return;
        if (void 0 === this.advisoryThresholdMs || this.advisoryThresholdMs <= 0) return;
        const e = Date.now() - this.lastActivityTime;
        e < this.advisoryThresholdMs || (this.hasLoggedAdvisory = !0, this.reportAdvisory(e, this.advisoryThresholdMs));
    }
    reportAdvisory(e, t) {
        try {
            const r = this.buildLogMetadata({
                duration_ms: e,
                threshold_ms: t,
                stall_type: "advisory_no_activity"
            });
            ft.warn(this.ctx, `${this.logPrefix} Advisory stall detected - no activity for advisory threshold period`, r);
        } catch (e) {
            console.error("Error logging advisory stall:", e);
        }
    }
    onStallDetected(e) {
        if ("heartbeat_only" === e) {
            const t = Date.now(), r = t - this.lastActivityTime, n = t - this.lastMeaningfulActivityTime;
            if (r < this.thresholdMs && n >= this.heartbeatOnlyThresholdMs) {
                if (this.hasLoggedHeartbeatOnly) return;
                this.hasLoggedHeartbeatOnly = !0, this.reportStall(e, n);
            }
            return;
        }
        if (this.hasLogged) return;
        this.hasLogged = !0, this.hasLoggedAdvisory = !0;
        const t = Date.now() - this.lastActivityTime;
        this.reportStall(e, t);
    }
    reportStall(e, t) {
        const r = this.lastActivity, n = this.lastInboundMessage, s = this.lastOutboundMessage, o = this.ctx.get(Qt);
        try {
            const i = this.buildLogMetadata({
                duration_ms: t,
                threshold_ms: "heartbeat_only" === e ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                stall_type: e
            }), a = "heartbeat_only" === e ? `${this.logPrefix} Stream receiving heartbeats only - no meaningful data for threshold period` : `${this.logPrefix} Bidirectional stream stall detected - no activity for threshold period`;
            if (ft.warn(this.ctx, a, i), bt.increment(this.ctx, 1, {
                activity_type: r?.type ?? "unknown",
                message_type: r?.messageType ?? "unknown",
                loop: this.loop
            }), this.hasEverStalled || (this.hasEverStalled = !0, It.increment(this.ctx, 1, {
                loop: this.loop
            })), this.onStallCallback) {
                const t = Date.now(), i = {
                    type: e,
                    lastActivityAgoMs: t - this.lastActivityTime,
                    lastMeaningfulActivityAgoMs: t - this.lastMeaningfulActivityTime,
                    lastActivityType: r?.messageType,
                    lastInboundMessageType: n?.messageType,
                    lastOutboundMessageType: s?.messageType,
                    requestId: o?.requestId,
                    modelName: o?.modelDetails?.displayName,
                    streamEnded: void 0 !== this.streamEndedAt,
                    aborted: void 0 !== this.abortedAt,
                    lastServerHeartbeatAgoMs: this.lastServerSentHeartbeatAt ? t - this.lastServerSentHeartbeatAt : void 0,
                    lastClientHeartbeatAgoMs: this.lastClientSentHeartbeatAt ? t - this.lastClientSentHeartbeatAt : void 0,
                    thresholdMs: "heartbeat_only" === e ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                    handlers: this.handlerTracker?.getHandlerStates(),
                    loop: this.loop
                };
                try {
                    this.onStallCallback(i);
                } catch (e) {
                    console.error("Error in stall callback:", e);
                }
            }
        } catch (e) {
            console.error("Error in stall detection:", e);
        }
        try {
            this.onStall?.();
        } catch (e) {
            console.error("Error in onStall callback:", e);
        }
    }
    emitLifecycleLog(e, t) {
        const r = Date.now() - this.lastActivityTime;
        try {
            const n = this.buildLogMetadata({
                duration_ms: r,
                event_type: t
            });
            ft.info(this.ctx, e, n);
        } catch (e) {
            console.error("Error logging stream lifecycle:", e);
        }
    }
    emitLogAndMetric() {
        const e = Date.now() - this.lastActivityTime;
        this.emitLifecycleLog(`${this.logPrefix} Stream activity resumed after stall`, "recovered"), Et.histogram(this.ctx, e, {
            activity_type: this.lastActivity?.type ?? "unknown",
            loop: this.loop
        });
    }
    [Symbol.dispose]() {
        this.disposed = !0, this.paused = !1, void 0 !== this.timer && (clearTimeout(this.timer), this.timer = void 0), void 0 !== this.advisoryTimer && (clearTimeout(this.advisoryTimer), this.advisoryTimer = void 0), void 0 !== this.heartbeatOnlyTimer && (clearTimeout(this.heartbeatOnlyTimer), this.heartbeatOnlyTimer = void 0), this.ctx.signal.removeEventListener("abort", this.onCtxSignalAbort), this.trackActivity("disposed", "disposed"), this.disposedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream stall detector disposed`, "disposed");
    }
}
const Tt = (0, y.h)("@anysphere/agent-client:turn-runner"), Rt = 1e3, Bt = 100, Pt = 6e4, Jt = 3e5, Mt = 2, qt = new Set([
    "textDelta",
    "thinkingDelta",
    "thinkingCompleted",
    "partialToolCall",
    "toolCallDelta",
    "toolCallStarted",
    "toolCallCompleted",
    "tokenDelta"
]);
function Dt(e) {
    return qt.has(e.message.case ?? "");
}
async function Ot(e, t) {
    await new Promise((r, n)=>{
        if (t?.aborted) return void n(new G("Cancelled during backoff"));
        const s = setTimeout(()=>{
            t?.removeEventListener("abort", o), r();
        }, e);
        function o() {
            clearTimeout(s), n(new G("Cancelled during backoff"));
        }
        t?.addEventListener("abort", o, {
            once: !0
        });
    });
}
function Nt(e, t, r) {
    const n = t ? Bt : Rt, s = r ?? Math.min(n * 2 ** e, Pt);
    return s + (void 0 === r ? .2 * s * Math.random() : 0);
}
function Ft(e) {
    const { connectCode: t, connectCodeName: r, ...n } = e;
    return void 0 === r ? n : {
        ...n,
        connectCode: r
    };
}
async function Ut(e) {
    const { ctx: t, checkpointHandler: r, runOptions: n, requestId: s, hooks: o, cancellation: i } = e, a = e.originalRequestId ?? s;
    let c = Rt;
    const l = async (r, s, o, i)=>{
        if (o || (c = Rt), void 0 !== e.backoff) return void await e.backoff(r, s);
        const a = o ? function(e, t) {
            const r = Math.min(Jt, 3 * e);
            return t ?? Rt + (r - Rt) * Math.random();
        }(c, n.fixedRetryDelayMs) : Nt(r, n.isRunningInTest, n.fixedRetryDelayMs);
        o && (c = a, e.logging && Tt.info(t, `[${e.logging.tag}] Endless retry delay selected`, {
            selectedDelayMs: a,
            attempt: r,
            retryCategory: i.countAsServerError ? "server" : "transport",
            endlessRetries: o
        })), await Ot(a, s);
    };
    let u, d, p, m = e.state, h = e.action, f = 0, g = s, y = 0, w = 0, _ = !1, A = 0, S = !1;
    const b = ()=>{
        _ && (n.onConnectionStateChange?.({
            state: "connected"
        }), _ = !1);
    }, E = ()=>{
        S = !0, b();
    }, I = (e)=>({
            handleCheckpoint: async (t, n, s)=>{
                e === f && (S = !0), await r.handleCheckpoint(t, n, s), e === f && (u = n, d = s?.resumeEligibility ?? "eligible", b());
            },
            getLatestCheckpoint: ()=>r.getLatestCheckpoint()
        });
    for(;;){
        if (t.canceled) throw i.toCancelledError(void 0, g);
        if (u = void 0, d = void 0, S = !1, o.beginAttempt?.({
            attempt: f,
            originalRequestId: a
        }), f > 0 ? (g = x(), await n.onRetryStarting?.(f, {
            actionCase: h.action.case,
            conversationState: m,
            isResume: "resumeAction" === h.action.case,
            attemptRequestId: g
        }), e.logging && Tt.info(t, `[${e.logging.tag}] Retrying attempt ${f}`, {
            attempt: f,
            actionCase: h.action.case,
            requestId: g,
            originalRequestId: a
        }), "resumeAction" === h.action.case && (await n.onRetryResuming?.({
            checkpointState: m,
            nextAttempt: f,
            reason: "resume_action"
        }), e.logging && Tt.info(t, `[${e.logging.tag}] Resuming from checkpoint`, {
            nextAttempt: f,
            reason: "resume_action"
        }))) : (e.logging && Tt.info(t, `[${e.logging.tag}] Initial request`, {
            attempt: f,
            actionCase: h.action.case,
            requestId: g
        }), !0 === e.notifyInitialResume && "resumeAction" === h.action.case && (await n.onRetryResuming?.({
            checkpointState: m,
            nextAttempt: f,
            reason: "resume_action"
        }), e.logging && Tt.info(t, `[${e.logging.tag}] Resuming from checkpoint`, {
            nextAttempt: f,
            reason: "resume_action"
        }))), t.canceled) throw i.toCancelledError(void 0, g);
        try {
            return await o.runAttempt({
                state: m,
                action: h,
                checkpointHandler: I(f),
                attempt: f,
                attemptRequestId: g,
                notifyConnected: b,
                notifyApplicationProgress: E
            }), b(), void (e.logging && Tt.info(t, `[${e.logging.tag}] Request successful`, {
                attempt: f,
                actionCase: h.action.case,
                requestId: g,
                originalRequestId: a
            }));
        } catch (r) {
            if (!0 === i.shortCircuit?.(r)) throw i.toCancelledError(r, g);
            const s = !0 === n.endlessRetries?.(), c = e.nowMs?.() ?? Date.now(), b = void 0 === p ? void 0 : c - p;
            let E = o.classify(r, {
                attempt: f,
                attemptRequestId: g,
                originalRequestId: a,
                serverErrorRetries: y,
                transportErrorRetries: w,
                stallRetryElapsedMs: b,
                endlessRetries: s
            });
            "retry" === E.action && (void 0 !== u ? A = 0 : "resumeAction" === h.action.case && S && (A++, A >= Mt && (e.logging && Tt.warn(t, `[${e.logging.tag}] Resume attempts are streaming but not producing checkpoints; stopping automatic resume`, {
                noProgressResumeFailures: A,
                attempt: f,
                requestId: g,
                originalRequestId: a,
                errorName: r instanceof Error ? r.name : typeof r
            }), E = {
                action: "throw",
                error: new U("Agent turn stopped after repeated resume attempts made no progress", {
                    cause: r instanceof Error ? r : void 0,
                    requestId: g,
                    displayInfo: {
                        title: "Agent stopped retrying",
                        detail: "The connection was interrupted repeatedly without saving progress, so the agent stopped to avoid repeating the same work. Retry to continue from the last saved state.",
                        isRetryable: !0
                    }
                }),
                transportFailureKind: E.transportFailureKind
            })));
            const I = {
                ...void 0 === E.transportFailureKind ? {} : {
                    transportFailureKind: E.transportFailureKind
                },
                ...void 0 === e.loop ? {} : {
                    loop: e.loop
                }
            }, C = e.logging?.diagnostics?.(r);
            if (e.logging) {
                const e = "retry" === E.action ? `RETRY (countAsServerError=${E.countAsServerError}, countAsTransportError=${E.countAsTransportError})` : `THROW ${E.error.kind}`;
                Tt.warn(t, `[AGENT_ERROR_DIAGNOSTICS] requestId=${g} originalRequestId=${a} decision=${e}`, {
                    decision: e,
                    willRetry: "retry" === E.action,
                    enableAgentRetries: n.enableAgentRetries ?? !1,
                    endlessRetries: s,
                    isRunningInTest: n.isRunningInTest ?? !1,
                    serverErrorRetries: y,
                    transportErrorRetries: w,
                    attempt: f,
                    requestId: g,
                    originalRequestId: a,
                    ...I,
                    ...C
                });
            }
            if ("throw" === E.action) {
                if (0 === f) {
                    const r = {
                        attempt: 0,
                        actionCase: h.action.case,
                        error: E.error,
                        requestId: g,
                        originalRequestId: a,
                        enableAgentRetries: !0 === n.enableAgentRetries,
                        endlessRetries: s,
                        stallAborted: !1,
                        abortSources: []
                    };
                    try {
                        await n.onErrorNotRetried?.(o.buildNonRetriedErrorInfo?.(r) ?? r);
                    } catch (r) {
                        e.logging && Tt.warn(t, `[${e.logging.tag}] onErrorNotRetried callback failed`, {
                            error: String(r),
                            requestId: g,
                            originalRequestId: a
                        });
                    }
                }
                throw e.logging && Tt.warn(t, `[${e.logging.tag}] Error not retryable`, {
                    ...I,
                    ...C,
                    attempt: f,
                    actionCase: h.action.case,
                    requestId: g,
                    originalRequestId: a,
                    errorName: E.error.name,
                    ...!0 === e.logging.includeErrorObjects ? {
                        error: E.error
                    } : {},
                    serverErrorRetries: y,
                    transportErrorRetries: w
                }), E.error;
            }
            const k = f + 1;
            if ("ineligible_terminal_turn" === d) return void (e.logging && Tt.warn(t, `[${e.logging.tag}] Terminal checkpoint received before retryable error; completing without automatic resume`, {
                errorName: r instanceof Error ? r.name : typeof r,
                errorMessage: r instanceof Error ? r.message : String(r)
            }));
            n.onConnectionStateChange?.({
                state: "reconnecting",
                attempt: k,
                trigger: {
                    ...I,
                    ...o.reconnectTrigger?.(r, E, {
                        originalRequestId: a,
                        failedAttemptRequestId: g,
                        nextAttempt: k
                    }) ?? {
                        originatingRequestId: a,
                        attemptRequestId: g
                    }
                }
            }), _ = !0, E.countAsServerError && y++, E.countAsTransportError && w++, !0 === E.stall ? p ??= c : p = void 0, f = k, void 0 !== u && (m = u, h = new v.QFf({
                action: {
                    case: "resumeAction",
                    value: new v.qKo
                }
            })), o.onRetryCommitted?.(), await l(f, t.signal, s, E);
        }
    }
}
var Lt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, $t = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Qt = (0, g.cF)(Symbol("agentStreamMetadata"), void 0), jt = (0, y.h)("@anysphere/agent-client:abort"), Gt = (0, y.h)("@anysphere/agent-client:retry"), Ht = (0, y.h)("@anysphere/agent-client:request-context-blob");
async function zt({ ctx: e, action: t, resources: r, blobStore: n, options: s, source: o, transportMode: i, notifyBytes: a }) {
    try {
        const o = await ze({
            ctx: e,
            action: t,
            resources: r,
            blobStore: n,
            mode: i ?? s.requestContextBlobTransportMode ?? "legacy",
            maxBlobBytes: s.requestContextBlobMaxBytes ?? Ue,
            maxInlineDynamicBytes: s.requestContextDynamicInlineMaxBytes ?? Le,
            notesSessionId: s.conversationId
        });
        if (!0 === a) {
            const e = function({ prepared: e, parts: t }) {
                return "prepared" === e.kind ? Ve(e, {
                    dynamicByteLength: e.dynamicByteLength
                }) : "already_prepared" === e.kind && void 0 !== t ? Ve(t) : void 0;
            }({
                prepared: o,
                parts: t.requestContextParts
            });
            void 0 !== e && s.onRequestContextBytes?.(e);
        }
    } catch (r) {
        t.requestContextParts = void 0, Ht.warn(e, "Failed to prepare request context blob; using legacy fallback", {
            actionCase: t.action.case,
            errorName: r instanceof Error ? r.name : typeof r,
            source: o
        });
    }
}
const Wt = (e)=>{
    const t = [];
    switch(t.push(e.message.case), e.message.case){
        case "conversationAction":
            t.push(e.message.value.action.case);
            break;
        case "execClientMessage":
        case "execClientControlMessage":
        case "kvClientMessage":
        case "execServerMessage":
        case "execServerControlMessage":
            t.push(e.message.value.message.case);
            break;
        case "interactionResponse":
            t.push(e.message.value.result.case);
            break;
        case "interactionUpdate":
            switch(t.push(e.message.value.message.case), e.message.value.message.case){
                case "partialToolCall":
                case "toolCallCompleted":
                case "toolCallStarted":
                    t.push(e.message.value.message.value.toolCall?.tool.case);
                    break;
                case "toolCallDelta":
                    t.push(e.message.value.message.value.toolCallDelta?.delta.case);
            }
            break;
        case "interactionQuery":
            t.push(e.message.value.query.case);
    }
    return t.filter((e)=>void 0 !== e).join(":");
};
function Vt(e, t, r, n, s, o, i, a) {
    const c = (0, P.Jt)(), l = (0, P.Jt)(), u = (0, P.Jt)(), d = (0, P.Jt)();
    let p = !1, m = !1;
    return {
        interactionStream: c,
        execStream: l,
        checkpointStream: u,
        kvStream: d,
        done: async function() {
            let h, f, g = !1, y = !1;
            try {
                for await (const s of t){
                    if (void 0 !== s.ttftBreakdown) {
                        const t = s.ttftBreakdown;
                        try {
                            a?.({
                                serverFirstTokenMs: t.serverFirstTokenMs,
                                preStreamSetupMs: t.preStreamSetupMs,
                                waitForFirstEventMs: t.waitForFirstEventMs,
                                providerTtftMs: t.providerTtftMs,
                                slowPoolWaitMs: t.slowPoolWaitMs,
                                ...void 0 === t.clientPrepMs ? {} : {
                                    clientPrepMs: t.clientPrepMs
                                },
                                clock: t.clientClock ? "client" : "server"
                            });
                        } catch (t) {
                            Gt.warn(e, "onTtftBreakdown callback failed", {
                                error: String(t)
                            });
                        }
                    }
                    const t = "interactionUpdate" === s.message.case && "heartbeat" === s.message.value.message.case;
                    if (p || (p = !0, n(t)), t) r.onServerSentHeartbeat(), r.reset("inbound_message", "heartbeat");
                    else {
                        if (!m) {
                            m = !0;
                            try {
                                i?.();
                            } catch (t) {
                                Gt.warn(e, "onFirstNonHeartbeatMessage callback failed", {
                                    error: String(t)
                                });
                            }
                        }
                        r.reset("inbound_message", Wt(s));
                    }
                    if ("interactionUpdate" === s.message.case && "turnEnded" === s.message.value.message.case && (g = !0), "interactionUpdate" !== s.message.case && "interactionQuery" !== s.message.case || await c.write(s.message).catch(()=>{}), "execServerMessage" !== s.message.case && "execServerControlMessage" !== s.message.case || await l.write(s.message.value), "conversationCheckpointUpdate" === s.message.case) {
                        const e = g ? "ineligible_terminal_turn" : "eligible";
                        "ineligible_terminal_turn" === e && (y = !0), await u.write({
                            checkpoint: s.message.value,
                            metadata: {
                                resumeEligibility: e
                            }
                        });
                    }
                    "kvServerMessage" === s.message.case && await d.write(s.message.value);
                }
                r.onStreamEnded();
            } catch (e) {
                h = e;
            } finally{
                f = h;
                g && y && void 0 !== h && !s?.aborted && !o?.aborted && function(e) {
                    const t = e instanceof F ? e : oe(e);
                    return t instanceof U && we(t);
                }(h) && (Gt.debug(e, "Ignoring transport close after terminal agent stream", {
                    caughtError: h instanceof Error ? `${h.name}: ${h.message}` : String(h)
                }), r.onStreamEnded(), f = void 0);
                if (!g && !s?.aborted && !o?.aborted) {
                    const t = "Stream ended without turnEnded — connection likely dropped mid-stream";
                    void 0 === h ? (Gt.warn(e, t), f = new U(t, {
                        isTransport: !0
                    })) : h instanceof Error && "[aborted] aborted" === h.message ? (Gt.warn(e, `${t}; retrying caught [aborted] aborted error`), f = new U(t, {
                        cause: h,
                        isTransport: !0
                    })) : Gt.warn(e, `${t}; caught non-retriable stream error, rethrowing as-is`, {
                        caughtError: h instanceof Error ? `${h.name}: ${h.message}` : String(h)
                    });
                } else if (!g && !s?.aborted) {
                    const t = `Stream ended without turnEnded, abort signals: signal.aborted=${s?.aborted}, parentSignal.aborted=${o?.aborted}; firstMessageFired=${p}`;
                    Gt.warn(e, t);
                }
                c.close(), l.close(), u.close(), d.close();
            }
            if (void 0 !== f) throw f;
        }()
    };
}
async function Kt(e, t, r) {
    for await (const n of t)switch(n.event.case){
        case "stdout":
            await r.sendUpdate(e, m.L.shellOutputDelta({
                case: "stdout",
                value: new S.o0({
                    data: n.event.value.data
                })
            }));
            break;
        case "stderr":
            await r.sendUpdate(e, m.L.shellOutputDelta({
                case: "stderr",
                value: new S.Db({
                    data: n.event.value.data
                })
            }));
            break;
        case "exit":
            await r.sendUpdate(e, m.L.shellOutputDelta({
                case: "exit",
                value: new S.vb({
                    code: n.event.value.code,
                    aborted: n.event.value.aborted
                })
            }));
    }
}
function Yt(e) {
    return e instanceof Error ? e.name : void 0;
}
function Zt(e) {
    const t = {
        errorName: Yt(e)
    }, r = pe(e);
    if (void 0 === r) return t;
    const n = function(e) {
        if (null !== e && "object" == typeof e && "cause" in e) return e.cause;
    }(r), s = function(e) {
        if (null === e || "object" != typeof e || !("code" in e)) return;
        const t = e.code;
        return "string" == typeof t || "number" == typeof t ? t : void 0;
    }(n), o = Yt(n);
    return {
        ...t,
        underlyingConnectError: {
            code: r.code,
            codeName: B.C[r.code],
            cause: void 0 !== s || void 0 !== o ? {
                code: s,
                name: o
            } : void 0
        }
    };
}
class Xt {
    constructor(e, t, r = {}){
        this.client = e, this.endpointUrl = t, this.options = r, this.hasStartedStream = !1;
    }
    async run(e, t, r, s, o, i, a, c, l, u, d) {
        const p = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            if (void 0 !== d.maxSteps) throw new j(d.maxSteps);
            const m = new He(a), f = d.generationUUID ?? x(), g = new h.xc, y = (0, h.XI)(o, g), w = {
                sources: [],
                abortReasonName: void 0,
                abortReasonMessage: void 0
            }, v = (e)=>{
                const t = function(e) {
                    const t = de(e);
                    return void 0 === t ? void 0 : N(le(t));
                }(e), r = w.sources.includes("stall_detector") || !0 === t?.stallAborted, n = (s = w.sources).some((e)=>"stall_detector" !== e) ? "owner" : s.includes("stall_detector") ? "stall_detector" : "none";
                var s;
                const o = Zt(e), i = o.underlyingConnectError;
                return {
                    relayed: t,
                    stallAborted: r,
                    abortOrigin: "none" === n && r ? "stall_detector" : n,
                    reading: void 0 === t ? {
                        errorName: o.errorName,
                        connectCode: i?.code,
                        connectCodeName: i?.codeName,
                        connectCause: i?.cause,
                        abortSources: [
                            ...w.sources
                        ],
                        abortReasonName: w.abortReasonName,
                        ...void 0 === i ? {} : {
                            underlyingConnectError: i
                        }
                    } : {
                        errorName: t.errorName,
                        connectCode: t.connectCode,
                        connectCodeName: t.connectCodeName,
                        connectCause: t.connectCause,
                        ...(a = t.loop, "nal" === a || "local_loop" === a || "module" === a ? {
                            loop: t.loop
                        } : {}),
                        ...void 0 === t.transportMode ? {} : {
                            transportMode: t.transportMode
                        }
                    }
                };
                var a;
            };
            let _ = 0, A = 0;
            try {
                d.onNetworkPhaseStart?.();
            } catch (t) {
                Gt.warn(e, "onNetworkPhaseStart callback failed", {
                    error: String(t)
                });
            }
            const S = Lt(p, (0, n.VI)(e.withName("networkPhase")), !1);
            e = S.ctx, await (0, n.MG)(S.span, ()=>Ut({
                    ctx: e,
                    state: t,
                    action: r,
                    checkpointHandler: l,
                    runOptions: d,
                    requestId: f,
                    loop: this.options.loop ?? "nal",
                    notifyInitialResume: !0,
                    logging: {
                        ...this.options.retryLogging ?? {
                            tag: "nal_agent_retries",
                            includeErrorObjects: !0
                        },
                        diagnostics: (e)=>{
                            const { stallAborted: t, abortOrigin: r, reading: n } = v(e);
                            return {
                                stallAborted: t,
                                abortOrigin: r,
                                ...Ft(n)
                            };
                        }
                    },
                    cancellation: {
                        toCancelledError: ()=>new G("Request cancelled")
                    },
                    hooks: {
                        beginAttempt: ()=>{
                            w.sources = [], w.abortReasonName = void 0, w.abortReasonMessage = void 0, A = ++_;
                        },
                        runAttempt: async ({ state: t, action: r, checkpointHandler: n, attempt: o, attemptRequestId: a, notifyConnected: l, notifyApplicationProgress: p })=>{
                            const h = function(e, t, r) {
                                return {
                                    sendUpdate: async (n, s)=>{
                                        if (t === r()) return e.sendUpdate(n, s);
                                        "toolCallCompleted" === s.message?.case && Gt.warn(n, "nal.await_stall.stale_completion_dropped", {
                                            attemptGen: t,
                                            currentGen: r()
                                        });
                                    },
                                    query: async (n, s)=>{
                                        if (t !== r()) throw new G("Stale query from previous attempt");
                                        return e.query(n, s);
                                    },
                                    enqueuePostTurnEndedWork: e.enqueuePostTurnEndedWork ? (t)=>e.enqueuePostTurnEndedWork(t) : void 0,
                                    flushPostTurnEndedWork: e.flushPostTurnEndedWork ? (t)=>e.flushPostTurnEndedWork(t) : void 0
                                };
                            }(y, A, ()=>_);
                            await this.runInternal(e, t, r, s, h, i, m, c, n, u, d, a, f, g, w, l, p, o);
                        },
                        classify: (e, t)=>{
                            const { abortOrigin: r, relayed: n } = v(e), s = pt(e, ut(d, t), {
                                ...t,
                                retriesEnabled: d.enableAgentRetries ?? !1,
                                abortOrigin: r
                            }), o = n?.transportFailureKind;
                            return "string" == typeof (i = o) && Ke.includes(i) ? {
                                ...s,
                                transportFailureKind: o
                            } : s;
                            var i;
                        },
                        buildNonRetriedErrorInfo: (e)=>({
                                ...e,
                                enableAgentRetries: d.enableAgentRetries ?? !1,
                                stallAborted: v(e.error).stallAborted,
                                abortSources: [
                                    ...w.sources
                                ],
                                abortReasonName: w.abortReasonName,
                                abortReasonMessage: w.abortReasonMessage
                            }),
                        reconnectTrigger: (e, t, r)=>{
                            const { relayed: n, stallAborted: s, reading: o } = v(e), i = e instanceof F ? e : oe(e, {
                                requestId: r.failedAttemptRequestId
                            });
                            return {
                                errorClass: n?.errorName ?? i.name,
                                connectCode: o.connectCode,
                                connectCodeName: o.connectCodeName,
                                errorCode: i.displayInfo?.errorCode,
                                countAsServerError: t.countAsServerError,
                                countAsTransportError: t.countAsTransportError,
                                stallAborted: s,
                                originatingRequestId: r.originalRequestId,
                                attemptRequestId: r.failedAttemptRequestId,
                                ...void 0 === o.transportMode ? {} : {
                                    transportMode: o.transportMode
                                },
                                endpointUrl: this.endpointUrl
                            };
                        },
                        onRetryCommitted: ()=>c.reopen()
                    }
                }));
        } catch (e) {
            p.error = e, p.hasError = !0;
        } finally{
            $t(p);
        }
    }
    async runInternal(e, t, r, s, o, c, l, d, m, h, g, y, b, E, I, C, k, x, B = "agent.request.attempt") {
        const J = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const M = e;
            e = this.options.prepareAttemptContext?.(e, {
                attempt: x,
                attemptRequestId: y,
                originalRequestId: b,
                runOptions: g
            }) ?? e;
            const q = Lt(J, (0, n.VI)(e.withName(B)), !1);
            q.span.setAttribute("agent.attempt", x), q.span.setAttribute("agent.request_id", y), q.span.setAttribute("agent.original_request_id", b), e = q.ctx, e = (0, n.Mf)(e, "agent.request_id", y), e = (e = (0, n.Mf)(e, "agent.original_request_id", b)).with(Qt, {
                requestId: y,
                rootParentRequestId: g.rootParentRequestId,
                modelDetails: s
            });
            const D = new Set(I.sources);
            let O = void 0 !== I.abortReasonName || void 0 !== I.abortReasonMessage;
            const N = (t, r)=>{
                if (D.has(t)) return;
                D.add(t), I.sources = [
                    ...D
                ];
                const n = ((e)=>{
                    const t = "string" == typeof e?.abortReasonName ? e.abortReasonName : void 0, r = "string" == typeof e?.abortReasonMessage ? e.abortReasonMessage : void 0;
                    if (void 0 !== t || void 0 !== r) return {
                        abortReasonName: t,
                        abortReasonMessage: r
                    };
                })(r);
                O || void 0 === n || (O = !0, I.abortReasonName = n.abortReasonName, I.abortReasonMessage = n.abortReasonMessage), jt.error(e, "Agent client stream abort", new Error(t), {
                    abortSource: t,
                    requestId: y,
                    conversationId: g.conversationId,
                    ...r ?? {}
                });
            };
            if (e.signal.aborted) {
                const t = e.signal.reason;
                N("ctx_signal_abort", (0, w.R)(t));
            } else e.signal.addEventListener("abort", ()=>{
                const t = e.signal.reason;
                N("ctx_signal_abort", (0, w.R)(t));
            }, {
                once: !0
            });
            const [F, U] = e.withCancel();
            if (d.signal?.aborted) {
                const e = d.signal?.reason;
                N("conversation_action_abort", (0, w.R)(e)), U();
            } else d.signal?.addEventListener("abort", ()=>{
                const e = d.signal?.reason;
                N("conversation_action_abort", (0, w.R)(e)), U();
            }, {
                once: !0
            });
            if (e.canceled || F.canceled) {
                const t = {
                    ctxCanceled: e.canceled,
                    softCancel: F.canceled
                };
                throw N("pre_run_cancel", t), new G("User aborted request");
            }
            const L = (0, n.VI)(e.withName("createControlledExecManager")), Q = a.n6O.fromResources(c);
            L[Symbol.dispose]();
            const [j, H] = e.withCancel(), z = new kt, { failThresholdMs: W, advisoryThresholdMs: V } = At(g.stallDetectorConfig, {
                isRunningInTest: g.isRunningInTest
            }), K = Lt(J, new xt(j, {
                thresholdMs: W,
                advisoryThresholdMs: V,
                loop: this.options.loop,
                onStall: ()=>{
                    N("stall_detector", {
                        thresholdMs: W,
                        advisoryThresholdMs: V
                    }), H();
                },
                onStallCallback: g.onStall,
                handlerTracker: z
            }), !1);
            let Y, Z;
            const X = (0, P.Jt)(), ee = new T.F8(X, (e)=>(K.reset("outbound_write", Wt(e)), e)), te = Lt(J, (0, n.VI)(e.withName("writeInitialRequest")), !1);
            let re;
            const ne = ht(h), se = g.requestContextBlobTransportMode ?? "legacy", oe = 0 === x && "userMessageAction" === r.action.case && 0 === t.turns.length, ie = "ref_only" === se && oe ? "dual" : se, [, ae] = await Promise.all([
                zt({
                    ctx: e,
                    action: r,
                    resources: c,
                    blobStore: l,
                    options: g,
                    source: "run_request",
                    transportMode: ie,
                    notifyBytes: 0 === x
                }),
                void 0 === g.mintLlmGatewayCredential ? Promise.resolve(void 0) : De(g.mintLlmGatewayCredential, {
                    signal: F.signal,
                    isCanceled: ()=>F.canceled,
                    requestId: y
                })
            ]), ce = {
                action: r,
                headers: g.headers ?? {}
            }, le = this.options.decorateAttempt?.(ce, g) ?? ce, ue = new v.Mpn({
                conversationState: t,
                action: le.action,
                modelDetails: s,
                requestedModel: g.requestedModel,
                clientLlmGatewayCredential: ae,
                mcpTools: ne,
                conversationGroupId: g.conversationGroupId,
                conversationId: g.conversationId,
                agentSessionId: g.agentSessionId,
                mcpFileSystemOptions: g.mcpFileSystemOptions,
                customSystemPrompt: g.customSystemPrompt,
                systemPromptSpec: g.systemPromptSpec,
                harness: g.harness,
                computerUseCoordinateMode: g.computerUseCoordinateMode,
                suggestNextPrompt: g.suggestNextPrompt,
                subagentTypeName: g.subagentTypeName,
                excludeWorkspaceContext: g.excludeWorkspaceContext,
                devRawModelSlug: g.devRawModelSlug,
                selectedSubagentModels: g.selectedSubagentModels,
                subagentModelOverrides: g.subagentModelOverrides ?? [],
                selectedSubagentModelDetails: g.selectedSubagentModelsLegacy,
                clientSupportsInlineImages: g.clientSupportsInlineImages,
                clientSupportsPreviewCard: g.clientSupportsPreviewCard,
                startedAsNewProject: g.startedAsNewProject,
                firstProjectOnboarding: g.firstProjectOnboarding,
                clientSupportsSendToUser: g.clientSupportsSendToUser,
                clientSupportsRoutedModelUpdate: g.clientSupportsRoutedModelUpdate,
                canCreateCloudSubagents: g.canCreateCloudSubagents,
                suppressSubagentProgressUpdateTool: g.suppressSubagentProgressUpdateTool,
                runId: b,
                nextInteractionQueryId: E.peekNext()
            });
            if (re = ee.write(new _.KS({
                message: {
                    case: "runRequest",
                    value: ue
                }
            })), F.canceled) {
                const t = {
                    ctxCanceled: e.canceled,
                    softCancel: F.canceled
                };
                throw N("post_write_cancel", t), te[Symbol.dispose](), new G("User aborted request");
            }
            const de = {
                ...le.headers,
                "x-request-id": y,
                "x-original-request-id": b,
                ...u(g),
                ...p()
            };
            Y = (0, n.VI)(e.withName("handshakeEstablishment")), Y.span.setAttribute("handshake.firstStreamOnClient", !this.hasStartedStream), this.hasStartedStream = !0;
            const pe = this.client.run(Y.ctx, X, {
                signal: j.signal,
                headers: de,
                onHeader: g.onHeader,
                onNetworkStarted: ()=>{
                    void 0 === Z && (Z = performance.now());
                }
            }), me = performance.now(), he = (e)=>{
                Y && (Y.span.setAttribute("handshake.firstMessageHeartbeat", e), void 0 !== Z && Y.span.setAttribute("handshake.preNetworkMs", Z - me), Y[Symbol.dispose](), Y = void 0), C();
                const t = performance.now();
                g.onFirstMessage?.(t - me), void 0 !== Z && g.onFirstMessageNetwork?.(t - Z);
            }, fe = ()=>{
                k(), g.onFirstNonHeartbeatResponse?.(performance.now() - me, x);
            }, ge = g.onTtftBreakdown ? (e)=>{
                g.onTtftBreakdown(e, x);
            } : void 0, { interactionStream: ye, execStream: we, checkpointStream: ve, kvStream: _e, done: Ae } = Vt(e, pe, K, he, F.signal, e.signal, fe, ge);
            let Se;
            const be = {
                handleCheckpoint: async (e, t, r)=>{
                    await m.handleCheckpoint(e, t, r), Se = r?.resumeEligibility ?? "eligible";
                },
                getLatestCheckpoint: ()=>m.getLatestCheckpoint()
            };
            te[Symbol.dispose]();
            const Ee = 5e3;
            let Ie;
            const Ce = ()=>{
                Ie = setTimeout(()=>{
                    ee.write(new _.KS({
                        message: {
                            case: "clientHeartbeat",
                            value: new _.kA
                        }
                    })).then(()=>K.onClientSentHeartbeat(), ()=>{}), Ce();
                }, Ee);
            }, ke = ()=>{
                void 0 !== Ie && (clearTimeout(Ie), Ie = void 0);
            };
            Ce();
            try {
                let t;
                if ("shellCommandAction" === r.action.case && r.action.value.execId) {
                    const n = r.action.value, s = new S.a({
                        command: n.shellCommand?.command || "",
                        parsingResult: new S.HO,
                        skipApproval: !0
                    }), i = c.get(a.wve).execute(e, s, {
                        execId: n.execId
                    }), l = new qe(ye, o, new T.F8(ee, (e)=>new _.KS({
                            message: {
                                case: "interactionResponse",
                                value: e
                            }
                        })), K);
                    t = {
                        run: async (e)=>{
                            await Promise.all([
                                z.track("handleShellStream", Kt(e, i, o)),
                                z.track("interactionController", l.run(e))
                            ]);
                        }
                    };
                } else {
                    const e = new qe(ye, o, new T.F8(ee, (e)=>new _.KS({
                            message: {
                                case: "interactionResponse",
                                value: e
                            }
                        })), K);
                    t = {
                        run: async (t)=>{
                            await z.track("interactionController", e.run(t));
                        }
                    };
                }
                void 0 !== re && await Promise.race([
                    re,
                    Ae.catch(()=>{})
                ]);
                const n = new T.F8(ee, (e)=>{
                    if ((0, R.isMessage)(e, A.yT)) return new _.KS({
                        message: {
                            case: "execClientMessage",
                            value: e
                        }
                    });
                    if ((0, R.isMessage)(e, A.$Y)) return new _.KS({
                        message: {
                            case: "execClientControlMessage",
                            value: e
                        }
                    });
                    throw new Error(`Unknown exec message (type: ${(0, R.isMessage)(e) ? e.getType().typeName : typeof e})`);
                }), u = new Te(we, n, Q), p = new f.hC(_e, new T.F8(ee, (e)=>new _.KS({
                        message: {
                            case: "kvClientMessage",
                            value: e
                        }
                    })), l, {
                    beforeGetBlob: async (e, t)=>l.persistForRemoteRead(e, t)
                }), m = new i(ve, be, e);
                let w, v;
                const x = {
                    promise: new Promise((e, t)=>{
                        w = e, v = t;
                    }),
                    resolve: w,
                    reject: v
                };
                F.canceled ? (x.resolve(), ye.close()) : F.signal.addEventListener("abort", ()=>{
                    x.resolve(), ye.close();
                }, {
                    once: !0
                }), u.run(F).then(x.resolve).catch(x.reject);
                const B = Promise.allSettled([
                    z.track("streamSplitter", Ae.finally(()=>{
                        ke(), d.close(), n.close();
                    })),
                    z.track("execHandler", x.promise),
                    t.run(e),
                    z.track("checkpointController", m.run()),
                    z.track("kvHandler", p.run(e)),
                    z.track("conversationActionManager", d.run(e, {
                        write: async (t)=>{
                            await zt({
                                ctx: e,
                                action: t,
                                resources: c,
                                blobStore: l,
                                options: g,
                                source: "queued_action"
                            }), await ee.write(new _.KS({
                                message: {
                                    case: "conversationAction",
                                    value: t
                                }
                            }));
                        }
                    }))
                ]);
                let P, J;
                const q = {
                    promise: new Promise((e, t)=>{
                        P = e, J = t;
                    }),
                    resolve: P,
                    reject: J
                };
                B.then(q.resolve).catch(q.reject), e.canceled ? q.reject(new G("User aborted request")) : e.signal.addEventListener("abort", ()=>q.reject(new G("User aborted request")), {
                    once: !0
                });
                const D = ()=>{
                    e.signal.aborted ? H() : (function(e) {
                        const t = e.lingerMs ?? 6e3;
                        return new Promise((r)=>{
                            let n = !1;
                            const s = (e)=>{
                                n || (n = !0, clearTimeout(o), r(e));
                            }, o = setTimeout(()=>s("linger_timed_out"), t);
                            e.done.then(()=>s("stream_ended"), ()=>s("stream_ended"));
                        });
                    })({
                        done: Ae,
                        lingerMs: g.softCancelLingerMs
                    }).then((t)=>{
                        Gt.info(e, "Soft-cancel transport linger finished", {
                            outcome: t,
                            requestId: y
                        }), H();
                    });
                };
                F.canceled ? (D(), q.reject(new G("User aborted request"))) : F.signal.addEventListener("abort", ()=>{
                    D(), q.reject(new G("User aborted request"));
                }, {
                    once: !0
                });
                const O = await q.promise, N = O[0], U = O[1], L = O[3], j = (e)=>e.reason instanceof Error ? `${e.reason.name}: ${e.reason.message}` : String(e.reason);
                if ("rejected" === L.status) throw new $("Checkpoint persistence failed", {
                    cause: L.reason instanceof Error ? L.reason : void 0,
                    requestId: y,
                    displayInfo: {
                        title: "Checkpoint persistence failed",
                        detail: j(L),
                        isRetryable: !1
                    }
                });
                const W = "ineligible_terminal_turn" === Se;
                if (W) {
                    const t = {
                        ..."rejected" === N.status ? {
                            streamSplitter: j(N)
                        } : {},
                        ..."rejected" === U.status ? {
                            execHandler: j(U)
                        } : {}
                    };
                    Object.keys(t).length > 0 && Gt.debug(e, "Ignoring handler errors after terminal checkpoint", t);
                }
                if ("rejected" === N.status && !W) throw N.reason;
                if ("rejected" === U.status && !W) throw U.reason;
                F.canceled || await this.processUnprocessedMessages(M, d, be, s, o, c, l, h, g, y, b, E, I, K, C, k);
            } finally{
                ke(), Y && (Y[Symbol.dispose](), Y = void 0);
            }
        } catch (e) {
            J.error = e, J.hasError = !0;
        } finally{
            $t(J);
        }
    }
    async processUnprocessedMessages(e, t, r, n, s, o, i, a, c, l, u, d, p, m, h, f) {
        if (!t.hasUnprocessedMessages()) return;
        const g = t.getUnprocessedUserMessages(), y = r.getLatestCheckpoint();
        if (!y || 0 === g.length) return;
        const w = g[0];
        t.markMessageAsProcessed(w), t.resetStream(), m[Symbol.dispose]();
        const _ = r.getLatestCheckpoint();
        try {
            await this.runInternal(e, y, new v.QFf({
                action: {
                    case: "userMessageAction",
                    value: new v.Vtf({
                        userMessage: w
                    })
                }
            }), n, s, o, i, t, r, a, c, l, u, d, p, h, f, 0, "agent.request.queuedMessage");
        } catch (e) {
            throw _ === r.getLatestCheckpoint() && t.requeueMessage(w), e;
        }
    }
}
function er(e) {
    return hr(e.host.toBinary(), e.renderer.toBinary()) ? {
        kind: "identical",
        fields: []
    } : function(e) {
        const { host: t, renderer: r } = e;
        let n;
        if (rr({
            host: t,
            renderer: r
        })) n = "encoding-only";
        else {
            const e = t.clone(), s = r.clone();
            nr(e, "without-compacted"), nr(s, "without-compacted"), rr({
                host: e,
                renderer: s
            }) ? n = "compacted-token-metadata" : (nr(e, "durable"), nr(s, "durable"), n = rr({
                host: e,
                renderer: s
            }) ? "observational" : "durable");
        }
        return {
            kind: n,
            fields: or({
                host: t,
                renderer: r,
                includeUnknownFields: "durable" === n,
                countUnknownFieldsDeep: !0,
                policy: "full"
            })
        };
    }({
        host: e.host,
        renderer: e.renderer
    });
}
function tr(e) {
    return or({
        host: e.before,
        renderer: e.after,
        includeUnknownFields: !0,
        countUnknownFieldsDeep: !1,
        policy: "durable"
    });
}
function rr(e) {
    const { host: t, renderer: r } = e;
    return pr(t) > 0 || pr(r) > 0 ? hr(t.toBinary(), r.toBinary()) : t.equals(r);
}
function nr(e, t) {
    sr(e, t), void 0 !== e.tokenDetails && sr(e.tokenDetails, t);
    for (const r of Object.values(e.subagentStates))void 0 !== r.conversationState && nr(r.conversationState, t);
}
function sr(e, t) {
    const r = e;
    for (const [n, s] of Object.entries(r))cr({
        messageTypeName: e.getType().typeName,
        fieldName: n,
        policy: t
    }) && (r[n] = Array.isArray(s) ? [] : void 0);
}
function or(e) {
    const { host: t, renderer: r, includeUnknownFields: n, countUnknownFieldsDeep: s, policy: o } = e, i = [], a = t, c = r, l = {
        hostCount: 0,
        rendererCount: 0,
        equal: !0
    };
    for (const e of v.Y9z.fields.list()){
        if (cr({
            messageTypeName: v.Y9z.typeName,
            fieldName: e.localName,
            policy: o
        })) continue;
        const t = a[e.localName], r = c[e.localName], n = ir({
            host: t,
            renderer: r,
            policy: o
        });
        n.knownFieldsEqual || i.push({
            field: e.localName,
            shape: ur(e),
            hostCount: dr(t, e),
            rendererCount: dr(r, e)
        }), l.hostCount += n.changedHostUnknownCount, l.rendererCount += n.changedRendererUnknownCount, l.equal &&= n.unknownFieldsEqual;
    }
    const u = mr(t), d = mr(r);
    ir({
        host: u,
        renderer: d,
        policy: "full"
    }).knownFieldsEqual || (l.hostCount += u.length, l.rendererCount += d.length, l.equal = !1);
    const p = s ? pr(t) : l.hostCount, m = s ? pr(r) : l.rendererCount, h = s ? p > 0 || m > 0 : !l.equal;
    return n && h && i.push({
        field: "unknownFields",
        shape: "unknown",
        hostCount: p,
        rendererCount: m
    }), i;
}
function ir(e) {
    const { host: t, renderer: r, policy: n } = e;
    if (Object.is(t, r)) return {
        knownFieldsEqual: !0,
        changedHostUnknownCount: 0,
        changedRendererUnknownCount: 0,
        unknownFieldsEqual: !0
    };
    if (t instanceof Uint8Array || r instanceof Uint8Array) return {
        knownFieldsEqual: t instanceof Uint8Array && r instanceof Uint8Array && hr(t, r),
        changedHostUnknownCount: 0,
        changedRendererUnknownCount: 0,
        unknownFieldsEqual: !0
    };
    if (Array.isArray(t) || Array.isArray(r)) {
        const e = Array.isArray(t) ? t : [], s = Array.isArray(r) ? r : [], o = {
            knownFieldsEqual: Array.isArray(t) && Array.isArray(r) && e.length === s.length,
            changedHostUnknownCount: 0,
            changedRendererUnknownCount: 0,
            unknownFieldsEqual: !0
        }, i = Math.max(e.length, s.length);
        for(let t = 0; t < i; t++)ar({
            target: o,
            nested: ir({
                host: e[t],
                renderer: s[t],
                policy: n
            })
        });
        return o;
    }
    if ((0, R.isMessage)(t) || (0, R.isMessage)(r)) {
        if (!(0, R.isMessage)(t) || !(0, R.isMessage)(r) || t.getType().typeName !== r.getType().typeName) {
            const e = lr(t, n), s = lr(r, n);
            return {
                knownFieldsEqual: !1,
                changedHostUnknownCount: e,
                changedRendererUnknownCount: s,
                unknownFieldsEqual: 0 === e && 0 === s
            };
        }
        const e = Object.entries(t).filter(([e, r])=>void 0 !== r && !cr({
                messageTypeName: t.getType().typeName,
                fieldName: e,
                policy: n
            })), s = Object.entries(r).filter(([e, t])=>void 0 !== t && !cr({
                messageTypeName: r.getType().typeName,
                fieldName: e,
                policy: n
            })), o = {
            knownFieldsEqual: e.length === s.length,
            changedHostUnknownCount: 0,
            changedRendererUnknownCount: 0,
            unknownFieldsEqual: !0
        }, i = mr(t), a = mr(r);
        ir({
            host: i,
            renderer: a,
            policy: "full"
        }).knownFieldsEqual || (o.changedHostUnknownCount += i.length, o.changedRendererUnknownCount += a.length, o.unknownFieldsEqual = !1);
        const c = r, l = new Set([
            ...e.map(([e])=>e),
            ...s.map(([e])=>e)
        ]), u = t;
        for (const e of l)ar({
            target: o,
            nested: ir({
                host: u[e],
                renderer: c[e],
                policy: n
            })
        });
        return o;
    }
    if ("object" != typeof t || null === t || "object" != typeof r || null === r) return {
        knownFieldsEqual: !1,
        changedHostUnknownCount: 0,
        changedRendererUnknownCount: 0,
        unknownFieldsEqual: !0
    };
    const s = t, o = r, i = Object.keys(s), a = Object.keys(o), c = {
        knownFieldsEqual: i.length === a.length,
        changedHostUnknownCount: 0,
        changedRendererUnknownCount: 0,
        unknownFieldsEqual: !0
    }, l = new Set([
        ...i,
        ...a
    ]);
    for (const e of l)ar({
        target: c,
        nested: ir({
            host: s[e],
            renderer: o[e],
            policy: n
        })
    });
    return c;
}
function ar(e) {
    const { target: t, nested: r } = e;
    t.knownFieldsEqual &&= r.knownFieldsEqual, t.changedHostUnknownCount += r.changedHostUnknownCount, t.changedRendererUnknownCount += r.changedRendererUnknownCount, t.unknownFieldsEqual &&= r.unknownFieldsEqual;
}
function cr(e) {
    const { messageTypeName: t, fieldName: r, policy: n } = e;
    return "full" !== n && ("agent.v1.ConversationTokenDetails" === t ? "breakdown" === r || "promptContextUsageTree" === r : "durable" === n && t === v.Y9z.typeName && "turnTimings" === r);
}
function lr(e, t) {
    if ((0, R.isMessage)(e)) {
        let r = mr(e).length;
        for (const [n, s] of Object.entries(e))cr({
            messageTypeName: e.getType().typeName,
            fieldName: n,
            policy: t
        }) || (r += lr(s, t));
        return r;
    }
    return e instanceof Uint8Array ? 0 : Array.isArray(e) ? e.reduce((e, r)=>e + lr(r, t), 0) : "object" == typeof e && null !== e ? Object.values(e).reduce((e, r)=>e + lr(r, t), 0) : 0;
}
function ur(e) {
    return "map" === e.kind ? "map" : e.repeated ? "repeated" : e.kind;
}
function dr(e, t) {
    return void 0 === e ? 0 : t.repeated ? Array.isArray(e) ? e.length : 0 : "map" === t.kind ? "object" == typeof e && null !== e ? Object.keys(e).length : 0 : 1;
}
function pr(e) {
    return e instanceof Uint8Array || null === e ? 0 : (0, R.isMessage)(e) ? e.getType().runtime.bin.listUnknownFields(e).length + Object.values(e).reduce((e, t)=>e + pr(t), 0) : Array.isArray(e) || "object" == typeof e ? Object.values(e).reduce((e, t)=>e + pr(t), 0) : 0;
}
function mr(e) {
    return e.getType().runtime.bin.listUnknownFields(e);
}
function hr(e, t) {
    if (e.byteLength !== t.byteLength) return !1;
    for(let r = 0; r < e.byteLength; r++)if (e[r] !== t[r]) return !1;
    return !0;
}
const fr = "X-Request-Id", gr = "X-Agent-Id";
function yr(e, t) {
    return function(e, t) {
        const r = new Set(Object.keys(e ?? {}).map((e)=>e.toLowerCase())), n = Object.entries({
            [fr]: t.requestId,
            [gr]: t.agentId
        }).flatMap(([e, t])=>void 0 === t || r.has(e.toLowerCase()) ? [] : [
                [
                    e,
                    l(t)
                ]
            ]);
        return {
            ...e,
            ...Object.fromEntries(n)
        };
    }(e, {
        requestId: t,
        agentId: void 0
    });
}
const wr = /^[0-9A-Za-z_-]{1,128}$/;
function vr(e) {
    return wr.test(e);
}
const _r = [
    "x-request-id",
    "request-id",
    "apim-request-id"
];
function Ar(e, t) {
    const r = t.now ?? (()=>performance.now()), n = t.epochNow ?? (()=>Date.now());
    let s = 0;
    return async (o, i)=>{
        const a = {
            requestId: t.requestId,
            attempt: t.attempt ?? 0,
            requestIndex: s++,
            sentAtEpochMs: n()
        }, c = r(), l = i?.signal ?? (o instanceof Request ? o.signal : void 0), u = (e)=>{
            try {
                t.onTiming((r = {
                    ...a,
                    modelId: t.modelId,
                    ...e
                }, Object.fromEntries(Object.entries(r).filter(([, e])=>void 0 !== e))));
            } catch  {}
            var r;
        };
        let d;
        try {
            d = await e(o, i);
        } catch (e) {
            throw u({
                totalMs: r() - c,
                ...kr(e, l)
            }), e;
        }
        const p = r() - c, m = {
            ttfbMs: p,
            httpStatus: d.status,
            gatewayRequestId: Cr(d.headers)
        }, h = d.status >= 400 ? "http_error" : "ok", f = !0 === d.headers.get("content-type")?.includes("text/event-stream");
        if (null === d.body || !f) return u({
            ...m,
            totalMs: p,
            outcome: h
        }), d;
        const [g, y] = d.body.tee(), w = (async function(e, t) {
            const r = {}, n = (e)=>{
                const n = function(e) {
                    const t = [];
                    let r = !1;
                    for (const n of e.split("\n")){
                        const e = n.endsWith("\r") ? n.slice(0, -1) : n;
                        0 === e.length || e.startsWith(":") || (r = !0, e.startsWith("data:") && t.push(e.slice(5).trimStart()));
                    }
                    return r ? t.join("\n") : void 0;
                }(e);
                if (void 0 !== n && (r.firstEventMs ??= t(), void 0 === r.firstContentMs && function(e) {
                    return Sr.test(e);
                }(n) && (r.firstContentMs = t()), r.modelId ??= br.exec(n)?.[1], n.includes('"usage"'))) {
                    const e = Er.exec(n)?.[1];
                    void 0 !== e && (r.outputTokens = Number(e));
                }
            }, s = e.getReader(), o = new TextDecoder;
            let i = "";
            try {
                for(;;){
                    const { done: e, value: t } = await s.read();
                    if (e) break;
                    const r = Math.max(0, i.length - 3);
                    i += o.decode(t, {
                        stream: !0
                    });
                    let a = Ir(i, r);
                    for(; void 0 !== a;)n(i.slice(0, a.index)), i = i.slice(a.index + a.length), a = Ir(i, 0);
                }
                i += o.decode(), i.trim().length > 0 && n(i);
            } catch (e) {
                r.failure = e;
            } finally{
                s.releaseLock();
            }
            return r;
        })(y, ()=>r() - c).then((e)=>{
            const t = r() - c, n = void 0 === e.firstContentMs ? void 0 : Math.max(0, t - e.firstContentMs);
            u({
                ...m,
                firstEventMs: e.firstEventMs,
                firstContentMs: e.firstContentMs,
                streamMs: n,
                totalMs: t,
                outputTokens: e.outputTokens,
                outputTokensPerSecond: void 0 !== e.outputTokens && void 0 !== n && n > 0 ? e.outputTokens / n * 1e3 : void 0,
                ...void 0 === e.modelId ? {} : {
                    modelId: e.modelId
                },
                ...void 0 === e.failure ? {
                    outcome: h
                } : kr(e.failure, l)
            });
        });
        return new Response(function(e, t) {
            const r = e.getReader();
            return new ReadableStream({
                async pull (e) {
                    let n;
                    try {
                        n = await r.read();
                    } catch (r) {
                        return await t, void e.error(r);
                    }
                    if (n.done) return await t, void e.close();
                    e.enqueue(n.value);
                },
                cancel: (e)=>r.cancel(e)
            });
        }(g, w), {
            status: d.status,
            statusText: d.statusText,
            headers: d.headers
        });
    };
}
const Sr = new RegExp([
    String.raw`"type"\s*:\s*"response\.(?:output_text|reasoning_summary_text|reasoning_text|function_call_arguments|refusal)\.(?:delta|done)"`,
    String.raw`"(?:content|reasoning_content|reasoning|refusal)"\s*:\s*"(?!")`,
    String.raw`"tool_calls"\s*:\s*\[\s*\{`,
    String.raw`"type"\s*:\s*"content_block_delta"`
].join("|")), br = /"model"\s*:\s*"([^"\\\s]{1,256})"/, Er = /"(?:output_tokens|completion_tokens)"\s*:\s*(\d+)/;
function Ir(e, t) {
    const r = e.indexOf("\n\n", t), n = e.indexOf("\r\n\r\n", t);
    return -1 !== n && (-1 === r || n < r) ? {
        index: n,
        length: 4
    } : -1 === r ? void 0 : {
        index: r,
        length: 2
    };
}
function Cr(e) {
    for (const t of _r){
        const r = e.get(t)?.trim();
        if (void 0 !== r && vr(r)) return r;
    }
}
function kr(e, t) {
    const r = "object" == typeof e && null !== e && "name" in e && "string" == typeof e.name ? e.name : void 0;
    return {
        outcome: !0 === t?.aborted || "AbortError" === r || "CancelledError" === r ? "aborted" : "error",
        errorName: void 0 !== r && "" !== r ? r : e instanceof Error ? "Error" : typeof e
    };
}
const xr = "composerRootWriterDiagnostic:", Tr = 4096, Rr = 4, Br = 8, Pr = 6048e5, Jr = [
    "agent_checkpoint",
    "git_auto_accept",
    "transcript_recovery",
    "restore_or_rewind",
    "host_hydrate",
    "goal_mutation",
    "migration_or_import",
    "other"
], Mr = [
    "true",
    "false",
    "unknown"
], qr = [
    "turns",
    "todos",
    "plan",
    "summary",
    "file_states",
    "subagent_state",
    "tool_state",
    "goal_state",
    "configuration",
    "other"
], Dr = [
    "added",
    "removed",
    "changed"
];
function Or(e) {
    return `${xr}${e}`;
}
function Nr(e) {
    switch(e){
        case "turns":
            return "turns";
        case "todos":
            return "todos";
        case "plan":
        case "plans":
            return "plan";
        case "summary":
        case "summaryArchive":
        case "summaryArchives":
        case "selfSummaryCount":
            return "summary";
        case "fileStates":
        case "fileStatesV2":
        case "readPaths":
            return "file_states";
        case "subagentStates":
        case "subagentStateRefs":
        case "subagentThreads":
        case "subagentRunsByParentToolCallId":
        case "communicateUpdateHistory":
        case "communicateUpdateFinalSummary":
        case "communicateUpdateCompletedSubtitle":
        case "communicateUpdateStatesByParentToolCallId":
            return "subagent_state";
        case "pendingToolCalls":
        case "completedAskQuestionToolCallIds":
            return "tool_state";
        case "goalState":
            return "goal_state";
        case "mode":
        case "agentType":
        case "isRootProjectConversation":
        case "durableSkillBlocks":
        case "durableCustomModeId":
            return "configuration";
        default:
            return "other";
    }
}
function Fr(e, t) {
    if (void 0 === e) return {
        kind: "missing"
    };
    if ("string" != typeof e || (new TextEncoder).encode(e).byteLength > Tr) return {
        kind: "unavailable"
    };
    let r;
    try {
        r = JSON.parse(e);
    } catch  {
        return {
            kind: "unavailable"
        };
    }
    return Ur(r) ? r.writtenAtMs > t || t - r.writtenAtMs > Pr ? {
        kind: "unavailable"
    } : {
        kind: "record",
        record: r
    } : {
        kind: "unavailable"
    };
}
function Ur(e) {
    return !(!Qr(e) || 1 !== e.version) && !(!jr(e.rendererRootBlobIdHex) || void 0 !== e.previousRendererRootBlobIdHex && !jr(e.previousRendererRootBlobIdHex) || "boolean" != typeof e.predecessorVerified || !Gr(e.throughWriterSequence) || !Gr(e.writersOmitted) || "string" != typeof e.writerInstanceId || 0 === e.writerInstanceId.length || e.writerInstanceId.length > 128 || !Gr(e.writtenAtMs) || !Array.isArray(e.writers) || e.writers.length > Rr) && e.writers.every(Lr);
}
function Lr(e) {
    return !(!(Qr(e) && $r(Jr, e.reason) && $r(Mr, e.hostOwnedAtWrite) && Gr(e.fieldsOmitted) && Array.isArray(e.fields)) || e.fields.length > Br) && e.fields.every((e)=>Qr(e) && $r(qr, e.field) && $r(Dr, e.direction) && Gr(e.beforeCount) && Gr(e.afterCount));
}
function $r(e, t) {
    return "string" == typeof t && e.includes(t);
}
function Qr(e) {
    return "object" == typeof e && null !== e;
}
function jr(e) {
    return "string" == typeof e && /^[0-9a-f]{64}$/.test(e);
}
function Gr(e) {
    return "number" == typeof e && Number.isSafeInteger(e) && e >= 0;
}
