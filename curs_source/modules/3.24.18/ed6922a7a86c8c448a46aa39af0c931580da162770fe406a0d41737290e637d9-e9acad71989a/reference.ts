import { C2, Wj, xee } from "./De_3.js";
import { l2u } from "./blob-not-found-error.ts";
import { i2u } from "./blob-read-kind.ts";
import { MMn } from "./blob-store.ts";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { DMn } from "./serde.ts";
import { x } from "./tslib.es6.js";
import { sFu } from "./typed-blob-store.ts";
var ovv, avv, cvv, lvv, uvv;
export { avv, cvv, lvv, ovv, uvv };
var __wakaru_dvv_initialized = false;
export function dvv() {
if (__wakaru_dvv_initialized) return;
__wakaru_dvv_initialized = true;
"use strict";
x(), Gp(), mde(), l2u(), i2u(), MMn(), DMn(), sFu(), ovv = Wj("@anysphere/agent-kv:reference"), avv = 512 * 1024, cvv = xee("agent_kv.lazy_reference.cache_miss", {
    description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob",
    labelNames: [
        "blob_type"
    ]
}), lvv = C2("agent_kv.lazy_reference.deserialize_bytes", {
    description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss",
    labelNames: [
        "blob_type"
    ]
}), uvv = C2("agent_kv.lazy_reference.deserialize_ms", {
    description: "Time spent deserializing a blob on a large or slow LazyReference cache miss",
    labelNames: [
        "blob_type"
    ]
});

}
