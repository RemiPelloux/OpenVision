import { nv } from "./SZu.js";
import { _ll, bbk, xdg } from "./Ycg.js";
import { tT } from "./errorMessage.js";
import { uie } from "./index_11.ts";
import { E7a, bki } from "./subagent.ts";
import { S1r, a9t, q$e } from "./subagent_exec_pb.js";
import { TAe, bQ, zse } from "./subagents_pb.js";
import { E } from "./tslib.es6.js";
import { H91 } from "./yBp.js";
var Pdg, Mdg, Ddg, Ndg, Ldg, Odg, bll;
export { Ddg, Ldg, Mdg, Ndg, Odg, Pdg, bll };
var __wakaru_ybk_initialized = false;
export function ybk() {
if (__wakaru_ybk_initialized) return;
__wakaru_ybk_initialized = true;
"use strict";
E(), uie(), tT(), bQ(), q$e(), q$e(), Pdg = 100, Mdg = 100, Ddg = "watchVideo", Ndg = 5, Ldg = 35 * 1024 * 1024, Odg = 32, bll = class {
    constructor(t, e = ()=>!1, n, i){
        this.subagentComposerService = t, this.isSubagentInterruptEnabled = e, this.cloudSubagentRunner = n, this.experimentService = i, this.handles = new Map, this.activeForegroundExecutions = new Map, this.pendingForegroundBackgroundToolCallIds = new Set, this.backgroundRunOrdinalByAgent = new Map, this.interruptedBackgroundRunKeys = new Set, this.pendingIdempotentReplayAgentIds = new Set, this.runningLocalSubagentRunCount = 0;
    }
    async createOrResumeSession(t, e) {
        let n, i;
        try {
            if (this.isAwaitBackgroundMode(e)) return e.resumeAgentId;
            const r = await this.withReplayResumeTarget(e);
            if (e = r.args, r.idempotentReplayResume) {
                if (e.resumeAgentId) {
                    if (!this.pendingIdempotentReplayAgentIds.has(e.resumeAgentId) && this.pendingIdempotentReplayAgentIds.size >= Mdg) {
                        const a = this.pendingIdempotentReplayAgentIds.values().next().value;
                        a !== void 0 && this.pendingIdempotentReplayAgentIds.delete(a);
                    }
                    this.pendingIdempotentReplayAgentIds.add(e.resumeAgentId), i = e.resumeAgentId;
                }
            } else await this.handleRunningBackgroundResume(e);
            if (this.isCloudEnvironment(e)) {
                const a = await this.requireCloudSubagentRunner().createOrResumeCloudSubagent(this.toSubagentExecutorArgs(e, t, r));
                return this.subagentComposerService.linkParentToSubagent(e.toolCallId, a, e.parentConversationId), a;
            }
            const s = await this.subagentComposerService.createOrResumeSubagent(this.toSubagentExecutorArgs(e, t, r));
            return n = s.data.composerId, this.handles.set(n, s), n;
        } catch (r) {
            throw i && this.pendingIdempotentReplayAgentIds.delete(i), this.toHostError(r, n ?? e.resumeAgentId);
        }
    }
    async withReplayResumeTarget(t) {
        if (t.resumeAgentId || t.forkAgentId || !t.toolCallId || this.isCloudEnvironment(t)) return {
            args: t
        };
        const e = t.parentConversationId?.trim(), n = await this.subagentComposerService.findSubagentForToolCall(t.toolCallId, e || void 0);
        return n ? {
            args: {
                ...t,
                resumeAgentId: n
            },
            idempotentReplayResume: !0
        } : {
            args: t
        };
    }
    async replayRunningBackgroundHandoff(t, e) {
        if (this.pendingIdempotentReplayAgentIds.delete(t) && this.subagentComposerService.isRunningInBackground({
            composerId: t
        })) return this.handles.delete(t), {
            status: "background",
            backgroundReason: e.runInBackground ? TAe.AGENT_REQUEST : TAe.USER_REQUEST,
            transcriptPath: await this.resolveBackgroundTranscriptPath(t, void 0),
            toolCallCount: 0
        };
    }
    async handleRunningBackgroundResume(t) {
        if (this.isQueueableResumeMode(t) && this.subagentComposerService.isRunningInBackground({
            composerId: t.resumeAgentId
        })) if (t.interrupt === !0 && this.isSubagentInterruptEnabled()) {
            const e = t.parentConversationId ?? "", n = this.cloudSubagentRunner?.isCloudSubagentOwnedByParent(t.resumeAgentId, e) === !0;
            let i = await this.subagentComposerService.canInterruptSubagentTree({
                composerId: t.resumeAgentId,
                parentConversationId: e
            });
            if (!i && n && (i = !0), !i) throw new Error(bki);
            const r = this.currentBackgroundRunKey(t.resumeAgentId);
            r && this.interruptedBackgroundRunKeys.add(r), n && this.cloudSubagentRunner?.markAsInterrupted(t.resumeAgentId), this.subagentComposerService.interruptSubagentTree(t.resumeAgentId);
        } else throw new Error(bki);
    }
    async runSession(t, e, n, i) {
        try {
            if (this.isAwaitBackgroundMode(n)) return this.awaitBackgroundSubagent(n.resumeAgentId, t.signal);
            const r = await this.replayRunningBackgroundHandoff(e, n);
            if (r) return r;
            if (this.isCloudEnvironment(n)) return this.runCloudSession(t, e, n);
            const s = this.handles.get(e);
            if (!s) return {
                status: "error",
                error: `Composer not found for run: ${e}`
            };
            const o = this.toSubagentExecutorArgs(n, t), a = n.continuationConfig, l = this.tryAcquireLocalRunSlot({
                bypassCap: n.interrupt === !0 && !!n.resumeAgentId
            });
            if (l === void 0) return {
                status: "error",
                error: H91({
                    maxRunning: this.getMaxRunningLocalSubagents()
                })
            };
            const c = {
                parentComposerId: o.parentConversationId,
                toolCallId: n.toolCallId
            };
            if (n.runInBackground) {
                const S = new AbortController, k = {
                    ...o,
                    abortSignal: S.signal
                }, C = (a ? this.subagentComposerService.runWithContinuation(k, s, a) : this.subagentComposerService.runSubagentWithHandle(k, s)).finally(l);
                return this.handoffToBackground(e, n.toolCallId, C, S, TAe.AGENT_REQUEST, c);
            }
            const u = new AbortController;
            let d = !1;
            const h = ()=>{
                d || u.abort();
            };
            t.signal.addEventListener("abort", h, {
                once: !0
            }), t.signal.aborted && h();
            const p = {
                ...o,
                abortSignal: u.signal
            }, g = (a ? this.subagentComposerService.runWithContinuation(p, s, a) : this.subagentComposerService.runSubagentWithHandle(p, s)).finally(l);
            let f;
            const _ = new Promise((S)=>{
                f = S;
            }), b = {
                requestBackground: ()=>d || u.signal.aborted ? !1 : (d = !0, t.signal.removeEventListener("abort", h), f?.(), !0)
            }, y = n.toolCallId;
            y && this.subagentComposerService.isLongRunningJobsEnabled() && (this.activeForegroundExecutions.set(y, b), this.pendingForegroundBackgroundToolCallIds.delete(y) && b.requestBackground());
            try {
                const S = await Promise.race([
                    g.then((C)=>({
                            kind: "completed",
                            result: C
                        })),
                    _.then(()=>({
                            kind: "backgrounded"
                        }))
                ]);
                if (S.kind === "backgrounded") return this.handoffToBackground(e, y, g, u, TAe.USER_REQUEST, c);
                const k = S.result;
                return k.success ? {
                    status: "completed",
                    finalMessage: k.finalMessage,
                    toolCallCount: k.toolCallCount ?? 0
                } : {
                    status: "error",
                    error: k.error ?? "Unknown subagent error"
                };
            } finally{
                y && this.activeForegroundExecutions.get(y) === b && this.activeForegroundExecutions.delete(y), d || t.signal.removeEventListener("abort", h), this.handles.delete(e);
            }
        } catch (r) {
            throw this.pendingIdempotentReplayAgentIds.delete(e), this.toHostError(r, e);
        }
    }
    releaseSession(t) {
        this.handles.delete(t), this.pendingIdempotentReplayAgentIds.delete(t);
    }
    async runCloudSession(t, e, n) {
        const i = this.requireCloudSubagentRunner(), r = this.toSubagentExecutorArgs(n, t), s = {
            parentComposerId: n.parentConversationId,
            toolCallId: n.toolCallId,
            suppressTranscriptPath: !0
        };
        if (n.runInBackground) {
            const f = new AbortController, _ = {
                ...r,
                abortSignal: f.signal
            }, b = i.runCloudSubagent(e, _);
            return this.handoffToBackground(e, n.toolCallId, b, f, TAe.AGENT_REQUEST, s);
        }
        const o = new AbortController;
        let a = !1;
        const l = ()=>{
            a || o.abort();
        };
        t.signal.addEventListener("abort", l, {
            once: !0
        }), t.signal.aborted && l();
        const c = {
            ...r,
            abortSignal: o.signal
        }, u = i.runCloudSubagent(e, c);
        let d;
        const h = new Promise((f)=>{
            d = f;
        }), p = {
            requestBackground: ()=>a || o.signal.aborted ? !1 : (a = !0, t.signal.removeEventListener("abort", l), d?.(), !0)
        }, g = n.toolCallId;
        g && this.subagentComposerService.isLongRunningJobsEnabled() && (this.activeForegroundExecutions.set(g, p), this.pendingForegroundBackgroundToolCallIds.delete(g) && p.requestBackground());
        try {
            const f = await Promise.race([
                u.then((b)=>({
                        kind: "completed",
                        result: b
                    })),
                h.then(()=>({
                        kind: "backgrounded"
                    }))
            ]);
            if (f.kind === "backgrounded") return this.handoffToBackground(e, g, u, o, TAe.USER_REQUEST, s);
            const _ = f.result;
            return xdg(_);
        } finally{
            g && this.activeForegroundExecutions.get(g) === p && this.activeForegroundExecutions.delete(g), a || t.signal.removeEventListener("abort", l);
        }
    }
    forceBackgroundByToolCallId(t) {
        const e = this.activeForegroundExecutions.get(t);
        let n;
        if (e) n = e.requestBackground() === !0 ? a9t.ACCEPTED : a9t.NOT_FOUND;
        else {
            if (this.pendingForegroundBackgroundToolCallIds.size >= Pdg) {
                const i = this.pendingForegroundBackgroundToolCallIds.values().next().value;
                i !== void 0 && this.pendingForegroundBackgroundToolCallIds.delete(i);
            }
            this.pendingForegroundBackgroundToolCallIds.add(t), n = a9t.ACCEPTED;
        }
        return new S1r({
            status: n
        });
    }
    async handoffToBackground(t, e, n, i, r, s) {
        const o = this.nextBackgroundRunKey(t), a = n.catch((l)=>{
            const c = nv(l);
            return console.error("[subagentExecutor] Background subagent failed", {
                agentId: t,
                toolCallId: e,
                errorType: l instanceof Error ? l.name : "unknown",
                errorMessage: c
            }), {
                success: !1,
                composerId: t,
                error: c
            };
        });
        return this.subagentComposerService.registerBackgroundPromise({
            composerId: t,
            promise: a,
            abortController: i,
            metadata: s
        }), e !== void 0 ? a.then((l)=>{
            const c = this.interruptedBackgroundRunKeys.delete(o);
            !l.success && !c && !this.subagentComposerService.hasQueuedResumePending({
                composerId: t
            }) && this.subagentComposerService.notifyBackgroundFailure({
                toolCallId: e,
                error: l.error ?? "Unknown subagent error",
                parentComposerId: s?.parentComposerId
            });
        }) : a.finally(()=>{
            this.interruptedBackgroundRunKeys.delete(o);
        }), this.handles.delete(t), {
            status: "background",
            backgroundReason: r,
            transcriptPath: await this.resolveBackgroundTranscriptPath(t, s),
            toolCallCount: 0
        };
    }
    async resolveBackgroundTranscriptPath(t, e) {
        if (e?.suppressTranscriptPath !== !0) return e?.transcriptPath ?? await this.subagentComposerService.resolveBackgroundTranscriptPath(t);
    }
    isCloudEnvironment(t) {
        return t.environment === zse.CLOUD;
    }
    requireCloudSubagentRunner() {
        if (!this.cloudSubagentRunner) throw new Error("Cloud subagent runner is not available.");
        return this.cloudSubagentRunner;
    }
    nextBackgroundRunKey(t) {
        const e = (this.backgroundRunOrdinalByAgent.get(t) ?? 0) + 1;
        return this.backgroundRunOrdinalByAgent.set(t, e), `${t}:${e}`;
    }
    currentBackgroundRunKey(t) {
        const e = this.backgroundRunOrdinalByAgent.get(t);
        return e === void 0 ? void 0 : `${t}:${e}`;
    }
    isQueueableResumeMode(t) {
        return !!(t.resumeAgentId && typeof t.prompt == "string" && t.prompt.trim().length > 0);
    }
    isAwaitBackgroundMode(t) {
        if (!this.subagentComposerService.isLongRunningJobsEnabled() || !!!(t.resumeAgentId && (typeof t.prompt != "string" || t.prompt.trim().length === 0) && t.readonly === !0 && t.runInBackground !== !0)) return !1;
        if ((t.parentConversationId ?? "").trim().length === 0) throw new Error(`Missing parentConversationId for subagent await/status check (subagentId: ${t.resumeAgentId})`);
        return !0;
    }
    async awaitBackgroundSubagent(t, e) {
        const n = {
            status: "error",
            error: "Await timed out while task is still running"
        };
        if (e.aborted) return n;
        if (!this.subagentComposerService.isRunningInBackground({
            composerId: t
        })) return {
            status: "error",
            error: "No running background subagent found for given id"
        };
        try {
            const i = await this.subagentComposerService.waitForBackgroundSubagent({
                composerId: t,
                abortSignal: e
            });
            return i.success ? {
                status: "completed",
                finalMessage: i.finalMessage,
                toolCallCount: i.toolCallCount ?? 0
            } : {
                status: "error",
                error: i.error ?? "Unknown subagent error"
            };
        } catch (i) {
            if (e.aborted) return n;
            throw i;
        }
    }
    toSubagentExecutorArgs(t, e, n) {
        return this.validateWatchVideoAttachments(t), _ll(t, e, n);
    }
    validateWatchVideoAttachments(t) {
        if (t.subagentType !== Ddg || t.selectedContext === void 0) return;
        const e = t.selectedContext.selectedVideos ?? [], n = this.getGeminiVideoAttachmentConfigParam("localMaxVideoAttachmentsPerRequest", Ndg);
        if (e.length > n) {
            const s = n === 1 ? "1 file" : `${n} files`;
            throw new Error(`Video attachments are limited to ${s}.`);
        }
        const i = this.getGeminiVideoAttachmentConfigParam("localMaxTotalInlineVideoBytesPerRequest", Ldg);
        if (bbk(t.selectedContext) > i) throw new Error(`Video attachments exceed maximum total inline size of ${i} bytes (${Math.round(i / 1024 / 1024)}MB).`);
    }
    getGeminiVideoAttachmentConfigParam(t, e) {
        return this.experimentService?.getDynamicConfigParam("gemini_video_attachment_config", t, {
            disableExposureLog: !1
        }) ?? e;
    }
    getMaxRunningLocalSubagents() {
        const t = this.experimentService?.getDynamicConfigParam("local_subagent_limits", "maxRunning", {
            disableExposureLog: !1
        });
        return typeof t == "number" && Number.isFinite(t) && t >= 1 ? Math.floor(t) : Odg;
    }
    tryAcquireLocalRunSlot(t) {
        if (t?.bypassCap !== !0 && this.runningLocalSubagentRunCount >= this.getMaxRunningLocalSubagents()) return;
        this.runningLocalSubagentRunCount += 1;
        let e = !1;
        return ()=>{
            e || (e = !0, this.runningLocalSubagentRunCount -= 1);
        };
    }
    toHostError(t, e) {
        const n = t instanceof Error ? t.message : String(t);
        return new E7a(n, {
            agentId: e,
            cause: t
        });
    }
};

}
