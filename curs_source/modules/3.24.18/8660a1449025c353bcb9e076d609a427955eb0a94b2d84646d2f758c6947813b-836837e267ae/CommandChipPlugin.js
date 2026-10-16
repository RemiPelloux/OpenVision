import { J9S } from "./CommandChipNodeView.js";
import { Aw, Fy, HQ, MS, Rx, fE, gn, j1, o6, wP } from "./LYd.js";
import { lGe } from "./MentionChipPlugin.js";
import { _rt, jne } from "./command-chip-shared.js";
import { gE } from "./index_23.js";
import { bXo } from "./index_27.js";
import { yXo } from "./index_28.js";
import { Doe } from "./index_33.js";
import { j1a } from "./insertPlainTextIntoEditor.js";
import { L1n, Q9S, i1a } from "./ipa.js";
import { Qjt, eGe } from "./prompt-chip.stylex.js";
import { Va } from "./stylex.js";
import { k9r } from "./tiptap-storage.js";
import { E } from "./tslib.es6.js";
var Sep, Wkt, kep, wep, Ggi;
export { Ggi, Sep, Wkt, kep, wep };
var __wakaru_K1n_initialized = false;
export function K1n() {
if (__wakaru_K1n_initialized) return;
__wakaru_K1n_initialized = true;
"use strict";
E(), Va(), Fy(), yXo(), gE(), Doe(), Qjt(), j1a(), J9S(), _rt(), lGe(), k9r(), Aw(), HQ(), bXo(), Sep = "ui-prompt-input-command-chip--selected", Wkt = new j1("commandChipFocus"), kep = "Search or Paste Link", wep = new Set([
    "glass-action-add-plugin"
]), Ggi = o6.create({
    name: jne,
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
        return Q9S();
    },
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-command-id"),
                renderHTML: (t)=>({
                        "data-command-id": t.id
                    })
            },
            name: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-command-name"),
                renderHTML: (t)=>({
                        "data-command-name": t.name
                    })
            },
            content: {
                default: "",
                parseHTML: (t)=>t.getAttribute("data-command-content"),
                renderHTML: (t)=>({
                        "data-command-content": t.content
                    })
            },
            type: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-command-type"),
                renderHTML: (t)=>t.type ? {
                        "data-command-type": t.type
                    } : {}
            },
            slashSubject: {
                default: null,
                rendered: !1,
                parseHTML: ()=>null
            },
            description: {
                default: "",
                parseHTML: (t)=>t.getAttribute("data-command-description"),
                renderHTML: (t)=>t.description ? {
                        "data-command-description": t.description
                    } : {}
            },
            tooltipPath: {
                default: "",
                parseHTML: (t)=>t.getAttribute("data-command-tooltip-path"),
                renderHTML: (t)=>t.tooltipPath ? {
                        "data-command-tooltip-path": t.tooltipPath
                    } : {}
            },
            authorshipLabel: {
                default: "",
                parseHTML: (t)=>t.getAttribute("data-command-authorship-label"),
                renderHTML: (t)=>t.authorshipLabel ? {
                        "data-command-authorship-label": t.authorshipLabel
                    } : {}
            },
            sourceUri: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-command-source-uri"),
                renderHTML: (t)=>t.sourceUri ? {
                        "data-command-source-uri": t.sourceUri
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
    renderHTML ({ node: t, HTMLAttributes: e }) {
        return [
            "span",
            fE({
                "data-type": "command",
                class: "ui-prompt-input-command-chip"
            }, e),
            i1a(t.attrs)
        ];
    },
    renderText ({ node: t }) {
        return L1n(t.attrs.name ?? "");
    },
    addCommands () {
        return {
            insertCommand: (t)=>({ commands: e })=>e.insertContent({
                        type: this.name,
                        attrs: t
                    })
        };
    },
    addProseMirrorPlugins () {
        return [
            new MS({
                appendTransaction: (t, e, n)=>{
                    if (!t.some((s)=>s.docChanged)) return null;
                    const i = [];
                    if (n.doc.descendants((s, o)=>{
                        s.type.name === jne && s.childCount > 0 && i.push({
                            pos: o,
                            node: s
                        });
                    }), i.length === 0) return null;
                    const r = n.tr;
                    for (const { pos: s, node: o } of i.reverse())r.replaceWith(s, s + o.nodeSize, o.type.create(o.attrs));
                    return r;
                }
            }),
            new MS({
                key: Wkt,
                state: {
                    init: ()=>!1,
                    apply (t, e) {
                        const n = t.getMeta(Wkt);
                        return typeof n == "boolean" ? n : e;
                    }
                },
                props: {
                    handleDOMEvents: {
                        focus (t) {
                            return Wkt.getState(t.state) !== !0 && t.dispatch(t.state.tr.setMeta(Wkt, !0)), !1;
                        },
                        blur (t) {
                            return Wkt.getState(t.state) !== !1 && t.dispatch(t.state.tr.setMeta(Wkt, !1)), !1;
                        }
                    },
                    decorations: (t)=>{
                        const { doc: e, selection: n } = t, i = [], r = Wkt.getState(t) === !0;
                        return e.descendants((s, o)=>{
                            if (s.type.name !== this.name || (r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(Rx.node(o, o + s.nodeSize, {
                                class: Sep
                            })), !wep.has(String(s.attrs.id ?? "")))) return;
                            const a = o + s.nodeSize, l = e.textBetween(a, e.content.size, `
`, (d)=>d.type.name === jne ? L1n(d.attrs.name ?? "") : "");
                            if (l.trim().length > 0) return;
                            const c = l.match(/^\s*/)?.[0]?.length ?? 0, u = a + c;
                            i.push(Rx.widget(u, ()=>{
                                const d = document.createElement("span");
                                return d.className = [
                                    "ui-prompt-input-command-chip__search-placeholder",
                                    gn(eGe.searchPlaceholder).className
                                ].filter(Boolean).join(" "), d.textContent = kep, d.setAttribute("aria-hidden", "true"), d.contentEditable = "false", d;
                            }, {
                                side: 1,
                                ignoreSelection: !0
                            }));
                        }), i.length === 0 ? null : wP.create(e, i);
                    }
                }
            })
        ];
    }
});

}
