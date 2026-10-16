import { Y_v } from "./format-error-message.mjs";
import { uYl } from "./ofv.js";
import { E } from "./tslib.es6.js";
var DQt, Out;
export { DQt, Out };
var __wakaru_X_v_initialized = false;
export function X_v() {
if (__wakaru_X_v_initialized) return;
__wakaru_X_v_initialized = true;
E(), Y_v(), DQt = ()=>{}, Out = ()=>{}, typeof process < "u" && process.env?.NODE_ENV !== "production" && (DQt = (t, e, n)=>{
    !t && typeof console < "u" && console.warn(uYl(e, n));
}, Out = (t, e, n)=>{
    if (!t) throw new Error(uYl(e, n));
});

}
