import { tbn } from "./composite.js";
import { vA } from "./empty.js";
import { Sne } from "./event_3.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { Jy } from "./useStableCallback.js";
import { M7 } from "./useTimeout.js";
var __wakaru_bJo_initialized = false;
export function bJo() {
if (__wakaru_bJo_initialized) return;
__wakaru_bJo_initialized = true;
E(), jv(), Jy(), M7(), vA(), tbn(), Sne(), $D();

}
