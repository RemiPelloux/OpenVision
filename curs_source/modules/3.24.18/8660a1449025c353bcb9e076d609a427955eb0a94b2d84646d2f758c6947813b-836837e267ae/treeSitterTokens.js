import { Gt, Qe, Vn, tt } from "./Iwo.js";
import { Htt, Iy } from "./languages.js";
import { PD, SY } from "./lineTokens.js";
import { Qs, qt } from "./range.js";
import { f$o, v$o } from "./tokens.js";
import { A0r, J8d } from "./treeSitterTokenStoreService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Qri;
export { Qri };
var __wakaru_EPy_initialized = false;
export function EPy() {
if (__wakaru_EPy_initialized) return;
__wakaru_EPy_initialized = true;
"use strict";
E(), Iy(), SY(), v$o(), Qe(), J8d(), Qs(), Gt(), Qri = class extends f$o {
    constructor(t, e, n, i){
        super(t, e, n), this._tokenStore = i, this._tokenizationSupport = null, this._backgroundTokenizationState = 1, this._onDidChangeBackgroundTokenizationState = this._register(new tt), this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event, this._tokensChangedListener = this._register(new Vn), this._onDidChangeBackgroundTokenization = this._register(new Vn), this._initialize();
    }
    _initialize() {
        const t = this.getLanguageId();
        (!this._tokenizationSupport || this._lastLanguageId !== t) && (this._lastLanguageId = t, this._tokenizationSupport = Htt.get(t), this._tokensChangedListener.value = this._tokenizationSupport?.onDidChangeTokens((e)=>{
            e.textModel === this._textModel && this._onDidChangeTokens.fire(e.changes);
        }), this._onDidChangeBackgroundTokenization.value = this._tokenizationSupport?.onDidChangeBackgroundTokenization((e)=>{
            e.textModel === this._textModel && (this._backgroundTokenizationState = 2, this._onDidChangeBackgroundTokenizationState.fire());
        }));
    }
    getLineTokens(t) {
        const e = this._textModel.getLineContent(t);
        if (this._tokenizationSupport && e.length > 0) {
            const n = this._tokenStore.getTokens(this._textModel, t);
            if (n && n.length > 0) return new PD(n, e, this._languageIdCodec);
        }
        return PD.createEmpty(e, this._languageIdCodec);
    }
    resetTokenization(t = !0) {
        t && this._onDidChangeTokens.fire({
            semanticTokensApplied: !1,
            ranges: [
                {
                    fromLineNumber: 1,
                    toLineNumber: this._textModel.getLineCount()
                }
            ]
        }), this._initialize();
    }
    handleDidChangeAttached() {}
    handleDidChangeContent(t) {
        t.isFlush ? this.resetTokenization(!1) : this._tokenStore.handleContentChanged(this._textModel, t);
    }
    forceTokenization(t) {
        this._tokenizationSupport && !this.hasAccurateTokensForLine(t) && this._tokenizationSupport.tokenizeEncoded(t, this._textModel);
    }
    hasAccurateTokensForLine(t) {
        return this._tokenStore.hasTokens(this._textModel, new qt(t, 1, t, this._textModel.getLineMaxColumn(t)));
    }
    isCheapToTokenize(t) {
        return !0;
    }
    getTokenTypeIfInsertingCharacter(t, e, n) {
        return 0;
    }
    tokenizeLinesAt(t, e) {
        if (this._tokenizationSupport) {
            const n = this._tokenizationSupport.guessTokensForLinesContent(t, this._textModel, e), i = [];
            if (n) {
                for(let r = 0; r < n.length; r++)i.push(new PD(n[r], e[r], this._languageIdCodec));
                return i;
            }
        }
        return null;
    }
    get hasTokens() {
        return this._tokenStore.hasTokens(this._textModel);
    }
}, Qri = Re([
    F(3, A0r)
], Qri);

}
