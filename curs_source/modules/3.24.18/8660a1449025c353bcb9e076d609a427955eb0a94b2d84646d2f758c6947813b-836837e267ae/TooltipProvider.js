import { noh } from "./FloatingDelayGroup.js";
import { K7y } from "./LYd.js";
import { $Pr, Whh } from "./TooltipProviderContext.js";
import { E } from "./tslib.es6.js";
import * as rph from "./react-runtime/react/esm-index-production.js";
import { jsx as sph } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Rna;
export { Rna };
var __wakaru_mGy_initialized = false;
export function mGy() {
if (__wakaru_mGy_initialized) return;
__wakaru_mGy_initialized = true;
E(), Whh(), noh(), Rna = function(e) {
    const { delay: n, closeDelay: i, timeout: r = 400 } = e, s = rph.useMemo(()=>({
            delay: n,
            closeDelay: i
        }), [
        n,
        i
    ]), o = rph.useMemo(()=>({
            open: n,
            close: i
        }), [
        n,
        i
    ]);
    return sph($Pr.Provider, {
        value: s,
        children: sph(K7y, {
            delay: o,
            timeoutMs: r,
            children: e.children
        })
    });
}, process.env.NODE_ENV !== "production" && (Rna.displayName = "TooltipProvider");

}
