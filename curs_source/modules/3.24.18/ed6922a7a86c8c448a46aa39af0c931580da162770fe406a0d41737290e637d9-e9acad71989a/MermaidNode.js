import { kRi, qCs } from "./DSs.js";
import { jtv } from "./ExpandableNode.js";
import { Axn, WFi } from "./RichTextEditorContext.js";
import { Vtv, mnv } from "./f0s.js";
import { M0 } from "./index_18.js";
import { Ife, Sgt } from "./index_36.js";
import { A_, BO, P0, RBt, cy, jus, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { jsx as $Fs } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as dnv } from "./react-runtime/react/esm-index-production.js";
import { useContext as hnv } from "./react-runtime/react/esm-index-production.js";
import { jsxs as lnv } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as pnv } from "./react-runtime/react/esm-index-production.js";
import { c as unv } from "./react-runtime/react/esm-compiler-runtime-production.js";
var $uu, Huu, Wuu;
export { $uu, Huu, Wuu };
var __wakaru_gnv_initialized = false;
export function gnv() {
if (__wakaru_gnv_initialized) return;
__wakaru_gnv_initialized = true;
"use strict";
x(), A_(), M0(), Ife(), WFi(), qCs(), jtv(), zS(), $uu = 3, Huu = dnv(function(t) {
    const n = unv(18), { node: i, editor: r, getPos: s, extension: o } = t, a = i.textContent, { showErrorDetails: c, onNodeLinkClick: l } = o.options, h = hnv(Axn)?.isStreaming ?? !1;
    let p;
    n[0] !== r ? (p = (O)=>(r.on("update", O), ()=>{
            r.off("update", O);
        }), n[0] = r, n[1] = p) : p = n[1];
    const g = p;
    let f;
    n[2] !== r.state.doc.content.size ? (f = ()=>r.state.doc.content.size, n[2] = r.state.doc.content.size, n[3] = f) : f = n[3];
    const v = f, b = pnv(g, v, v);
    let y;
    n[4] !== b || n[5] !== s || n[6] !== i.nodeSize ? (y = mnv(s, i.nodeSize, b), n[4] = b, n[5] = s, n[6] = i.nodeSize, n[7] = y) : y = n[7];
    const E = h && !y;
    let A;
    n[8] !== a || n[9] !== E || n[10] !== l || n[11] !== c ? (A = $Fs(kRi, {
        content: a,
        showErrorDetails: c,
        isStreaming: E,
        onNodeLinkClick: l
    }), n[8] = a, n[9] = E, n[10] = l, n[11] = c, n[12] = A) : A = n[12];
    const R = A;
    let D;
    n[13] !== R ? (D = $Fs(Vtv, {
        title: "Mermaid Diagram",
        children: R
    }), n[13] = R, n[14] = D) : D = n[14];
    let P;
    n[15] === Symbol.for("react.memo_cache_sentinel") ? (P = $Fs(jus, {
        className: "ui-1s85apg"
    }), n[15] = P) : P = n[15];
    let N;
    return n[16] !== D ? (N = lnv(Sgt, {
        className: "ui-mermaid-node",
        children: [
            D,
            P
        ]
    }), n[16] = D, n[17] = N) : N = n[17], N;
}), Wuu = BO.create({
    name: "mermaid",
    group: "block",
    content: "text*",
    inline: !1,
    code: !0,
    marks: "",
    atom: !1,
    defining: !0,
    addOptions () {
        return {
            HTMLAttributes: {},
            showErrorDetails: !0
        };
    },
    renderMarkdown (e) {
        return `\`\`\`mermaid
${e.content?.map((n)=>n.type === "text" ? n.text : "").join("") ?? ""}
\`\`\`

`;
    },
    parseHTML () {
        return [
            {
                tag: 'pre[data-language="mermaid"]',
                preserveWhitespace: "full"
            },
            {
                tag: 'div[data-type="mermaid"]',
                preserveWhitespace: "full"
            },
            {
                tag: "pre",
                preserveWhitespace: "full",
                priority: 100,
                getAttrs: (e)=>{
                    const t = e;
                    return t.querySelector("code")?.classList.contains("language-mermaid") || t.classList.contains("language-mermaid") || t.getAttribute("data-language") === "mermaid" ? null : !1;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "pre",
            P0(this.options.HTMLAttributes, e, {
                "data-language": "mermaid",
                "data-type": "mermaid",
                class: "language-mermaid"
            }),
            [
                "code",
                {
                    class: "language-mermaid"
                },
                0
            ]
        ];
    },
    addNodeView () {
        return RBt(Huu, {
            ignoreMutation: ()=>!0
        });
    },
    addKeyboardShortcuts () {
        return {
            Tab: ()=>this.editor.isActive("mermaid") ? this.editor.commands.insertContent("	") : !1,
            "Shift-Tab": ()=>{
                if (this.editor.isActive("mermaid")) {
                    const { state: e } = this.editor, { from: t } = e.selection, n = e.doc.textBetween(Math.max(0, t - 2), t, `
`);
                    if (n.endsWith("	")) return this.editor.commands.deleteRange({
                        from: t - 1,
                        to: t
                    });
                    if (n.endsWith("  ")) return this.editor.commands.deleteRange({
                        from: t - 2,
                        to: t
                    });
                }
                return !1;
            }
        };
    },
    addCommands () {
        return {
            setMermaid: (e)=>({ commands: t })=>t.insertContent({
                        type: this.name,
                        content: e ? [
                            {
                                type: "text",
                                text: e
                            }
                        ] : []
                    }),
            toggleMermaid: ()=>({ commands: e })=>e.toggleNode(this.name, "paragraph", {}),
            transformMermaidCodeBlocks: ()=>({ tr: e, state: t })=>{
                    const n = t.schema.nodes.mermaid;
                    if (!n) return !1;
                    let i = !1;
                    return t.doc.descendants((r, s)=>{
                        if (r.type.name === "codeBlock" && r.attrs.language === "mermaid") {
                            const o = n.create({}, r.content.size > 0 ? r.content : void 0);
                            e.replaceWith(s, s + r.nodeSize, o), i = !0;
                        }
                    }), i;
                }
        };
    },
    onCreate () {
        const { state: e } = this.editor, t = e.schema.nodes.mermaid, n = e.schema.nodes.codeBlock;
        if (!t || !n) return;
        const i = [];
        if (e.doc.descendants((s, o)=>{
            s.type === n && s.attrs.language === "mermaid" && i.push({
                pos: o,
                node: s
            });
        }), i.length === 0) return;
        const r = e.tr;
        for(let s = i.length - 1; s >= 0; s--){
            const { pos: o, node: a } = i[s], c = t.create({}, a.content.size > 0 ? a.content : void 0);
            r.replaceWith(o, o + a.nodeSize, c);
        }
        this.editor.view.dispatch(r);
    },
    addProseMirrorPlugins () {
        return [
            new rb({
                key: new cy("mermaidTransform"),
                appendTransaction (e, t, n) {
                    if (!e.some((c)=>c.docChanged)) return null;
                    const r = n.schema.nodes.mermaid, s = n.schema.nodes.codeBlock;
                    if (!r || !s) return null;
                    const o = [];
                    if (n.doc.descendants((c, l)=>{
                        c.type === s && c.attrs.language === "mermaid" && o.push({
                            pos: l,
                            node: c
                        });
                    }), o.length === 0) return null;
                    const a = n.tr;
                    for(let c = o.length - 1; c >= 0; c--){
                        const { pos: l, node: u } = o[c], h = r.create({}, u.content.size > 0 ? u.content : void 0);
                        a.replaceWith(l, l + u.nodeSize, h);
                    }
                    return a;
                }
            })
        ];
    }
});

}
