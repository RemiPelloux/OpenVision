import { wf } from "./Iwo.js";
import { ikg } from "./Ycg.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var vRn, lF, lcs, rkg, dme, Qhl;
export { Qhl, dme, lF, lcs, rkg, vRn };
var __wakaru_eEk_initialized = false;
export function eEk() {
if (__wakaru_eEk_initialized) return;
__wakaru_eEk_initialized = true;
"use strict";
E(), To(), vRn = class {
    constructor(t){
        this.defaultValue = t;
    }
    verify(t) {
        return this.isType(t) ? t : this.defaultValue;
    }
}, lF = class extends vRn {
    isType(t) {
        return typeof t == "boolean";
    }
}, lcs = class extends vRn {
    isType(t) {
        return typeof t == "number";
    }
}, rkg = class extends vRn {
    isType(t) {
        return t instanceof Set;
    }
}, dme = class extends vRn {
    constructor(t, e){
        super(t), this.allowedValues = e;
    }
    isType(t) {
        return this.allowedValues.includes(t);
    }
}, Qhl = class extends vRn {
    constructor(t, e){
        super(t), this.verifier = e;
    }
    verify(t) {
        return this.isType(t) ? ikg(this.verifier, t) : this.defaultValue;
    }
    isType(t) {
        return wf(t);
    }
};

}
