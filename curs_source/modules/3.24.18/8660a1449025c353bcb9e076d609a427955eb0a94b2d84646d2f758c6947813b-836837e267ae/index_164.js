import { ASt, Fy, fE } from "./LYd.js";
import { E } from "./tslib.es6.js";
var EJh;
export { EJh };
var __wakaru_m9S_initialized = false;
export function m9S() {
if (__wakaru_m9S_initialized) return;
__wakaru_m9S_initialized = true;
E(), Fy(), EJh = ASt.create({
    name: "underline",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "u"
            },
            {
                style: "text-decoration",
                consuming: !1,
                getAttrs: (t)=>t.includes("underline") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "u",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    parseMarkdown (t, e) {
        return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []));
    },
    renderMarkdown (t, e) {
        return `++${e.renderChildren(t)}++`;
    },
    markdownTokenizer: {
        name: "underline",
        level: "inline",
        start (t) {
            return t.indexOf("++");
        },
        tokenize (t, e, n) {
            const r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
            if (!r) return;
            const s = r[2].trim();
            return {
                type: "underline",
                raw: r[0],
                text: s,
                tokens: n.inlineTokens(s)
            };
        }
    },
    addCommands () {
        return {
            setUnderline: ()=>({ commands: t })=>t.setMark(this.name),
            toggleUnderline: ()=>({ commands: t })=>t.toggleMark(this.name),
            unsetUnderline: ()=>({ commands: t })=>t.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-u": ()=>this.editor.commands.toggleUnderline(),
            "Mod-U": ()=>this.editor.commands.toggleUnderline()
        };
    }
});

}
