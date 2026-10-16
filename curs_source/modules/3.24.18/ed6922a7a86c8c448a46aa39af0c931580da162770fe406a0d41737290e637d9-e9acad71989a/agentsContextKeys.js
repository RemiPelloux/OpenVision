import { S } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var lPe;
export { lPe };
var __wakaru_NNn_initialized = false;
export function NNn() {
if (__wakaru_NNn_initialized) return;
__wakaru_NNn_initialized = true;
"use strict";
x(), rt(), dn(), ((e)=>{
    e.agentsPaneFocused = new At("agentsPaneFocused", !1, {
        type: "boolean",
        description: S(4751, null)
    }), e.agentNavigationMode = new At("agentNavigationMode", !1, {
        type: "boolean",
        description: S(4752, null)
    });
})(lPe || (lPe = {}));

}
