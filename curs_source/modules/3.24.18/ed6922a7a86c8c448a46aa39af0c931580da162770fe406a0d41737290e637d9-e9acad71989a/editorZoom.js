import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var Tle;
export { Tle };
var __wakaru_w_i_initialized = false;
export function w_i() {
if (__wakaru_w_i_initialized) return;
__wakaru_w_i_initialized = true;
"use strict";
x(), bt(), Tle = new class {
    constructor(){
        this._zoomLevel = 0, this._onDidChangeZoomLevel = new ve, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    }
    getZoomLevel() {
        return this._zoomLevel;
    }
    setZoomLevel(e) {
        e = Math.min(Math.max(-5, e), 20), this._zoomLevel !== e && (this._zoomLevel = e, this._onDidChangeZoomLevel.fire(this._zoomLevel));
    }
};

}
