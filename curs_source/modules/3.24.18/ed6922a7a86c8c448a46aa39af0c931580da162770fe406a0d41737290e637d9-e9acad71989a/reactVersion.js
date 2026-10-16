import { x } from "./tslib.es6.js";
import * as O1g from "./react-runtime/react/esm-index-production.js";
var bKc;
export { bKc };
var __wakaru_Qos_initialized = false;
export function Qos() {
if (__wakaru_Qos_initialized) return;
__wakaru_Qos_initialized = true;
x(), bKc = parseInt(O1g.version, 10);

}
