import { A_, P0, TBt, iYe, vgt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Qjl, Jjl, eql;
export { Jjl, Qjl, eql };
var __wakaru_QRf_initialized = false;
export function QRf() {
if (__wakaru_QRf_initialized) return;
__wakaru_QRf_initialized = true;
x(), A_(), Qjl = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Jjl = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, eql = iYe.create({
    name: "strike",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "s"
            },
            {
                tag: "del"
            },
            {
                tag: "strike"
            },
            {
                style: "text-decoration",
                consuming: !1,
                getAttrs: (e)=>e.includes("line-through") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "s",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    markdownTokenName: "del",
    parseMarkdown: (e, t)=>t.applyMark("strike", t.parseInline(e.tokens || [])),
    renderMarkdown: (e, t)=>`~~${t.renderChildren(e)}~~`,
    addCommands () {
        return {
            setStrike: ()=>({ commands: e })=>e.setMark(this.name),
            toggleStrike: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetStrike: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-s": ()=>this.editor.commands.toggleStrike()
        };
    },
    addInputRules () {
        return [
            TBt({
                find: Qjl,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            vgt({
                find: Jjl,
                type: this.type
            })
        ];
    }
});

}
