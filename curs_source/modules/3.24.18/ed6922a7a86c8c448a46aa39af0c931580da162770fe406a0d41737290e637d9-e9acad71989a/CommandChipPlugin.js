import { WDf } from "./CommandChipNodeView.js";
import { WDe } from "./MentionChipPlugin.js";
import { JXe, mve } from "./command-chip-shared.js";
import { HDf, dRs, e4t } from "./f0s.js";
import { M0 } from "./index_18.js";
import { bls } from "./index_22.js";
import { yls } from "./index_23.js";
import { iY } from "./index_28.js";
import { ODe, X6t } from "./prompt-chip.stylex.js";
import { AW, A_, BO, Lx, Nn, P0, cy, rb, y1, zS } from "./qIc.js";
import { Oc } from "./stylex.js";
import { lNi } from "./tiptap-storage.js";
import { x } from "./tslib.es6.js";
var Vql, rZe, jql, qql, ZRs;
export { Vql, ZRs, jql, qql, rZe };
var __wakaru_m4t_initialized = false;
export function m4t() {
if (__wakaru_m4t_initialized) return;
__wakaru_m4t_initialized = true;
"use strict";
x(), Oc(), A_(), yls(), M0(), iY(), X6t(), WDf(), JXe(), WDe(), lNi(), zS(), AW(), bls(), Vql = "ui-prompt-input-command-chip--selected", rZe = new cy("commandChipFocus"), jql = "Search or Paste Link", qql = new Set([
    "glass-action-add-plugin"
]), ZRs = BO.create({
    name: mve,
    group: "inline",
    inline: !0,
    atom: !0,
    marks: "",
    selectable: !0,
    draggable: !1,
    addStorage () {
        return {
            onCommandChipClick: void 0
        };
    },
    addNodeView () {
        return HDf();
    },
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-command-id"),
                renderHTML: (e)=>({
                        "data-command-id": e.id
                    })
            },
            name: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-command-name"),
                renderHTML: (e)=>({
                        "data-command-name": e.name
                    })
            },
            content: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-command-content"),
                renderHTML: (e)=>({
                        "data-command-content": e.content
                    })
            },
            type: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-command-type"),
                renderHTML: (e)=>e.type ? {
                        "data-command-type": e.type
                    } : {}
            },
            slashSubject: {
                default: null,
                rendered: !1,
                parseHTML: ()=>null
            },
            description: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-command-description"),
                renderHTML: (e)=>e.description ? {
                        "data-command-description": e.description
                    } : {}
            },
            tooltipPath: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-command-tooltip-path"),
                renderHTML: (e)=>e.tooltipPath ? {
                        "data-command-tooltip-path": e.tooltipPath
                    } : {}
            },
            authorshipLabel: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-command-authorship-label"),
                renderHTML: (e)=>e.authorshipLabel ? {
                        "data-command-authorship-label": e.authorshipLabel
                    } : {}
            },
            sourceUri: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-command-source-uri"),
                renderHTML: (e)=>e.sourceUri ? {
                        "data-command-source-uri": e.sourceUri
                    } : {}
            },
            displayName: {
                default: null,
                rendered: !1,
                parseHTML: ()=>null
            },
            badgeAppearance: {
                default: null,
                rendered: !1,
                parseHTML: ()=>null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'span[data-type="command"]'
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "span",
            P0({
                "data-type": "command",
                class: "ui-prompt-input-command-chip"
            }, t),
            dRs(e.attrs)
        ];
    },
    renderText ({ node: e }) {
        return e4t(e.attrs.name ?? "");
    },
    addCommands () {
        return {
            insertCommand: (e)=>({ commands: t })=>t.insertContent({
                        type: this.name,
                        attrs: e
                    })
        };
    },
    addProseMirrorPlugins () {
        return [
            new rb({
                appendTransaction: (e, t, n)=>{
                    if (!e.some((s)=>s.docChanged)) return null;
                    const i = [];
                    if (n.doc.descendants((s, o)=>{
                        s.type.name === mve && s.childCount > 0 && i.push({
                            pos: o,
                            node: s
                        });
                    }), i.length === 0) return null;
                    const r = n.tr;
                    for (const { pos: s, node: o } of i.reverse())r.replaceWith(s, s + o.nodeSize, o.type.create(o.attrs));
                    return r;
                }
            }),
            new rb({
                key: rZe,
                state: {
                    init: ()=>!1,
                    apply (e, t) {
                        const n = e.getMeta(rZe);
                        return typeof n == "boolean" ? n : t;
                    }
                },
                props: {
                    handleDOMEvents: {
                        focus (e) {
                            return rZe.getState(e.state) !== !0 && e.dispatch(e.state.tr.setMeta(rZe, !0)), !1;
                        },
                        blur (e) {
                            return rZe.getState(e.state) !== !1 && e.dispatch(e.state.tr.setMeta(rZe, !1)), !1;
                        }
                    },
                    decorations: (e)=>{
                        const { doc: t, selection: n } = e, i = [], r = rZe.getState(e) === !0;
                        return t.descendants((s, o)=>{
                            if (s.type.name !== this.name || (r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(y1.node(o, o + s.nodeSize, {
                                class: Vql
                            })), !qql.has(String(s.attrs.id ?? "")))) return;
                            const a = o + s.nodeSize, c = t.textBetween(a, t.content.size, `
`, (h)=>h.type.name === mve ? e4t(h.attrs.name ?? "") : "");
                            if (c.trim().length > 0) return;
                            const l = c.match(/^\s*/)?.[0]?.length ?? 0, u = a + l;
                            i.push(y1.widget(u, ()=>{
                                const h = document.createElement("span");
                                return h.className = [
                                    "ui-prompt-input-command-chip__search-placeholder",
                                    Nn(ODe.searchPlaceholder).className
                                ].filter(Boolean).join(" "), h.textContent = jql, h.setAttribute("aria-hidden", "true"), h.contentEditable = "false", h;
                            }, {
                                side: 1,
                                ignoreSelection: !0
                            }));
                        }), i.length === 0 ? null : Lx.create(t, i);
                    }
                }
            })
        ];
    }
});

}
