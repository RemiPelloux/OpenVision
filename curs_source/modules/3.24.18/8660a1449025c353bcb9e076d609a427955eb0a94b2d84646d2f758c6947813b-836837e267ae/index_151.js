import { B_n, Fy, fE, o6 } from "./LYd.js";
import { HQh, Ogi } from "./jsx-runtime.js";
import { E } from "./tslib.es6.js";
var WQh, GQh;
export { GQh, WQh };
var __wakaru_e9S_initialized = false;
export function e9S() {
if (__wakaru_e9S_initialized) return;
__wakaru_e9S_initialized = true;
E(), Fy(), HQh(), WQh = /^\s*>\s$/, GQh = o6.create({
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
    renderHTML ({ HTMLAttributes: t }) {
        return Ogi("blockquote", {
            ...fE(this.options.HTMLAttributes, t),
            children: Ogi("slot", {})
        });
    },
    parseMarkdown: (t, e)=>e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
    renderMarkdown: (t, e)=>{
        if (!t.content) return "";
        const n = ">", i = [];
        return t.content.forEach((r)=>{
            const a = e.renderChildren([
                r
            ]).split(`
`).map((l)=>l.trim() === "" ? n : `${n} ${l}`);
            i.push(a.join(`
`));
        }), i.join(`
${n}
`);
    },
    addCommands () {
        return {
            setBlockquote: ()=>({ commands: t })=>t.wrapIn(this.name),
            toggleBlockquote: ()=>({ commands: t })=>t.toggleWrap(this.name),
            unsetBlockquote: ()=>({ commands: t })=>t.lift(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-b": ()=>this.editor.commands.toggleBlockquote()
        };
    },
    addInputRules () {
        return [
            B_n({
                find: WQh,
                type: this.type
            })
        ];
    }
});

}
