import { jze, n5e } from "./dynamicViewOverlay.js";
import { obg } from "./gpuMark.css";
import { x } from "./tslib.es6.js";
import { Ves, Zfn } from "./viewLineOptions.js";
var Cts, e4c;
export { Cts, e4c };
var __wakaru_abg_initialized = false;
export function abg() {
if (__wakaru_abg_initialized) return;
__wakaru_abg_initialized = true;
"use strict";
x(), jze(), Ves(), obg(), Cts = class Mkm extends n5e {
    constructor(t, n){
        super(), this._viewGpuContext = n, this._context = t, this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        return !0;
    }
    onCursorStateChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    prepareRender(t) {
        const n = t.visibleRange.startLineNumber, i = t.visibleRange.endLineNumber, r = t.viewportData, s = new Zfn(this._context.configuration, this._context.theme.type), o = [];
        for(let a = n; a <= i; a++){
            const c = a - n, l = this._viewGpuContext.canRenderDetailed(s, r, a);
            o[c] = l.length ? `<div class="${Mkm.CLASS_NAME}" title="Cannot render on GPU: ${l.join(", ")}"></div>` : "";
        }
        this._renderResult = o;
    }
    render(t, n) {
        if (!this._renderResult) return "";
        const i = n - t;
        return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
}, Cts.CLASS_NAME = "gpu-mark", e4c = Cts;

}
