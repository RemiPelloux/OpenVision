import { _lh } from "./CompositeListContext.js";
import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { jQ } from "./useRefWithInit.js";
import { Jy } from "./useStableCallback.js";
var __wakaru_dbn_initialized = false;
export function dbn() {
if (__wakaru_dbn_initialized) return;
__wakaru_dbn_initialized = true;
E(), jQ(), Jy(), jv(), _lh();

}
