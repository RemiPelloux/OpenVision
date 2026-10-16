import { Jle } from "./addEventListener.js";
import { E0i } from "./createAttribute.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { uYe } from "./element.js";
import { G5e, Rgt } from "./engine.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { PBt } from "./mergeCleanups.js";
import { W5e, s0i } from "./os.js";
import { C5 } from "./owner.js";
import { g_ } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { A3 } from "./useTimeout.js";
var c1i;
export { c1i };
var __wakaru_dhs_initialized = false;
export function dhs() {
if (__wakaru_dhs_initialized) return;
__wakaru_dhs_initialized = true;
x(), Jle(), PBt(), C5(), A3(), D0(), E0i(), uYe(), Ty(), W5e(), Rgt(), cN(), g_(), c1i = s0i && G5e;

}
