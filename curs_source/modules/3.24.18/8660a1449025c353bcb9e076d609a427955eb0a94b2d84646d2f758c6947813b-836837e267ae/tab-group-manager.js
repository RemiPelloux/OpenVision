import { BUr, zbp } from "./ipa.js";
import { Rxa, Yvi } from "./tab-activation-history.js";
import { Md1, qbp } from "./tab-active-selection-model.js";
import { Xvi } from "./tab-system-helpers.js";
import { E } from "./tslib.es6.js";
var Kbp, Ybp, N0e, Dxa;
export { Dxa, Kbp, N0e, Ybp };
var __wakaru_Xbp_initialized = false;
export function Xbp() {
if (__wakaru_Xbp_initialized) return;
__wakaru_Xbp_initialized = true;
"use strict";
E(), Rxa(), Md1(), Xvi(), Kbp = Object.defineProperty, Ybp = (t, e, n)=>e in t ? Kbp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, N0e = (t, e, n)=>Ybp(t, typeof e != "symbol" ? e + "" : e, n), Dxa = class {
    constructor(t){
        N0e(this, "_tabs", []), N0e(this, "_stableTabs", new Map), N0e(this, "_activeTabId", null), N0e(this, "_activeSelection", new qbp), N0e(this, "_activationHistory", new Yvi), N0e(this, "_lastActiveTime"), N0e(this, "_focusHandlers", new Map), N0e(this, "_pendingFocusWhenReadyTabId", null), N0e(this, "id"), N0e(this, "name"), N0e(this, "_bridge"), N0e(this, "_emit", (e, n)=>{
            this._bridge.emit(e, n);
        }), this.id = t.id, this.name = t.name, this._bridge = t.bridge, this._lastActiveTime = Date.now();
    }
    get tabs() {
        return this._tabs;
    }
    get stableTabs() {
        return this._stableTabs;
    }
    get availableStableTabsCount() {
        let t = 0;
        for (const e of this._stableTabs.values())e.registered && t++;
        return t;
    }
    get availableTabsCount() {
        return this._tabs.length + this.availableStableTabsCount;
    }
    get activeTabId() {
        return this._activeTabId;
    }
    get activeSelectionScope() {
        return this._activeSelection.activeScope;
    }
    get lastActiveTime() {
        return this._lastActiveTime;
    }
    isTabEligibleForActiveSelection(t) {
        return this._activeSelection.isTabEligible(t.id, this._tabs);
    }
    findPreviousActiveTabId(t) {
        return this._activationHistory.findPreviousTab(this._tabs, this._stableTabs.values(), {
            excludedTabIds: t.excludedTabIds,
            isTabEligible: (e)=>t.isTabVisible(e) && this.isTabEligibleForActiveSelection(e)
        });
    }
    _setActiveTabId(t, e = !1) {
        if (this._activeTabId === t) return;
        const n = this._activeTabId !== null && this.getTab(this._activeTabId) ? this._activeTabId : null;
        this._activationHistory.record({
            previousTabId: n,
            nextTabId: t
        }), this._activeTabId = t, this._lastActiveTime = Date.now(), t !== null && this._updateTabField({
            tabId: t,
            field: "lastActiveTime",
            value: this._lastActiveTime
        }), this._emit("activeTabIdChanged", {
            groupId: this.id,
            tabId: t,
            ...e && {
                isScopeReselection: e
            }
        });
    }
    _updateTabField({ tabId: t, field: e, value: n }) {
        const i = this.getTab(t);
        if (!i || i[e] === n) return !1;
        if (this._stableTabs.has(t)) {
            const r = new Map(this._stableTabs);
            r.set(t, {
                ...this._stableTabs.get(t),
                [e]: n
            }), this._stableTabs = r;
        } else this._tabs = this._tabs.map((r)=>r.id === t ? {
                ...r,
                [e]: n
            } : r);
        return !0;
    }
    _resolveNextActiveTabId({ tabs: t, index: e }) {
        const n = Math.min(e - 1, t.length - 1);
        if (n >= 0) return t[n].id;
        const i = Math.max(e, 0);
        if (i < t.length) return t[i].id;
        const r = this._findLastActiveAvailableTabId();
        return r || (Array.from(this._stableTabs.values()).find((o)=>o.registered)?.id ?? null);
    }
    _findLastActiveAvailableTabId() {
        let t = null, e = Number.NEGATIVE_INFINITY;
        for (const n of this._tabs){
            const i = n.lastActiveTime;
            typeof i != "number" || !Number.isFinite(i) || i > e && (e = i, t = n.id);
        }
        for (const n of this._stableTabs.values()){
            if (!n.registered) continue;
            const i = n.lastActiveTime;
            typeof i != "number" || !Number.isFinite(i) || i > e && (e = i, t = n.id);
        }
        return t;
    }
    _upsert(t) {
        if (!this._bridge.isValidKind(t.kind)) return console.warn(`[TabSystem] Ignoring tab with unknown kind: ${t.kind}. This may happen after a code update that renamed or removed tab types.`), null;
        let e;
        return t.type === "stable" ? e = this._upsertStable(t) : e = this._upsertRegular(t), e && t.activate && this._activeSelection.isTabEligible(t.tabId, this._tabs) && this._setActiveTabId(t.tabId), e ? t.tabId : null;
    }
    _upsertRegular({ tabId: t, kind: e, props: n, label: i, labelSecondary: r, closable: s, dirty: o, lastActiveTime: a, targetIndex: l }) {
        if (this._stableTabs.has(t)) return !1;
        const c = this._tabs.findIndex((p)=>p.id === t), u = c !== -1 ? this._tabs[c] : void 0, d = {
            ...u,
            id: t,
            kind: e,
            props: n,
            closable: s ?? u?.closable ?? !0,
            label: i ?? u?.label,
            labelSecondary: r ?? u?.labelSecondary,
            dirty: o ?? u?.dirty,
            lastActiveTime: a ?? u?.lastActiveTime
        }, h = [
            ...this._tabs
        ];
        if (c !== -1) h[c] = d, this._tabs = h, this._emit("tabPropsChanged", {
            groupId: this.id,
            tabId: t
        });
        else {
            let p = l ?? h.length;
            (p < 0 || p > h.length) && (p = h.length), p = Math.max(p, BUr(h)), h.splice(p, 0, d), this._tabs = h, this._emit("tabPushed", {
                groupId: this.id,
                tabId: t
            });
        }
        return !0;
    }
    _upsertStable({ tabId: t, kind: e, props: n, label: i, labelSecondary: r, closable: s, dirty: o, lastActiveTime: a, registration: l }) {
        this._tabs.some((d)=>d.id === t) && this._drop({
            tabIds: [
                t
            ],
            force: !0
        });
        const c = this._stableTabs.get(t), u = new Map(this._stableTabs);
        if (c) {
            if (e !== c.kind) return console.warn(`[TabSystem] Ignoring stable tab with different kind: ${e} !== ${c.kind}. This may happen after a code update that renamed or removed tab types.`), !1;
            switch(l){
                case "register":
                    u.set(t, {
                        ...c,
                        registered: !0
                    }), this._stableTabs = u, this._emit("stableTabRegistered", {
                        groupId: this.id,
                        tabId: t
                    });
                    break;
                case "unregister":
                    u.delete(t), this._stableTabs = u, this._emit("stableTabUnregistered", {
                        groupId: this.id,
                        tabId: t
                    });
                    break;
                default:
                    u.set(t, {
                        ...c,
                        props: n ?? c.props,
                        label: i ?? c.label,
                        labelSecondary: r ?? c.labelSecondary,
                        closable: s ?? c.closable,
                        dirty: o ?? c.dirty,
                        lastActiveTime: a ?? c.lastActiveTime
                    }), this._stableTabs = u, this._emit("tabPropsChanged", {
                        groupId: this.id,
                        tabId: t
                    });
                    break;
            }
        } else {
            if (l === "unregister") return !1;
            u.set(t, {
                id: t,
                kind: e,
                props: n,
                label: i,
                labelSecondary: r,
                closable: s ?? !1,
                dirty: o,
                lastActiveTime: a,
                registered: l === "register"
            }), this._stableTabs = u, l === "register" && this._emit("stableTabRegistered", {
                groupId: this.id,
                tabId: t
            });
        }
        return !0;
    }
    push({ kind: t, props: e, tabId: n, label: i, labelSecondary: r, closable: s = !0, activate: o = !0, targetIndex: a }) {
        return this._upsert({
            type: "tab",
            tabId: n ?? zbp(t),
            kind: t,
            props: e,
            label: i,
            labelSecondary: r,
            closable: s,
            activate: o,
            targetIndex: a
        });
    }
    restore(t) {
        this._upsert({
            type: "tab",
            tabId: t.id,
            kind: t.kind,
            props: t.props,
            label: t.label,
            labelSecondary: t.labelSecondary,
            closable: t.closable,
            dirty: t.dirty,
            lastActiveTime: t.lastActiveTime,
            activate: !1
        }), t.iconUrl && this.setIconUrl({
            tabId: t.id,
            iconUrl: t.iconUrl
        });
    }
    close(t, e) {
        this._drop({
            tabIds: [
                t
            ],
            force: e?.force ?? !1,
            nextActiveTabId: e?.nextActiveTabId
        });
    }
    closeTabs(t, e) {
        this._drop({
            tabIds: t,
            force: e?.force,
            nextActiveTabId: e?.nextActiveTabId
        });
    }
    closeOthers(t) {
        const e = this._tabs.filter((n)=>n.id !== t).map((n)=>n.id);
        this._drop({
            tabIds: e
        });
    }
    closeToRight(t) {
        const e = this._tabs.findIndex((i)=>i.id === t);
        if (e === -1) return;
        const n = this._tabs.slice(e + 1).map((i)=>i.id);
        this._drop({
            tabIds: n
        });
    }
    closeAll() {
        this._drop({
            tabIds: this._tabs.map((t)=>t.id)
        });
    }
    replace({ tabId: t, kind: e, props: n }) {
        const i = this._stableTabs.has(t) ? "stable" : "tab";
        this._upsert({
            type: i,
            tabId: t,
            kind: e,
            props: n
        });
    }
    registerStableTab({ tabId: t, kind: e, initialProps: n }) {
        this._upsert({
            type: "stable",
            tabId: t,
            kind: e,
            props: n,
            registration: "register"
        });
    }
    restoreStableTab(t) {
        this._upsert({
            type: "stable",
            tabId: t.id,
            kind: t.kind,
            props: t.props,
            label: t.label,
            labelSecondary: t.labelSecondary,
            dirty: t.dirty,
            closable: t.closable,
            lastActiveTime: t.lastActiveTime,
            activate: !1
        }), t.iconUrl && this.setIconUrl({
            tabId: t.id,
            iconUrl: t.iconUrl
        });
    }
    unregisterStableTab(t) {
        const e = this._stableTabs.get(t);
        if (!e) return;
        const n = this.activeSelectionScope;
        if (n) {
            const i = new Map(this._stableTabs);
            i.delete(t), this._stableTabs = i, this._activeTabId === t && n.fallbackTabId !== t && this._setActiveTabId(this._activeSelection.resolveActiveTabId(this._tabs)), this._activationHistory.delete(t), this._emit("stableTabUnregistered", {
                groupId: this.id,
                tabId: t
            });
            return;
        }
        this._upsert({
            type: "stable",
            tabId: t,
            kind: e.kind,
            props: e.props,
            registration: "unregister"
        }), this._activeTabId === t && this._ensureActiveTab(), this._activationHistory.delete(t);
    }
    setActiveSelectionScope(t, e) {
        this._activeSelection.set(t, e), this._activeSelection.isActiveTabEligible(this._activeTabId, this._tabs) || this._setActiveTabId(this._activeSelection.resolveActiveTabId(this._tabs), !0);
    }
    clearActiveSelectionScope(t) {
        if (this._activeSelection.clear(t)) {
            if (this.activeSelectionScope) {
                this._activeSelection.isActiveTabEligible(this._activeTabId, this._tabs) || this._setActiveTabId(this._activeSelection.resolveActiveTabId(this._tabs), !0);
                return;
            }
            this._activeTabId !== null && this.ensureActiveTab();
        }
    }
    _ensureActiveTab() {
        const t = this._findLastActiveAvailableTabId();
        this._setActiveTabId(t ?? this._resolveNextActiveTabId({
            tabs: this._tabs,
            index: 0
        }));
    }
    ensureActiveTab() {
        if (this.activeSelectionScope) {
            this._activeSelection.isActiveTabEligible(this._activeTabId, this._tabs) || this._setActiveTabId(this._activeSelection.resolveActiveTabId(this._tabs));
            return;
        }
        let t;
        this._activeTabId ? t = !(this._stableTabs.get(this._activeTabId)?.registered ?? this._tabs.some((e)=>e.id === this._activeTabId)) : t = !0, t && this._ensureActiveTab();
    }
    _drop({ tabIds: t, force: e, nextActiveTabId: n, isTransfer: i }) {
        const r = new Set(t), s = [], o = this._activeTabId, a = o !== null && this._stableTabs.has(o), l = this._tabs.findIndex((d)=>d.id === o), c = this._tabs.filter((d)=>!r.has(d.id) || !e && (d.closable === !1 || d.pinned) ? !0 : (s.push(d), !1)), u = new Map(this._stableTabs);
        for (const d of r){
            const h = this._stableTabs.get(d);
            h && (!e && h.closable === !1 || (u.delete(d), s.push(h)));
        }
        if (this._tabs = c, this._stableTabs = u, o && r.has(o) && !c.some((h)=>h.id === o) && !u.has(o)) {
            let h = n;
            h === void 0 && (h = this.findPreviousActiveTabId({
                excludedTabIds: new Set(s.map((p)=>p.id)),
                isTabVisible: ()=>!0
            })), h === void 0 && (h = this.activeSelectionScope === void 0 ? this._resolveNextActiveTabId({
                tabs: this._tabs,
                index: l
            }) : this._activeSelection.resolveActiveTabId(this._tabs, {
                removedActiveTabId: o,
                disallowFallbackTabId: a ? o : void 0
            })), this._setActiveTabId(h);
        }
        for (const d of s)this._activationHistory.delete(d.id);
        for (const d of s)this._emit("tabClosed", {
            groupId: this.id,
            tabId: d.id,
            kind: d.kind,
            props: d.props,
            isTransfer: i
        });
    }
    getTab(t) {
        return this._tabs.find((e)=>e.id === t) ?? this._stableTabs.get(t);
    }
    hasTab(t) {
        return this.getTab(t) !== void 0;
    }
    setActive({ tabId: t, force: e }) {
        return !e && !this.getTab(t) || !this._activeSelection.isTabEligible(t, this._tabs) ? !1 : (this._setActiveTabId(t), !0);
    }
    setDirty({ tabId: t, dirty: e }) {
        this._updateTabField({
            tabId: t,
            field: "dirty",
            value: e
        }) && this._emit("tabDirtyChanged", {
            groupId: this.id,
            tabId: t,
            dirty: e
        });
    }
    setPinned({ tabId: t, pinned: e }) {
        const n = this._tabs.findIndex((o)=>o.id === t);
        if (n === -1) return;
        const i = this._tabs[n];
        if ((i.pinned ?? !1) === e) return;
        const r = this._tabs.filter((o)=>o.id !== t), s = BUr(r);
        r.splice(s, 0, {
            ...i,
            pinned: e
        }), this._tabs = r, this._emit("tabPropsChanged", {
            groupId: this.id,
            tabId: t
        }), n !== s && this._emit("tabMoved", {
            groupId: this.id,
            tabId: t,
            fromIndex: n,
            toIndex: s
        });
    }
    setLabel(t) {
        const { tabId: e, label: n } = t, i = this.getTab(e);
        if (!i) return;
        const r = "labelSecondary" in t ? t.labelSecondary : i.labelSecondary, s = typeof r == "string" && r.length > 0 ? r : void 0;
        if (!(i.label === n && i.labelSecondary === s)) {
            if (this._stableTabs.has(e)) {
                const o = new Map(this._stableTabs);
                o.set(e, {
                    ...this._stableTabs.get(e),
                    label: n,
                    labelSecondary: s
                }), this._stableTabs = o;
            } else this._tabs = this._tabs.map((o)=>o.id === e ? {
                    ...o,
                    label: n,
                    labelSecondary: s
                } : o);
            this._emit("tabLabelChanged", {
                groupId: this.id,
                tabId: e,
                label: n,
                labelSecondary: s
            });
        }
    }
    setIconUrl({ tabId: t, iconUrl: e }) {
        this._updateTabField({
            tabId: t,
            field: "iconUrl",
            value: e
        }) && this._emit("tabIconUrlChanged", {
            groupId: this.id,
            tabId: t,
            iconUrl: e
        });
    }
    moveTab({ tabId: t, newIndex: e }) {
        const n = this._tabs.findIndex((c)=>c.id === t);
        if (n === -1 || typeof e != "number" || !Number.isFinite(e) || e < 0 || n === e) return;
        const i = BUr(this._tabs), [r, s] = this._tabs[n].pinned ? [
            0,
            i - 1
        ] : [
            i,
            this._tabs.length - 1
        ], o = Math.max(r, Math.min(e, s));
        if (n === o) return;
        const a = [
            ...this._tabs
        ], [l] = a.splice(n, 1);
        a.splice(o, 0, l), this._tabs = a, this._emit("tabMoved", {
            groupId: this.id,
            tabId: t,
            fromIndex: n,
            toIndex: o
        });
    }
    touch() {
        this._lastActiveTime = Date.now();
    }
    registerFocusHandler(t, e) {
        return this._focusHandlers.set(t, e), this._pendingFocusWhenReadyTabId === t && (this._pendingFocusWhenReadyTabId = null, this._activeTabId === t && e()), ()=>{
            this._focusHandlers.get(t) === e && this._focusHandlers.delete(t);
        };
    }
    focusTab(t) {
        const e = this._focusHandlers.get(t);
        return e ? (e(), !0) : !1;
    }
    focusTabWhenReady(t) {
        return this.focusTab(t) ? !0 : (this.getTab(t) && (this._pendingFocusWhenReadyTabId = t), !1);
    }
    findLastActiveTabIdForKind(t, e) {
        let n, i = -1;
        for (const r of this.findTabsByKind(t, e)){
            const s = r.instance.lastActiveTime ?? 0;
            s > i && (i = s, n = r.instance.id);
        }
        return n;
    }
    findTabsByKind(t, e) {
        const n = e?.includeUnregisteredStable ?? !1, i = [];
        for (const r of this._stableTabs.values())r.kind === t && (n || r.registered) && i.push({
            type: "stable",
            instance: r
        });
        for (const r of this._tabs)r.kind === t && i.push({
            type: "tab",
            instance: r
        });
        return i;
    }
};

}
