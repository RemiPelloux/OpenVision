var crypto4;
export { crypto4 };
var __wakaru_init_index_node_initialized = false;
export function init_index_node() {
if (__wakaru_init_index_node_initialized) return;
__wakaru_init_index_node_initialized = true;
crypto4 = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("node:crypto").then((m2)=>m2.webcrypto);

}
