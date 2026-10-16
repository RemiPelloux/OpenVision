import { Aw, Fnh, Fy, fE, o6 } from "./LYd.js";
import { eep } from "./index_174.js";
import { $5e, UHe } from "./index_20.js";
import { gE } from "./index_23.js";
import { uAr } from "./index_29.js";
import { QJh, nep, tep } from "./ipa.js";
import { E } from "./tslib.es6.js";
var iep;
export { iep };
var __wakaru_nBS_initialized = false;
export function nBS() {
if (__wakaru_nBS_initialized) return;
__wakaru_nBS_initialized = true;
E(), Fy(), uAr(), eep(), gE(), Aw(), $5e(), iep = o6.create({
    name: "mention",
    priority: 101,
    addOptions () {
        return {
            HTMLAttributes: {},
            renderText ({ node: t, suggestion: e }) {
                var n, i;
                return `${(n = e?.char) != null ? n : "@"}${(i = t.attrs.label) != null ? i : t.attrs.id}`;
            },
            deleteTriggerWithBackspace: !1,
            renderHTML ({ options: t, node: e, suggestion: n }) {
                var i, r;
                return [
                    "span",
                    fE(this.HTMLAttributes, t.HTMLAttributes),
                    `${(i = n?.char) != null ? i : "@"}${(r = e.attrs.label) != null ? r : e.attrs.id}`
                ];
            },
            suggestions: [],
            suggestion: {}
        };
    },
    group: "inline",
    inline: !0,
    selectable: !1,
    atom: !0,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-id"),
                renderHTML: (t)=>t.id ? {
                        "data-id": t.id
                    } : {}
            },
            label: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-label"),
                renderHTML: (t)=>t.label ? {
                        "data-label": t.label
                    } : {}
            },
            mentionSuggestionChar: {
                default: "@",
                parseHTML: (t)=>t.getAttribute("data-mention-suggestion-char"),
                renderHTML: (t)=>({
                        "data-mention-suggestion-char": t.mentionSuggestionChar
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`
            }
        ];
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        const n = nep(this, t.attrs.mentionSuggestionChar);
        if (this.options.renderLabel !== void 0) return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
            "span",
            fE({
                "data-type": this.name
            }, this.options.HTMLAttributes, e),
            this.options.renderLabel({
                options: this.options,
                node: t,
                suggestion: n
            })
        ];
        const i = {
            ...this.options
        };
        i.HTMLAttributes = fE({
            "data-type": this.name
        }, this.options.HTMLAttributes, e);
        const r = this.options.renderHTML({
            options: i,
            node: t,
            suggestion: n
        });
        return typeof r == "string" ? [
            "span",
            fE({
                "data-type": this.name
            }, this.options.HTMLAttributes, e),
            r
        ] : r;
    },
    ...Fnh({
        nodeName: "mention",
        name: "@",
        selfClosing: !0,
        allowedAttributes: [
            "id",
            "label",
            {
                name: "mentionSuggestionChar",
                skipIfDefault: "@"
            }
        ],
        parseAttributes: (t)=>{
            const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
            let i = n.exec(t);
            for(; i !== null;){
                const [, r, s, o] = i, a = s ?? o;
                e[r === "char" ? "mentionSuggestionChar" : r] = a, i = n.exec(t);
            }
            return e;
        },
        serializeAttributes: (t)=>Object.entries(t).filter(([, e])=>e != null).map(([e, n])=>`${e === "mentionSuggestionChar" ? "char" : e}="${n}"`).join(" ")
    }),
    renderText ({ node: t }) {
        const e = {
            options: this.options,
            node: t,
            suggestion: nep(this, t.attrs.mentionSuggestionChar)
        };
        return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel(e)) : this.options.renderText(e);
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.command(({ tr: t, state: e })=>{
                    let n = !1;
                    const { selection: i } = e, { empty: r, anchor: s } = i;
                    if (!r) return !1;
                    let o = new UHe, a = 0;
                    return e.doc.nodesBetween(s - 1, s, (l, c)=>{
                        if (l.type.name === this.name) return n = !0, o = l, a = c, !1;
                    }), n && t.insertText(this.options.deleteTriggerWithBackspace ? "" : o.attrs.mentionSuggestionChar, a, a + o.nodeSize), n;
                })
        };
    },
    addProseMirrorPlugins () {
        return tep(this).map(QJh);
    }
});

}
