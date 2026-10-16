import { AGENT_HOST_MODULE_STATIC_GENERATION } from "../../../../constants/dist/agent-host-module.js";
import { init_dist2 } from "../../../../constants/dist/index.js";
import { agentHostModuleIdentity } from "../../../../utils_pb_exports.js";
var STATICALLY_LINKED_MODULE, ServingModuleTracker;
export { STATICALLY_LINKED_MODULE, ServingModuleTracker };
var __wakaru_init_serving_module_initialized = false;
export function init_serving_module() {
if (__wakaru_init_serving_module_initialized) return;
__wakaru_init_serving_module_initialized = true;
"use strict";
init_dist2();
STATICALLY_LINKED_MODULE = {
    generation: AGENT_HOST_MODULE_STATIC_GENERATION,
    source: "static",
    commit: void 0,
    builtAt: void 0
};
ServingModuleTracker = class {
    constructor(log5, now2 = Date.now){
        this.log = log5;
        this.now = now2;
        this.listeners = new Set();
    }
    current() {
        return this.serving;
    }
    onDidChange(listener) {
        this.listeners.add(listener);
        return ()=>this.listeners.delete(listener);
    }
    serve(module2, channel, cause) {
        const identity = agentHostModuleIdentity(module2, channel);
        if (identity === void 0) {
            this.log(`serving module ${module2.generation.slice(0, 12)} has no telemetry identity`);
            this.set(void 0);
            return;
        }
        const previous = this.serving;
        const sameModule = previous !== void 0 && previous.identity.generation === identity.generation && previous.identity.source === identity.source;
        if (sameModule && previous.cause === cause && previous.identity.channel === identity.channel) {
            return;
        }
        this.set({
            identity,
            cause,
            since: sameModule ? previous.since : this.now()
        });
    }
    follow(loader2) {
        const now2 = loader2.servedNow();
        if (now2 !== void 0) {
            this.serve(now2.module, now2.channel, now2.cause);
        }
        return loader2.onDidServe(({ module: module2, channel, cause })=>this.serve(module2, channel, cause));
    }
    clear() {
        if (this.serving !== void 0) {
            this.set(void 0);
        }
    }
    set(serving) {
        this.serving = serving;
        for (const listener of this.listeners){
            try {
                listener(serving);
            } catch (error3) {
                this.log(`serving module change not reported: ${error3 instanceof Error ? error3.message : String(error3)}`);
            }
        }
    }
};

}
