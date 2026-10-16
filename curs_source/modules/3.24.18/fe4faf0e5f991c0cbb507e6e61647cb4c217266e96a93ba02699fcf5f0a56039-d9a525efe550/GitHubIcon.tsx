import { i } from "./plugin-brand-icon.js";
import { jsx as GWn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Wli } from "./react-runtime/react/esm-compiler-runtime-production.js";
function z$e(r) {
    const e = Wli(11);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "GitHub" : l, g = (u === void 0 ? "monochrome" : u) === "brand" ? "var(--cursor-icon-primary)" : "currentColor";
    let _;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = GWn("path", {
        d: "M12 .5C5.649.5.5 5.649.5 12c0 5.087 3.292 9.397 7.86 10.923.575.106.784-.25.784-.553 0-.273-.01-.996-.015-1.955-3.197.695-3.872-1.542-3.872-1.542-.523-1.329-1.277-1.683-1.277-1.683-1.044-.714.079-.7.079-.7 1.154.081 1.761 1.186 1.761 1.186 1.026 1.757 2.692 1.25 3.348.956.104-.743.401-1.25.73-1.537-2.552-.29-5.235-1.276-5.235-5.68 0-1.255.448-2.282 1.184-3.086-.119-.291-.513-1.46.113-3.044 0 0 .965-.309 3.162 1.179A11.02 11.02 0 0 1 12 6.077c.977.004 1.96.132 2.879.387 2.195-1.488 3.159-1.179 3.159-1.179.628 1.584.233 2.753.114 3.044.738.804 1.183 1.831 1.183 3.086 0 4.415-2.688 5.386-5.248 5.671.412.355.779 1.056.779 2.128 0 1.537-.014 2.777-.014 3.156 0 .306.207.665.79.552C20.212 21.393 23.5 17.086 23.5 12 23.5 5.649 18.351.5 12 .5Z"
    }), e[5] = _) : _ = e[5];
    let v;
    return e[6] !== a || e[7] !== p || e[8] !== g || e[9] !== m ? (v = GWn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: p,
        height: p,
        fill: g,
        role: "img",
        "aria-label": m,
        ...a,
        children: _
    }), e[6] = a, e[7] = p, e[8] = g, e[9] = m, e[10] = v) : v = e[10], v;
}
export { z$e };
var __wakaru_iTt_initialized = false;
export function iTt() {
if (__wakaru_iTt_initialized) return;
__wakaru_iTt_initialized = true;
"use strict";
i(z$e, "GitHubIcon");

}
