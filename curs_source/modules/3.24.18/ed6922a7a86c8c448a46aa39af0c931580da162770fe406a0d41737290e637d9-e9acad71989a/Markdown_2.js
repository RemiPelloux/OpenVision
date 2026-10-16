import { _Cn } from "./CodeBlock.js";
import { _Zg, iXg, n2l, tXg } from "./DSs.js";
import { T0s } from "./DefaultDiff.js";
import { qIi } from "./LinkNavigationContext.js";
import { ZIi } from "./Markdown.stylex.js";
import { kCn } from "./MarkdownDefaultsContext.js";
import { rXg } from "./MarkdownFileReference.js";
import { nRl } from "./MarkdownPluginRegistry.js";
import { srf } from "./MermaidCodeBlock.js";
import { n9t } from "./ToggleIconButton.js";
import { hh } from "./attach.js";
import { qg } from "./cn.js";
import { uSl } from "./composeEventHandlers.js";
import { $sf, Bsf, Fsf, Gsf, Hsf, I0s, Ksf, Lsf, Nsf, Osf, Psf, Q9t, Rsf, Usf, Vsf, Wsf, Ysf, f0s, jsf, qsf, xOl, xsf, zsf } from "./f0s.js";
import { sp } from "./icon.js";
import { Wbs } from "./index_117.js";
import { yZg } from "./index_132.js";
import { fYg } from "./inlineCodeHeuristics.js";
import { VMl } from "./lazy-math-rehype.js";
import { UAl } from "./markdownContext.js";
import { dXg } from "./markdownParagraphAdjacency.js";
import { _Rl } from "./markdownTableClipboard.js";
import { mRl } from "./markdownTableContextMenu.js";
import { iAl } from "./parse-fence-header.js";
import { OHg } from "./parse-unified-diff.js";
import { $bs, E5, J5t } from "./qIc.js";
import { cRl } from "./richTextCopy.js";
import { Kft } from "./safeHref.js";
import { ED } from "./scroll-area.js";
import { dQg } from "./streamingBlocks.js";
import { Oc } from "./stylex.js";
import { aAl } from "./taskCheckboxAccessibility.js";
import { $Hg } from "./trim-leading-whitespace.js";
import { x } from "./tslib.es6.js";
import { memo as Csf } from "./react-runtime/react/esm-index-production.js";
import { c as O3 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Ov } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { lazy as kOl } from "./react-runtime/react/esm-index-production.js";
var AOl, ROl, DOl, A0s, MOl, POl, R0s, LOl, NOl, OOl, FOl, BOl, D0s, UOl;
export { A0s, AOl, BOl, D0s, DOl, FOl, LOl, MOl, NOl, OOl, POl, R0s, ROl, UOl };
var __wakaru_DY_initialized = false;
export function DY() {
if (__wakaru_DY_initialized) return;
__wakaru_DY_initialized = true;
"use strict";
x(), E5(), Oc(), Wbs(), qg(), uSl(), OHg(), $Hg(), _Cn(), iAl(), qIi(), n9t(), aAl(), fYg(), ZIi(), kCn(), rXg(), nRl(), UAl(), dXg(), _Rl(), mRl(), yZg(), VMl(), cRl(), Kft(), dQg(), hh(), ED(), sp(), J5t(), AOl = {
    enabled: !1
}, ROl = ()=>()=>{}, DOl = ()=>!0, A0s = ()=>!1, MOl = kOl(async ()=>({
        default: (await Promise.resolve().then(()=>(srf(), n2l))).MermaidCodeBlock
    })), POl = kOl(async ()=>({
        default: (await Promise.resolve().then(()=>(T0s(), f0s))).DefaultDiff
    })), R0s = {
    base: {
        kSiTet: "ui-197sbye",
        khDVqt: "ui-126k92a",
        kQ0QjF: "ui-4ej8vm",
        $$css: !0
    },
    display: {
        k1xSpc: "ui-1lliihq",
        k9WMMc: "ui-2b8uid",
        kqGvvJ: "ui-man319",
        kAzted: "ui-18s2yiw",
        $$css: !0
    }
}, LOl = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6"
}, NOl = "Image unavailable", OOl = 60, FOl = 15, BOl = 80, D0s = {
    blockquote: Psf,
    code: Rsf,
    strong: qsf,
    tbody: zsf,
    section: Ksf,
    del: Nsf,
    sub: Fsf,
    sup: Osf,
    h1: (e)=>Ov(Q9t, {
            ...e,
            level: 1
        }),
    h2: (e)=>Ov(Q9t, {
            ...e,
            level: 2
        }),
    h3: (e)=>Ov(Q9t, {
            ...e,
            level: 3
        }),
    h4: (e)=>Ov(Q9t, {
            ...e,
            level: 4
        }),
    h5: (e)=>Ov(Q9t, {
            ...e,
            level: 5
        }),
    h6: (e)=>Ov(Q9t, {
            ...e,
            level: 6
        }),
    hr: Lsf,
    a: tXg,
    input: Bsf,
    img: $sf,
    li: Usf,
    ol: (e)=>Ov(xOl, {
            ...e,
            ordered: !0
        }),
    p: I0s,
    table: Hsf,
    thead: Wsf,
    th: Vsf,
    tr: Gsf,
    td: jsf,
    ul: (e)=>Ov(xOl, {
            ...e,
            ordered: !1
        }),
    cite: iXg
}, UOl = Csf(function(t) {
    const n = O3(13), { components: i, isStreaming: r, mode: s, needsMathRehype: o, parseMarkdownIntoBlocks: a, pluginOptions: c, renderedChildren: l, streamingBlocks: u } = t, h = Ysf(o);
    let p;
    n[0] !== h || n[1] !== c ? (p = _Zg({
        ...c,
        mathRehypePlugins: h
    }), n[0] = h, n[1] = c, n[2] = p) : p = n[2];
    const { remarkPlugins: g, rehypePlugins: f } = p, b = o && h === void 0 ? "ui-markdown__body--math-unexpanded" : void 0;
    let y;
    return n[3] !== i || n[4] !== r || n[5] !== s || n[6] !== a || n[7] !== f || n[8] !== g || n[9] !== l || n[10] !== u.BlockComponent || n[11] !== b ? (y = Ov($bs, {
        className: b,
        mode: s,
        isAnimating: r,
        BlockComponent: u.BlockComponent,
        parseIncompleteMarkdown: !1,
        parseMarkdownIntoBlocksFn: a,
        remarkPlugins: g,
        rehypePlugins: f,
        urlTransform: xsf,
        components: i,
        controls: !1,
        linkSafety: AOl,
        children: l
    }), n[3] = i, n[4] = r, n[5] = s, n[6] = a, n[7] = f, n[8] = g, n[9] = l, n[10] = u.BlockComponent, n[11] = b, n[12] = y) : y = n[12], y;
});

}
