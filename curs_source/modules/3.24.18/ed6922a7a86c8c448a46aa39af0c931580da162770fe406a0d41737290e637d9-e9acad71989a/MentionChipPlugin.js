import { iMf } from "./MentionChipNodeView.js";
import { JDf, S_t, XTn, aMf, cMf, lMf, oMf } from "./f0s.js";
import { Mql, jDf } from "./index_169.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { LAs, NAs, sTn } from "./mention-chip-dom.js";
import { FDe, hLi } from "./mention-chip-resolve.js";
import { KXe } from "./mention-chip-utils.js";
import { AW, A_, Lx, P0, cy, rb, y1, zS } from "./qIc.js";
import { lNi } from "./tiptap-storage.js";
import { x } from "./tslib.es6.js";
var iZe, Hql, dNi, HY, Wql, XRs;
export { HY, Hql, Wql, XRs, dNi, iZe };
var __wakaru_WDe_initialized = false;
export function WDe() {
if (__wakaru_WDe_initialized) return;
__wakaru_WDe_initialized = true;
"use strict";
x(), A_(), jDf(), M0(), iY(), NAs(), hLi(), KXe(), iMf(), lNi(), zS(), AW(), iZe = new cy("mentionChipFocus"), Hql = "mentionChipResolverUpdate", dNi = "@", HY = "mentionNode", Wql = "ui-prompt-input-mention-chip--selected", XRs = Mql.extend({
    name: HY,
    addStorage () {
        return {
            mentionChipResolve: FDe,
            onMentionChipAction: void 0,
            onMentionChipContextMenu: void 0,
            readOnlyMentionChrome: !1,
            hideRemoveButton: !1,
            mentionChipPresentation: void 0
        };
    },
    addCommands () {
        return {
            insertMention: (e)=>({ commands: t })=>{
                    const n = e.mentionTypeRaw ?? e.mentionType ?? "file", i = S_t(String(n)) ?? null;
                    return t.insertContent({
                        type: this.name,
                        attrs: {
                            ...e,
                            mentionTypeRaw: n,
                            mentionType: i
                        }
                    });
                }
        };
    },
    addNodeView () {
        return JDf(this.options.HTMLAttributes ?? {});
    },
    addProseMirrorPlugins () {
        return [
            ...this.parent?.() ?? [],
            new rb({
                key: iZe,
                state: {
                    init: ()=>!1,
                    apply (e, t) {
                        const n = e.getMeta(iZe);
                        return typeof n == "boolean" ? n : t;
                    }
                },
                props: {
                    handleDOMEvents: {
                        focus (e) {
                            return iZe.getState(e.state) !== !0 && e.dispatch(e.state.tr.setMeta(iZe, !0)), !1;
                        },
                        blur (e) {
                            return iZe.getState(e.state) !== !1 && e.dispatch(e.state.tr.setMeta(iZe, !1)), !1;
                        }
                    },
                    decorations: (e)=>{
                        const { doc: t, selection: n } = e, i = [], r = iZe.getState(e) === !0;
                        return t.descendants((s, o)=>{
                            s.type.name === this.name && r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(y1.node(o, o + s.nodeSize, {
                                class: Wql
                            }));
                        }), i.length === 0 ? null : Lx.create(t, i);
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
                parseHTML: (t)=>t.getAttribute("data-mention-uuid"),
                renderHTML: (t)=>t.uuid ? {
                        "data-mention-uuid": t.uuid
                    } : {}
            },
            rawText: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-mention-raw-text"),
                renderHTML: (t)=>t.rawText ? {
                        "data-mention-raw-text": t.rawText
                    } : {}
            },
            plainText: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-mention-plain-text"),
                renderHTML: (t)=>t.plainText ? {
                        "data-mention-plain-text": t.plainText
                    } : {}
            },
            chipIcon: {
                default: null,
                parseHTML: (t)=>cMf(t.getAttribute("data-mention-chip-icon-json")),
                renderHTML: (t)=>{
                    const n = lMf(t.chipIcon);
                    return n ? {
                        "data-mention-chip-icon-json": n
                    } : {};
                }
            },
            mentionTypeRaw: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-mention-type"),
                renderHTML: (t)=>{
                    const n = typeof t.mentionTypeRaw == "string" && t.mentionTypeRaw.length > 0 && t.mentionTypeRaw || t.mentionType;
                    return n ? {
                        "data-mention-type": String(n)
                    } : {};
                }
            },
            mentionType: {
                default: null,
                parseHTML: (t)=>S_t(t.getAttribute("data-mention-type")) ?? null,
                renderHTML: ()=>({})
            },
            secondaryText: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-mention-secondary-text"),
                renderHTML: (t)=>t.secondaryText ? {
                        "data-mention-secondary-text": t.secondaryText
                    } : {}
            },
            payload: {
                default: null,
                parseHTML: (t)=>oMf(t.getAttribute("data-mention-payload-json")),
                renderHTML: (t)=>{
                    const n = aMf(t.payload);
                    return n ? {
                        "data-mention-payload-json": n
                    } : {};
                }
            }
        };
    },
    renderText ({ node: e }) {
        const t = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : dNi;
        return XTn(e.attrs, t);
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        const n = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : dNi, i = XTn(e.attrs, n);
        return [
            "span",
            P0({
                "data-type": HY,
                class: sTn,
                ...LAs
            }, this.options.HTMLAttributes, t),
            i
        ];
    }
}).configure({
    deleteTriggerWithBackspace: !0,
    HTMLAttributes: {
        class: sTn
    }
});

}
