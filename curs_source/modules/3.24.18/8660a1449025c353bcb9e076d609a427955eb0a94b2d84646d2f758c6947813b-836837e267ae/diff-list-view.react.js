import { aPv } from "./XRv.js";
import { b_C } from "./diff-find-bar.react.js";
import { S_C } from "./diff-list-range-extractor.js";
import { A6n } from "./diff-row-height-predict.js";
import { Hn } from "./dom_2.js";
import { Ldt, x6n } from "./glass-diff-virtualization-constants.js";
import { Imc, Jn_, vOs, xmc, y_C } from "./gpc.js";
import { Mt } from "./index_197.js";
import { Otc } from "./index_228.js";
import { $tc } from "./index_229.js";
import { xg } from "./scroll-area.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { R_C } from "./use-diff-card-search-highlight.react.js";
import { useRef as Emc } from "./react-runtime/react/esm-index-production.js";
import { jsx as Gen } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffectEvent as LOs } from "./react-runtime/react/esm-index-production.js";
import { jsxs as L_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as M_C } from "./react-runtime/react/esm-index-production.js";
import { Fragment as N_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as OOs } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as P_C } from "./react-runtime/react/esm-index-production.js";
import { useEffect as Qn_ } from "./react-runtime/react/esm-index-production.js";
import { c as Tmc } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Xn_ } from "./react-runtime/react/esm-index-production.js";
import { useCallback as Zn_ } from "./react-runtime/react/esm-index-production.js";
var ei_, ti_, ni_, Amc;
export { Amc, ei_, ni_, ti_ };
var __wakaru_ii__initialized = false;
export function ii_() {
if (__wakaru_ii__initialized) return;
__wakaru_ii__initialized = true;
"use strict";
E(), Mt(), $tc(), Hn(), r1(), A6n(), Ldt(), b_C(), S_C(), R_C(), ei_ = 6, ti_ = (t, e)=>Otc(t, (n)=>{
        n.width > 0 && n.height > 0 && e(n);
    }), ni_ = Xn_(function(e) {
    const n = Tmc(13), { children: i, className: r, measureRef: s, model: o, row: a, topPx: l, virtualIndex: c } = e;
    let u, d;
    n[0] !== o || n[1] !== a ? (u = (b)=>{
        const y = o.onDidChange(b), S = o.onDidChangeRowHeight((k)=>{
            k.filePath === a.id && b();
        });
        return ()=>{
            y.dispose(), S.dispose();
        };
    }, d = ()=>o.getRowHeightRecord(a), n[0] = o, n[1] = a, n[2] = u, n[3] = d) : (u = n[2], d = n[3]);
    const h = OOs(u, d), p = `${l}px`, g = h.source === "hold" ? `${h.valuePx}px` : void 0;
    let f;
    n[4] !== p || n[5] !== g ? (f = {
        position: "absolute",
        top: p,
        left: 0,
        width: "100%",
        minHeight: g
    }, n[4] = p, n[5] = g, n[6] = f) : f = n[6];
    let _;
    return n[7] !== i || n[8] !== r || n[9] !== s || n[10] !== f || n[11] !== c ? (_ = Gen("div", {
        className: r,
        "data-index": c,
        ref: s,
        style: f,
        children: i
    }), n[7] = i, n[8] = r, n[9] = s, n[10] = f, n[11] = c, n[12] = _) : _ = n[12], _;
}), Amc = Xn_(function({ model: e, className: n, dataComponent: i, findCommandBridgeEnabled: r, findFocusRequestId: s, onFindRequested: o, viewportClassName: a, itemsClassName: l, rowClassName: c, style: u, rootStyle: d, viewportStyle: h, contentStyle: p, scrollPadding: g = 0, onMouseMove: f, onScrollAreaRef: _, getRowMinHeight: b, renderRow: y }) {
    const S = OOs((G)=>{
        const q = e.onDidChange(G);
        return ()=>q.dispose();
    }, ()=>e.rows);
    OOs((G)=>{
        const q = e.onDidChangeFind(G);
        return ()=>q.dispose();
    }, ()=>e.getFindSnapshot()), Imc(e, r);
    const k = Emc(null), C = Emc(null), T = Emc(new Map), I = Zn_((G)=>{
        if (!(G.isScrolling || T.current.size === 0)) for (const [q, K] of T.current){
            T.current.delete(q);
            const V = S[q];
            if (!V || V.id !== K.rowId) continue;
            const Y = e.recordMeasurement(V, K.rawHeightPx, K.widthBand);
            G.resizeItem(q, Y.heightPx);
        }
    }, [
        e,
        S
    ]), A = aPv({
        count: S.length,
        estimateSize: (G)=>{
            const q = S[G];
            return q ? e.getRowHeight(q) : x6n;
        },
        getItemKey: (G)=>S[G]?.key ?? G,
        getScrollElement: ()=>k.current,
        observeElementRect: ti_,
        onChange: (G)=>{
            I(G);
        },
        measureElement: (G, q, K)=>{
            if (!(G instanceof HTMLElement)) return x6n;
            const V = Number(G.dataset.index), Y = S[V];
            if (!Y) return x6n;
            const J = q?.contentRect.height ?? G.getBoundingClientRect().height, Q = vOs(k.current?.clientWidth ?? G.getBoundingClientRect().width), te = K.measurementsCache[V];
            if (K.isScrolling && te && Jn_(te, K.scrollOffset) && J < te.size) return T.current.set(V, {
                rowId: Y.id,
                rawHeightPx: J,
                widthBand: Q
            }), te.size;
            T.current.delete(V);
            const ee = e.recordMeasurement(Y, J, Q).heightPx;
            return e.preExtendRowForGrowth(Y.id, ee), ee;
        },
        overscan: ei_,
        rangeExtractor: y_C
    });
    A.shouldAdjustScrollPositionOnItemSizeChange = (G, q, K)=>Jn_(G, K.scrollOffset);
    const P = LOs((G, q)=>{
        A.scrollToIndex(G, {
            align: q?.align ?? "start"
        });
    }), M = LOs((G, q)=>{
        const K = C.current;
        if (!K) return;
        const V = A.getTotalSize(), Y = A.measurementsCache[G];
        if (!Y) return;
        const J = q - Y.size;
        J <= 0 || Y.start >= (A.scrollOffset ?? 0) || (K.style.height = `${V + J}px`);
    }), O = LOs(()=>{
        A.invalidateMeasurements();
    }), N = LOs((G, q)=>{
        A.resizeItem(G, q);
    }), U = M_C(()=>{
        const G = new Map;
        return S.forEach((q, K)=>{
            G.set(q.id, K);
        }), G;
    }, [
        S
    ]);
    P_C(()=>{
        const G = e.bindScrollPort({
            scrollToIndex: (q, K)=>{
                P(q, K);
            },
            preExtendForGrowth: (q, K)=>{
                M(q, K);
            }
        });
        return ()=>G.dispose();
    }, [
        e
    ]), Qn_(()=>{
        const G = e.onDidChange(()=>{
            O();
        });
        return ()=>G.dispose();
    }, [
        e
    ]), Qn_(()=>{
        const G = e.onDidChangeRowHeight((q)=>{
            const K = U.get(q.filePath);
            K !== void 0 && (e.preExtendRowForGrowth(q.filePath, q.heightPx), N(K, q.heightPx));
        });
        return ()=>G.dispose();
    }, [
        e,
        U
    ]);
    const j = Zn_((G)=>{
        k.current = G?.viewportElement ?? null, e.onViewportChanged(G?.viewportElement ?? void 0), _?.(G);
    }, [
        e,
        _
    ]), $ = A.getVirtualItems(), H = A.getTotalSize();
    return L_C(N_C, {
        children: [
            Gen(xmc, {
                commandBridgeEnabled: r,
                focusRequestId: s,
                highlightContainerRef: k,
                model: e,
                onFindRequested: o
            }),
            Gen(xg, {
                className: n,
                contentStyle: p,
                "data-component": i,
                onMouseMove: f,
                ref: j,
                rootStyle: d,
                scrollPadding: g,
                style: u,
                viewportClassName: a,
                viewportStyle: h,
                children: Gen("div", {
                    className: l,
                    ref: C,
                    style: {
                        height: `${H}px`,
                        boxSizing: "content-box",
                        position: "relative",
                        width: "100%"
                    },
                    children: $.map((G)=>{
                        const q = S[G.index];
                        if (!q) return null;
                        const K = b?.(q, G.index);
                        return Gen(ni_, {
                            className: c,
                            measureRef: A.measureElement,
                            model: e,
                            row: q,
                            topPx: G.start,
                            virtualIndex: G.index,
                            children: Gen("div", {
                                style: K !== void 0 ? {
                                    minHeight: K
                                } : void 0,
                                children: y(q, G.index, e.getSearchStateForRow(q.id))
                            })
                        }, q.key);
                    })
                })
            })
        ]
    });
});

}
