import { K8t, Y8t } from "./FloatingPortal.js";
import { FZh, R4r } from "./PopoverPortalContext.js";
import { Okt } from "./PopoverRootContext.js";
import { Lkt } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { jsx as BZh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Y6S from "./react-runtime/react/esm-index-production.js";
var BSa;
export { BSa };
var __wakaru_X6S_initialized = false;
export function X6S() {
if (__wakaru_X6S_initialized) return;
__wakaru_X6S_initialized = true;
E(), Okt(), FZh(), Y8t(), BSa = Y6S.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e, { store: s } = Lkt();
    return s.useState("mounted") || i ? BZh(R4r.Provider, {
        value: i,
        children: BZh(K8t, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (BSa.displayName = "PopoverPortal");

}
