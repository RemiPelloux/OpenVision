import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { JDy } from "./gpuMark.css";
import { E } from "./tslib.es6.js";
import { Isi, KHo } from "./viewLineOptions.js";
var xWo, mHd;
export { mHd, xWo };
var __wakaru_e3y_initialized = false;
export function e3y() {
if (__wakaru_e3y_initialized) return;
__wakaru_e3y_initialized = true;
"use strict";
E(), kyt(), KHo(), JDy(), xWo = class iRb extends Qtt {
    constructor(e, n){
        super(), this._viewGpuContext = n, this._context = e, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        return !0;
    }
    onCursorStateChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    prepareRender(e) {
        const n = e.visibleRange.startLineNumber, i = e.visibleRange.endLineNumber, r = e.viewportData, s = new Isi(this._context.configuration, this._context.theme.type), o = [];
        for(let a = n; a <= i; a++){
            const l = a - n, c = this._viewGpuContext.canRenderDetailed(s, r, a);
            o[l] = c.length ? `<div class="${iRb.CLASS_NAME}" title="Cannot render on GPU: ${c.join(", ")}"></div>` : "";
        }
        this._renderResult = o;
    }
    render(e, n) {
        if (!this._renderResult) return "";
        const i = n - e;
        return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
}, xWo.CLASS_NAME = "gpu-mark", mHd = xWo;

}
