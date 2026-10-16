import { Eav, kJw } from "./glass-user-tab-manager.js";
import { E } from "./tslib.es6.js";
var JGl, Iav;
export { Iav, JGl };
var __wakaru_xav_initialized = false;
export function xav() {
if (__wakaru_xav_initialized) return;
__wakaru_xav_initialized = true;
"use strict";
E(), kJw(), JGl = class extends Eav {
    constructor(){
        super(...arguments), this._closeDepth = 0, this._transferDepth = 0;
    }
    get isClosingTabs() {
        return this._closeDepth > 0;
    }
    get isTransferringTabs() {
        return this._transferDepth > 0;
    }
    findGroupIdForTab(t) {
        for (const [e, n] of this.groups)if (n.hasTab(t)) return e;
    }
    getAllTabs() {
        const t = [];
        for (const e of this.groups.values())t.push(...e.tabs);
        return t;
    }
    findAllTabsByKind(t, e) {
        const n = [];
        for (const i of this.groups.keys())n.push(...this.findTabsByKind(i, t, e));
        return n;
    }
    _resolveTarget(t) {
        if (this.getGroup(t.groupId)?.hasTab(t.tabId)) return t;
        const e = this.findGroupIdForTab(t.tabId);
        return e === void 0 || e === t.groupId ? t : {
            ...t,
            groupId: e
        };
    }
    getTab({ groupId: t, tabId: e }) {
        return super.getTab(this._resolveTarget({
            groupId: t,
            tabId: e
        }));
    }
    hasTab({ groupId: t, tabId: e }) {
        return super.hasTab(this._resolveTarget({
            groupId: t,
            tabId: e
        }));
    }
    setActive(t) {
        return super.setActive(this._resolveTarget(t));
    }
    close(t) {
        this._whileClosing(()=>super.close(this._resolveTarget(t)));
    }
    closeTabs({ groupId: t, tabIds: e, force: n, nextActiveTabId: i, resolveNextActiveTabId: r }) {
        this._whileClosing(()=>{
            const s = new Map;
            for (const o of e){
                const a = this._resolveTarget({
                    groupId: t,
                    tabId: o
                }), l = s.get(a.groupId);
                l ? l.push(o) : s.set(a.groupId, [
                    o
                ]);
            }
            for (const [o, a] of s){
                const l = r ? r({
                    groupId: o,
                    tabIds: a
                }) : i, c = l == null || (this.getGroup(o)?.hasTab(l) ?? !1);
                super.closeTabs({
                    groupId: o,
                    tabIds: a,
                    force: n,
                    nextActiveTabId: c ? l : void 0
                });
            }
        });
    }
    closeOthers(t) {
        this._whileClosing(()=>super.closeOthers(this._resolveTarget(t)));
    }
    closeToRight(t) {
        this._whileClosing(()=>super.closeToRight(this._resolveTarget(t)));
    }
    closeAll(t) {
        this._whileClosing(()=>super.closeAll(t));
    }
    _whileClosing(t) {
        this._closeDepth++;
        try {
            t();
        } finally{
            this._closeDepth--;
        }
    }
    transferTab(t) {
        this._transferDepth++;
        try {
            super.transferTab(t);
        } finally{
            this._transferDepth--;
        }
    }
    push(t) {
        if (t.tabId !== void 0) {
            const { groupId: e } = this._resolveTarget({
                groupId: t.groupId,
                tabId: t.tabId
            });
            return super.push({
                ...t,
                groupId: e
            });
        }
        return super.push(t);
    }
    restore(t) {
        const { groupId: e } = this._resolveTarget({
            groupId: t.groupId,
            tabId: t.id
        });
        super.restore({
            ...t,
            groupId: e
        });
    }
    replace(t) {
        super.replace(this._resolveTarget(t));
    }
    setLabel(t) {
        super.setLabel(this._resolveTarget(t));
    }
    setIconUrl(t) {
        super.setIconUrl(this._resolveTarget(t));
    }
    setDirty(t) {
        super.setDirty(this._resolveTarget(t));
    }
    setPinned(t) {
        super.setPinned(this._resolveTarget(t));
    }
    moveTab(t) {
        super.moveTab(this._resolveTarget(t));
    }
    focusTab(t) {
        return super.focusTab(this._resolveTarget(t));
    }
    focusTabWhenReady(t) {
        return super.focusTabWhenReady(this._resolveTarget(t));
    }
    registerFocusHandler(t, e) {
        return super.registerFocusHandler(this._resolveTarget(t), e);
    }
    registerStableTab(t) {
        super.registerStableTab(this._resolveTarget(t));
    }
}, Iav = class extends JGl {
};

}
