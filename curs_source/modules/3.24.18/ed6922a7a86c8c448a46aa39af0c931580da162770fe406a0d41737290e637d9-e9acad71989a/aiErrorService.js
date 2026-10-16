import { C, ie } from "./actions_2.js";
import { EA, nPe } from "./aiserver_pb.js";
import { Za, na } from "./authenticationService.js";
import { tP } from "./cgh.js";
import { Rs } from "./code_3.js";
import { $n, vi } from "./commands.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { So, bmn } from "./constants_8.js";
import { dtt, uko } from "./errors_9.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { Rx, hC } from "./layoutService.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { TM, XT } from "./uiOverlayService.js";
import { hu, io } from "./utils_pb.js";
var nCt, EXi;
export { EXi, nCt };
var __wakaru_fq_initialized = false;
export function fq() {
if (__wakaru_fq_initialized) return;
__wakaru_fq_initialized = true;
"use strict";
x(), hg(), hu(), vi(), Pn(), Ze(), Rx(), uko(), Za(), So(), EA(), TM(), im(), Qn(), nCt = vn("aiErrorService"), EXi = class {
    constructor(e, t, n, i, r, s, o){
        this.layoutService = e, this.instantiationService = t, this.cursorAuthenticationService = n, this.commandService = i, this.uiOverlayService = r, this.structuredLogService = s, this.logService = o, this.rerunTimestamps = [], this.handlers = [];
    }
    logLoginDebug(e, t) {
        t ? this.logService.info(`[login-error-debug] ${e}`, t) : this.logService.info(`[login-error-debug] ${e}`);
    }
    addErrorPopupHandler(e) {
        this.handlers.push(e);
    }
    removeErrorPopupHandler(e) {
        this.handlers = this.handlers.filter((t)=>t !== e);
    }
    tryRerun(e) {
        const t = this.okToRerun();
        this.rerunTimestamps.push(Date.now()), (e !== !0 || t) && this.saveRerunFunc !== void 0 && this.saveRerunFunc();
    }
    okToRerun() {
        const n = Date.now(), i = this.rerunTimestamps.slice(-2), r = i.length < 2 || !i.every((s)=>n - s < 5e3);
        return this.rerunTimestamps = this.rerunTimestamps.slice(-2), r;
    }
    shouldShowImmediateErrorMessage(e) {
        if (!(e instanceof Qo) || e.code === Rs.Canceled) return !1;
        const t = tP(e);
        if (!t) return !0;
        const n = t.error;
        return !(n === io.NOT_LOGGED_IN || n === io.AGENT_REQUIRES_LOGIN || n === io.PRO_USER_USAGE_LIMIT || n === io.FREE_USER_USAGE_LIMIT || n === io.FREE_USER_RATE_LIMIT_EXCEEDED || n === io.PRO_USER_RATE_LIMIT_EXCEEDED || n === io.BAD_API_KEY || n === io.BAD_MODEL_NAME || n === io.AUTH_TOKEN_EXPIRED || n === io.MAX_TOKENS || t.details?.shouldShowImmediateError === !1);
    }
    showImmediateErrorMessage(e, t, n, i, r, s, o) {
        if (t?.details?.shouldShowImmediateError === !1) return;
        if (!t?.isExpected) {
            const c = i.rawMessage ?? "unknown error", l = {
                bugId: r,
                bug: `automatic-from-connection-error.

request ID:${r}

error:${JSON.stringify(t?.error)}

error:${JSON.stringify(i)}`,
                priority: nPe.MEDIUM,
                protoURL: n,
                contactEmail: "automatic-from-connection-error",
                connectionErrorRaw: c,
                failingRequestID: r,
                connectErrorCode: i.code,
                errorDetailCode: e,
                errorDetailTitle: t?.details?.title,
                errorDetailDetail: t?.details?.detail
            }, u = i.cause;
            this.structuredLogService.warn("transport", "Automatic bug report submitted for unexpected connection error", {
                requestId: r,
                source: s,
                protoURL: n,
                connectErrorCode: Rs[i.code],
                errorDetailCode: e !== void 0 ? io[e] : void 0,
                errorDetailTitle: t?.details?.title,
                errorMessage: i.message,
                causeCode: u?.code,
                causeSyscall: u?.syscall,
                causeErrno: String(u?.errno)
            }), this.commandService.executeCommand(bmn, l).catch((h)=>this.logService.error("[AIErrorService] Failed to submit automatic bug report", h));
        }
        const a = {
            case: "internet",
            generationUUID: r,
            errorCode: void 0,
            source: s,
            error: t
        };
        this.uiOverlayService.showErrorMetadata(a);
    }
    handleError(e, t, n, i, r, s) {
        const o = tP(e);
        this.logService.error("error", e), this.logService.error("errordetail", o);
        const a = o?.error, c = o;
        if (this.saveRerunFunc = s, this.shouldShowImmediateErrorMessage(e)) {
            this.showImmediateErrorMessage(a, c, i, e, n, r, s);
            return;
        }
        if (a === io.NOT_LOGGED_IN || a === io.AGENT_REQUIRES_LOGIN) this.logLoginDebug("NOT_LOGGED_IN error received", {
            errorType: a === io.NOT_LOGGED_IN ? "NOT_LOGGED_IN" : "AGENT_REQUIRES_LOGIN",
            source: r,
            protoURL: i,
            generationUUID: n,
            model: t?.modelName,
            errorMessage: e.message,
            errorCode: Rs[e.code],
            errorDetailTitle: o?.details?.title,
            errorDetailDetail: o?.details?.detail,
            hasRerunCallback: !!s
        }), this.logLoginDebug("Attempting token refresh via cursorAuth.triggerTokenRefresh"), this.commandService.executeCommand("cursorAuth.triggerTokenRefresh", !0).then(async ()=>{
            await new Promise((p)=>setTimeout(p, 100));
            const l = await this.cursorAuthenticationService.getAccessToken(), u = l ? this.cursorAuthenticationService.isTokenExpired(l) : !0;
            if (this.logLoginDebug("Token refresh completed", {
                hasNewAccessToken: !!l,
                isTokenExpired: u,
                hasRerunCallback: !!s,
                tokenLength: l ? l.length : 0
            }), s && l && !u) {
                const p = this.okToRerun();
                if (this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Token valid, attempting rerun", {
                    okToRerun: p,
                    rerunTimestampsCount: this.rerunTimestamps.length
                }), p) {
                    s();
                    return;
                }
                this.logLoginDebug("Rerun rate-limited, showing login dialog");
            } else this.logLoginDebug("Token refresh did not help", {
                reason: l ? u ? "token_expired" : "no_rerun_callback" : "no_token"
            });
            const h = t?.modelName ?? "undefined";
            this.logLoginDebug("Showing login dialog", {
                model: h,
                handlersCount: this.handlers.length
            }), this.handlers.forEach((p)=>p(new dtt(h, a, ()=>{
                    if (this.logLoginDebug("Login dialog rerun callback triggered"), s) {
                        const g = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Rerun from dialog", {
                            okToRerun: g
                        }), g && s();
                    }
                }), this.layoutService, this.instantiationService));
        }).catch((l)=>{
            this.logLoginDebug("Token refresh failed with error", {
                refreshError: String(l)
            });
            const u = t?.modelName ?? "undefined";
            this.handlers.forEach((h)=>h(new dtt(u, a, ()=>{
                    if (this.logLoginDebug("Login dialog rerun callback triggered (after refresh failure)"), s) {
                        const p = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Rerun from dialog (after refresh failure)", {
                            okToRerun: p
                        }), p && s();
                    }
                }), this.layoutService, this.instantiationService));
        });
        else if (a === io.PRO_USER_USAGE_LIMIT || a === io.FREE_USER_USAGE_LIMIT || a === io.FREE_USER_RATE_LIMIT_EXCEEDED || a === io.PRO_USER_RATE_LIMIT_EXCEEDED || a === io.BAD_API_KEY || a === io.BAD_MODEL_NAME) {
            const l = t?.modelName ?? "undefined";
            this.handlers.forEach((u)=>u(new dtt(l, a, ()=>{
                    if (s) {
                        const h = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), h && s();
                    }
                }), this.layoutService, this.instantiationService));
        } else a === io.AUTH_TOKEN_EXPIRED ? this.cursorAuthenticationService.refreshAuthentication().then(async ()=>{
            const l = await this.cursorAuthenticationService.getAccessToken();
            if (s && l && !this.cursorAuthenticationService.isTokenExpired(l)) {
                const u = this.okToRerun();
                this.rerunTimestamps.push(Date.now()), u && s();
            } else this.uiOverlayService.showErrorMetadata({
                case: "internet",
                generationUUID: n,
                source: r,
                error: o,
                errorCode: void 0
            });
        }) : a !== io.MAX_TOKENS && this.showImmediateErrorMessage(a, c, i, e, n, "other", s);
    }
}, EXi = ie([
    C(0, hC),
    C(1, _t),
    C(2, na),
    C(3, $n),
    C(4, XT),
    C(5, Xh),
    C(6, Wn)
], EXi), mn(nCt, EXi, 1);

}
