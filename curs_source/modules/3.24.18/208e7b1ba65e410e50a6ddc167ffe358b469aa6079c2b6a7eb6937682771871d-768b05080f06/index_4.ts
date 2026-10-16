import { Gnt } from "./git-exec.ts";
import { h } from "./tslib.es6.js";
import { Ant } from "./util.ts";
var __wakaru_Vnt_initialized = false;
export function Vnt() {
if (__wakaru_Vnt_initialized) return;
__wakaru_Vnt_initialized = true;
h(), Gnt(), Ant();

}
