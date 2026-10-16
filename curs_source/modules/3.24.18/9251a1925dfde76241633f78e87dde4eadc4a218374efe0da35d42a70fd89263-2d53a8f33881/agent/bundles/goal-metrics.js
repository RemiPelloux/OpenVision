import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var goalCreated, goalContinuationStarted, goalTerminalTransition, goalContinuationsAtTerminal;
export { goalContinuationStarted, goalContinuationsAtTerminal, goalCreated, goalTerminalTransition };
var __wakaru_init_goal_metrics_initialized = false;
export function init_goal_metrics() {
if (__wakaru_init_goal_metrics_initialized) return;
__wakaru_init_goal_metrics_initialized = true;
"use strict";
init_dist4();
goalCreated = createCounter("agent.goal.created", {
    description: "Counts durable goals created by the agent"
});
goalContinuationStarted = createCounter("agent.goal.continuation.started", {
    description: "Counts durable goal continuation turns that started"
});
goalTerminalTransition = createCounter("agent.goal.terminal_transition", {
    description: "Counts durable goals transitioning out of active status",
    labelNames: [
        "status",
        "reason"
    ]
});
goalContinuationsAtTerminal = createHistogram("agent.goal.continuations_at_terminal", {
    description: "Total continuation turns started when a durable goal transitions out of active status",
    labelNames: [
        "status",
        "reason"
    ]
});

}
