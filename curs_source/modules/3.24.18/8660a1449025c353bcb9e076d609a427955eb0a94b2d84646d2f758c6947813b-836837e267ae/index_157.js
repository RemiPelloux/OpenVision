import { Fy, fE, o6, vZo } from "./LYd.js";
import { E } from "./tslib.es6.js";
var rJh;
export { rJh };
var __wakaru_o9S_initialized = false;
export function o9S() {
if (__wakaru_o9S_initialized) return;
__wakaru_o9S_initialized = true;
E(), Fy(), rJh = o6.create({
    name: "heading",
    addOptions () {
        return {
            levels: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            HTMLAttributes: {}
        };
    },
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes () {
        return {
            level: {
                default: 1,
                rendered: !1
            }
        };
    },
    parseHTML () {
        return this.options.levels.map((t)=>({
                tag: `h${t}`,
                attrs: {
                    level: t
                }
            }));
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        return [
            `h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`,
            fE(this.options.HTMLAttributes, e),
            0
        ];
    },
    parseMarkdown: (t, e)=>e.createNode("heading", {
            level: t.depth || 1
        }, e.parseInline(t.tokens || [])),
    renderMarkdown: (t, e)=>{
        var n;
        const i = (n = t.attrs) != null && n.level ? parseInt(t.attrs.level, 10) : 1, r = "#".repeat(i);
        return t.content ? `${r} ${e.renderChildren(t.content)}` : "";
    },
    addCommands () {
        return {
            setHeading: (t)=>({ commands: e })=>this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
            toggleHeading: (t)=>({ commands: e })=>this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
        };
    },
    addKeyboardShortcuts () {
        return this.options.levels.reduce((t, e)=>({
                ...t,
                [`Mod-Alt-${e}`]: ()=>this.editor.commands.toggleHeading({
                        level: e
                    })
            }), {});
    },
    addInputRules () {
        return this.options.levels.map((t)=>vZo({
                find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
                type: this.type,
                getAttributes: {
                    level: t
                }
            }));
    }
});

}
