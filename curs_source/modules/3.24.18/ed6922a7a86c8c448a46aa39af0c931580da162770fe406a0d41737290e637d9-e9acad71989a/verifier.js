import { dp } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
function uNh(e, t) {
    const n = Object.create(null);
    for(const i in e)if (Object.hasOwnProperty.call(e, i)) {
        const r = e[i];
        n[i] = r.verify(t[i]);
    }
    return n;
}
var vqt, pL, Ttr, dNh, dte, xIo;
export { Ttr, dNh, dte, pL, uNh, vqt, xIo };
var __wakaru_Qo__initialized = false;
export function Qo_() {
if (__wakaru_Qo__initialized) return;
__wakaru_Qo__initialized = true;
"use strict";
x(), gr(), vqt = class {
    constructor(e){
        this.defaultValue = e;
    }
    verify(e) {
        return this.isType(e) ? e : this.defaultValue;
    }
}, pL = class extends vqt {
    isType(e) {
        return typeof e == "boolean";
    }
}, Ttr = class extends vqt {
    isType(e) {
        return typeof e == "number";
    }
}, dNh = class extends vqt {
    isType(e) {
        return e instanceof Set;
    }
}, dte = class extends vqt {
    constructor(e, t){
        super(e), this.allowedValues = t;
    }
    isType(e) {
        return this.allowedValues.includes(e);
    }
}, xIo = class extends vqt {
    constructor(e, t){
        super(e), this.verifier = t;
    }
    verify(e) {
        return this.isType(e) ? uNh(this.verifier, e) : this.defaultValue;
    }
    isType(e) {
        return dp(e);
    }
};

}
