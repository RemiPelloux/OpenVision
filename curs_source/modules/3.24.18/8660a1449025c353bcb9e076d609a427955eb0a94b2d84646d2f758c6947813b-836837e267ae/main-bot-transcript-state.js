import { W9s } from "./mE_.js";
import { E } from "./tslib.es6.js";
var z9s, V9s, h0c, p0c, m0c, SUi;
export { SUi, V9s, h0c, m0c, p0c, z9s };
var __wakaru_kUi_initialized = false;
export function kUi() {
if (__wakaru_kUi_initialized) return;
__wakaru_kUi_initialized = true;
"use strict";
E(), z9s = new Map, V9s = {
    phase: "connecting",
    refusalMessage: void 0,
    generation: 0,
    rows: [],
    tombstones: z9s,
    sends: [],
    failures: [],
    live: void 0,
    turnWaitUntilMs: void 0,
    toolUpdatedAtMs: 0
}, h0c = class {
    constructor(t, e){
        this.rows = t, this.tombstones = e;
    }
    get currentRows() {
        return this.nextRows ?? this.rows;
    }
    get currentTombstones() {
        return this.nextTombstones ?? this.tombstones;
    }
    writableRows() {
        return this.nextRows ??= [
            ...this.rows
        ], this.nextRows;
    }
    writableTombstones() {
        return this.nextTombstones ??= new Map(this.tombstones), this.nextTombstones;
    }
    applyEntry(t) {
        const e = this.currentTombstones.get(t.seq);
        if (e !== void 0 && e >= t.updatedSeq) return !1;
        const n = W9s(this.currentRows, t.seq);
        if (n >= 0) {
            const i = this.currentRows[n];
            if (i.updatedSeq > t.updatedSeq || i.updatedSeq === t.updatedSeq && (i.entry.kind !== "omitted" || t.entry.kind === "omitted")) return !1;
            this.writableRows()[n] = t;
        } else this.writableRows().splice(-(n + 1), 0, t);
        return e !== void 0 && this.writableTombstones().delete(t.seq), !0;
    }
    applyDelete(t) {
        const e = W9s(this.currentRows, t.seq), n = e >= 0 ? this.currentRows[e] : void 0, i = this.currentTombstones.get(t.seq);
        return n !== void 0 && n.updatedSeq >= t.updatedSeq || i !== void 0 && i >= t.updatedSeq || (this.writableTombstones().set(t.seq, t.updatedSeq), n === void 0) ? !1 : (this.writableRows().splice(e, 1), !0);
    }
    applyBody(t) {
        if (t.entry.kind === "omitted") return !1;
        const e = this.currentTombstones.get(t.seq);
        if (e !== void 0 && e >= t.updatedSeq) return !1;
        const n = W9s(this.currentRows, t.seq);
        if (n < 0) return !1;
        const i = this.currentRows[n];
        return i.updatedSeq > t.updatedSeq || i.updatedSeq === t.updatedSeq && i.entry.kind !== "omitted" ? !1 : (this.writableRows()[n] = t, !0);
    }
    commit(t) {
        return this.nextRows === void 0 && this.nextTombstones === void 0 ? t : {
            ...t,
            rows: this.nextRows ?? t.rows,
            tombstones: this.nextTombstones ?? t.tombstones
        };
    }
}, p0c = "Sent before the transcript was cleared.", m0c = 5e3, SUi = 3e4;

}
