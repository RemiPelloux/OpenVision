import { VTn, _jl } from "./jsx-runtime.js";
import { A_, P0, TBt, iYe, vgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Sjl, kjl, wjl, Cjl, Tjl;
export { Cjl, Sjl, Tjl, kjl, wjl };
var __wakaru_HRf_initialized = false;
export function HRf() {
if (__wakaru_HRf_initialized) return;
__wakaru_HRf_initialized = true;
x(), A_(), _jl(), Sjl = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, kjl = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, wjl = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Cjl = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Tjl = iYe.create({
    name: "bold",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "strong"
            },
            {
                tag: "b",
                getAttrs: (e)=>e.style.fontWeight !== "normal" && null
            },
            {
                style: "font-weight=400",
                clearMark: (e)=>e.type.name === this.name
            },
            {
                style: "font-weight",
                getAttrs: (e)=>/^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return VTn("strong", {
            ...P0(this.options.HTMLAttributes, e),
            children: VTn("slot", {})
        });
    },
    markdownTokenName: "strong",
    parseMarkdown: (e, t)=>t.applyMark("bold", t.parseInline(e.tokens || [])),
    renderMarkdown: (e, t)=>`**${t.renderChildren(e)}**`,
    addCommands () {
        return {
            setBold: ()=>({ commands: e })=>e.setMark(this.name),
            toggleBold: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetBold: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-b": ()=>this.editor.commands.toggleBold(),
            "Mod-B": ()=>this.editor.commands.toggleBold()
        };
    },
    addInputRules () {
        return [
            TBt({
                find: Sjl,
                type: this.type
            }),
            TBt({
                find: wjl,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            vgt({
                find: kjl,
                type: this.type
            }),
            vgt({
                find: Cjl,
                type: this.type
            })
        ];
    }
});

}
