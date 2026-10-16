import { Oj, xM } from "./field-list.js";
import { jj } from "./field-normalize.js";
import { Dj } from "./proto-runtime.js";
import { $j, Nj } from "./proto3.js";
import { h } from "./tslib.es6.js";
var P;
export { P };
var __wakaru_ey_initialized = false;
export function ey() {
if (__wakaru_ey_initialized) return;
__wakaru_ey_initialized = true;
"use strict";
h(), Dj(), Oj(), jj(), P = Nj("proto2", (e)=>new xM(e, (t)=>$j(t, !1)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        const n = t.localName, r = e;
        if (t.repeated) {
            r[n] = [];
            continue;
        }
        switch(t.kind){
            case "oneof":
                r[n] = {
                    case: void 0
                };
                break;
            case "map":
                r[n] = {};
                break;
            case "scalar":
            case "enum":
            case "message":
                break;
        }
    }
});

}
