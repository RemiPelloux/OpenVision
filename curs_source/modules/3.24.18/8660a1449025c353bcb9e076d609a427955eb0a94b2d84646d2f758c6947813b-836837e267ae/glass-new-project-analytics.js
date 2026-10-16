import { dp } from "./connect.js";
import { AK0 } from "./lBv.js";
import { U$ } from "./pending-new-project.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
var Goc, RBv;
export { Goc, RBv };
var __wakaru_PBv_initialized = false;
export function PBv() {
if (__wakaru_PBv_initialized) return;
__wakaru_PBv_initialized = true;
"use strict";
E(), dp(), Xo(), U$(), Goc = class extends Error {
    constructor(){
        super("Origin created the project but didn't return its repository.");
    }
}, RBv = class {
    constructor(t){
        this.analyticsService = t, this.flows = new Map;
    }
    getOrCreateFlow(t) {
        const e = this.flows.get(t);
        if (e !== void 0) return e;
        const n = {
            flowId: Ai(),
            milestones: new Set,
            selectionSource: void 0,
            setupShownAtMs: void 0,
            tmpRepoAttemptNumber: 0
        };
        return this.flows.set(t, n), n;
    }
    claim(t, e) {
        return t.milestones.has(e) ? !1 : (t.milestones.add(e), !0);
    }
    noteSelection(t, e) {
        const n = this.getOrCreateFlow(t);
        n.selectionSource ??= e;
    }
    trackEntrypointAvailable(t, e) {
        const n = this.getOrCreateFlow(t);
        this.claim(n, "entrypoint_available") && this.analyticsService.trackEvent("new_repository.entrypoint_available", {
            newRepositoryFlowId: n.flowId,
            surface: "glass",
            availability: e.availability,
            isDefaultTarget: (n.selectionSource ?? e.fallbackSource) === "default"
        });
    }
    trackSelected(t, e) {
        const n = this.getOrCreateFlow(t);
        this.claim(n, "selected") && this.analyticsService.trackEvent("new_repository.selected", {
            newRepositoryFlowId: n.flowId,
            surface: "glass",
            selectionSource: n.selectionSource ?? e.fallbackSource,
            availability: e.availability
        });
    }
    trackSetupTrayShown(t, e) {
        const n = this.getOrCreateFlow(t);
        this.claim(n, "origin_setup_tray_shown") && (n.setupShownAtMs = Date.now(), this.analyticsService.trackEvent("new_repository.origin_setup_tray_shown", {
            newRepositoryFlowId: n.flowId,
            surface: "glass",
            setupReason: e
        }));
    }
    trackSetupTrayAction(t, e) {
        const n = this.getOrCreateFlow(t);
        this.claim(n, "origin_setup_tray_action") && this.analyticsService.trackEvent("new_repository.origin_setup_tray_action", {
            newRepositoryFlowId: n.flowId,
            surface: "glass",
            action: "get_started",
            setupReason: e
        });
    }
    trackSetupReady(t) {
        const e = this.flows.get(t);
        e === void 0 || e.setupShownAtMs === void 0 || !this.claim(e, "origin_setup_ready") || this.analyticsService.trackEvent("new_repository.origin_setup_ready", {
            newRepositoryFlowId: e.flowId,
            surface: "glass",
            completionSource: "namespace_refetch",
            durationMs: Math.max(0, Date.now() - e.setupShownAtMs)
        });
    }
    beginTmpRepoCreation(t, e) {
        const n = this.getOrCreateFlow(t);
        return n.tmpRepoAttemptNumber += 1, {
            attemptNumber: n.tmpRepoAttemptNumber,
            flowId: n.flowId,
            namespaceMode: e,
            startedAtMs: Date.now()
        };
    }
    trackTmpRepoCreationSuccess(t) {
        this.analyticsService.trackEvent("new_repository.tmp_repo_creation_outcome", {
            newRepositoryFlowId: t.flowId,
            surface: "glass",
            outcome: "success",
            stage: "ready",
            namespaceMode: t.namespaceMode,
            attemptNumber: t.attemptNumber,
            durationMs: Math.max(0, Date.now() - t.startedAtMs)
        });
    }
    trackTmpRepoCreationFailure(t, e, n) {
        this.analyticsService.trackEvent("new_repository.tmp_repo_creation_outcome", {
            newRepositoryFlowId: t.flowId,
            surface: "glass",
            outcome: "failure",
            stage: e,
            namespaceMode: t.namespaceMode,
            attemptNumber: t.attemptNumber,
            durationMs: Math.max(0, Date.now() - t.startedAtMs),
            errorCode: AK0(n)
        });
    }
    getFlowId(t) {
        return this.flows.get(t)?.flowId;
    }
    getOrCreateFlowId(t) {
        return this.getOrCreateFlow(t).flowId;
    }
    clear(t) {
        this.flows.delete(t);
    }
    clearAll() {
        this.flows.clear();
    }
};

}
