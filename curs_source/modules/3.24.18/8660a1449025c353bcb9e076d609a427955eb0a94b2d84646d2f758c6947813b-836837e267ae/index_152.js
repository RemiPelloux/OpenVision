import { ASt, F_n, Fy, R8t, fE } from "./LYd.js";
import { HQh, Ogi } from "./jsx-runtime.js";
import { E } from "./tslib.es6.js";
var qQh, zQh, VQh, KQh, YQh;
export { KQh, VQh, YQh, qQh, zQh };
var __wakaru_t9S_initialized = false;
export function t9S() {
if (__wakaru_t9S_initialized) return;
__wakaru_t9S_initialized = true;
E(), Fy(), HQh(), qQh = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, zQh = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, VQh = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, KQh = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, YQh = ASt.create({
    name: "bold",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "strong"
            },
            {
                tag: "b",
                getAttrs: (t)=>t.style.fontWeight !== "normal" && null
            },
            {
                style: "font-weight=400",
                clearMark: (t)=>t.type.name === this.name
            },
            {
                style: "font-weight",
                getAttrs: (t)=>/^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return Ogi("strong", {
            ...fE(this.options.HTMLAttributes, t),
            children: Ogi("slot", {})
        });
    },
    markdownTokenName: "strong",
    parseMarkdown: (t, e)=>e.applyMark("bold", e.parseInline(t.tokens || [])),
    renderMarkdown: (t, e)=>`**${e.renderChildren(t)}**`,
    addCommands () {
        return {
            setBold: ()=>({ commands: t })=>t.setMark(this.name),
            toggleBold: ()=>({ commands: t })=>t.toggleMark(this.name),
            unsetBold: ()=>({ commands: t })=>t.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-b": ()=>this.editor.commands.toggleBold(),
            "Mod-B": ()=>this.editor.commands.toggleBold()
        };
    },
    addInputRules () {
        return [
            F_n({
                find: qQh,
                type: this.type
            }),
            F_n({
                find: VQh,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            R8t({
                find: zQh,
                type: this.type
            }),
            R8t({
                find: KQh,
                type: this.type
            })
        ];
    }
});

}
