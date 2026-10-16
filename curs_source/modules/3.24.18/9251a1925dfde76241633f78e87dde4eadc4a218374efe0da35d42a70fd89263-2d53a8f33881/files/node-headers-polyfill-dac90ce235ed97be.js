import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { require_undici } from "../../../../../../undici@5.29.0/node_modules/undici/index.js";
var import_undici, major2;
export { import_undici, major2 };
var __wakaru_init_node_headers_polyfill_initialized = false;
export function init_node_headers_polyfill() {
if (__wakaru_init_node_headers_polyfill_initialized) return;
__wakaru_init_node_headers_polyfill_initialized = true;
import_undici = __toESM(require_undici(), 1);
[major2] = process.versions.node.split(".").map((value)=>parseInt(value, 10));
if (major2 < 18) {
    if (typeof globalThis.Headers === "undefined") {
        globalThis.Headers = import_undici.Headers;
    }
}

}
