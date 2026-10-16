import { EI, Fa } from "./Iwo.js";
import { PD, SY } from "./lineTokens.js";
import { Lii } from "./supports_2.js";
import { E } from "./tslib.es6.js";
import { E9t, hUo } from "./ze.js";
var vwr, _wr, pUo;
export { _wr, pUo, vwr };
var __wakaru_mUo_initialized = false;
export function mUo() {
if (__wakaru_mUo_initialized) return;
__wakaru_mUo_initialized = true;
"use strict";
E(), Fa(), Lii(), SY(), vwr = class {
    constructor(t, e, n){
        this._indentRulesSupport = e, this._indentationLineProcessor = new pUo(t, n);
    }
    shouldIncrease(t, e) {
        const n = this._indentationLineProcessor.getProcessedLine(t, e);
        return this._indentRulesSupport.shouldIncrease(n);
    }
    shouldDecrease(t, e) {
        const n = this._indentationLineProcessor.getProcessedLine(t, e);
        return this._indentRulesSupport.shouldDecrease(n);
    }
    shouldIgnore(t, e) {
        const n = this._indentationLineProcessor.getProcessedLine(t, e);
        return this._indentRulesSupport.shouldIgnore(n);
    }
    shouldIndentNextLine(t, e) {
        const n = this._indentationLineProcessor.getProcessedLine(t, e);
        return this._indentRulesSupport.shouldIndentNextLine(n);
    }
}, _wr = class {
    constructor(t, e){
        this.model = t, this.indentationLineProcessor = new pUo(t, e);
    }
    getProcessedTokenContextAroundRange(t) {
        const e = this._getProcessedTokensBeforeRange(t), n = this._getProcessedTokensAfterRange(t), i = this._getProcessedPreviousLineTokens(t);
        return {
            beforeRangeProcessedTokens: e,
            afterRangeProcessedTokens: n,
            previousLineProcessedTokens: i
        };
    }
    _getProcessedTokensBeforeRange(t) {
        this.model.tokenization.forceTokenization(t.startLineNumber);
        const e = this.model.tokenization.getLineTokens(t.startLineNumber), n = E9t(e, t.startColumn - 1);
        let i;
        if (hUo(this.model, t.getStartPosition())) {
            const s = t.startColumn - 1 - n.firstCharOffset, o = n.firstCharOffset, a = o + s;
            i = e.sliceAndInflate(o, a, 0);
        } else {
            const s = t.startColumn - 1;
            i = e.sliceAndInflate(0, s, 0);
        }
        return this.indentationLineProcessor.getProcessedTokens(i);
    }
    _getProcessedTokensAfterRange(t) {
        const e = t.isEmpty() ? t.getStartPosition() : t.getEndPosition();
        this.model.tokenization.forceTokenization(e.lineNumber);
        const n = this.model.tokenization.getLineTokens(e.lineNumber), i = E9t(n, e.column - 1), r = e.column - 1 - i.firstCharOffset, s = i.firstCharOffset + r, o = i.firstCharOffset + i.getLineLength(), a = n.sliceAndInflate(s, o, 0);
        return this.indentationLineProcessor.getProcessedTokens(a);
    }
    _getProcessedPreviousLineTokens(t) {
        const e = (h)=>{
            this.model.tokenization.forceTokenization(h);
            const p = this.model.tokenization.getLineTokens(h), g = this.model.getLineMaxColumn(h) - 1;
            return E9t(p, g);
        };
        this.model.tokenization.forceTokenization(t.startLineNumber);
        const n = this.model.tokenization.getLineTokens(t.startLineNumber), i = E9t(n, t.startColumn - 1), r = PD.createEmpty("", i.languageIdCodec), s = t.startLineNumber - 1;
        if (s === 0 || !(i.firstCharOffset === 0)) return r;
        const l = e(s);
        if (!(i.languageId === l.languageId)) return r;
        const u = l.toIViewLineTokens();
        return this.indentationLineProcessor.getProcessedTokens(u);
    }
}, pUo = class {
    constructor(t, e){
        this.model = t, this.languageConfigurationService = e;
    }
    getProcessedLine(t, e) {
        const n = (s, o)=>{
            const a = EI(s);
            return o + s.substring(a.length);
        };
        this.model.tokenization.forceTokenization?.(t);
        const i = this.model.tokenization.getLineTokens(t);
        let r = this.getProcessedTokens(i).getLineContent();
        return e !== void 0 && (r = n(r, e)), r;
    }
    getProcessedTokens(t) {
        const e = (a)=>a === 2 || a === 3 || a === 1, n = t.getLanguageId(0), r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew.getBracketRegExp({
            global: !0
        }), s = [];
        return t.forEach((a)=>{
            const l = t.getStandardTokenType(a);
            let c = t.getTokenText(a);
            e(l) && (c = c.replace(r, ""));
            const u = t.getMetadata(a);
            s.push({
                text: c,
                metadata: u
            });
        }), PD.createFromTextAndMetadata(s, t.languageIdCodec);
    }
};

}
