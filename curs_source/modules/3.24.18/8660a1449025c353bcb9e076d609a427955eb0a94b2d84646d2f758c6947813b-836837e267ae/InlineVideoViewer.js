import { Mpa } from "./FullscreenMediaControls.js";
import { ezS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Opa } from "./video-mute-preference.js";
import { jsx as Ifi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as JqS } from "./react-runtime/react/esm-index-production.js";
import { c as Vsp } from "./react-runtime/react/esm-compiler-runtime-production.js";
var g0a;
export { g0a };
var __wakaru_tzS_initialized = false;
export function tzS() {
if (__wakaru_tzS_initialized) return;
__wakaru_tzS_initialized = true;
"use strict";
E(), Mpa(), Opa(), g0a = JqS(function(e) {
    const n = Vsp(6), { videoUrl: i, isActive: r, loop: s, onError: o, title: a } = e, l = r === void 0 ? !0 : r, c = s === void 0 ? !1 : s;
    let u;
    return n[0] !== l || n[1] !== c || n[2] !== o || n[3] !== a || n[4] !== i ? (u = Ifi(ezS, {
        isActive: l,
        loop: c,
        onError: o,
        title: a,
        videoUrl: i
    }, i), n[0] = l, n[1] = c, n[2] = o, n[3] = a, n[4] = i, n[5] = u) : u = n[5], u;
});

}
