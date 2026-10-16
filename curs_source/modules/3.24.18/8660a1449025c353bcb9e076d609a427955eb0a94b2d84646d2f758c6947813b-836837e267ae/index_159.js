import { ASt, F_n, Fy, R8t, fE } from "./LYd.js";
import { E } from "./tslib.es6.js";
var oJh, aJh, lJh, cJh, uJh;
export { aJh, cJh, lJh, oJh, uJh };
var __wakaru_l9S_initialized = false;
export function l9S() {
if (__wakaru_l9S_initialized) return;
__wakaru_l9S_initialized = true;
E(), Fy(), oJh = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, aJh = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, lJh = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, cJh = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, uJh = ASt.create({
    name: "italic",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "em"
            },
            {
                tag: "i",
                getAttrs: (t)=>t.style.fontStyle !== "normal" && null
            },
            {
                style: "font-style=normal",
                clearMark: (t)=>t.type.name === this.name
            },
            {
                style: "font-style=italic"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "em",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    addCommands () {
        return {
            setItalic: ()=>({ commands: t })=>t.setMark(this.name),
            toggleItalic: ()=>({ commands: t })=>t.toggleMark(this.name),
            unsetItalic: ()=>({ commands: t })=>t.unsetMark(this.name)
        };
    },
    markdownTokenName: "em",
    parseMarkdown: (t, e)=>e.applyMark("italic", e.parseInline(t.tokens || [])),
    renderMarkdown: (t, e)=>`*${e.renderChildren(t)}*`,
    addKeyboardShortcuts () {
        return {
            "Mod-i": ()=>this.editor.commands.toggleItalic(),
            "Mod-I": ()=>this.editor.commands.toggleItalic()
        };
    },
    addInputRules () {
        return [
            F_n({
                find: oJh,
                type: this.type
            }),
            F_n({
                find: lJh,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            R8t({
                find: aJh,
                type: this.type
            }),
            R8t({
                find: cJh,
                type: this.type
            })
        ];
    }
});

}
