import { vhe } from "./FloatingTree.js";
import { Gci, JAr, O8t, VQo, dhh } from "./LYd.js";
import { qci } from "./PreviewCardContext.js";
import { uhh } from "./PreviewCardStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { vA } from "./empty.js";
import { mne } from "./mergeProps.js";
import { FY } from "./popupStoreUtils.js";
import { Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { J8t } from "./useDismiss.js";
import { jv } from "./useIsoLayoutEffect.js";
import { jsx as wPr } from "./react-runtime/react/esm-jsx-runtime-production.js";
var CPr;
export { CPr };
var __wakaru_hhh_initialized = false;
export function hhh() {
if (__wakaru_hhh_initialized) return;
__wakaru_hhh_initialized = true;
E(), O8t(), vA(), jv(), qci(), VS(), uhh(), FY(), Zb(), J8t(), mne(), vhe(), CPr = JAr(function(e) {
    return Gci(!0) ? wPr(dhh, {
        ...e
    }) : wPr(VQo, {
        children: wPr(dhh, {
            ...e
        })
    });
}), process.env.NODE_ENV !== "production" && (CPr.displayName = "PreviewCardRoot");

}
