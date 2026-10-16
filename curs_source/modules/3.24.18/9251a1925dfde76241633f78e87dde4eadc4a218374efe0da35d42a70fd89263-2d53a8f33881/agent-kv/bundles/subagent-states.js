import { init_serde } from "./serde.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter } from "../../dist_exports.js";
import { loggerKey } from "../../entry_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
function getLoggerBackend(ctx) {
    return ctx.get(loggerKey);
}
function createLogger(name17) {
    function log5(ctx, entry) {
        const timestamp2 = new Date();
        const logger146 = getLoggerBackend(ctx);
        logger146.log(ctx, {
            ...entry,
            timestamp: timestamp2,
            logger: name17
        });
    }
    return {
        debug: (ctx, message, metadata)=>{
            log5(ctx, {
                level: "debug",
                message,
                context: ctx,
                metadata
            });
        },
        info: (ctx, message, metadata)=>{
            log5(ctx, {
                level: "info",
                message,
                context: ctx,
                metadata
            });
        },
        warn: (ctx, message, metadata)=>{
            log5(ctx, {
                level: "warn",
                message,
                context: ctx,
                metadata
            });
        },
        error: (ctx, message, error3, metadata)=>{
            log5(ctx, {
                level: "error",
                message,
                context: ctx,
                error: error3,
                metadata
            });
        }
    };
}
var SUBAGENT_STATE_BLOB_FETCH_CONCURRENCY, logger, subagentStateRefMissingBlob;
export { SUBAGENT_STATE_BLOB_FETCH_CONCURRENCY, createLogger, getLoggerBackend, logger, subagentStateRefMissingBlob };
var __wakaru_init_subagent_states_initialized = false;
export function init_subagent_states() {
if (__wakaru_init_subagent_states_initialized) return;
__wakaru_init_subagent_states_initialized = true;
"use strict";
init_dist();
init_dist4();
init_agent_pb();
init_dist3();
init_serde();
SUBAGENT_STATE_BLOB_FETCH_CONCURRENCY = 8;
logger = createLogger("@anysphere/agent-kv:subagent-states");
subagentStateRefMissingBlob = createCounter("agent_kv.subagent_state_ref.missing_blob", {
    description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.",
    labelNames: [
        "reader",
        "fallback"
    ]
});

}
