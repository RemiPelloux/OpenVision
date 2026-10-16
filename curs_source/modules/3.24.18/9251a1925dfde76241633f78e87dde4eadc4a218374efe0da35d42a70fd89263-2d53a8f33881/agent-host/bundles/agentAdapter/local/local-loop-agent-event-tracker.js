import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var logger126, agentEventOutcomes, agentEventFieldTruncated, MAX_BUFFERED_EVENTS;
export { MAX_BUFFERED_EVENTS, agentEventFieldTruncated, agentEventOutcomes, logger126 };
var __wakaru_init_local_loop_agent_event_tracker_initialized = false;
export function init_local_loop_agent_event_tracker() {
if (__wakaru_init_local_loop_agent_event_tracker_initialized) return;
__wakaru_init_local_loop_agent_event_tracker_initialized = true;
"use strict";
init_dist35();
init_dist();
init_dist4();
logger126 = createLogger("@anysphere/agent-host:local-loop-agent-event-tracker");
agentEventOutcomes = createCounter("agent_host.local_loop.agent_event", {
    description: "AgentEventTracker calls made by the local loop, by what happened to them: forwarded to the backend, declined by an attempt whose sink would not take them, or dropped and why",
    labelNames: [
        "outcome",
        "method"
    ]
});
agentEventFieldTruncated = createCounter("agent_host.local_loop.agent_event.field_truncated", {
    description: "Text fields on local loop tracker calls cut to the wire cap before forwarding, so the event is recorded truncated rather than dropped",
    labelNames: [
        "method",
        "field"
    ]
});
MAX_BUFFERED_EVENTS = 256;

}
