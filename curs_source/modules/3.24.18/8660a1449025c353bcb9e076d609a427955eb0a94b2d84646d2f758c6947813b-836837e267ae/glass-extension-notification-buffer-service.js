import { Anc } from "./BPv.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var wMv, rMs, CMv;
export { CMv, rMs, wMv };
var __wakaru_TMv_initialized = false;
export function TMv() {
if (__wakaru_TMv_initialized) return;
__wakaru_TMv_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), wMv = 100, rMs = Il("glassExtensionNotificationBufferService"), CMv = class extends st {
    constructor(){
        super(...arguments), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._notifications = [];
    }
    get count() {
        return this._notifications.length;
    }
    get notifications() {
        return this._notifications;
    }
    upsert(t, e) {
        const n = this._notifications.findIndex((i)=>Anc(i, e));
        if (n !== -1) {
            const i = this._notifications[n], r = [
                ...this._notifications
            ];
            r[n] = {
                toastKey: e.toastKey,
                workspaceId: e.workspaceId,
                severity: t.severity,
                message: t.message,
                sourceLabel: t.source ?? "",
                sourceId: t.sourceId ?? "",
                actions: t.actions,
                close: ()=>t.close(),
                timestamp: i.timestamp
            }, this._notifications = r;
        } else {
            const i = {
                toastKey: e.toastKey,
                workspaceId: e.workspaceId,
                severity: t.severity,
                message: t.message,
                sourceLabel: t.source ?? "",
                sourceId: t.sourceId ?? "",
                actions: t.actions,
                close: ()=>t.close(),
                timestamp: Date.now()
            };
            if (this._notifications.length >= wMv) {
                let r = 0;
                for(let o = 1; o < this._notifications.length; o++)this._notifications[o].timestamp < this._notifications[r].timestamp && (r = o);
                const s = [
                    ...this._notifications
                ];
                s.splice(r, 1), s.push(i), this._notifications = s;
            } else this._notifications = [
                ...this._notifications,
                i
            ];
        }
        this._onDidChange.fire();
    }
    evict(t) {
        const e = this._notifications.findIndex((i)=>Anc(i, t));
        if (e === -1) return;
        const n = [
            ...this._notifications
        ];
        n.splice(e, 1), this._notifications = n, this._onDidChange.fire();
    }
    evictWorkspace(t) {
        const e = this._notifications.filter((n)=>n.workspaceId !== t);
        e.length !== this._notifications.length && (this._notifications = e, this._onDidChange.fire());
    }
    dismiss(t) {
        const e = this._notifications.findIndex((r)=>Anc(r, t));
        if (e === -1) return;
        const n = this._notifications[e], i = [
            ...this._notifications
        ];
        i.splice(e, 1), this._notifications = i, this._onDidChange.fire(), n.close?.();
    }
    dismissAll() {
        const t = this._notifications;
        this._notifications = [], this._onDidChange.fire();
        for (const e of t)e.close?.();
    }
}, bn(rMs, CMv, 0, 1);

}
