import { ASt, F_n, Fy, R8t, fE } from "./LYd.js";
import { E } from "./tslib.es6.js";
var XQh, ZQh, QQh;
export { QQh, XQh, ZQh };
var __wakaru_n9S_initialized = false;
export function n9S() {
if (__wakaru_n9S_initialized) return;
__wakaru_n9S_initialized = true;
E(), Fy(), XQh = /(^|[^`])`([^`]+)`(?!`)$/, ZQh = /(^|[^`])`([^`]+)`(?!`)/g, QQh = ASt.create({
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
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "code",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    markdownTokenName: "codespan",
    parseMarkdown: (t, e)=>e.applyMark("code", [
            {
                type: "text",
                text: t.text || ""
            }
        ]),
    renderMarkdown: (t, e)=>t.content ? `\`${e.renderChildren(t.content)}\`` : "",
    addCommands () {
        return {
            setCode: ()=>({ commands: t })=>t.setMark(this.name),
            toggleCode: ()=>({ commands: t })=>t.toggleMark(this.name),
            unsetCode: ()=>({ commands: t })=>t.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-e": ()=>this.editor.commands.toggleCode()
        };
    },
    addInputRules () {
        return [
            F_n({
                find: XQh,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            R8t({
                find: ZQh,
                type: this.type
            })
        ];
    }
});

}
