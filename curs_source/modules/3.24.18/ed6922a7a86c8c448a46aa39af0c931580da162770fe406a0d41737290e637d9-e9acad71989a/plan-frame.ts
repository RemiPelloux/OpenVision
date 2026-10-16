import { w7h } from "./bottom-pin.ts";
import { Uzt, gbe } from "./brands.ts";
import { $rr, R7h } from "./committed-geometry-controller.ts";
import { Hrr, uLo } from "./layout-index.ts";
import { L7h } from "./measured-policy.ts";
import { hLo } from "./motion.ts";
import { Hzt } from "./parts.ts";
import { vhe } from "./plane.tsx";
import { U7h, fLo } from "./remainder-free.ts";
import { W7h } from "./row-geometry.ts";
import { lLo } from "./row-positions.ts";
import { x } from "./tslib.es6.js";
import { Lrr } from "./viewport-anchor.ts";
function Orr(e, t) {
    return e + t;
}
function Urr({ prev: e, next: t }) {
    const n = Math.min(e.length, t.length);
    let i = 0;
    for(; i < n && e[i] === t[i];)i++;
    let r = 0;
    for(; r < n - i && e[e.length - 1 - r] === t[t.length - 1 - r];)r++;
    return {
        at: i,
        removedCount: e.length - i - r,
        insertedCount: t.length - i - r
    };
}
function Jg_(e, t) {
    return R7h(e, Urr(t), t);
}
function $zt(e, t = Uzt, n) {
    const i = Hrr.get(e);
    if (i !== void 0 && i.gapPx === t) return i.index;
    const r = tf_(e, n), s = nf_(e, t, r);
    return Hrr.set(e, {
        gapPx: t,
        index: s,
        positions: r
    }), s;
}
function tf_(e, t) {
    if (t === void 0) return $rr(e);
    const n = Hrr.get(t.derivedFrom);
    return n === void 0 ? $rr(e) : Jg_(n.positions, {
        prev: t.derivedFrom,
        next: e
    });
}
function nf_(e, t, n) {
    const i = new Array(e.length);
    let r = 0;
    for(let c = 0; c < e.length; c++){
        const l = e[c];
        l !== void 0 && (i[c] = r, r += l.heightPx + (c < e.length - 1 ? l.gapAfterPx ?? t : 0));
    }
    const s = vhe(r), o = (c)=>{
        const l = n.indexOf(c);
        return l !== void 0 && e[l]?.rowId === c ? l : void 0;
    }, a = (c)=>{
        if (e.length === 0 || c < 0) return e.length === 0 ? -1 : 0;
        let l = 0, u = e.length - 1;
        for(; l < u;){
            const h = l + u + 1 >> 1;
            (i[h] ?? 0) <= c ? l = h : u = h - 1;
        }
        return l;
    };
    return {
        rowCount: e.length,
        totalSizePx: s,
        derivation: n.derivation,
        indexOf: o,
        offsetOf: (c)=>{
            const l = o(c);
            return l === void 0 ? void 0 : vhe(i[l] ?? 0);
        },
        offsetAt: (c)=>{
            const l = i[c];
            if (l === void 0) throw new RangeError(`row index ${c} out of bounds (count ${e.length})`);
            return vhe(l);
        },
        heightAt: (c)=>{
            const l = e[c];
            if (l === void 0) throw new RangeError(`row index ${c} out of bounds (count ${e.length})`);
            return l.heightPx;
        },
        indexAtOffset: a
    };
}
function of_(e) {
    switch(e.phase){
        case "reserved":
        case "terminal":
            return e.heightPx;
        case "state-table":
            {
                const t = e.sizes.get(e.active);
                if (t === void 0) throw new RangeError(`state-table slot has no size for active state "${e.active}"`);
                return t;
            }
    }
}
function O7h(e) {
    switch(e.kind){
        case "text":
            return e.heightPx;
        case "slot":
            return of_(e.contract);
        case "measured":
            return e.committedPx;
        case "chrome":
            return e.heightPx;
        case "sibling-remainder":
            throw new RangeError(`sibling remainder "${e.partId}" requires sibling resolution`);
    }
}
function B7h(e) {
    return fLo.has(e);
}
function gLo(e) {
    fLo.add(e);
}
function vLo(e) {
    const t = H7h(e);
    return t.kind === "ordinary" ? t.ordinaryHeightPx : void 0;
}
function $7h(e) {
    const t = e.map((a)=>H7h(a)), n = new Map;
    for (const a of t){
        if (n.has(a.row.rowId)) throw new RangeError(`duplicate rowId "${a.row.rowId}"`);
        n.set(a.row.rowId, a);
    }
    let i = !1;
    for (const a of t)a.kind !== "ordinary" && (i = !0, af_(a.remainder, n));
    let r = !1;
    const s = t.map((a)=>{
        const c = a.kind === "ordinary" ? a.ordinaryHeightPx : Orr(a.ordinaryHeightPx, cf_(a.remainder, n));
        return c === a.row.heightPx ? a.row : (r = !0, {
            ...a.row,
            heightPx: c
        });
    }), o = r ? s : e;
    return i || gLo(o), o;
}
function H7h(e) {
    let t = Uzt, n;
    for (const i of e.parts){
        if (i.kind === "sibling-remainder") {
            if (n !== void 0) throw new RangeError(`row "${e.rowId}" has more than one sibling remainder`);
            n = i;
            continue;
        }
        t = Orr(t, O7h(i));
    }
    return n === void 0 ? {
        kind: "ordinary",
        row: e,
        ordinaryHeightPx: t
    } : {
        kind: "sibling-remainder",
        row: e,
        ordinaryHeightPx: t,
        remainder: n
    };
}
function af_(e, t) {
    const n = new Set;
    for (const i of e.contributorRowIds){
        if (n.has(i)) throw new RangeError(`sibling remainder "${e.partId}" has duplicate contributor "${i}"`);
        n.add(i);
        const r = t.get(i);
        if (r === void 0) throw new RangeError(`sibling remainder "${e.partId}" is missing contributor "${i}"`);
        if (r.kind === "sibling-remainder") throw new RangeError(`sibling remainder "${e.partId}" cannot use derived contributor "${i}"`);
    }
}
function cf_(e, t) {
    let n = Uzt;
    for (const i of e.contributorRowIds){
        const r = t.get(i);
        if (r === void 0 || r.kind === "sibling-remainder") throw new RangeError(`sibling remainder "${e.partId}" has invalid contributor "${i}"`);
        n = Orr(n, r.ordinaryHeightPx);
    }
    return vhe(Math.max(e.floorPx, e.targetCombinedHeightPx - n));
}
function Sf_(e, t) {
    const n = Urr({
        prev: e,
        next: t
    }), i = new Map;
    for(let s = n.at; s < n.at + n.removedCount; s++){
        const o = e[s];
        o !== void 0 && i.set(o.rowId, o.heightPx);
    }
    const r = [];
    for(let s = n.at; s < n.at + n.insertedCount; s++){
        const o = t[s];
        o !== void 0 && i.get(o.rowId) !== o.heightPx && r.push({
            rowId: o.rowId,
            heightPx: o.heightPx
        });
    }
    return r;
}
var Z7h, Q7h, J7h, e$h, yLo;
export { $7h, $zt, B7h, H7h, J7h, Jg_, O7h, Orr, Q7h, Sf_, Urr, Z7h, af_, cf_, e$h, gLo, nf_, of_, tf_, vLo, yLo };
var __wakaru_t$h_initialized = false;
export function t$h() {
if (__wakaru_t$h_initialized) return;
__wakaru_t$h_initialized = true;
"use strict";
x(), w7h(), gbe(), uLo(), L7h(), hLo(), Hzt(), U7h(), W7h(), lLo(), Lrr(), Z7h = new Set([
    "stream-delta",
    "measured-verification",
    "async-media-resolved",
    "tool-status-change",
    "probe-contract-minted"
]), Q7h = "stream-delta", J7h = class {
    constructor(e, t, n){
        this.initialRows = e, this.gapPx = n, this.appliedMutationCount = 0, this.resolvedMutationCount = 0, this.workingRowsShared = !1, this.writtenIndices = [], this.positionsSource = e, this.positionsIndex = t, this.totalSizePx = t.totalSizePx, this.heightsAreLocal = B7h(e), this.localThroughout = this.heightsAreLocal;
    }
    get mutationCount() {
        return this.appliedMutationCount;
    }
    get positionsSharedWith() {
        return this.positionsSource;
    }
    lookup(e) {
        const t = this.workingRows ?? this.initialRows, n = this.positionsIndex.indexOf(e);
        if (n === void 0) return;
        const i = t[n];
        return i === void 0 ? void 0 : {
            index: n,
            row: i
        };
    }
    write(e, t) {
        const n = this.mutableRows(), i = n[e];
        if (i === void 0 || i.rowId !== t.rowId) throw new RangeError(`frame editor write would desync rowId "${t.rowId}" at index ${e}`);
        if (this.appliedMutationCount++, !this.heightsAreLocal) {
            n[e] = t;
            return;
        }
        const r = vLo(t);
        if (r === void 0) {
            this.heightsAreLocal = !1, this.localThroughout = !1, n[e] = t;
            return;
        }
        n[e] = r === t.heightPx ? t : {
            ...t,
            heightPx: r
        };
        const s = e < n.length - 1 ? (t.gapAfterPx ?? this.gapPx) - (i.gapAfterPx ?? this.gapPx) : 0;
        this.totalSizePx += r - i.heightPx + s, this.writtenIndices.push(e);
    }
    replace(e, t) {
        this.positionsIndex = $zt(e, this.gapPx, {
            derivedFrom: this.positionsSource
        }), this.positionsSource = e, this.workingRows = e, this.workingRowsShared = !0, this.localThroughout = !1, this.appliedMutationCount++, this.heightsAreLocal = this.heightsAreLocal && t, this.heightsAreLocal && (this.totalSizePx = this.positionsIndex.totalSizePx, this.resolvedMutationCount = this.appliedMutationCount);
    }
    current() {
        return this.appliedMutationCount === 0 ? this.initialRows : this.resolvedRows();
    }
    finalRows() {
        const e = this.current();
        return this.appliedMutationCount !== 0 && this.heightsAreLocal && gLo(e), e;
    }
    currentTotalSizePx() {
        return this.appliedMutationCount !== 0 && this.resolvedRows(), this.totalSizePx;
    }
    heightWrites() {
        if (this.appliedMutationCount === 0) return [];
        const e = this.resolvedRows();
        if (!this.localThroughout) return Sf_(this.initialRows, e);
        const t = [];
        let n = -1;
        for (const i of [
            ...this.writtenIndices
        ].sort((r, s)=>r - s)){
            if (i === n) continue;
            n = i;
            const r = e[i];
            r !== void 0 && this.initialRows[i]?.heightPx !== r.heightPx && t.push({
                rowId: r.rowId,
                heightPx: r.heightPx
            });
        }
        return t;
    }
    resolvedRows() {
        const e = this.ensureWorkingRows();
        if (this.heightsAreLocal || this.resolvedMutationCount === this.appliedMutationCount) return e;
        const t = $7h(e), n = t === e ? e : [
            ...t
        ];
        return B7h(t) && (gLo(n), this.heightsAreLocal = !0), this.workingRows = n, this.resolvedMutationCount = this.appliedMutationCount, this.totalSizePx = $zt(n, this.gapPx, {
            derivedFrom: this.positionsSource
        }).totalSizePx, this.workingRowsShared = !0, n;
    }
    ensureWorkingRows() {
        return this.workingRows === void 0 && (this.workingRows = [
            ...this.initialRows
        ]), this.workingRows;
    }
    mutableRows() {
        const e = this.ensureWorkingRows();
        return this.workingRowsShared ? (this.workingRows = [
            ...e
        ], this.workingRowsShared = !1, this.workingRows) : e;
    }
}, e$h = 4, yLo = {
    "user-navigation": 11,
    restore: 10,
    "disclosure-toggle": 9,
    "stream-settle": 8,
    "stream-delta": 7,
    "async-media-resolved": 6,
    "tool-status-change": 5,
    "probe-contract-minted": 4,
    "structure-change": 3,
    "epoch-change": 2,
    "measured-verification": 1,
    hydration: 0
};

}
