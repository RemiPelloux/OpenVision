import { Se, bt, cn, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Wp, ywe } from "./languages.js";
import { P7, uA } from "./lineTokens.js";
import { dt, qi } from "./range.js";
import { rJr, sJr } from "./tokens.js";
import { T3c, jvi } from "./treeSitterTokenStoreService.js";
import { x } from "./tslib.es6.js";
var vfn;
export { vfn };
var __wakaru_kfg_initialized = false;
export function kfg() {
if (__wakaru_kfg_initialized) return;
__wakaru_kfg_initialized = true;
"use strict";
x(), Wp(), P7(), sJr(), Se(), T3c(), qi(), bt(), vfn = class extends rJr {
    constructor(e, t, n, i){
        super(e, t, n), this._tokenStore = i, this._tokenizationSupport = null, this._backgroundTokenizationState = 1, this._onDidChangeBackgroundTokenizationState = this._register(new ve), this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event, this._tokensChangedListener = this._register(new cn), this._onDidChangeBackgroundTokenization = this._register(new cn), this._initialize();
    }
    _initialize() {
        const e = this.getLanguageId();
        (!this._tokenizationSupport || this._lastLanguageId !== e) && (this._lastLanguageId = e, this._tokenizationSupport = ywe.get(e), this._tokensChangedListener.value = this._tokenizationSupport?.onDidChangeTokens((t)=>{
            t.textModel === this._textModel && this._onDidChangeTokens.fire(t.changes);
        }), this._onDidChangeBackgroundTokenization.value = this._tokenizationSupport?.onDidChangeBackgroundTokenization((t)=>{
            t.textModel === this._textModel && (this._backgroundTokenizationState = 2, this._onDidChangeBackgroundTokenizationState.fire());
        }));
    }
    getLineTokens(e) {
        const t = this._textModel.getLineContent(e);
        if (this._tokenizationSupport && t.length > 0) {
            const n = this._tokenStore.getTokens(this._textModel, e);
            if (n && n.length > 0) return new uA(n, t, this._languageIdCodec);
        }
        return uA.createEmpty(t, this._languageIdCodec);
    }
    resetTokenization(e = !0) {
        e && this._onDidChangeTokens.fire({
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
    handleDidChangeContent(e) {
        e.isFlush ? this.resetTokenization(!1) : this._tokenStore.handleContentChanged(this._textModel, e);
    }
    forceTokenization(e) {
        this._tokenizationSupport && !this.hasAccurateTokensForLine(e) && this._tokenizationSupport.tokenizeEncoded(e, this._textModel);
    }
    hasAccurateTokensForLine(e) {
        return this._tokenStore.hasTokens(this._textModel, new dt(e, 1, e, this._textModel.getLineMaxColumn(e)));
    }
    isCheapToTokenize(e) {
        return !0;
    }
    getTokenTypeIfInsertingCharacter(e, t, n) {
        return 0;
    }
    tokenizeLinesAt(e, t) {
        if (this._tokenizationSupport) {
            const n = this._tokenizationSupport.guessTokensForLinesContent(e, this._textModel, t), i = [];
            if (n) {
                for(let r = 0; r < n.length; r++)i.push(new uA(n[r], t[r], this._languageIdCodec));
                return i;
            }
        }
        return null;
    }
    get hasTokens() {
        return this._tokenStore.hasTokens(this._textModel);
    }
}, vfn = ie([
    C(3, jvi)
], vfn);

}
