import { i } from "./plugin-brand-icon.js";
import { c as Oli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as qWn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function L$e(r) {
    const e = Oli(9);
    let a, s, l;
    e[0] !== r ? ({ size: s, title: l, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l) : (a = e[1], s = e[2], l = e[3]);
    const u = s === void 0 ? 24 : s, p = l === void 0 ? "Cursor" : l;
    let m;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (m = qWn("path", {
        fill: "currentColor",
        d: "M48.0226 13.2547L25.6601 0.311786C24.942 -0.103929 24.0559 -0.103929 23.3378 0.311786L0.976347 13.2547C0.372691 13.6041 0 14.2503 0 14.9502V41.0498C0 41.7496 0.372691 42.3958 0.976347 42.7453L23.3389 55.6882C24.057 56.1039 24.943 56.1039 25.6611 55.6882L48.0237 42.7453C48.6273 42.3958 49 41.7496 49 41.0498V14.9502C49 14.2503 48.6273 13.6041 48.0237 13.2547H48.0226ZM46.6179 15.9964L25.0302 53.4802C24.8842 53.7328 24.4989 53.6296 24.4989 53.337V28.793C24.4989 28.3026 24.2375 27.849 23.8134 27.6027L2.61094 15.3312C2.35898 15.1849 2.46186 14.7987 2.75372 14.7987H45.9292C46.5423 14.7987 46.9255 15.4649 46.619 15.9974L46.6179 15.9964Z"
    }), e[4] = m) : m = e[4];
    let b;
    return e[5] !== a || e[6] !== u || e[7] !== p ? (b = qWn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 49 56",
        width: u,
        height: u,
        role: "img",
        "aria-label": p,
        ...a,
        children: m
    }), e[5] = a, e[6] = u, e[7] = p, e[8] = b) : b = e[8], b;
}
export { L$e };
var __wakaru_eTt_initialized = false;
export function eTt() {
if (__wakaru_eTt_initialized) return;
__wakaru_eTt_initialized = true;
"use strict";
i(L$e, "CursorIcon");

}
