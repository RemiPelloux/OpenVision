import { smS } from "./encode-html.js";
import { nha } from "./escape_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_omS_initialized = false;
export function omS() {
if (__wakaru_omS_initialized) return;
__wakaru_omS_initialized = true;
E(), nha(), smS();

}
