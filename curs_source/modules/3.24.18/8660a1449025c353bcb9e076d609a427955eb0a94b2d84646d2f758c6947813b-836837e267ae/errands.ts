import { E } from "./tslib.es6.js";
var hrf;
export { hrf };
var __wakaru_LBk_initialized = false;
export function LBk() {
if (__wakaru_LBk_initialized) return;
__wakaru_LBk_initialized = true;
"use strict";
E(), hrf = class {
    sent = [];
    record(t, e) {
        const n = {
            request: t,
            watched: e,
            resolved: !1,
            told: !1,
            landed: [],
            parkRefusalSaid: !1,
            dropped: !1
        };
        return e && this.sent.push(n), n;
    }
    owed() {
        return this.sent.findLast((t)=>!t.resolved);
    }
    earlierOpen(t) {
        const e = this.sent.findIndex((n)=>n === t);
        return e < 0 ? void 0 : this.sent.slice(0, e).findLast((n)=>!n.resolved);
    }
    untoldLines() {
        for(let t = this.sent.length - 1; t >= 0; t--){
            const e = this.sent[t];
            if (e === void 0 || e.told || !e.resolved) continue;
            const n = e.landed.map((i)=>i.trim()).filter((i)=>i !== "");
            if (n.length > 0) return n;
        }
    }
    openErrand(t) {
        const e = t.trim(), n = this.sent.filter((i)=>!i.told && i.request.trim() === e);
        if (n.length !== 0) return n.some((i)=>!i.resolved) ? {
            stands: "under way"
        } : {
            stands: "about to be said",
            landed: n.at(-1)?.landed ?? []
        };
    }
    resultsWereSaid() {
        for (const t of this.sent)t.resolved && (t.told = !0);
    }
    parkRefusedARepeat(t) {
        const e = t.trim();
        for (const n of this.sent)!n.resolved && n.request.trim() === e && (n.parkRefusalSaid = !0);
    }
    parkedAgain() {
        for (const t of this.sent)t.parkRefusalSaid = !1;
    }
    neverSent(t) {
        const e = this.filed(t);
        e !== void 0 && (e.resolved = !0, e.told = !0, e.dropped = !0);
    }
    handedOver(t, e) {
        const n = this.filed(t);
        n !== void 0 && (n.landed = [
            ...n.landed,
            ...e
        ]);
    }
    resolve(t, e, n = !1) {
        const i = this.filed(t);
        i !== void 0 && (i.resolved = !0, i.landed = [
            ...i.landed,
            ...e
        ], i.told ||= n);
    }
    filed(t) {
        return this.sent.find((e)=>e === t);
    }
};

}
