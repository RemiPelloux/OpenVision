import { ZMo, ndd } from "./field-list.js";
import { hdd } from "./field-normalize.js";
import { tdd } from "./proto-runtime.js";
import { E } from "./tslib.es6.js";
import { ddd, edd } from "./ze.js";
var Ba;
export { Ba };
var __wakaru_Q_r_initialized = false;
export function Q_r() {
if (__wakaru_Q_r_initialized) return;
__wakaru_Q_r_initialized = true;
"use strict";
E(), tdd(), ndd(), hdd(), Ba = edd("proto2", (t)=>new ZMo(t, (e)=>ddd(e, !1)), (t)=>{
    for (const e of t.getType().fields.byMember()){
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
            case "map":
                i[n] = {};
                break;
            case "scalar":
            case "enum":
            case "message":
                break;
        }
    }
});

}
