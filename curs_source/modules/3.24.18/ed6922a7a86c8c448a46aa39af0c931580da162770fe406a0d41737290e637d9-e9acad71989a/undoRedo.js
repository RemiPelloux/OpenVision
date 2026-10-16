import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var UP, uJr, yfn, Sfn, kfn, Ipt;
export { Ipt, Sfn, UP, kfn, uJr, yfn };
var __wakaru_$P_initialized = false;
export function $P() {
if (__wakaru_$P_initialized) return;
__wakaru_$P_initialized = true;
"use strict";
x(), Ze(), UP = vn("undoRedoService"), uJr = class {
    constructor(e, t){
        this.resource = e, this.elements = t;
    }
}, yfn = class pkm {
    constructor(){
        this.id = pkm._ID++, this.order = 1;
    }
    nextOrder() {
        return this.id === 0 ? 0 : this.order++;
    }
}, yfn._ID = 0, yfn.None = new yfn, Sfn = yfn, kfn = class mkm {
    constructor(){
        this.id = mkm._ID++, this.order = 1;
    }
    nextOrder() {
        return this.id === 0 ? 0 : this.order++;
    }
}, kfn._ID = 0, kfn.None = new kfn, Ipt = kfn;

}
