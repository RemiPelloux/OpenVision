import { Aw, Fy, HQ, MS, Rx, fE, j1, wP } from "./LYd.js";
import { pBS } from "./MentionChipNodeView.js";
import { iep, nBS } from "./index_175.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { Hgi, Pkt, _BS, bBS, cBS, fBS, vBS } from "./ipa.js";
import { Dkt, Kmi, Ymi } from "./mention-chip-dom.js";
import { S4r, _2e } from "./mention-chip-resolve.js";
import { Mkt } from "./mention-chip-utils.js";
import { k9r } from "./tiptap-storage.js";
import { E } from "./tslib.es6.js";
var Hkt, vep, w9r, pae, _ep, Wgi;
export { Hkt, Wgi, _ep, pae, vep, w9r };
var __wakaru_lGe_initialized = false;
export function lGe() {
if (__wakaru_lGe_initialized) return;
__wakaru_lGe_initialized = true;
"use strict";
E(), Fy(), nBS(), gE(), Doe(), Ymi(), S4r(), Mkt(), pBS(), k9r(), Aw(), HQ(), Hkt = new j1("mentionChipFocus"), vep = "mentionChipResolverUpdate", w9r = "@", pae = "mentionNode", _ep = "ui-prompt-input-mention-chip--selected", Wgi = iep.extend({
    name: pae,
    addStorage () {
        return {
            mentionChipResolve: _2e,
            onMentionChipAction: void 0,
            onMentionChipContextMenu: void 0,
            readOnlyMentionChrome: !1,
            hideRemoveButton: !1,
            mentionChipPresentation: void 0
        };
    },
    addCommands () {
        return {
            insertMention: (t)=>({ commands: e })=>{
                    const n = t.mentionTypeRaw ?? t.mentionType ?? "file", i = Pkt(String(n)) ?? null;
                    return e.insertContent({
                        type: this.name,
                        attrs: {
                            ...t,
                            mentionTypeRaw: n,
                            mentionType: i
                        }
                    });
                }
        };
    },
    addNodeView () {
        return cBS(this.options.HTMLAttributes ?? {});
    },
    addProseMirrorPlugins () {
        return [
            ...this.parent?.() ?? [],
            new MS({
                key: Hkt,
                state: {
                    init: ()=>!1,
                    apply (t, e) {
                        const n = t.getMeta(Hkt);
                        return typeof n == "boolean" ? n : e;
                    }
                },
                props: {
                    handleDOMEvents: {
                        focus (t) {
                            return Hkt.getState(t.state) !== !0 && t.dispatch(t.state.tr.setMeta(Hkt, !0)), !1;
                        },
                        blur (t) {
                            return Hkt.getState(t.state) !== !1 && t.dispatch(t.state.tr.setMeta(Hkt, !1)), !1;
                        }
                    },
                    decorations: (t)=>{
                        const { doc: e, selection: n } = t, i = [], r = Hkt.getState(t) === !0;
                        return e.descendants((s, o)=>{
                            s.type.name === this.name && r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(Rx.node(o, o + s.nodeSize, {
                                class: _ep
                            }));
                        }), i.length === 0 ? null : wP.create(e, i);
                    }
                }
            })
        ];
    },
    addAttributes () {
        return {
            ...this.parent?.() ?? {},
            uuid: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-mention-uuid"),
                renderHTML: (e)=>e.uuid ? {
                        "data-mention-uuid": e.uuid
                    } : {}
            },
            rawText: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-mention-raw-text"),
                renderHTML: (e)=>e.rawText ? {
                        "data-mention-raw-text": e.rawText
                    } : {}
            },
            plainText: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-mention-plain-text"),
                renderHTML: (e)=>e.plainText ? {
                        "data-mention-plain-text": e.plainText
                    } : {}
            },
            chipIcon: {
                default: null,
                parseHTML: (e)=>_BS(e.getAttribute("data-mention-chip-icon-json")),
                renderHTML: (e)=>{
                    const n = bBS(e.chipIcon);
                    return n ? {
                        "data-mention-chip-icon-json": n
                    } : {};
                }
            },
            mentionTypeRaw: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-mention-type"),
                renderHTML: (e)=>{
                    const n = typeof e.mentionTypeRaw == "string" && e.mentionTypeRaw.length > 0 && e.mentionTypeRaw || e.mentionType;
                    return n ? {
                        "data-mention-type": String(n)
                    } : {};
                }
            },
            mentionType: {
                default: null,
                parseHTML: (e)=>Pkt(e.getAttribute("data-mention-type")) ?? null,
                renderHTML: ()=>({})
            },
            secondaryText: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-mention-secondary-text"),
                renderHTML: (e)=>e.secondaryText ? {
                        "data-mention-secondary-text": e.secondaryText
                    } : {}
            },
            payload: {
                default: null,
                parseHTML: (e)=>fBS(e.getAttribute("data-mention-payload-json")),
                renderHTML: (e)=>{
                    const n = vBS(e.payload);
                    return n ? {
                        "data-mention-payload-json": n
                    } : {};
                }
            }
        };
    },
    renderText ({ node: t }) {
        const e = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : w9r;
        return Hgi(t.attrs, e);
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        const n = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : w9r, i = Hgi(t.attrs, n);
        return [
            "span",
            fE({
                "data-type": pae,
                class: Dkt,
                ...Kmi
            }, this.options.HTMLAttributes, e),
            i
        ];
    }
}).configure({
    deleteTriggerWithBackspace: !0,
    HTMLAttributes: {
        class: Dkt
    }
});

}
