import { i } from "./plugin-brand-icon.js";
import { jsx as WWn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Zli } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mme(r) {
    const e = Zli(13);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "Linear" : l, g = (u === void 0 ? "monochrome" : u) === "brand", _ = g ? void 0 : "currentColor", v = g ? "#5E6AD2" : void 0;
    let x;
    e[5] !== v ? (x = WWn("path", {
        d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z",
        fill: v
    }), e[5] = v, e[6] = x) : x = e[6];
    let C;
    return e[7] !== a || e[8] !== p || e[9] !== _ || e[10] !== x || e[11] !== m ? (C = WWn("svg", {
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
export { mme };
var __wakaru_q$e_initialized = false;
export function q$e() {
if (__wakaru_q$e_initialized) return;
__wakaru_q$e_initialized = true;
"use strict";
i(mme, "LinearIcon");

}
