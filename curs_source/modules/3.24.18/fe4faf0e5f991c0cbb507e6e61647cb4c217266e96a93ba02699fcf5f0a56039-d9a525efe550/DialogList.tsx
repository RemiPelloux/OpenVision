import { bC, mrr, prr } from "./Dialog.stylex.ts";
import { Frr, zrr } from "./DialogListContext.tsx";
import { qT } from "./index_7.ts";
import { i } from "./plugin-brand-icon.js";
import { N4 } from "./scroll-area.tsx";
import { Ho, wn } from "./stylex.mjs";
import { jsx as c8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sdi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Brr(r) {
    const e = sdi(15), { children: a, rootStyle: s, selectable: l, "aria-label": u, "aria-labelledby": p } = r, m = l === void 0 ? !1 : l;
    let b;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (b = wn(mrr()), e[0] = b) : b = e[0];
    const g = b, _ = m ? "listbox" : void 0;
    let v;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (v = prr(), e[1] = v) : v = e[1];
    let x;
    e[2] !== s ? (x = [
        v,
        s
    ], e[2] = s, e[3] = x) : x = e[3];
    let C;
    e[4] !== a ? (C = c8t("ul", {
        className: g.className,
        style: g.style,
        children: a
    }), e[4] = a, e[5] = C) : C = e[5];
    let E;
    e[6] !== u || e[7] !== p || e[8] !== _ || e[9] !== x || e[10] !== C ? (E = c8t(N4, {
        "aria-label": u,
        "aria-labelledby": p,
        className: "ui-dialog-list",
        role: _,
        rootStyle: x,
        children: C
    }), e[6] = u, e[7] = p, e[8] = _, e[9] = x, e[10] = C, e[11] = E) : E = e[11];
    let A;
    return e[12] !== m || e[13] !== E ? (A = c8t(Frr, {
        selectable: m,
        children: E
    }), e[12] = m, e[13] = E, e[14] = A) : A = e[14], A;
}
export { Brr };
var __wakaru_Fki_initialized = false;
export function Fki() {
if (__wakaru_Fki_initialized) return;
__wakaru_Fki_initialized = true;
"use strict";
Ho(), qT(), bC(), zrr(), i(Brr, "DialogList");

}
