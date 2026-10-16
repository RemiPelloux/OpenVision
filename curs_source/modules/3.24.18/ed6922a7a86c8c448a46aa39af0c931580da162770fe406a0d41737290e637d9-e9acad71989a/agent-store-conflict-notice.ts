import { Nw } from "./A3u.js";
import { Vxn } from "./hook_additional_context_pb.js";
import { Ml } from "./index.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { x } from "./tslib.es6.js";
var zDd, tkv;
export { tkv, zDd };
var __wakaru_nkv_initialized = false;
export function nkv() {
if (__wakaru_nkv_initialized) return;
__wakaru_nkv_initialized = true;
"use strict";
x(), Ml(), Vxn(), D1(), F0(), zDd = class {
    async execute(e, t) {
        return t.op === "ack" ? {
            kind: "acked",
            count: 0
        } : t.op === "release" ? {
            kind: "released",
            count: 0
        } : t.op === "noteDeferredEagerWrittenPaths" ? {
            kind: "noted",
            count: 0
        } : {
            kind: "not-applicable"
        };
    }
}, tkv = Nw(mw.agentStoreConflictNoticeExecutor, (e)=>new zDd, (e, t)=>{});

}
