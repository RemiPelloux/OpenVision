import { E } from "./tslib.es6.js";
var yEr, yvn, Xyt, Zyt;
export { Xyt, Zyt, yEr, yvn };
var __wakaru_cRe_initialized = false;
export function cRe() {
if (__wakaru_cRe_initialized) return;
__wakaru_cRe_initialized = true;
"use strict";
E(), yEr = class {
    constructor(t, e, n, i){
        this.priority = t, this.range = e, this.initialMousePosX = n, this.initialMousePosY = i, this.type = 1;
    }
    equals(t) {
        return t.type === 1 && this.range.equalsRange(t.range);
    }
    canAdoptVisibleHover(t, e) {
        return t.type === 1 && e.lineNumber === this.range.startLineNumber;
    }
}, yvn = class {
    constructor(t, e, n, i, r, s){
        this.priority = t, this.owner = e, this.range = n, this.initialMousePosX = i, this.initialMousePosY = r, this.supportsMarkerHover = s, this.type = 2;
    }
    equals(t) {
        return t.type === 2 && this.owner === t.owner;
    }
    canAdoptVisibleHover(t, e) {
        return t.type === 2 && this.owner === t.owner;
    }
}, Xyt = class {
    constructor(t, e){
        this.renderedHoverParts = t, this.disposables = e;
    }
    dispose() {
        for (const t of this.renderedHoverParts)t.dispose();
        this.disposables?.dispose();
    }
}, Zyt = new class {
    constructor(){
        this._participants = [];
    }
    register(e) {
        this._participants.push(e);
    }
    getAll() {
        return this._participants;
    }
};

}
