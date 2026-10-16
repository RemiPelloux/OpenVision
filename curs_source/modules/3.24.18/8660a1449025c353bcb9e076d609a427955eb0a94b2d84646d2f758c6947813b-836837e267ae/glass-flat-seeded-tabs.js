import { Djk } from "./Ycg.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { bee, eEe, oQt } from "./glass-editor-panel-app-registry.js";
import { GMe, GVe, NE, WVe, ZO, _Mn } from "./glass-tab-persistence-constants.js";
import { NE_, lnn, p9s } from "./mE_.js";
import { E } from "./tslib.es6.js";
var ewc, twc, LE_, OE_;
export { LE_, OE_, ewc, twc };
var __wakaru_RcT_initialized = false;
export function RcT() {
if (__wakaru_RcT_initialized) return;
__wakaru_RcT_initialized = true;
"use strict";
E(), k_(), oQt(), NE(), ewc = [
    {
        tabId: GMe,
        availability: "environmentSetup",
        push: (t)=>t.manager.push({
                groupId: t.groupId,
                closable: !0,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: GMe,
                kind: jt.EnvironmentSetup,
                props: {},
                label: "Environment"
            })
    },
    {
        tabId: ZO,
        availability: "changes",
        push: (t)=>t.manager.push({
                groupId: t.groupId,
                closable: !0,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: ZO,
                kind: jt.Diff,
                props: {},
                label: "Changes"
            })
    },
    {
        tabId: WVe,
        availability: "desktop",
        push: (t)=>t.manager.push({
                groupId: t.groupId,
                closable: !0,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: WVe,
                kind: jt.Vnc,
                props: {},
                label: "Desktop"
            })
    },
    {
        tabId: GVe,
        availability: "browser",
        push: (t)=>{
            t.manager.push({
                groupId: t.groupId,
                closable: !0,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: GVe,
                kind: jt.Browser,
                props: {
                    browserId: t.getSeededBrowserId()
                },
                label: _Mn
            });
        }
    },
    {
        tabId: bee.tabId,
        availability: "context",
        push: (t)=>t.manager.push({
                groupId: t.groupId,
                closable: bee.closable,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: bee.tabId,
                kind: bee.tabKind,
                props: {},
                label: bee.label
            })
    },
    {
        tabId: eEe.tabId,
        availability: "mainBotTasks",
        push: (t)=>t.manager.push({
                groupId: t.groupId,
                closable: eEe.closable,
                activate: t.activate,
                targetIndex: t.targetIndex,
                tabId: eEe.tabId,
                kind: eEe.tabKind,
                props: {},
                label: eEe.label
            })
    }
], twc = ewc.map((t)=>t.tabId), LE_ = [
    ZO,
    WVe,
    GVe
], OE_ = class {
    constructor(t){
        this._deps = t, this._dismissedSeededTabIds = new Set, this._suppressDismissalDepth = 0, this._availabilityClosedRowIndices = new Map;
    }
    getDismissedTabIds() {
        return Array.from(this._dismissedSeededTabIds);
    }
    isDismissed(t) {
        return this._dismissedSeededTabIds.has(t) && !this._deps.isAppTabPinned(t);
    }
    setDismissedTabIds(t) {
        this._dismissedSeededTabIds.clear();
        for (const e of t)lnn(e) && this._dismissedSeededTabIds.add(e);
    }
    recordUserClose(t, e) {
        lnn(t) && this._recordUserDismissal(t, e);
    }
    _recordUserDismissal(t, e) {
        this._dismissedSeededTabIds.has(t) || (this._dismissedSeededTabIds.add(t), this._deps.onDidChangeDismissedSeededTabIds()), this._deps.onDidUserCloseAppTab(t, e);
    }
    setupDismissalTracking() {
        return this._deps.manager.subscribe("tabClosed", (t)=>{
            lnn(t.tabId) && (this._suppressDismissalDepth > 0 || this._deps.isProgrammaticCloseInProgress() || t.isTransfer || this._recordUserDismissal(t.tabId, t));
        });
    }
    reconcileAppTabs() {
        const t = this._deps.getAppTabAvailability();
        if (!t) return;
        const e = this._deps.manager.getGroup(this._deps.groupId);
        if (!e) return;
        const n = [], i = [], r = t.panelReplacementAutoSeedPolicy ?? "all";
        for (const s of twc){
            const o = this._isAppTabAvailable(t, s), a = this._seededRowExists(s), l = o && !this.isDismissed(s), c = p9s(s, r);
            l && !a && c ? n.push(s) : !o && a && i.push(s);
        }
        for (const s of i){
            const o = e.tabs.findIndex((a)=>a.id === s);
            o >= 0 && this._availabilityClosedRowIndices.set(s, o);
        }
        for (const s of i)this._closeWithoutDismissal(s);
        for (const s of n)this._pushAppTab(e, s, !1);
    }
    tryActivateAppTab(t, e = {}) {
        if (e.reviveDismissed === !1 && this.isDismissed(t) || !this.isAppTabActivatable(t)) return !1;
        const n = this._deps.getNewTabGroupId(), i = this._deps.manager.getGroup(n) ?? this._deps.manager.getGroup(this._deps.groupId);
        return i ? (this._dismissedSeededTabIds.delete(t) && this._deps.onDidChangeDismissedSeededTabIds(), this._seededRowExists(t) ? (this._deps.manager.setActive({
            groupId: this._deps.groupId,
            tabId: t,
            force: !0
        }), !0) : (this._pushAppTab(i, t, !0), !0)) : !1;
    }
    isAppTabActivatable(t) {
        const e = this._deps.getAppTabAvailability();
        return e ? this._isAppTabAvailable(e, t) : this._deps.isAppTabActivatableFallback(t);
    }
    _seededRowExists(t) {
        return this._deps.manager.hasTab({
            groupId: this._deps.groupId,
            tabId: t
        });
    }
    _closeWithoutDismissal(t) {
        this._suppressDismissalDepth++;
        try {
            this._deps.manager.close({
                groupId: this._deps.groupId,
                tabId: t,
                force: !0
            });
        } finally{
            this._suppressDismissalDepth--;
        }
    }
    _isAppTabAvailable(t, e) {
        return t[NE_(e).availability] === !0;
    }
    _pushAppTab(t, e, n) {
        const i = this._availabilityClosedRowIndices.get(e);
        this._availabilityClosedRowIndices.delete(e);
        const r = i !== void 0 ? Math.min(i, t.tabs.length) : n ? void 0 : Djk(t.tabs, e);
        NE_(e).push({
            manager: this._deps.manager,
            groupId: t.id,
            activate: n,
            targetIndex: r,
            getSeededBrowserId: ()=>this._deps.getSeededBrowserId()
        });
    }
};

}
