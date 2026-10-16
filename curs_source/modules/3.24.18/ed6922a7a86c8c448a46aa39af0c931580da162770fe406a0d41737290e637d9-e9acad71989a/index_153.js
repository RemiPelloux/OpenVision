import { A_, P0, TBt, iYe, vgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ojl, Fjl, Bjl, Ujl, $jl;
export { $jl, Bjl, Fjl, Ojl, Ujl };
var __wakaru_KRf_initialized = false;
export function KRf() {
if (__wakaru_KRf_initialized) return;
__wakaru_KRf_initialized = true;
x(), A_(), Ojl = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Fjl = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Bjl = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Ujl = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, $jl = iYe.create({
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
                getAttrs: (e)=>e.style.fontStyle !== "normal" && null
            },
            {
                style: "font-style=normal",
                clearMark: (e)=>e.type.name === this.name
            },
            {
                style: "font-style=italic"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "em",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setItalic: ()=>({ commands: e })=>e.setMark(this.name),
            toggleItalic: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetItalic: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    markdownTokenName: "em",
    parseMarkdown: (e, t)=>t.applyMark("italic", t.parseInline(e.tokens || [])),
    renderMarkdown: (e, t)=>`*${t.renderChildren(e)}*`,
    addKeyboardShortcuts () {
        return {
            "Mod-i": ()=>this.editor.commands.toggleItalic(),
            "Mod-I": ()=>this.editor.commands.toggleItalic()
        };
    },
    addInputRules () {
        return [
            TBt({
                find: Ojl,
                type: this.type
            }),
            TBt({
                find: Bjl,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            vgt({
                find: Fjl,
                type: this.type
            }),
            vgt({
                find: Ujl,
                type: this.type
            })
        ];
    }
});

}
