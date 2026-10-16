import { Ont } from "./process-env.ts";
import { h } from "./tslib.es6.js";
import { execFile as Lnt } from "node:child_process";
import { promisify as xnt } from "node:util";
var Nve;
export { Nve };
var __wakaru_Gnt_initialized = false;
export function Gnt() {
if (__wakaru_Gnt_initialized) return;
__wakaru_Gnt_initialized = true;
"use strict";
h(), Ont(), Nve = xnt(Lnt);

}
