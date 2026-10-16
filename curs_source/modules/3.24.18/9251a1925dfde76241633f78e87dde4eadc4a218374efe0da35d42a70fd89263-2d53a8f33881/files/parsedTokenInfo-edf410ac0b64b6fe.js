import { init_tokenType } from "./tokenType.js";
var __wakaru_init_parsedTokenInfo_initialized = false;
export function init_parsedTokenInfo() {
if (__wakaru_init_parsedTokenInfo_initialized) return;
__wakaru_init_parsedTokenInfo_initialized = true;
init_tokenType();

}
