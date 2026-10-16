import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
var import_node_tls, proxyUrl;
export { import_node_tls, proxyUrl };
var __wakaru_init_proxy_fetch_initialized = false;
export function init_proxy_fetch() {
if (__wakaru_init_proxy_fetch_initialized) return;
__wakaru_init_proxy_fetch_initialized = true;
"use strict";
import_node_tls = __toESM(require("node:tls"), 1);
proxyUrl = process.env.HTTPS_PROXY || process.env.https_proxy || void 0;

}
