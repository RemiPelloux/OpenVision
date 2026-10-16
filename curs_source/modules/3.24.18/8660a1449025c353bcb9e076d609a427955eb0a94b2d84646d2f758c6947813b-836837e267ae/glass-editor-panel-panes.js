import { KGl, XGl, YGl, ZGl, _av, e5i, gJw, iIs, uJw, yJw } from "./Asv.js";
import { DIf, aDe } from "./constants_22.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { fJw } from "./glass-editor-panel-auto-open-placement.js";
import { JOi } from "./glass-editor-panel-panels-model.js";
import { Cav } from "./glass-editor-panel-terminal-shortcut-placement.js";
import { Ds, NE, pIl } from "./glass-tab-persistence-constants.js";
import { Mt } from "./index_197.js";
import { Yvi } from "./tab-activation-history.js";
import { njr } from "./tiling-system-manager.js";
import { E } from "./tslib.es6.js";
var QGl;
export { QGl };
var __wakaru_Tav_initialized = false;
export function Tav() {
if (__wakaru_Tav_initialized) return;
__wakaru_Tav_initialized = true;
"use strict";
E(), Mt(), aDe(), k_(), fJw(), JOi(), Cav(), NE(), QGl = class {
    constructor(t){
        this._deps = t, this._tilingActive = !1, this._pendingPaneClaims = new Map, this._homePaneIdByKind = new Map, this._recentPaneIdByFamily = new Map, this._automaticOpenDepth = 0, this._homeRecordingSuppression = 0, this._suppressReactions = 0, this._visits = new Yvi, this._visitedTabId = null, this._returnDepth = 0, this._unsubscribes = [], this._rootGroupId = t.rootGroupId ?? Ds, this._paneGroupName = t.paneGroupName ?? pIl, this.tilingManager = new njr({
            root: {
                type: "leaf",
                id: this._rootGroupId,
                data: {}
            },
            config: {
                minPanelSize: DIf
            }
        }), this._unsubscribes.push(this._deps.manager.subscribe("tabClosed", (e)=>{
            this._pendingPaneClaims.delete(e.tabId), e.isTransfer || (this._visits.delete(e.tabId), this._visitedTabId === e.tabId && (this._visitedTabId = null)), this._schedulePaneCollapseCheck(e.groupId);
        }), this._deps.manager.subscribe("stableTabUnregistered", (e)=>{
            this._schedulePaneCollapseCheck(e.groupId);
        }), this._deps.manager.subscribe("tabTransferred", (e)=>{
            this._suppressReactions === 0 && this._homeRecordingSuppression === 0 && this._automaticOpenDepth === 0 && this._tilingActive && e.sourceGroupId !== e.targetGroupId && this.tilingManager.getPanelData(e.targetGroupId) !== void 0 && this._recordHomePane(e.tabId, e.targetGroupId), this._schedulePaneCollapseCheck(e.sourceGroupId);
        }), this._deps.manager.subscribe("activeTabIdChanged", (e)=>{
            this._suppressReactions === 0 && this._automaticOpenDepth === 0 && e.isScopeReselection !== !0 && this._tilingActive && e.tabId !== null && this.tilingManager.getPanelData(e.groupId) !== void 0 && (this.tilingManager.setFocusedPanel(e.groupId), this._recordRecentFamilyPane(e.groupId, e.tabId)), this._recordVisit();
        }), this.tilingManager.subscribeAll((e)=>{
            e.type === "panel-focused" && e.payload.panelId !== null && this._suppressReactions === 0 && this._automaticOpenDepth === 0 && this._recordActiveTabFamily(e.payload.panelId), e.type === "panel-focused" && this._recordVisit(), (e.type === "layout-changed" || e.type === "panel-focused") && this._deps.schedulePersist();
        }));
    }
    get isUserTabMove() {
        return this._suppressReactions === 0 && this._homeRecordingSuppression === 0 && this._automaticOpenDepth === 0;
    }
    dispose() {
        for (const t of this._unsubscribes.splice(0))t();
    }
    get isTilingActive() {
        return this._tilingActive;
    }
    get isReorganizingTabs() {
        return this._suppressReactions > 0;
    }
    getActiveGroupId() {
        if (!this._tilingActive) return this._rootGroupId;
        const t = this.tilingManager.focusedPanelId;
        return t && this._deps.manager.getGroup(t) ? t : this._rootGroupId;
    }
    getLastFocusedConversationAgentId() {
        return this._lastFocusedConversationAgentId;
    }
    findPreviousVisitedTabId(t) {
        const e = [
            ...this._deps.manager.groups.values()
        ];
        return this._visits.findPreviousTab(e.flatMap((n)=>n.tabs), e.flatMap((n)=>[
                ...n.stableTabs.values()
            ]), {
            excludedTabIds: t.excludedTabIds,
            isTabEligible: (n)=>e.some((i)=>i.hasTab(n.id) && i.isTabEligibleForActiveSelection(n) && t.isTabShown(n, i.id))
        });
    }
    returnToVisitedTab(t) {
        const e = this._deps.manager.findGroupIdForTab(t);
        if (e !== void 0) {
            this._returnDepth++;
            try {
                this._deps.manager.setActive({
                    groupId: e,
                    tabId: t
                }), this._tilingActive && this.tilingManager.getPanelData(e) !== void 0 && this.tilingManager.setFocusedPanel(e);
            } finally{
                this._returnDepth--;
            }
            this._visits.delete(t), this._visitedTabId = t;
        }
    }
    _recordVisit() {
        const t = this._deps.manager.getGroup(this.getActiveGroupId())?.activeTabId ?? null;
        t !== this._visitedTabId && (!this._deps.manager.isClosingTabs && !this._deps.manager.isTransferringTabs && this._suppressReactions === 0 && this._returnDepth === 0 && this._visits.record({
            previousTabId: this._visitedTabId,
            nextTabId: t
        }), this._visitedTabId = t);
    }
    getLeadingGroupId() {
        if (!this._tilingActive) return this._rootGroupId;
        const t = iIs(this.tilingManager.root);
        return this._deps.manager.getGroup(t) ? t : this._rootGroupId;
    }
    getTerminalShortcutPlacement() {
        if (!this._tilingActive) return {
            kind: "default"
        };
        const t = new Map;
        for (const e of this.tilingManager.getPanelIds())t.set(e, this._visibleTabKindsForPane(e));
        return yJw({
            tilingActive: !0,
            root: this.tilingManager.root,
            visibleTabKindsByPaneId: t
        });
    }
    isSoleReasonPaneRenders(t) {
        if (!this._tilingActive || this.tilingManager.getPanelIds().length < 2) return !1;
        const e = this._deps.manager.findGroupIdForTab(t);
        return e !== void 0 && !this._paneRendersStripRow(e, t);
    }
    getAgentChatOpenGroupId() {
        if (!this._tilingActive) return this.getLeadingGroupId();
        const t = this.tilingManager.getPanelIds().filter((n)=>this._deps.manager.getGroup(n) !== void 0 && !this._paneRendersStripRow(n));
        return t.find((n)=>this._deps.manager.getGroup(n)?.tabs.some((i)=>i.kind === jt.AgentChat)) ?? t[0] ?? this.getLeadingGroupId();
    }
    resolveAutomaticOpenGroup(t) {
        if (!this._tilingActive) return {
            groupId: Ds,
            ruleId: "flat-layout"
        };
        const e = gJw(t, this.buildAutomaticOpenPlacementSnapshot());
        return e === void 0 || this._deps.manager.getGroup(e.paneId) === void 0 ? {
            groupId: this.getActiveGroupId(),
            ruleId: "active-group"
        } : {
            groupId: e.paneId,
            ruleId: e.ruleId
        };
    }
    runAsAutomaticOpen(t) {
        this._automaticOpenDepth++;
        try {
            return this._deps.manager.runAsAutomaticOpen(t);
        } finally{
            this._automaticOpenDepth--;
        }
    }
    buildAutomaticOpenPlacementSnapshot() {
        const t = uJw(this.tilingManager.root);
        return {
            panes: this.tilingManager.getPanelIds().map((n)=>({
                    id: n,
                    rect: t.get(n) ?? {
                        x: 0,
                        y: 0,
                        width: 1,
                        height: 1
                    },
                    visibleTabKinds: this._visibleTabKindsForPane(n)
                })),
            homePaneIdByKind: this._homePaneIdByKind,
            recentPaneIdByFamily: this._recentPaneIdByFamily
        };
    }
    _visibleTabKindsForPane(t) {
        const e = this._deps.manager.getGroup(t);
        if (!e) return [];
        const n = [];
        for (const i of e.tabs)this._deps.isTabVisibleInActiveContext(i) && this._isEditorPanelTabKind(i.kind) && n.push(i.kind);
        for (const i of e.stableTabs.values())i.registered && this._deps.isTabVisibleInActiveContext(i) && this._isEditorPanelTabKind(i.kind) && n.push(i.kind);
        return n;
    }
    getTabsInPaneOrder() {
        if (!this._tilingActive) return [
            ...this._deps.manager.getGroup(this._rootGroupId)?.tabs ?? []
        ];
        const t = [];
        for (const e of this.tilingManager.getPanelIds())t.push(...this._deps.manager.getGroup(e)?.tabs ?? []);
        return t;
    }
    getActiveTabsInPaneOrder() {
        const t = [];
        for (const e of this.tilingManager.getPanelIds()){
            const n = this._deps.manager.getGroup(e), i = n?.activeTabId;
            if (!n || i === null || i === void 0) continue;
            const r = n.getTab(i);
            r && this._deps.isTabVisibleInActiveContext(r) && t.push(r);
        }
        return t;
    }
    buildPersistedPanels() {
        if (!this._tilingActive) return;
        const t = this.tilingManager.root;
        if (t.type === "leaf") return;
        const e = new Map;
        for (const [i, r] of this._pendingPaneClaims){
            const s = e.get(r);
            s ? s.push(i) : e.set(r, [
                i
            ]);
        }
        const n = (i)=>{
            if (i.type === "leaf") {
                const r = this._deps.manager.getGroup(i.id), s = r?.tabs.map((a)=>a.id) ?? [], o = e.get(i.id) ?? [];
                return {
                    type: "leaf",
                    id: i.id,
                    tabIds: [
                        ...s,
                        ...o
                    ],
                    activeTabId: r?.activeTabId ?? void 0
                };
            }
            return {
                type: "branch",
                id: i.id,
                direction: i.direction,
                ratio: i.ratio,
                children: [
                    n(i.children[0]),
                    n(i.children[1])
                ]
            };
        };
        return {
            version: 1,
            root: n(t),
            focusedPaneId: this.tilingManager.focusedPanelId ?? void 0,
            ...this._homePaneIdByKind.size > 0 ? {
                homePaneIdByTabKind: Object.fromEntries(this._homePaneIdByKind)
            } : {}
        };
    }
    initializeFromPersisted(t) {
        this._tilingActive || this._activate(t);
    }
    redistributeClaimedTabs() {
        !this._tilingActive || this._pendingPaneClaims.size === 0 || this.runWithoutHomeRecording(()=>{
            for (const [t, e] of [
                ...this._pendingPaneClaims
            ]){
                const n = this._deps.manager.findGroupIdForTab(t);
                n !== void 0 && (this._pendingPaneClaims.delete(t), !(n === e || this._deps.manager.getGroup(e) === void 0) && this._deps.manager.transferTab({
                    sourceGroupId: n,
                    targetGroupId: e,
                    tabId: t
                }));
            }
        });
    }
    isSplitPaneWithTabNoop(t) {
        const { targetPaneId: e, zone: n, tabId: i } = t, r = this._deps.manager.findGroupIdForTab(i);
        if (r === void 0) return !1;
        const s = this._deps.manager.getGroup(r);
        if (r === e) return (s?.tabs.filter((c)=>this._deps.isTabVisibleInActiveContext(c)).length ?? 0) <= 1;
        if (!s || s.availableStableTabsCount > 0) return !1;
        const o = s.tabs.filter((l)=>this._deps.isTabVisibleInActiveContext(l));
        return o.length === 1 && o[0]?.id === i ? ZGl(this.tilingManager.root, r, e, n) : !1;
    }
    splitPaneWithTab(t) {
        if (!this._tilingActive) return;
        const { targetPaneId: e, zone: n, tabId: i } = t, r = this._deps.manager.findGroupIdForTab(i);
        if (r === void 0 || this.isSplitPaneWithTabNoop(t)) return;
        if ((this._deps.manager.getGroup(e)?.tabs.filter((c)=>this._deps.isTabVisibleInActiveContext(c)).length ?? 0) === 0) {
            this.transferTabToPane({
                paneId: e,
                tabId: i
            });
            return;
        }
        const o = n === "left" || n === "right" ? "horizontal" : "vertical", a = n === "left" || n === "top" ? "before" : "after", l = this._deps.splitSizing === "preserve-relative-areas" ? this.tilingManager.splitPreservingRelativeAreas(e, o, a, {}) : this.tilingManager.split(e, o, a, {});
        l !== null && (this._deps.manager.registerGroup({
            name: this._paneGroupName,
            groupId: l
        }), this._deps.manager.transferTab({
            sourceGroupId: r,
            targetGroupId: l,
            tabId: i
        }), this.tilingManager.setFocusedPanel(l), this._deps.schedulePersist());
    }
    transferTabToPane(t) {
        if (!this._tilingActive) return;
        const { paneId: e, tabId: n, activate: i } = t, r = this._deps.manager.findGroupIdForTab(n), s = this._deps.manager.getGroup(e);
        r === void 0 || r === e || s === void 0 || (this._deps.manager.transferTab({
            sourceGroupId: r,
            targetGroupId: e,
            tabId: n,
            targetIndex: s.tabs.length,
            activate: i
        }), this.tilingManager.setFocusedPanel(e));
    }
    canClosePane(t) {
        const { paneId: e } = t;
        if (!this._tilingActive || e === this._rootGroupId || this.tilingManager.getPanelData(e) === void 0 || this._deps.manager.getGroup(this._rootGroupId) === void 0) return !1;
        const n = this._deps.manager.getGroup(e);
        return n !== void 0 && n.stableTabs.size === 0 && !n.tabs.some((i)=>this._deps.isTabVisibleInActiveContext(i));
    }
    closePane(t) {
        return this.canClosePane(t) ? (this._collapsePaneIfEmpty(t.paneId), this._deps.manager.getGroup(t.paneId) === void 0) : !1;
    }
    runWithoutHomeRecording(t) {
        this._homeRecordingSuppression++;
        try {
            return t();
        } finally{
            this._homeRecordingSuppression--;
        }
    }
    _activate(t) {
        if (this._tilingActive = !0, this._homePaneIdByKind.clear(), this._recentPaneIdByFamily.clear(), this._lastFocusedConversationAgentId = void 0, !_av(t) || t.root.type !== "branch") return;
        const e = this._deps.manager.getGroup(this._rootGroupId);
        if (!e) return;
        const n = new Set(e.tabs.map((s)=>s.id)), i = YGl(t.root, (s)=>s.id === this._rootGroupId || s.tabIds.some((o)=>n.has(o)));
        if (i === void 0) return;
        const r = KGl(i);
        r.some((s)=>s.id === this._rootGroupId) && (this._seedHomePanesFromPersisted(t.homePaneIdByTabKind, new Set(r.map((s)=>s.id))), this._withSuppressedReactions(()=>{
            this._deps.runWhileRestoring(()=>{
                this.tilingManager.restoreLayout({
                    root: XGl(i),
                    focusedPanelId: t.focusedPaneId
                });
                for (const o of r)if (o.id !== this._rootGroupId) {
                    this._deps.manager.registerGroup({
                        name: this._paneGroupName,
                        groupId: o.id
                    });
                    for (const a of o.tabIds)n.has(a) ? this._deps.manager.transferTab({
                        sourceGroupId: this._rootGroupId,
                        targetGroupId: o.id,
                        tabId: a
                    }) : this._pendingPaneClaims.set(a, o.id);
                }
                for (const o of r){
                    const a = this._deps.manager.getGroup(o.id);
                    a && o.activeTabId && a.hasTab(o.activeTabId) && a.setActive({
                        tabId: o.activeTabId
                    });
                }
            });
            const s = this.tilingManager.focusedPanelId;
            s !== null && this._recordActiveTabFamily(s), this._collapseRootPaneIfEmpty();
        }), this._deps.schedulePersist());
    }
    _paneRendersStripRow(t, e) {
        const n = this._deps.manager.getGroup(t);
        return n ? n.availableStableTabsCount > 0 || n.tabs.some((i)=>i.id !== e && this._deps.isTabVisibleInActiveContext(i)) : !1;
    }
    _schedulePaneCollapseCheck(t) {
        this._suppressReactions > 0 || !this._tilingActive || queueMicrotask(()=>t === this._rootGroupId ? this._collapseRootPaneIfEmpty() : this._collapsePaneIfEmpty(t));
    }
    _collapseRootPaneIfEmpty() {
        if (!this._tilingActive) return;
        const t = this._deps.manager.getGroup(this._rootGroupId);
        if (!t || t.availableStableTabsCount > 0 || t.tabs.some((l)=>this._deps.isTabVisibleInActiveContext(l))) return;
        const e = this.tilingManager.getPanelIds().filter((l)=>{
            if (l === this._rootGroupId) return !1;
            const c = this._deps.manager.getGroup(l);
            return !c || c.availableStableTabsCount > 0 ? !1 : c.tabs.some((u)=>this._deps.isTabVisibleInActiveContext(u));
        });
        if (e.length === 0) return;
        const n = this.tilingManager.focusedPanelId, i = this.findPreviousVisitedTabId({
            excludedTabIds: new Set,
            isTabShown: (l, c)=>e.includes(c) && this._deps.isTabVisibleInActiveContext(l)
        }), r = i === void 0 ? void 0 : this._deps.manager.findGroupIdForTab(i), s = n !== null && e.includes(n) ? n : r ?? e[0], o = this._deps.manager.getGroup(s);
        if (!o) return;
        const a = o.activeTabId;
        this._withSuppressedReactions(()=>{
            for (const c of [
                ...o.tabs
            ])this._deps.manager.transferTab({
                sourceGroupId: s,
                targetGroupId: this._rootGroupId,
                tabId: c.id
            });
            this.tilingManager.close(this._rootGroupId);
            const l = (c)=>c.type === "leaf" ? c.id === s ? {
                    ...c,
                    id: this._rootGroupId
                } : c : {
                    ...c,
                    children: [
                        l(c.children[0]),
                        l(c.children[1])
                    ]
                };
            this.tilingManager.restoreLayout({
                root: l(this.tilingManager.root),
                focusedPanelId: this._rootGroupId
            }), this._deps.manager.unregisterGroup(s), a !== null && this._deps.manager.setActive({
                groupId: this._rootGroupId,
                tabId: a
            });
        });
        for (const [l, c] of [
            ...this._pendingPaneClaims
        ])c === s && this._pendingPaneClaims.delete(l);
        this._adoptRootPaneInPlacementMemory(s), this._deps.schedulePersist();
    }
    _collapsePaneIfEmpty(t) {
        if (!this._tilingActive || t === this._rootGroupId || this.tilingManager.getPanelData(t) === void 0 || this._paneRendersStripRow(t)) return;
        const e = this._deps.manager.getGroup(t), n = this.tilingManager.focusedPanelId === t;
        this._withSuppressedReactions(()=>{
            for (const r of [
                ...e?.tabs ?? []
            ])this._deps.manager.transferTab({
                sourceGroupId: t,
                targetGroupId: this._rootGroupId,
                tabId: r.id,
                activate: !1
            });
            for (const [r, s] of [
                ...this._pendingPaneClaims
            ])s === t && this._pendingPaneClaims.delete(r);
            this._forgetPaneInPlacementMemory(t), this._deps.splitSizing === "preserve-relative-areas" ? this.tilingManager.closePreservingRelativeAreas(t) : this.tilingManager.close(t), this._deps.manager.unregisterGroup(t);
            const i = n ? this.findPreviousVisitedTabId({
                excludedTabIds: new Set,
                isTabShown: (r, s)=>this.tilingManager.getPanelData(s) !== void 0 && this._deps.isTabVisibleInActiveContext(r)
            }) : void 0;
            if (i !== void 0) this.returnToVisitedTab(i);
            else if (n) {
                const r = this.tilingManager.focusedPanelId;
                (r === null || !this._paneRendersStripRow(r)) && this.tilingManager.setFocusedPanel(this.tilingManager.getPanelIds().find((s)=>this._paneRendersStripRow(s)) ?? this._rootGroupId);
            }
        }), this._deps.schedulePersist();
    }
    _recordHomePane(t, e) {
        const n = this._deps.manager.getTab({
            groupId: e,
            tabId: t
        })?.kind;
        n === void 0 || !this._isEditorPanelTabKind(n) || (this._homePaneIdByKind.set(n, e), this._deps.schedulePersist());
    }
    _recordRecentFamilyPane(t, e) {
        const n = this._deps.manager.getTab({
            groupId: t,
            tabId: e
        }), i = n?.kind;
        if (i === void 0 || !this._isEditorPanelTabKind(i)) return;
        const r = e5i(i);
        if (this._recentPaneIdByFamily.set(r, t), i === jt.AgentChat || i === jt.SideChat) {
            const s = n !== void 0 && "agentId" in n.props && typeof n.props.agentId == "string" ? n.props.agentId.trim() : "";
            s && (this._lastFocusedConversationAgentId = s);
        }
    }
    _recordActiveTabFamily(t) {
        const e = this._deps.manager.getGroup(t)?.activeTabId;
        e && this._recordRecentFamilyPane(t, e);
    }
    _isEditorPanelTabKind(t) {
        return Object.values(jt).includes(t);
    }
    _seedHomePanesFromPersisted(t, e) {
        if (t === void 0) return;
        const n = new Set(Object.values(jt));
        for (const [i, r] of Object.entries(t))n.has(i) && e.has(r) && this._homePaneIdByKind.set(i, r);
    }
    _forgetPaneInPlacementMemory(t) {
        for (const [e, n] of [
            ...this._homePaneIdByKind
        ])n === t && this._homePaneIdByKind.delete(e);
        for (const [e, n] of [
            ...this._recentPaneIdByFamily
        ])n === t && this._recentPaneIdByFamily.delete(e);
    }
    _adoptRootPaneInPlacementMemory(t) {
        const e = Ds;
        for (const [n, i] of [
            ...this._homePaneIdByKind
        ])i === e ? this._homePaneIdByKind.delete(n) : i === t && this._homePaneIdByKind.set(n, e);
        for (const [n, i] of [
            ...this._recentPaneIdByFamily
        ])i === e ? this._recentPaneIdByFamily.delete(n) : i === t && this._recentPaneIdByFamily.set(n, e);
    }
    _withSuppressedReactions(t) {
        this._suppressReactions++;
        let e;
        try {
            e = t();
        } finally{
            this._suppressReactions--;
        }
        return this._suppressReactions === 0 && this._deps.onDidReorganizeTabs?.(), e;
    }
};

}
