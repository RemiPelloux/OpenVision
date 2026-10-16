import { DY } from "./Scalar_2.js";
import { Z6y } from "./foldFlowLines.js";
import { E } from "./tslib.es6.js";
var Mai, Dai, bYo;
export { Dai, Mai, bYo };
var __wakaru_Fxr_initialized = false;
export function Fxr() {
if (__wakaru_Fxr_initialized) return;
__wakaru_Fxr_initialized = true;
E(), DY(), Z6y(), Mai = (t, e)=>({
        indentAtStart: e ? t.indent.length : t.indentAtStart,
        lineWidth: t.options.lineWidth,
        minContentWidth: t.options.minContentWidth
    }), Dai = (t)=>/^(%|---|\.\.\.)/m.test(t);
try {
    bYo = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch  {
    bYo = /\n+(?!\n|$)/g;
}

}
