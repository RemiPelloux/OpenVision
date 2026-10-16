import { Ei } from "./Iwo.js";
import { Igg, L1k, O1k, qze } from "./Ycg.js";
import { Kf, cV } from "./reactive.js";
import { LM } from "./selectedContextData.js";
import { E } from "./tslib.es6.js";
var Zos, xAn, Vcl, Qos, Kcl, Ycl, Rgg, Pgg;
export { Kcl, Pgg, Qos, Rgg, Vcl, Ycl, Zos, xAn };
var __wakaru_Mgg_initialized = false;
export function Mgg() {
if (__wakaru_Mgg_initialized) return;
__wakaru_Mgg_initialized = true;
"use strict";
E(), Ei(), LM(), Kf(), Zos = class extends Error {
    constructor(t){
        super(`Cannot ${t.operation}: agent reference is disposed and agent is no longer loaded (agentId=${t.agentId}, stableId=${t.stableId})`), this.name = "AgentReferenceDisposedError";
    }
}, xAn = Object.freeze([]), Vcl = new cV(void 0), Qos = xAn, Kcl = new cV(Qos), Ycl = Object.freeze({
    slashMenuItems: new cV(qze()),
    mcpServers: new cV(xAn),
    defaultBranches: new cV(xAn),
    branchOptionsByRepo: new cV(xAn),
    notifyBranchPickerOpened: ()=>{},
    applySelectionSideEffects: ()=>{},
    applySkillSelectionSideEffects: ()=>{},
    toggleMcpServer: ()=>{},
    getMentionItems: async ()=>[],
    resolvePastChatFirstPrompt: async ()=>{},
    dispose: ()=>{}
}), Rgg = new cV(void 0), Pgg = class {
    constructor(t, e, n, i){
        this.header = t, this._composerId = e, this._agentId = n, this._stableId = i;
    }
    get composerDataHandle() {
        return this._composerDataHandle ??= O1k(this._composerId);
    }
    get workspaceFactory() {
        return this._workspaceFactory ??= L1k({
            agentId: this._agentId,
            stableId: this._stableId
        });
    }
    get report() {
        return this._report ??= Igg(this._stableId, "stand-in");
    }
};

}
