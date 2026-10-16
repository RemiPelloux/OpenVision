import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { hasSubagentPrompt } from "../../../dist_exports.js";
import { clampSubagentSpawnDurationMs, isSubagentSpawnCancellation, localSubagentSpawnMode, spawnOutcomeFromExecution } from "../../../tree_chunk_napi_exports.js";
var import_node_perf_hooks4, LOCAL_SUBAGENT_SPAWN_MS_STAT, MAX_SPAWN_DURATION_MS, logger122, HostLocalSubagentSpawnMetrics;
export { HostLocalSubagentSpawnMetrics, LOCAL_SUBAGENT_SPAWN_MS_STAT, MAX_SPAWN_DURATION_MS, import_node_perf_hooks4, logger122 };
var __wakaru_init_subagent_spawn_metrics_initialized = false;
export function init_subagent_spawn_metrics() {
if (__wakaru_init_subagent_spawn_metrics_initialized) return;
__wakaru_init_subagent_spawn_metrics_initialized = true;
"use strict";
import_node_perf_hooks4 = require("node:perf_hooks");
init_dist8();
init_dist();
LOCAL_SUBAGENT_SPAWN_MS_STAT = "composer.subagent.localSpawnMs";
MAX_SPAWN_DURATION_MS = 30 * 60 * 1e3;
logger122 = createLogger("agent-host:subagent-spawn-metrics");
HostLocalSubagentSpawnMetrics = class {
    constructor(metrics, getSurfaceKind){
        this.metrics = metrics;
        this.getSurfaceKind = getSurfaceKind;
        this.pending = new WeakMap();
    }
    async createOrResume(ctx, args, shouldRecord, operation) {
        const startedAtMs = shouldRecord ? import_node_perf_hooks4.performance.now() : void 0;
        const mode = localSubagentSpawnMode(args);
        let outcome = "ok";
        try {
            return await operation();
        } catch (error3) {
            outcome = isSubagentSpawnCancellation(error3, ctx.signal) ? "aborted" : "error";
            throw error3;
        } finally{
            if (startedAtMs !== void 0) {
                this.completeCreateOrResume(ctx, args, startedAtMs, mode, outcome);
            }
        }
    }
    async run(ctx, args, operation) {
        try {
            const outcome = await operation();
            const pending = this.pending.get(args);
            if (outcome.status === "background" && pending?.storeInheritanceStarted === true) {
                await pending.settled;
            } else {
                this.finish(ctx, args, spawnOutcomeFromExecution(outcome));
            }
            return outcome;
        } catch (error3) {
            this.finish(ctx, args, isSubagentSpawnCancellation(error3, ctx.signal) ? "aborted" : "error");
            throw error3;
        }
    }
    async recordStoreInheritance(ctx, args, apply) {
        const pending = this.pending.get(args);
        if (pending !== void 0) {
            pending.storeInheritanceStarted = true;
        }
        const startedAtMs = import_node_perf_hooks4.performance.now();
        const outcome = await apply();
        if (pending !== void 0 && outcome === "ok") {
            this.record(ctx, {
                phase: "store_inherit",
                mode: pending.mode,
                durationMs: import_node_perf_hooks4.performance.now() - startedAtMs,
                outcome
            });
        }
        this.finish(ctx, args, "ok");
        return outcome;
    }
    completeCreateOrResume(ctx, args, startedAtMs, mode, outcome) {
        if (outcome === "ok" && hasSubagentPrompt(args.prompt)) {
            const deferred = Promise.withResolvers();
            this.pending.set(args, {
                startedAtMs,
                mode,
                settled: deferred.promise,
                settle: deferred.resolve,
                storeInheritanceStarted: false
            });
            return;
        }
        this.record(ctx, {
            phase: "total",
            mode,
            durationMs: import_node_perf_hooks4.performance.now() - startedAtMs,
            outcome
        });
    }
    finish(ctx, args, outcome) {
        const pending = this.pending.get(args);
        if (pending === void 0) {
            return;
        }
        this.pending.delete(args);
        this.record(ctx, {
            phase: "total",
            mode: pending.mode,
            durationMs: import_node_perf_hooks4.performance.now() - pending.startedAtMs,
            outcome
        });
        pending.settle();
    }
    record(ctx, options2) {
        if (this.metrics === void 0) {
            return;
        }
        try {
            this.metrics.distribution({
                stat: LOCAL_SUBAGENT_SPAWN_MS_STAT,
                value: clampSubagentSpawnDurationMs(options2.durationMs),
                tags: {
                    phase: options2.phase,
                    mode: options2.mode,
                    surface_kind: this.getSurfaceKind(),
                    outcome: options2.outcome,
                    owner: "agent_host"
                }
            });
        } catch (error3) {
            logger122.warn(ctx, "Local subagent spawn metric emission failed", {
                error: String(error3)
            });
        }
    }
};

}
