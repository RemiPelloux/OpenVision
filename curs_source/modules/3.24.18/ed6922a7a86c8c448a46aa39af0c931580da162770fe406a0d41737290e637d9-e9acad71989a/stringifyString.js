import { n$ } from "./Scalar_2.js";
import { DEg } from "./foldFlowLines.js";
import { x } from "./tslib.es6.js";
var fyn, vyn, _cs;
export { _cs, fyn, vyn };
var __wakaru_Uwi_initialized = false;
export function Uwi() {
if (__wakaru_Uwi_initialized) return;
__wakaru_Uwi_initialized = true;
x(), n$(), DEg(), fyn = (e, t)=>({
        indentAtStart: t ? e.indent.length : e.indentAtStart,
        lineWidth: e.options.lineWidth,
        minContentWidth: e.options.minContentWidth
    }), vyn = (e)=>/^(%|---|\.\.\.)/m.test(e);
try {
    _cs = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch  {
    _cs = /\n+(?!\n|$)/g;
}

}
