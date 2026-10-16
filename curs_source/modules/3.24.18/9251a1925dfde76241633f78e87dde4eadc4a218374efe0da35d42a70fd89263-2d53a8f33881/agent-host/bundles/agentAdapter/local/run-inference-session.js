import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_local_loop_attempt_stall_error } from "./local-loop-attempt-stall-error.js";
import { init_local_loop_turn_telemetry } from "./local-loop-turn-telemetry.js";
import { init_dist5 } from "../../../../agent-kv/dist/index.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
import { init_requested_model_pb } from "../../../../proto/dist/generated/agent/v1/requested_model_pb.js";
import { init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var logger129, AGENT_TRANSPORT_MODE_RESPONSE_HEADER3, CLIENT_HEARTBEAT_INTERVAL_MS, clientHeartbeatOutcomes, agentEventFrameOutcomes, clientHeartbeatGapMs, HEARTBEAT_METRIC_LOOP, AGENT_EVENT_FLUSH_ON_ABORT_MS, InvocationFrameQueue;
export { AGENT_EVENT_FLUSH_ON_ABORT_MS, AGENT_TRANSPORT_MODE_RESPONSE_HEADER3, CLIENT_HEARTBEAT_INTERVAL_MS, HEARTBEAT_METRIC_LOOP, InvocationFrameQueue, agentEventFrameOutcomes, clientHeartbeatGapMs, clientHeartbeatOutcomes, logger129 };
var __wakaru_init_run_inference_session_initialized = false;
export function init_run_inference_session() {
if (__wakaru_init_run_inference_session_initialized) return;
__wakaru_init_run_inference_session_initialized = true;
"use strict";
init_dist35();
init_dist9();
init_dist5();
init_dist();
init_dist4();
init_requested_model_pb();
init_inference_pb();
init_dist3();
init_esm3();
init_protocol();
init_local_loop_attempt_stall_error();
init_local_loop_turn_telemetry();
logger129 = createLogger("@anysphere/agent-host:run-inference-session");
AGENT_TRANSPORT_MODE_RESPONSE_HEADER3 = "x-cursor-agent-transport-mode";
CLIENT_HEARTBEAT_INTERVAL_MS = 5e3;
clientHeartbeatOutcomes = createCounter("agent_client.run_inference.client_heartbeat", {
    description: "Client heartbeat frames on the RunInference request stream, by outcome",
    labelNames: [
        "outcome",
        "transport_mode",
        "loop"
    ]
});
agentEventFrameOutcomes = createCounter("agent_client.run_inference.agent_event", {
    description: "RunInference agent_event frames by outcome: written to the attempt stream, dropped because the server does not accept them, or dropped on a closed stream",
    labelNames: [
        "outcome",
        "transport_mode",
        "loop"
    ]
});
clientHeartbeatGapMs = createHistogram("agent_client.run_inference.client_heartbeat.gap_ms", {
    description: "Observed gap between consecutive client heartbeat sends on one attempt",
    labelNames: [
        "transport_mode",
        "loop"
    ]
});
HEARTBEAT_METRIC_LOOP = "local_loop";
AGENT_EVENT_FLUSH_ON_ABORT_MS = 250;
InvocationFrameQueue = class {
    constructor(){
        this.frames = [];
    }
    push(frame) {
        if (this.terminal !== void 0) {
            return;
        }
        this.frames.push(frame);
        this.wake?.();
    }
    end(error3) {
        if (this.terminal !== void 0) {
            return;
        }
        this.terminal = {
            error: error3
        };
        this.wake?.();
    }
    async *[Symbol.asyncIterator]() {
        for(;;){
            while(this.frames.length > 0){
                const frame = this.frames.shift();
                if (frame !== void 0) {
                    yield frame;
                }
            }
            if (this.terminal !== void 0) {
                if (this.terminal.error !== void 0) {
                    throw this.terminal.error;
                }
                return;
            }
            await new Promise((resolve36)=>{
                this.wake = resolve36;
            });
            this.wake = void 0;
        }
    }
};

}
