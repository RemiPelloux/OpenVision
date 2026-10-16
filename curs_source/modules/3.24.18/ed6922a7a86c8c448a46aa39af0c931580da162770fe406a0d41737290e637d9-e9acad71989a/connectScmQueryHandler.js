import { oL } from "./A3u.js";
import { Sg, jp } from "./aiService.js";
import { Za, na } from "./authenticationService.js";
import { Jm, ps } from "./composer_pb.js";
import { $4i, B4i, F4i, U4i, WQe } from "./connect_scm_tool_pb.js";
import { PR, ZM } from "./cursorCredsService.js";
import { Jh, OPn } from "./dashboard_pb.js";
import { Ml } from "./index.ts";
import { eo, ko } from "./opener.js";
import { Lmt } from "./private-inference-features.ts";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { D6 } from "./privateInferenceFeatures.js";
import { Bbt, GIn, VIn, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
function tJv(e) {
    return e.args?.target.case === "github" ? e.args.target.value : void 0;
}
function nJv(e) {
    if (!(!e?.owner || !e.repo)) return `${e.owner}/${e.repo}`;
}
function iJv(e) {
    return new GIn({
        repository: e?.repository ? new VIn({
            owner: e.repository.owner,
            repo: e.repository.repo
        }) : void 0,
        gheApplication: e?.gheApplication
    });
}
function rJv(e, t) {
    return new Promise((n)=>{
        const i = setTimeout(()=>{
            t?.removeEventListener("abort", r), n();
        }, e), r = ()=>{
            clearTimeout(i), n();
        };
        t?.addEventListener("abort", r, {
            once: !0
        });
    });
}
function nTo() {
    return new WQe({
        result: {
            case: "approved",
            value: new F4i
        }
    });
}
function wjt(e) {
    return new WQe({
        result: {
            case: "rejected",
            value: new B4i({
                reason: e
            })
        }
    });
}
function Qde(e) {
    return new WQe({
        result: {
            case: "failed",
            value: new U4i({
                error: e
            })
        }
    });
}
var ZTh, QTh, JTh, eEh, tEh, nEh;
export { JTh, QTh, Qde, ZTh, eEh, iJv, nEh, nJv, nTo, rJv, tEh, tJv, wjt };
var __wakaru_sJv_initialized = false;
export function sJv() {
if (__wakaru_sJv_initialized) return;
__wakaru_sJv_initialized = true;
"use strict";
x(), Ml(), $4i(), Jm(), Jh(), ql(), ko(), Sg(), ZM(), Za(), Hx(), D6(), ZTh = 2500, QTh = 1e4, JTh = 12e4, eEh = 6e5, tEh = 6e4, nEh = class {
    constructor(e){
        this.context = e, this.handledToolCalls = new Set, this.connectInProgress = !1;
    }
    trackDecision(e, t) {
        this.context.trackConnectScmDecision?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: e,
            decision: t
        });
    }
    trackOutcome(e, t, n) {
        this.context.trackConnectScmOutcome?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: e,
            outcome: t,
            durationMs: Date.now() - n
        });
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    getOpenerService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(eo));
    }
    async getDashboardClient() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(jp)).dashboardClient();
    }
    async buildConnectGithubUrl(e) {
        return this.context.instantiationService.invokeFunction(async (t)=>{
            const n = t.get(na), i = t.get(PR), r = await n.getAccessToken();
            if (!r) return;
            const s = n.getAuthIdFromToken(r);
            if (s) return i.getConnectGithubUrl({
                authId: s,
                githubRepo: e
            });
        });
    }
    async isScmConnected(e, t) {
        try {
            return (await e.getScmConnectionStatus(new OPn({
                gheApplication: t
            }))).connected;
        } catch  {
            return !1;
        }
    }
    async handleConnectScmRequest(e) {
        const t = e.args?.toolCallId;
        if (!t) return Qde("Missing toolCallId");
        if (this.handledToolCalls.has(t)) return Qde("Connect SCM already handled");
        if (this.connectInProgress) return Qde("A GitHub connect flow is already in progress");
        const n = this.context.instantiationService.invokeFunction((f)=>f.get(uT));
        if (!oL(n, "scm-integration")) return Qde(Lmt);
        this.handledToolCalls.add(t);
        const i = Date.now(), r = tJv(e), s = nJv(r?.repository), o = r?.gheApplication, a = this.getToolFormer(), c = await this.getDashboardClient(), l = new Bbt({
            github: iJv(r)
        }), u = JSON.stringify({
            github: {
                repository: r?.repository ? {
                    owner: r.repository.owner,
                    repo: r.repository.repo
                } : void 0,
                gheApplication: o
            }
        }), h = a.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: t,
            toolCallType: nt.CONNECT_SCM,
            params: {
                case: "connectScmParams",
                value: l
            },
            rawArgs: u,
            name: "connect_scm"
        });
        if (a.setBubbleData(h, {
            tool: nt.CONNECT_SCM,
            toolCallId: t,
            name: "connect_scm",
            rawArgs: u,
            params: l,
            additionalData: {
                alreadyConnected: !1,
                connectOutcome: void 0,
                failureReason: void 0
            }
        }), await this.isScmConnected(c, o)) return a.setBubbleData(h, {
            userDecision: "accepted",
            status: "completed",
            additionalData: {
                alreadyConnected: !0,
                connectOutcome: void 0,
                failureReason: void 0
            }
        }), this.handledToolCalls.delete(t), this.trackOutcome(t, "already_connected", i), nTo();
        const p = a.getBubbleData(h);
        if (p?.userDecision !== void 0) return this.handledToolCalls.delete(t), p.userDecision === "accepted" ? this.performConnect(c, {
            githubRepo: s,
            gheApplication: o
        }, h, a, {
            toolCallId: t,
            startedAtMs: i
        }) : (this.trackOutcome(t, "skipped", i), wjt("User skipped connecting GitHub"));
        const g = this.context.composerDataHandle.data.composerId;
        return this.context.trackTrajectoryStopped?.({
            composerId: g,
            invocationID: this.context.generationUUID,
            toolCallId: t,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "connect_scm.needs_approval"
        }), new Promise((f, v)=>{
            let b = !1, y = ()=>{}, T;
            const E = this.context.conversationActionManager.signal, A = ()=>{
                y(), T !== void 0 && clearTimeout(T), E.removeEventListener("abort", P);
            }, R = (N)=>{
                b || (b = !0, A(), this.handledToolCalls.delete(t), f(N));
            }, D = (N, O)=>{
                b || (this.markConnectFailed(a, h, N), this.trackOutcome(t, O, i), R(Qde(N)));
            }, P = ()=>D("Connecting GitHub was canceled", "canceled");
            if (y = a.addPendingDecision(h, nt.CONNECT_SCM, t, (N)=>{
                b || (N ? (b = !0, A(), this.handledToolCalls.delete(t), this.trackDecision(t, "connect"), this.performConnect(c, {
                    githubRepo: s,
                    gheApplication: o
                }, h, a, {
                    toolCallId: t,
                    startedAtMs: i
                }).then(f, v)) : (this.trackDecision(t, "skip"), this.trackOutcome(t, "skipped", i), R(wjt("User skipped connecting GitHub"))));
            }, !0), T = setTimeout(()=>D("Timed out waiting for a response to the Connect GitHub prompt", "approval_timeout"), this.context.approvalTimeoutMs ?? tEh), E.aborted) {
                P();
                return;
            }
            E.addEventListener("abort", P, {
                once: !0
            });
        });
    }
    async performConnect(e, t, n, i, r) {
        const { toolCallId: s, startedAtMs: o } = r;
        if (this.connectInProgress) {
            const c = "A GitHub connect flow is already in progress";
            return this.markConnectFailed(i, n, c), this.trackOutcome(s, "failed", o), Qde(c);
        }
        this.connectInProgress = !0;
        const a = this.context.conversationActionManager.signal;
        i.setBubbleData(n, {
            status: "loading"
        });
        try {
            const c = await this.buildConnectGithubUrl(t.githubRepo);
            if (c === void 0) {
                const g = "You must be signed in to Cursor to connect GitHub";
                return this.markConnectFailed(i, n, g), this.trackOutcome(s, "failed", o), Qde(g);
            }
            await this.getOpenerService().open(c, {
                openExternal: !0,
                fromUserGesture: !0
            });
            const l = Date.now(), u = l + (this.context.connectTimeoutMs ?? eEh);
            for(; Date.now() < u;){
                if (a.aborted) {
                    const f = "Connecting GitHub was canceled";
                    return this.markConnectFailed(i, n, f), this.trackOutcome(s, "canceled", o), Qde(f);
                }
                if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), wjt("User skipped connecting GitHub");
                if (await this.isScmConnected(e, t.gheApplication)) {
                    if (a.aborted) {
                        const f = "Connecting GitHub was canceled";
                        return this.markConnectFailed(i, n, f), this.trackOutcome(s, "canceled", o), Qde(f);
                    }
                    return i.getBubbleData(n)?.userDecision === "rejected" ? (this.trackOutcome(s, "skipped", o), wjt("User skipped connecting GitHub")) : (i.setBubbleData(n, {
                        status: "completed"
                    }), this.trackOutcome(s, "connected", o), nTo());
                }
                const g = Date.now() - l < JTh ? ZTh : QTh;
                await rJv(g, a);
            }
            if (a.aborted) {
                const g = "Connecting GitHub was canceled";
                return this.markConnectFailed(i, n, g), this.trackOutcome(s, "canceled", o), Qde(g);
            }
            if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), wjt("User skipped connecting GitHub");
            const h = await this.isScmConnected(e, t.gheApplication);
            if (a.aborted) {
                const g = "Connecting GitHub was canceled";
                return this.markConnectFailed(i, n, g), this.trackOutcome(s, "canceled", o), Qde(g);
            }
            if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), wjt("User skipped connecting GitHub");
            if (h) return i.setBubbleData(n, {
                status: "completed"
            }), this.trackOutcome(s, "connected", o), nTo();
            const p = "Connecting GitHub timed out";
            return this.markConnectFailed(i, n, p), this.trackOutcome(s, "connect_timeout", o), Qde(p);
        } catch (c) {
            const u = `Failed to connect GitHub: ${c instanceof Error ? c.message : String(c)}`;
            return this.markConnectFailed(i, n, u), this.trackOutcome(s, "failed", o), Qde(u);
        } finally{
            this.connectInProgress = !1;
        }
    }
    markConnectFailed(e, t, n) {
        e.setBubbleData(t, {
            status: "cancelled",
            additionalData: {
                connectOutcome: "failed",
                failureReason: n
            }
        });
    }
};

}
