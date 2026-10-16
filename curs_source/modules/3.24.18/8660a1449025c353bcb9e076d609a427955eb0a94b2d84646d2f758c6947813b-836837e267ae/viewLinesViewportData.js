import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var M$d;
export { M$d };
var __wakaru_wDy_initialized = false;
export function wDy() {
if (__wakaru_wDy_initialized) return;
__wakaru_wDy_initialized = true;
"use strict";
E(), Qs(), M$d = class {
    constructor(t, e, n, i){
        this.selections = t, this.startLineNumber = e.startLineNumber | 0, this.endLineNumber = e.endLineNumber | 0, this.relativeVerticalOffset = e.relativeVerticalOffset, this.bigNumbersDelta = e.bigNumbersDelta | 0, this.lineHeight = e.lineHeight | 0, this.whitespaceViewportData = n, this._model = i, this.visibleRange = new qt(e.startLineNumber, this._model.getLineMinColumn(e.startLineNumber), e.endLineNumber, this._model.getLineMaxColumn(e.endLineNumber));
    }
    getViewLineRenderingData(t) {
        return this._model.getViewportViewLineRenderingData(this.visibleRange, t);
    }
    getDecorationsInViewport() {
        return this._model.getDecorationsInViewport(this.visibleRange);
    }
};

}
