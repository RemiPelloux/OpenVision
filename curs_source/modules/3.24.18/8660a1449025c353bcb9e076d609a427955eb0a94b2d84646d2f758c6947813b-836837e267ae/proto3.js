import { ZMo, ndd } from "./field-list.js";
import { hdd } from "./field-normalize.js";
import { tdd } from "./proto-runtime.js";
import { D_t } from "./scalars.js";
import { E } from "./tslib.es6.js";
import { ddd, edd, mpn } from "./ze.js";
var x;
export { x };
var __wakaru_bAe_initialized = false;
export function bAe() {
if (__wakaru_bAe_initialized) return;
__wakaru_bAe_initialized = true;
"use strict";
E(), tdd(), ndd(), D_t(), hdd(), x = edd("proto3", (t)=>new ZMo(t, (e)=>ddd(e, !0)), (t)=>{
    for (const e of t.getType().fields.byMember()){
        if (e.opt) continue;
        const n = e.localName, i = t;
        if (e.repeated) {
            i[n] = [];
            continue;
        }
        switch(e.kind){
            case "oneof":
                i[n] = {
                    case: void 0
                };
                break;
            case "enum":
                i[n] = 0;
                break;
            case "map":
                i[n] = {};
                break;
            case "scalar":
                i[n] = mpn(e.T, e.L);
                break;
            case "message":
                break;
        }
    }
});

}
