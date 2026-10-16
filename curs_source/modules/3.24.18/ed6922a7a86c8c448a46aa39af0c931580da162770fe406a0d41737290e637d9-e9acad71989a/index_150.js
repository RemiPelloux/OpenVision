import { A_, BO, P0 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Pjl;
export { Pjl };
var __wakaru_jRf_initialized = false;
export function jRf() {
if (__wakaru_jRf_initialized) return;
__wakaru_jRf_initialized = true;
x(), A_(), Pjl = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "br",
            P0(this.options.HTMLAttributes, e)
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
            setHardBreak: ()=>({ commands: e, chain: t, state: n, editor: i })=>e.first([
                        ()=>e.exitCode(),
                        ()=>e.command(()=>{
                                const { selection: r, storedMarks: s } = n;
                                if (r.$from.parent.type.spec.isolating) return !1;
                                const { keepMarks: o } = this.options, { splittableMarks: a } = i.extensionManager, c = s || r.$to.parentOffset && r.$from.marks();
                                return t().insertContent({
                                    type: this.name
                                }).command(({ tr: l, dispatch: u })=>{
                                    if (u && c && o) {
                                        const h = c.filter((p)=>a.includes(p.type.name));
                                        l.ensureMarks(h);
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
