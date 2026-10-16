import { E } from "./tslib.es6.js";
import { T8d, Xjo } from "./ze.js";
var k0r, Fv;
export { Fv, k0r };
var __wakaru_gPy_initialized = false;
export function gPy() {
if (__wakaru_gPy_initialized) return;
__wakaru_gPy_initialized = true;
"use strict";
E(), k0r = class {
    constructor(t, e){
        this.piece = t, this.color = e, this.size_left = 0, this.lf_left = 0, this.parent = this, this.left = this, this.right = this;
    }
    next() {
        if (this.right !== Fv) return Xjo(this.right);
        let t = this;
        for(; t.parent !== Fv && t.parent.left !== t;)t = t.parent;
        return t.parent === Fv ? Fv : t.parent;
    }
    prev() {
        if (this.left !== Fv) return T8d(this.left);
        let t = this;
        for(; t.parent !== Fv && t.parent.right !== t;)t = t.parent;
        return t.parent === Fv ? Fv : t.parent;
    }
    detach() {
        this.parent = null, this.left = null, this.right = null;
    }
}, Fv = new k0r(null, 0), Fv.parent = Fv, Fv.left = Fv, Fv.right = Fv, Fv.color = 0;

}
