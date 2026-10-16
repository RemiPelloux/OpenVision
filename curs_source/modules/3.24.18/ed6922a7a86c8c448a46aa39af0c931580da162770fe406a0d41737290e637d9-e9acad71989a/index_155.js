import { A_, BO, P0 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var $Rs, Xjl;
export { $Rs, Xjl };
var __wakaru_Zjl_initialized = false;
export function Zjl() {
if (__wakaru_Zjl_initialized) return;
__wakaru_Zjl_initialized = true;
x(), A_(), $Rs = BO.create({
    name: "paragraph",
    priority: 1e3,
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    group: "block",
    content: "inline*",
    parseHTML () {
        return [
            {
                tag: "p"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "p",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    parseMarkdown: (e, t)=>{
        const n = e.tokens || [];
        return n.length === 1 && n[0].type === "image" ? t.parseChildren([
            n[0]
        ]) : t.createNode("paragraph", void 0, t.parseInline(n));
    },
    renderMarkdown: (e, t)=>!e || !Array.isArray(e.content) ? "" : t.renderChildren(e.content),
    addCommands () {
        return {
            setParagraph: ()=>({ commands: e })=>e.setNode(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-0": ()=>this.editor.commands.setParagraph()
        };
    }
}), Xjl = $Rs;

}
