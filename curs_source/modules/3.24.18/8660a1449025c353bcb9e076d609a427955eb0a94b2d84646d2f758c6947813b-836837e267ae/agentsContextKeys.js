import { D } from "./Iwo.js";
import { Hi, cn } from "./contextkey.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var DGt;
export { DGt };
var __wakaru_BXr_initialized = false;
export function BXr() {
if (__wakaru_BXr_initialized) return;
__wakaru_BXr_initialized = true;
"use strict";
E(), Bt(), Hi(), ((t)=>{
    t.agentsPaneFocused = new cn("agentsPaneFocused", !1, {
        type: "boolean",
        description: D(4751, null)
    }), t.agentNavigationMode = new cn("agentNavigationMode", !1, {
        type: "boolean",
        description: D(4752, null)
    });
})(DGt || (DGt = {}));

}
