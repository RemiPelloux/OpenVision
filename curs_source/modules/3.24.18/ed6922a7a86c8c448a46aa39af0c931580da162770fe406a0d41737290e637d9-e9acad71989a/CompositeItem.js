import { LE } from "./empty.js";
import { x } from "./tslib.es6.js";
import { CSl } from "./useCompositeItem.js";
import { wp } from "./useRenderElement.js";
var __wakaru_ESl_initialized = false;
export function ESl() {
if (__wakaru_ESl_initialized) return;
__wakaru_ESl_initialized = true;
x(), LE(), wp(), CSl();

}
