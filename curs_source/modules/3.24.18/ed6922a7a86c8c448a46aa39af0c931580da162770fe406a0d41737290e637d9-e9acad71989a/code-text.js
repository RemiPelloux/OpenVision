import { QT } from "./index_63.js";
import { aUg, cUg, oUg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var kml;
export { kml };
var __wakaru_lUg_initialized = false;
export function lUg() {
if (__wakaru_lUg_initialized) return;
__wakaru_lUg_initialized = true;
x(), QT(), kml = {
    name: "codeText",
    previous: aUg,
    resolve: oUg,
    tokenize: cUg
};

}
