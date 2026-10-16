import { Zu, jn, sJ, si } from "./HVr.js";
import { bn, kge } from "./async.js";
import { kOt, tJr } from "./contiguousMultilineTokensBuilder.js";
import { kze } from "./eolCounter.js";
import { _fg, d3c } from "./fixedArray.js";
import { Vl, hA } from "./lineRange.js";
import { P7, uA } from "./lineTokens.js";
import { JQr } from "./nullTokenize.js";
import { Mh, uR } from "./offsetRange.js";
import { Xgn, ffn, p3c } from "./qIc.js";
import { Vy, aA } from "./stopwatch.js";
import { x } from "./tslib.es6.js";
var m3c, g3c, Vvi, nJr, f3c, v3c;
export { Vvi, f3c, g3c, m3c, nJr, v3c };
var __wakaru_iJr_initialized = false;
export function iJr() {
if (__wakaru_iJr_initialized) return;
__wakaru_iJr_initialized = true;
"use strict";
x(), bn(), si(), jn(), aA(), kze(), hA(), uR(), JQr(), _fg(), tJr(), P7(), m3c = class {
    constructor(e, t){
        this.tokenizationSupport = t, this.initialState = this.tokenizationSupport.getInitialState(), this.store = new Vvi(e);
    }
    getStartState(e) {
        return this.store.getStartState(e, this.initialState);
    }
    getFirstInvalidLine() {
        return this.store.getFirstInvalidLine(this.initialState);
    }
}, g3c = class extends m3c {
    constructor(e, t, n, i){
        super(e, t), this._textModel = n, this._languageIdCodec = i;
    }
    updateTokensUntilLine(e, t) {
        const n = this._textModel.getLanguageId();
        for(;;){
            const i = this.getFirstInvalidLine();
            if (!i || i.lineNumber > t) break;
            const r = this._textModel.getLineContent(i.lineNumber), s = ffn(this._languageIdCodec, n, this.tokenizationSupport, r, !0, i.startState);
            e.add(i.lineNumber, s.tokens), this.store.setEndState(i.lineNumber, s.endState);
        }
    }
    getTokenTypeIfInsertingCharacter(e, t) {
        const n = this.getStartState(e.lineNumber);
        if (!n) return 0;
        const i = this._textModel.getLanguageId(), r = this._textModel.getLineContent(e.lineNumber), s = r.substring(0, e.column - 1) + t + r.substring(e.column - 1), o = ffn(this._languageIdCodec, i, this.tokenizationSupport, s, !0, n), a = new uA(o.tokens, s, this._languageIdCodec);
        if (a.getCount() === 0) return 0;
        const c = a.findTokenIndexAtOffset(e.column - 1);
        return a.getStandardTokenType(c);
    }
    tokenizeLinesAt(e, t) {
        const n = this.getStartState(e);
        if (!n) return null;
        const i = this._textModel.getLanguageId(), r = [];
        let s = n;
        for (const o of t){
            const a = ffn(this._languageIdCodec, i, this.tokenizationSupport, o, !0, s);
            r.push(new uA(a.tokens, o, this._languageIdCodec)), s = a.endState;
        }
        return r;
    }
    hasAccurateTokensForLine(e) {
        const t = this.store.getFirstInvalidEndStateLineNumberOrMax();
        return e < t;
    }
    isCheapToTokenize(e) {
        const t = this.store.getFirstInvalidEndStateLineNumberOrMax();
        return e < t || e === t && this._textModel.getLineLength(e) < 2048;
    }
    tokenizeHeuristically(e, t, n) {
        if (n <= this.store.getFirstInvalidEndStateLineNumberOrMax()) return {
            heuristicTokens: !1
        };
        if (t <= this.store.getFirstInvalidEndStateLineNumberOrMax()) return this.updateTokensUntilLine(e, n), {
            heuristicTokens: !1
        };
        let i = this.guessStartState(t);
        const r = this._textModel.getLanguageId();
        for(let s = t; s <= n; s++){
            const o = this._textModel.getLineContent(s), a = ffn(this._languageIdCodec, r, this.tokenizationSupport, o, !0, i);
            e.add(s, a.tokens), i = a.endState;
        }
        return {
            heuristicTokens: !0
        };
    }
    guessStartState(e) {
        let { likelyRelevantLines: t, initialState: n } = p3c(this._textModel, e, this);
        n || (n = this.tokenizationSupport.getInitialState());
        const i = this._textModel.getLanguageId();
        let r = n;
        for (const s of t)r = ffn(this._languageIdCodec, i, this.tokenizationSupport, s, !1, r).endState;
        return r;
    }
}, Vvi = class {
    constructor(e){
        this.lineCount = e, this._tokenizationStateStore = new nJr, this._invalidEndStatesLineNumbers = new f3c, this._invalidEndStatesLineNumbers.addRange(new Mh(1, e + 1));
    }
    getEndState(e) {
        return this._tokenizationStateStore.getEndState(e);
    }
    setEndState(e, t) {
        if (!t) throw new Zu("Cannot set null/undefined state");
        this._invalidEndStatesLineNumbers.delete(e);
        const n = this._tokenizationStateStore.setEndState(e, t);
        return n && e < this.lineCount && this._invalidEndStatesLineNumbers.addRange(new Mh(e + 1, e + 2)), n;
    }
    acceptChange(e, t) {
        this.lineCount += t - e.length, this._tokenizationStateStore.acceptChange(e, t), this._invalidEndStatesLineNumbers.addRangeAndResize(new Mh(e.startLineNumber, e.endLineNumberExclusive), t);
    }
    acceptChanges(e) {
        for (const t of e){
            const [n] = Xgn(t);
            this.acceptChange(new Vl(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
        }
    }
    invalidateEndStateRange(e) {
        this._invalidEndStatesLineNumbers.addRange(new Mh(e.startLineNumber, e.endLineNumberExclusive));
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
    getStartState(e, t) {
        return e === 1 ? t : this.getEndState(e - 1);
    }
    getFirstInvalidLine(e) {
        const t = this.getFirstInvalidEndStateLineNumber();
        if (t === null) return null;
        const n = this.getStartState(t, e);
        if (!n) throw new Zu("Start state must be defined");
        return {
            lineNumber: t,
            startState: n
        };
    }
}, nJr = class {
    constructor(){
        this._lineEndStates = new d3c(null);
    }
    getEndState(e) {
        return this._lineEndStates.get(e);
    }
    setEndState(e, t) {
        const n = this._lineEndStates.get(e);
        return n && n.equals(t) ? !1 : (this._lineEndStates.set(e, t), !0);
    }
    acceptChange(e, t) {
        let n = e.length;
        t > 0 && n > 0 && (n--, t--), this._lineEndStates.replace(e.startLineNumber, n, t);
    }
    acceptChanges(e) {
        for (const t of e){
            const [n] = Xgn(t);
            this.acceptChange(new Vl(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
        }
    }
}, f3c = class {
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
        const e = this._ranges[0];
        return e.start + 1 === e.endExclusive ? this._ranges.shift() : this._ranges[0] = new Mh(e.start + 1, e.endExclusive), e.start;
    }
    delete(e) {
        const t = this._ranges.findIndex((n)=>n.contains(e));
        if (t !== -1) {
            const n = this._ranges[t];
            n.start === e ? n.endExclusive === e + 1 ? this._ranges.splice(t, 1) : this._ranges[t] = new Mh(e + 1, n.endExclusive) : n.endExclusive === e + 1 ? this._ranges[t] = new Mh(n.start, e) : this._ranges.splice(t, 1, new Mh(n.start, e), new Mh(e + 1, n.endExclusive));
        }
    }
    addRange(e) {
        Mh.addRange(e, this._ranges);
    }
    addRangeAndResize(e, t) {
        let n = 0;
        for(; !(n >= this._ranges.length || e.start <= this._ranges[n].endExclusive);)n++;
        let i = n;
        for(; !(i >= this._ranges.length || e.endExclusive < this._ranges[i].start);)i++;
        const r = t - e.length;
        for(let s = i; s < this._ranges.length; s++)this._ranges[s] = this._ranges[s].delta(r);
        if (n === i) {
            const s = new Mh(e.start, e.start + t);
            s.isEmpty || this._ranges.splice(n, 0, s);
        } else {
            const s = Math.min(e.start, this._ranges[n].start), o = Math.max(e.endExclusive, this._ranges[i - 1].endExclusive), a = new Mh(s, o + r);
            a.isEmpty ? this._ranges.splice(n, i - n) : this._ranges.splice(n, i - n, a);
        }
    }
    toString() {
        return this._ranges.map((e)=>e.toString()).join(" + ");
    }
}, v3c = class {
    constructor(e, t){
        this._tokenizerWithStateStore = e, this._backgroundTokenStore = t, this._isDisposed = !1, this._isScheduled = !1;
    }
    dispose() {
        this._isDisposed = !0;
    }
    handleChanges() {
        this._beginBackgroundTokenization();
    }
    _beginBackgroundTokenization() {
        this._isScheduled || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize() || (this._isScheduled = !0, kge((e)=>{
            this._isScheduled = !1, this._backgroundTokenizeWithDeadline(e);
        }));
    }
    _backgroundTokenizeWithDeadline(e) {
        const t = Date.now() + e.timeRemaining(), n = ()=>{
            this._isDisposed || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize() || (this._backgroundTokenizeForAtLeast1ms(), Date.now() < t ? sJ(n) : this._beginBackgroundTokenization());
        };
        n();
    }
    _backgroundTokenizeForAtLeast1ms() {
        const e = this._tokenizerWithStateStore._textModel.getLineCount(), t = new kOt, n = Vy.create(!1);
        do if (n.elapsed() > 1 || this._tokenizeOneInvalidLine(t) >= e) break;
        while (this._hasLinesToTokenize())
        this._backgroundTokenStore.setTokens(t.finalize()), this.checkFinished();
    }
    _hasLinesToTokenize() {
        return this._tokenizerWithStateStore ? !this._tokenizerWithStateStore.store.allStatesValid() : !1;
    }
    _tokenizeOneInvalidLine(e) {
        const t = this._tokenizerWithStateStore?.getFirstInvalidLine();
        return t ? (this._tokenizerWithStateStore.updateTokensUntilLine(e, t.lineNumber), t.lineNumber) : this._tokenizerWithStateStore._textModel.getLineCount() + 1;
    }
    checkFinished() {
        this._isDisposed || this._tokenizerWithStateStore.store.allStatesValid() && this._backgroundTokenStore.backgroundTokenizationFinished();
    }
    requestTokens(e, t) {
        this._tokenizerWithStateStore.store.invalidateEndStateRange(new Vl(e, t));
    }
};

}
