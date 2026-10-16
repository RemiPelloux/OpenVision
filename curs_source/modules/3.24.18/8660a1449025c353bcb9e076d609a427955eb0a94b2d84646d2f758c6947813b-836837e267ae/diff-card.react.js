import { sJ } from "./DiffCard.js";
import { ri } from "./LYd.js";
import { HA } from "./glass-menu-dimensions.js";
import { fvC, uvC, vvC } from "./gpc.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { dvC } from "./use-glass-diff-native-text-selection-add-to-chat.react.js";
import { jsx as AU } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as amc } from "./react-runtime/react/esm-index-production.js";
import { Fragment as hvC } from "./react-runtime/react/esm-index-production.js";
import { Fragment as mvC } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as omc } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as pvC } from "./react-runtime/react/esm-index-production.js";
import { jsxs as xOs } from "./react-runtime/react/esm-jsx-runtime-production.js";
var M6n, lmc, Wen;
export { M6n, Wen, lmc };
var __wakaru_AOs_initialized = false;
export function AOs() {
if (__wakaru_AOs_initialized) return;
__wakaru_AOs_initialized = true;
"use strict";
E(), Mt(), HA(), dvC(), M6n = {
    path: {
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        $$css: !0
    },
    pathActions: {
        kayTVb: "glass-14yy4lh",
        $$css: !0
    },
    stats: {
        kayTVb: "glass-9ek82g",
        $$css: !0
    }
}, lmc = {
    submoduleHeader: {
        kZKoxP: "glass-6oilt0",
        $$css: !0
    },
    submoduleEmpty: {
        k9WMMc: "glass-dpxx8g",
        kLKAdn: "glass-1t8xvyj",
        kpe85a: "glass-1jkygx",
        kGO01o: "glass-usxwy5",
        kE3dHu: "glass-1o7kk3e",
        $$css: !0
    }
}, Wen = pvC(function(e) {
    const n = omc(46), { model: i, onNativeSelectionChange: r, renderNativeSelectionActions: s, onCopyPath: o, onOpenPath: a, onOpenChange: l, onRootClick: c, onRootContextMenu: u, onRootElementChange: d, onDiffScrollRootChange: h, onTitleClick: p, onTitleContextMenu: g } = e, f = amc(null), _ = amc(null), b = amc(null);
    let y;
    n[0] !== d ? (y = (le)=>{
        f.current = le, d?.(le);
    }, n[0] = d, n[1] = y) : y = n[1];
    const S = y;
    let k;
    n[2] !== i.status || n[3] !== i.trailing ? (k = i.status || i.trailing ? xOs(mvC, {
        children: [
            i.status ? AU(sJ.Status, {
                tone: i.status.tone,
                children: i.status.label
            }) : null,
            i.trailing
        ]
    }) : void 0, n[2] = i.status, n[3] = i.trailing, n[4] = k) : k = n[4];
    const C = k, T = uvC({
        containmentRootRef: f,
        diffScrollRootRef: _,
        lineRowsRef: b,
        onDiffLineSelectionChange: r,
        renderSelectionActions: s
    }), I = sJ;
    let A;
    n[5] !== i.className ? (A = ri("glass-diff-card", i.className), n[5] = i.className, n[6] = A) : A = n[6];
    const P = i.collapsible, M = i.contentReady === !0 ? "true" : void 0, O = i.filePath, N = i.dataSubmodule || void 0, U = "bottom", j = i.open, $ = "unified-diff", H = i.stickyHeader, G = i.stickyTop, q = i.style, K = "borderless", V = i.icon, Y = i.dataSubmodule ? lmc.submoduleHeader : void 0;
    let J;
    n[7] !== i.path || n[8] !== o || n[9] !== a ? (J = fvC({
        path: i.path,
        onCopyPath: o,
        onOpenPath: a
    }), n[7] = i.path, n[8] = o, n[9] = a, n[10] = J) : J = n[10];
    let Q;
    n[11] !== J ? (Q = AU("span", {
        "data-glass-diff-card-title-path": "",
        className: "glass-jp7ctv",
        children: J
    }), n[11] = J, n[12] = Q) : Q = n[12];
    let te;
    n[13] !== i.additions || n[14] !== i.deletions ? (te = AU(sJ.Stats, {
        additions: i.additions,
        deletions: i.deletions,
        rootStyle: M6n.stats
    }), n[13] = i.additions, n[14] = i.deletions, n[15] = te) : te = n[15];
    let ee;
    n[16] !== i.rightMeta ? (ee = i.rightMeta ? AU("span", {
        "data-glass-diff-card-right-meta": "",
        className: "glass-o1ph6p glass-3nfvp2 glass-6s0dn4 glass-11twubx glass-8x9d4c glass-yab65l glass-2lah0s",
        children: i.rightMeta
    }) : null, n[16] = i.rightMeta, n[17] = ee) : ee = n[17];
    let re;
    n[18] !== C || n[19] !== i.icon || n[20] !== p || n[21] !== g || n[22] !== Y || n[23] !== Q || n[24] !== te || n[25] !== ee ? (re = xOs(sJ.Header, {
        icon: V,
        onContextMenu: g,
        onTitleClick: p,
        rootStyle: Y,
        trailing: C,
        children: [
            Q,
            te,
            ee
        ]
    }), n[18] = C, n[19] = i.icon, n[20] = p, n[21] = g, n[22] = Y, n[23] = Q, n[24] = te, n[25] = ee, n[26] = re) : re = n[26];
    const ie = i.afterHeader, oe = i.body.map((le)=>AU(hvC, {
            children: vvC({
                body: le,
                isSubmodule: !!i.dataSubmodule,
                diffScrollRootRef: _,
                lineRowsRef: b,
                onDiffScrollRootChange: h
            })
        }, le.key));
    let se;
    return n[27] !== i.afterHeader || n[28] !== i.collapsible || n[29] !== i.filePath || n[30] !== i.open || n[31] !== i.stickyHeader || n[32] !== i.stickyTop || n[33] !== i.style || n[34] !== T || n[35] !== l || n[36] !== c || n[37] !== u || n[38] !== S || n[39] !== re || n[40] !== oe || n[41] !== I.Root || n[42] !== A || n[43] !== M || n[44] !== N ? (se = xOs(I.Root, {
        className: A,
        collapsible: P,
        "data-diff-content-ready": M,
        "data-file-path": O,
        "data-submodule": N,
        divider: U,
        onClick: c,
        onContextMenu: u,
        onOpenChange: l,
        open: j,
        presentation: $,
        ref: S,
        stickyHeader: H,
        stickyTop: G,
        style: q,
        variant: K,
        children: [
            re,
            ie,
            oe,
            T
        ]
    }), n[27] = i.afterHeader, n[28] = i.collapsible, n[29] = i.filePath, n[30] = i.open, n[31] = i.stickyHeader, n[32] = i.stickyTop, n[33] = i.style, n[34] = T, n[35] = l, n[36] = c, n[37] = u, n[38] = S, n[39] = re, n[40] = oe, n[41] = I.Root, n[42] = A, n[43] = M, n[44] = N, n[45] = se) : se = n[45], se;
});

}
