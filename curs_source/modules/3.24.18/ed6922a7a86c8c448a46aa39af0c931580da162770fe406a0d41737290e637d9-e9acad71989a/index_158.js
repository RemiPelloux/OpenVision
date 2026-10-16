import { A_, P0, iYe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var nql;
export { nql };
var __wakaru_eDf_initialized = false;
export function eDf() {
if (__wakaru_eDf_initialized) return;
__wakaru_eDf_initialized = true;
x(), A_(), nql = iYe.create({
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
                getAttrs: (e)=>e.includes("underline") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "u",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    parseMarkdown (e, t) {
        return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
    },
    renderMarkdown (e, t) {
        return `++${t.renderChildren(e)}++`;
    },
    markdownTokenizer: {
        name: "underline",
        level: "inline",
        start (e) {
            return e.indexOf("++");
        },
        tokenize (e, t, n) {
            const r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
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
            setUnderline: ()=>({ commands: e })=>e.setMark(this.name),
            toggleUnderline: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetUnderline: ()=>({ commands: e })=>e.unsetMark(this.name)
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
