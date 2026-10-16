import { M4p } from "./blob-not-found-error.ts";
import { E4p } from "./blob-read-kind.ts";
import { BSi } from "./blob-store.ts";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { U4, hpe, iie } from "./ipa.js";
import { FSi } from "./serde.ts";
import { E } from "./tslib.es6.js";
import { Y4p } from "./typed-blob-store.ts";
var _L1, bL1, yL1, SL1, kL1;
export { SL1, _L1, bL1, kL1, yL1 };
var __wakaru_wL1_initialized = false;
export function wL1() {
if (__wakaru_wL1_initialized) return;
__wakaru_wL1_initialized = true;
"use strict";
E(), Ng(), iCe(), M4p(), E4p(), BSi(), FSi(), Y4p(), _L1 = iie("@anysphere/agent-kv:reference"), bL1 = 512 * 1024, yL1 = hpe("agent_kv.lazy_reference.cache_miss", {
    description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob",
    labelNames: [
        "blob_type"
    ]
}), SL1 = U4("agent_kv.lazy_reference.deserialize_bytes", {
    description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss",
    labelNames: [
        "blob_type"
    ]
}), kL1 = U4("agent_kv.lazy_reference.deserialize_ms", {
    description: "Time spent deserializing a blob on a large or slow LazyReference cache miss",
    labelNames: [
        "blob_type"
    ]
});

}
