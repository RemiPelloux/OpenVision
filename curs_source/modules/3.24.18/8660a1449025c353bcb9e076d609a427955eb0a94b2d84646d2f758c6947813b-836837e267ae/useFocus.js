import { b_e } from "./addEventListener.js";
import { IRr } from "./createAttribute.js";
import { VS } from "./createBaseUIEventDetails.js";
import { zHe } from "./element.js";
import { Gnt, H8t } from "./engine.js";
import { aT } from "./floating-ui.utils.dom.js";
import { V_n } from "./mergeCleanups.js";
import { Wnt, oRr } from "./os.js";
import { hB } from "./owner.js";
import { Zb } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { M7 } from "./useTimeout.js";
var s2r;
export { s2r };
var __wakaru_dJo_initialized = false;
export function dJo() {
if (__wakaru_dJo_initialized) return;
__wakaru_dJo_initialized = true;
E(), b_e(), V_n(), hB(), M7(), aT(), IRr(), zHe(), VS(), Wnt(), H8t(), $D(), Zb(), s2r = oRr && Gnt;

}
