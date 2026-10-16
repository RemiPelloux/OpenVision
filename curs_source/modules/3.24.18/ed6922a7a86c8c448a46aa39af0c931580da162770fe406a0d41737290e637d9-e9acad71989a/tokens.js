import { Se, bt, nh, ve, we } from "./HVr.js";
import { dr } from "./arrays.js";
import { ac, bn } from "./async.js";
import { Vl, hA } from "./lineRange.js";
import { x } from "./tslib.es6.js";
var _3c, b3c, y3c, rJr;
export { _3c, b3c, rJr, y3c };
var __wakaru_sJr_initialized = false;
export function sJr() {
if (__wakaru_sJr_initialized) return;
__wakaru_sJr_initialized = true;
"use strict";
x(), dr(), bn(), bt(), Se(), hA(), _3c = class {
    constructor(){
        this._onDidChangeVisibleRanges = new ve, this.onDidChangeVisibleRanges = this._onDidChangeVisibleRanges.event, this._views = new Set;
    }
    attachView() {
        const e = new b3c((t)=>{
            this._onDidChangeVisibleRanges.fire({
                view: e,
                state: t
            });
        });
        return this._views.add(e), e;
    }
    detachView(e) {
        this._views.delete(e), this._onDidChangeVisibleRanges.fire({
            view: e,
            state: void 0
        });
    }
}, b3c = class {
    constructor(e){
        this.handleStateChange = e;
    }
    setVisibleLines(e, t) {
        const n = e.map((i)=>new Vl(i.startLineNumber, i.endLineNumber + 1));
        this.handleStateChange({
            visibleLineRanges: n,
            stabilized: t
        });
    }
}, y3c = class extends we {
    constructor(e){
        super(), this._refreshTokens = e, this.runner = this._register(new ac(()=>this.update(), 50)), this._computedLineRanges = [], this._lineRanges = [];
    }
    get lineRanges() {
        return this._lineRanges;
    }
    update() {
        nh(this._computedLineRanges, this._lineRanges, (e, t)=>e.equals(t)) || (this._computedLineRanges = this._lineRanges, this._refreshTokens());
    }
    handleStateChange(e) {
        this._lineRanges = e.visibleLineRanges, e.stabilized ? (this.runner.cancel(), this.update()) : this.runner.schedule();
    }
}, rJr = class extends we {
    constructor(e, t, n){
        super(), this._languageIdCodec = e, this._textModel = t, this.getLanguageId = n, this._onDidChangeTokens = this._register(new ve), this.onDidChangeTokens = this._onDidChangeTokens.event;
    }
    get backgroundTokenizationState() {
        return this._backgroundTokenizationState;
    }
    tokenizeIfCheap(e) {
        this.isCheapToTokenize(e) && this.forceTokenization(e);
    }
};

}
