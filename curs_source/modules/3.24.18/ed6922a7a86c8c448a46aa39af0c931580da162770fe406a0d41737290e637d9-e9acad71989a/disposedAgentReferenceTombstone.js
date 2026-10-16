import { ZS } from "./De_3.js";
import { ns, si } from "./HVr.js";
import { N1, t8 } from "./reactive.js";
import { iL } from "./selectedContextData.js";
import { x } from "./tslib.es6.js";
function qxh(e, t) {
    let n = !1;
    return (i)=>{
        n || (n = !0, ns(new Error(`AgentReference used after dispose (stableId=${e}, access=${i}, via=${t})`)));
    };
}
function mLe() {
    return Rjt;
}
function Ze_(e) {
    const t = Promise.reject(new vJi({
        stableId: e.stableId,
        agentId: e.agentId,
        operation: "workspaceFactory.load"
    }));
    return t.catch(()=>{}), t;
}
function Qe_(e) {
    const { agentId: t, stableId: n } = e;
    return Object.freeze({
        load: ()=>Ze_({
                agentId: t,
                stableId: n
            }),
        workspace: Xxh
    });
}
function Je_(e) {
    const t = Object.freeze({
        composerId: e,
        hasLoaded: !1,
        text: "",
        richText: "",
        status: "none",
        context: ZS(),
        fullConversationHeadersOnly: mLe(),
        conversationMap: Object.freeze({}),
        generatingBubbleIds: mLe(),
        codeBlockData: Object.freeze({}),
        originalFileStates: Object.freeze({}),
        newlyCreatedFiles: mLe(),
        newlyCreatedFolders: mLe(),
        capabilities: mLe(),
        capabilityContexts: mLe(),
        subComposerIds: mLe(),
        todos: mLe(),
        allAttachedFileCodeChunksUris: new Set,
        modelConfig: {
            modelName: "",
            maxMode: !1
        }
    });
    return Object.freeze({
        composerId: e,
        data: t,
        setData: ()=>{},
        restore: async ()=>{}
    });
}
var vJi, Rjt, zxh, NTo, Kxh, Yxh, Xxh, Zxh;
export { Je_, Kxh, NTo, Qe_, Rjt, Xxh, Yxh, Ze_, Zxh, mLe, qxh, vJi, zxh };
var __wakaru_nt__initialized = false;
export function nt_() {
if (__wakaru_nt__initialized) return;
__wakaru_nt__initialized = true;
"use strict";
x(), si(), iL(), N1(), vJi = class extends Error {
    constructor(e){
        super(`Cannot ${e.operation}: agent reference is disposed and agent is no longer loaded (agentId=${e.agentId}, stableId=${e.stableId})`), this.name = "AgentReferenceDisposedError";
    }
}, Rjt = Object.freeze([]), zxh = new t8(void 0), NTo = Rjt, Kxh = new t8(NTo), Yxh = Object.freeze({
    slashMenuItems: new t8(mLe()),
    mcpServers: new t8(Rjt),
    defaultBranches: new t8(Rjt),
    branchOptionsByRepo: new t8(Rjt),
    notifyBranchPickerOpened: ()=>{},
    applySelectionSideEffects: ()=>{},
    applySkillSelectionSideEffects: ()=>{},
    toggleMcpServer: ()=>{},
    getMentionItems: async ()=>[],
    resolvePastChatFirstPrompt: async ()=>{},
    dispose: ()=>{}
}), Xxh = new t8(void 0), Zxh = class {
    constructor(e, t, n, i){
        this.header = e, this._composerId = t, this._agentId = n, this._stableId = i;
    }
    get composerDataHandle() {
        return this._composerDataHandle ??= Je_(this._composerId);
    }
    get workspaceFactory() {
        return this._workspaceFactory ??= Qe_({
            agentId: this._agentId,
            stableId: this._stableId
        });
    }
    get report() {
        return this._report ??= qxh(this._stableId, "stand-in");
    }
};

}
