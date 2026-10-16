import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as p4h from "./react-runtime/react/esm-index-production.js";
var JOr;
export { JOr };
var __wakaru_$ma_initialized = false;
export function $ma() {
if (__wakaru_$ma_initialized) return;
__wakaru_$ma_initialized = true;
E(), zS(), JOr = p4h.createContext(void 0), process.env.NODE_ENV !== "production" && (JOr.displayName = "CheckboxGroupContext");

}
