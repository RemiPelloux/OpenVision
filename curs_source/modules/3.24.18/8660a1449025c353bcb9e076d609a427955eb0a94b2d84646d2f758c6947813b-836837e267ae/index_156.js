import { Fy, fE, o6 } from "./LYd.js";
import { E } from "./tslib.es6.js";
var iJh;
export { iJh };
var __wakaru_s9S_initialized = false;
export function s9S() {
if (__wakaru_s9S_initialized) return;
__wakaru_s9S_initialized = true;
E(), Fy(), iJh = o6.create({
    name: "hardBreak",
    markdownTokenName: "br",
    addOptions () {
        return {
            keepMarks: !0,
            HTMLAttributes: {}
        };
    },
    inline: !0,
    group: "inline",
    selectable: !1,
    linebreakReplacement: !0,
    parseHTML () {
        return [
            {
                tag: "br"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "br",
            fE(this.options.HTMLAttributes, t)
        ];
    },
    renderText () {
        return `
`;
    },
    renderMarkdown: ()=>`  
`,
    parseMarkdown: ()=>({
            type: "hardBreak"
        }),
    addCommands () {
        return {
            setHardBreak: ()=>({ commands: t, chain: e, state: n, editor: i })=>t.first([
                        ()=>t.exitCode(),
                        ()=>t.command(()=>{
                                const { selection: r, storedMarks: s } = n;
                                if (r.$from.parent.type.spec.isolating) return !1;
                                const { keepMarks: o } = this.options, { splittableMarks: a } = i.extensionManager, l = s || r.$to.parentOffset && r.$from.marks();
                                return e().insertContent({
                                    type: this.name
                                }).command(({ tr: c, dispatch: u })=>{
                                    if (u && l && o) {
                                        const d = l.filter((h)=>a.includes(h.type.name));
                                        c.ensureMarks(d);
                                    }
                                    return !0;
                                }).run();
                            })
                    ])
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Enter": ()=>this.editor.commands.setHardBreak(),
            "Shift-Enter": ()=>this.editor.commands.setHardBreak()
        };
    }
});

}
