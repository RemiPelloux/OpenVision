import { EL } from "./Aeg.js";
import { bn, jn } from "./SZu.js";
import { Zse, n2 } from "./aiserver_pb.js";
import { Rs, ss } from "./authenticationService.js";
import { pr } from "./code_3.js";
import { nr, rs } from "./commands.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { pa, rpn } from "./constants_8.js";
import { Vis, b$ } from "./errors_10.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { UD, UI } from "./layoutService.js";
import { Ji, Li } from "./log.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { F, Re } from "./userDataProfile.js";
import { Hu, wo } from "./utils_pb.js";
var xzt, Kis;
export { Kis, xzt };
var __wakaru_FJ_initialized = false;
export function FJ() {
if (__wakaru_FJ_initialized) return;
__wakaru_FJ_initialized = true;
"use strict";
E(), dp(), Hu(), rs(), Rn(), It(), UD(), Vis(), Rs(), pa(), n2(), fS(), Cm(), Ji(), xzt = jn("aiErrorService"), Kis = class {
    constructor(t, e, n, i, r, s, o){
        this.layoutService = t, this.instantiationService = e, this.cursorAuthenticationService = n, this.commandService = i, this.uiOverlayService = r, this.structuredLogService = s, this.logService = o, this.rerunTimestamps = [], this.handlers = [];
    }
    logLoginDebug(t, e) {
        e ? this.logService.info(`[login-error-debug] ${t}`, e) : this.logService.info(`[login-error-debug] ${t}`);
    }
    addErrorPopupHandler(t) {
        this.handlers.push(t);
    }
    removeErrorPopupHandler(t) {
        this.handlers = this.handlers.filter((e)=>e !== t);
    }
    tryRerun(t) {
        const e = this.okToRerun();
        this.rerunTimestamps.push(Date.now()), (t !== !0 || e) && this.saveRerunFunc !== void 0 && this.saveRerunFunc();
    }
    okToRerun() {
        const n = Date.now(), i = this.rerunTimestamps.slice(-2), r = i.length < 2 || !i.every((s)=>n - s < 5e3);
        return this.rerunTimestamps = this.rerunTimestamps.slice(-2), r;
    }
    shouldShowImmediateErrorMessage(t) {
        if (!(t instanceof Us) || t.code === pr.Canceled) return !1;
        const e = EL(t);
        if (!e) return !0;
        const n = e.error;
        return !(n === wo.NOT_LOGGED_IN || n === wo.AGENT_REQUIRES_LOGIN || n === wo.PRO_USER_USAGE_LIMIT || n === wo.FREE_USER_USAGE_LIMIT || n === wo.FREE_USER_RATE_LIMIT_EXCEEDED || n === wo.PRO_USER_RATE_LIMIT_EXCEEDED || n === wo.BAD_API_KEY || n === wo.BAD_MODEL_NAME || n === wo.AUTH_TOKEN_EXPIRED || n === wo.MAX_TOKENS || e.details?.shouldShowImmediateError === !1);
    }
    showImmediateErrorMessage(t, e, n, i, r, s, o) {
        if (e?.details?.shouldShowImmediateError === !1) return;
        if (!e?.isExpected) {
            const l = i.rawMessage ?? "unknown error", c = {
                bugId: r,
                bug: `automatic-from-connection-error.

request ID:${r}

error:${JSON.stringify(e?.error)}

error:${JSON.stringify(i)}`,
                priority: Zse.MEDIUM,
                protoURL: n,
                contactEmail: "automatic-from-connection-error",
                connectionErrorRaw: l,
                failingRequestID: r,
                connectErrorCode: i.code,
                errorDetailCode: t,
                errorDetailTitle: e?.details?.title,
                errorDetailDetail: e?.details?.detail
            }, u = i.cause;
            this.structuredLogService.warn("transport", "Automatic bug report submitted for unexpected connection error", {
                requestId: r,
                source: s,
                protoURL: n,
                connectErrorCode: pr[i.code],
                errorDetailCode: t !== void 0 ? wo[t] : void 0,
                errorDetailTitle: e?.details?.title,
                errorMessage: i.message,
                causeCode: u?.code,
                causeSyscall: u?.syscall,
                causeErrno: String(u?.errno)
            }), this.commandService.executeCommand(rpn, c).catch((d)=>this.logService.error("[AIErrorService] Failed to submit automatic bug report", d));
        }
        const a = {
            case: "internet",
            generationUUID: r,
            errorCode: void 0,
            source: s,
            error: e
        };
        this.uiOverlayService.showErrorMetadata(a);
    }
    handleError(t, e, n, i, r, s) {
        const o = EL(t);
        this.logService.error("error", t), this.logService.error("errordetail", o);
        const a = o?.error, l = o;
        if (this.saveRerunFunc = s, this.shouldShowImmediateErrorMessage(t)) {
            this.showImmediateErrorMessage(a, l, i, t, n, r, s);
            return;
        }
        if (a === wo.NOT_LOGGED_IN || a === wo.AGENT_REQUIRES_LOGIN) this.logLoginDebug("NOT_LOGGED_IN error received", {
            errorType: a === wo.NOT_LOGGED_IN ? "NOT_LOGGED_IN" : "AGENT_REQUIRES_LOGIN",
            source: r,
            protoURL: i,
            generationUUID: n,
            model: e?.modelName,
            errorMessage: t.message,
            errorCode: pr[t.code],
            errorDetailTitle: o?.details?.title,
            errorDetailDetail: o?.details?.detail,
            hasRerunCallback: !!s
        }), this.logLoginDebug("Attempting token refresh via cursorAuth.triggerTokenRefresh"), this.commandService.executeCommand("cursorAuth.triggerTokenRefresh", !0).then(async ()=>{
            await new Promise((h)=>setTimeout(h, 100));
            const c = await this.cursorAuthenticationService.getAccessToken(), u = c ? this.cursorAuthenticationService.isTokenExpired(c) : !0;
            if (this.logLoginDebug("Token refresh completed", {
                hasNewAccessToken: !!c,
                isTokenExpired: u,
                hasRerunCallback: !!s,
                tokenLength: c ? c.length : 0
            }), s && c && !u) {
                const h = this.okToRerun();
                if (this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Token valid, attempting rerun", {
                    okToRerun: h,
                    rerunTimestampsCount: this.rerunTimestamps.length
                }), h) {
                    s();
                    return;
                }
                this.logLoginDebug("Rerun rate-limited, showing login dialog");
            } else this.logLoginDebug("Token refresh did not help", {
                reason: c ? u ? "token_expired" : "no_rerun_callback" : "no_token"
            });
            const d = e?.modelName ?? "undefined";
            this.logLoginDebug("Showing login dialog", {
                model: d,
                handlersCount: this.handlers.length
            }), this.handlers.forEach((h)=>h(new b$(d, a, ()=>{
                    if (this.logLoginDebug("Login dialog rerun callback triggered"), s) {
                        const p = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Rerun from dialog", {
                            okToRerun: p
                        }), p && s();
                    }
                }), this.layoutService, this.instantiationService));
        }).catch((c)=>{
            this.logLoginDebug("Token refresh failed with error", {
                refreshError: String(c)
            });
            const u = e?.modelName ?? "undefined";
            this.handlers.forEach((d)=>d(new b$(u, a, ()=>{
                    if (this.logLoginDebug("Login dialog rerun callback triggered (after refresh failure)"), s) {
                        const h = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), this.logLoginDebug("Rerun from dialog (after refresh failure)", {
                            okToRerun: h
                        }), h && s();
                    }
                }), this.layoutService, this.instantiationService));
        });
        else if (a === wo.PRO_USER_USAGE_LIMIT || a === wo.FREE_USER_USAGE_LIMIT || a === wo.FREE_USER_RATE_LIMIT_EXCEEDED || a === wo.PRO_USER_RATE_LIMIT_EXCEEDED || a === wo.BAD_API_KEY || a === wo.BAD_MODEL_NAME) {
            const c = e?.modelName ?? "undefined";
            this.handlers.forEach((u)=>u(new b$(c, a, ()=>{
                    if (s) {
                        const d = this.okToRerun();
                        this.rerunTimestamps.push(Date.now()), d && s();
                    }
                }), this.layoutService, this.instantiationService));
        } else a === wo.AUTH_TOKEN_EXPIRED ? this.cursorAuthenticationService.refreshAuthentication().then(async ()=>{
            const c = await this.cursorAuthenticationService.getAccessToken();
            if (s && c && !this.cursorAuthenticationService.isTokenExpired(c)) {
                const u = this.okToRerun();
                this.rerunTimestamps.push(Date.now()), u && s();
            } else this.uiOverlayService.showErrorMetadata({
                case: "internet",
                generationUUID: n,
                source: r,
                error: o,
                errorCode: void 0
            });
        }) : a !== wo.MAX_TOKENS && this.showImmediateErrorMessage(a, l, i, t, n, "other", s);
    }
}, Kis = Re([
    F(0, UI),
    F(1, dn),
    F(2, ss),
    F(3, nr),
    F(4, Z_),
    F(5, wh),
    F(6, Li)
], Kis), bn(xzt, Kis, 1);

}
