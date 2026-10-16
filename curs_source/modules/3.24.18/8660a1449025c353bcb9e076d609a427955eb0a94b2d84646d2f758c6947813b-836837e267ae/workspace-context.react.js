import { E } from "./tslib.es6.js";
import { createContext as iEk } from "./react-runtime/react/esm-index-production.js";
var fkg, dcs;
export { dcs, fkg };
var __wakaru_YJ_initialized = false;
export function YJ() {
if (__wakaru_YJ_initialized) return;
__wakaru_YJ_initialized = true;
"use strict";
E(), fkg = new Proxy({}, {
    get () {
        throw new Error("useRootWorkspace must be used within a RootWorkspaceProvider");
    }
}), dcs = iEk(fkg);

}
