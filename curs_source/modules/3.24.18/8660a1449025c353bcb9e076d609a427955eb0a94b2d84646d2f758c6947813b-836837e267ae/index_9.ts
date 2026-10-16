import { P61 } from "./claude-code-mapper.ts";
import { s7a } from "./claude-code-types.ts";
import { v41 } from "./hooksConfig.ts";
import { N61 } from "./matcher.ts";
import { gSm } from "./normalize.ts";
import { g41 } from "./sanitize-system-reminder.ts";
import { f41 } from "./transport.ts";
import { E } from "./tslib.es6.js";
import { d7a } from "./types.ts";
var __wakaru_tCt_initialized = false;
export function tCt() {
if (__wakaru_tCt_initialized) return;
__wakaru_tCt_initialized = true;
E(), P61(), s7a(), N61(), gSm(), g41(), f41(), d7a(), v41();

}
