import { Di, I0 } from "./Iwo.js";
import { A_, Zke } from "./browser_2.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { j8o } from "./ze.js";
var egn, Kte;
export { Kte, egn };
var __wakaru_Sbt_initialized = false;
export function Sbt() {
if (__wakaru_Sbt_initialized) return;
__wakaru_Sbt_initialized = true;
"use strict";
E(), A_(), Bs(), Di(), egn = ((t)=>(t[t.Always = 0] = "Always", t[t.FullScreen = 1] = "FullScreen", t[t.None = 2] = "None", t))(egn || {}), Kte = {
    clipboard: {
        writeText: I0 || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
        readText: I0 || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
    },
    keyboard: I0 || j8o() ? 0 : navigator.keyboard || Zke ? 1 : 2,
    touch: "ontouchstart" in $t || navigator.maxTouchPoints > 0,
    pointerEvents: $t.PointerEvent && ("ontouchstart" in $t || navigator.maxTouchPoints > 0)
};

}
