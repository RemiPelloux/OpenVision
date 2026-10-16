import { KFS } from "./external_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_YFS_initialized = false;
export function YFS() {
if (__wakaru_YFS_initialized) return;
__wakaru_YFS_initialized = true;
E(), KFS();

}
