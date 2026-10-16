import { vvr } from "./Iwr.js";
import { i } from "./plugin-brand-icon.js";
import { p5i } from "./to-decimal.js";
import { d5i } from "./to-hexadecimal.js";
import { g5i } from "./to-named.js";
var __wakaru_b5i_initialized = false;
export function b5i() {
if (__wakaru_b5i_initialized) return;
__wakaru_b5i_initialized = true;
d5i(), p5i(), g5i(), i(vvr, "formatSmart");

}
