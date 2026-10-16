import { U5, ar, c6, gn, ri } from "./LYd.js";
import { Fhe, V5r } from "./Sidebar.js";
import { j5r, rfa, tN } from "./Sidebar.stylex.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { dva, wBh } from "./ipa.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { forwardRef as DIS } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as LIS } from "./react-runtime/react/esm-index-production.js";
import { jsxs as MIS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Children as NIS } from "./react-runtime/react/esm-index-production.js";
import { useCallback as OIS } from "./react-runtime/react/esm-index-production.js";
import { useState as f$h } from "./react-runtime/react/esm-index-production.js";
import { jsx as g$h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as v$h } from "./react-runtime/react/esm-index-production.js";
var _$h, OSn;
export { OSn, _$h };
var __wakaru_b$h_initialized = false;
export function b$h() {
if (__wakaru_b$h_initialized) return;
__wakaru_b$h_initialized = true;
"use strict";
E(), U5(), Va(), mf(), j5r(), V5r(), qu(), _$h = {
    end: tN.paginatedEnd
}, OSn = DIS(function({ children: e, className: n, rootStyle: i, maxVisible: r = 5, initialMaxVisible: s, expanded: o, forcedVisibleCount: a, resetKey: l = 0, onShowMore: c, followScrollOnShowMore: u = !1, moreLabel: d = "Show more", moreIcon: h, showMoreHighlighted: p, totalCount: g, ...f }, _) {
    const [b, y] = f$h(0), [S, k] = f$h(l);
    l !== S && (k(l), y(0));
    const C = typeof e == "function" ? e : void 0;
    if (C !== void 0 && g === void 0) throw new Error("SidebarPaginatedMenu requires totalCount when children is a render function");
    const T = C === void 0 ? NIS.toArray(e) : [], I = C !== void 0 ? g ?? 0 : T.length, P = Math.min(I, s ?? r), M = dva({
        totalCount: I,
        initialPageSize: P,
        extraBatches: b,
        maxVisible: r,
        forceExpanded: o,
        forcedVisibleCount: a
    }), N = I - M === 1 ? I : M, U = N < I, j = I > P, $ = v$h(null), H = v$h(!1);
    LIS(()=>{
        H.current && (H.current = !1, $.current?.lastElementChild?.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }));
    });
    const G = c6([
        $,
        _
    ]), q = OIS(()=>{
        const Q = dva({
            totalCount: I,
            initialPageSize: P,
            extraBatches: b,
            maxVisible: r,
            forceExpanded: o,
            forcedVisibleCount: a
        }), te = Math.min(Q + r, I);
        te <= Q || (H.current = u, c?.(te), c === void 0 && y((ee)=>{
            const re = dva({
                totalCount: I,
                initialPageSize: P,
                extraBatches: ee,
                maxVisible: r,
                forceExpanded: o,
                forcedVisibleCount: a
            }), ie = Math.min(re + r, I);
            if (ie <= re || Math.max(o ? I : 0, a ?? 0) >= ie) return ee;
            const le = Math.min(I, ie) - P, ce = Math.max(1, r), ae = Math.ceil(Math.max(0, le) / ce);
            return Math.max(ee, ae);
        }));
    }, [
        I,
        P,
        b,
        r,
        o,
        a,
        c,
        u
    ]), K = {
        canShowMore: U,
        effectiveVisible: N,
        initialPageSize: P,
        nextVisible: Math.min(N + r, I)
    }, V = C !== void 0 ? C(K) : T.slice(0, N), Y = ar({
        rootClass: "ui-sidebar-menu",
        stylexStyles: [
            wBh(),
            i
        ],
        className: n
    }), J = gn(rfa.root);
    return MIS("ul", {
        ref: G,
        className: Y.className,
        style: Y.style,
        ...f,
        children: [
            V,
            j && U && g$h("li", {
                className: ri("ui-sidebar-menu-item", J.className),
                style: J.style,
                children: g$h(Fhe, {
                    "data-sidebar-paginated-menu-toggle": "",
                    endIcon: p ? "return" : void 0,
                    endIconColor: "quaternary",
                    icon: h,
                    isHighlighted: p,
                    onClick: q,
                    reserveIconSpace: h === void 0,
                    stylexStyles: _$h,
                    tone: "muted",
                    children: d
                })
            })
        ]
    });
});

}
