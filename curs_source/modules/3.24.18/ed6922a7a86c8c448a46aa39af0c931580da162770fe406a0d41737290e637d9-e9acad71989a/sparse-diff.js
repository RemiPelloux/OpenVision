import { GCe, u2l } from "./DSs.js";
import { F9e } from "./diff-lines.js";
import { x } from "./tslib.es6.js";
var gpu, fpu, cMe, a3i;
export { a3i, cMe, fpu, gpu };
var __wakaru_Jrv_initialized = false;
export function Jrv() {
if (__wakaru_Jrv_initialized) return;
__wakaru_Jrv_initialized = true;
"use strict";
x(), F9e(), gpu = Object.defineProperty, fpu = (e, t, n)=>t in e ? gpu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, cMe = (e, t, n)=>fpu(e, typeof t != "symbol" ? t + "" : t, n), a3i = class Qot {
    constructor(t){
        this.chunks = t, cMe(this, "originalLines", []), cMe(this, "modifiedLines", []), cMe(this, "resultLines", []), cMe(this, "pendingRemovedRows", []), cMe(this, "pendingAddedRows", []), cMe(this, "originalTokenLineNumber", 1), cMe(this, "modifiedTokenLineNumber", 1), cMe(this, "lastOriginalAbsoluteLine"), cMe(this, "lastModifiedAbsoluteLine");
    }
    static build(t) {
        return Qot.buildFromChunks(Qot.parsePatchToChunks(t.patch));
    }
    static buildFromChunks(t) {
        if (!(!t || t.length === 0)) return new Qot(t).run();
    }
    static countStatsFromChunks(t) {
        let n = 0, i = 0;
        for (const r of t){
            const s = Qot.chunkLines(r);
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
    static chunkLines(t) {
        return t.lines && t.lines.length > 0 ? t.lines : t.content ? GCe(t.content) : [];
    }
    static parsePatchToChunks(t) {
        if (!t) return [];
        const n = GCe(t), i = [];
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
    static chunkStartLines(t) {
        if (t.oldStart !== void 0 && t.newStart !== void 0 && t.oldStart > 0 && t.newStart > 0) return {
            oldStart: t.oldStart,
            newStart: t.newStart
        };
        const n = Qot.chunkLines(t).find((i)=>i.startsWith("@@"));
        if (n) {
            const i = /^@@\s+-(\d+)(?:,\d+)?\s+\+(\d+)(?:,\d+)?\s+@@/.exec(n);
            if (i) return {
                oldStart: Number.parseInt(i[1], 10),
                newStart: Number.parseInt(i[2], 10)
            };
        }
        return {
            oldStart: t.oldStart ?? 1,
            newStart: t.newStart ?? 1
        };
    }
    run() {
        for (const t of this.chunks)this.appendChunk(t);
        if (!(this.originalLines.length === 0 && this.modifiedLines.length === 0)) return {
            contents: {
                original: this.originalLines.join(`
`),
                modified: this.modifiedLines.join(`
`)
            },
            diff: {
                lines: this.resultLines,
                hasChanges: this.resultLines.some((t)=>t.type !== "unchanged")
            }
        };
    }
    appendChunk(t) {
        const n = Qot.chunkLines(t), i = n.findIndex((u)=>u.startsWith("@@")), r = n.slice(i + 1), s = Qot.chunkStartLines(t);
        let o = !1, a = !1;
        for (const u of r)u.startsWith("@@") || u.startsWith("\\ No newline at end of file") || u.length === 0 || (u.startsWith("+") ? a = !0 : u.startsWith("-") ? o = !0 : (o = !0, a = !0));
        let c = o ? s.oldStart : s.oldStart + 1, l = a ? s.newStart : s.newStart + 1;
        for (const u of r){
            if (u.startsWith("@@") || u.startsWith("\\ No newline at end of file")) continue;
            if (u.startsWith("+")) {
                this.appendSyntheticGapIfNeeded(c, l);
                const p = u.slice(1);
                this.modifiedLines.push(p);
                const g = {
                    type: "added",
                    content: p,
                    originalLineNumber: void 0,
                    modifiedLineNumber: l++,
                    modifiedTokenLineNumber: this.modifiedTokenLineNumber++
                };
                this.resultLines.push(g), this.pendingAddedRows.push(g), this.lastModifiedAbsoluteLine = l - 1;
                continue;
            }
            if (u.startsWith("-")) {
                this.pendingAddedRows.length > 0 && this.attachInlineChangesToPendingRows(), this.appendSyntheticGapIfNeeded(c, l);
                const p = u.slice(1);
                this.originalLines.push(p);
                const g = {
                    type: "removed",
                    content: p,
                    originalLineNumber: c++,
                    modifiedLineNumber: void 0,
                    originalTokenLineNumber: this.originalTokenLineNumber++
                };
                this.resultLines.push(g), this.pendingRemovedRows.push(g), this.lastOriginalAbsoluteLine = c - 1;
                continue;
            }
            if (this.attachInlineChangesToPendingRows(), u.length === 0) continue;
            const h = u.startsWith(" ") ? u.slice(1) : u;
            this.appendSyntheticGapIfNeeded(c, l), this.originalLines.push(h), this.modifiedLines.push(h), this.resultLines.push({
                type: "unchanged",
                content: h,
                originalLineNumber: c++,
                modifiedLineNumber: l++,
                originalTokenLineNumber: this.originalTokenLineNumber++,
                modifiedTokenLineNumber: this.modifiedTokenLineNumber++
            }), this.lastOriginalAbsoluteLine = c - 1, this.lastModifiedAbsoluteLine = l - 1;
        }
        this.attachInlineChangesToPendingRows();
    }
    attachInlineChangesToPendingRows() {
        const t = Math.min(this.pendingRemovedRows.length, this.pendingAddedRows.length);
        for(let n = 0; n < t; n++){
            const i = this.pendingRemovedRows[n], r = this.pendingAddedRows[n], { oldChanges: s, newChanges: o } = u2l(i.content, r.content);
            s.length > 0 && (i.inlineChanges = s), o.length > 0 && (r.inlineChanges = o);
        }
        this.pendingRemovedRows.length = 0, this.pendingAddedRows.length = 0;
    }
    appendSyntheticGapIfNeeded(t, n) {
        if (this.lastOriginalAbsoluteLine === void 0 || this.lastModifiedAbsoluteLine === void 0) return;
        const i = t - this.lastOriginalAbsoluteLine - 1, r = n - this.lastModifiedAbsoluteLine - 1;
        if (i <= 0 || i !== r) {
            t - 1 > this.lastOriginalAbsoluteLine && (this.lastOriginalAbsoluteLine = t - 1), n - 1 > this.lastModifiedAbsoluteLine && (this.lastModifiedAbsoluteLine = n - 1);
            return;
        }
        for(let s = 1; s <= i; s++)this.resultLines.push({
            type: "unchanged",
            content: "",
            originalLineNumber: this.lastOriginalAbsoluteLine + s,
            modifiedLineNumber: this.lastModifiedAbsoluteLine + s,
            isSyntheticUnchanged: !0
        });
        this.lastOriginalAbsoluteLine = t - 1, this.lastModifiedAbsoluteLine = n - 1;
    }
};

}
