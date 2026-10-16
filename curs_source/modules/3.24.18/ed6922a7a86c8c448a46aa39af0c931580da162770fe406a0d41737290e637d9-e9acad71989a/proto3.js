import { bGc, mss } from "./field-list.js";
import { AGc } from "./field-normalize.js";
import { _Gc } from "./proto-runtime.js";
import { IGc, p3t, vGc } from "./qIc.js";
import { MKe } from "./scalars.js";
import { x } from "./tslib.es6.js";
var k;
export { k };
var __wakaru_hfe_initialized = false;
export function hfe() {
if (__wakaru_hfe_initialized) return;
__wakaru_hfe_initialized = true;
"use strict";
x(), _Gc(), bGc(), MKe(), AGc(), k = vGc("proto3", (e)=>new mss(e, (t)=>IGc(t, !0)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        if (t.opt) continue;
        const n = t.localName, i = e;
        if (t.repeated) {
            i[n] = [];
            continue;
        }
        switch(t.kind){
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
                i[n] = p3t(t.T, t.L);
                break;
            case "message":
                break;
        }
    }
});

}
