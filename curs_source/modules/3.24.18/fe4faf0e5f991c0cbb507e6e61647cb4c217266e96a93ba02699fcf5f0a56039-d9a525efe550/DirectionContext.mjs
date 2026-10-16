import { i } from "./plugin-brand-icon.js";
import * as BWn from "./react-runtime/react/esm-index-production.js";
function ap() {
    return BWn.useContext(JAt)?.direction ?? "ltr";
}
var JAt;
export { JAt, ap };
var __wakaru_iP_initialized = false;
export function iP() {
if (__wakaru_iP_initialized) return;
__wakaru_iP_initialized = true;
"use client";
JAt = BWn.createContext(void 0), JAt.displayName = "DirectionContext", i(ap, "useDirection");

}
