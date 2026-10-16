import { Gt, Qe, Zm, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { DD, wd } from "./lineRange.js";
import { E } from "./tslib.es6.js";
var z8d, V8d, K8d, f$o;
export { K8d, V8d, f$o, z8d };
var __wakaru_v$o_initialized = false;
export function v$o() {
if (__wakaru_v$o_initialized) return;
__wakaru_v$o_initialized = true;
"use strict";
E(), bo(), qn(), Gt(), Qe(), DD(), z8d = class {
    constructor(){
        this._onDidChangeVisibleRanges = new tt, this.onDidChangeVisibleRanges = this._onDidChangeVisibleRanges.event, this._views = new Set;
    }
    attachView() {
        const t = new V8d((e)=>{
            this._onDidChangeVisibleRanges.fire({
                view: t,
                state: e
            });
        });
        return this._views.add(t), t;
    }
    detachView(t) {
        this._views.delete(t), this._onDidChangeVisibleRanges.fire({
            view: t,
            state: void 0
        });
    }
}, V8d = class {
    constructor(t){
        this.handleStateChange = t;
    }
    setVisibleLines(t, e) {
        const n = t.map((i)=>new wd(i.startLineNumber, i.endLineNumber + 1));
        this.handleStateChange({
            visibleLineRanges: n,
            stabilized: e
        });
    }
}, K8d = class extends st {
    constructor(t){
        super(), this._refreshTokens = t, this.runner = this._register(new Yu(()=>this.update(), 50)), this._computedLineRanges = [], this._lineRanges = [];
    }
    get lineRanges() {
        return this._lineRanges;
    }
    update() {
        Zm(this._computedLineRanges, this._lineRanges, (t, e)=>t.equals(e)) || (this._computedLineRanges = this._lineRanges, this._refreshTokens());
    }
    handleStateChange(t) {
        this._lineRanges = t.visibleLineRanges, t.stabilized ? (this.runner.cancel(), this.update()) : this.runner.schedule();
    }
}, f$o = class extends st {
    constructor(t, e, n){
        super(), this._languageIdCodec = t, this._textModel = e, this.getLanguageId = n, this._onDidChangeTokens = this._register(new tt), this.onDidChangeTokens = this._onDidChangeTokens.event;
    }
    get backgroundTokenizationState() {
        return this._backgroundTokenizationState;
    }
    tokenizeIfCheap(t) {
        this.isCheapToTokenize(t) && this.forceTokenization(t);
    }
};

}
