import { x } from "./tslib.es6.js";
var Tyi, HFt, fKe, vKe;
export { HFt, Tyi, fKe, vKe };
var __wakaru_ife_initialized = false;
export function ife() {
if (__wakaru_ife_initialized) return;
__wakaru_ife_initialized = true;
"use strict";
x(), Tyi = class {
    constructor(e, t, n, i){
        this.priority = e, this.range = t, this.initialMousePosX = n, this.initialMousePosY = i, this.type = 1;
    }
    equals(e) {
        return e.type === 1 && this.range.equalsRange(e.range);
    }
    canAdoptVisibleHover(e, t) {
        return e.type === 1 && t.lineNumber === this.range.startLineNumber;
    }
}, HFt = class {
    constructor(e, t, n, i, r, s){
        this.priority = e, this.owner = t, this.range = n, this.initialMousePosX = i, this.initialMousePosY = r, this.supportsMarkerHover = s, this.type = 2;
    }
    equals(e) {
        return e.type === 2 && this.owner === e.owner;
    }
    canAdoptVisibleHover(e, t) {
        return e.type === 2 && this.owner === e.owner;
    }
}, fKe = class {
    constructor(e, t){
        this.renderedHoverParts = e, this.disposables = t;
    }
    dispose() {
        for (const e of this.renderedHoverParts)e.dispose();
        this.disposables?.dispose();
    }
}, vKe = new class {
    constructor(){
        this._participants = [];
    }
    register(t) {
        this._participants.push(t);
    }
    getAll() {
        return this._participants;
    }
};

}
