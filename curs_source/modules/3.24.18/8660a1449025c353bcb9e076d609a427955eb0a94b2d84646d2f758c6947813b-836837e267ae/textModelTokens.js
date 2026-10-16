import { Ade, Di, Ei, xh } from "./Iwo.js";
import { BOe, qn } from "./async.js";
import { p$o, ufn } from "./contiguousMultilineTokensBuilder.js";
import { Jbt } from "./eolCounter.js";
import { U8d, kPy } from "./fixedArray.js";
import { DD, wd } from "./lineRange.js";
import { PD, SY } from "./lineTokens.js";
import { d$o } from "./nullTokenize.js";
import { Im, W3 } from "./offsetRange.js";
import { D3, Xw } from "./stopwatch.js";
import { E } from "./tslib.es6.js";
import { $8d, Pri, Zri } from "./ze.js";
var H8d, W8d, x0r, m$o, G8d, q8d;
export { G8d, H8d, W8d, m$o, q8d, x0r };
var __wakaru_g$o_initialized = false;
export function g$o() {
if (__wakaru_g$o_initialized) return;
__wakaru_g$o_initialized = true;
"use strict";
E(), qn(), Ei(), Di(), D3(), Jbt(), DD(), W3(), d$o(), kPy(), p$o(), SY(), H8d = class {
    constructor(t, e){
        this.tokenizationSupport = e, this.initialState = this.tokenizationSupport.getInitialState(), this.store = new x0r(t);
    }
    getStartState(t) {
        return this.store.getStartState(t, this.initialState);
    }
    getFirstInvalidLine() {
        return this.store.getFirstInvalidLine(this.initialState);
    }
}, W8d = class extends H8d {
    constructor(t, e, n, i){
        super(t, e), this._textModel = n, this._languageIdCodec = i;
    }
    updateTokensUntilLine(t, e) {
        const n = this._textModel.getLanguageId();
        for(;;){
            const i = this.getFirstInvalidLine();
            if (!i || i.lineNumber > e) break;
            const r = this._textModel.getLineContent(i.lineNumber), s = Zri(this._languageIdCodec, n, this.tokenizationSupport, r, !0, i.startState);
            t.add(i.lineNumber, s.tokens), this.store.setEndState(i.lineNumber, s.endState);
        }
    }
    getTokenTypeIfInsertingCharacter(t, e) {
        const n = this.getStartState(t.lineNumber);
        if (!n) return 0;
        const i = this._textModel.getLanguageId(), r = this._textModel.getLineContent(t.lineNumber), s = r.substring(0, t.column - 1) + e + r.substring(t.column - 1), o = Zri(this._languageIdCodec, i, this.tokenizationSupport, s, !0, n), a = new PD(o.tokens, s, this._languageIdCodec);
        if (a.getCount() === 0) return 0;
        const l = a.findTokenIndexAtOffset(t.column - 1);
        return a.getStandardTokenType(l);
    }
    tokenizeLinesAt(t, e) {
        const n = this.getStartState(t);
        if (!n) return null;
        const i = this._textModel.getLanguageId(), r = [];
        let s = n;
        for (const o of e){
            const a = Zri(this._languageIdCodec, i, this.tokenizationSupport, o, !0, s);
            r.push(new PD(a.tokens, o, this._languageIdCodec)), s = a.endState;
        }
        return r;
    }
    hasAccurateTokensForLine(t) {
        const e = this.store.getFirstInvalidEndStateLineNumberOrMax();
        return t < e;
    }
    isCheapToTokenize(t) {
        const e = this.store.getFirstInvalidEndStateLineNumberOrMax();
        return t < e || t === e && this._textModel.getLineLength(t) < 2048;
    }
    tokenizeHeuristically(t, e, n) {
        if (n <= this.store.getFirstInvalidEndStateLineNumberOrMax()) return {
            heuristicTokens: !1
        };
        if (e <= this.store.getFirstInvalidEndStateLineNumberOrMax()) return this.updateTokensUntilLine(t, n), {
            heuristicTokens: !1
        };
        let i = this.guessStartState(e);
        const r = this._textModel.getLanguageId();
        for(let s = e; s <= n; s++){
            const o = this._textModel.getLineContent(s), a = Zri(this._languageIdCodec, r, this.tokenizationSupport, o, !0, i);
            t.add(s, a.tokens), i = a.endState;
        }
        return {
            heuristicTokens: !0
        };
    }
    guessStartState(t) {
        let { likelyRelevantLines: e, initialState: n } = $8d(this._textModel, t, this);
        n || (n = this.tokenizationSupport.getInitialState());
        const i = this._textModel.getLanguageId();
        let r = n;
        for (const s of e)r = Zri(this._languageIdCodec, i, this.tokenizationSupport, s, !1, r).endState;
        return r;
    }
}, x0r = class {
    constructor(t){
        this.lineCount = t, this._tokenizationStateStore = new m$o, this._invalidEndStatesLineNumbers = new G8d, this._invalidEndStatesLineNumbers.addRange(new Im(1, t + 1));
    }
    getEndState(t) {
        return this._tokenizationStateStore.getEndState(t);
    }
    setEndState(t, e) {
        if (!e) throw new xh("Cannot set null/undefined state");
        this._invalidEndStatesLineNumbers.delete(t);
        const n = this._tokenizationStateStore.setEndState(t, e);
        return n && t < this.lineCount && this._invalidEndStatesLineNumbers.addRange(new Im(t + 1, t + 2)), n;
    }
    acceptChange(t, e) {
        this.lineCount += e - t.length, this._tokenizationStateStore.acceptChange(t, e), this._invalidEndStatesLineNumbers.addRangeAndResize(new Im(t.startLineNumber, t.endLineNumberExclusive), e);
    }
    acceptChanges(t) {
        for (const e of t){
            const [n] = Pri(e);
            this.acceptChange(new wd(e.range.startLineNumber, e.range.endLineNumber + 1), n + 1);
        }
    }
    invalidateEndStateRange(t) {
        this._invalidEndStatesLineNumbers.addRange(new Im(t.startLineNumber, t.endLineNumberExclusive));
    }
    getFirstInvalidEndStateLineNumber() {
        return this._invalidEndStatesLineNumbers.min;
    }
    getFirstInvalidEndStateLineNumberOrMax() {
        return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
    }
    allStatesValid() {
        return this._invalidEndStatesLineNumbers.min === null;
    }
    getStartState(t, e) {
        return t === 1 ? e : this.getEndState(t - 1);
    }
    getFirstInvalidLine(t) {
        const e = this.getFirstInvalidEndStateLineNumber();
        if (e === null) return null;
        const n = this.getStartState(e, t);
        if (!n) throw new xh("Start state must be defined");
        return {
            lineNumber: e,
            startState: n
        };
    }
}, m$o = class {
    constructor(){
        this._lineEndStates = new U8d(null);
    }
    getEndState(t) {
        return this._lineEndStates.get(t);
    }
    setEndState(t, e) {
        const n = this._lineEndStates.get(t);
        return n && n.equals(e) ? !1 : (this._lineEndStates.set(t, e), !0);
    }
    acceptChange(t, e) {
        let n = t.length;
        e > 0 && n > 0 && (n--, e--), this._lineEndStates.replace(t.startLineNumber, n, e);
    }
    acceptChanges(t) {
        for (const e of t){
            const [n] = Pri(e);
            this.acceptChange(new wd(e.range.startLineNumber, e.range.endLineNumber + 1), n + 1);
        }
    }
}, G8d = class {
    constructor(){
        this._ranges = [];
    }
    getRanges() {
        return this._ranges;
    }
    get min() {
        return this._ranges.length === 0 ? null : this._ranges[0].start;
    }
    removeMin() {
        if (this._ranges.length === 0) return null;
        const t = this._ranges[0];
        return t.start + 1 === t.endExclusive ? this._ranges.shift() : this._ranges[0] = new Im(t.start + 1, t.endExclusive), t.start;
    }
    delete(t) {
        const e = this._ranges.findIndex((n)=>n.contains(t));
        if (e !== -1) {
            const n = this._ranges[e];
            n.start === t ? n.endExclusive === t + 1 ? this._ranges.splice(e, 1) : this._ranges[e] = new Im(t + 1, n.endExclusive) : n.endExclusive === t + 1 ? this._ranges[e] = new Im(n.start, t) : this._ranges.splice(e, 1, new Im(n.start, t), new Im(t + 1, n.endExclusive));
        }
    }
    addRange(t) {
        Im.addRange(t, this._ranges);
    }
    addRangeAndResize(t, e) {
        let n = 0;
        for(; !(n >= this._ranges.length || t.start <= this._ranges[n].endExclusive);)n++;
        let i = n;
        for(; !(i >= this._ranges.length || t.endExclusive < this._ranges[i].start);)i++;
        const r = e - t.length;
        for(let s = i; s < this._ranges.length; s++)this._ranges[s] = this._ranges[s].delta(r);
        if (n === i) {
            const s = new Im(t.start, t.start + e);
            s.isEmpty || this._ranges.splice(n, 0, s);
        } else {
            const s = Math.min(t.start, this._ranges[n].start), o = Math.max(t.endExclusive, this._ranges[i - 1].endExclusive), a = new Im(s, o + r);
            a.isEmpty ? this._ranges.splice(n, i - n) : this._ranges.splice(n, i - n, a);
        }
    }
    toString() {
        return this._ranges.map((t)=>t.toString()).join(" + ");
    }
}, q8d = class {
    constructor(t, e){
        this._tokenizerWithStateStore = t, this._backgroundTokenStore = e, this._isDisposed = !1, this._isScheduled = !1;
    }
    dispose() {
        this._isDisposed = !0;
    }
    handleChanges() {
        this._beginBackgroundTokenization();
    }
    _beginBackgroundTokenization() {
        this._isScheduled || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize() || (this._isScheduled = !0, BOe((t)=>{
            this._isScheduled = !1, this._backgroundTokenizeWithDeadline(t);
        }));
    }
    _backgroundTokenizeWithDeadline(t) {
        const e = Date.now() + t.timeRemaining(), n = ()=>{
            this._isDisposed || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize() || (this._backgroundTokenizeForAtLeast1ms(), Date.now() < e ? Ade(n) : this._beginBackgroundTokenization());
        };
        n();
    }
    _backgroundTokenizeForAtLeast1ms() {
        const t = this._tokenizerWithStateStore._textModel.getLineCount(), e = new ufn, n = Xw.create(!1);
        do if (n.elapsed() > 1 || this._tokenizeOneInvalidLine(e) >= t) break;
        while (this._hasLinesToTokenize())
        this._backgroundTokenStore.setTokens(e.finalize()), this.checkFinished();
    }
    _hasLinesToTokenize() {
        return this._tokenizerWithStateStore ? !this._tokenizerWithStateStore.store.allStatesValid() : !1;
    }
    _tokenizeOneInvalidLine(t) {
        const e = this._tokenizerWithStateStore?.getFirstInvalidLine();
        return e ? (this._tokenizerWithStateStore.updateTokensUntilLine(t, e.lineNumber), e.lineNumber) : this._tokenizerWithStateStore._textModel.getLineCount() + 1;
    }
    checkFinished() {
        this._isDisposed || this._tokenizerWithStateStore.store.allStatesValid() && this._backgroundTokenStore.backgroundTokenizationFinished();
    }
    requestTokens(t, e) {
        this._tokenizerWithStateStore.store.invalidateEndStateRange(new wd(t, e));
    }
};

}
