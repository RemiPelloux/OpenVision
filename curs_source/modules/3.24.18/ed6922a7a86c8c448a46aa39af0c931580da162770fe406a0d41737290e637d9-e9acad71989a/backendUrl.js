import { S } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var wmo;
export { wmo };
var __wakaru_Cmo_initialized = false;
export function Cmo() {
if (__wakaru_Cmo_initialized) return;
__wakaru_Cmo_initialized = true;
"use strict";
x(), rt(), dn(), wmo = new At("isLocalBackend", !1, S(12223, null));

}
