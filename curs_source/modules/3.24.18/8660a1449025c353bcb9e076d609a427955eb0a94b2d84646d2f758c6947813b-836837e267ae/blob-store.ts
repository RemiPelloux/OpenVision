import { iCe } from "./index_4.ts";
import { U4 } from "./ipa.js";
import { FSi } from "./serde.ts";
import { E } from "./tslib.es6.js";
var rzr, UN1, jN1;
export { UN1, jN1, rzr };
var __wakaru_BSi_initialized = false;
export function BSi() {
if (__wakaru_BSi_initialized) return;
__wakaru_BSi_initialized = true;
"use strict";
E(), iCe(), FSi(), rzr = {
    getBlob: async ()=>{}
}, UN1 = U4("agent_kv.in_memory.get_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore getBlob operations in milliseconds"
}), jN1 = U4("agent_kv.in_memory.set_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore setBlob operations in milliseconds"
});

}
