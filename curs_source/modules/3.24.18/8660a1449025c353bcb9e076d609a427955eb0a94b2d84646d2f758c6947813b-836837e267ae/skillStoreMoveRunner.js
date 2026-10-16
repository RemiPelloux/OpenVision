import { Ks, Yn } from "./notification.js";
import { rZf } from "./skillStoreMoveCommands.js";
import { E } from "./tslib.es6.js";
var sZf, oZf;
export { oZf, sZf };
var __wakaru_B7w_initialized = false;
export function B7w() {
if (__wakaru_B7w_initialized) return;
__wakaru_B7w_initialized = true;
"use strict";
E(), Ks(), rZf(), sZf = {
    info: Yn.Info,
    warning: Yn.Warning,
    error: Yn.Error
}, oZf = {
    confirmed: !1,
    deleted: !1,
    storeUnavailable: !0
};

}
