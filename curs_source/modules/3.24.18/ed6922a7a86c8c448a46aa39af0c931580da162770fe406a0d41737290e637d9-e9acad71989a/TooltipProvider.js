import { vil } from "./FloatingDelayGroup.js";
import { NTi, Rul } from "./TooltipProviderContext.js";
import { VDg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as Hul from "./react-runtime/react/esm-index-production.js";
import { jsx as Wul } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Sgs;
export { Sgs };
var __wakaru_yOg_initialized = false;
export function yOg() {
if (__wakaru_yOg_initialized) return;
__wakaru_yOg_initialized = true;
x(), Rul(), vil(), Sgs = function(t) {
    const { delay: n, closeDelay: i, timeout: r = 400 } = t, s = Hul.useMemo(()=>({
            delay: n,
            closeDelay: i
        }), [
        n,
        i
    ]), o = Hul.useMemo(()=>({
            open: n,
            close: i
        }), [
        n,
        i
    ]);
    return Wul(NTi.Provider, {
        value: s,
        children: Wul(VDg, {
            delay: o,
            timeoutMs: r,
            children: t.children
        })
    });
}, process.env.NODE_ENV !== "production" && (Sgs.displayName = "TooltipProvider");

}
