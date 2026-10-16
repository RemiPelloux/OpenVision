import { Gt, I5, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { bo, sdn } from "./arrays.js";
import { Y2y, i8d } from "./bracketPairsTree.js";
import { Qs, qt } from "./range.js";
import { awe, lwr } from "./richEditBrackets.js";
import { Lii } from "./supports_2.js";
import { E } from "./tslib.es6.js";
import { $jo, X$e, X2y, g0r } from "./ze.js";
var s8d, f0r, iyt;
export { f0r, iyt, s8d };
var __wakaru_Z2y_initialized = false;
export function Z2y() {
if (__wakaru_Z2y_initialized) return;
__wakaru_Z2y_initialized = true;
"use strict";
E(), bo(), Gt(), Qe(), Qs(), Lii(), lwr(), Y2y(), s8d = class extends st {
    constructor(t, e){
        super(), this.textModel = t, this.languageConfigurationService = e, this.bracketPairsTree = this._register(new Vn), this.onDidChangeEmitter = this._register(new tt), this.onDidChange = this.onDidChangeEmitter.event, this.bracketsRequested = !1;
    }
    get canBuildAST() {
        return this.textModel.getValueLength() <= 5e6;
    }
    handleLanguageConfigurationServiceChange(t) {
        (!t.languageId || this.bracketPairsTree.value?.object.didLanguageChange(t.languageId)) && (this.bracketPairsTree.clear(), this.updateBracketPairsTree());
    }
    handleDidChangeOptions(t) {
        this.bracketPairsTree.clear(), this.updateBracketPairsTree();
    }
    handleDidChangeLanguage(t) {
        this.bracketPairsTree.clear(), this.updateBracketPairsTree();
    }
    handleDidChangeContent(t) {
        this.bracketPairsTree.value?.object.handleContentChanged(t);
    }
    handleDidChangeBackgroundTokenizationState() {
        this.bracketPairsTree.value?.object.handleDidChangeBackgroundTokenizationState();
    }
    handleDidChangeTokens(t) {
        this.bracketPairsTree.value?.object.handleDidChangeTokens(t);
    }
    updateBracketPairsTree() {
        if (this.bracketsRequested && this.canBuildAST) {
            if (!this.bracketPairsTree.value) {
                const t = new Nt;
                this.bracketPairsTree.value = X2y(t.add(new i8d(this.textModel, (e)=>this.languageConfigurationService.getLanguageConfiguration(e))), t), t.add(this.bracketPairsTree.value.object.onDidChange((e)=>this.onDidChangeEmitter.fire(e))), this.onDidChangeEmitter.fire();
            }
        } else this.bracketPairsTree.value && (this.bracketPairsTree.clear(), this.onDidChangeEmitter.fire());
    }
    getBracketPairsInRange(t) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(t, !1) || sdn.empty;
    }
    getBracketPairsInRangeWithMinIndentation(t) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(t, !0) || sdn.empty;
    }
    getBracketsInRange(t, e = !1) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketsInRange(t, e) || sdn.empty;
    }
    findMatchingBracketUp(t, e, n) {
        const i = this.textModel.validatePosition(e), r = this.textModel.getLanguageIdAtPosition(i.lineNumber, i.column);
        if (this.canBuildAST) {
            const s = this.languageConfigurationService.getLanguageConfiguration(r).bracketsNew.getClosingBracketInfo(t);
            if (!s) return null;
            const o = this.getBracketPairsInRange(qt.fromPositions(e, e)).findLast((a)=>s.closes(a.openingBracketInfo));
            return o ? o.openingBracketRange : null;
        } else {
            const s = t.toLowerCase(), o = this.languageConfigurationService.getLanguageConfiguration(r).brackets;
            if (!o) return null;
            const a = o.textIsBracket[s];
            return a ? g0r(this._findMatchingBracketUp(a, i, $jo(n))) : null;
        }
    }
    matchBracket(t, e) {
        if (this.canBuildAST) {
            const n = this.getBracketPairsInRange(qt.fromPositions(t, t)).filter((i)=>i.closingBracketRange !== void 0 && (i.openingBracketRange.containsPosition(t) || i.closingBracketRange.containsPosition(t))).findLastMaxBy(I5((i)=>i.openingBracketRange.containsPosition(t) ? i.openingBracketRange : i.closingBracketRange, qt.compareRangesUsingStarts));
            return n ? [
                n.openingBracketRange,
                n.closingBracketRange
            ] : null;
        } else {
            const n = $jo(e);
            return this._matchBracket(this.textModel.validatePosition(t), n);
        }
    }
    _establishBracketSearchOffsets(t, e, n, i) {
        const r = e.getCount(), s = e.getLanguageId(i);
        let o = Math.max(0, t.column - 1 - n.maxBracketLength);
        for(let l = i - 1; l >= 0; l--){
            const c = e.getEndOffset(l);
            if (c <= o) break;
            if (X$e(e.getStandardTokenType(l)) || e.getLanguageId(l) !== s) {
                o = c;
                break;
            }
        }
        let a = Math.min(e.getLineContent().length, t.column - 1 + n.maxBracketLength);
        for(let l = i + 1; l < r; l++){
            const c = e.getStartOffset(l);
            if (c >= a) break;
            if (X$e(e.getStandardTokenType(l)) || e.getLanguageId(l) !== s) {
                a = c;
                break;
            }
        }
        return {
            searchStartOffset: o,
            searchEndOffset: a
        };
    }
    _matchBracket(t, e) {
        const n = t.lineNumber, i = this.textModel.tokenization.getLineTokens(n), r = this.textModel.getLineContent(n), s = i.findTokenIndexAtOffset(t.column - 1);
        if (s < 0) return null;
        const o = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(s)).brackets;
        if (o && !X$e(i.getStandardTokenType(s))) {
            let { searchStartOffset: a, searchEndOffset: l } = this._establishBracketSearchOffsets(t, i, o, s), c = null;
            for(;;){
                const u = awe.findNextBracketInRange(o.forwardRegex, n, r, a, l);
                if (!u) break;
                if (u.startColumn <= t.column && t.column <= u.endColumn) {
                    const d = r.substring(u.startColumn - 1, u.endColumn - 1).toLowerCase(), h = this._matchFoundBracket(u, o.textIsBracket[d], o.textIsOpenBracket[d], e);
                    if (h) {
                        if (h instanceof iyt) return null;
                        c = h;
                    }
                }
                a = u.endColumn - 1;
            }
            if (c) return c;
        }
        if (s > 0 && i.getStartOffset(s) === t.column - 1) {
            const a = s - 1, l = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(a)).brackets;
            if (l && !X$e(i.getStandardTokenType(a))) {
                const { searchStartOffset: c, searchEndOffset: u } = this._establishBracketSearchOffsets(t, i, l, a), d = awe.findPrevBracketInRange(l.reversedRegex, n, r, c, u);
                if (d && d.startColumn <= t.column && t.column <= d.endColumn) {
                    const h = r.substring(d.startColumn - 1, d.endColumn - 1).toLowerCase(), p = this._matchFoundBracket(d, l.textIsBracket[h], l.textIsOpenBracket[h], e);
                    if (p) return p instanceof iyt ? null : p;
                }
            }
        }
        return null;
    }
    _matchFoundBracket(t, e, n, i) {
        if (!e) return null;
        const r = n ? this._findMatchingBracketDown(e, t.getEndPosition(), i) : this._findMatchingBracketUp(e, t.getStartPosition(), i);
        return r ? r instanceof iyt ? r : [
            t,
            r
        ] : null;
    }
    _findMatchingBracketUp(t, e, n) {
        const i = t.languageId, r = t.reversedRegex;
        let s = -1, o = 0;
        const a = (l, c, u, d)=>{
            for(;;){
                if (n && ++o % 100 === 0 && !n()) return iyt.INSTANCE;
                const h = awe.findPrevBracketInRange(r, l, c, u, d);
                if (!h) break;
                const p = c.substring(h.startColumn - 1, h.endColumn - 1).toLowerCase();
                if (t.isOpen(p) ? s++ : t.isClose(p) && s--, s === 0) return h;
                d = h.startColumn - 1;
            }
            return null;
        };
        for(let l = e.lineNumber; l >= 1; l--){
            const c = this.textModel.tokenization.getLineTokens(l), u = c.getCount(), d = this.textModel.getLineContent(l);
            let h = u - 1, p = d.length, g = d.length;
            l === e.lineNumber && (h = c.findTokenIndexAtOffset(e.column - 1), p = e.column - 1, g = e.column - 1);
            let f = !0;
            for(; h >= 0; h--){
                const _ = c.getLanguageId(h) === i && !X$e(c.getStandardTokenType(h));
                if (_) f ? p = c.getStartOffset(h) : (p = c.getStartOffset(h), g = c.getEndOffset(h));
                else if (f && p !== g) {
                    const b = a(l, d, p, g);
                    if (b) return b;
                }
                f = _;
            }
            if (f && p !== g) {
                const _ = a(l, d, p, g);
                if (_) return _;
            }
        }
        return null;
    }
    _findMatchingBracketDown(t, e, n) {
        const i = t.languageId, r = t.forwardRegex;
        let s = 1, o = 0;
        const a = (c, u, d, h)=>{
            for(;;){
                if (n && ++o % 100 === 0 && !n()) return iyt.INSTANCE;
                const p = awe.findNextBracketInRange(r, c, u, d, h);
                if (!p) break;
                const g = u.substring(p.startColumn - 1, p.endColumn - 1).toLowerCase();
                if (t.isOpen(g) ? s++ : t.isClose(g) && s--, s === 0) return p;
                d = p.endColumn - 1;
            }
            return null;
        }, l = this.textModel.getLineCount();
        for(let c = e.lineNumber; c <= l; c++){
            const u = this.textModel.tokenization.getLineTokens(c), d = u.getCount(), h = this.textModel.getLineContent(c);
            let p = 0, g = 0, f = 0;
            c === e.lineNumber && (p = u.findTokenIndexAtOffset(e.column - 1), g = e.column - 1, f = e.column - 1);
            let _ = !0;
            for(; p < d; p++){
                const b = u.getLanguageId(p) === i && !X$e(u.getStandardTokenType(p));
                if (b) _ || (g = u.getStartOffset(p)), f = u.getEndOffset(p);
                else if (_ && g !== f) {
                    const y = a(c, h, g, f);
                    if (y) return y;
                }
                _ = b;
            }
            if (_ && g !== f) {
                const b = a(c, h, g, f);
                if (b) return b;
            }
        }
        return null;
    }
    findPrevBracket(t) {
        const e = this.textModel.validatePosition(t);
        if (this.canBuildAST) return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketBefore(e) || null;
        let n = null, i = null, r = null;
        for(let s = e.lineNumber; s >= 1; s--){
            const o = this.textModel.tokenization.getLineTokens(s), a = o.getCount(), l = this.textModel.getLineContent(s);
            let c = a - 1, u = l.length, d = l.length;
            if (s === e.lineNumber) {
                c = o.findTokenIndexAtOffset(e.column - 1), u = e.column - 1, d = e.column - 1;
                const p = o.getLanguageId(c);
                n !== p && (n = p, i = this.languageConfigurationService.getLanguageConfiguration(n).brackets, r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew);
            }
            let h = !0;
            for(; c >= 0; c--){
                const p = o.getLanguageId(c);
                if (n !== p) {
                    if (i && r && h && u !== d) {
                        const f = awe.findPrevBracketInRange(i.reversedRegex, s, l, u, d);
                        if (f) return this._toFoundBracket(r, f);
                        h = !1;
                    }
                    n = p, i = this.languageConfigurationService.getLanguageConfiguration(n).brackets, r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew;
                }
                const g = !!i && !X$e(o.getStandardTokenType(c));
                if (g) h ? u = o.getStartOffset(c) : (u = o.getStartOffset(c), d = o.getEndOffset(c));
                else if (r && i && h && u !== d) {
                    const f = awe.findPrevBracketInRange(i.reversedRegex, s, l, u, d);
                    if (f) return this._toFoundBracket(r, f);
                }
                h = g;
            }
            if (r && i && h && u !== d) {
                const p = awe.findPrevBracketInRange(i.reversedRegex, s, l, u, d);
                if (p) return this._toFoundBracket(r, p);
            }
        }
        return null;
    }
    findNextBracket(t) {
        const e = this.textModel.validatePosition(t);
        if (this.canBuildAST) return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketAfter(e) || null;
        const n = this.textModel.getLineCount();
        let i = null, r = null, s = null;
        for(let o = e.lineNumber; o <= n; o++){
            const a = this.textModel.tokenization.getLineTokens(o), l = a.getCount(), c = this.textModel.getLineContent(o);
            let u = 0, d = 0, h = 0;
            if (o === e.lineNumber) {
                u = a.findTokenIndexAtOffset(e.column - 1), d = e.column - 1, h = e.column - 1;
                const g = a.getLanguageId(u);
                i !== g && (i = g, r = this.languageConfigurationService.getLanguageConfiguration(i).brackets, s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew);
            }
            let p = !0;
            for(; u < l; u++){
                const g = a.getLanguageId(u);
                if (i !== g) {
                    if (s && r && p && d !== h) {
                        const _ = awe.findNextBracketInRange(r.forwardRegex, o, c, d, h);
                        if (_) return this._toFoundBracket(s, _);
                        p = !1;
                    }
                    i = g, r = this.languageConfigurationService.getLanguageConfiguration(i).brackets, s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew;
                }
                const f = !!r && !X$e(a.getStandardTokenType(u));
                if (f) p || (d = a.getStartOffset(u)), h = a.getEndOffset(u);
                else if (s && r && p && d !== h) {
                    const _ = awe.findNextBracketInRange(r.forwardRegex, o, c, d, h);
                    if (_) return this._toFoundBracket(s, _);
                }
                p = f;
            }
            if (s && r && p && d !== h) {
                const g = awe.findNextBracketInRange(r.forwardRegex, o, c, d, h);
                if (g) return this._toFoundBracket(s, g);
            }
        }
        return null;
    }
    findEnclosingBrackets(t, e) {
        const n = this.textModel.validatePosition(t);
        if (this.canBuildAST) {
            const h = qt.fromPositions(n), p = this.getBracketPairsInRange(qt.fromPositions(n, n)).findLast((g)=>g.closingBracketRange !== void 0 && g.range.strictContainsRange(h));
            return p ? [
                p.openingBracketRange,
                p.closingBracketRange
            ] : null;
        }
        const i = $jo(e), r = this.textModel.getLineCount(), s = new Map;
        let o = [];
        const a = (h, p)=>{
            if (!s.has(h)) {
                const g = [];
                for(let f = 0, _ = p ? p.brackets.length : 0; f < _; f++)g[f] = 0;
                s.set(h, g);
            }
            o = s.get(h);
        };
        let l = 0;
        const c = (h, p, g, f, _)=>{
            for(;;){
                if (i && ++l % 100 === 0 && !i()) return iyt.INSTANCE;
                const b = awe.findNextBracketInRange(h.forwardRegex, p, g, f, _);
                if (!b) break;
                const y = g.substring(b.startColumn - 1, b.endColumn - 1).toLowerCase(), S = h.textIsBracket[y];
                if (S && (S.isOpen(y) ? o[S.index]++ : S.isClose(y) && o[S.index]--, o[S.index] === -1)) return this._matchFoundBracket(b, S, !1, i);
                f = b.endColumn - 1;
            }
            return null;
        };
        let u = null, d = null;
        for(let h = n.lineNumber; h <= r; h++){
            const p = this.textModel.tokenization.getLineTokens(h), g = p.getCount(), f = this.textModel.getLineContent(h);
            let _ = 0, b = 0, y = 0;
            if (h === n.lineNumber) {
                _ = p.findTokenIndexAtOffset(n.column - 1), b = n.column - 1, y = n.column - 1;
                const k = p.getLanguageId(_);
                u !== k && (u = k, d = this.languageConfigurationService.getLanguageConfiguration(u).brackets, a(u, d));
            }
            let S = !0;
            for(; _ < g; _++){
                const k = p.getLanguageId(_);
                if (u !== k) {
                    if (d && S && b !== y) {
                        const T = c(d, h, f, b, y);
                        if (T) return g0r(T);
                        S = !1;
                    }
                    u = k, d = this.languageConfigurationService.getLanguageConfiguration(u).brackets, a(u, d);
                }
                const C = !!d && !X$e(p.getStandardTokenType(_));
                if (C) S || (b = p.getStartOffset(_)), y = p.getEndOffset(_);
                else if (d && S && b !== y) {
                    const T = c(d, h, f, b, y);
                    if (T) return g0r(T);
                }
                S = C;
            }
            if (d && S && b !== y) {
                const k = c(d, h, f, b, y);
                if (k) return g0r(k);
            }
        }
        return null;
    }
    _toFoundBracket(t, e) {
        if (!e) return null;
        let n = this.textModel.getValueInRange(e);
        n = n.toLowerCase();
        const i = t.getBracketInfo(n);
        return i ? {
            range: e,
            bracketInfo: i
        } : null;
    }
}, f0r = class {
    constructor(){
        this._searchCanceledBrand = void 0;
    }
}, f0r.INSTANCE = new f0r, iyt = f0r;

}
