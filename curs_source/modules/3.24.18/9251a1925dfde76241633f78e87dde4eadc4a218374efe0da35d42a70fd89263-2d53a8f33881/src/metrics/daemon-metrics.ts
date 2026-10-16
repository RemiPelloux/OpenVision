import { createPlatformAgentHostNetworkHost2, init_runtime } from "../../agent-host/dist/runtime.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { require_dist } from "../../cursor-network/dist/index.js";
import { isCursorNetworkHost } from "../../daemon_metrics_exports.js";
import { createHeadlessAgentHostNetworkPlatform } from "../../mcp_sandbox_policy_exports.js";
import { createHeadlessLocalLoopAttemptContextHook } from "../../private_inference_loop_exports.js";
var import_promises55, import_cursor_network3, FINAL_FLUSH_GRACE_MS, DAEMON_AGENT_HOST_SURFACE, DaemonMetrics;
export { DAEMON_AGENT_HOST_SURFACE, DaemonMetrics, FINAL_FLUSH_GRACE_MS, import_cursor_network3, import_promises55 };
var __wakaru_init_daemon_metrics_initialized = false;
export function init_daemon_metrics() {
if (__wakaru_init_daemon_metrics_initialized) return;
__wakaru_init_daemon_metrics_initialized = true;
"use strict";
import_promises55 = require("node:timers/promises");
init_runtime();
import_cursor_network3 = __toESM(require_dist(), 1);
FINAL_FLUSH_GRACE_MS = 1e3;
DAEMON_AGENT_HOST_SURFACE = "daemon";
DaemonMetrics = class {
    constructor(enabled, createSink = (host)=>new import_cursor_network3.AggregatingMetricsProvider(host)){
        this.enabled = enabled;
        this.createSink = createSink;
        this.agentHost = {
            distribution: (metric)=>{
                this.sink?.distribution(metric.stat, metric.value, {
                    ...metric.tags
                });
            },
            increment: (metric)=>this.increment(metric),
            gauge: (metric)=>{
                this.sink?.gauge(metric.stat, metric.value, {
                    ...metric.tags
                });
            }
        };
        this.attachLocalLoopAttemptContext = createHeadlessLocalLoopAttemptContextHook({
            metrics: this.agentHost,
            surface: DAEMON_AGENT_HOST_SURFACE
        });
        this.createNetworkHost = (args)=>{
            const runtime = createPlatformAgentHostNetworkHost2(createHeadlessAgentHostNetworkPlatform({
                ...args,
                metricsIncrement: (stat24)=>this.increment(stat24)
            }), {
                clientIdentity: args.clientIdentity
            });
            if (isCursorNetworkHost(runtime)) {
                this.attach(runtime);
            }
            return runtime;
        };
    }
    attach(host) {
        if (this.enabled) {
            this.sink ??= this.createSink(host);
        }
    }
    increment(stat24) {
        this.sink?.increment(stat24.stat, stat24.value ?? 1, {
            ...stat24.tags
        });
    }
    dispose() {
        this.disposing ??= this.finalFlush();
        return this.disposing;
    }
    async finalFlush() {
        const sink = this.sink;
        this.enabled = false;
        this.sink = void 0;
        if (sink !== void 0) {
            sink.dispose();
            await (0, import_promises55.setTimeout)(FINAL_FLUSH_GRACE_MS, void 0, {
                ref: false
            });
        }
    }
};

}
