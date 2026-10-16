import { Se, bt, ve, we } from "./HVr.js";
import { dr, iNt } from "./arrays.js";
import { Cze, wvi } from "./beforeEditPositionMapper.js";
import { CQr, _Fc } from "./brackets.js";
import { TFc } from "./combineTextEditInfos.js";
import { WBe, uW } from "./length.js";
import { wFc } from "./parser.js";
import { AQr, Avi, BP, EFc, IQr, pOt, xFc, xQr } from "./qIc.js";
import { _Qr, mOt } from "./smallImmutableSet.js";
import { Ogg } from "./textModelBracketPairs.js";
import { fFc, kQr, wQr } from "./tokenizer.js";
import { x } from "./tslib.es6.js";
var IFc, AFc;
export { AFc, IFc };
var __wakaru_qgg_initialized = false;
export function qgg() {
if (__wakaru_qgg_initialized) return;
__wakaru_qgg_initialized = true;
"use strict";
x(), bt(), Se(), Ogg(), wvi(), _Fc(), WBe(), wFc(), mOt(), wQr(), dr(), TFc(), IFc = class extends we {
    constructor(e, t){
        if (super(), this.textModel = e, this.getLanguageConfiguration = t, this.didChangeEmitter = this._register(new ve), this.denseKeyProvider = new _Qr, this.brackets = new CQr(this.denseKeyProvider, this.getLanguageConfiguration), this.onDidChange = this.didChangeEmitter.event, this.queuedTextEditsForInitialAstWithoutTokens = [], this.queuedTextEdits = [], e.tokenization.hasTokens) e.tokenization.backgroundTokenizationState === 2 ? (this.initialAstWithoutTokens = void 0, this.astWithTokens = this.parseDocumentFromTextBuffer([], void 0, !1)) : (this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], void 0, !0), this.astWithTokens = this.initialAstWithoutTokens);
        else {
            const n = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId()), i = new fFc(this.textModel.getValue(), n);
            this.initialAstWithoutTokens = xQr(i, [], void 0, !0), this.astWithTokens = this.initialAstWithoutTokens;
        }
    }
    didLanguageChange(e) {
        return this.brackets.didLanguageChange(e);
    }
    handleDidChangeBackgroundTokenizationState() {
        if (this.textModel.tokenization.backgroundTokenizationState === 2) {
            const e = this.initialAstWithoutTokens === void 0;
            this.initialAstWithoutTokens = void 0, e || this.didChangeEmitter.fire();
        }
    }
    handleDidChangeTokens({ ranges: e }) {
        const t = e.map((n)=>new Cze(BP(n.fromLineNumber - 1, 0), BP(n.toLineNumber, 0), BP(n.toLineNumber - n.fromLineNumber + 1, 0)));
        this.handleEdits(t, !0), this.initialAstWithoutTokens || this.didChangeEmitter.fire();
    }
    handleContentChanged(e) {
        const t = Cze.fromModelContentChanges(e.changes);
        this.handleEdits(t, !1);
    }
    handleEdits(e, t) {
        const n = Avi(this.queuedTextEdits, e);
        this.queuedTextEdits = n, this.initialAstWithoutTokens && !t && (this.queuedTextEditsForInitialAstWithoutTokens = Avi(this.queuedTextEditsForInitialAstWithoutTokens, e));
    }
    flushQueue() {
        this.queuedTextEdits.length > 0 && (this.astWithTokens = this.parseDocumentFromTextBuffer(this.queuedTextEdits, this.astWithTokens, !1), this.queuedTextEdits = []), this.queuedTextEditsForInitialAstWithoutTokens.length > 0 && (this.initialAstWithoutTokens && (this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer(this.queuedTextEditsForInitialAstWithoutTokens, this.initialAstWithoutTokens, !1)), this.queuedTextEditsForInitialAstWithoutTokens = []);
    }
    parseDocumentFromTextBuffer(e, t, n) {
        const r = t, s = new kQr(this.textModel, this.brackets);
        return xQr(s, e, r, n);
    }
    getBracketsInRange(e, t) {
        this.flushQueue();
        const n = BP(e.startLineNumber - 1, e.startColumn - 1), i = BP(e.endLineNumber - 1, e.endColumn - 1);
        return new iNt((r)=>{
            const s = this.initialAstWithoutTokens || this.astWithTokens;
            IQr(s, uW, s.length, n, i, r, 0, 0, new Map, t);
        });
    }
    getBracketPairsInRange(e, t) {
        this.flushQueue();
        const n = pOt(e.getStartPosition()), i = pOt(e.getEndPosition());
        return new iNt((r)=>{
            const s = this.initialAstWithoutTokens || this.astWithTokens, o = new AFc(r, t, this.textModel);
            AQr(s, uW, s.length, n, i, o, 0, new Map);
        });
    }
    getFirstBracketAfter(e) {
        this.flushQueue();
        const t = this.initialAstWithoutTokens || this.astWithTokens;
        return xFc(t, uW, t.length, pOt(e));
    }
    getFirstBracketBefore(e) {
        this.flushQueue();
        const t = this.initialAstWithoutTokens || this.astWithTokens;
        return EFc(t, uW, t.length, pOt(e));
    }
}, AFc = class {
    constructor(e, t, n){
        this.push = e, this.includeMinIndentation = t, this.textModel = n;
    }
};

}
