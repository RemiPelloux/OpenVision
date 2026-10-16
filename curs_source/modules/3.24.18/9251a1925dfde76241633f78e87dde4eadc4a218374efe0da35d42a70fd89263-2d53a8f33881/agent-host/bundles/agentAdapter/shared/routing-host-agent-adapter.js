import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { LocalLoopDeniedMidTurnError, init_local_loop_enrollment_denial } from "./local-loop-enrollment-denial.js";
import { alwaysConnectRouter, init_turn_router } from "./turn-router.js";
import { init_turn_runtime_context } from "./turn-runtime-context.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { isLocalLoopEnrollmentDenial } from "../../../../mcp_sandbox_policy_exports.js";
import { observeLocalAttempt, reportTurnRuntimeSelected, turnLogFields, withTurnRuntime } from "../../../../tree_chunk_napi_exports.js";
var logger111, LOCAL_LOOP_ENROLLMENT_DENIED_METRIC, LOCAL_LOOP_FALLBACK_MESSAGE, LOCAL_LOOP_FALLBACK_METRIC, ToolRestrictedBackendTurnError, RoutingHostAgentAdapter;
export { LOCAL_LOOP_ENROLLMENT_DENIED_METRIC, LOCAL_LOOP_FALLBACK_MESSAGE, LOCAL_LOOP_FALLBACK_METRIC, RoutingHostAgentAdapter, ToolRestrictedBackendTurnError, logger111 };
var __wakaru_init_routing_host_agent_adapter_initialized = false;
export function init_routing_host_agent_adapter() {
if (__wakaru_init_routing_host_agent_adapter_initialized) return;
__wakaru_init_routing_host_agent_adapter_initialized = true;
"use strict";
init_dist9();
init_dist();
init_local_loop_enrollment_denial();
init_turn_router();
init_turn_runtime_context();
logger111 = createLogger("@anysphere/agent-host:turn-routing");
LOCAL_LOOP_ENROLLMENT_DENIED_METRIC = "agent_host.local_loop.enrollment_denied";
LOCAL_LOOP_FALLBACK_MESSAGE = "Local loop fell back to the backend loop for this turn";
LOCAL_LOOP_FALLBACK_METRIC = "agent_host.local_loop.fallback";
ToolRestrictedBackendTurnError = class extends NonRetriableError {
    constructor(routeReason){
        super(`A turn that restricts its tools runs only on the local loop, and it was routed to the backend (${routeReason})`, {
            displayInfo: {
                title: "This turn's tool restriction needs the local loop",
                detail: `This turn limits the tools its agent may use, and only the local loop enforces that. It was routed to the backend loop (${routeReason}), so it was refused rather than run with every tool.`,
                isRetryable: false
            }
        });
    }
};
RoutingHostAgentAdapter = class {
    constructor(connect3, route = alwaysConnectRouter, managedLocal, metrics, enrollmentLatch){
        this.connect = connect3;
        this.route = route;
        this.managedLocal = managedLocal;
        this.metrics = metrics;
        this.enrollmentLatch = enrollmentLatch;
    }
    async run(options2) {
        const decision = await this.route(options2);
        const turn = turnLogFields(options2);
        logger111.info(options2.ctx, "Selected Agent Host turn runtime", {
            runtime: decision.runtime,
            reason: decision.reason,
            ...turn
        });
        if (decision.runtime === "connect" && decision.disposition === "fallback") {
            logger111.warn(options2.ctx, LOCAL_LOOP_FALLBACK_MESSAGE, {
                reason: decision.reason,
                ...turn
            });
            this.count(options2.ctx, LOCAL_LOOP_FALLBACK_METRIC, {
                reason: decision.reason
            });
        }
        switch(decision.runtime){
            case "connect":
                return this.runOnConnect(options2, decision.reason);
            case "managed-local":
                {
                    if (this.managedLocal === void 0) {
                        throw new Error(`managed-local runtime selected (${decision.reason}) but no managed-local adapter exists`);
                    }
                    reportTurnRuntimeSelected(options2, "managed-local", decision.reason);
                    if (this.enrollmentLatch === void 0) {
                        return this.managedLocal.run(withTurnRuntime(options2, decision.runtime));
                    }
                    return this.runOnLocalLoop(options2, this.managedLocal, this.enrollmentLatch);
                }
            case "fail":
                throw decision.error;
            default:
                {
                    const _exhaustive = decision;
                    throw new Error(`Unknown turn route decision: ${JSON.stringify(_exhaustive)}`);
                }
        }
    }
    runOnConnect(options2, routeReason) {
        if (options2.runOptions.toolRestriction !== void 0) {
            throw new ToolRestrictedBackendTurnError(routeReason);
        }
        reportTurnRuntimeSelected(options2, "connect", routeReason);
        return this.connect.run(withTurnRuntime(options2, "connect"));
    }
    async runOnLocalLoop(options2, managedLocal, latch) {
        const attempt = observeLocalAttempt(options2.interactionListener);
        try {
            await managedLocal.run(withTurnRuntime({
                ...options2,
                interactionListener: attempt.listener
            }, "managed-local"));
        } catch (error3) {
            if (!isLocalLoopEnrollmentDenial(error3)) {
                throw error3;
            }
            latch.recordDenial();
            const outcome = attempt.sawModelOutput() ? "failed_mid_turn" : "retried_on_connect";
            logger111.warn(options2.ctx, "Local loop refused for this account", {
                outcome,
                ...turnLogFields(options2)
            });
            this.count(options2.ctx, LOCAL_LOOP_ENROLLMENT_DENIED_METRIC, {
                outcome
            });
            if (outcome === "failed_mid_turn") {
                throw new LocalLoopDeniedMidTurnError(error3);
            }
            options2.conversationActionManager.resetStream();
            return this.runOnConnect({
                ...options2,
                interactionListener: attempt.listenerForRerun()
            }, "enrollment-denied");
        }
    }
    count(ctx, stat24, tags) {
        try {
            this.metrics?.increment?.({
                stat: stat24,
                value: 1,
                tags
            });
        } catch (error3) {
            logger111.warn(ctx, "Local loop counter emission failed", {
                stat: stat24,
                error: String(error3)
            });
        }
    }
    dispose() {
        let firstError;
        try {
            this.managedLocal?.dispose();
        } catch (error3) {
            firstError = error3;
        }
        try {
            this.connect.dispose();
        } catch (error3) {
            firstError ??= error3;
        }
        if (firstError !== void 0) {
            throw firstError;
        }
    }
};

}
