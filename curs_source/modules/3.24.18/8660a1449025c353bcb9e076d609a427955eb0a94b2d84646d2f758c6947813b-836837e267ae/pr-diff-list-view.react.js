import { O_ } from "./Ycg.js";
import { Amc, ii_ } from "./diff-list-view.react.js";
import { $_C, Imc, c3e, xmc } from "./gpc.js";
import { Mt } from "./index_197.js";
import { WYe } from "./pr-diff-render-utils.js";
import { xg } from "./scroll-area.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { jsx as BBi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as B_C } from "./react-runtime/react/esm-index-production.js";
import { c as F_C } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Rmc } from "./react-runtime/react/esm-index-production.js";
import { Fragment as U_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as j_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as ri_ } from "./react-runtime/react/esm-index-production.js";
var Pmc, Mmc, Dmc;
export { Dmc, Mmc, Pmc };
var __wakaru_si__initialized = false;
export function si_() {
if (__wakaru_si__initialized) return;
__wakaru_si__initialized = true;
"use strict";
E(), Mt(), Ru(), ii_(), WYe(), Pmc = "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j", Mmc = "glass-h8yej3 glass-78zum5 glass-dt5ytf glass-exx8yu glass-1xpa7k glass-1egpv2n glass-1uhho1l glass-xhr3t glass-jbqb8w", Dmc = B_C(function(e) {
    const n = F_C(47), { diffs: i, model: r, findCommandBridgeEnabled: s, findRequestId: o, onFindRequested: a, totalDiffCount: l, onScrollAreaRef: c, renderDiffCard: u } = e, d = o === void 0 ? 0 : o, h = O_("diff_tab_viewport_virtualization", l > 0);
    Imc(r, s && !h);
    let p, g;
    n[0] !== r ? (p = (K)=>{
        const V = r.onDidChangeFind(K);
        return ()=>V.dispose();
    }, g = ()=>r.getFindSnapshot(), n[0] = r, n[1] = p, n[2] = g) : (p = n[1], g = n[2]), ri_(p, g);
    let f;
    n[3] !== r ? (f = (K)=>{
        const V = r.onDidChange(K);
        return ()=>V.dispose();
    }, n[3] = r, n[4] = f) : f = n[4];
    let _;
    n[5] !== r.rows ? (_ = ()=>r.rows, n[5] = r.rows, n[6] = _) : _ = n[6];
    const b = ri_(f, _);
    let y;
    if (n[7] !== i) {
        y = new Map;
        for (const K of i)y.set(c3e(K), K);
        n[7] = i, n[8] = y;
    } else y = n[8];
    const S = y;
    let k;
    n[9] !== S || n[10] !== r || n[11] !== u ? (k = (K, V, Y)=>{
        const J = S.get(K.id);
        return J ? u(J, r, Y) : null;
    }, n[9] = S, n[10] = r, n[11] = u, n[12] = k) : k = n[12];
    const C = k, T = Rmc(null);
    let I;
    n[13] === Symbol.for("react.memo_cache_sentinel") ? (I = new Map, n[13] = I) : I = n[13];
    const A = Rmc(I), P = Rmc(void 0);
    let M;
    n[14] !== r || n[15] !== c ? (M = (K)=>{
        P.current?.dispose(), P.current = void 0, T.current = K?.viewportElement ?? null, r.onViewportChanged(K?.viewportElement ?? void 0), c(K), K?.viewportElement && (P.current = r.bindScrollPort({
            scrollToIndex: (V, Y)=>{
                const J = r.rows[V];
                (J ? A.current.get(J.id) : void 0)?.scrollIntoView({
                    block: Y?.align === "center" ? "center" : "nearest"
                });
            },
            preExtendForGrowth: $_C
        }));
    }, n[14] = r, n[15] = c, n[16] = M) : M = n[16];
    const O = M;
    let N;
    n[17] === Symbol.for("react.memo_cache_sentinel") ? (N = (K, V)=>{
        V ? A.current.set(K, V) : A.current.delete(K);
    }, n[17] = N) : N = n[17];
    const U = N;
    if (h) {
        let K;
        return n[18] !== s || n[19] !== d || n[20] !== r || n[21] !== a || n[22] !== c || n[23] !== C ? (K = BBi(Amc, {
            className: Pmc,
            findCommandBridgeEnabled: s,
            findFocusRequestId: d,
            itemsClassName: Mmc,
            model: r,
            onFindRequested: a,
            onScrollAreaRef: c,
            renderRow: C,
            rowClassName: "pr-tab-file-list__row"
        }), n[18] = s, n[19] = d, n[20] = r, n[21] = a, n[22] = c, n[23] = C, n[24] = K) : K = n[24], K;
    }
    let j;
    n[25] !== s || n[26] !== d || n[27] !== r || n[28] !== a ? (j = BBi(xmc, {
        commandBridgeEnabled: s,
        focusRequestId: d,
        highlightContainerRef: T,
        model: r,
        onFindRequested: a
    }), n[25] = s, n[26] = d, n[27] = r, n[28] = a, n[29] = j) : j = n[29];
    let $;
    if (n[30] !== S || n[31] !== r || n[32] !== u || n[33] !== b) {
        let K;
        n[35] !== S || n[36] !== r || n[37] !== u ? (K = (V)=>{
            const Y = S.get(V.id);
            if (!Y) return null;
            const J = V.id;
            return BBi("div", {
                className: "pr-tab-file-list__row",
                ref: (Q)=>U(J, Q),
                children: u(Y, r, r.getSearchStateForRow(J))
            }, J);
        }, n[35] = S, n[36] = r, n[37] = u, n[38] = K) : K = n[38], $ = b.map(K), n[30] = S, n[31] = r, n[32] = u, n[33] = b, n[34] = $;
    } else $ = n[34];
    let H;
    n[39] !== $ ? (H = BBi("div", {
        className: Mmc,
        children: $
    }), n[39] = $, n[40] = H) : H = n[40];
    let G;
    n[41] !== O || n[42] !== H ? (G = BBi(xg, {
        className: Pmc,
        ref: O,
        children: H
    }), n[41] = O, n[42] = H, n[43] = G) : G = n[43];
    let q;
    return n[44] !== j || n[45] !== G ? (q = j_C(U_C, {
        children: [
            j,
            G
        ]
    }), n[44] = j, n[45] = G, n[46] = q) : q = n[46], q;
});

}
