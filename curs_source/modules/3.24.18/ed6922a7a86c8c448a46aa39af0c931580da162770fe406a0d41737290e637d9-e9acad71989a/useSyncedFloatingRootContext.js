import { J0i } from "./FloatingRootStore.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
var __wakaru_zrl_initialized = false;
export function zrl() {
if (__wakaru_zrl_initialized) return;
__wakaru_zrl_initialized = true;
x(), af(), D0(), J0i();

}
