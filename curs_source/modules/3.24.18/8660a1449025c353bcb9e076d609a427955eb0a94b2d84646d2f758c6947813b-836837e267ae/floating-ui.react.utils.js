import { aT } from "./floating-ui.utils.dom.js";
import { Vnt } from "./floating-ui.utils.js";
import { xuh } from "./index.esm.js";
import { E } from "./tslib.es6.js";
import { useLayoutEffect as CHy } from "./react-runtime/react/esm-index-production.js";
import * as sPr from "./react-runtime/react/esm-index-production.js";
var _ta, Buh, cPr, uPr, Uuh, juh, $uh, Huh, Z3, Wuh, Guh, quh, Ibn;
export { $uh, Buh, Guh, Huh, Ibn, Uuh, Wuh, Z3, _ta, cPr, juh, quh, uPr };
var __wakaru_zuh_initialized = false;
export function zuh() {
if (__wakaru_zuh_initialized) return;
__wakaru_zuh_initialized = true;
E(), aT(), Vnt(), xuh(), _ta = "data-floating-ui-focusable", Buh = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", cPr = "ArrowLeft", uPr = "ArrowRight", Uuh = "ArrowUp", juh = "ArrowDown", $uh = typeof document < "u", Huh = function() {}, Z3 = $uh ? CHy : Huh, Wuh = {
    ...sPr
}, Guh = Wuh.useInsertionEffect, quh = Guh || ((t)=>t()), Ibn = ()=>({
        getShadowRoot: !0,
        displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    });

}
