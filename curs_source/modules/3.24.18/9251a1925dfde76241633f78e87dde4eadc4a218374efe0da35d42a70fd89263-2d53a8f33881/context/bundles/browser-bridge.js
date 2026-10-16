var BYTE_TO_HEX, ID_ENTROPY_POOL, idEntropyPoolOffset;
export { BYTE_TO_HEX, ID_ENTROPY_POOL, idEntropyPoolOffset };
var __wakaru_init_browser_bridge_initialized = false;
export function init_browser_bridge() {
if (__wakaru_init_browser_bridge_initialized) return;
__wakaru_init_browser_bridge_initialized = true;
"use strict";
BYTE_TO_HEX = Array.from({
    length: 256
}, (_2, byte)=>byte.toString(16).padStart(2, "0"));
ID_ENTROPY_POOL = new Uint8Array(1024);
idEntropyPoolOffset = ID_ENTROPY_POOL.length;

}
