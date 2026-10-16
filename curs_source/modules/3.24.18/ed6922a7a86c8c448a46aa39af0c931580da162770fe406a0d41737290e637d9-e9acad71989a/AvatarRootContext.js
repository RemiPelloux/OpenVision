import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Acu from "./react-runtime/react/esm-index-production.js";
var _Fi;
export { _Fi };
var __wakaru_COs_initialized = false;
export function COs() {
if (__wakaru_COs_initialized) return;
__wakaru_COs_initialized = true;
x(), Eb(), _Fi = Acu.createContext(void 0), process.env.NODE_ENV !== "production" && (_Fi.displayName = "AvatarRootContext");

}
