import { BB } from "./Iwr.js";
import { u5i } from "./core.js";
import { b5i } from "./format-smart.js";
import { i } from "./plugin-brand-icon.js";
var __wakaru_y5i_initialized = false;
export function y5i() {
if (__wakaru_y5i_initialized) return;
__wakaru_y5i_initialized = true;
u5i(), b5i(), i(BB, "stringifyEntities");

}
