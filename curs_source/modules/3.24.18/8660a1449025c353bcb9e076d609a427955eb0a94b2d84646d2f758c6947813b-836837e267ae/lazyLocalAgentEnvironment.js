import { Nt, Qe, st } from "./Iwo.js";
import { Jtl, lTi } from "./localAgentEnvironment.js";
import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
var UTi, Fil;
export { Fil, UTi };
var __wakaru_Ktg_initialized = false;
export function Ktg() {
if (__wakaru_Ktg_initialized) return;
__wakaru_Ktg_initialized = true;
"use strict";
E(), Qe(), Kf(), Jtl(), Cu(), UTi = class {
    constructor(t, e){
        this.inner = t, this.activate = e;
    }
    get value() {
        return this.activate(), this.inner.value;
    }
    onChange(t) {
        return this.activate(), this.inner.onChange(t);
    }
}, Fil = class extends st {
    constructor(t, e){
        super(), this._workspaceFactory = t, this._options = e, this._slashMenuItems = new ca([]), this._mcpServers = new ca([]), this._defaultBranches = new ca([]), this._branchOptionsByRepo = new ca([]), this._delegateStore = this._register(new Nt), this._activated = !1, this._warmRequested = !1;
        const n = ()=>this._activate();
        this.slashMenuItems = new UTi(this._slashMenuItems, n), this.mcpServers = new UTi(this._mcpServers, n), this.defaultBranches = new UTi(this._defaultBranches, n), this.branchOptionsByRepo = new UTi(this._branchOptionsByRepo, n), this._register(this._workspaceFactory.workspace.onChange(()=>this._syncDelegate()));
    }
    _activate() {
        if (this._activated || this._store.isDisposed) return;
        this._activated = !0;
        const t = this._workspaceFactory.load(Lc.Customizations | Lc.Mcp | Lc.Git);
        this._workspaceLoad = t, t.catch(()=>{}).finally(()=>{
            this._workspaceLoad === t && (this._workspaceLoad = void 0);
        }), this._syncDelegate();
    }
    _syncDelegate() {
        if (this._store.isDisposed || !this._activated) return;
        const t = this._workspaceFactory.workspace.value;
        if (t === this._delegateWorkspace || (this._clearDelegate(), t === void 0)) return;
        const e = {
            object: t,
            dispose () {},
            [Symbol.dispose] () {}
        };
        let n;
        try {
            n = this._options?.createDelegate?.(e) ?? new lTi(e, {
                agentKind: this._options?.agentKind ?? "claude_code"
            });
        } catch (i) {
            this._options?.onDelegateCreationError?.(i);
            return;
        }
        this._delegate = n, this._delegateWorkspace = t, this._delegateStore.add(n), this._delegateStore.add(n.slashMenuItems.onChange((i)=>this._slashMenuItems.set(i))), this._delegateStore.add(n.mcpServers.onChange((i)=>this._mcpServers.set(i))), this._delegateStore.add(n.defaultBranches.onChange((i)=>this._defaultBranches.set(i))), this._delegateStore.add(n.branchOptionsByRepo.onChange((i)=>this._branchOptionsByRepo.set(i))), this._slashMenuItems.set(n.slashMenuItems.value), this._mcpServers.set(n.mcpServers.value), this._defaultBranches.set(n.defaultBranches.value), this._branchOptionsByRepo.set(n.branchOptionsByRepo.value), this._warmRequested && n.warmSlashMenuCache?.();
    }
    _clearDelegate() {
        this._delegate === void 0 && this._delegateWorkspace === void 0 || (this._delegateStore.clear(), this._delegate = void 0, this._delegateWorkspace = void 0, this._slashMenuItems.set([]), this._mcpServers.set([]), this._defaultBranches.set([]), this._branchOptionsByRepo.set([]));
    }
    dispose() {
        super.dispose(), this._clearDelegate(), this._workspaceLoad = void 0;
    }
    async _waitForPendingWorkspaceLoad() {
        if (this._delegate === void 0 && this._workspaceLoad !== void 0) {
            try {
                await this._workspaceLoad;
            } catch  {
                return !1;
            }
            this._syncDelegate();
        }
        return this._delegate !== void 0;
    }
    applySelectionSideEffects(t, e) {
        this._delegate?.applySelectionSideEffects(t, e);
    }
    applySkillSelectionSideEffects(t, e) {
        this._delegate?.applySkillSelectionSideEffects(t, e);
    }
    toggleMcpServer(t, e) {
        this._delegate?.toggleMcpServer(t, e);
    }
    async connectMcpServer(t) {
        this._activate(), await this._waitForPendingWorkspaceLoad();
        const e = this._delegate;
        if (e?.connectMcpServer === void 0) throw new Error("Agent environment is not ready to connect MCP servers");
        return e.connectMcpServer(t);
    }
    async runMcpServerAttentionAction(t) {
        this._activate(), await this._waitForPendingWorkspaceLoad();
        const e = this._delegate;
        if (e?.runMcpServerAttentionAction === void 0) throw new Error("Agent environment is not ready to run MCP actions");
        await e.runMcpServerAttentionAction(t);
    }
    async getMentionItems(t, e, n) {
        return this._activate(), await this._waitForPendingWorkspaceLoad() ? this._delegate?.getMentionItems(t, e, n) ?? [] : [];
    }
    async resolvePastChatFirstPrompt(t) {
        if (this._activate(), !!await this._waitForPendingWorkspaceLoad()) return this._delegate?.resolvePastChatFirstPrompt(t);
    }
    async resolvePastChatTranscript(t) {
        if (this._activate(), !!await this._waitForPendingWorkspaceLoad()) return this._delegate?.resolvePastChatTranscript?.(t);
    }
    setBranchOptionsQuery(t, e) {
        this._delegate?.setBranchOptionsQuery?.(t, e);
    }
    notifyBranchPickerOpened(t) {
        this._delegate?.notifyBranchPickerOpened(t);
    }
    primeBranchPicker(t) {
        this._delegate?.primeBranchPicker?.(t);
    }
    async loadMoreBranchOptions(t) {
        await this._delegate?.loadMoreBranchOptions?.(t);
    }
    async refreshBranchOptions(t) {
        await this._delegate?.refreshBranchOptions?.(t);
    }
    recordBranchSelection(t, e) {
        this._delegate?.recordBranchSelection?.(t, e);
    }
    warmSlashMenuCache() {
        this._warmRequested = !0, this._activate(), this._delegate?.warmSlashMenuCache?.();
    }
};

}
