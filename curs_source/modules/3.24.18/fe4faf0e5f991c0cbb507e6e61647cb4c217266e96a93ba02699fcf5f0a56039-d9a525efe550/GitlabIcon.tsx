import { i } from "./plugin-brand-icon.js";
import { c as Hli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as WAe } from "./react-runtime/react/esm-jsx-runtime-production.js";
function B$e(r) {
    const e = Hli(14);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "GitLab" : l;
    if ((u === void 0 ? "monochrome" : u) === "brand") {
        let v;
        e[5] === Symbol.for("react.memo_cache_sentinel") ? (v = WAe("path", {
            fill: "#FC6D26",
            d: "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"
        }), e[5] = v) : v = e[5];
        let x;
        return e[6] !== a || e[7] !== p || e[8] !== m ? (x = WAe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: p,
            height: p,
            role: "img",
            "aria-label": m,
            ...a,
            children: v
        }), e[6] = a, e[7] = p, e[8] = m, e[9] = x) : x = e[9], x;
    }
    let g;
    e[10] === Symbol.for("react.memo_cache_sentinel") ? (g = WAe("path", {
        d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
    }), e[10] = g) : g = e[10];
    let _;
    return e[11] !== a || e[12] !== p ? (_ = WAe("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: p,
        height: p,
        "aria-hidden": "true",
        focusable: "false",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...a,
        children: g
    }), e[11] = a, e[12] = p, e[13] = _) : _ = e[13], _;
}
export { B$e };
var __wakaru_aTt_initialized = false;
export function aTt() {
if (__wakaru_aTt_initialized) return;
__wakaru_aTt_initialized = true;
"use strict";
i(B$e, "GitlabIcon");

}
