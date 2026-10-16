import { BQr, ZFc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Fvi, fg;
export { Fvi, fg };
var __wakaru_dfg_initialized = false;
export function dfg() {
if (__wakaru_dfg_initialized) return;
__wakaru_dfg_initialized = true;
"use strict";
x(), Fvi = class {
    constructor(e, t){
        this.piece = e, this.color = t, this.size_left = 0, this.lf_left = 0, this.parent = this, this.left = this, this.right = this;
    }
    next() {
        if (this.right !== fg) return BQr(this.right);
        let e = this;
        for(; e.parent !== fg && e.parent.left !== e;)e = e.parent;
        return e.parent === fg ? fg : e.parent;
    }
    prev() {
        if (this.left !== fg) return ZFc(this.left);
        let e = this;
        for(; e.parent !== fg && e.parent.right !== e;)e = e.parent;
        return e.parent === fg ? fg : e.parent;
    }
    detach() {
        this.parent = null, this.left = null, this.right = null;
    }
}, fg = new Fvi(null, 0), fg.parent = fg, fg.left = fg, fg.right = fg, fg.color = 0;

}
