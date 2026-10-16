import { E } from "./tslib.es6.js";
var dHd, IWo;
export { IWo, dHd };
var __wakaru_hHd_initialized = false;
export function hHd() {
if (__wakaru_hHd_initialized) return;
__wakaru_hHd_initialized = true;
"use strict";
E(), dHd = class {
    constructor(){
        this._nativeEditContextMapping = new Map;
    }
    register(t, e) {
        return this._nativeEditContextMapping.set(t, e), {
            dispose: ()=>{
                this._nativeEditContextMapping.delete(t);
            }
        };
    }
    get(t) {
        return this._nativeEditContextMapping.get(t);
    }
}, IWo = new dHd;

}
