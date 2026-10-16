import { xTi } from "./Aeg.js";
import { zGl } from "./Asv.js";
import { Gt, Pn, Qe, Vn, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Oh, ZS } from "./draftIds.js";
import { Rn } from "./extensions.js";
import { X2s, jOn } from "./glass-desired-selection-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { Q2s, WOn } from "./glass-navigation-history.types.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It } from "./instantiation.js";
import { cp } from "./objects.js";
import { ZOi } from "./project-conversation-panes-state.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $On, Z2s, fI0, gI0 } from "./wTv.js";
import { Cn, Rp, V_, gA, pi } from "./ze.js";
var nSe, MJl, J2s;
export { J2s, MJl, nSe };
var __wakaru_VDe_initialized = false;
export function VDe() {
if (__wakaru_VDe_initialized) return;
__wakaru_VDe_initialized = true;
"use strict";
E(), hC(), X2s(), pi(), Gt(), Qe(), cp(), Rn(), It(), wl(), ZS(), Hv(), ZOi(), WOn(), nSe = Il("glassNavigationHistoryService"), MJl = 50, J2s = class extends st {
    constructor(t, e, n, i){
        super(), this._glassActiveAgentService = t, this._workbenchEnvironmentService = e, this._agentRepositoryService = n, this._desiredSelectionService = i, this.stack = [], this.steps = [], this.cursor = -1, this.beforeHistoryNavigationHandlers = new Set, this.nestedSelectionWatch = this._register(new Vn), this.projectConversationPanesWatch = this._register(new Vn), this._onDidChangeNavigation = this._register(new tt), this.onDidChangeNavigation = this._onDidChangeNavigation.event, this._onDidNavigateToStep = this._register(new tt), this.onDidNavigateToStep = this._onDidNavigateToStep.event, this._onDidRequestAutomationsNavigation = this._register(new tt), this.onDidRequestAutomationsNavigation = this._onDidRequestAutomationsNavigation.event, this._onDidRequestCustomizeNavigation = this._register(new tt), this.onDidRequestCustomizeNavigation = this._onDidRequestCustomizeNavigation.event, this.isGlass = this._workbenchEnvironmentService.isGlass ?? !1, this.isGlass && (this._registerActiveAgentChangeListener(), this._register(this._agentRepositoryService.onDidPromoteEmptyStateDraft((r)=>{
            r.remainOnEmptyState || this._rewriteEmptyStateAgentStep(r.draftAgentId);
        })));
    }
    dispose() {
        this._clearNestedSelectionWatch(), this._clearProjectConversationPanesWatch(), super.dispose();
    }
    _normalizeAgentId(t) {
        return t === Oh ? void 0 : t;
    }
    _normalizeSelectedSubComposerId(t, e) {
        const n = e?.trim();
        if (!(!n || n === t)) return n;
    }
    _clearNestedSelectionWatch() {
        this.nestedSelectionWatch.clear(), this.watchedAgentReference?.dispose(), this.watchedAgentReference = void 0;
    }
    _clearProjectConversationPanesWatch() {
        this.projectConversationPanesWatch.clear();
    }
    _attachProjectConversationPanesWatch(t) {
        this._clearProjectConversationPanesWatch(), t !== void 0 && (this.projectConversationPanesWatch.value = Pn(zGl(()=>{
            const e = xTi(t);
            if (e === void 0) return;
            const n = this._normalizeSelectedSubComposerId(t, e), i = $On(t, {
                selectedSubComposerId: n,
                panel: this._carriedPanel(t)
            });
            if (this.landing?.agentId === t) {
                this.landing.awaitsChild || (this.landing = void 0), this._amendCurrentStep(i);
                return;
            }
            this._tryPushStep(i);
        })));
    }
    _carriedPanel(t) {
        const e = this.currentStep;
        return e?.kind === "agent" && e.agentId === t ? e.panel : void 0;
    }
    _liveNestedId(t) {
        return this._normalizeSelectedSubComposerId(t, this.watchedAgentReference?.composerDataHandle.data.selectedSubComposerId);
    }
    _shownNestedId(t) {
        return this._liveNestedId(t) ?? this._normalizeSelectedSubComposerId(t, xTi(t));
    }
    _attachNestedSelectionWatch(t) {
        if (this._clearNestedSelectionWatch(), t === void 0) return;
        const e = this._agentRepositoryService.getAgent(t);
        if (e === void 0) {
            this.nestedSelectionWatch.value = this._agentRepositoryService.onDidLoadAgent((i)=>{
                i === t && this._normalizeAgentId(this._glassActiveAgentService.getActiveAgentId()) === t && this._attachNestedSelectionWatch(t);
            });
            return;
        }
        this.watchedAgentReference = e;
        const n = gA((i)=>(Cn(V_(()=>e.composerDataHandle.data.selectedSubComposerId, (r)=>{
                const s = this._normalizeSelectedSubComposerId(t, r);
                if (s === void 0 && this._shownNestedId(t) !== void 0) return;
                const o = $On(t, {
                    selectedSubComposerId: s,
                    panel: this._carriedPanel(t)
                });
                if (this.landing?.agentId === t && this.landing.awaitsChild && s !== void 0) {
                    this.landing = void 0, this._amendCurrentStep(o);
                    return;
                }
                this._tryPushStep(o);
            }, {
                defer: !0
            })), i));
        this.nestedSelectionWatch.value = Pn(n);
    }
    _registerActiveAgentChangeListener() {
        let t = this._normalizeAgentId(this._glassActiveAgentService.getActiveAgentId());
        this.steps.push({
            kind: "agent",
            agentId: t
        }), this.cursor = 0, this._attachNestedSelectionWatch(t), this._attachProjectConversationPanesWatch(t), this._register(this._glassActiveAgentService.onDidChangeActiveAgentId((e)=>{
            this.push({
                kind: Q2s.SwitchAgent,
                payload: {
                    priorAgentId: t
                }
            });
            const n = this._normalizeAgentId(e);
            if (t = n, e === Oh || n === void 0 && this._showsMainBot()) {
                this._attachNestedSelectionWatch(void 0), this._attachProjectConversationPanesWatch(void 0);
                return;
            }
            const i = this.pendingNavTarget !== void 0;
            this._tryPushStep($On(n, {
                panel: this._carriedPanel(n)
            })), this.landing = i || n === void 0 ? void 0 : {
                agentId: n,
                awaitsChild: this._desiredSelectionService.desiredId === e && this._desiredSelectionService.desiredSubComposerId !== void 0
            }, this._attachNestedSelectionWatch(n), this._attachProjectConversationPanesWatch(n);
        }));
    }
    pushSidebarStep(t) {
        if (this.isGlass) {
            if (t === void 0 && this._showsMainBot() && !this.isAgentSwitchInFlight()) {
                this.lastObservedSidebar = void 0, this._tryPushStep($On(void 0));
                return;
            }
            this.lastObservedSidebar !== t && (this.lastObservedSidebar = t, t !== void 0 && this._tryPushStep({
                kind: "sidebar",
                actionId: t
            }));
        }
    }
    noteMainBot() {
        const t = this.currentStep;
        !this.isGlass || t?.kind !== "agent" || t.agentId !== void 0 || (this.lastObservedSidebar = "main-bot", this._amendCurrentStep({
            kind: "sidebar",
            actionId: "main-bot"
        }));
    }
    _showsMainBot() {
        const t = this.currentStep;
        return t?.kind === "sidebar" && t.actionId === "main-bot";
    }
    pushAutomationsStep(t) {
        this.isGlass && this._tryPushStep({
            kind: "automations",
            view: t
        });
    }
    pushCustomizeStep(t) {
        this.isGlass && this._tryPushStep({
            kind: "customize",
            view: t
        });
    }
    pushSubagentPreviewStep(t, e) {
        if (!this.isGlass) return;
        const n = this._normalizeAgentId(this._glassActiveAgentService.getActiveAgentId());
        if (n === void 0 || this.isAgentSwitchInFlight()) return;
        const i = this._liveNestedId(n);
        t !== n && t !== i || this._tryPushStep($On(n, {
            selectedSubComposerId: i,
            previewSubagentId: this._normalizeSelectedSubComposerId(t, e),
            panel: this._carriedPanel(n)
        }));
    }
    isAgentSwitchInFlight() {
        return this._normalizeAgentId(this._glassActiveAgentService.getActiveAgentId()) !== this._normalizeAgentId(this._desiredSelectionService.desiredId);
    }
    _currentStepForPanelReport(t) {
        if (!this.isGlass || t !== this._normalizeAgentId(this._glassActiveAgentService.getActiveAgentId())) return;
        const e = this.currentStep;
        return e?.kind === "agent" && e.agentId === t ? e : void 0;
    }
    pushPanelStep({ agentId: t, panel: e }) {
        const n = this._currentStepForPanelReport(t);
        if (n === void 0) return;
        const i = this._shownNestedId(t);
        this._tryPushStep($On(t, {
            selectedSubComposerId: i,
            previewSubagentId: n.selectedSubComposerId === i ? n.previewSubagentId : void 0,
            panel: e
        }));
    }
    notePanel({ agentId: t, panel: e }) {
        const n = this._currentStepForPanelReport(t);
        n !== void 0 && this._amendCurrentStep({
            ...n,
            panel: e
        });
    }
    dropSteps(t) {
        this.isGlass && this._compactSteps(t) && this._onDidChangeNavigation.fire();
    }
    _compactSteps(t = ()=>!1) {
        const e = [];
        let n = this.cursor;
        for (const [i, r] of this.steps.entries()){
            const s = i === this.cursor;
            if (!s && t(r)) continue;
            const o = e[e.length - 1];
            (o === void 0 || !Z2s(o, r)) && e.push(r), s && (n = e.length - 1);
        }
        return e.length === this.steps.length ? !1 : (this.steps.splice(0, this.steps.length, ...e), this.cursor = n, !0);
    }
    _amendCurrentStep(t) {
        const e = this.steps[this.cursor];
        e === void 0 || Z2s(e, t) || (this.steps[this.cursor] = t, this._compactSteps(), this._onDidChangeNavigation.fire());
    }
    get currentStep() {
        return this.steps[this.cursor];
    }
    consumeEmptyStateStep(t) {
        if (!this.isGlass) return;
        const e = this._normalizeAgentId(t);
        if (e === void 0) return;
        const n = this.steps[this.cursor];
        if (n?.kind === "agent" && n.agentId === e) {
            const i = this.cursor - 1, r = this.steps[i];
            if (r?.kind === "agent" && r.agentId === void 0) this.steps.splice(i, 1), this.cursor--;
            else return;
        } else if (n?.kind === "agent" && n.agentId === void 0) this.steps[this.cursor] = {
            ...n,
            agentId: e
        };
        else return;
        this.steps.splice(this.cursor + 1), this._onDidChangeNavigation.fire();
    }
    requestAutomationsNavigation(t) {
        this.isGlass && (this.pendingAutomationsNavigation = t, this._onDidRequestAutomationsNavigation.fire());
    }
    requestCustomizeNavigation(t) {
        this.isGlass && (this.pendingCustomizeNavigation = t, this._onDidRequestCustomizeNavigation.fire());
    }
    consumePendingAutomationsNavigation() {
        const t = this.pendingAutomationsNavigation;
        return this.pendingAutomationsNavigation = void 0, t;
    }
    peekPendingAutomationsNavigation() {
        return this.pendingAutomationsNavigation;
    }
    consumePendingCustomizeNavigation() {
        const t = this.pendingCustomizeNavigation;
        return this.pendingCustomizeNavigation = void 0, t;
    }
    registerBeforeHistoryNavigationHandler(t) {
        return this.isGlass ? (this.beforeHistoryNavigationHandlers.add(t), Pn(()=>{
            this.beforeHistoryNavigationHandlers.delete(t);
        })) : st.None;
    }
    _confirmBeforeHistoryNavigationSync() {
        for (const t of this.beforeHistoryNavigationHandlers){
            const e = t();
            if (e instanceof Promise || !e) return !1;
        }
        return !0;
    }
    async _confirmBeforeHistoryNavigation() {
        for (const t of this.beforeHistoryNavigationHandlers)if (!await t()) return !1;
        return !0;
    }
    _tryPushStep(t) {
        if (this.pendingNavTarget !== void 0) {
            if (Z2s(this.pendingNavTarget, t)) {
                this.pendingNavTarget = void 0;
                return;
            }
            if (this._isExpectedNavSideEffect(this.pendingNavTarget, t)) return;
            this.pendingNavTarget = void 0;
        }
        this._pushStep(t);
    }
    _isExpectedNavSideEffect(t, e) {
        return t.kind === "sidebar" && e.kind === "agent" && e.agentId === void 0 || t.kind === "automations" && e.kind === "sidebar" && e.actionId === "automations" || t.kind === "automations" && e.kind === "agent" && e.agentId === void 0 || t.kind === "customize" && e.kind === "sidebar" && e.actionId === "marketplace" || t.kind === "customize" && e.kind === "agent" && e.agentId === void 0 || t.kind === "agent" && e.kind === "agent" && gI0(t, e);
    }
    _pushStep(t) {
        if (!(this.cursor >= 0 && Z2s(this.steps[this.cursor], t))) {
            for(this.landing = void 0, this.steps.splice(this.cursor + 1), this.steps.push(t), this.cursor = this.steps.length - 1; this.steps.length > MJl;)this.steps.shift(), this.cursor--;
            this._onDidChangeNavigation.fire();
        }
    }
    canGoBack(t) {
        return this.isGlass ? this._findBackCursor(t) !== void 0 : !1;
    }
    canGoForward(t) {
        return this.isGlass ? this._findForwardCursor(t) !== void 0 : !1;
    }
    _findBackCursor(t) {
        for(let e = this.cursor - 1; e >= 0; e--)if (t === void 0 || t(this.steps[e])) return e;
    }
    _findForwardCursor(t) {
        for(let e = this.cursor + 1; e < this.steps.length; e++)if (t === void 0 || t(this.steps[e])) return e;
    }
    goBack() {
        if (this.canGoBack() && this._confirmBeforeHistoryNavigationSync()) return this._landOn(this.cursor - 1);
    }
    goForward() {
        if (this.canGoForward() && this._confirmBeforeHistoryNavigationSync()) return this._landOn(this.cursor + 1);
    }
    async goBackWithConfirmation(t) {
        const e = this._findBackCursor(t);
        if (e !== void 0 && await this._confirmBeforeHistoryNavigation()) return this._landOn(e);
    }
    async goForwardWithConfirmation(t) {
        const e = this._findForwardCursor(t);
        if (e !== void 0 && await this._confirmBeforeHistoryNavigation()) return this._landOn(e);
    }
    _landOn(t) {
        const e = this.steps[this.cursor];
        this.landing = void 0, this.cursor = t;
        const n = this.steps[t];
        return this.pendingNavTarget = e !== void 0 && fI0(e, n) ? void 0 : n, this._onDidChangeNavigation.fire(), this._onDidNavigateToStep.fire(n), n;
    }
    _rewriteEmptyStateAgentStep(t) {
        const e = this._normalizeAgentId(t);
        if (e === void 0) return;
        const n = this.cursor + 1, i = this.cursor - 1, r = this.cursor;
        for (const s of [
            n,
            i,
            r
        ]){
            if (s < 0 || s >= this.steps.length) continue;
            const o = this.steps[s];
            if (o?.kind === "agent" && o.agentId === void 0) {
                this.steps[s] = {
                    ...o,
                    agentId: e
                }, this._onDidChangeNavigation.fire();
                return;
            }
        }
    }
    push(t) {
        if (!this.isGlass) return;
        const e = this.stack[this.stack.length - 1];
        if (!(e !== void 0 && Rp(e, t))) for(this.stack.push(t); this.stack.length > MJl;)this.stack.shift();
    }
    peek(t) {
        if (!this.isGlass) return;
        const { kind: e } = t;
        for(let n = this.stack.length - 1; n >= 0; n--){
            const i = this.stack[n];
            if (i.kind === e) return i.payload;
        }
    }
}, J2s = Re([
    F(0, vm),
    F(1, ow),
    F(2, ma),
    F(3, jOn)
], J2s), bn(nSe, J2s, 1, 1);

}
