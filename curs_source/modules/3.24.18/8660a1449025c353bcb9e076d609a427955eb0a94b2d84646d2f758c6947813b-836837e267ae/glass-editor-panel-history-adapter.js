import { Qe, Vn, st } from "./Iwo.js";
import { Hn, Ix } from "./dom_2.js";
import { WOn } from "./glass-navigation-history.types.js";
import { E } from "./tslib.es6.js";
import { cI0, dI0 } from "./wTv.js";
import { $t, Bs } from "./window.js";
var DE_;
export { DE_ };
var __wakaru_xcT_initialized = false;
export function xcT() {
if (__wakaru_xcT_initialized) return;
__wakaru_xcT_initialized = true;
"use strict";
E(), Hn(), Bs(), Qe(), WOn(), DE_ = class extends st {
    constructor(t, e, n){
        super(), this._host = t, this._layoutService = e, this._history = n, this._reportsHeld = 0, this._evictingTemporaryTabDepth = 0, this._revealCheck = this._register(new Vn), this._register(this._layoutService.onDidChangeEditorPanelByUserNavigation(()=>this._report("deliberate"))), this._register(this._history.onDidNavigateToStep(()=>{
            const i = this._host.activeWorkspaceAgentId();
            i !== void 0 && this.tryRestore(i);
        }));
    }
    beginTabRestore() {
        this._reportsHeld++;
    }
    endTabRestore() {
        queueMicrotask(()=>{
            this._reportsHeld--, this._store.isDisposed || this._report("fill");
        });
    }
    evictTemporaryTab(t) {
        this._evictingTemporaryTabDepth++;
        try {
            t();
        } finally{
            this._evictingTemporaryTabDepth--;
        }
    }
    onTabFileShown(t) {
        this._report(t && !this._host.isProgrammaticTabChange() ? "deliberate" : "silent");
    }
    onActiveTabChanged(t, e = !1) {
        t === null || this._evictingTemporaryTabDepth > 0 || (t !== this._landingTabId && !e && (this._landingTabId = void 0), this._report(e || this._host.isProgrammaticTabChange() ? "silent" : "deliberate"));
    }
    onPaneFocused() {
        this._report(this._host.isProgrammaticTabChange() ? "silent" : "deliberate");
    }
    onTabsReorganized() {
        this._report("silent");
    }
    onTabTransferred(t) {
        if (this._host.isReorganizingTabs()) return;
        t === this._landingTabId && (this._landingTabId = void 0);
        const e = this._host.isProgrammaticTabChange() ? "silent" : "deliberate";
        this._reportsHeld++, queueMicrotask(()=>{
            this._reportsHeld--, this._store.isDisposed || this._report(e, e === "deliberate" ? t : this._host.activeTabId());
        });
    }
    onPanelVisibilityChanged(t) {
        t ? this._scheduleRevealCheck() : this._landingTabId = void 0;
    }
    onTabClosed(t) {
        this._evictingTemporaryTabDepth > 0 || (t === this._landingTabId && (this._landingTabId = void 0), this._report("silent"), this._dropStepsForTab(t));
    }
    _dropStepsForTab(t) {
        this._history.dropSteps((e)=>e.kind === "agent" && dI0(e) === t && e.agentId !== void 0 && this._host.agentBelongsToThisWorkspace(e.agentId));
    }
    tryRestore(t) {
        const e = this._stepWithPanel(t)?.panel;
        return e !== void 0 && this._apply(t, e);
    }
    isLandingTab(t) {
        return this._landingTabId === t;
    }
    _shownPanelFor(t, e) {
        return cI0(this._layoutService.isEditorPanelIntendedVisibleForAgent(t), {
            activeTabId: e,
            previewFile: e === void 0 ? void 0 : this._host.previewFileOf(e)
        });
    }
    _report(t, e = this._host.activeTabId()) {
        if (this._reportsHeld > 0 || this._host.isReorganizingTabs() || this._host.isTransferringTabs() || t === "deliberate" && this._history.isAgentSwitchInFlight()) return;
        const n = this._host.activeWorkspaceAgentId();
        if (n === void 0) return;
        const i = this._shownPanelFor(n, e);
        t === "fill" && this._stepWithPanel(n) !== void 0 || (t === "deliberate" && !this._host.isClosingTabs() ? this._history.pushPanelStep({
            agentId: n,
            panel: i
        }) : this._history.notePanel({
            agentId: n,
            panel: i
        }));
    }
    _scheduleRevealCheck() {
        this._revealCheck.value = Ix($t, ()=>{
            const t = this._host.activeWorkspaceAgentId();
            t !== void 0 && this._stepWithPanel(t)?.panel?.open === !1 && this._report("deliberate");
        });
    }
    _apply(t, e) {
        const n = e.open ? e.activeTabId : void 0;
        let i;
        this._reportsHeld++;
        try {
            e.open && n !== void 0 && (i = this._host.activateTabForLanding({
                agentId: t,
                tabId: n,
                previewFile: e.previewFile
            }), i !== void 0 && (this._landingTabId = i)), this._layoutService.setEditorPanelVisibilityForHistoryLanding(t, e.open);
        } finally{
            this._reportsHeld--;
        }
        return n !== void 0 && i !== void 0 && i !== n && (this._history.notePanel({
            agentId: t,
            panel: this._shownPanelFor(t, i)
        }), this._host.hasTab(n) || this._dropStepsForTab(n)), i !== void 0;
    }
    _stepWithPanel(t) {
        const e = this._history.currentStep;
        return e?.kind === "agent" && e.agentId === t && e.panel !== void 0 ? e : void 0;
    }
};

}
