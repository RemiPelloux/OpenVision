import { C2 } from "./De_3.js";
import { mde } from "./index_4.ts";
import { DMn } from "./serde.ts";
import { x } from "./tslib.es6.js";
var JNu, bfv, yfv;
export { JNu, bfv, yfv };
var __wakaru_MMn_initialized = false;
export function MMn() {
if (__wakaru_MMn_initialized) return;
__wakaru_MMn_initialized = true;
"use strict";
x(), mde(), DMn(), JNu = {
    getBlob: async ()=>{}
}, bfv = C2("agent_kv.in_memory.get_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore getBlob operations in milliseconds"
}), yfv = C2("agent_kv.in_memory.set_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore setBlob operations in milliseconds"
});

}
