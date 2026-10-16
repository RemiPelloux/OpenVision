import { io } from "./context.js";
import { w2 } from "./useSSR.js";
import { oa } from "./utils_2.js";
var __wakaru_I6_initialized = false;
export function I6() {
if (__wakaru_I6_initialized) return;
__wakaru_I6_initialized = true;
w2(), io(), oa();

}
