import { init_headless_defaults } from "../../daemon_metrics_exports.js";
var AutoApprovePendingDecisionProvider;
export { AutoApprovePendingDecisionProvider };
var __wakaru_init_create_headless_decision_provider_initialized = false;
export function init_create_headless_decision_provider() {
if (__wakaru_init_create_headless_decision_provider_initialized) return;
__wakaru_init_create_headless_decision_provider_initialized = true;
"use strict";
init_headless_defaults();
AutoApprovePendingDecisionProvider = class {
    async requestApproval() {
        return {
            approved: true
        };
    }
    async requestReadApproval() {
        return {
            approved: true
        };
    }
};

}
