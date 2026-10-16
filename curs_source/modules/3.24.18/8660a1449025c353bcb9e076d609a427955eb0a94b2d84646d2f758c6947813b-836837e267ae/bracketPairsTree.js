import { Gt, Qe, st, tt } from "./Iwo.js";
import { bo, sdn } from "./arrays.js";
import { a0r, tyt } from "./beforeEditPositionMapper.js";
import { Ljo, VBd } from "./brackets.js";
import { e8d } from "./combineTextEditInfos.js";
import { Ftt, IQ } from "./length.js";
import { QBd } from "./parser.js";
import { Ajo, nfn } from "./smallImmutableSet.js";
import { U2y } from "./textModelBracketPairs.js";
import { Djo, Njo, qBd } from "./tokenizer.js";
import { E } from "./tslib.es6.js";
import { Bjo, L5, Ujo, jjo, n8d, p0r, t8d, tfn } from "./ze.js";
var i8d, r8d;
export { i8d, r8d };
var __wakaru_Y2y_initialized = false;
export function Y2y() {
if (__wakaru_Y2y_initialized) return;
__wakaru_Y2y_initialized = true;
"use strict";
E(), Gt(), Qe(), U2y(), a0r(), VBd(), Ftt(), QBd(), nfn(), Njo(), bo(), e8d(), i8d = class extends st {
    constructor(t, e){
        if (super(), this.textModel = t, this.getLanguageConfiguration = e, this.didChangeEmitter = this._register(new tt), this.denseKeyProvider = new Ajo, this.brackets = new Ljo(this.denseKeyProvider, this.getLanguageConfiguration), this.onDidChange = this.didChangeEmitter.event, this.queuedTextEditsForInitialAstWithoutTokens = [], this.queuedTextEdits = [], t.tokenization.hasTokens) t.tokenization.backgroundTokenizationState === 2 ? (this.initialAstWithoutTokens = void 0, this.astWithTokens = this.parseDocumentFromTextBuffer([], void 0, !1)) : (this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], void 0, !0), this.astWithTokens = this.initialAstWithoutTokens);
        else {
            const n = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId()), i = new qBd(this.textModel.getValue(), n);
            this.initialAstWithoutTokens = Bjo(i, [], void 0, !0), this.astWithTokens = this.initialAstWithoutTokens;
        }
    }
    didLanguageChange(t) {
        return this.brackets.didLanguageChange(t);
    }
    handleDidChangeBackgroundTokenizationState() {
        if (this.textModel.tokenization.backgroundTokenizationState === 2) {
            const t = this.initialAstWithoutTokens === void 0;
            this.initialAstWithoutTokens = void 0, t || this.didChangeEmitter.fire();
        }
    }
    handleDidChangeTokens({ ranges: t }) {
        const e = t.map((n)=>new tyt(L5(n.fromLineNumber - 1, 0), L5(n.toLineNumber, 0), L5(n.toLineNumber - n.fromLineNumber + 1, 0)));
        this.handleEdits(e, !0), this.initialAstWithoutTokens || this.didChangeEmitter.fire();
    }
    handleContentChanged(t) {
        const e = tyt.fromModelContentChanges(t.changes);
        this.handleEdits(e, !1);
    }
    handleEdits(t, e) {
        const n = p0r(this.queuedTextEdits, t);
        this.queuedTextEdits = n, this.initialAstWithoutTokens && !e && (this.queuedTextEditsForInitialAstWithoutTokens = p0r(this.queuedTextEditsForInitialAstWithoutTokens, t));
    }
    flushQueue() {
        this.queuedTextEdits.length > 0 && (this.astWithTokens = this.parseDocumentFromTextBuffer(this.queuedTextEdits, this.astWithTokens, !1), this.queuedTextEdits = []), this.queuedTextEditsForInitialAstWithoutTokens.length > 0 && (this.initialAstWithoutTokens && (this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer(this.queuedTextEditsForInitialAstWithoutTokens, this.initialAstWithoutTokens, !1)), this.queuedTextEditsForInitialAstWithoutTokens = []);
    }
    parseDocumentFromTextBuffer(t, e, n) {
        const r = e, s = new Djo(this.textModel, this.brackets);
        return Bjo(s, t, r, n);
    }
    getBracketsInRange(t, e) {
        this.flushQueue();
        const n = L5(t.startLineNumber - 1, t.startColumn - 1), i = L5(t.endLineNumber - 1, t.endColumn - 1);
        return new sdn((r)=>{
            const s = this.initialAstWithoutTokens || this.astWithTokens;
            Ujo(s, IQ, s.length, n, i, r, 0, 0, new Map, e);
        });
    }
    getBracketPairsInRange(t, e) {
        this.flushQueue();
        const n = tfn(t.getStartPosition()), i = tfn(t.getEndPosition());
        return new sdn((r)=>{
            const s = this.initialAstWithoutTokens || this.astWithTokens, o = new r8d(r, e, this.textModel);
            jjo(s, IQ, s.length, n, i, o, 0, new Map);
        });
    }
    getFirstBracketAfter(t) {
        this.flushQueue();
        const e = this.initialAstWithoutTokens || this.astWithTokens;
        return n8d(e, IQ, e.length, tfn(t));
    }
    getFirstBracketBefore(t) {
        this.flushQueue();
        const e = this.initialAstWithoutTokens || this.astWithTokens;
        return t8d(e, IQ, e.length, tfn(t));
    }
}, r8d = class {
    constructor(t, e, n){
        this.push = t, this.includeMinIndentation = e, this.textModel = n;
    }
};

}
