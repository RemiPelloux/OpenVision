import { zbp } from "./ipa.js";
import { Dxa, Xbp } from "./tab-group-manager.js";
import { Xvi } from "./tab-system-helpers.js";
import { E } from "./tslib.es6.js";
var Lyp, Oyp, cHt, XUr;
export { Lyp, Oyp, XUr, cHt };
var __wakaru_Fyp_initialized = false;
export function Fyp() {
if (__wakaru_Fyp_initialized) return;
__wakaru_Fyp_initialized = true;
"use strict";
E(), Xbp(), Xvi(), Lyp = Object.defineProperty, Oyp = (t, e, n)=>e in t ? Lyp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, cHt = (t, e, n)=>Oyp(t, typeof e != "symbol" ? e + "" : e, n), XUr = class {
    constructor(t){
        this.defs = t, cHt(this, "_groups", new Map), cHt(this, "_groupOrder", []), cHt(this, "_listeners", new Set), cHt(this, "_bridge"), cHt(this, "subscribe", (e, n)=>{
            const i = (r)=>{
                r.type === e && n(r.payload);
            };
            return this._listeners.add(i), ()=>{
                this._listeners.delete(i);
            };
        }), cHt(this, "subscribeAll", (e)=>(this._listeners.add(e), ()=>{
                this._listeners.delete(e);
            })), this._bridge = {
            emit: (e, n)=>this._notify(e, n),
            isValidKind: (e)=>e in this.defs
        };
    }
    get definitions() {
        return this.defs;
    }
    get groups() {
        return this._groups;
    }
    registerGroup(t) {
        const e = t.groupId ?? zbp("group");
        if (this._groups.has(e)) return e;
        const n = new Dxa({
            id: e,
            name: t.name,
            bridge: this._bridge
        });
        return this._groups.set(e, n), this._groupOrder.push(e), this._notify("groupRegistered", {
            groupId: e,
            name: t.name
        }), e;
    }
    unregisterGroup(t) {
        this._groups.delete(t), this._groupOrder = this._groupOrder.filter((e)=>e !== t), this._notify("groupUnregistered", {
            groupId: t
        });
    }
    getGroup(t) {
        return this._groups.get(t);
    }
    getGroupsByName(t) {
        return Array.from(this._groups.values()).filter((e)=>e.name === t);
    }
    resolveGroupByName(t, e = "mostRecentActive") {
        const n = this.getGroupsByName(t);
        if (n.length !== 0) {
            if (n.length === 1) return n[0];
            switch(e){
                case "mostRecentActive":
                    return n.reduce((i, r)=>r.lastActiveTime > i.lastActiveTime ? r : i);
                case "first":
                    for (const i of this._groupOrder){
                        const r = n.find((s)=>s.id === i);
                        if (r) return r;
                    }
                    return n[0];
                case "last":
                    for(let i = this._groupOrder.length - 1; i >= 0; i--){
                        const r = n.find((s)=>s.id === this._groupOrder[i]);
                        if (r) return r;
                    }
                    return n[n.length - 1];
                default:
                    return e;
            }
        }
    }
    push({ groupId: t, ...e }) {
        const n = this.getGroup(t);
        return n ? n.push(e) : (console.warn(`[TabSystem] Group not found: ${t}`), null);
    }
    pushByGroupName({ groupName: t, kind: e, props: n, strategy: i = "mostRecentActive", ...r }) {
        const s = this.resolveGroupByName(t, i);
        return s ? s.push({
            kind: e,
            props: n,
            ...r
        }) : (console.warn(`[TabSystem] No group found with name: ${t}`), null);
    }
    restore(t) {
        const e = this.getGroup(t.groupId);
        if (!e) {
            console.warn(`[TabSystem] Group not found: ${t.groupId}`);
            return;
        }
        e.restore(t);
    }
    close({ groupId: t, tabId: e, force: n, nextActiveTabId: i }) {
        this.getGroup(t)?.close(e, {
            force: n,
            nextActiveTabId: i
        });
    }
    closeTabs({ groupId: t, tabIds: e, force: n, nextActiveTabId: i }) {
        this.getGroup(t)?.closeTabs(e, {
            force: n,
            nextActiveTabId: i
        });
    }
    closeOthers({ groupId: t, tabId: e }) {
        this.getGroup(t)?.closeOthers(e);
    }
    closeToRight({ groupId: t, tabId: e }) {
        this.getGroup(t)?.closeToRight(e);
    }
    closeAll(t) {
        this.getGroup(t)?.closeAll();
    }
    setActive({ groupId: t, tabId: e, force: n }) {
        return this.getGroup(t)?.setActive({
            tabId: e,
            force: n
        }) ?? !1;
    }
    setDirty({ groupId: t, ...e }) {
        this.getGroup(t)?.setDirty(e);
    }
    setPinned({ groupId: t, ...e }) {
        this.getGroup(t)?.setPinned(e);
    }
    setLabel({ groupId: t, ...e }) {
        this.getGroup(t)?.setLabel(e);
    }
    setIconUrl({ groupId: t, ...e }) {
        this.getGroup(t)?.setIconUrl(e);
    }
    replace({ groupId: t, ...e }) {
        this.getGroup(t)?.replace(e);
    }
    getTab({ groupId: t, tabId: e }) {
        return this.getGroup(t)?.getTab(e);
    }
    hasTab({ groupId: t, tabId: e }) {
        return this.getGroup(t)?.hasTab(e) ?? !1;
    }
    findTabsByKind(t, e, n) {
        return this.getGroup(t)?.findTabsByKind(e, n) ?? [];
    }
    touchGroup(t) {
        this.getGroup(t)?.touch();
    }
    registerStableTab({ groupId: t, ...e }) {
        const n = this.getGroup(t);
        if (!n) {
            console.warn(`[TabSystem] Group not found: ${t}`);
            return;
        }
        n.registerStableTab(e);
    }
    unregisterStableTab({ groupId: t, tabId: e }) {
        this.getGroup(t)?.unregisterStableTab(e);
    }
    restoreStableTab(t) {
        const e = this.getGroup(t.groupId);
        if (!e) {
            console.warn(`[TabSystem] Group not found: ${t.groupId}`);
            return;
        }
        e.restoreStableTab(t);
    }
    moveTab({ groupId: t, ...e }) {
        const n = this.getGroup(t);
        if (!n) {
            console.warn(`[TabSystem] moveTab: Group not found: ${t}`);
            return;
        }
        n.moveTab(e);
    }
    transferTab({ sourceGroupId: t, targetGroupId: e, tabId: n, targetIndex: i, activate: r = !0 }) {
        if (t === e) {
            const c = this.getGroup(t);
            if (!c || c.tabs.findIndex((h)=>h.id === n) === -1) return;
            const d = i ?? c.tabs.length - 1;
            this.moveTab({
                groupId: t,
                tabId: n,
                newIndex: d
            });
            return;
        }
        const s = this.getGroup(t);
        if (!s) return;
        const o = s.getTab(n);
        if (!o || !this.canAcceptKind(e, o.kind)) return;
        const a = this.getGroup(e);
        if (!a) return;
        s._drop({
            tabIds: [
                n
            ],
            force: !0,
            isTransfer: !0
        }), a._upsert({
            type: "tab",
            tabId: o.id,
            kind: o.kind,
            props: o.props,
            label: o.label,
            labelSecondary: o.labelSecondary,
            closable: o.closable,
            dirty: o.dirty,
            lastActiveTime: o.lastActiveTime,
            activate: r,
            targetIndex: i
        }), o.iconUrl && a.setIconUrl({
            tabId: o.id,
            iconUrl: o.iconUrl
        });
        const l = a.tabs.findIndex((c)=>c.id === n);
        this._notify("tabTransferred", {
            sourceGroupId: t,
            targetGroupId: e,
            tabId: n,
            targetIndex: l !== -1 ? l : a.tabs.length - 1
        });
    }
    registerFocusHandler({ groupId: t, tabId: e }, n) {
        const i = this.getGroup(t);
        return i ? i.registerFocusHandler(e, n) : ()=>{};
    }
    focusTab({ groupId: t, tabId: e }) {
        return this.getGroup(t)?.focusTab(e) ?? !1;
    }
    focusTabWhenReady({ groupId: t, tabId: e }) {
        return this.getGroup(t)?.focusTabWhenReady(e) ?? !1;
    }
    canAcceptKind(t, e) {
        return !0;
    }
    _notify(t, e) {
        for (const n of Array.from(this._listeners))n({
            type: t,
            payload: e
        });
    }
};

}
