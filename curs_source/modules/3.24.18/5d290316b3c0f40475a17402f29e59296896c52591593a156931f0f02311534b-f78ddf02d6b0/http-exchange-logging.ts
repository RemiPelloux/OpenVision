import { Ff } from "./http-logging.ts";
import { Wt } from "./log-metadata.ts";
import { $r } from "./logger.ts";
import { eo } from "./retry-after-cooldown.ts";
import { h } from "./tslib.es6.js";
import { mm } from "./us.js";
var vm;
export { vm };
var __wakaru_Bl_initialized = false;
export function Bl() {
if (__wakaru_Bl_initialized) return;
__wakaru_Bl_initialized = true;
"use strict";
h(), Ff(), Wt(), $r(), eo(), vm = mm;

}
