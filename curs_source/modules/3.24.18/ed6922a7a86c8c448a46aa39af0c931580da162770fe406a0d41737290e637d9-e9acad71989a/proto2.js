import { bGc, mss } from "./field-list.js";
import { AGc } from "./field-normalize.js";
import { _Gc } from "./proto-runtime.js";
import { IGc, vGc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Co;
export { Co };
var __wakaru_vSi_initialized = false;
export function vSi() {
if (__wakaru_vSi_initialized) return;
__wakaru_vSi_initialized = true;
"use strict";
x(), _Gc(), bGc(), AGc(), Co = vGc("proto2", (e)=>new mss(e, (t)=>IGc(t, !1)), (e)=>{
    for (const t of e.getType().fields.byMember()){
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
