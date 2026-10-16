import { BJ } from "./FloatingTree.js";
import { Rkn } from "./PreviewCardContext.js";
import { zll } from "./PreviewCardStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { LE } from "./empty.js";
import { QK } from "./mergeProps.js";
import { s$ } from "./popupStoreUtils.js";
import { Akn, Kll, QCi, Tgt, zds } from "./qIc.js";
import { g_ } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { Hgt } from "./useDismiss.js";
import { af } from "./useIsoLayoutEffect.js";
import { jsx as yTi } from "./react-runtime/react/esm-jsx-runtime-production.js";
var STi;
export { STi };
var __wakaru_Yll_initialized = false;
export function Yll() {
if (__wakaru_Yll_initialized) return;
__wakaru_Yll_initialized = true;
x(), Tgt(), LE(), af(), Rkn(), Ty(), zll(), s$(), g_(), Hgt(), QK(), BJ(), STi = QCi(function(t) {
    return Akn(!0) ? yTi(Kll, {
        ...t
    }) : yTi(zds, {
        children: yTi(Kll, {
            ...t
        })
    });
}), process.env.NODE_ENV !== "production" && (STi.displayName = "PreviewCardRoot");

}
