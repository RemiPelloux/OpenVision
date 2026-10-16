import { Fa, Md } from "./Iwo.js";
import { Cw } from "./charCode.js";
import { she } from "./domFontInfo.js";
import { k7d } from "./modelLineProjectionData.js";
import { Q$e } from "./stringBuilder.js";
import { iBt } from "./textModelEvents.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Xtt, i3y } from "./ze.js";
var vHd, PWo, _Hd;
export { PWo, _Hd, vHd };
var __wakaru_o3y_initialized = false;
export function o3y() {
if (__wakaru_o3y_initialized) return;
__wakaru_o3y_initialized = true;
"use strict";
E(), Ztt(), Cw(), Fa(), To(), she(), Q$e(), k7d(), iBt(), vHd = Xtt("domLineBreaksComputer", {
    createHTML: (t)=>t
}), PWo = new WeakMap, _Hd = class rRb {
    constructor(e){
        this.targetWindow = e;
    }
    static create(e) {
        return new rRb(new WeakRef(e));
    }
    createLineBreaksComputer(e, n, i, r, s) {
        const o = [], a = [];
        return {
            addRequest: (l, c, u)=>{
                o.push(l), a.push(c);
            },
            finalize: ()=>i3y(Md(this.targetWindow.deref()), o, e, n, i, r, s, a)
        };
    }
};

}
