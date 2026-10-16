import { init_dist } from "../../context/dist/index.js";
import { createContextKey2 } from "../../dist_exports.js";
import { init_esm } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/index.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var callerContextKey;
export { callerContextKey };
var __wakaru_init_dist12_initialized = false;
export function init_dist12() {
if (__wakaru_init_dist12_initialized) return;
__wakaru_init_dist12_initialized = true;
"use strict";
init_dist();
init_esm3();
init_esm();
callerContextKey = createContextKey2(void 0, {
    description: "anysphere.callerContext"
});

}
