import { B0, q6 } from "./Asv.js";
import { O_ } from "./Ycg.js";
import { D6n } from "./diff-card-utils.js";
import { Pgc, S0C } from "./diff-file-card.react.js";
import { Amc, ii_ } from "./diff-list-view.react.js";
import { A6n } from "./diff-row-height-predict.js";
import { mv } from "./editor-panel-context.react.js";
import { $G } from "./glass-diff-service.js";
import { MRt } from "./glass-diff-types.js";
import { I6n, Ldt } from "./glass-diff-virtualization-constants.js";
import { Hpc } from "./glass-diff-virtualization-service.js";
import { Dme } from "./glass-editor-service.types.js";
import { Imc, M0C, QOs, co_, do_, lo_, uo_, xmc } from "./gpc.js";
import { Mt } from "./index_197.js";
import { JOs } from "./local-diff-list-model.js";
import { xg } from "./scroll-area.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { S2t } from "./use-glass-typography.react.js";
import { KT } from "./use-layout-service.react.js";
import { In } from "./use-service.react_2.js";
import { Fragment as I0C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as JBi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Mgc } from "./react-runtime/react/esm-index-production.js";
import { jsx as Yen } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useDeferredValue as k0C } from "./react-runtime/react/esm-index-production.js";
import { jsxs as x0C } from "./react-runtime/react/esm-jsx-runtime-production.js";
var $dt, Dgc, ho_, po_, mo_;
export { $dt, Dgc, ho_, mo_, po_ };
var __wakaru_D0C_initialized = false;
export function D0C() {
if (__wakaru_D0C_initialized) return;
__wakaru_D0C_initialized = true;
"use strict";
E(), Mt(), dv(), Ru(), z6(), S2t(), KT(), In(), A6n(), $G(), MRt(), Ldt(), Hpc(), Dme(), D6n(), ii_(), mv(), S0C(), JOs(), $dt = {
    listRoot: {
        kzqmXN: "glass-h8yej3",
        kZKoxP: "glass-5yr21d",
        kAzted: "glass-2lwn1j",
        $$css: !0
    },
    listViewport: {
        kSOgLn: "glass-1xzczws",
        $$css: !0
    },
    listContent: {
        kVAEAm: "glass-1n2onr6",
        kzqmXN: "glass-h8yej3",
        kB7OPa: "glass-9f619",
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-yri2b",
        kGO01o: "glass-1egpv2n",
        kZCmMZ: "glass-1c1uobl",
        $$css: !0
    },
    listContentFullscreen: {
        kGO01o: "glass-1l0t4pe",
        $$css: !0
    }
}, Dgc = 24, ho_ = Mgc(function(e) {
    const n = JBi(80), { isActive: i, filePaths: r, scope: s, comparisonMode: o, allChangesStatsByPath: a, rowHeightFactsSeedByPath: l, selectedFilePaths: c, indeterminateFilePaths: u, shouldApplyKeyboardNavMinHeight: d, onCopyPath: h, onDiscard: p, onFileSelectedChange: g, onToggleAllFilesOpen: f, onMouseMove: _, onEnterSubmodule: b, subPath: y, submoduleCommitRanges: S, fileScopeMap: k, findCommandBridgeEnabled: C, hideStageControls: T, diffSearchMatchSummaryByPath: I, providedFileChangesByPath: A, isFullscreen: P } = e, M = o === void 0 ? "scoped" : o;
    let O;
    n[0] !== a || n[1] !== M || n[2] !== r || n[3] !== A || n[4] !== l || n[5] !== s || n[6] !== y ? (O = {
        comparisonMode: M,
        filePaths: r,
        allChangesStatsByPath: a,
        rowHeightFactsSeedByPath: l,
        providedFileChangesByPath: A,
        scope: s,
        subPath: y
    }, n[0] = a, n[1] = M, n[2] = r, n[3] = A, n[4] = l, n[5] = s, n[6] = y, n[7] = O) : O = n[7];
    const { intersectionObserver: N, listStyle: U, setScrollAreaRef: j, viewportElementRef: $, viewportHeight: H, virtualizer: G } = lo_(O), { handleSelectionActivated: q, handleSelectionCleared: K } = co_();
    let V;
    n[8] !== c ? (V = new Set(c), n[8] = c, n[9] = V) : V = n[9];
    const Y = V;
    let J;
    n[10] !== u ? (J = new Set(u), n[10] = u, n[11] = J) : J = n[11];
    const Q = J;
    let te;
    n[12] !== r ? (te = r.at(-1), n[12] = r, n[13] = te) : te = n[13];
    const ee = te, re = QOs();
    Imc(re, C);
    let ie;
    n[14] !== C || n[15] !== re || n[16] !== $ ? (ie = Yen(xmc, {
        commandBridgeEnabled: C,
        highlightContainerRef: $,
        model: re
    }), n[14] = C, n[15] = re, n[16] = $, n[17] = ie) : ie = n[17];
    const oe = P && $dt.listContentFullscreen;
    let se;
    n[18] !== oe ? (se = [
        $dt.listContent,
        oe
    ], n[18] = oe, n[19] = se) : se = n[19];
    let le;
    if (n[20] !== a || n[21] !== M || n[22] !== I || n[23] !== r || n[24] !== k || n[25] !== q || n[26] !== K || n[27] !== T || n[28] !== Q || n[29] !== N || n[30] !== i || n[31] !== ee || n[32] !== h || n[33] !== p || n[34] !== b || n[35] !== g || n[36] !== f || n[37] !== A || n[38] !== s || n[39] !== Y || n[40] !== d || n[41] !== y || n[42] !== S || n[43] !== H || n[44] !== G) {
        let de;
        n[46] !== a || n[47] !== M || n[48] !== I || n[49] !== k || n[50] !== q || n[51] !== K || n[52] !== T || n[53] !== Q || n[54] !== N || n[55] !== i || n[56] !== ee || n[57] !== h || n[58] !== p || n[59] !== b || n[60] !== g || n[61] !== f || n[62] !== A || n[63] !== s || n[64] !== Y || n[65] !== d || n[66] !== y || n[67] !== S || n[68] !== H || n[69] !== G ? (de = (he)=>Yen(Pgc, {
                allChangesStats: a?.get(he),
                commitRange: S?.get(he),
                comparisonMode: M,
                diffSearchMatchSummary: I?.get(he),
                filePath: he,
                hideStageControls: T,
                intersectionObserver: N,
                isActive: i,
                isIndeterminate: Q.has(he),
                isSelected: Y.has(he),
                minHeight: d && he === ee ? Math.max(0, H - I6n - Dgc) : void 0,
                onCopyPath: h,
                onDiscard: p,
                onEnterSubmodule: b,
                onFileSelectedChange: g,
                onSelectionActivated: q,
                onSelectionCleared: K,
                onToggleAllFilesOpen: f,
                providedFileChange: A?.get(he),
                mediaScope: do_(he, s, M, k),
                scope: uo_(he, s, M, k),
                subPath: y,
                virtualizer: G
            }, `${s}-${M}-${y ?? ""}-${he}`), n[46] = a, n[47] = M, n[48] = I, n[49] = k, n[50] = q, n[51] = K, n[52] = T, n[53] = Q, n[54] = N, n[55] = i, n[56] = ee, n[57] = h, n[58] = p, n[59] = b, n[60] = g, n[61] = f, n[62] = A, n[63] = s, n[64] = Y, n[65] = d, n[66] = y, n[67] = S, n[68] = H, n[69] = G, n[70] = de) : de = n[70], le = r.map(de), n[20] = a, n[21] = M, n[22] = I, n[23] = r, n[24] = k, n[25] = q, n[26] = K, n[27] = T, n[28] = Q, n[29] = N, n[30] = i, n[31] = ee, n[32] = h, n[33] = p, n[34] = b, n[35] = g, n[36] = f, n[37] = A, n[38] = s, n[39] = Y, n[40] = d, n[41] = y, n[42] = S, n[43] = H, n[44] = G, n[45] = le;
    } else le = n[45];
    let ce;
    n[71] !== U || n[72] !== _ || n[73] !== j || n[74] !== se || n[75] !== le ? (ce = Yen(xg, {
        contentStyle: se,
        "data-component": "local-diff-list",
        onMouseMove: _,
        ref: j,
        rootStyle: $dt.listRoot,
        scrollPadding: 0,
        style: U,
        viewportStyle: $dt.listViewport,
        children: le
    }), n[71] = U, n[72] = _, n[73] = j, n[74] = se, n[75] = le, n[76] = ce) : ce = n[76];
    let ae;
    return n[77] !== ie || n[78] !== ce ? (ae = x0C(I0C, {
        children: [
            ie,
            ce
        ]
    }), n[77] = ie, n[78] = ce, n[79] = ae) : ae = n[79], ae;
}), po_ = Mgc(function(e) {
    const n = JBi(51), { isActive: i, filePaths: r, scope: s, comparisonMode: o, allChangesStatsByPath: a, rowHeightFactsSeedByPath: l, selectedFilePaths: c, indeterminateFilePaths: u, shouldApplyKeyboardNavMinHeight: d, onCopyPath: h, onDiscard: p, onFileSelectedChange: g, onToggleAllFilesOpen: f, onMouseMove: _, onEnterSubmodule: b, subPath: y, submoduleCommitRanges: S, fileScopeMap: k, findCommandBridgeEnabled: C, hideStageControls: T, diffSearchMatchSummaryByPath: I, providedFileChangesByPath: A, isFullscreen: P } = e, M = o === void 0 ? "scoped" : o;
    let O;
    n[0] !== a || n[1] !== M || n[2] !== r || n[3] !== A || n[4] !== l || n[5] !== s || n[6] !== y ? (O = {
        comparisonMode: M,
        filePaths: r,
        allChangesStatsByPath: a,
        rowHeightFactsSeedByPath: l,
        providedFileChangesByPath: A,
        scope: s,
        subPath: y
    }, n[0] = a, n[1] = M, n[2] = r, n[3] = A, n[4] = l, n[5] = s, n[6] = y, n[7] = O) : O = n[7];
    const { intersectionObserver: N, listStyle: U, setScrollAreaRef: j, viewportHeight: $, virtualizer: H } = lo_(O), { handleSelectionActivated: G, handleSelectionCleared: q } = co_();
    let K;
    n[8] !== c ? (K = new Set(c), n[8] = c, n[9] = K) : K = n[9];
    const V = K;
    let Y;
    n[10] !== u ? (Y = new Set(u), n[10] = u, n[11] = Y) : Y = n[11];
    const J = Y;
    let Q;
    n[12] !== r ? (Q = r.at(-1), n[12] = r, n[13] = Q) : Q = n[13];
    const te = Q, ee = QOs();
    let re;
    n[14] !== te || n[15] !== d || n[16] !== $ ? (re = (de)=>d && de.id === te ? Math.max(0, $ - I6n - Dgc) : void 0, n[14] = te, n[15] = d, n[16] = $, n[17] = re) : re = n[17];
    const ie = re;
    let oe;
    n[18] !== a || n[19] !== M || n[20] !== I || n[21] !== k || n[22] !== G || n[23] !== q || n[24] !== T || n[25] !== J || n[26] !== N || n[27] !== i || n[28] !== h || n[29] !== p || n[30] !== b || n[31] !== g || n[32] !== f || n[33] !== A || n[34] !== s || n[35] !== V || n[36] !== y || n[37] !== S || n[38] !== H ? (oe = (de)=>{
        const he = de.id;
        return Yen(Pgc, {
            allChangesStats: a?.get(he),
            commitRange: S?.get(he),
            comparisonMode: M,
            diffSearchMatchSummary: I?.get(he),
            filePath: he,
            hideStageControls: T,
            intersectionObserver: N,
            isActive: i,
            isIndeterminate: J.has(he),
            isSelected: V.has(he),
            onCopyPath: h,
            onDiscard: p,
            onEnterSubmodule: b,
            onFileSelectedChange: g,
            onSelectionActivated: G,
            onSelectionCleared: q,
            onToggleAllFilesOpen: f,
            mediaScope: do_(he, s, M, k),
            providedFileChange: A?.get(he),
            scope: uo_(he, s, M, k),
            subPath: y,
            virtualizer: H
        });
    }, n[18] = a, n[19] = M, n[20] = I, n[21] = k, n[22] = G, n[23] = q, n[24] = T, n[25] = J, n[26] = N, n[27] = i, n[28] = h, n[29] = p, n[30] = b, n[31] = g, n[32] = f, n[33] = A, n[34] = s, n[35] = V, n[36] = y, n[37] = S, n[38] = H, n[39] = oe) : oe = n[39];
    const se = oe, le = P && $dt.listContentFullscreen;
    let ce;
    n[40] !== le ? (ce = [
        $dt.listContent,
        le
    ], n[40] = le, n[41] = ce) : ce = n[41];
    let ae;
    return n[42] !== C || n[43] !== ie || n[44] !== U || n[45] !== ee || n[46] !== _ || n[47] !== se || n[48] !== j || n[49] !== ce ? (ae = Yen(Amc, {
        contentStyle: ce,
        dataComponent: "local-diff-list",
        findCommandBridgeEnabled: C,
        getRowMinHeight: ie,
        model: ee,
        onMouseMove: _,
        onScrollAreaRef: j,
        renderRow: se,
        rootStyle: $dt.listRoot,
        scrollPadding: 0,
        style: U,
        viewportStyle: $dt.listViewport
    }), n[42] = C, n[43] = ie, n[44] = U, n[45] = ee, n[46] = _, n[47] = se, n[48] = j, n[49] = ce, n[50] = ae) : ae = n[50], ae;
}), mo_ = Mgc(function(e) {
    const n = JBi(9), i = k0C(e.filePaths);
    let r;
    n[0] !== i || n[1] !== e ? (r = i === e.filePaths ? e : {
        ...e,
        filePaths: i
    }, n[0] = i, n[1] = e, n[2] = r) : r = n[2];
    const s = r, o = O_("diff_tab_viewport_virtualization", !0), a = B0(), l = q6(a, M0C);
    if (o) {
        let u;
        return n[3] !== l || n[4] !== s ? (u = Yen(po_, {
            ...s,
            isFullscreen: l
        }), n[3] = l, n[4] = s, n[5] = u) : u = n[5], u;
    }
    let c;
    return n[6] !== l || n[7] !== s ? (c = Yen(ho_, {
        ...s,
        isFullscreen: l
    }), n[6] = l, n[7] = s, n[8] = c) : c = n[8], c;
});

}
