import { i } from "./plugin-brand-icon.js";
import { jsx as HAe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Jli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as Qli } from "./react-runtime/react/esm-jsx-runtime-production.js";
function LT(r) {
    const e = Jli(22);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "Slack" : l, g = (u === void 0 ? "monochrome" : u) === "brand", _ = g ? void 0 : "currentColor", v = g ? "#E01E5A" : void 0;
    let x;
    e[5] !== v ? (x = HAe("path", {
        d: "M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z",
        fill: v
    }), e[5] = v, e[6] = x) : x = e[6];
    const C = g ? "#36C5F0" : void 0;
    let E;
    e[7] !== C ? (E = HAe("path", {
        d: "M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z",
        fill: C
    }), e[7] = C, e[8] = E) : E = e[8];
    const A = g ? "#2EB67D" : void 0;
    let $;
    e[9] !== A ? ($ = HAe("path", {
        d: "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z",
        fill: A
    }), e[9] = A, e[10] = $) : $ = e[10];
    const I = g ? "#ECB22E" : void 0;
    let N;
    e[11] !== I ? (N = HAe("path", {
        d: "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z",
        fill: I
    }), e[11] = I, e[12] = N) : N = e[12];
    let R;
    return e[13] !== a || e[14] !== p || e[15] !== $ || e[16] !== N || e[17] !== _ || e[18] !== x || e[19] !== E || e[20] !== m ? (R = Qli("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 127 127",
        width: p,
        height: p,
        fill: _,
        role: "img",
        "aria-label": m,
        ...a,
        children: [
            x,
            E,
            $,
            N
        ]
    }), e[13] = a, e[14] = p, e[15] = $, e[16] = N, e[17] = _, e[18] = x, e[19] = E, e[20] = m, e[21] = R) : R = e[21], R;
}
export { LT };
var __wakaru_aP_initialized = false;
export function aP() {
if (__wakaru_aP_initialized) return;
__wakaru_aP_initialized = true;
"use strict";
i(LT, "SlackIcon");

}
