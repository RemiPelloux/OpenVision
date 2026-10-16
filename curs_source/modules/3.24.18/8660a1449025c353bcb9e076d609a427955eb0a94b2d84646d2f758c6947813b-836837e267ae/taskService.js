import { D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Hi, cn, mt } from "./contextkey.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var $_l, $2n, H_l, SRi, W_l, B6, G9e;
export { $2n, $_l, B6, G9e, H_l, SRi, W_l };
var __wakaru_q9e_initialized = false;
export function q9e() {
if (__wakaru_q9e_initialized) return;
__wakaru_q9e_initialized = true;
"use strict";
E(), Bt(), It(), Hi(), $_l = new cn("customExecutionSupported", !1, D(10179, null)), $2n = new cn("shellExecutionSupported", !1, D(10180, null)), H_l = new cn("taskCommandsRegistered", !1, D(10181, null)), SRi = new cn("processExecutionSupported", !1, D(10182, null)), W_l = new cn("serverlessWebContext", !1, D(10183, null)), B6 = mt.or(mt.and($2n, SRi), $_l), G9e = jn("taskService");

}
