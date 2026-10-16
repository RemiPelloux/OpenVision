import { U6 } from "./Ycg.js";
import { Mt } from "./index_197.js";
import { k$t } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { CG } from "./use-observable.react.js";
import { useImperativeHandle as J8w } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as Q8w } from "./react-runtime/react/esm-index-production.js";
import { c as Z8w } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as e7w } from "./react-runtime/react/esm-index-production.js";
import { jsx as vXf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var _Xf, qjl;
export { _Xf, qjl };
var __wakaru_bXf_initialized = false;
export function bXf() {
if (__wakaru_bXf_initialized) return;
__wakaru_bXf_initialized = true;
"use strict";
E(), Mt(), CG(), _Xf = {
    count: {
        k7Eaqz: "glass-zhpm5q",
        k1xSpc: "glass-3nfvp2",
        kjj79g: "glass-13a6bvl",
        kcqcaj: "glass-ss6m8b",
        $$css: !0
    }
}, qjl = Q8w(function(e, n) {
    const i = Z8w(18), { findState: r, onClose: s, onFindNext: o, onFindPrevious: a, onFocusChange: l, onQueryChange: c } = e;
    let u;
    i[0] !== r ? (u = ()=>r, i[0] = r, i[1] = u) : u = i[1];
    const d = U6(u), h = d?.query ?? "", p = d?.matches ?? 0, g = d?.activeMatchOrdinal ?? 0, f = d?.isSearching ?? !1, _ = e7w(null);
    let b, y;
    i[2] === Symbol.for("react.memo_cache_sentinel") ? (b = ()=>({
            focusAndSelect () {
                _.current?.focus(), _.current?.select();
            }
        }), y = [], i[2] = b, i[3] = y) : (b = i[2], y = i[3]), J8w(n, b, y);
    let S;
    i[4] !== s || i[5] !== o || i[6] !== a ? (S = (A)=>{
        if (A.key === "Enter") {
            A.preventDefault(), A.stopPropagation(), A.shiftKey ? a() : o();
            return;
        }
        A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), s());
    }, i[4] = s, i[5] = o, i[6] = a, i[7] = S) : S = i[7];
    const k = S, C = h ? f ? p > 0 ? `${g} of ${p}` : " " : p === 0 ? "No results" : `${g} of ${p}` : " ", T = !h || f || p === 0;
    let I;
    return i[8] !== C || i[9] !== k || i[10] !== s || i[11] !== o || i[12] !== a || i[13] !== l || i[14] !== c || i[15] !== h || i[16] !== T ? (I = vXf("div", {
        "data-component": "glass-browser-find-bar",
        className: "glass-10l6tqk glass-e6tamo glass-a6qrhg glass-zkaem6 glass-jtu1wh glass-18b33ah",
        children: vXf(k$t, {
            countStyle: _Xf.count,
            inputAriaLabel: "Find in page",
            inputRef: _,
            matchCountLabel: C,
            navigationDisabled: T,
            onClose: s,
            onFocusChange: l,
            onKeyDown: k,
            onNext: o,
            onPrevious: a,
            onQueryChange: c,
            placeholder: "Find in page",
            query: h
        })
    }), i[8] = C, i[9] = k, i[10] = s, i[11] = o, i[12] = a, i[13] = l, i[14] = c, i[15] = h, i[16] = T, i[17] = I) : I = i[17], I;
});

}
