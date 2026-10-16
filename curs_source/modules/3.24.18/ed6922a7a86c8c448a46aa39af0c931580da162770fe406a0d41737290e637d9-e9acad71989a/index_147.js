import { A_, P0, TBt, iYe, vgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ejl, xjl, Ijl;
export { Ejl, Ijl, xjl };
var __wakaru_WRf_initialized = false;
export function WRf() {
if (__wakaru_WRf_initialized) return;
__wakaru_WRf_initialized = true;
x(), A_(), Ejl = /(^|[^`])`([^`]+)`(?!`)$/, xjl = /(^|[^`])`([^`]+)`(?!`)/g, Ijl = iYe.create({
    name: "code",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    excludes: "_",
    code: !0,
    exitable: !0,
    parseHTML () {
        return [
            {
                tag: "code"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "code",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    markdownTokenName: "codespan",
    parseMarkdown: (e, t)=>t.applyMark("code", [
            {
                type: "text",
                text: e.text || ""
            }
        ]),
    renderMarkdown: (e, t)=>e.content ? `\`${t.renderChildren(e.content)}\`` : "",
    addCommands () {
        return {
            setCode: ()=>({ commands: e })=>e.setMark(this.name),
            toggleCode: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetCode: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-e": ()=>this.editor.commands.toggleCode()
        };
    },
    addInputRules () {
        return [
            TBt({
                find: Ejl,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            vgt({
                find: xjl,
                type: this.type
            })
        ];
    }
});

}
