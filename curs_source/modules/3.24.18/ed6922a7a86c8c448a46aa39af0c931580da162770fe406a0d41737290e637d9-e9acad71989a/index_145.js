import { VTn, _jl } from "./jsx-runtime.js";
import { A_, BO, EBt, P0 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var bjl, yjl;
export { bjl, yjl };
var __wakaru_$Rf_initialized = false;
export function $Rf() {
if (__wakaru_$Rf_initialized) return;
__wakaru_$Rf_initialized = true;
x(), A_(), _jl(), bjl = /^\s*>\s$/, yjl = BO.create({
    name: "blockquote",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    group: "block",
    defining: !0,
    parseHTML () {
        return [
            {
                tag: "blockquote"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return VTn("blockquote", {
            ...P0(this.options.HTMLAttributes, e),
            children: VTn("slot", {})
        });
    },
    parseMarkdown: (e, t)=>t.createNode("blockquote", void 0, t.parseChildren(e.tokens || [])),
    renderMarkdown: (e, t)=>{
        if (!e.content) return "";
        const n = ">", i = [];
        return e.content.forEach((r)=>{
            const a = t.renderChildren([
                r
            ]).split(`
`).map((c)=>c.trim() === "" ? n : `${n} ${c}`);
            i.push(a.join(`
`));
        }), i.join(`
${n}
`);
    },
    addCommands () {
        return {
            setBlockquote: ()=>({ commands: e })=>e.wrapIn(this.name),
            toggleBlockquote: ()=>({ commands: e })=>e.toggleWrap(this.name),
            unsetBlockquote: ()=>({ commands: e })=>e.lift(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-b": ()=>this.editor.commands.toggleBlockquote()
        };
    },
    addInputRules () {
        return [
            EBt({
                find: bjl,
                type: this.type
            })
        ];
    }
});

}
