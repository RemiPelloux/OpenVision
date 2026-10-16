import { i } from "./plugin-brand-icon.js";
import { c as Dli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as Fli } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as upe } from "./react-runtime/react/esm-jsx-runtime-production.js";
function QAt(r) {
    const e = Dli(17);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "Bitbucket" : l;
    if ((u === void 0 ? "monochrome" : u) === "brand") {
        let v, x, C;
        e[5] === Symbol.for("react.memo_cache_sentinel") ? (v = upe("path", {
            d: "M2.1 3.1C2 2.5 2.5 2 3.1 2h11.8c.6 0 1.1.5 1 1.1L14.2 14c-.1.6-.6 1-1.2 1H5c-.6 0-1.1-.4-1.2-1L2.1 3.1Z",
            fill: "#2684FF"
        }), x = upe("path", {
            d: "M6.7 10.9h4.6l.7-4.1H6l.7 4.1Z",
            fill: "white"
        }), C = upe("path", {
            d: "M7.6 13.1h3.2l.5-2.2H6.7l.9 2.2Z",
            fill: "#172B4D",
            fillOpacity: .2
        }), e[5] = v, e[6] = x, e[7] = C) : (v = e[5], x = e[6], C = e[7]);
        let E;
        return e[8] !== a || e[9] !== p || e[10] !== m ? (E = Fli("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18",
            width: p,
            height: p,
            role: "img",
            "aria-label": m,
            ...a,
            children: [
                v,
                x,
                C
            ]
        }), e[8] = a, e[9] = p, e[10] = m, e[11] = E) : E = e[11], E;
    }
    let g;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (g = upe("path", {
        d: "M1.91733 2C1.65757 2 1.46275 2.23811 1.50604 2.47623L3.25941 13.2129C3.3027 13.4943 3.54083 13.6892 3.82224 13.6892H12.3077C12.5025 13.6892 12.6757 13.5376 12.719 13.3428L14.4939 2.49787C14.5373 2.23811 14.3424 2.02165 14.0827 2.02165L1.91733 2ZM9.36376 9.74947H6.65792L5.94357 5.91804H10.0348L9.36376 9.74947Z",
        fill: "currentColor"
    }), e[12] = g) : g = e[12];
    let _;
    return e[13] !== a || e[14] !== p || e[15] !== m ? (_ = upe("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: p,
        height: p,
        role: "img",
        "aria-label": m,
        ...a,
        children: g
    }), e[13] = a, e[14] = p, e[15] = m, e[16] = _) : _ = e[16], _;
}
export { QAt };
var __wakaru_IYn_initialized = false;
export function IYn() {
if (__wakaru_IYn_initialized) return;
__wakaru_IYn_initialized = true;
"use strict";
i(QAt, "BitbucketIcon");

}
