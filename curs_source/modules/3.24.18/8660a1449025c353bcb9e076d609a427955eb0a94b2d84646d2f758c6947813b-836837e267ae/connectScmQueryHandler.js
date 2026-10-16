import { ZCe, eSk, iSk, kAn, nSk, rcl, tSk } from "./Ycg.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { mo, tf } from "./composer_pb.js";
import { kSr } from "./connect_scm_tool_pb.js";
import { Ub, py } from "./cursorCredsService.js";
import { Du, hTn } from "./dashboard_pb.js";
import { nl } from "./index.ts";
import { kc, qc } from "./opener.js";
import { dhn } from "./private-inference-features.ts";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { Ct, D4t, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { aN } from "./yBp.js";
var bpg, ypg, Spg, kpg, wpg, Cpg;
export { Cpg, Spg, bpg, kpg, wpg, ypg };
var __wakaru_rSk_initialized = false;
export function rSk() {
if (__wakaru_rSk_initialized) return;
__wakaru_rSk_initialized = true;
"use strict";
E(), nl(), kSr(), tf(), Du(), Pu(), qc(), Dc(), py(), Rs(), EE(), PB(), bpg = 2500, ypg = 1e4, Spg = 12e4, kpg = 6e5, wpg = 6e4, Cpg = class {
    constructor(t){
        this.context = t, this.handledToolCalls = new Set, this.connectInProgress = !1;
    }
    trackDecision(t, e) {
        this.context.trackConnectScmDecision?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: t,
            decision: e
        });
    }
    trackOutcome(t, e, n) {
        this.context.trackConnectScmOutcome?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: t,
            outcome: e,
            durationMs: Date.now() - n
        });
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    getOpenerService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(kc));
    }
    async getDashboardClient() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(jl)).dashboardClient();
    }
    async buildConnectGithubUrl(t) {
        return this.context.instantiationService.invokeFunction(async (e)=>{
            const n = e.get(ss), i = e.get(Ub), r = await n.getAccessToken();
            if (!r) return;
            const s = n.getAuthIdFromToken(r);
            if (s) return i.getConnectGithubUrl({
                authId: s,
                githubRepo: t
            });
        });
    }
    async isScmConnected(t, e) {
        try {
            return (await t.getScmConnectionStatus(new hTn({
                gheApplication: e
            }))).connected;
        } catch  {
            return !1;
        }
    }
    async handleConnectScmRequest(t) {
        const e = t.args?.toolCallId;
        if (!e) return ZCe("Missing toolCallId");
        if (this.handledToolCalls.has(e)) return ZCe("Connect SCM already handled");
        if (this.connectInProgress) return ZCe("A GitHub connect flow is already in progress");
        const n = this.context.instantiationService.invokeFunction((g)=>g.get(mT));
        if (!aN(n, "scm-integration")) return ZCe(dhn);
        this.handledToolCalls.add(e);
        const i = Date.now(), r = eSk(t), s = tSk(r?.repository), o = r?.gheApplication, a = this.getToolFormer(), l = await this.getDashboardClient(), c = new D4t({
            github: nSk(r)
        }), u = JSON.stringify({
            github: {
                repository: r?.repository ? {
                    owner: r.repository.owner,
                    repo: r.repository.repo
                } : void 0,
                gheApplication: o
            }
        }), d = a.getOrCreateBubbleId({
            toolCallId: e,
            toolIndex: 0,
            modelCallId: e,
            toolCallType: Ct.CONNECT_SCM,
            params: {
                case: "connectScmParams",
                value: c
            },
            rawArgs: u,
            name: "connect_scm"
        });
        if (a.setBubbleData(d, {
            tool: Ct.CONNECT_SCM,
            toolCallId: e,
            name: "connect_scm",
            rawArgs: u,
            params: c,
            additionalData: {
                alreadyConnected: !1,
                connectOutcome: void 0,
                failureReason: void 0
            }
        }), await this.isScmConnected(l, o)) return a.setBubbleData(d, {
            userDecision: "accepted",
            status: "completed",
            additionalData: {
                alreadyConnected: !0,
                connectOutcome: void 0,
                failureReason: void 0
            }
        }), this.handledToolCalls.delete(e), this.trackOutcome(e, "already_connected", i), rcl();
        const h = a.getBubbleData(d);
        if (h?.userDecision !== void 0) return this.handledToolCalls.delete(e), h.userDecision === "accepted" ? this.performConnect(l, {
            githubRepo: s,
            gheApplication: o
        }, d, a, {
            toolCallId: e,
            startedAtMs: i
        }) : (this.trackOutcome(e, "skipped", i), kAn("User skipped connecting GitHub"));
        const p = this.context.composerDataHandle.data.composerId;
        return this.context.trackTrajectoryStopped?.({
            composerId: p,
            invocationID: this.context.generationUUID,
            toolCallId: e,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "connect_scm.needs_approval"
        }), new Promise((g, f)=>{
            let _ = !1, b = ()=>{}, y;
            const S = this.context.conversationActionManager.signal, k = ()=>{
                b(), y !== void 0 && clearTimeout(y), S.removeEventListener("abort", I);
            }, C = (A)=>{
                _ || (_ = !0, k(), this.handledToolCalls.delete(e), g(A));
            }, T = (A, P)=>{
                _ || (this.markConnectFailed(a, d, A), this.trackOutcome(e, P, i), C(ZCe(A)));
            }, I = ()=>T("Connecting GitHub was canceled", "canceled");
            if (b = a.addPendingDecision(d, Ct.CONNECT_SCM, e, (A)=>{
                _ || (A ? (_ = !0, k(), this.handledToolCalls.delete(e), this.trackDecision(e, "connect"), this.performConnect(l, {
                    githubRepo: s,
                    gheApplication: o
                }, d, a, {
                    toolCallId: e,
                    startedAtMs: i
                }).then(g, f)) : (this.trackDecision(e, "skip"), this.trackOutcome(e, "skipped", i), C(kAn("User skipped connecting GitHub"))));
            }, !0), y = setTimeout(()=>T("Timed out waiting for a response to the Connect GitHub prompt", "approval_timeout"), this.context.approvalTimeoutMs ?? wpg), S.aborted) {
                I();
                return;
            }
            S.addEventListener("abort", I, {
                once: !0
            });
        });
    }
    async performConnect(t, e, n, i, r) {
        const { toolCallId: s, startedAtMs: o } = r;
        if (this.connectInProgress) {
            const l = "A GitHub connect flow is already in progress";
            return this.markConnectFailed(i, n, l), this.trackOutcome(s, "failed", o), ZCe(l);
        }
        this.connectInProgress = !0;
        const a = this.context.conversationActionManager.signal;
        i.setBubbleData(n, {
            status: "loading"
        });
        try {
            const l = await this.buildConnectGithubUrl(e.githubRepo);
            if (l === void 0) {
                const p = "You must be signed in to Cursor to connect GitHub";
                return this.markConnectFailed(i, n, p), this.trackOutcome(s, "failed", o), ZCe(p);
            }
            await this.getOpenerService().open(l, {
                openExternal: !0,
                fromUserGesture: !0
            });
            const c = Date.now(), u = c + (this.context.connectTimeoutMs ?? kpg);
            for(; Date.now() < u;){
                if (a.aborted) {
                    const g = "Connecting GitHub was canceled";
                    return this.markConnectFailed(i, n, g), this.trackOutcome(s, "canceled", o), ZCe(g);
                }
                if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), kAn("User skipped connecting GitHub");
                if (await this.isScmConnected(t, e.gheApplication)) {
                    if (a.aborted) {
                        const g = "Connecting GitHub was canceled";
                        return this.markConnectFailed(i, n, g), this.trackOutcome(s, "canceled", o), ZCe(g);
                    }
                    return i.getBubbleData(n)?.userDecision === "rejected" ? (this.trackOutcome(s, "skipped", o), kAn("User skipped connecting GitHub")) : (i.setBubbleData(n, {
                        status: "completed"
                    }), this.trackOutcome(s, "connected", o), rcl());
                }
                const p = Date.now() - c < Spg ? bpg : ypg;
                await iSk(p, a);
            }
            if (a.aborted) {
                const p = "Connecting GitHub was canceled";
                return this.markConnectFailed(i, n, p), this.trackOutcome(s, "canceled", o), ZCe(p);
            }
            if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), kAn("User skipped connecting GitHub");
            const d = await this.isScmConnected(t, e.gheApplication);
            if (a.aborted) {
                const p = "Connecting GitHub was canceled";
                return this.markConnectFailed(i, n, p), this.trackOutcome(s, "canceled", o), ZCe(p);
            }
            if (i.getBubbleData(n)?.userDecision === "rejected") return this.trackOutcome(s, "skipped", o), kAn("User skipped connecting GitHub");
            if (d) return i.setBubbleData(n, {
                status: "completed"
            }), this.trackOutcome(s, "connected", o), rcl();
            const h = "Connecting GitHub timed out";
            return this.markConnectFailed(i, n, h), this.trackOutcome(s, "connect_timeout", o), ZCe(h);
        } catch (l) {
            const u = `Failed to connect GitHub: ${l instanceof Error ? l.message : String(l)}`;
            return this.markConnectFailed(i, n, u), this.trackOutcome(s, "failed", o), ZCe(u);
        } finally{
            this.connectInProgress = !1;
        }
    }
    markConnectFailed(t, e, n) {
        t.setBubbleData(e, {
            status: "cancelled",
            additionalData: {
                connectOutcome: "failed",
                failureReason: n
            }
        });
    }
};

}
