import { Icg, MTc } from "./generateUniqueID.js";
import { GLt, Kdt } from "./getActivationStart.js";
import { WLt, ypi } from "./getNavigationEntry.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var VLt;
export { VLt };
var __wakaru_upn_initialized = false;
export function upn() {
if (__wakaru_upn_initialized) return;
__wakaru_upn_initialized = true;
"use strict";
x(), fK(), Icg(), GLt(), ypi(), VLt = (e, t = -1)=>{
    const n = WLt();
    let i = "navigate";
    return n && (by.document?.prerendering || Kdt() > 0 ? i = "prerender" : by.document?.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))), {
        name: e,
        value: t,
        rating: "good",
        delta: 0,
        entries: [],
        id: MTc(),
        navigationType: i
    };
};

}
