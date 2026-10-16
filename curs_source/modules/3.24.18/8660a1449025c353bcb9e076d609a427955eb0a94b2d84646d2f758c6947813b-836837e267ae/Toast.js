import { TT1 } from "./ToastContent.js";
import { qu } from "./attach.js";
import { _bi, yT1 } from "./index_196.js";
import { IT1, oRp, vHr } from "./ipa.js";
import { E } from "./tslib.es6.js";
var aRp, Hwt;
export { Hwt, aRp };
var __wakaru_AT1_initialized = false;
export function AT1() {
if (__wakaru_AT1_initialized) return;
__wakaru_AT1_initialized = true;
"use strict";
E(), yT1(), TT1(), qu(), aRp = {
    base: {
        kmVPX3: "ui-1717udv",
        kWkggS: "ui-jbqb8w",
        kMzoRj: "ui-c342km",
        ksu8eU: "ui-ng3xce",
        kVAM5u: "ui-9r1u3d",
        kGVxlE: "ui-1gnnqk1",
        kaIpWk: "ui-2u8bby",
        kfzvcC: "ui-67bb7w",
        kzqmXN: "ui-1bl4301",
        $$css: !0
    }
}, Hwt = Object.assign((t)=>{
    const e = IT1(t);
    return oRp(e);
}, {
    success: (t)=>vHr("success", t),
    error: (t)=>vHr("error", t),
    warning: (t)=>vHr("warning", t),
    info: (t)=>vHr("info", t),
    dismiss: (t)=>{
        _bi.dismiss(t);
    },
    dismissAll: ()=>{
        _bi.dismiss();
    }
});

}
