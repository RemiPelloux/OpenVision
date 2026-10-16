import { i } from "./plugin-brand-icon.js";
import { c as Yli } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as ZWn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function hme(r) {
    const e = Yli(12);
    let a, s, l, u;
    e[0] !== r ? ({ size: s, title: l, variant: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u) : (a = e[1], s = e[2], l = e[3], u = e[4]);
    const p = s === void 0 ? 24 : s, m = l === void 0 ? "Sentry" : l, g = (u === void 0 ? "monochrome" : u) === "brand" ? "#6E47AE" : "currentColor";
    let _;
    e[5] !== g ? (_ = ZWn("path", {
        fill: g,
        d: "m23.663 19.246-9.72-16.71C13.497 1.798 12.749 1.5 12 1.5s-1.495.444-1.943 1.036l-3.14 5.471.748.444a14.735 14.735 0 0 1 5.682 5.619c1.197 2.071 1.944 4.288 2.094 6.656h-2.243a13.066 13.066 0 0 0-1.794-5.621c-1.047-2.07-2.692-3.697-4.785-4.88l-.749-.443-2.99 5.028.747.444c1.944 1.182 3.29 3.104 3.589 5.323H2.281c-.149 0-.3-.148-.3-.148s-.148-.148 0-.296l1.348-2.367c-.449-.442-1.048-.74-1.646-.886L.337 19.247c-.449.74-.449 1.479 0 2.219.448.738 1.046 1.034 1.943 1.034h6.879v-.886c0-1.627-.449-3.106-1.196-4.586-.599-1.182-1.496-2.07-2.542-2.808l1.047-1.924c1.347 1.034 2.543 2.218 3.439 3.698 1.047 1.773 1.496 3.697 1.496 5.619v.886h5.831v-.886c0-2.957-.747-5.916-2.392-8.577-1.197-2.368-3.141-4.289-5.385-5.768L11.7 3.424c.152-.149.3-.149.3-.149.15 0 .15 0 .299.148l9.721 16.709c.148.146 0 .296 0 .296s-.15.148-.3.148h-2.243v1.775h2.243c.896.147 1.495-.148 1.943-.886.449-.739.449-1.479 0-2.219z"
    }), e[5] = g, e[6] = _) : _ = e[6];
    let v;
    return e[7] !== a || e[8] !== p || e[9] !== _ || e[10] !== m ? (v = ZWn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: p,
        height: p,
        role: "img",
        "aria-label": m,
        ...a,
        children: _
    }), e[7] = a, e[8] = p, e[9] = _, e[10] = m, e[11] = v) : v = e[11], v;
}
export { hme };
var __wakaru_G$e_initialized = false;
export function G$e() {
if (__wakaru_G$e_initialized) return;
__wakaru_G$e_initialized = true;
"use strict";
i(hme, "SentryIcon");

}
