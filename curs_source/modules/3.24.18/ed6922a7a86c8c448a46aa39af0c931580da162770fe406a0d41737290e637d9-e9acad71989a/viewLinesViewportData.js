import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var b6c;
export { b6c };
var __wakaru_R_g_initialized = false;
export function R_g() {
if (__wakaru_R_g_initialized) return;
__wakaru_R_g_initialized = true;
"use strict";
x(), qi(), b6c = class {
    constructor(e, t, n, i){
        this.selections = e, this.startLineNumber = t.startLineNumber | 0, this.endLineNumber = t.endLineNumber | 0, this.relativeVerticalOffset = t.relativeVerticalOffset, this.bigNumbersDelta = t.bigNumbersDelta | 0, this.lineHeight = t.lineHeight | 0, this.whitespaceViewportData = n, this._model = i, this.visibleRange = new dt(t.startLineNumber, this._model.getLineMinColumn(t.startLineNumber), t.endLineNumber, this._model.getLineMaxColumn(t.endLineNumber));
    }
    getViewLineRenderingData(e) {
        return this._model.getViewportViewLineRenderingData(this.visibleRange, e);
    }
    getDecorationsInViewport() {
        return this._model.getDecorationsInViewport(this.visibleRange);
    }
};

}
