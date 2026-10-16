import { ASt, F_n, Fy, R8t, fE } from "./LYd.js";
import { E } from "./tslib.es6.js";
var kJh, wJh, CJh;
export { CJh, kJh, wJh };
var __wakaru_h9S_initialized = false;
export function h9S() {
if (__wakaru_h9S_initialized) return;
__wakaru_h9S_initialized = true;
E(), Fy(), kJh = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, wJh = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, CJh = ASt.create({
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
                getAttrs: (t)=>t.includes("line-through") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "s",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    markdownTokenName: "del",
    parseMarkdown: (t, e)=>e.applyMark("strike", e.parseInline(t.tokens || [])),
    renderMarkdown: (t, e)=>`~~${e.renderChildren(t)}~~`,
    addCommands () {
        return {
            setStrike: ()=>({ commands: t })=>t.setMark(this.name),
            toggleStrike: ()=>({ commands: t })=>t.toggleMark(this.name),
            unsetStrike: ()=>({ commands: t })=>t.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-s": ()=>this.editor.commands.toggleStrike()
        };
    },
    addInputRules () {
        return [
            F_n({
                find: kJh,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            R8t({
                find: wJh,
                type: this.type
            })
        ];
    }
});

}
