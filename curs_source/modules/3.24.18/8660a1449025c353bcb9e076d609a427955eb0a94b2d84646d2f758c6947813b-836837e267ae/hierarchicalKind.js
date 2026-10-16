import { E } from "./tslib.es6.js";
var NBt, DC;
export { DC, NBt };
var __wakaru_o_e_initialized = false;
export function o_e() {
if (__wakaru_o_e_initialized) return;
__wakaru_o_e_initialized = true;
"use strict";
E(), NBt = class lXs {
    constructor(e){
        this.value = e;
    }
    equals(e) {
        return this.value === e.value;
    }
    contains(e) {
        return this.equals(e) || this.value === "" || e.value.startsWith(this.value + lXs.sep);
    }
    intersects(e) {
        return this.contains(e) || e.contains(this);
    }
    append(...e) {
        return new lXs((this.value ? [
            this.value,
            ...e
        ] : e).join(lXs.sep));
    }
}, NBt.sep = ".", NBt.None = new NBt("@@none@@"), NBt.Empty = new NBt(""), DC = NBt;

}
