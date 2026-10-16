import { ARt, WZl } from "./diff-render-limits.js";
import { Mt } from "./index_197.js";
import { Y0p } from "./ipa.js";
import { O1t, n2e } from "./nca.js";
import { Jwv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var Vt_, R6n, Zpc, Qpc;
export { Qpc, R6n, Vt_, Zpc };
var __wakaru_Kt__initialized = false;
export function Kt_() {
if (__wakaru_Kt__initialized) return;
__wakaru_Kt__initialized = true;
"use strict";
E(), Mt(), ARt(), Vt_ = [
    "original",
    "modified"
], R6n = 2e4, Zpc = 5e4, Qpc = class {
    constructor(){
        this._rowFileLineNumbersByDiff = new WeakMap;
    }
    createDocument(t) {
        return {
            diffKey: t.diffKey,
            filePath: t.filePath,
            originalContent: t.originalContent,
            modifiedContent: t.modifiedContent,
            precomputedDiff: t.precomputedDiff,
            contentsLineSpace: t.contentsLineSpace,
            findMode: this.resolveMode(t)
        };
    }
    areDocumentsEqual(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++){
            const i = t[n], r = e[n];
            if (!i || !r || i.diffKey !== r.diffKey || i.filePath !== r.filePath || i.originalContent !== r.originalContent || i.modifiedContent !== r.modifiedContent || i.precomputedDiff !== r.precomputedDiff || i.contentsLineSpace !== r.contentsLineSpace || i.findMode !== r.findMode) return !1;
        }
        return !0;
    }
    resolveMode(t) {
        return Jwv({
            additions: t.additions,
            deletions: t.deletions,
            byteSize: t.byteSize
        }) ? "deferred" : "exact";
    }
    computeMatches(t, e, n) {
        const i = e.toLowerCase().trim();
        if (!i) return {
            matches: [],
            matchSummaryByPath: new Map
        };
        const r = [], s = new Map;
        let o = 0;
        for (const a of t){
            if (a.findMode === "deferred") {
                let d = !1;
                this.forEachMatch(a, i, {
                    sideOrder: [
                        "modified",
                        "original"
                    ]
                }, (h)=>{
                    r.push(h), d = !0;
                }), d && s.set(a.filePath, {
                    kind: "deferred"
                });
                continue;
            }
            if (o >= Zpc) break;
            const l = Zpc - o, c = n?.visibilityByDiffKey?.get(a.diffKey), u = c ? this._collectVisibleExactMatches(a, i, c, l, (d)=>r.push(d)) : this._collectExactMatches(a, i, l, (d)=>r.push(d));
            if (u > 0) {
                const d = u >= Math.min(R6n, l);
                s.set(a.filePath, {
                    kind: d ? "limited" : "exact",
                    count: u
                }), o += u;
            }
        }
        return {
            matches: r,
            matchSummaryByPath: s
        };
    }
    _collectExactMatches(t, e, n, i) {
        const r = Math.min(R6n, n);
        let s = 0;
        return this.forEachMatch(t, e, {
            maxMatches: r
        }, (o)=>{
            i(o), s++;
        }), s;
    }
    _collectVisibleExactMatches(t, e, n, i, r) {
        const s = t.precomputedDiff ?? n2e(t.originalContent, t.modifiedContent), o = this._visibleFindLineSets({
            precomputedDiff: s,
            contextLines: n.contextLines
        }), a = n.reveals, l = a !== void 0 && a.length > 0 ? Y0p({
            original: t.originalContent,
            modified: t.modifiedContent,
            precomputedDiff: s,
            contextLines: n.contextLines,
            expandableUnchanged: O1t(s),
            revealedRanges: a
        }) : void 0;
        let c = 0;
        t.modifiedContent.length > 0 && this.forEachMatch(t, e, {
            sideOrder: [
                "modified"
            ],
            allowOverlapping: !0,
            maxMatches: Math.min(R6n, i),
            includeMatch: (p)=>l ? l.modified.has(p.lineIndex + 1) : o.modified.has(p.lineIndex + 1)
        }, (p)=>{
            r(p), c++;
        });
        const u = c >= R6n || c >= i, d = R6n - c, h = i - c;
        return t.originalContent.length > 0 && !u && d > 0 && h > 0 && this.forEachMatch(t, e, {
            sideOrder: [
                "original"
            ],
            allowOverlapping: !0,
            maxMatches: Math.min(d, h),
            includeMatch: (p)=>o.removedOriginal.has(p.lineIndex + 1) && (!l || l.original.has(p.lineIndex + 1))
        }, (p)=>{
            r(p), c++;
        }), c;
    }
    _visibleFindLineSets(t) {
        const e = new Set, n = new Set, i = new Set, r = t.precomputedDiff.lines;
        for(let s = 0; s < r.length; s++)if (r[s].type !== "unchanged") for(let a = Math.max(0, s - t.contextLines); a <= Math.min(r.length - 1, s + t.contextLines); a++)r[a].isSyntheticUnchanged || i.add(a);
        for (const s of i){
            const o = r[s];
            o.modifiedLineNumber !== void 0 && e.add(o.modifiedLineNumber), o.type === "removed" && o.originalLineNumber !== void 0 && n.add(o.originalLineNumber);
        }
        return {
            modified: e,
            removedOriginal: n
        };
    }
    collectMatches(t, e, n = {}) {
        const i = [];
        return this.forEachMatch(t, e, n, (r)=>{
            i.push(r);
        }), i;
    }
    forEachMatch(t, e, n = {}, i) {
        if (!e) return;
        const r = n.sideOrder ?? Vt_;
        if (t.findMode === "deferred") {
            for (const o of r){
                const a = this.findFirstTextMatch(this._getTextForSide(t, o), e);
                if (!a) continue;
                const l = this._toDocumentMatch(t, o, a);
                if (!(n.includeMatch && !n.includeMatch(l))) {
                    i(l);
                    return;
                }
            }
            return;
        }
        let s = 0;
        for (const o of r)if (!this.forEachTextMatch(this._getTextForSide(t, o), e, {
            allowOverlapping: n.allowOverlapping
        }, (l)=>{
            const c = this._toDocumentMatch(t, o, l);
            return n.includeMatch && !n.includeMatch(c) ? !0 : (s++, !(i(c) === !1 || n.maxMatches !== void 0 && s >= n.maxMatches));
        })) return;
    }
    findFirstTextMatch(t, e, n = WZl) {
        if (!e || !t) return;
        const i = Math.min(t.length, n), r = this._findSingleCharMatchOffset(t, e, i);
        if (r !== void 0) return r >= 0 ? this._toTextMatchAtOffset(t, r, 1) : void 0;
        let s = 0, o = 0;
        for(let a = 0; a < i; a++){
            const l = t.charCodeAt(a);
            if (l === 13) {
                a + 1 < i && t.charCodeAt(a + 1) === 10 && a++, s++, o = 0;
                continue;
            }
            if (l === 10) {
                s++, o = 0;
                continue;
            }
            if (this._textRegionMatchesQueryCaseInsensitive(t, a, e, i)) return {
                lineIndex: s,
                startCol: o,
                length: e.length
            };
            o++;
        }
    }
    _findSingleCharMatchOffset(t, e, n) {
        if (e.length !== 1) return;
        const i = e.charCodeAt(0);
        if (i === 13 || i === 10) return -1;
        const r = t.length > n ? t.slice(0, n) : t;
        if (i >= 97 && i <= 122) {
            const o = r.indexOf(e), a = r.indexOf(e.toUpperCase()), l = o >= 0 ? o : void 0, c = a >= 0 ? a : void 0;
            return l === void 0 && c === void 0 ? -1 : l === void 0 ? c : c === void 0 ? l : Math.min(l, c);
        }
        if (i > 127) return;
        const s = r.indexOf(e);
        return s >= 0 ? s : -1;
    }
    _toTextMatchAtOffset(t, e, n) {
        let i = 0, r = 0;
        for(let s = 0; s < e; s++){
            const o = t.charCodeAt(s);
            if (o === 13) {
                s + 1 < e && t.charCodeAt(s + 1) === 10 && s++, i++, r = 0;
                continue;
            }
            if (o === 10) {
                i++, r = 0;
                continue;
            }
            r++;
        }
        return {
            lineIndex: i,
            startCol: r,
            length: n
        };
    }
    findTextMatches(t, e, n = {}) {
        const i = [];
        return this.forEachTextMatch(t, e, n, (r)=>{
            i.push(r);
        }), i;
    }
    forEachTextMatch(t, e, n = {}, i) {
        if (!e || !t) return !0;
        const r = t.split(/\r\n|\r|\n/), s = n.allowOverlapping ? 1 : e.length;
        for(let o = 0; o < r.length; o++){
            const a = r[o].toLowerCase();
            let l = 0;
            for(; l < a.length;){
                const c = a.indexOf(e, l);
                if (c === -1) break;
                if (i({
                    lineIndex: o,
                    startCol: c,
                    length: e.length
                }) === !1) return !1;
                l = c + s;
            }
        }
        return !0;
    }
    _toDocumentMatch(t, e, n) {
        return {
            diffKey: t.diffKey,
            filePath: t.filePath,
            side: e,
            lineIndex: this._toFileLineIndex(t, e, n.lineIndex),
            startCol: n.startCol,
            length: n.length
        };
    }
    _toFileLineIndex(t, e, n) {
        if (t.contentsLineSpace !== "diffRows" || t.precomputedDiff === void 0) return n;
        const i = this._getRowFileLineNumbers(t.precomputedDiff)[e][n];
        return i !== void 0 ? i - 1 : n;
    }
    _getRowFileLineNumbers(t) {
        let e = this._rowFileLineNumbersByDiff.get(t);
        if (!e) {
            const n = [], i = [];
            for (const r of t.lines)r.isSyntheticUnchanged || (r.originalLineNumber !== void 0 && n.push(r.originalLineNumber), r.modifiedLineNumber !== void 0 && i.push(r.modifiedLineNumber));
            e = {
                original: n,
                modified: i
            }, this._rowFileLineNumbersByDiff.set(t, e);
        }
        return e;
    }
    _getTextForSide(t, e) {
        return e === "modified" ? t.modifiedContent : t.originalContent;
    }
    _textRegionMatchesQueryCaseInsensitive(t, e, n, i) {
        if (e + n.length > i) return !1;
        for(let r = 0; r < n.length; r++){
            const s = t.charAt(e + r);
            if (!s || s === "\r" || s === `
` || s.toLowerCase() !== n[r]) return !1;
        }
        return !0;
    }
};

}
