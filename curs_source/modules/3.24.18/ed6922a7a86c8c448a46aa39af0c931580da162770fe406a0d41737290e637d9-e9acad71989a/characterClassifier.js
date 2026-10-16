import { ufi } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { eN } from "./uint.js";
var Ymn, Xmn;
export { Xmn, Ymn };
var __wakaru_k2t_initialized = false;
export function k2t() {
if (__wakaru_k2t_initialized) return;
__wakaru_k2t_initialized = true;
"use strict";
x(), eN(), Ymn = class GSm {
    constructor(t){
        const n = ufi(t);
        this._defaultValue = n, this._asciiMap = GSm._createAsciiMap(n), this._map = new Map;
    }
    static _createAsciiMap(t) {
        const n = new Uint8Array(256);
        return n.fill(t), n;
    }
    set(t, n) {
        const i = ufi(n);
        t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
    }
    get(t) {
        return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
    }
    clear() {
        this._asciiMap.fill(this._defaultValue), this._map.clear();
    }
}, Xmn = class {
    constructor(){
        this._actual = new Ymn(0);
    }
    add(e) {
        this._actual.set(e, 1);
    }
    has(e) {
        return this._actual.get(e) === 1;
    }
    clear() {
        return this._actual.clear();
    }
};

}
