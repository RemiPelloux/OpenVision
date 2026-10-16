import { $Ur } from "./TabSystem.stylex.js";
import { qu } from "./attach.js";
import { cp1 } from "./ipa.js";
import { Cyp } from "./tab-content-renderer-context.js";
import { E } from "./tslib.es6.js";
import { memo as ip1 } from "./react-runtime/react/esm-index-production.js";
import { createContext as tp1 } from "./react-runtime/react/esm-index-production.js";
var qxa, Ryp, Pyp;
export { Pyp, Ryp, qxa };
var __wakaru_Myp_initialized = false;
export function Myp() {
if (__wakaru_Myp_initialized) return;
__wakaru_Myp_initialized = true;
"use strict";
E(), $Ur(), Cyp(), qu(), qxa = tp1(null), Ryp = new Set([
    "tabPushed",
    "tabClosed",
    "tabPropsChanged",
    "tabMoved",
    "stableTabRegistered",
    "stableTabUnregistered",
    "activeTabIdChanged",
    "groupRegistered",
    "groupUnregistered"
]), Pyp = ip1(cp1);

}
