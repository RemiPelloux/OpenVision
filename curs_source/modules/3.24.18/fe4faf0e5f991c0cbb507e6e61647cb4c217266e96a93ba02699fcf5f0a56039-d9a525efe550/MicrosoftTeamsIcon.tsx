import { i } from "./plugin-brand-icon.js";
import { jsx as HWn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as Kli } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vli } from "./react-runtime/react/esm-compiler-runtime-production.js";
function uB(r) {
    const e = Vli(16);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "Microsoft Teams" : l, g = (u === void 0 ? "monochrome" : u) === "brand", _ = g ? void 0 : "currentColor", v = g ? "#5059C9" : void 0;
    let x;
    e[5] !== v ? (x = HWn("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5 5A3 3 0 0 1 14 7.599V7.5a2 2 0 0 0-2-2H9.541A3 3 0 1 1 15.5 5Zm6.25 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3.294 11.732A3.25 3.25 0 0 0 23 14.75v-4.361a.889.889 0 0 0-.889-.889h-3.879c.17.294.268.636.268 1V17c0 .248-.015.492-.044.732ZM8.169 19.5A5 5 0 0 0 17.5 17v-6.5a1 1 0 0 0-1-1H14v8a2 2 0 0 1-2 2H8.169Z",
        fill: v
    }), e[5] = v, e[6] = x) : x = e[6];
    const C = g ? "#7B83EB" : void 0;
    let E;
    e[7] !== C ? (E = HWn("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 17.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm6.75-6.75H9.5v-1.5h-5v1.5h1.75v4.75h1.5v-4.75Z",
        fill: C
    }), e[7] = C, e[8] = E) : E = e[8];
    let A;
    return e[9] !== a || e[10] !== p || e[11] !== _ || e[12] !== x || e[13] !== E || e[14] !== m ? (A = Kli("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: p,
        height: p,
        fill: _,
        role: "img",
        "aria-label": m,
        ...a,
        children: [
            x,
            E
        ]
    }), e[9] = a, e[10] = p, e[11] = _, e[12] = x, e[13] = E, e[14] = m, e[15] = A) : A = e[15], A;
}
export { uB };
var __wakaru_PY_initialized = false;
export function PY() {
if (__wakaru_PY_initialized) return;
__wakaru_PY_initialized = true;
"use strict";
i(uB, "MicrosoftTeamsIcon");

}
