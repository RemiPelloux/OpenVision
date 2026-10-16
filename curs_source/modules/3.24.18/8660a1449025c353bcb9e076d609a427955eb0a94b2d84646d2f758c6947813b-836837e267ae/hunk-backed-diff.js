import { FWe, RFe } from "./diff-lines.js";
import { WRp } from "./ipa.js";
import { Jwe, Kit, Lha, Phi } from "./nca.js";
import { E } from "./tslib.es6.js";
var GRp, qRp, fst, WMa, GMa, qMa;
export { GMa, GRp, WMa, fst, qMa, qRp };
var __wakaru_uE1_initialized = false;
export function uE1() {
if (__wakaru_uE1_initialized) return;
__wakaru_uE1_initialized = true;
"use strict";
E(), RFe(), GRp = Object.defineProperty, qRp = (t, e, n)=>e in t ? GRp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, fst = (t, e, n)=>qRp(t, typeof e != "symbol" ? e + "" : e, n), WMa = "\uFEFF", GMa = class bXs {
    constructor(e, n, i){
        this.matchPatch = i, fst(this, "normalizedModified"), fst(this, "modLines"), fst(this, "hunks"), fst(this, "resultLines", []), fst(this, "origCursor", 0), fst(this, "modCursor", 0), fst(this, "hasChanges", !1), this.normalizedModified = e, this.modLines = Jwe(e), this.hunks = bXs.parseHunks(n);
    }
    static build(e) {
        const n = Phi(e.modified);
        if (!Kit(n, FWe)) return new bXs(n, e.patch, e.matchPatch === !0).run();
    }
    run() {
        if (this.hunks.length === 0) return this.buildUnchangedResult();
        for (const e of this.hunks)if (!this.appendHunk(e)) return;
        if (!(this.modCursor > this.modLines.length)) {
            for(; this.modCursor < this.modLines.length;)this.emitUnchanged(this.modLines[this.modCursor]);
            return this.toResult();
        }
    }
    buildUnchangedResult() {
        const e = this.modLines.map((i, r)=>({
                type: "unchanged",
                content: i,
                originalLineNumber: r + 1,
                modifiedLineNumber: r + 1,
                originalTokenLineNumber: r + 1,
                modifiedTokenLineNumber: r + 1
            })), n = this.modifiedString();
        return {
            contents: {
                original: n,
                modified: n
            },
            diff: {
                lines: e,
                hasChanges: !1
            }
        };
    }
    appendHunk(e) {
        const n = e.newCount === 0 ? e.newStart : e.newStart - 1;
        if (n < this.modCursor || n > this.modLines.length) return !1;
        for(; this.modCursor < n;)this.emitUnchanged(this.modLines[this.modCursor]);
        const i = e.oldCount === 0 ? e.oldStart : e.oldStart - 1;
        if (this.origCursor !== i) return !1;
        const r = e.lines;
        let s = 0;
        for(; s < r.length;){
            const o = r[s], a = o.charAt(0);
            if (a !== "+" && a !== "-") {
                const h = a === " " ? o.slice(1) : o, p = this.modCursor < this.modLines.length ? this.modLines[this.modCursor] : h;
                if (this.matchPatch && !WRp(p, h, this.modCursor)) return !1;
                this.emitUnchanged(p), s++;
                continue;
            }
            const l = [];
            for(; s < r.length && r[s].startsWith("-");)l.push(r[s].slice(1)), s++;
            const c = [];
            for(; s < r.length && r[s].startsWith("+");){
                const h = r[s].slice(1), p = this.modCursor + c.length, g = p < this.modLines.length ? this.modLines[p] : h;
                if (this.matchPatch && !WRp(g, h, p)) return !1;
                c.push(g), s++;
            }
            (l.length > 0 || c.length > 0) && (this.hasChanges = !0);
            const u = this.matchPatch ? Math.min(l.length, c.length) : l.length === 1 && c.length === 1 ? 1 : 0, d = Array.from({
                length: u
            }, (h, p)=>Lha(l[p], c[p]));
            for(let h = 0; h < l.length; h++)this.resultLines.push({
                type: "removed",
                content: l[h],
                originalLineNumber: this.origCursor + 1,
                modifiedLineNumber: void 0,
                originalTokenLineNumber: this.origCursor + 1,
                inlineChanges: d[h]?.oldChanges.length ? d[h].oldChanges : void 0
            }), this.origCursor++;
            for(let h = 0; h < c.length; h++)this.resultLines.push({
                type: "added",
                content: c[h],
                originalLineNumber: void 0,
                modifiedLineNumber: this.modCursor + 1,
                modifiedTokenLineNumber: this.modCursor + 1,
                inlineChanges: d[h]?.newChanges.length ? d[h].newChanges : void 0
            }), this.modCursor++;
        }
        return !0;
    }
    emitUnchanged(e) {
        this.resultLines.push({
            type: "unchanged",
            content: e,
            originalLineNumber: this.origCursor + 1,
            modifiedLineNumber: this.modCursor + 1,
            originalTokenLineNumber: this.origCursor + 1,
            modifiedTokenLineNumber: this.modCursor + 1
        }), this.origCursor++, this.modCursor++;
    }
    toResult() {
        return {
            contents: {
                original: this.resultLines.filter((e)=>e.type !== "added").map((e)=>e.content).join(`
`),
                modified: this.modifiedString()
            },
            diff: {
                lines: this.resultLines,
                hasChanges: this.hasChanges
            }
        };
    }
    modifiedString() {
        return this.normalizedModified === "" ? "" : this.normalizedModified.endsWith(`
`) ? this.normalizedModified.slice(0, -1) : this.normalizedModified;
    }
    static parseHunks(e) {
        const n = Jwe(e), i = [];
        let r = 0, s = 0, o = 0, a = 0, l;
        const c = ()=>{
            l !== void 0 && (i.push({
                oldStart: r,
                oldCount: s,
                newStart: o,
                newCount: a,
                lines: l
            }), l = void 0);
        };
        for (const u of n){
            const d = u.startsWith("@@") ? bXs.HUNK_HEADER_REGEX.exec(u) : null;
            if (d) {
                c(), r = Number.parseInt(d[1], 10), s = d[2] === void 0 ? 1 : Number.parseInt(d[2], 10), o = Number.parseInt(d[3], 10), a = d[4] === void 0 ? 1 : Number.parseInt(d[4], 10), l = [];
                continue;
            }
            if (u.startsWith("diff --git ")) {
                c();
                continue;
            }
            l !== void 0 && (u.startsWith("\\") || l.push(u));
        }
        return c(), i;
    }
}, fst(GMa, "HUNK_HEADER_REGEX", /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), qMa = GMa;

}
