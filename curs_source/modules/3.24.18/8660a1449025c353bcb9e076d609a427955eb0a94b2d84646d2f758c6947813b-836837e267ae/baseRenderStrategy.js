import { E } from "./tslib.es6.js";
import { _yt, cBt } from "./viewEventHandler.js";
var bWo;
export { bWo };
var __wakaru_tHd_initialized = false;
export function tHd() {
if (__wakaru_tHd_initialized) return;
__wakaru_tHd_initialized = true;
"use strict";
E(), cBt(), bWo = class extends _yt {
    constructor(t, e, n, i){
        super(), this._context = t, this._viewGpuContext = e, this._device = n, this._glyphRasterizer = i, this._context.addEventHandler(this);
    }
    get glyphRasterizer() {
        return this._glyphRasterizer.value;
    }
};

}
