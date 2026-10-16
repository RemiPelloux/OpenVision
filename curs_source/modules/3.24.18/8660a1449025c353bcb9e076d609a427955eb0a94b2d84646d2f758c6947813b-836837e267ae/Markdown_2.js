import { Adi } from "./CodeBlock.js";
import { $hi } from "./DefaultDiff.js";
import { U5, eaa, pyn } from "./LYd.js";
import { cNr } from "./LinkNavigationContext.js";
import { Mdi } from "./Markdown.stylex.js";
import { Ddi } from "./MarkdownDefaultsContext.js";
import { CuS } from "./MarkdownFileReference.js";
import { bPh } from "./MarkdownPluginRegistry.js";
import { JvS } from "./MermaidCodeBlock.js";
import { X7t } from "./ToggleIconButton.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { iaa } from "./composeEventHandlers.js";
import { fd } from "./icon.js";
import { naa } from "./index_122.js";
import { FdS } from "./index_137.js";
import { UcS } from "./inlineCodeHeuristics.js";
import { AbS, CbS, DbS, EbS, FbS, IbS, LbS, MbS, NbS, ObS, PbS, RbS, SbS, TbS, _bS, cFh, gbS, ipa, kbS, mOr, uSn, wbS, xbS } from "./ipa.js";
import { a3h } from "./lazy-math-rehype.js";
import { Oca } from "./markdownContext.js";
import { PuS } from "./markdownParagraphAdjacency.js";
import { LPh } from "./markdownTableClipboard.js";
import { PPh } from "./markdownTableContextMenu.js";
import { LdS, OOh, SuS, wuS } from "./nca.js";
import { yca } from "./parse-fence-header.js";
import { Bkh } from "./parse-unified-diff.js";
import { Gca } from "./richTextCopy.js";
import { k1t } from "./safeHref.js";
import { f2 } from "./scroll-area.js";
import { xhS } from "./streamingBlocks.js";
import { Va } from "./stylex.js";
import { C2h } from "./taskCheckboxAccessibility.js";
import { _nS } from "./trim-leading-whitespace.js";
import { E } from "./tslib.es6.js";
import { c as $7 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Ay } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as hbS } from "./react-runtime/react/esm-index-production.js";
import { lazy as rFh } from "./react-runtime/react/esm-index-production.js";
var dFh, hFh, pFh, gpa, mFh, gFh, fpa, fFh, vFh, _Fh, bFh, yFh, vpa, SFh;
export { SFh, _Fh, bFh, dFh, fFh, fpa, gFh, gpa, hFh, mFh, pFh, vFh, vpa, yFh };
var __wakaru_Lz_initialized = false;
export function Lz() {
if (__wakaru_Lz_initialized) return;
__wakaru_Lz_initialized = true;
"use strict";
E(), U5(), Va(), naa(), mf(), iaa(), Bkh(), _nS(), Adi(), yca(), cNr(), X7t(), C2h(), UcS(), Mdi(), Ddi(), CuS(), bPh(), Oca(), PuS(), LPh(), PPh(), FdS(), a3h(), Gca(), k1t(), xhS(), qu(), f2(), fd(), pyn(), dFh = {
    enabled: !1
}, hFh = ()=>()=>{}, pFh = ()=>!0, gpa = ()=>!1, mFh = rFh(async ()=>({
        default: (await Promise.resolve().then(()=>(JvS(), OOh))).MermaidCodeBlock
    })), gFh = rFh(async ()=>({
        default: (await Promise.resolve().then(()=>($hi(), ipa))).DefaultDiff
    })), fpa = {
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
}, fFh = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6"
}, vFh = "Image unavailable", _Fh = 60, bFh = 15, yFh = 80, vpa = {
    blockquote: SbS,
    code: _bS,
    strong: NbS,
    tbody: LbS,
    section: ObS,
    del: wbS,
    sub: TbS,
    sup: CbS,
    h1: (t)=>Ay(uSn, {
            ...t,
            level: 1
        }),
    h2: (t)=>Ay(uSn, {
            ...t,
            level: 2
        }),
    h3: (t)=>Ay(uSn, {
            ...t,
            level: 3
        }),
    h4: (t)=>Ay(uSn, {
            ...t,
            level: 4
        }),
    h5: (t)=>Ay(uSn, {
            ...t,
            level: 5
        }),
    h6: (t)=>Ay(uSn, {
            ...t,
            level: 6
        }),
    hr: kbS,
    a: SuS,
    input: EbS,
    img: xbS,
    li: IbS,
    ol: (t)=>Ay(cFh, {
            ...t,
            ordered: !0
        }),
    p: mOr,
    table: AbS,
    thead: RbS,
    th: MbS,
    tr: PbS,
    td: DbS,
    ul: (t)=>Ay(cFh, {
            ...t,
            ordered: !1
        }),
    cite: wuS
}, SFh = hbS(function(e) {
    const n = $7(13), { components: i, isStreaming: r, mode: s, needsMathRehype: o, parseMarkdownIntoBlocks: a, pluginOptions: l, renderedChildren: c, streamingBlocks: u } = e, d = FbS(o);
    let h;
    n[0] !== d || n[1] !== l ? (h = LdS({
        ...l,
        mathRehypePlugins: d
    }), n[0] = d, n[1] = l, n[2] = h) : h = n[2];
    const { remarkPlugins: p, rehypePlugins: g } = h, _ = o && d === void 0 ? "ui-markdown__body--math-unexpanded" : void 0;
    let b;
    return n[3] !== i || n[4] !== r || n[5] !== s || n[6] !== a || n[7] !== g || n[8] !== p || n[9] !== c || n[10] !== u.BlockComponent || n[11] !== _ ? (b = Ay(eaa, {
        className: _,
        mode: s,
        isAnimating: r,
        BlockComponent: u.BlockComponent,
        parseIncompleteMarkdown: !1,
        parseMarkdownIntoBlocksFn: a,
        remarkPlugins: p,
        rehypePlugins: g,
        urlTransform: gbS,
        components: i,
        controls: !1,
        linkSafety: dFh,
        children: c
    }), n[3] = i, n[4] = r, n[5] = s, n[6] = a, n[7] = g, n[8] = p, n[9] = c, n[10] = u.BlockComponent, n[11] = _, n[12] = b) : b = n[12], b;
});

}
