import { init_dist14 } from "../cursor-plugins/dist/index.js";
import { drainHopChainRejection, protoToLoadFailure, rebuildPluginContentFromDescriptor } from "../daemon_metrics_exports.js";
import { AgentHostPluginsReloadArgs, AgentHostPluginsSnapshotArgs, AgentHostPluginsSnapshotResult, init_agent_host_plugins_pb } from "../proto/dist/generated/agent/v1/agent_host_plugins_pb.js";
import { AgentHostSurfacePluginsRequest, init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
var EMPTY_SNAPSHOT2, HopPluginsService;
export { EMPTY_SNAPSHOT2, HopPluginsService };
var __wakaru_init_surface_plugins_initialized = false;
export function init_surface_plugins() {
if (__wakaru_init_surface_plugins_initialized) return;
__wakaru_init_surface_plugins_initialized = true;
"use strict";
init_dist14();
init_agent_host_plugins_pb();
init_agent_host_surface_pb();
EMPTY_SNAPSHOT2 = new AgentHostPluginsSnapshotResult({
    plugins: [],
    incomplete: true,
    failures: []
});
HopPluginsService = class {
    constructor(options2){
        this.options = options2;
        this.plugins = [];
        this.failures = [];
        this.incomplete = true;
        this.hopChain = Promise.resolve();
        this.surfaceHopsEnabled = false;
    }
    enableSurfaceHops() {
        this.surfaceHopsEnabled = true;
    }
    async getAllEnabledPlugins() {
        if (this.plugins.length > 0 || !this.incomplete) {
            return this.plugins;
        }
        if (!this.surfaceHopsEnabled) {
            return this.plugins;
        }
        await this.enqueueHop(async ()=>{
            if (this.plugins.length > 0 || !this.incomplete) {
                return;
            }
            await this.consumeHopOutcome(this.hopSnapshot({
                operation: {
                    case: "snapshot",
                    value: new AgentHostPluginsSnapshotArgs()
                }
            }), "initial");
        });
        return this.plugins;
    }
    getLoadFailures() {
        return this.failures;
    }
    isPluginSetIncomplete() {
        return this.incomplete;
    }
    async reload() {
        this.surfaceHopsEnabled = true;
        await this.enqueueHop(()=>this.consumeHopOutcome(this.hopSnapshot({
                operation: {
                    case: "reload",
                    value: new AgentHostPluginsReloadArgs()
                }
            }), "reload"));
        return this.plugins;
    }
    enqueueHop(work) {
        const next = this.hopChain.then(work);
        this.hopChain = next.catch(drainHopChainRejection);
        return next;
    }
    async consumeHopOutcome(outcomePromise, mode) {
        const outcome = await outcomePromise;
        if (outcome.kind === "snapshot") {
            await this.applySnapshot(outcome.value);
            return;
        }
        if (mode === "initial" && this.plugins.length === 0 && this.incomplete) {
            await this.applySnapshot(EMPTY_SNAPSHOT2);
        }
    }
    async hopSnapshot(request3) {
        const target = this.options.hub.resolveHopTarget({
            sessionId: this.options.sessionId,
            persistedOwner: this.options.resolveOwner(this.options.sessionId),
            kind: "agent_host_plugins"
        });
        if (target === void 0) {
            return {
                kind: "hop-failed"
            };
        }
        const result = await this.options.hub.invokeKind({
            kind: "agent_host_plugins",
            sessionId: this.options.sessionId,
            targetClientInstanceId: target,
            agentHostPlugins: new AgentHostSurfacePluginsRequest(request3)
        });
        if (result.status === "denied" || result.status === "unimplemented") {
            return {
                kind: "hop-failed"
            };
        }
        if (result.status === "accepted" && result.result?.case === "agentHostPlugins") {
            const payload = result.result.value.result;
            if (payload.case === "snapshot") {
                return {
                    kind: "snapshot",
                    value: payload.value
                };
            }
            if (payload.case === "reload" && payload.value.snapshot !== void 0) {
                return {
                    kind: "snapshot",
                    value: payload.value.snapshot
                };
            }
        }
        return {
            kind: "hop-failed"
        };
    }
    async applySnapshot(snapshot) {
        this.incomplete = snapshot.incomplete;
        this.failures = snapshot.failures.map(protoToLoadFailure);
        const rebuild = this.options.rebuildPluginContent ?? rebuildPluginContentFromDescriptor;
        const rebuilt = [];
        for (const descriptor of snapshot.plugins){
            rebuilt.push(await rebuild(descriptor));
        }
        this.plugins = rebuilt;
    }
};

}
