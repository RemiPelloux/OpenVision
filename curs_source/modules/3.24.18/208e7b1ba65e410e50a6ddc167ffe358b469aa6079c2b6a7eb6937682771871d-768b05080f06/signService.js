import { Nlt, w9e } from "./abstractSignService.js";
import { h } from "./tslib.es6.js";
var E9e;
export { E9e };
var __wakaru_Dlt_initialized = false;
export function Dlt() {
if (__wakaru_Dlt_initialized) return;
__wakaru_Dlt_initialized = true;
"use strict";
h(), Nlt(), E9e = class extends w9e {
    getValidator() {
        return this.vsda().then((e)=>new e.validator);
    }
    signValue(e) {
        return this.vsda().then((t)=>new t.signer().sign(e));
    }
    async vsda() {
        const e = "vsda", { default: t } = await import(e);
        return t;
    }
};

}
