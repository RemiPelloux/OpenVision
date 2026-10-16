import { i } from "./plugin-brand-icon.js";
import { c as Xli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as a8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
function fme(r) {
    const e = Xli(13);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "PagerDuty" : l, g = (u === void 0 ? "monochrome" : u) === "brand", _ = g ? void 0 : "currentColor", v = g ? "#06AC38" : void 0;
    let x;
    e[5] !== v ? (x = a8t("g", {
        transform: "translate(-2.23 0)",
        children: a8t("path", {
            d: "M15.59 0H5.65v16.08h3.56V3.39h6.12c2.37 0 4.23 1.28 4.23 3.86 0 2.47-1.67 3.97-4.23 3.97H12.1v3.21h3.56c4.49 0 7.15-2.93 7.15-7.1C22.81 2.97 20.28 0 15.59 0zM5.65 20.4h3.56V24H5.65z",
            fill: v
        })
    }), e[5] = v, e[6] = x) : x = e[6];
    let C;
    return e[7] !== a || e[8] !== p || e[9] !== _ || e[10] !== x || e[11] !== m ? (C = a8t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: p,
        height: p,
        fill: _,
        role: "img",
        "aria-label": m,
        ...a,
        children: x
    }), e[7] = a, e[8] = p, e[9] = _, e[10] = x, e[11] = m, e[12] = C) : C = e[12], C;
}
export { fme };
var __wakaru_U$e_initialized = false;
export function U$e() {
if (__wakaru_U$e_initialized) return;
__wakaru_U$e_initialized = true;
"use strict";
i(fme, "PagerDutyIcon");

}
