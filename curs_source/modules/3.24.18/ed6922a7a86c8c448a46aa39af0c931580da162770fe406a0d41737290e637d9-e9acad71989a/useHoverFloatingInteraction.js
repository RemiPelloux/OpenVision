import { BJ } from "./FloatingTree.js";
import { Jle } from "./addEventListener.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { uYe } from "./element.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { PBt } from "./mergeCleanups.js";
import { T0i } from "./nodes.js";
import { C5 } from "./owner.js";
import { g_ } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { mhs } from "./useHoverInteractionSharedState.js";
import { vds } from "./useHoverShared.js";
import { af } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
import { A3 } from "./useTimeout.js";
var __wakaru_d1i_initialized = false;
export function d1i() {
if (__wakaru_d1i_initialized) return;
__wakaru_d1i_initialized = true;
x(), Jle(), PBt(), af(), C5(), Cy(), A3(), D0(), Ty(), BJ(), uYe(), T0i(), mhs(), vds(), g_(), cN();

}
