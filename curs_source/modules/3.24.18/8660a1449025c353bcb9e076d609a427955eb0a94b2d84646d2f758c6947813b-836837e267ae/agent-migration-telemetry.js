import { ie0, lIs, re0 } from "./Asv.js";
import { FEi } from "./agentMigrationFailureClassifier.js";
import { E } from "./tslib.es6.js";
var nlv;
export { nlv };
var __wakaru_se0_initialized = false;
export function se0() {
if (__wakaru_se0_initialized) return;
__wakaru_se0_initialized = true;
"use strict";
E(), FEi(), nlv = class {
    constructor(t, e, n, i){
        this._context = t, this._analyticsService = e, this._metricsService = n, this._logService = i, this._startedAtMs = Date.now(), this._pipelineFinished = !1, this._endToEndFinished = !1;
    }
    start() {
        this._trackEvent({
            name: "agent.migration.triggered",
            properties: this._context
        }), this._increment("agent.migration.attempts");
    }
    recordPipelineStatus(t) {
        ie0(t) && this._startStage(t.phase);
    }
    finishPipeline({ outcome: t, error: e, completionKind: n }) {
        if (this._pipelineFinished) return;
        this._pipelineFinished = !0;
        const i = lIs(e), r = n ?? re0(t), s = this._activeStage?.stage;
        this._finishActiveStage({
            outcome: t,
            failure: i
        });
        const o = this._wallTimeMs(), a = {
            ...this._context,
            outcome: t,
            durationMs: o,
            completionKind: r,
            ...s ? {
                terminalStage: s
            } : {},
            ...i,
            ...this._asyncRequestId ? {
                requestId: this._asyncRequestId
            } : {}
        };
        this._trackEvent({
            name: "agent.migration.pipeline_finished",
            properties: a
        }), this._increment("agent.migration.pipeline.runs", {
            outcome: t,
            completion_kind: r,
            failure_category: i?.failureCategory
        }), this._distribution("agent.migration.pipeline.duration_ms", o, {
            outcome: t,
            completion_kind: r
        }), (t !== "success" || this._context.targetKind !== "cloud") && this.finishEndToEnd({
            outcome: t,
            error: e,
            finalState: t === "success" ? "completed" : t === "cancelled" ? "cancelled" : "failed"
        });
    }
    recordFinalizeFailed(t, e) {
        const n = lIs(t), i = {
            ...this._context,
            wallTimeMs: this._wallTimeMs(),
            ...n,
            ...e ? {
                requestId: e
            } : {}
        };
        this._trackEvent({
            name: "agent.migration.finalize_failed",
            properties: i
        }), this._increment("agent.migration.finalize.runs", {
            outcome: "error",
            failure_category: n?.failureCategory
        });
    }
    recordAsyncMigrationStarted(t) {
        if (this._asyncRequestId = t.requestId, !t.requestId) return;
        const e = {
            ...this._context,
            requestId: t.requestId,
            targetAgentId: t.agentId
        };
        this._trackEvent({
            name: "agent.migration.async_started",
            properties: e
        }), this._increment("agent.migration.async.started");
    }
    recordAsyncMigrationCompleted(t) {
        this.finishEndToEnd({
            outcome: "success",
            requestId: t.requestId,
            finalState: this._getCompletedFinalState()
        });
    }
    recordAsyncMigrationFailed(t) {
        this.finishEndToEnd({
            outcome: "error",
            error: t.error,
            requestId: t.requestId,
            finalState: t.restoredAgentId ? "rolled_back" : "failed"
        });
    }
    recordMigrationStageStarted(t) {
        this._startLifecycleStage(t.stage, t.requestId);
    }
    recordMigrationStageCompleted(t) {
        this._finishLifecycleStage({
            outcome: "success",
            requestId: t.requestId
        });
    }
    recordMigrationStageFailed(t) {
        const e = lIs(t.error);
        this._finishLifecycleStage({
            outcome: "error",
            failure: e ?? {
                errorKind: "Error"
            },
            requestId: t.requestId
        }), t.stage === "cloud_finalize_source" && this.recordFinalizeFailed(t.error, t.requestId), t.stage === "cloud_flush_pending_queue" ? this._recordPostHandoffFailure("flush") : t.stage === "cloud_finalize_source" && this._recordPostHandoffFailure("finalize");
    }
    finishEndToEnd({ outcome: t, error: e, requestId: n, finalState: i }) {
        if (this._endToEndFinished) return;
        this._endToEndFinished = !0;
        const r = lIs(e), s = this._wallTimeMs(), o = {
            ...this._context,
            outcome: t,
            durationMs: s,
            finalState: i,
            ...r,
            ...n ? {
                requestId: n
            } : {}
        };
        this._trackEvent({
            name: "agent.migration.end_to_end_finished",
            properties: o
        }), this._increment("agent.migration.end_to_end.runs", {
            outcome: t,
            final_state: i,
            failure_category: r?.failureCategory
        }), this._distribution("agent.migration.end_to_end.duration_ms", s, {
            outcome: t,
            final_state: i
        });
    }
    _startStage(t) {
        this._activeStage?.stage !== t && (this._finishActiveStage({
            outcome: "success"
        }), this._activeStage = {
            stage: t,
            startedAtMs: Date.now()
        });
    }
    _finishActiveStage({ outcome: t, failure: e }) {
        const n = this._activeStage;
        n && (this._activeStage = void 0, this._recordStageFinished({
            stage: n.stage,
            outcome: t,
            durationMs: Date.now() - n.startedAtMs,
            failure: e,
            requestId: n.requestId,
            stageKind: "pipeline"
        }));
    }
    _startLifecycleStage(t, e) {
        this._activeLifecycleStage?.stage !== t && (this._finishLifecycleStage({
            outcome: "success"
        }), this._activeLifecycleStage = {
            stage: t,
            startedAtMs: Date.now(),
            requestId: e
        });
    }
    _finishLifecycleStage({ outcome: t, failure: e, requestId: n }) {
        const i = this._activeLifecycleStage;
        i && (this._activeLifecycleStage = void 0, this._recordStageFinished({
            stage: i.stage,
            outcome: t,
            durationMs: Date.now() - i.startedAtMs,
            failure: e,
            requestId: n ?? i.requestId,
            stageKind: "lifecycle"
        }));
    }
    _recordStageFinished({ stage: t, outcome: e, durationMs: n, failure: i, requestId: r, stageKind: s }) {
        const o = {
            ...this._context,
            stage: t,
            stageKind: s,
            outcome: e,
            durationMs: n,
            wallTimeMs: this._wallTimeMs(),
            ...i,
            ...r ? {
                requestId: r
            } : {}
        };
        this._trackEvent({
            name: "agent.migration.stage_finished",
            properties: o
        }), this._increment("agent.migration.stage.runs", {
            stage: t,
            stage_kind: s,
            outcome: e,
            failure_category: i?.failureCategory
        }), this._distribution("agent.migration.stage.duration_ms", n, {
            stage: t,
            stage_kind: s,
            outcome: e
        });
    }
    _recordPostHandoffFailure(t) {
        if (this._postHandoffFailure === void 0) {
            this._postHandoffFailure = t;
            return;
        }
        this._postHandoffFailure !== t && (this._postHandoffFailure = "flush_and_finalize");
    }
    _getCompletedFinalState() {
        switch(this._postHandoffFailure){
            case void 0:
                return "completed";
            case "flush":
                return "completed_with_flush_error";
            case "finalize":
                return "completed_with_finalize_error";
            case "flush_and_finalize":
                return "completed_with_post_handoff_errors";
            default:
                return this._postHandoffFailure;
        }
    }
    _wallTimeMs() {
        return Date.now() - this._startedAtMs;
    }
    _metricTags(t = {}) {
        const e = {
            direction: this._context.direction,
            source_kind: this._context.sourceKind,
            target_kind: this._context.targetKind,
            source_env: this._context.sourceEnv,
            dest_env: this._context.destEnv,
            entrypoint: this._context.entrypoint,
            ...t
        };
        return Object.fromEntries(Object.entries(e).filter((n)=>typeof n[1] == "string"));
    }
    _increment(t, e) {
        try {
            this._metricsService.increment({
                stat: t,
                value: 1,
                tags: this._metricTags(e)
            });
        } catch (n) {
            this._logService.warn("[AgentMigrationTelemetry] Failed to record migration metric.", n);
        }
    }
    _distribution(t, e, n) {
        try {
            this._metricsService.distribution({
                stat: t,
                value: e,
                tags: this._metricTags(n)
            });
        } catch (i) {
            this._logService.warn("[AgentMigrationTelemetry] Failed to record migration metric.", i);
        }
    }
    _trackEvent(t) {
        try {
            switch(t.name){
                case "agent.migration.triggered":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                case "agent.migration.async_started":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                case "agent.migration.stage_finished":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                case "agent.migration.pipeline_finished":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                case "agent.migration.end_to_end_finished":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                case "agent.migration.finalize_failed":
                    this._analyticsService.trackEvent(t.name, t.properties);
                    break;
                default:
                    {
                        const e = t;
                    }
            }
        } catch (e) {
            this._logService.warn("[AgentMigrationTelemetry] Failed to record migration analytics.", e);
        }
    }
};

}
