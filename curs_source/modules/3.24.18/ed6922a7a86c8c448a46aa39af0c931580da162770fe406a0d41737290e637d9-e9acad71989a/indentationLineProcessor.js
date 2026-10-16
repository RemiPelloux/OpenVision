import { E0, Ps } from "./HVr.js";
import { P7, uA } from "./lineTokens.js";
import { AXr, jht } from "./qIc.js";
import { qmn } from "./supports_2.js";
import { x } from "./tslib.es6.js";
var Afi, Rfi, RXr;
export { Afi, RXr, Rfi };
var __wakaru_DXr_initialized = false;
export function DXr() {
if (__wakaru_DXr_initialized) return;
__wakaru_DXr_initialized = true;
"use strict";
x(), Ps(), qmn(), P7(), Afi = class {
    constructor(e, t, n){
        this._indentRulesSupport = t, this._indentationLineProcessor = new RXr(e, n);
    }
    shouldIncrease(e, t) {
        const n = this._indentationLineProcessor.getProcessedLine(e, t);
        return this._indentRulesSupport.shouldIncrease(n);
    }
    shouldDecrease(e, t) {
        const n = this._indentationLineProcessor.getProcessedLine(e, t);
        return this._indentRulesSupport.shouldDecrease(n);
    }
    shouldIgnore(e, t) {
        const n = this._indentationLineProcessor.getProcessedLine(e, t);
        return this._indentRulesSupport.shouldIgnore(n);
    }
    shouldIndentNextLine(e, t) {
        const n = this._indentationLineProcessor.getProcessedLine(e, t);
        return this._indentRulesSupport.shouldIndentNextLine(n);
    }
}, Rfi = class {
    constructor(e, t){
        this.model = e, this.indentationLineProcessor = new RXr(e, t);
    }
    getProcessedTokenContextAroundRange(e) {
        const t = this._getProcessedTokensBeforeRange(e), n = this._getProcessedTokensAfterRange(e), i = this._getProcessedPreviousLineTokens(e);
        return {
            beforeRangeProcessedTokens: t,
            afterRangeProcessedTokens: n,
            previousLineProcessedTokens: i
        };
    }
    _getProcessedTokensBeforeRange(e) {
        this.model.tokenization.forceTokenization(e.startLineNumber);
        const t = this.model.tokenization.getLineTokens(e.startLineNumber), n = jht(t, e.startColumn - 1);
        let i;
        if (AXr(this.model, e.getStartPosition())) {
            const s = e.startColumn - 1 - n.firstCharOffset, o = n.firstCharOffset, a = o + s;
            i = t.sliceAndInflate(o, a, 0);
        } else {
            const s = e.startColumn - 1;
            i = t.sliceAndInflate(0, s, 0);
        }
        return this.indentationLineProcessor.getProcessedTokens(i);
    }
    _getProcessedTokensAfterRange(e) {
        const t = e.isEmpty() ? e.getStartPosition() : e.getEndPosition();
        this.model.tokenization.forceTokenization(t.lineNumber);
        const n = this.model.tokenization.getLineTokens(t.lineNumber), i = jht(n, t.column - 1), r = t.column - 1 - i.firstCharOffset, s = i.firstCharOffset + r, o = i.firstCharOffset + i.getLineLength(), a = n.sliceAndInflate(s, o, 0);
        return this.indentationLineProcessor.getProcessedTokens(a);
    }
    _getProcessedPreviousLineTokens(e) {
        const t = (p)=>{
            this.model.tokenization.forceTokenization(p);
            const g = this.model.tokenization.getLineTokens(p), f = this.model.getLineMaxColumn(p) - 1;
            return jht(g, f);
        };
        this.model.tokenization.forceTokenization(e.startLineNumber);
        const n = this.model.tokenization.getLineTokens(e.startLineNumber), i = jht(n, e.startColumn - 1), r = uA.createEmpty("", i.languageIdCodec), s = e.startLineNumber - 1;
        if (s === 0 || !(i.firstCharOffset === 0)) return r;
        const c = t(s);
        if (!(i.languageId === c.languageId)) return r;
        const u = c.toIViewLineTokens();
        return this.indentationLineProcessor.getProcessedTokens(u);
    }
}, RXr = class {
    constructor(e, t){
        this.model = e, this.languageConfigurationService = t;
    }
    getProcessedLine(e, t) {
        const n = (s, o)=>{
            const a = E0(s);
            return o + s.substring(a.length);
        };
        this.model.tokenization.forceTokenization?.(e);
        const i = this.model.tokenization.getLineTokens(e);
        let r = this.getProcessedTokens(i).getLineContent();
        return t !== void 0 && (r = n(r, t)), r;
    }
    getProcessedTokens(e) {
        const t = (a)=>a === 2 || a === 3 || a === 1, n = e.getLanguageId(0), r = this.languageConfigurationService.getLanguageConfiguration(n).bracketsNew.getBracketRegExp({
            global: !0
        }), s = [];
        return e.forEach((a)=>{
            const c = e.getStandardTokenType(a);
            let l = e.getTokenText(a);
            t(c) && (l = l.replace(r, ""));
            const u = e.getMetadata(a);
            s.push({
                text: l,
                metadata: u
            });
        }), uA.createFromTextAndMetadata(s, e.languageIdCodec);
    }
};

}
