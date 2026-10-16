import { zuh } from "./cloudMcpLoopbackLogin.js";
import { WPe } from "./cloudMcpOAuthFlowState.js";
import { en } from "./dom_2.js";
import { Ml } from "./index.ts";
import { x5e } from "./mcp.ts";
import { x } from "./tslib.es6.js";
var Dbo;
export { Dbo };
var __wakaru_Yuh_initialized = false;
export function Yuh() {
if (__wakaru_Yuh_initialized) return;
__wakaru_Yuh_initialized = true;
"use strict";
x(), Ml(), en(), zuh(), WPe(), Dbo = new Set([
    new URL(x5e).hostname,
    "127.0.0.1"
]);

}
