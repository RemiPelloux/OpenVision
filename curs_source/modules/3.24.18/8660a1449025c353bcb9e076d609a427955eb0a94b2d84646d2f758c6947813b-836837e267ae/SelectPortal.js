import { K8t, Y8t } from "./FloatingPortal.js";
import { Ic, Qnt } from "./LYd.js";
import { FJo, Rjy } from "./SelectPortalContext.js";
import { tWe } from "./SelectRootContext.js";
import { _S, iit } from "./store_4.js";
import { E } from "./tslib.es6.js";
import { TW } from "./useStore.js";
import * as Pjy from "./react-runtime/react/esm-index-production.js";
import { jsx as glh } from "./react-runtime/react/esm-jsx-runtime-production.js";
var BJo;
export { BJo };
var __wakaru_Mjy_initialized = false;
export function Mjy() {
if (__wakaru_Mjy_initialized) return;
__wakaru_Mjy_initialized = true;
E(), Rjy(), tWe(), iit(), TW(), Y8t(), BJo = Pjy.forwardRef(function(e, n) {
    const { store: i } = Qnt(), r = Ic(i, _S.mounted), s = Ic(i, _S.forceMount);
    return r || s ? glh(FJo.Provider, {
        value: !0,
        children: glh(K8t, {
            ref: n,
            ...e
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (BJo.displayName = "SelectPortal");

}
