import { Rke } from "./dockAgentRows.js";
import { h } from "./tslib.es6.js";
var Nke, Dke, Oke, F9, Lke, Uke, xke;
export { Dke, F9, Lke, Nke, Oke, Uke, xke };
var __wakaru_vE_initialized = false;
export function vE() {
if (__wakaru_vE_initialized) return;
__wakaru_vE_initialized = true;
"use strict";
h(), Rke(), Nke = 2, Dke = 5, Oke = 3e5, F9 = 6e4, Lke = class {
    constructor(){
        this.state = {
            kind: "pending"
        };
    }
    updateIdentity(e) {
        const t = e === null ? {
            kind: "rejecting"
        } : {
            kind: "accepting",
            identity: e
        }, n = this.state.kind !== t.kind || this.state.kind === "accepting" && t.kind === "accepting" && this.state.identity !== t.identity;
        return this.state = t, n;
    }
    accepts(e) {
        return this.state.kind === "accepting" && this.state.identity === e;
    }
    isPending() {
        return this.state.kind === "pending";
    }
}, Uke = class {
    constructor(){
        this.liveByWindow = new Map, this.retainedByProducer = new Map;
    }
    update(e, t) {
        const n = this.liveByWindow.get(e);
        if (n && t.revision < n.revision) return;
        n && n.producerId !== t.producerId && ![
            ...this.liveByWindow.entries()
        ].some(([s, i])=>s !== e && i.producerId === n.producerId) && this.retain(n);
        const r = this.retainedByProducer.get(t.producerId);
        (!r || t.revision >= r.revision) && this.retainedByProducer.delete(t.producerId), this.liveByWindow.delete(e), this.liveByWindow.set(e, t);
    }
    removeWindow(e) {
        const t = this.liveByWindow.get(e);
        return !t || !this.liveByWindow.delete(e) ? !1 : (this.retain(t), !0);
    }
    retain(e) {
        const t = this.retainedByProducer.get(e.producerId);
        (!t || e.revision >= t.revision) && this.retainedByProducer.set(e.producerId, e);
    }
    clearNotifications() {
        let e = !1;
        const t = (n)=>{
            for (const [r, s] of n){
                const i = s.notificationStates.some((o)=>o.hasNotification), a = s.sections.some((o)=>o.items.some((l)=>l.hasNotification || l.statusIcon === "unread"));
                !i && !a || (n.set(r, {
                    ...s,
                    revision: s.revision + 1,
                    sections: s.sections.map((o)=>({
                            ...o,
                            items: o.items.map((l)=>l.hasNotification || l.statusIcon === "unread" ? {
                                    ...l,
                                    hasNotification: !1,
                                    statusIcon: l.statusIcon === "unread" ? "seen" : l.statusIcon
                                } : l)
                        })),
                    notificationStates: s.notificationStates.map((o)=>o.hasNotification ? {
                            ...o,
                            hasNotification: !1
                        } : o)
                }), e = !0);
            }
        };
        return t(this.liveByWindow), t(this.retainedByProducer), e;
    }
    reconcileWindows(e) {
        let t = !1;
        for (const n of [
            ...this.liveByWindow.keys()
        ])e.has(n) || (t = this.removeWindow(n) || t);
        return t;
    }
    hasWindow(e) {
        return this.liveByWindow.has(e);
    }
    records() {
        const e = new Set([
            ...this.liveByWindow.values()
        ].map((t)=>t.producerId));
        return [
            ...[
                ...this.retainedByProducer.values()
            ].filter((t)=>!e.has(t.producerId)).map((t)=>({
                    contribution: t
                })),
            ...[
                ...this.liveByWindow.entries()
            ].map(([t, n])=>({
                    contribution: n,
                    ownerWindowId: t
                }))
        ];
    }
    clear() {
        this.liveByWindow.clear(), this.retainedByProducer.clear();
    }
}, xke = {
    activeIntervalMs: 15e3,
    idleIntervalMs: 6e4,
    emptyIntervalMs: 3e5,
    engagementThrottleMs: 5e3,
    menuCap: 25,
    enablePoll: !0,
    enableEngagement: !0,
    enablePower: !0
};

}
