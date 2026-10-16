import { Gi } from "./error-message-utils.ts";
import { gs } from "./oauth-errors.ts";
import { Qa } from "./permanent-grant-failure.ts";
import { Xi, cn } from "./reconnect-manager.ts";
import { h } from "./tslib.es6.js";
var ym, ro, Sm, bm, wm;
export { Sm, bm, ro, wm, ym };
var __wakaru_Wl_initialized = false;
export function Wl() {
if (__wakaru_Wl_initialized) return;
__wakaru_Wl_initialized = true;
"use strict";
h(), Qa(), Gi(), cn(), gs(), ym = "mcp_oauth_refresh_policy", ro = {
    classifyBeforeWipe: !1
}, Sm = new Set([
    "AbortError",
    "TimeoutError",
    "TemporarilyUnavailableError"
]), bm = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, wm = Xi.filter((e)=>e.source !== "fetch failed");

}
