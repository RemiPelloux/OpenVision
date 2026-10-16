import { io } from "./context.js";
import { oa } from "./utils_2.js";
var __wakaru_w2_initialized = false;
export function w2() {
if (__wakaru_w2_initialized) return;
__wakaru_w2_initialized = true;
io(), oa();

}
