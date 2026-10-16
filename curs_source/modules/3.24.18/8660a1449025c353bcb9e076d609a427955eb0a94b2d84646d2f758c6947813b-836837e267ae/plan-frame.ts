import { fWk, hdf, ixl, sxl, udf, xMn } from "./Ycg.js";
import { Vuf } from "./bottom-pin.ts";
import { YMe } from "./brands.ts";
import { JIl } from "./layout-index.ts";
import { sdf } from "./measured-policy.ts";
import { txl } from "./motion.ts";
import { AMn } from "./parts.ts";
import { ddf } from "./remainder-free.ts";
import { mdf } from "./row-geometry.ts";
import { QIl } from "./row-positions.ts";
import { E } from "./tslib.es6.js";
import { mvs } from "./viewport-anchor.ts";
var wdf, Cdf, Tdf, Edf, lxl;
export { Cdf, Edf, Tdf, lxl, wdf };
var __wakaru_Idf_initialized = false;
export function Idf() {
if (__wakaru_Idf_initialized) return;
__wakaru_Idf_initialized = true;
"use strict";
E(), Vuf(), YMe(), JIl(), sdf(), txl(), AMn(), ddf(), mdf(), QIl(), mvs(), wdf = new Set([
    "stream-delta",
    "measured-verification",
    "async-media-resolved",
    "tool-status-change",
    "probe-contract-minted"
]), Cdf = "stream-delta", Tdf = class {
    constructor(t, e, n){
        this.initialRows = t, this.gapPx = n, this.appliedMutationCount = 0, this.resolvedMutationCount = 0, this.workingRowsShared = !1, this.writtenIndices = [], this.positionsSource = t, this.positionsIndex = e, this.totalSizePx = e.totalSizePx, this.heightsAreLocal = udf(t), this.localThroughout = this.heightsAreLocal;
    }
    get mutationCount() {
        return this.appliedMutationCount;
    }
    get positionsSharedWith() {
        return this.positionsSource;
    }
    lookup(t) {
        const e = this.workingRows ?? this.initialRows, n = this.positionsIndex.indexOf(t);
        if (n === void 0) return;
        const i = e[n];
        return i === void 0 ? void 0 : {
            index: n,
            row: i
        };
    }
    write(t, e) {
        const n = this.mutableRows(), i = n[t];
        if (i === void 0 || i.rowId !== e.rowId) throw new RangeError(`frame editor write would desync rowId "${e.rowId}" at index ${t}`);
        if (this.appliedMutationCount++, !this.heightsAreLocal) {
            n[t] = e;
            return;
        }
        const r = sxl(e);
        if (r === void 0) {
            this.heightsAreLocal = !1, this.localThroughout = !1, n[t] = e;
            return;
        }
        n[t] = r === e.heightPx ? e : {
            ...e,
            heightPx: r
        };
        const s = t < n.length - 1 ? (e.gapAfterPx ?? this.gapPx) - (i.gapAfterPx ?? this.gapPx) : 0;
        this.totalSizePx += r - i.heightPx + s, this.writtenIndices.push(t);
    }
    replace(t, e) {
        this.positionsIndex = xMn(t, this.gapPx, {
            derivedFrom: this.positionsSource
        }), this.positionsSource = t, this.workingRows = t, this.workingRowsShared = !0, this.localThroughout = !1, this.appliedMutationCount++, this.heightsAreLocal = this.heightsAreLocal && e, this.heightsAreLocal && (this.totalSizePx = this.positionsIndex.totalSizePx, this.resolvedMutationCount = this.appliedMutationCount);
    }
    current() {
        return this.appliedMutationCount === 0 ? this.initialRows : this.resolvedRows();
    }
    finalRows() {
        const t = this.current();
        return this.appliedMutationCount !== 0 && this.heightsAreLocal && ixl(t), t;
    }
    currentTotalSizePx() {
        return this.appliedMutationCount !== 0 && this.resolvedRows(), this.totalSizePx;
    }
    heightWrites() {
        if (this.appliedMutationCount === 0) return [];
        const t = this.resolvedRows();
        if (!this.localThroughout) return fWk(this.initialRows, t);
        const e = [];
        let n = -1;
        for (const i of [
            ...this.writtenIndices
        ].sort((r, s)=>r - s)){
            if (i === n) continue;
            n = i;
            const r = t[i];
            r !== void 0 && this.initialRows[i]?.heightPx !== r.heightPx && e.push({
                rowId: r.rowId,
                heightPx: r.heightPx
            });
        }
        return e;
    }
    resolvedRows() {
        const t = this.ensureWorkingRows();
        if (this.heightsAreLocal || this.resolvedMutationCount === this.appliedMutationCount) return t;
        const e = hdf(t), n = e === t ? t : [
            ...e
        ];
        return udf(e) && (ixl(n), this.heightsAreLocal = !0), this.workingRows = n, this.resolvedMutationCount = this.appliedMutationCount, this.totalSizePx = xMn(n, this.gapPx, {
            derivedFrom: this.positionsSource
        }).totalSizePx, this.workingRowsShared = !0, n;
    }
    ensureWorkingRows() {
        return this.workingRows === void 0 && (this.workingRows = [
            ...this.initialRows
        ]), this.workingRows;
    }
    mutableRows() {
        const t = this.ensureWorkingRows();
        return this.workingRowsShared ? (this.workingRows = [
            ...t
        ], this.workingRowsShared = !1, this.workingRows) : t;
    }
}, Edf = 4, lxl = {
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
