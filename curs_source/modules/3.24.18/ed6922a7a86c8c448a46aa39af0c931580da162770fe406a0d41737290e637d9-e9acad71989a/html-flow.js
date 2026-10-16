import { LEi } from "./blank-line.js";
import { QT } from "./index_63.js";
import { Uml } from "./index_91.js";
import { CUg, EUg, TUg, xUg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var $ml, Hml, Wml;
export { $ml, Hml, Wml };
var __wakaru_IUg_initialized = false;
export function IUg() {
if (__wakaru_IUg_initialized) return;
__wakaru_IUg_initialized = true;
x(), QT(), Uml(), LEi(), $ml = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: CUg,
    tokenize: TUg
}, Hml = {
    partial: !0,
    tokenize: xUg
}, Wml = {
    partial: !0,
    tokenize: EUg
};

}
