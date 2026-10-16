import { Ps, tl } from "./HVr.js";
import { qy } from "./charCode.js";
import { WK } from "./domFontInfo.js";
import { uBc } from "./modelLineProjectionData.js";
import { Iwe, ubg } from "./qIc.js";
import { lwe } from "./stringBuilder.js";
import { xpt } from "./textModelEvents.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var i4c, xts, r4c;
export { i4c, r4c, xts };
var __wakaru_pbg_initialized = false;
export function pbg() {
if (__wakaru_pbg_initialized) return;
__wakaru_pbg_initialized = true;
"use strict";
x(), Awe(), qy(), Ps(), gr(), WK(), lwe(), uBc(), xpt(), i4c = Iwe("domLineBreaksComputer", {
    createHTML: (e)=>e
}), xts = new WeakMap, r4c = class Pkm {
    constructor(t){
        this.targetWindow = t;
    }
    static create(t) {
        return new Pkm(new WeakRef(t));
    }
    createLineBreaksComputer(t, n, i, r, s) {
        const o = [], a = [];
        return {
            addRequest: (c, l, u)=>{
                o.push(c), a.push(l);
            },
            finalize: ()=>ubg(tl(this.targetWindow.deref()), o, t, n, i, r, s, a)
        };
    }
};

}
