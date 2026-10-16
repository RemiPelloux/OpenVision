import { x } from "./tslib.es6.js";
import { $pt, Hze } from "./viewEventHandler.js";
var gts;
export { gts };
var __wakaru_H6c_initialized = false;
export function H6c() {
if (__wakaru_H6c_initialized) return;
__wakaru_H6c_initialized = true;
"use strict";
x(), $pt(), gts = class extends Hze {
    constructor(e, t, n, i){
        super(), this._context = e, this._viewGpuContext = t, this._device = n, this._glyphRasterizer = i, this._context.addEventHandler(this);
    }
    get glyphRasterizer() {
        return this._glyphRasterizer.value;
    }
};

}
