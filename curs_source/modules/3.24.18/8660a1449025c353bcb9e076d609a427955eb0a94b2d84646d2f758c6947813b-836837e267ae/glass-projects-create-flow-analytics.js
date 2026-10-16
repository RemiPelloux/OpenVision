import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
var rlc;
export { rlc };
var __wakaru_tjv_initialized = false;
export function tjv() {
if (__wakaru_tjv_initialized) return;
__wakaru_tjv_initialized = true;
"use strict";
E(), Xo(), rlc = class {
    constructor(t, e){
        this.analyticsService = t, this.opened = {
            claimed: !1
        }, this.dismissed = {
            claimed: !1
        }, this.submitted = {
            claimed: !1
        }, this.created = {
            claimed: !1
        }, this.steps = new Set, this.fields = new Set, this.validationReasons = new Set, this.blockedReasons = new Set, this.completed = !1, this.now = e.now ?? Date.now, this.createAttemptId = e.createAttemptId ?? Ai(), this.startedAtMs = e.startedAtMs ?? this.now(), this.projectCount = e.projectCount;
    }
    markCompleted() {
        this.completed = !0;
    }
    trackFlowOpened(t) {
        this.opened.claimed || (this.opened.claimed = !0, this.analyticsService.trackEvent("glass.projects.create_flow_opened", {
            ...this.flowProps(),
            restoredDraft: t,
            projectCount: this.projectCount
        }));
    }
    trackDismissed(t) {
        this.completed || this.dismissed.claimed || (this.dismissed.claimed = !0, this.analyticsService.trackEvent("glass.projects.create_flow_dismissed", {
            ...this.flowProps(),
            dismissMethod: t
        }));
    }
    trackStepViewed(t) {
        this.steps.has(t) || (this.steps.add(t), this.analyticsService.trackEvent("glass.projects.create_step_viewed", {
            ...this.flowProps(),
            step: t
        }));
    }
    trackFieldCompleted(t) {
        this.fields.has(t) || (this.fields.add(t), this.analyticsService.trackEvent("glass.projects.create_field_completed", {
            ...this.flowProps(),
            field: t
        }));
    }
    trackValidationFailed(t) {
        this.validationReasons.has(t) || (this.validationReasons.add(t), this.analyticsService.trackEvent("glass.projects.create_validation_failed", {
            ...this.flowProps(),
            reason: t,
            field: "workspace"
        }));
    }
    trackBlocked(t) {
        this.blockedReasons.has(t) || (this.blockedReasons.add(t), this.analyticsService.trackEvent("glass.projects.create_blocked", {
            ...this.flowProps(),
            reason: t
        }));
    }
    trackCreateSubmitted(t) {
        this.submitted.claimed || (this.submitted.claimed = !0, this.analyticsService.trackEvent("glass.projects.create_submitted", {
            ...this.flowProps(),
            ...t
        }));
    }
    trackCreated(t) {
        this.created.claimed || (this.created.claimed = !0, this.completed = !0, this.analyticsService.trackEvent("glass.projects.created", {
            ...t,
            createAttemptId: this.createAttemptId
        }));
    }
    flowProps() {
        return {
            createAttemptId: this.createAttemptId,
            durationMs: Math.max(0, this.now() - this.startedAtMs)
        };
    }
};

}
