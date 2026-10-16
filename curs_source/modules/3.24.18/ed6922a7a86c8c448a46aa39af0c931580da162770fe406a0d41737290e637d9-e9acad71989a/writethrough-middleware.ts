import { C2, Wj } from "./De_3.js";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
var tvv, nvv, ivv, rvv;
export { ivv, nvv, rvv, tvv };
var __wakaru_rFu_initialized = false;
export function rFu() {
if (__wakaru_rFu_initialized) return;
__wakaru_rFu_initialized = true;
"use strict";
x(), Gp(), mde(), tvv = Wj("@anysphere/agent-kv"), nvv = C2("agent_kv.writethrough.get_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore getBlob operations in milliseconds"
}), ivv = C2("agent_kv.writethrough.set_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore setBlob operations in milliseconds"
}), rvv = C2("agent_kv.writethrough.flush.duration_ms", {
    description: "Duration of WritethroughBlobStore flush operations in milliseconds"
});

}
