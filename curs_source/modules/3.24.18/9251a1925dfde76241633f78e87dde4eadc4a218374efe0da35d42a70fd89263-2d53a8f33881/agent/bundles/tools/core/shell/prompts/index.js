import { init_dsv32 } from "./dsv3.js";
import { init_latest2 } from "./latest.js";
import { init_sandbox_shared } from "./sandbox-shared.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_dist32 } from "../../../../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_prompts_initialized = false;
export function init_prompts() {
if (__wakaru_init_prompts_initialized) return;
__wakaru_init_prompts_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
init_zod();
init_dsv32();
init_latest2();
init_sandbox_shared();

}
