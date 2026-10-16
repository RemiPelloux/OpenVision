import { x } from "./tslib.es6.js";
import { createContext as na_ } from "./react-runtime/react/esm-index-production.js";
var TNh, Atr;
export { Atr, TNh };
var __wakaru_Iq_initialized = false;
export function Iq() {
if (__wakaru_Iq_initialized) return;
__wakaru_Iq_initialized = true;
"use strict";
x(), TNh = new Proxy({}, {
    get () {
        throw new Error("useRootWorkspace must be used within a RootWorkspaceProvider");
    }
}), Atr = na_(TNh);

}
