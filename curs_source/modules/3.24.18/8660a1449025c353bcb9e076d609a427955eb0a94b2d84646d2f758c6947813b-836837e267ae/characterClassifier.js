import { E } from "./tslib.es6.js";
import { lz } from "./uint.js";
import { Qkr } from "./ze.js";
var Uii, jii;
export { Uii, jii };
var __wakaru_Tgn_initialized = false;
export function Tgn() {
if (__wakaru_Tgn_initialized) return;
__wakaru_Tgn_initialized = true;
"use strict";
E(), lz(), Uii = class vAb {
    constructor(e){
        const n = Qkr(e);
        this._defaultValue = n, this._asciiMap = vAb._createAsciiMap(n), this._map = new Map;
    }
    static _createAsciiMap(e) {
        const n = new Uint8Array(256);
        return n.fill(e), n;
    }
    set(e, n) {
        const i = Qkr(n);
        e >= 0 && e < 256 ? this._asciiMap[e] = i : this._map.set(e, i);
    }
    get(e) {
        return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }
    clear() {
        this._asciiMap.fill(this._defaultValue), this._map.clear();
    }
}, jii = class {
    constructor(){
        this._actual = new Uii(0);
    }
    add(t) {
        this._actual.set(t, 1);
    }
    has(t) {
        return this._actual.get(t) === 1;
    }
    clear() {
        return this._actual.clear();
    }
};

}
