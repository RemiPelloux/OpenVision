import { vhe } from "./FloatingTree.js";
import { b_e } from "./addEventListener.js";
import { VS } from "./createBaseUIEventDetails.js";
import { zHe } from "./element.js";
import { aT } from "./floating-ui.utils.dom.js";
import { V_n } from "./mergeCleanups.js";
import { ERr } from "./nodes.js";
import { hB } from "./owner.js";
import { Zb } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { mJo } from "./useHoverInteractionSharedState.js";
import { gQo } from "./useHoverShared.js";
import { jv } from "./useIsoLayoutEffect.js";
import { Jy } from "./useStableCallback.js";
import { M7 } from "./useTimeout.js";
var __wakaru_l2r_initialized = false;
export function l2r() {
if (__wakaru_l2r_initialized) return;
__wakaru_l2r_initialized = true;
E(), b_e(), V_n(), jv(), hB(), Jy(), M7(), aT(), VS(), vhe(), zHe(), ERr(), mJo(), gQo(), Zb(), $D();

}
