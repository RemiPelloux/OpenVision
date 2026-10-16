import { Jll, wTi } from "./FloatingPortalLite.js";
import { Rkn } from "./PreviewCardContext.js";
import { Zll, kTi } from "./PreviewCardPortalContext.js";
import { Akn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as S2g from "./react-runtime/react/esm-index-production.js";
import { jsx as eul } from "./react-runtime/react/esm-jsx-runtime-production.js";
var CTi;
export { CTi };
var __wakaru_tul_initialized = false;
export function tul() {
if (__wakaru_tul_initialized) return;
__wakaru_tul_initialized = true;
x(), Rkn(), Zll(), Jll(), CTi = S2g.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t;
    return Akn().useState("mounted") || i ? eul(kTi.Provider, {
        value: i,
        children: eul(wTi, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (CTi.displayName = "PreviewCardPortal");

}
