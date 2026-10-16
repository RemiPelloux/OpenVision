import { Ps, QN, nh } from "./HVr.js";
import { dr } from "./arrays.js";
import { C0 } from "./assert.js";
import { Q0e, ub } from "./async.cursor.js";
import { S_e } from "./fuzzyScorer.js";
import { x } from "./tslib.es6.js";
import { Bch, F_o, Fch, Hch, T4v, Uch, w4v } from "./xmo.js";
var GGt, B_o, U_o, Wch, Gch;
export { B_o, GGt, Gch, U_o, Wch };
var __wakaru_I4v_initialized = false;
export function I4v() {
if (__wakaru_I4v_initialized) return;
__wakaru_I4v_initialized = true;
"use strict";
x(), dr(), C0(), ub(), S_e(), Ps(), GGt = 2048, B_o = class wCm {
    constructor(t, n){
        this._relativePaths = t, this._items = n ?? Fch([], t, 0, t.length);
    }
    static async createAsync(t, n) {
        const i = [], r = n?.yieldBudget ?? new Q0e, s = t.length;
        for(let o = 0; o < s; o += GGt){
            const a = Math.min(o + GGt, s);
            Fch(i, t, o, a), a < s && await r.yieldIfExhausted();
        }
        return new wCm(t, i);
    }
    get size() {
        return this._items.length;
    }
    hasSamePaths(t) {
        return nh(this._relativePaths, t);
    }
    getInitialItems(t, n) {
        if (t <= 0) return [];
        const i = [];
        for (const r of this._items)if (!(n?.isAllowed && !n.isAllowed(r.relativePath)) && (i.push(F_o(r)), i.length === t)) break;
        return i;
    }
    search(t, n, i) {
        if (n <= 0) return [];
        if (!t.normalized) return t.originalLowercase.trim().length > 0 ? [] : this.getInitialItems(n, i);
        const r = Bch(t);
        if (r.length === 0) return [];
        const s = this._lastScan && Uch(r, this._lastScan.terms) ? this._lastScan.unfilteredMatchPositions : void 0, o = [], a = [];
        return this._scan(r, s, 0, s?.length ?? this._items.length, o, a, n, i?.isAllowed), this._lastScan = {
            terms: r,
            unfilteredMatchPositions: o
        }, a.map((c)=>F_o(c.item));
    }
    async searchAsync(t, n, i, r) {
        if (n <= 0 || r.isCancellationRequested) return [];
        if (!t.normalized) return t.originalLowercase.trim().length > 0 ? [] : this.getInitialItems(n, i);
        const s = Bch(t);
        if (s.length === 0) return [];
        const o = this._lastScan && Uch(s, this._lastScan.terms) ? this._lastScan.unfilteredMatchPositions : void 0, a = [], c = [], l = i?.yieldBudget ?? new Q0e, u = o?.length ?? this._items.length;
        for(let h = 0; h < u; h += GGt)if (this._scan(s, o, h, Math.min(h + GGt, u), a, c, n, i?.isAllowed), h + GGt < u && await l.yieldIfExhausted() && r.isCancellationRequested) return [];
        return r.isCancellationRequested ? [] : (this._lastScan = {
            terms: s,
            unfilteredMatchPositions: a
        }, c.map((h)=>F_o(h.item)));
    }
    _scan(t, n, i, r, s, o, a, c) {
        const l = this._items;
        for(let u = i; u < r; u++){
            const h = n === void 0 ? u : n[u], p = l[h], g = w4v(p, t);
            if (g === void 0) continue;
            s.push(h);
            const f = {
                item: p,
                score: g
            };
            Hch(o, f, a) && (c && !c(p.relativePath) || T4v(o, f, a));
        }
    }
}, U_o = 3e4, Wch = class {
    get(e) {
        const t = this._entryFor(e);
        return t?.kind === "ready" ? t.index : void 0;
    }
    load(e, t) {
        return this._load(e, t, !0);
    }
    prewarm(e, t) {
        this._load(e, t, !1).catch(()=>{});
    }
    markStale(e) {
        const t = this._entryFor(e);
        if (t !== void 0) switch(t.kind){
            case "failed":
                this._entry = void 0;
                return;
            case "loading":
            case "refreshing":
                t.markedStaleInFlight = !0;
                return;
            case "ready":
            case "stale":
                this._entry = {
                    kind: "stale",
                    key: e,
                    index: t.index
                };
                return;
            default:
                QN(t);
        }
    }
    invalidate(e) {
        this._entry?.key === e && (this._entry = void 0);
    }
    _entryFor(e) {
        return this._entry?.key === e ? this._entry : void 0;
    }
    _load(e, t, n) {
        const i = this._entryFor(e);
        if (i === void 0) return this._startLoad(e, t, n);
        switch(i.kind){
            case "failed":
                return Date.now() < i.retryAfter ? i.promise : this._startLoad(e, t, n);
            case "loading":
                return i.markedStaleInFlight ? this._startLoad(e, t, n) : (i.holdFailure ||= n, i.promise);
            case "refreshing":
                return i.markedStaleInFlight ? this._startRefresh(e, i.index, t, n) : (i.holdFailure ||= n, i.promise);
            case "ready":
                return Promise.resolve(i.index);
            case "stale":
                return i.retryAfter !== void 0 && Date.now() < i.retryAfter ? Promise.resolve(i.index) : this._startRefresh(e, i.index, t, n);
            default:
                return QN(i);
        }
    }
    _startLoad(e, t, n) {
        const i = t().then((s)=>B_o.createAsync(s)).then((s)=>(this._settle(r, s, r.markedStaleInFlight), s)).catch((s)=>{
            throw this._entry === r && (this._entry = r.holdFailure && !r.markedStaleInFlight ? {
                kind: "failed",
                key: e,
                promise: i,
                retryAfter: Date.now() + U_o
            } : void 0), s;
        }), r = {
            kind: "loading",
            key: e,
            promise: i,
            markedStaleInFlight: !1,
            holdFailure: n
        };
        return this._entry = r, i;
    }
    _startRefresh(e, t, n, i) {
        const r = n().then((o)=>t.hasSamePaths(o) ? t : B_o.createAsync(o)).then((o)=>(this._settle(s, o, s.markedStaleInFlight), o), ()=>(this._entry === s && (this._entry = s.holdFailure && !s.markedStaleInFlight ? {
                kind: "stale",
                key: e,
                index: t,
                retryAfter: Date.now() + U_o
            } : {
                kind: "stale",
                key: e,
                index: t
            }), t)), s = {
            kind: "refreshing",
            key: e,
            index: t,
            promise: r,
            markedStaleInFlight: !1,
            holdFailure: i
        };
        return this._entry = s, r;
    }
    _settle(e, t, n) {
        this._entry === e && (this._entry = n ? {
            kind: "stale",
            key: e.key,
            index: t
        } : {
            kind: "ready",
            key: e.key,
            index: t
        });
    }
}, Gch = new Wch;

}
