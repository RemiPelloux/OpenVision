import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { init_common9 } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var parametersSchema15;
export { parametersSchema15 };
var __wakaru_init_fetch4_initialized = false;
export function init_fetch4() {
if (__wakaru_init_fetch4_initialized) return;
__wakaru_init_fetch4_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_zod();
init_common9();
parametersSchema15 = external_exports.object({
    url: external_exports.string().describe("The URL to fetch")
});

}
