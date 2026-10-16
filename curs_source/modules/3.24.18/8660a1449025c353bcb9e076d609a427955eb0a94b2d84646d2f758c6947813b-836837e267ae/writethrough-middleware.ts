import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { U4, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
var pL1, mL1, gL1, fL1;
export { fL1, gL1, mL1, pL1 };
var __wakaru_K4p_initialized = false;
export function K4p() {
if (__wakaru_K4p_initialized) return;
__wakaru_K4p_initialized = true;
"use strict";
E(), Ng(), iCe(), pL1 = iie("@anysphere/agent-kv"), mL1 = U4("agent_kv.writethrough.get_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore getBlob operations in milliseconds"
}), gL1 = U4("agent_kv.writethrough.set_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore setBlob operations in milliseconds"
}), fL1 = U4("agent_kv.writethrough.flush.duration_ms", {
    description: "Duration of WritethroughBlobStore flush operations in milliseconds"
});

}
