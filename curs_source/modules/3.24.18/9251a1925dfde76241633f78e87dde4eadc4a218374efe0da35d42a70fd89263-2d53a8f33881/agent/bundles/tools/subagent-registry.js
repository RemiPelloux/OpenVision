import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createResource } from "../../../dist_exports.js";
var SubagentRegistry, subagentRegistryResource;
export { SubagentRegistry, subagentRegistryResource };
var __wakaru_init_subagent_registry_initialized = false;
export function init_subagent_registry() {
if (__wakaru_init_subagent_registry_initialized) return;
__wakaru_init_subagent_registry_initialized = true;
"use strict";
init_dist8();
SubagentRegistry = class {
    constructor(){
        this.subagents = new Map();
        this.toolCallIdToSubagentId = new Map();
    }
    get lastAbortOptions() {
        return this._lastAbortOptions;
    }
    register(id, handle, toolCallId) {
        if (this.subagents.has(id)) {
            const prev = this.subagents.get(id);
            this.subagents.delete(id);
            for (const [tcId, subId] of this.toolCallIdToSubagentId){
                if (subId === id) {
                    this.toolCallIdToSubagentId.delete(tcId);
                    break;
                }
            }
            prev.cancel();
        }
        this.subagents.set(id, handle);
        if (toolCallId !== void 0) {
            this.toolCallIdToSubagentId.set(toolCallId, id);
        }
    }
    cancel(id, options2) {
        this._lastAbortOptions = options2;
        let handle = this.subagents.get(id);
        let subagentIdToDelete = id;
        if (handle === void 0) {
            const subagentId = this.toolCallIdToSubagentId.get(id);
            if (subagentId !== void 0) {
                handle = this.subagents.get(subagentId);
                subagentIdToDelete = subagentId;
                this.toolCallIdToSubagentId.delete(id);
            }
        }
        if (handle !== void 0) {
            try {
                handle.cancel(options2);
            } finally{
                this.subagents.delete(subagentIdToDelete);
                for (const [tcId, subId] of this.toolCallIdToSubagentId){
                    if (subId === subagentIdToDelete) {
                        this.toolCallIdToSubagentId.delete(tcId);
                        break;
                    }
                }
            }
        }
    }
    cleanup(id) {
        this.subagents.delete(id);
        for (const [tcId, subId] of this.toolCallIdToSubagentId){
            if (subId === id) {
                this.toolCallIdToSubagentId.delete(tcId);
                break;
            }
        }
    }
    get(id) {
        return this.subagents.get(id);
    }
    has(id) {
        return this.subagents.has(id);
    }
    get size() {
        return this.subagents.size;
    }
    cancelAll(options2) {
        this._lastAbortOptions = options2;
        const excludeToolCallIds = new Set(options2?.excludeToolCallIds ?? []);
        const excludedSubagentIds = new Set();
        for (const toolCallId of excludeToolCallIds){
            const subagentId = this.toolCallIdToSubagentId.get(toolCallId);
            if (subagentId !== void 0) {
                excludedSubagentIds.add(subagentId);
            }
        }
        const entries = Array.from(this.subagents.entries()).filter(([subagentId])=>!excludedSubagentIds.has(subagentId));
        for (const [subagentId] of entries){
            this.subagents.delete(subagentId);
            for (const [tcId, mappedSubagentId] of this.toolCallIdToSubagentId){
                if (mappedSubagentId === subagentId) {
                    this.toolCallIdToSubagentId.delete(tcId);
                    break;
                }
            }
        }
        for (const [, handle] of entries){
            try {
                handle.cancel(options2);
            } catch  {}
        }
    }
};
subagentRegistryResource = createResource("agent/subagent-registry", (_remoteExecManager)=>{
    return new SubagentRegistry();
}, (_implementation, _controlledExecManager)=>{});

}
