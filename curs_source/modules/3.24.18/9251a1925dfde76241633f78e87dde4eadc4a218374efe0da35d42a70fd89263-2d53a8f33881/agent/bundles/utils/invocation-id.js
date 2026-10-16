import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { LRUCache } from "../../../utils/dist/lru-cache.js";
var invocationCounter, INVOCATION_SUFFIX_ALPHABET, defaultGenerator, invocationIdGeneratorKey;
export { INVOCATION_SUFFIX_ALPHABET, defaultGenerator, invocationCounter, invocationIdGeneratorKey };
var __wakaru_init_invocation_id_initialized = false;
export function init_invocation_id() {
if (__wakaru_init_invocation_id_initialized) return;
__wakaru_init_invocation_id_initialized = true;
"use strict";
init_dist();
init_dist3();
invocationCounter = new LRUCache({
    max: 1e5
});
INVOCATION_SUFFIX_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";
defaultGenerator = ()=>{
    return crypto.randomUUID();
};
invocationIdGeneratorKey = createKey(Symbol("invocationIdGenerator"), defaultGenerator);

}
