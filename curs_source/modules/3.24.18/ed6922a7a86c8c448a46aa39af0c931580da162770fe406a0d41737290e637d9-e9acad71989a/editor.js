import { dr } from "./arrays.js";
import { x } from "./tslib.es6.js";
var _U, E5e, bR;
export { E5e, _U, bR };
var __wakaru_EM_initialized = false;
export function EM() {
if (__wakaru_EM_initialized) return;
__wakaru_EM_initialized = true;
"use strict";
x(), dr(), _U = ((e)=>(e[e.ACTIVATE = 1] = "ACTIVATE", e[e.RESTORE = 2] = "RESTORE", e[e.PRESERVE = 3] = "PRESERVE", e))(_U || {}), E5e = ((e)=>(e[e.PICK = 0] = "PICK", e[e.EXCLUSIVE_ONLY = 1] = "EXCLUSIVE_ONLY", e))(E5e || {}), bR = ((e)=>(e[e.API = 0] = "API", e[e.USER = 1] = "USER", e))(bR || {});

}
