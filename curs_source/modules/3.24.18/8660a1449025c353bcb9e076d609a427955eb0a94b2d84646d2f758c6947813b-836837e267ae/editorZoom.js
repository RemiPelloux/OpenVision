import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var fyt;
export { fyt };
var __wakaru_sHo_initialized = false;
export function sHo() {
if (__wakaru_sHo_initialized) return;
__wakaru_sHo_initialized = true;
"use strict";
E(), Gt(), fyt = new class {
    constructor(){
        this._zoomLevel = 0, this._onDidChangeZoomLevel = new tt, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    }
    getZoomLevel() {
        return this._zoomLevel;
    }
    setZoomLevel(t) {
        t = Math.min(Math.max(-5, t), 20), this._zoomLevel !== t && (this._zoomLevel = t, this._onDidChangeZoomLevel.fire(this._zoomLevel));
    }
};

}
