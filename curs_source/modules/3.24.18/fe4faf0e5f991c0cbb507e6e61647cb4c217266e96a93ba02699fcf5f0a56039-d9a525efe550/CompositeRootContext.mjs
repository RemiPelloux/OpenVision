import { i } from "./plugin-brand-icon.js";
import * as JWn from "./react-runtime/react/esm-index-production.js";
function bIe(r = !1) {
    const e = JWn.useContext(yIe);
    if (e === void 0 && !r) throw new Error("Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
    return e;
}
var yIe;
export { bIe, yIe };
var __wakaru_wIe_initialized = false;
export function wIe() {
if (__wakaru_wIe_initialized) return;
__wakaru_wIe_initialized = true;
"use client";
yIe = JWn.createContext(void 0), yIe.displayName = "CompositeRootContext", i(bIe, "useCompositeRootContext");

}
