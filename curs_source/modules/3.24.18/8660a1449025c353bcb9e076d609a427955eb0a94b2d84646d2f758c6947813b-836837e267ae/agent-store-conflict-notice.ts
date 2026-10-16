import { jei } from "./hook_additional_context_pb.js";
import { nl } from "./index.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { E } from "./tslib.es6.js";
import { BT } from "./yBp.js";
var Iym, e61;
export { Iym, e61 };
var __wakaru_t61_initialized = false;
export function t61() {
if (__wakaru_t61_initialized) return;
__wakaru_t61_initialized = true;
"use strict";
E(), nl(), jei(), Bx(), zI(), Iym = class {
    async execute(t, e) {
        return e.op === "ack" ? {
            kind: "acked",
            count: 0
        } : e.op === "release" ? {
            kind: "released",
            count: 0
        } : e.op === "noteDeferredEagerWrittenPaths" ? {
            kind: "noted",
            count: 0
        } : {
            kind: "not-applicable"
        };
    }
}, e61 = BT(pT.agentStoreConflictNoticeExecutor, (t)=>new Iym, (t, e)=>{});

}
