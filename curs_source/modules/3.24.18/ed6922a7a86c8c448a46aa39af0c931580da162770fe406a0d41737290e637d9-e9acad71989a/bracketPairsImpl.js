import { DP, He, Se, bt, cn, ve, we } from "./HVr.js";
import { dr, iNt } from "./arrays.js";
import { IFc, qgg } from "./bracketPairsTree.js";
import { Dvi, LAe, RQr, zgg } from "./qIc.js";
import { dt, qi } from "./range.js";
import { bfi, mle } from "./richEditBrackets.js";
import { qmn } from "./supports_2.js";
import { x } from "./tslib.es6.js";
var RFc, Mvi, Eze;
export { Eze, Mvi, RFc };
var __wakaru_Kgg_initialized = false;
export function Kgg() {
if (__wakaru_Kgg_initialized) return;
__wakaru_Kgg_initialized = true;
"use strict";
x(), dr(), bt(), Se(), qi(), qmn(), bfi(), qgg(), RFc = class extends we {
    constructor(e, t){
        super(), this.textModel = e, this.languageConfigurationService = t, this.bracketPairsTree = this._register(new cn), this.onDidChangeEmitter = this._register(new ve), this.onDidChange = this.onDidChangeEmitter.event, this.bracketsRequested = !1;
    }
    get canBuildAST() {
        return this.textModel.getValueLength() <= 5e6;
    }
    handleLanguageConfigurationServiceChange(e) {
        (!e.languageId || this.bracketPairsTree.value?.object.didLanguageChange(e.languageId)) && (this.bracketPairsTree.clear(), this.updateBracketPairsTree());
    }
    handleDidChangeOptions(e) {
        this.bracketPairsTree.clear(), this.updateBracketPairsTree();
    }
    handleDidChangeLanguage(e) {
        this.bracketPairsTree.clear(), this.updateBracketPairsTree();
    }
    handleDidChangeContent(e) {
        this.bracketPairsTree.value?.object.handleContentChanged(e);
    }
    handleDidChangeBackgroundTokenizationState() {
        this.bracketPairsTree.value?.object.handleDidChangeBackgroundTokenizationState();
    }
    handleDidChangeTokens(e) {
        this.bracketPairsTree.value?.object.handleDidChangeTokens(e);
    }
    updateBracketPairsTree() {
        if (this.bracketsRequested && this.canBuildAST) {
            if (!this.bracketPairsTree.value) {
                const e = new He;
                this.bracketPairsTree.value = zgg(e.add(new IFc(this.textModel, (t)=>this.languageConfigurationService.getLanguageConfiguration(t))), e), e.add(this.bracketPairsTree.value.object.onDidChange((t)=>this.onDidChangeEmitter.fire(t))), this.onDidChangeEmitter.fire();
            }
        } else this.bracketPairsTree.value && (this.bracketPairsTree.clear(), this.onDidChangeEmitter.fire());
    }
    getBracketPairsInRange(e) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(e, !1) || iNt.empty;
    }
    getBracketPairsInRangeWithMinIndentation(e) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(e, !0) || iNt.empty;
    }
    getBracketsInRange(e, t = !1) {
        return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketsInRange(e, t) || iNt.empty;
    }
    findMatchingBracketUp(e, t, n) {
        const i = this.textModel.validatePosition(t), r = this.textModel.getLanguageIdAtPosition(i.lineNumber, i.column);
        if (this.canBuildAST) {
            const s = this.languageConfigurationService.getLanguageConfiguration(r).bracketsNew.getClosingBracketInfo(e);
            if (!s) return null;
            const o = this.getBracketPairsInRange(dt.fromPositions(t, t)).findLast((a)=>s.closes(a.openingBracketInfo));
            return o ? o.openingBracketRange : null;
        } else {
            const s = e.toLowerCase(), o = this.languageConfigurationService.getLanguageConfiguration(r).brackets;
            if (!o) return null;
            const a = o.textIsBracket[s];
            return a ? Dvi(this._findMatchingBracketUp(a, i, RQr(n))) : null;
        }
    }
    matchBracket(e, t) {
        if (this.canBuildAST) {
            const n = this.getBracketPairsInRange(dt.fromPositions(e, e)).filter((i)=>i.closingBracketRange !== void 0 && (i.openingBracketRange.containsPosition(e) || i.closingBracketRange.containsPosition(e))).findLastMaxBy(DP((i)=>i.openingBracketRange.containsPosition(e) ? i.openingBracketRange : i.closingBracketRange, dt.compareRangesUsingStarts));
            return n ? [
                n.openingBracketRange,
                n.closingBracketRange
            ] : null;
        } else {
            const n = RQr(t);
            return this._matchBracket(this.textModel.validatePosition(e), n);
        }
    }
    _establishBracketSearchOffsets(e, t, n, i) {
        const r = t.getCount(), s = t.getLanguageId(i);
        let o = Math.max(0, e.column - 1 - n.maxBracketLength);
        for(let c = i - 1; c >= 0; c--){
            const l = t.getEndOffset(c);
            if (l <= o) break;
            if (LAe(t.getStandardTokenType(c)) || t.getLanguageId(c) !== s) {
                o = l;
                break;
            }
        }
        let a = Math.min(t.getLineContent().length, e.column - 1 + n.maxBracketLength);
        for(let c = i + 1; c < r; c++){
            const l = t.getStartOffset(c);
            if (l >= a) break;
            if (LAe(t.getStandardTokenType(c)) || t.getLanguageId(c) !== s) {
                a = l;
                break;
            }
        }
        return {
            searchStartOffset: o,
            searchEndOffset: a
        };
    }
    _matchBracket(e, t) {
        const n = e.lineNumber, i = this.textModel.tokenization.getLineTokens(n), r = this.textModel.getLineContent(n), s = i.findTokenIndexAtOffset(e.column - 1);
        if (s < 0) return null;
        const o = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(s)).brackets;
        if (o && !LAe(i.getStandardTokenType(s))) {
            let { searchStartOffset: a, searchEndOffset: c } = this._establishBracketSearchOffsets(e, i, o, s), l = null;
            for(;;){
                const u = mle.findNextBracketInRange(o.forwardRegex, n, r, a, c);
                if (!u) break;
                if (u.startColumn <= e.column && e.column <= u.endColumn) {
                    const h = r.substring(u.startColumn - 1, u.endColumn - 1).toLowerCase(), p = this._matchFoundBracket(u, o.textIsBracket[h], o.textIsOpenBracket[h], t);
                    if (p) {
                        if (p instanceof Eze) return null;
                        l = p;
                    }
                }
                a = u.endColumn - 1;
            }
            if (l) return l;
        }
        if (s > 0 && i.getStartOffset(s) === e.column - 1) {
            const a = s - 1, c = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(a)).brackets;
            if (c && !LAe(i.getStandardTokenType(a))) {
                const { searchStartOffset: l, searchEndOffset: u } = this._establishBracketSearchOffsets(e, i, c, a), h = mle.findPrevBracketInRange(c.reversedRegex, n, r, l, u);
                if (h && h.startColumn <= e.column && e.column <= h.endColumn) {
                    const p = r.substring(h.startColumn - 1, h.endColumn - 1).toLowerCase(), g = this._matchFoundBracket(h, c.textIsBracket[p], c.textIsOpenBracket[p], t);
                    if (g) return g instanceof Eze ? null : g;
                }
            }
        }
        return null;
    }
    _matchFoundBracket(e, t, n, i) {
        if (!t) return null;
        const r = n ? this._findMatchingBracketDown(t, e.getEndPosition(), i) : this._findMatchingBracketUp(t, e.getStartPosition(), i);
        return r ? r instanceof Eze ? r : [
            e,
            r
        ] : null;
    }
    _findMatchingBracketUp(e, t, n) {
        const i = e.languageId, r = e.reversedRegex;
        let s = -1, o = 0;
        const a = (c, l, u, h)=>{
            for(;;){
                if (n && ++o % 100 === 0 && !n()) return Eze.INSTANCE;
                const p = mle.findPrevBracketInRange(r, c, l, u, h);
                if (!p) break;
                const g = l.substring(p.startColumn - 1, p.endColumn - 1).toLowerCase();
                if (e.isOpen(g) ? s++ : e.isClose(g) && s--, s === 0) return p;
                h = p.startColumn - 1;
            }
            return null;
        };
        for(let c = t.lineNumber; c >= 1; c--){
            const l = this.textModel.tokenization.getLineTokens(c), u = l.getCount(), h = this.textModel.getLineContent(c);
            let p = u - 1, g = h.length, f = h.length;
            c === t.lineNumber && (p = l.findTokenIndexAtOffset(t.column - 1), g = t.column - 1, f = t.column - 1);
            let v = !0;
            for(; p >= 0; p--){
                const b = l.getLanguageId(p) === i && !LAe(l.getStandardTokenType(p));
                if (b) v ? g = l.getStartOffset(p) : (g = l.getStartOffset(p), f = l.getEndOffset(p));
                else if (v && g !== f) {
                    const y = a(c, h, g, f);
                    if (y) return y;
                }
                v = b;
            }
            if (v && g !== f) {
                const b = a(c, h, g, f);
                if (b) return b;
            }
        }
        return null;
    }
    _findMatchingBracketDown(e, t, n) {
        const i = e.languageId, r = e.forwardRegex;
        let s = 1, o = 0;
        const a = (l, u, h, p)=>{
            for(;;){
                if (n && ++o % 100 === 0 && !n()) return Eze.INSTANCE;
                const g = mle.findNextBracketInRange(r, l, u, h, p);
                if (!g) break;
                const f = u.substring(g.startColumn - 1, g.endColumn - 1).toLowerCase();
                if (e.isOpen(f) ? s++ : e.isClose(f) && s--, s === 0) return g;
                h = g.endColumn - 1;
            }
            return null;
        }, c = this.textModel.getLineCount();
        for(let l = t.lineNumber; l <= c; l++){
            const u = this.textModel.tokenization.getLineTokens(l), h = u.getCount(), p = this.textModel.getLineContent(l);
            let g = 0, f = 0, v = 0;
            l === t.lineNumber && (g = u.findTokenIndexAtOffset(t.column - 1), f = t.column - 1, v = t.column - 1);
            let b = !0;
            for(; g < h; g++){
                const y = u.getLanguageId(g) === i && !LAe(u.getStandardTokenType(g));
                if (y) b || (f = u.getStartOffset(g)), v = u.getEndOffset(g);
                else if (b && f !== v) {
                    const T = a(l, p, f, v);
                    if (T) return T;
                }
                b = y;
            }
            if (b && f !== v) {
                const y = a(l, p, f, v);
                if (y) return y;
            }
        }
        return null;
    }
    findPrevBracket(e) {
        const t = this.textModel.validatePosition(e);
        if (this.canBuildAST) return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketBefore(t) || null;
        let n = null, i = null, r = null;
        for(let s = t.lineNumber; s >= 1; s--){
            const o = this.textModel.tokenization.getLineTokens(s), a = o.getCount(), c = this.textModel.getLineContent(s);
            let l = a - 1, u = c.length, h = c.length;
            if (s === t.lineNumber) {
                l = o.findTokenIndexAtOffset(t.column - 1), u = t.column - 1, h = t.column - 1;
                const g = o.getLanguageId(l);
                n !== g && (n = g, i = this.languageConfigurationService.getLanguageConfiguration(n).brackets, r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew);
            }
            let p = !0;
            for(; l >= 0; l--){
                const g = o.getLanguageId(l);
                if (n !== g) {
                    if (i && r && p && u !== h) {
                        const v = mle.findPrevBracketInRange(i.reversedRegex, s, c, u, h);
                        if (v) return this._toFoundBracket(r, v);
                        p = !1;
                    }
                    n = g, i = this.languageConfigurationService.getLanguageConfiguration(n).brackets, r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew;
                }
                const f = !!i && !LAe(o.getStandardTokenType(l));
                if (f) p ? u = o.getStartOffset(l) : (u = o.getStartOffset(l), h = o.getEndOffset(l));
                else if (r && i && p && u !== h) {
                    const v = mle.findPrevBracketInRange(i.reversedRegex, s, c, u, h);
                    if (v) return this._toFoundBracket(r, v);
                }
                p = f;
            }
            if (r && i && p && u !== h) {
                const g = mle.findPrevBracketInRange(i.reversedRegex, s, c, u, h);
                if (g) return this._toFoundBracket(r, g);
            }
        }
        return null;
    }
    findNextBracket(e) {
        const t = this.textModel.validatePosition(e);
        if (this.canBuildAST) return this.bracketsRequested = !0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketAfter(t) || null;
        const n = this.textModel.getLineCount();
        let i = null, r = null, s = null;
        for(let o = t.lineNumber; o <= n; o++){
            const a = this.textModel.tokenization.getLineTokens(o), c = a.getCount(), l = this.textModel.getLineContent(o);
            let u = 0, h = 0, p = 0;
            if (o === t.lineNumber) {
                u = a.findTokenIndexAtOffset(t.column - 1), h = t.column - 1, p = t.column - 1;
                const f = a.getLanguageId(u);
                i !== f && (i = f, r = this.languageConfigurationService.getLanguageConfiguration(i).brackets, s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew);
            }
            let g = !0;
            for(; u < c; u++){
                const f = a.getLanguageId(u);
                if (i !== f) {
                    if (s && r && g && h !== p) {
                        const b = mle.findNextBracketInRange(r.forwardRegex, o, l, h, p);
                        if (b) return this._toFoundBracket(s, b);
                        g = !1;
                    }
                    i = f, r = this.languageConfigurationService.getLanguageConfiguration(i).brackets, s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew;
                }
                const v = !!r && !LAe(a.getStandardTokenType(u));
                if (v) g || (h = a.getStartOffset(u)), p = a.getEndOffset(u);
                else if (s && r && g && h !== p) {
                    const b = mle.findNextBracketInRange(r.forwardRegex, o, l, h, p);
                    if (b) return this._toFoundBracket(s, b);
                }
                g = v;
            }
            if (s && r && g && h !== p) {
                const f = mle.findNextBracketInRange(r.forwardRegex, o, l, h, p);
                if (f) return this._toFoundBracket(s, f);
            }
        }
        return null;
    }
    findEnclosingBrackets(e, t) {
        const n = this.textModel.validatePosition(e);
        if (this.canBuildAST) {
            const p = dt.fromPositions(n), g = this.getBracketPairsInRange(dt.fromPositions(n, n)).findLast((f)=>f.closingBracketRange !== void 0 && f.range.strictContainsRange(p));
            return g ? [
                g.openingBracketRange,
                g.closingBracketRange
            ] : null;
        }
        const i = RQr(t), r = this.textModel.getLineCount(), s = new Map;
        let o = [];
        const a = (p, g)=>{
            if (!s.has(p)) {
                const f = [];
                for(let v = 0, b = g ? g.brackets.length : 0; v < b; v++)f[v] = 0;
                s.set(p, f);
            }
            o = s.get(p);
        };
        let c = 0;
        const l = (p, g, f, v, b)=>{
            for(;;){
                if (i && ++c % 100 === 0 && !i()) return Eze.INSTANCE;
                const y = mle.findNextBracketInRange(p.forwardRegex, g, f, v, b);
                if (!y) break;
                const T = f.substring(y.startColumn - 1, y.endColumn - 1).toLowerCase(), E = p.textIsBracket[T];
                if (E && (E.isOpen(T) ? o[E.index]++ : E.isClose(T) && o[E.index]--, o[E.index] === -1)) return this._matchFoundBracket(y, E, !1, i);
                v = y.endColumn - 1;
            }
            return null;
        };
        let u = null, h = null;
        for(let p = n.lineNumber; p <= r; p++){
            const g = this.textModel.tokenization.getLineTokens(p), f = g.getCount(), v = this.textModel.getLineContent(p);
            let b = 0, y = 0, T = 0;
            if (p === n.lineNumber) {
                b = g.findTokenIndexAtOffset(n.column - 1), y = n.column - 1, T = n.column - 1;
                const A = g.getLanguageId(b);
                u !== A && (u = A, h = this.languageConfigurationService.getLanguageConfiguration(u).brackets, a(u, h));
            }
            let E = !0;
            for(; b < f; b++){
                const A = g.getLanguageId(b);
                if (u !== A) {
                    if (h && E && y !== T) {
                        const D = l(h, p, v, y, T);
                        if (D) return Dvi(D);
                        E = !1;
                    }
                    u = A, h = this.languageConfigurationService.getLanguageConfiguration(u).brackets, a(u, h);
                }
                const R = !!h && !LAe(g.getStandardTokenType(b));
                if (R) E || (y = g.getStartOffset(b)), T = g.getEndOffset(b);
                else if (h && E && y !== T) {
                    const D = l(h, p, v, y, T);
                    if (D) return Dvi(D);
                }
                E = R;
            }
            if (h && E && y !== T) {
                const A = l(h, p, v, y, T);
                if (A) return Dvi(A);
            }
        }
        return null;
    }
    _toFoundBracket(e, t) {
        if (!t) return null;
        let n = this.textModel.getValueInRange(t);
        n = n.toLowerCase();
        const i = e.getBracketInfo(n);
        return i ? {
            range: t,
            bracketInfo: i
        } : null;
    }
}, Mvi = class {
    constructor(){
        this._searchCanceledBrand = void 0;
    }
}, Mvi.INSTANCE = new Mvi, Eze = Mvi;

}
