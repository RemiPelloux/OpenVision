import { Gsh, Wnt } from "./os.js";
import { E } from "./tslib.es6.js";
var qsh;
export { qsh };
var __wakaru_j7y_initialized = false;
export function j7y() {
if (__wakaru_j7y_initialized) return;
__wakaru_j7y_initialized = true;
E(), Wnt(), qsh = Gsh;

}
