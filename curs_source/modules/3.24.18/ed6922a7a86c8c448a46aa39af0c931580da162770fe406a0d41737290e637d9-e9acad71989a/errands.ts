import { x } from "./tslib.es6.js";
var XUh;
export { XUh };
var __wakaru_ym__initialized = false;
export function ym_() {
if (__wakaru_ym__initialized) return;
__wakaru_ym__initialized = true;
"use strict";
x(), XUh = class {
    sent = [];
    record(e, t) {
        const n = {
            request: e,
            watched: t,
            resolved: !1,
            told: !1,
            landed: [],
            parkRefusalSaid: !1,
            dropped: !1
        };
        return t && this.sent.push(n), n;
    }
    owed() {
        return this.sent.findLast((e)=>!e.resolved);
    }
    earlierOpen(e) {
        const t = this.sent.findIndex((n)=>n === e);
        return t < 0 ? void 0 : this.sent.slice(0, t).findLast((n)=>!n.resolved);
    }
    untoldLines() {
        for(let e = this.sent.length - 1; e >= 0; e--){
            const t = this.sent[e];
            if (t === void 0 || t.told || !t.resolved) continue;
            const n = t.landed.map((i)=>i.trim()).filter((i)=>i !== "");
            if (n.length > 0) return n;
        }
    }
    openErrand(e) {
        const t = e.trim(), n = this.sent.filter((i)=>!i.told && i.request.trim() === t);
        if (n.length !== 0) return n.some((i)=>!i.resolved) ? {
            stands: "under way"
        } : {
            stands: "about to be said",
            landed: n.at(-1)?.landed ?? []
        };
    }
    resultsWereSaid() {
        for (const e of this.sent)e.resolved && (e.told = !0);
    }
    parkRefusedARepeat(e) {
        const t = e.trim();
        for (const n of this.sent)!n.resolved && n.request.trim() === t && (n.parkRefusalSaid = !0);
    }
    parkedAgain() {
        for (const e of this.sent)e.parkRefusalSaid = !1;
    }
    neverSent(e) {
        const t = this.filed(e);
        t !== void 0 && (t.resolved = !0, t.told = !0, t.dropped = !0);
    }
    handedOver(e, t) {
        const n = this.filed(e);
        n !== void 0 && (n.landed = [
            ...n.landed,
            ...t
        ]);
    }
    resolve(e, t, n = !1) {
        const i = this.filed(e);
        i !== void 0 && (i.resolved = !0, i.landed = [
            ...i.landed,
            ...t
        ], i.told ||= n);
    }
    filed(e) {
        return this.sent.find((t)=>t === e);
    }
};

}
