import { R_f } from "./ComposerMarkdown.react.js";
import { yiw } from "./ComposerReactTranscriptRow.react.js";
import { $df, Ciw, IWk, biw, hbs, urw } from "./Ycg.js";
import { gTt } from "./composerMessagesTypes.js";
import { gbf } from "./composerReactActivityGroupLifecycle.js";
import { rrw } from "./composerReactBubbleLifecycle.react.js";
import { FQk } from "./composerReactHoverPairTracking.js";
import { ubf } from "./composerReactPlaneStructure.js";
import { g2l } from "./composerReactRowAdapter.js";
import { zJk } from "./composerReactRowGeometry.js";
import { Hiw } from "./composerReactScrollRestore.react.js";
import { fDn, tKe } from "./composerTranscriptPerfCounters.js";
import { _Dn } from "./composerTranscriptRowHeights.js";
import { XSf } from "./composerUserNavigationScroll.js";
import { Mt } from "./index_197.js";
import { RMn } from "./index_24.ts";
import { vxl } from "./index_25.ts";
import { jSn } from "./ipa.js";
import { M_f } from "./keepAliveSurfaceHidden.react.js";
import { Evs } from "./row-frame.ts";
import { K9r, Y9r } from "./transcript-plane-tuning.js";
import { E } from "./tslib.es6.js";
import { KSf } from "./visualizationGeometryInvalidation.react.js";
import { useMemo as Eye } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as ODn } from "./react-runtime/react/esm-index-production.js";
import { useCallback as aKe } from "./react-runtime/react/esm-index-production.js";
import { memo as b1f } from "./react-runtime/react/esm-index-production.js";
import { useEffect as pXt } from "./react-runtime/react/esm-index-production.js";
import { jsx as tce } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as y1f } from "./react-runtime/react/esm-index-production.js";
var mXt, k1f, w1f, C1f, T1f, E1f;
export { C1f, E1f, T1f, k1f, mXt, w1f };
var __wakaru_hrw_initialized = false;
export function hrw() {
if (__wakaru_hrw_initialized) return;
__wakaru_hrw_initialized = true;
"use strict";
E(), RMn(), vxl(), Mt(), R_f(), FQk(), M_f(), fDn(), g2l(), ubf(), zJk(), gbf(), yiw(), KSf(), _Dn(), XSf(), gTt(), Hiw(), rrw(), mXt = new Set, k1f = IWk({
    zIndex: Y9r,
    topInset: "var(--composer-messages-top-inset, 0px)"
}), w1f = {
    kind: "outer-observer"
}, C1f = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 0,
    pointerEvents: "none"
}, T1f = b1f(function(e) {
    const { clipsToCommittedHeight: n, descriptor: i, heightPx: r, index: s, isActiveSticky: o, model: a, outerRef: l, revealsTurnTimestamp: c, stickyBoundaryHeightPx: u, topPx: d, ...h } = e;
    pXt(()=>{
        tKe.planeRowRenders += 1;
    });
    const p = i.content.kind === "fixed-geometry", g = u !== void 0;
    return tce("div", {
        className: "composer-react-virtual-plane-row virtualized-composer-messages-row",
        "data-find-bubble-ids": a.identity.bubbleIds.length > 0 ? a.identity.bubbleIds.join(`
`) : void 0,
        "data-find-row-key": a.rowId,
        "data-index": s,
        "data-pair-index": p ? void 0 : i.pairIndex,
        "data-sticky": o ? "true" : "false",
        "data-sticky-boundary": g ? "true" : void 0,
        ref: l,
        style: {
            ...$df({
                topPx: d,
                stickyBoundaryHeightPx: u,
                clip: n ? {
                    heightPx: r,
                    marginPx: K9r
                } : void 0
            }),
            ...p ? {
                height: `${r}px`
            } : void 0,
            ...c ? {
                "--turn-actions-timestamp-opacity": "1"
            } : void 0
        },
        children: tce("div", {
            className: "virtualized-composer-messages-row-body",
            "data-human-row": hbs(i) ? "true" : void 0,
            "data-host-card": i.content.kind === "host-card" ? "true" : void 0,
            style: g ? k1f : Evs,
            children: tce(urw, {
                descriptor: i,
                ...h
            })
        })
    });
}), E1f = b1f(function(e) {
    const { source: n, rowKey: i, descriptor: r, measurementRef: s, conversationContext: o, toolApprovalContext: a, openExternalFileProtection: l, turnFeedbackDeps: c, turnFeedbackResolution: u, trackTurnFeedbackImpression: d, responseComparisonByRowId: h, localImages: p, workGroupControl: g, notificationControl: f, activityGroupControl: _, uiContextMenuServices: b, pendingApprovalQueuedBehind: y, renderTranscriptRowOverride: S, streamInEnter: k, onBeforeDisclosureChange: C, onDemandLoad: T } = e, I = aKe(($)=>n.subscribeRowContent(i, $), [
        n,
        i
    ]), A = aKe(()=>n.getRowContent(i), [
        n,
        i
    ]), P = y1f(I, A, A);
    ODn(()=>{
        const $ = n.trackRow(i);
        return ()=>{
            $.dispose();
        };
    }, [
        n,
        i
    ]), pXt(()=>{
        T(i);
    }, [
        T,
        i
    ]);
    const M = aKe(()=>{
        C(i);
    }, [
        C,
        i
    ]), O = aKe(()=>{
        k?.markEntered(i);
    }, [
        k,
        i
    ]), N = Eye(()=>({
            invalidateVisualizationGeometry: ()=>n.invalidateRowGeometry(i, "async-media-resolved")
        }), [
        n,
        i
    ]), U = Eye(()=>s === void 0 ? w1f : {
            kind: "measurement-ref",
            measurementRef: s
        }, [
        s
    ]);
    if (P === void 0) return null;
    const j = S?.(P, r);
    return j !== void 0 ? tce("div", {
        ref: s,
        children: tce(jSn, {
            onBeforeTranscriptDisclosureChange: M,
            children: j
        })
    }) : tce(Ciw, {
        value: N,
        children: tce(biw, {
            activityGroupControl: _,
            conversationContext: o,
            enter: k?.shouldEnter(i) === !0,
            measurementOwner: U,
            notificationControl: f,
            onBeforeDisclosureChange: M,
            onEntered: k === void 0 ? void 0 : O,
            pendingApprovalQueuedBehind: y,
            resolveLocalImage: p?.resolveLocalImage,
            responseComparison: h?.get(i),
            row: P,
            toolApprovalContext: a,
            openExternalFileProtection: l,
            trackTurnFeedbackImpression: d,
            turnFeedbackDeps: c,
            turnFeedbackResolution: u,
            uiContextMenuServices: b,
            watchLocalImage: p?.watchLocalImage,
            workGroupControl: g
        })
    });
});

}
