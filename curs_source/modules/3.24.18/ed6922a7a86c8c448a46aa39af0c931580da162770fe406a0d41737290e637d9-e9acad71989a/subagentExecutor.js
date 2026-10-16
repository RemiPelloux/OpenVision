import { GCv } from "./A3u.js";
import { GS } from "./errorMessage.js";
import { CX } from "./index_11.ts";
import { Bg } from "./qIc.js";
import { WLn, fso } from "./subagent.ts";
import { $Me, O8i, sSt } from "./subagent_exec_pb.js";
import { Mve, Pj, pse } from "./subagents_pb.js";
import { x } from "./tslib.es6.js";
function g1o(e, t, n) {
    return {
        toolCallId: e.toolCallId,
        parentConversationId: e.parentConversationId ?? "",
        rootParentConversationId: e.rootParentConversationId,
        subagentType: e.subagentType,
        modelId: e.modelId,
        modelParameters: (e.modelParameters ?? []).length > 0 ? e.modelParameters.map((i)=>({
                id: i.id,
                value: i.value
            })) : void 0,
        credentials: e.credentials,
        prompt: e.prompt,
        readonly: e.readonly,
        mode: e.mode,
        resumeAgentId: e.resumeAgentId,
        forkAgentId: e.forkAgentId,
        runInBackground: e.runInBackground,
        continuationConfig: e.continuationConfig,
        selectedContext: e.selectedContext,
        environment: e.environment,
        cloudBaseBranch: e.cloudBaseBranch,
        interrupt: e.interrupt === !0 ? !0 : void 0,
        idempotentReplayResume: n?.idempotentReplayResume,
        context: t.withDetached(),
        abortSignal: t.signal
    };
}
function l1h(e) {
    return e.success ? {
        status: "completed",
        finalMessage: e.finalMessage,
        toolCallCount: e.toolCallCount ?? 0
    } : e.terminationReason === "aborted" ? {
        status: "aborted",
        error: e.error ?? "Cloud subagent was aborted"
    } : {
        status: "error",
        error: e.error ?? "Unknown cloud subagent error"
    };
}
function vZv(e) {
    switch(e.dataOrBlobId?.case){
        case "data":
            return e.dataOrBlobId.value.length;
        case "blobIdWithData":
            return e.dataOrBlobId.value.data.length;
        default:
            return 0;
    }
}
function _Zv(e) {
    let t = 0;
    for (const n of e.selectedVideos ?? [])t += vZv(n);
    return t;
}
var h1h, p1h, m1h, g1h, f1h, v1h, f1o;
export { _Zv, f1h, f1o, g1h, g1o, h1h, l1h, m1h, p1h, v1h, vZv };
var __wakaru_bZv_initialized = false;
export function bZv() {
if (__wakaru_bZv_initialized) return;
__wakaru_bZv_initialized = true;
"use strict";
x(), CX(), GS(), Pj(), $Me(), $Me(), h1h = 100, p1h = 100, m1h = "watchVideo", g1h = 5, f1h = 35 * 1024 * 1024, v1h = 32, f1o = class {
    constructor(e, t = ()=>!1, n, i){
        this.subagentComposerService = e, this.isSubagentInterruptEnabled = t, this.cloudSubagentRunner = n, this.experimentService = i, this.handles = new Map, this.activeForegroundExecutions = new Map, this.pendingForegroundBackgroundToolCallIds = new Set, this.backgroundRunOrdinalByAgent = new Map, this.interruptedBackgroundRunKeys = new Set, this.pendingIdempotentReplayAgentIds = new Set, this.runningLocalSubagentRunCount = 0;
    }
    async createOrResumeSession(e, t) {
        let n, i;
        try {
            if (this.isAwaitBackgroundMode(t)) return t.resumeAgentId;
            const r = await this.withReplayResumeTarget(t);
            if (t = r.args, r.idempotentReplayResume) {
                if (t.resumeAgentId) {
                    if (!this.pendingIdempotentReplayAgentIds.has(t.resumeAgentId) && this.pendingIdempotentReplayAgentIds.size >= p1h) {
                        const a = this.pendingIdempotentReplayAgentIds.values().next().value;
                        a !== void 0 && this.pendingIdempotentReplayAgentIds.delete(a);
                    }
                    this.pendingIdempotentReplayAgentIds.add(t.resumeAgentId), i = t.resumeAgentId;
                }
            } else await this.handleRunningBackgroundResume(t);
            if (this.isCloudEnvironment(t)) {
                const a = await this.requireCloudSubagentRunner().createOrResumeCloudSubagent(this.toSubagentExecutorArgs(t, e, r));
                return this.subagentComposerService.linkParentToSubagent(t.toolCallId, a, t.parentConversationId), a;
            }
            const s = await this.subagentComposerService.createOrResumeSubagent(this.toSubagentExecutorArgs(t, e, r));
            return n = s.data.composerId, this.handles.set(n, s), n;
        } catch (r) {
            throw i && this.pendingIdempotentReplayAgentIds.delete(i), this.toHostError(r, n ?? t.resumeAgentId);
        }
    }
    async withReplayResumeTarget(e) {
        if (e.resumeAgentId || e.forkAgentId || !e.toolCallId || this.isCloudEnvironment(e)) return {
            args: e
        };
        const t = e.parentConversationId?.trim(), n = await this.subagentComposerService.findSubagentForToolCall(e.toolCallId, t || void 0);
        return n ? {
            args: {
                ...e,
                resumeAgentId: n
            },
            idempotentReplayResume: !0
        } : {
            args: e
        };
    }
    async replayRunningBackgroundHandoff(e, t) {
        if (this.pendingIdempotentReplayAgentIds.delete(e) && this.subagentComposerService.isRunningInBackground({
            composerId: e
        })) return this.handles.delete(e), {
            status: "background",
            backgroundReason: t.runInBackground ? Mve.AGENT_REQUEST : Mve.USER_REQUEST,
            transcriptPath: await this.resolveBackgroundTranscriptPath(e, void 0),
            toolCallCount: 0
        };
    }
    async handleRunningBackgroundResume(e) {
        if (this.isQueueableResumeMode(e) && this.subagentComposerService.isRunningInBackground({
            composerId: e.resumeAgentId
        })) if (e.interrupt === !0 && this.isSubagentInterruptEnabled()) {
            const t = e.parentConversationId ?? "", n = this.cloudSubagentRunner?.isCloudSubagentOwnedByParent(e.resumeAgentId, t) === !0;
            let i = await this.subagentComposerService.canInterruptSubagentTree({
                composerId: e.resumeAgentId,
                parentConversationId: t
            });
            if (!i && n && (i = !0), !i) throw new Error(WLn);
            const r = this.currentBackgroundRunKey(e.resumeAgentId);
            r && this.interruptedBackgroundRunKeys.add(r), n && this.cloudSubagentRunner?.markAsInterrupted(e.resumeAgentId), this.subagentComposerService.interruptSubagentTree(e.resumeAgentId);
        } else throw new Error(WLn);
    }
    async runSession(e, t, n, i) {
        try {
            if (this.isAwaitBackgroundMode(n)) return this.awaitBackgroundSubagent(n.resumeAgentId, e.signal);
            const r = await this.replayRunningBackgroundHandoff(t, n);
            if (r) return r;
            if (this.isCloudEnvironment(n)) return this.runCloudSession(e, t, n);
            const s = this.handles.get(t);
            if (!s) return {
                status: "error",
                error: `Composer not found for run: ${t}`
            };
            const o = this.toSubagentExecutorArgs(n, e), a = n.continuationConfig, c = this.tryAcquireLocalRunSlot({
                bypassCap: n.interrupt === !0 && !!n.resumeAgentId
            });
            if (c === void 0) return {
                status: "error",
                error: GCv({
                    maxRunning: this.getMaxRunningLocalSubagents()
                })
            };
            const l = {
                parentComposerId: o.parentConversationId,
                toolCallId: n.toolCallId
            };
            if (n.runInBackground) {
                const E = new AbortController, A = {
                    ...o,
                    abortSignal: E.signal
                }, R = (a ? this.subagentComposerService.runWithContinuation(A, s, a) : this.subagentComposerService.runSubagentWithHandle(A, s)).finally(c);
                return this.handoffToBackground(t, n.toolCallId, R, E, Mve.AGENT_REQUEST, l);
            }
            const u = new AbortController;
            let h = !1;
            const p = ()=>{
                h || u.abort();
            };
            e.signal.addEventListener("abort", p, {
                once: !0
            }), e.signal.aborted && p();
            const g = {
                ...o,
                abortSignal: u.signal
            }, f = (a ? this.subagentComposerService.runWithContinuation(g, s, a) : this.subagentComposerService.runSubagentWithHandle(g, s)).finally(c);
            let v;
            const b = new Promise((E)=>{
                v = E;
            }), y = {
                requestBackground: ()=>h || u.signal.aborted ? !1 : (h = !0, e.signal.removeEventListener("abort", p), v?.(), !0)
            }, T = n.toolCallId;
            T && this.subagentComposerService.isLongRunningJobsEnabled() && (this.activeForegroundExecutions.set(T, y), this.pendingForegroundBackgroundToolCallIds.delete(T) && y.requestBackground());
            try {
                const E = await Promise.race([
                    f.then((R)=>({
                            kind: "completed",
                            result: R
                        })),
                    b.then(()=>({
                            kind: "backgrounded"
                        }))
                ]);
                if (E.kind === "backgrounded") return this.handoffToBackground(t, T, f, u, Mve.USER_REQUEST, l);
                const A = E.result;
                return A.success ? {
                    status: "completed",
                    finalMessage: A.finalMessage,
                    toolCallCount: A.toolCallCount ?? 0
                } : {
                    status: "error",
                    error: A.error ?? "Unknown subagent error"
                };
            } finally{
                T && this.activeForegroundExecutions.get(T) === y && this.activeForegroundExecutions.delete(T), h || e.signal.removeEventListener("abort", p), this.handles.delete(t);
            }
        } catch (r) {
            throw this.pendingIdempotentReplayAgentIds.delete(t), this.toHostError(r, t);
        }
    }
    releaseSession(e) {
        this.handles.delete(e), this.pendingIdempotentReplayAgentIds.delete(e);
    }
    async runCloudSession(e, t, n) {
        const i = this.requireCloudSubagentRunner(), r = this.toSubagentExecutorArgs(n, e), s = {
            parentComposerId: n.parentConversationId,
            toolCallId: n.toolCallId,
            suppressTranscriptPath: !0
        };
        if (n.runInBackground) {
            const v = new AbortController, b = {
                ...r,
                abortSignal: v.signal
            }, y = i.runCloudSubagent(t, b);
            return this.handoffToBackground(t, n.toolCallId, y, v, Mve.AGENT_REQUEST, s);
        }
        const o = new AbortController;
        let a = !1;
        const c = ()=>{
            a || o.abort();
        };
        e.signal.addEventListener("abort", c, {
            once: !0
        }), e.signal.aborted && c();
        const l = {
            ...r,
            abortSignal: o.signal
        }, u = i.runCloudSubagent(t, l);
        let h;
        const p = new Promise((v)=>{
            h = v;
        }), g = {
            requestBackground: ()=>a || o.signal.aborted ? !1 : (a = !0, e.signal.removeEventListener("abort", c), h?.(), !0)
        }, f = n.toolCallId;
        f && this.subagentComposerService.isLongRunningJobsEnabled() && (this.activeForegroundExecutions.set(f, g), this.pendingForegroundBackgroundToolCallIds.delete(f) && g.requestBackground());
        try {
            const v = await Promise.race([
                u.then((y)=>({
                        kind: "completed",
                        result: y
                    })),
                p.then(()=>({
                        kind: "backgrounded"
                    }))
            ]);
            if (v.kind === "backgrounded") return this.handoffToBackground(t, f, u, o, Mve.USER_REQUEST, s);
            const b = v.result;
            return l1h(b);
        } finally{
            f && this.activeForegroundExecutions.get(f) === g && this.activeForegroundExecutions.delete(f), a || e.signal.removeEventListener("abort", c);
        }
    }
    forceBackgroundByToolCallId(e) {
        const t = this.activeForegroundExecutions.get(e);
        let n;
        if (t) n = t.requestBackground() === !0 ? sSt.ACCEPTED : sSt.NOT_FOUND;
        else {
            if (this.pendingForegroundBackgroundToolCallIds.size >= h1h) {
                const i = this.pendingForegroundBackgroundToolCallIds.values().next().value;
                i !== void 0 && this.pendingForegroundBackgroundToolCallIds.delete(i);
            }
            this.pendingForegroundBackgroundToolCallIds.add(e), n = sSt.ACCEPTED;
        }
        return new O8i({
            status: n
        });
    }
    async handoffToBackground(e, t, n, i, r, s) {
        const o = this.nextBackgroundRunKey(e), a = n.catch((c)=>{
            const l = Bg(c);
            return console.error("[subagentExecutor] Background subagent failed", {
                agentId: e,
                toolCallId: t,
                errorType: c instanceof Error ? c.name : "unknown",
                errorMessage: l
            }), {
                success: !1,
                composerId: e,
                error: l
            };
        });
        return this.subagentComposerService.registerBackgroundPromise({
            composerId: e,
            promise: a,
            abortController: i,
            metadata: s
        }), t !== void 0 ? a.then((c)=>{
            const l = this.interruptedBackgroundRunKeys.delete(o);
            !c.success && !l && !this.subagentComposerService.hasQueuedResumePending({
                composerId: e
            }) && this.subagentComposerService.notifyBackgroundFailure({
                toolCallId: t,
                error: c.error ?? "Unknown subagent error",
                parentComposerId: s?.parentComposerId
            });
        }) : a.finally(()=>{
            this.interruptedBackgroundRunKeys.delete(o);
        }), this.handles.delete(e), {
            status: "background",
            backgroundReason: r,
            transcriptPath: await this.resolveBackgroundTranscriptPath(e, s),
            toolCallCount: 0
        };
    }
    async resolveBackgroundTranscriptPath(e, t) {
        if (t?.suppressTranscriptPath !== !0) return t?.transcriptPath ?? await this.subagentComposerService.resolveBackgroundTranscriptPath(e);
    }
    isCloudEnvironment(e) {
        return e.environment === pse.CLOUD;
    }
    requireCloudSubagentRunner() {
        if (!this.cloudSubagentRunner) throw new Error("Cloud subagent runner is not available.");
        return this.cloudSubagentRunner;
    }
    nextBackgroundRunKey(e) {
        const t = (this.backgroundRunOrdinalByAgent.get(e) ?? 0) + 1;
        return this.backgroundRunOrdinalByAgent.set(e, t), `${e}:${t}`;
    }
    currentBackgroundRunKey(e) {
        const t = this.backgroundRunOrdinalByAgent.get(e);
        return t === void 0 ? void 0 : `${e}:${t}`;
    }
    isQueueableResumeMode(e) {
        return !!(e.resumeAgentId && typeof e.prompt == "string" && e.prompt.trim().length > 0);
    }
    isAwaitBackgroundMode(e) {
        if (!this.subagentComposerService.isLongRunningJobsEnabled() || !!!(e.resumeAgentId && (typeof e.prompt != "string" || e.prompt.trim().length === 0) && e.readonly === !0 && e.runInBackground !== !0)) return !1;
        if ((e.parentConversationId ?? "").trim().length === 0) throw new Error(`Missing parentConversationId for subagent await/status check (subagentId: ${e.resumeAgentId})`);
        return !0;
    }
    async awaitBackgroundSubagent(e, t) {
        const n = {
            status: "error",
            error: "Await timed out while task is still running"
        };
        if (t.aborted) return n;
        if (!this.subagentComposerService.isRunningInBackground({
            composerId: e
        })) return {
            status: "error",
            error: "No running background subagent found for given id"
        };
        try {
            const i = await this.subagentComposerService.waitForBackgroundSubagent({
                composerId: e,
                abortSignal: t
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
            if (t.aborted) return n;
            throw i;
        }
    }
    toSubagentExecutorArgs(e, t, n) {
        return this.validateWatchVideoAttachments(e), g1o(e, t, n);
    }
    validateWatchVideoAttachments(e) {
        if (e.subagentType !== m1h || e.selectedContext === void 0) return;
        const t = e.selectedContext.selectedVideos ?? [], n = this.getGeminiVideoAttachmentConfigParam("localMaxVideoAttachmentsPerRequest", g1h);
        if (t.length > n) {
            const s = n === 1 ? "1 file" : `${n} files`;
            throw new Error(`Video attachments are limited to ${s}.`);
        }
        const i = this.getGeminiVideoAttachmentConfigParam("localMaxTotalInlineVideoBytesPerRequest", f1h);
        if (_Zv(e.selectedContext) > i) throw new Error(`Video attachments exceed maximum total inline size of ${i} bytes (${Math.round(i / 1024 / 1024)}MB).`);
    }
    getGeminiVideoAttachmentConfigParam(e, t) {
        return this.experimentService?.getDynamicConfigParam("gemini_video_attachment_config", e, {
            disableExposureLog: !1
        }) ?? t;
    }
    getMaxRunningLocalSubagents() {
        const e = this.experimentService?.getDynamicConfigParam("local_subagent_limits", "maxRunning", {
            disableExposureLog: !1
        });
        return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : v1h;
    }
    tryAcquireLocalRunSlot(e) {
        if (e?.bypassCap !== !0 && this.runningLocalSubagentRunCount >= this.getMaxRunningLocalSubagents()) return;
        this.runningLocalSubagentRunCount += 1;
        let t = !1;
        return ()=>{
            t || (t = !0, this.runningLocalSubagentRunCount -= 1);
        };
    }
    toHostError(e, t) {
        const n = e instanceof Error ? e.message : String(e);
        return new fso(n, {
            agentId: t,
            cause: e
        });
    }
};

}
