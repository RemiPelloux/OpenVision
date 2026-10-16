import { Fy, fE, o6 } from "./LYd.js";
import { E } from "./tslib.es6.js";
var M1a, yJh;
export { M1a, yJh };
var __wakaru_SJh_initialized = false;
export function SJh() {
if (__wakaru_SJh_initialized) return;
__wakaru_SJh_initialized = true;
E(), Fy(), M1a = o6.create({
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
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "p",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    parseMarkdown: (t, e)=>{
        const n = t.tokens || [];
        return n.length === 1 && n[0].type === "image" ? e.parseChildren([
            n[0]
        ]) : e.createNode("paragraph", void 0, e.parseInline(n));
    },
    renderMarkdown: (t, e)=>!t || !Array.isArray(t.content) ? "" : e.renderChildren(t.content),
    addCommands () {
        return {
            setParagraph: ()=>({ commands: t })=>t.setNode(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-0": ()=>this.editor.commands.setParagraph()
        };
    }
}), yJh = M1a;

}
