import { aQo, wli } from "./shared.js";
import { E } from "./tslib.es6.js";
var aRr;
export { aRr };
var __wakaru_uQo_initialized = false;
export function uQo() {
if (__wakaru_uQo_initialized) return;
__wakaru_uQo_initialized = true;
E(), aQo(), aRr = /jsdom|happydom/.test(wli);

}
