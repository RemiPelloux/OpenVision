import { Fa, Zm, rO } from "./Iwo.js";
import { bo } from "./arrays.js";
import { YE } from "./assert.js";
import { Ebe, c_ } from "./async.cursor.js";
import { kJ } from "./fuzzyScorer.js";
import { Frk, Lrk, cKm, dKm, pKm, tel, uKm } from "./gYa.js";
import { E } from "./tslib.es6.js";
var UIn, nel, iel, gKm, TCi;
export { TCi, UIn, gKm, iel, nel };
var __wakaru_fKm_initialized = false;
export function fKm() {
if (__wakaru_fKm_initialized) return;
__wakaru_fKm_initialized = true;
"use strict";
E(), bo(), YE(), c_(), kJ(), Fa(), UIn = 2048, nel = class aPb {
    constructor(e, n){
        this._relativePaths = e, this._items = n ?? cKm([], e, 0, e.length);
    }
    static async createAsync(e, n) {
        const i = [], r = n?.yieldBudget ?? new Ebe, s = e.length;
        for(let o = 0; o < s; o += UIn){
            const a = Math.min(o + UIn, s);
            cKm(i, e, o, a), a < s && await r.yieldIfExhausted();
        }
        return new aPb(e, i);
    }
    get size() {
        return this._items.length;
    }
    hasSamePaths(e) {
        return Zm(this._relativePaths, e);
    }
    getInitialItems(e, n) {
        if (e <= 0) return [];
        const i = [];
        for (const r of this._items)if (!(n?.isAllowed && !n.isAllowed(r.relativePath)) && (i.push(tel(r)), i.length === e)) break;
        return i;
    }
    search(e, n, i) {
        if (n <= 0) return [];
        if (!e.normalized) return e.originalLowercase.trim().length > 0 ? [] : this.getInitialItems(n, i);
        const r = uKm(e);
        if (r.length === 0) return [];
        const s = this._lastScan && dKm(r, this._lastScan.terms) ? this._lastScan.unfilteredMatchPositions : void 0, o = [], a = [];
        return this._scan(r, s, 0, s?.length ?? this._items.length, o, a, n, i?.isAllowed), this._lastScan = {
            terms: r,
            unfilteredMatchPositions: o
        }, a.map((l)=>tel(l.item));
    }
    async searchAsync(e, n, i, r) {
        if (n <= 0 || r.isCancellationRequested) return [];
        if (!e.normalized) return e.originalLowercase.trim().length > 0 ? [] : this.getInitialItems(n, i);
        const s = uKm(e);
        if (s.length === 0) return [];
        const o = this._lastScan && dKm(s, this._lastScan.terms) ? this._lastScan.unfilteredMatchPositions : void 0, a = [], l = [], c = i?.yieldBudget ?? new Ebe, u = o?.length ?? this._items.length;
        for(let d = 0; d < u; d += UIn)if (this._scan(s, o, d, Math.min(d + UIn, u), a, l, n, i?.isAllowed), d + UIn < u && await c.yieldIfExhausted() && r.isCancellationRequested) return [];
        return r.isCancellationRequested ? [] : (this._lastScan = {
            terms: s,
            unfilteredMatchPositions: a
        }, l.map((d)=>tel(d.item)));
    }
    _scan(e, n, i, r, s, o, a, l) {
        const c = this._items;
        for(let u = i; u < r; u++){
            const d = n === void 0 ? u : n[u], h = c[d], p = Lrk(h, e);
            if (p === void 0) continue;
            s.push(d);
            const g = {
                item: h,
                score: p
            };
            pKm(o, g, a) && (l && !l(h.relativePath) || Frk(o, g, a));
        }
    }
}, iel = 3e4, gKm = class {
    get(t) {
        const e = this._entryFor(t);
        return e?.kind === "ready" ? e.index : void 0;
    }
    load(t, e) {
        return this._load(t, e, !0);
    }
    prewarm(t, e) {
        this._load(t, e, !1).catch(()=>{});
    }
    markStale(t) {
        const e = this._entryFor(t);
        if (e !== void 0) switch(e.kind){
            case "failed":
                this._entry = void 0;
                return;
            case "loading":
            case "refreshing":
                e.markedStaleInFlight = !0;
                return;
            case "ready":
            case "stale":
                this._entry = {
                    kind: "stale",
                    key: t,
                    index: e.index
                };
                return;
            default:
                rO(e);
        }
    }
    invalidate(t) {
        this._entry?.key === t && (this._entry = void 0);
    }
    _entryFor(t) {
        return this._entry?.key === t ? this._entry : void 0;
    }
    _load(t, e, n) {
        const i = this._entryFor(t);
        if (i === void 0) return this._startLoad(t, e, n);
        switch(i.kind){
            case "failed":
                return Date.now() < i.retryAfter ? i.promise : this._startLoad(t, e, n);
            case "loading":
                return i.markedStaleInFlight ? this._startLoad(t, e, n) : (i.holdFailure ||= n, i.promise);
            case "refreshing":
                return i.markedStaleInFlight ? this._startRefresh(t, i.index, e, n) : (i.holdFailure ||= n, i.promise);
            case "ready":
                return Promise.resolve(i.index);
            case "stale":
                return i.retryAfter !== void 0 && Date.now() < i.retryAfter ? Promise.resolve(i.index) : this._startRefresh(t, i.index, e, n);
            default:
                return rO(i);
        }
    }
    _startLoad(t, e, n) {
        const i = e().then((s)=>nel.createAsync(s)).then((s)=>(this._settle(r, s, r.markedStaleInFlight), s)).catch((s)=>{
            throw this._entry === r && (this._entry = r.holdFailure && !r.markedStaleInFlight ? {
                kind: "failed",
                key: t,
                promise: i,
                retryAfter: Date.now() + iel
            } : void 0), s;
        }), r = {
            kind: "loading",
            key: t,
            promise: i,
            markedStaleInFlight: !1,
            holdFailure: n
        };
        return this._entry = r, i;
    }
    _startRefresh(t, e, n, i) {
        const r = n().then((o)=>e.hasSamePaths(o) ? e : nel.createAsync(o)).then((o)=>(this._settle(s, o, s.markedStaleInFlight), o), ()=>(this._entry === s && (this._entry = s.holdFailure && !s.markedStaleInFlight ? {
                kind: "stale",
                key: t,
                index: e,
                retryAfter: Date.now() + iel
            } : {
                kind: "stale",
                key: t,
                index: e
            }), e)), s = {
            kind: "refreshing",
            key: t,
            index: e,
            promise: r,
            markedStaleInFlight: !1,
            holdFailure: i
        };
        return this._entry = s, r;
    }
    _settle(t, e, n) {
        this._entry === t && (this._entry = n ? {
            kind: "stale",
            key: t.key,
            index: e
        } : {
            kind: "ready",
            key: t.key,
            index: e
        });
    }
}, TCi = new gKm;

}
