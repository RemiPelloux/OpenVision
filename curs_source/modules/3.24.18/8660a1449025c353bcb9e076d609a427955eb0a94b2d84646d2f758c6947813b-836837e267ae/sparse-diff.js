import { RFe } from "./diff-lines.js";
import { Jwe, Lha } from "./nca.js";
import { E } from "./tslib.es6.js";
var zRp, VRp, HGe, I0n;
export { HGe, I0n, VRp, zRp };
var __wakaru_dE1_initialized = false;
export function dE1() {
if (__wakaru_dE1_initialized) return;
__wakaru_dE1_initialized = true;
"use strict";
E(), RFe(), zRp = Object.defineProperty, VRp = (t, e, n)=>e in t ? zRp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, HGe = (t, e, n)=>VRp(t, typeof e != "symbol" ? e + "" : e, n), I0n = class Y3t {
    constructor(e){
        this.chunks = e, HGe(this, "originalLines", []), HGe(this, "modifiedLines", []), HGe(this, "resultLines", []), HGe(this, "pendingRemovedRows", []), HGe(this, "pendingAddedRows", []), HGe(this, "originalTokenLineNumber", 1), HGe(this, "modifiedTokenLineNumber", 1), HGe(this, "lastOriginalAbsoluteLine"), HGe(this, "lastModifiedAbsoluteLine");
    }
    static build(e) {
        return Y3t.buildFromChunks(Y3t.parsePatchToChunks(e.patch));
    }
    static buildFromChunks(e) {
        if (!(!e || e.length === 0)) return new Y3t(e).run();
    }
    static countStatsFromChunks(e) {
        let n = 0, i = 0;
        for (const r of e){
            const s = Y3t.chunkLines(r);
            let o = !s.some((a)=>a.startsWith("@@"));
            for (const a of s){
                if (a.startsWith("@@")) {
                    o = !0;
                    continue;
                }
                !o || a.startsWith("\\ No newline at end of file") || (a.startsWith("+") ? n++ : a.startsWith("-") && i++);
            }
        }
        return {
            additions: n,
            deletions: i
        };
    }
    static chunkLines(e) {
        return e.lines && e.lines.length > 0 ? e.lines : e.content ? Jwe(e.content) : [];
    }
    static parsePatchToChunks(e) {
        if (!e) return [];
        const n = Jwe(e), i = [];
        let r;
        for (const s of n){
            if (s.startsWith("@@")) {
                r && r.length > 0 && i.push({
                    lines: r
                }), r = [
                    s
                ];
                continue;
            }
            r && r.push(s);
        }
        return r && r.length > 0 && i.push({
            lines: r
        }), i;
    }
    static chunkStartLines(e) {
        if (e.oldStart !== void 0 && e.newStart !== void 0 && e.oldStart > 0 && e.newStart > 0) return {
            oldStart: e.oldStart,
            newStart: e.newStart
        };
        const n = Y3t.chunkLines(e).find((i)=>i.startsWith("@@"));
        if (n) {
            const i = /^@@\s+-(\d+)(?:,\d+)?\s+\+(\d+)(?:,\d+)?\s+@@/.exec(n);
            if (i) return {
                oldStart: Number.parseInt(i[1], 10),
                newStart: Number.parseInt(i[2], 10)
            };
        }
        return {
            oldStart: e.oldStart ?? 1,
            newStart: e.newStart ?? 1
        };
    }
    run() {
        for (const e of this.chunks)this.appendChunk(e);
        if (!(this.originalLines.length === 0 && this.modifiedLines.length === 0)) return {
            contents: {
                original: this.originalLines.join(`
`),
                modified: this.modifiedLines.join(`
`)
            },
            diff: {
                lines: this.resultLines,
                hasChanges: this.resultLines.some((e)=>e.type !== "unchanged")
            }
        };
    }
    appendChunk(e) {
        const n = Y3t.chunkLines(e), i = n.findIndex((u)=>u.startsWith("@@")), r = n.slice(i + 1), s = Y3t.chunkStartLines(e);
        let o = !1, a = !1;
        for (const u of r)u.startsWith("@@") || u.startsWith("\\ No newline at end of file") || u.length === 0 || (u.startsWith("+") ? a = !0 : u.startsWith("-") ? o = !0 : (o = !0, a = !0));
        let l = o ? s.oldStart : s.oldStart + 1, c = a ? s.newStart : s.newStart + 1;
        for (const u of r){
            if (u.startsWith("@@") || u.startsWith("\\ No newline at end of file")) continue;
            if (u.startsWith("+")) {
                this.appendSyntheticGapIfNeeded(l, c);
                const h = u.slice(1);
                this.modifiedLines.push(h);
                const p = {
                    type: "added",
                    content: h,
                    originalLineNumber: void 0,
                    modifiedLineNumber: c++,
                    modifiedTokenLineNumber: this.modifiedTokenLineNumber++
                };
                this.resultLines.push(p), this.pendingAddedRows.push(p), this.lastModifiedAbsoluteLine = c - 1;
                continue;
            }
            if (u.startsWith("-")) {
                this.pendingAddedRows.length > 0 && this.attachInlineChangesToPendingRows(), this.appendSyntheticGapIfNeeded(l, c);
                const h = u.slice(1);
                this.originalLines.push(h);
                const p = {
                    type: "removed",
                    content: h,
                    originalLineNumber: l++,
                    modifiedLineNumber: void 0,
                    originalTokenLineNumber: this.originalTokenLineNumber++
                };
                this.resultLines.push(p), this.pendingRemovedRows.push(p), this.lastOriginalAbsoluteLine = l - 1;
                continue;
            }
            if (this.attachInlineChangesToPendingRows(), u.length === 0) continue;
            const d = u.startsWith(" ") ? u.slice(1) : u;
            this.appendSyntheticGapIfNeeded(l, c), this.originalLines.push(d), this.modifiedLines.push(d), this.resultLines.push({
                type: "unchanged",
                content: d,
                originalLineNumber: l++,
                modifiedLineNumber: c++,
                originalTokenLineNumber: this.originalTokenLineNumber++,
                modifiedTokenLineNumber: this.modifiedTokenLineNumber++
            }), this.lastOriginalAbsoluteLine = l - 1, this.lastModifiedAbsoluteLine = c - 1;
        }
        this.attachInlineChangesToPendingRows();
    }
    attachInlineChangesToPendingRows() {
        const e = Math.min(this.pendingRemovedRows.length, this.pendingAddedRows.length);
        for(let n = 0; n < e; n++){
            const i = this.pendingRemovedRows[n], r = this.pendingAddedRows[n], { oldChanges: s, newChanges: o } = Lha(i.content, r.content);
            s.length > 0 && (i.inlineChanges = s), o.length > 0 && (r.inlineChanges = o);
        }
        this.pendingRemovedRows.length = 0, this.pendingAddedRows.length = 0;
    }
    appendSyntheticGapIfNeeded(e, n) {
        if (this.lastOriginalAbsoluteLine === void 0 || this.lastModifiedAbsoluteLine === void 0) return;
        const i = e - this.lastOriginalAbsoluteLine - 1, r = n - this.lastModifiedAbsoluteLine - 1;
        if (i <= 0 || i !== r) {
            e - 1 > this.lastOriginalAbsoluteLine && (this.lastOriginalAbsoluteLine = e - 1), n - 1 > this.lastModifiedAbsoluteLine && (this.lastModifiedAbsoluteLine = n - 1);
            return;
        }
        for(let s = 1; s <= i; s++)this.resultLines.push({
            type: "unchanged",
            content: "",
            originalLineNumber: this.lastOriginalAbsoluteLine + s,
            modifiedLineNumber: this.lastModifiedAbsoluteLine + s,
            isSyntheticUnchanged: !0
        });
        this.lastOriginalAbsoluteLine = e - 1, this.lastModifiedAbsoluteLine = n - 1;
    }
};

}
