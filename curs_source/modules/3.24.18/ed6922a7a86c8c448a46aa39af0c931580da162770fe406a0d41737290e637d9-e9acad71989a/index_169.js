import { Dql, Rql, xql } from "./f0s.js";
import { DRe, Zwe } from "./index_15.js";
import { Aql } from "./index_168.js";
import { M0 } from "./index_18.js";
import { uCi } from "./index_24.js";
import { A_, BO, P0, lel, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mql;
export { Mql };
var __wakaru_jDf_initialized = false;
export function jDf() {
if (__wakaru_jDf_initialized) return;
__wakaru_jDf_initialized = true;
x(), A_(), uCi(), Aql(), M0(), zS(), Zwe(), Mql = BO.create({
    name: "mention",
    priority: 101,
    addOptions () {
        return {
            HTMLAttributes: {},
            renderText ({ node: e, suggestion: t }) {
                var n, i;
                return `${(n = t?.char) != null ? n : "@"}${(i = e.attrs.label) != null ? i : e.attrs.id}`;
            },
            deleteTriggerWithBackspace: !1,
            renderHTML ({ options: e, node: t, suggestion: n }) {
                var i, r;
                return [
                    "span",
                    P0(this.HTMLAttributes, e.HTMLAttributes),
                    `${(i = n?.char) != null ? i : "@"}${(r = t.attrs.label) != null ? r : t.attrs.id}`
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
                parseHTML: (e)=>e.getAttribute("data-id"),
                renderHTML: (e)=>e.id ? {
                        "data-id": e.id
                    } : {}
            },
            label: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-label"),
                renderHTML: (e)=>e.label ? {
                        "data-label": e.label
                    } : {}
            },
            mentionSuggestionChar: {
                default: "@",
                parseHTML: (e)=>e.getAttribute("data-mention-suggestion-char"),
                renderHTML: (e)=>({
                        "data-mention-suggestion-char": e.mentionSuggestionChar
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
    renderHTML ({ node: e, HTMLAttributes: t }) {
        const n = Dql(this, e.attrs.mentionSuggestionChar);
        if (this.options.renderLabel !== void 0) return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
            "span",
            P0({
                "data-type": this.name
            }, this.options.HTMLAttributes, t),
            this.options.renderLabel({
                options: this.options,
                node: e,
                suggestion: n
            })
        ];
        const i = {
            ...this.options
        };
        i.HTMLAttributes = P0({
            "data-type": this.name
        }, this.options.HTMLAttributes, t);
        const r = this.options.renderHTML({
            options: i,
            node: e,
            suggestion: n
        });
        return typeof r == "string" ? [
            "span",
            P0({
                "data-type": this.name
            }, this.options.HTMLAttributes, t),
            r
        ] : r;
    },
    ...lel({
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
        parseAttributes: (e)=>{
            const t = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
            let i = n.exec(e);
            for(; i !== null;){
                const [, r, s, o] = i, a = s ?? o;
                t[r === "char" ? "mentionSuggestionChar" : r] = a, i = n.exec(e);
            }
            return t;
        },
        serializeAttributes: (e)=>Object.entries(e).filter(([, t])=>t != null).map(([t, n])=>`${t === "mentionSuggestionChar" ? "char" : t}="${n}"`).join(" ")
    }),
    renderText ({ node: e }) {
        const t = {
            options: this.options,
            node: e,
            suggestion: Dql(this, e.attrs.mentionSuggestionChar)
        };
        return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel(t)) : this.options.renderText(t);
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.command(({ tr: e, state: t })=>{
                    let n = !1;
                    const { selection: i } = t, { empty: r, anchor: s } = i;
                    if (!r) return !1;
                    let o = new DRe, a = 0;
                    return t.doc.nodesBetween(s - 1, s, (c, l)=>{
                        if (c.type.name === this.name) return n = !0, o = c, a = l, !1;
                    }), n && e.insertText(this.options.deleteTriggerWithBackspace ? "" : o.attrs.mentionSuggestionChar, a, a + o.nodeSize), n;
                })
        };
    },
    addProseMirrorPlugins () {
        return Rql(this).map(xql);
    }
});

}
