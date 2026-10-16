import { Wxa } from "./tab-system-bar.js";
import { Xvi } from "./tab-system-helpers.js";
import { E } from "./tslib.es6.js";
var Lwn, Hyp, Wyp;
export { Hyp, Lwn, Wyp };
var __wakaru_Gyp_initialized = false;
export function Gyp() {
if (__wakaru_Gyp_initialized) return;
__wakaru_Gyp_initialized = true;
"use strict";
E(), Wxa(), Xvi(), Lwn = ()=>{}, Hyp = {
    focusOnActivation: !0
}, Wyp = new Set([
    "stableTabRegistered",
    "stableTabUnregistered",
    "tabPropsChanged",
    "tabDirtyChanged",
    "tabLabelChanged",
    "tabIconUrlChanged"
]);

}
