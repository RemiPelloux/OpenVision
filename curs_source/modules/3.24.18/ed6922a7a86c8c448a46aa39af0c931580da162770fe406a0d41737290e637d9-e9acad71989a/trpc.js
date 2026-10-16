import { NT } from "./currentScopes.js";
import { tJ } from "./exports.js";
import { KH } from "./index_2.js";
import { Rdt } from "./normalize.js";
import { wV } from "./object.js";
import { W9 } from "./semanticAttributes.js";
import { x } from "./tslib.es6.js";
var RVr;
export { RVr };
var __wakaru_Ssg_initialized = false;
export function Ssg() {
if (__wakaru_Ssg_initialized) return;
__wakaru_Ssg_initialized = true;
"use strict";
x(), NT(), tJ(), W9(), KH(), Rdt(), wV(), RVr = {
    mechanism: {
        handled: !1,
        type: "auto.rpc.trpc.middleware"
    }
};

}
