import { x } from "./tslib.es6.js";
var Z6c, wts;
export { Z6c, wts };
var __wakaru_Q6c_initialized = false;
export function Q6c() {
if (__wakaru_Q6c_initialized) return;
__wakaru_Q6c_initialized = true;
"use strict";
x(), Z6c = class {
    constructor(){
        this._nativeEditContextMapping = new Map;
    }
    register(e, t) {
        return this._nativeEditContextMapping.set(e, t), {
            dispose: ()=>{
                this._nativeEditContextMapping.delete(e);
            }
        };
    }
    get(e) {
        return this._nativeEditContextMapping.get(e);
    }
}, wts = new Z6c;

}
