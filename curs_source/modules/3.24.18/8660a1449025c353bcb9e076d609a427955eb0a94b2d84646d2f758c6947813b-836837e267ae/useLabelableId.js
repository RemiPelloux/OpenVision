import { VQ } from "./LabelableContext.js";
import { vA } from "./empty.js";
import { aT } from "./floating-ui.utils.dom.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jv } from "./useIsoLayoutEffect.js";
import { jQ } from "./useRefWithInit.js";
import { Jy } from "./useStableCallback.js";
var __wakaru_nit_initialized = false;
export function nit() {
if (__wakaru_nit_initialized) return;
__wakaru_nit_initialized = true;
E(), jv(), Jy(), jQ(), aT(), _A(), VQ(), vA();

}
