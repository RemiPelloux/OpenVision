import { Aw, Fy, MS, Q_, U1, fE, j1, o6, vZo } from "./LYd.js";
import { gE } from "./index_23.js";
import { E } from "./tslib.es6.js";
var c9r, JQh, eJh, tJh;
export { JQh, c9r, eJh, tJh };
var __wakaru_i9S_initialized = false;
export function i9S() {
if (__wakaru_i9S_initialized) return;
__wakaru_i9S_initialized = true;
E(), Fy(), gE(), Aw(), c9r = 4, JQh = /^```([a-z]+)?[\s\n]$/, eJh = /^~~~([a-z]+)?[\s\n]$/, tJh = o6.create({
    name: "codeBlock",
    addOptions () {
        return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            defaultLanguage: null,
            enableTabIndentation: !1,
            tabSize: c9r,
            HTMLAttributes: {}
        };
    },
    content: "text*",
    marks: "",
    group: "block",
    code: !0,
    defining: !0,
    addAttributes () {
        return {
            language: {
                default: this.options.defaultLanguage,
                parseHTML: (t)=>{
                    var e;
                    const { languageClassPrefix: n } = this.options;
                    if (!n) return null;
                    const s = [
                        ...((e = t.firstElementChild) == null ? void 0 : e.classList) || []
                    ].filter((o)=>o.startsWith(n)).map((o)=>o.replace(n, ""))[0];
                    return s || null;
                },
                rendered: !1
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "pre",
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        return [
            "pre",
            fE(this.options.HTMLAttributes, e),
            [
                "code",
                {
                    class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
                },
                0
            ]
        ];
    },
    markdownTokenName: "code",
    parseMarkdown: (t, e)=>{
        var n;
        return ((n = t.raw) == null ? void 0 : n.startsWith("```")) === !1 && t.codeBlockStyle !== "indented" ? [] : e.createNode("codeBlock", {
            language: t.lang || null
        }, t.text ? [
            e.createTextNode(t.text)
        ] : []);
    },
    renderMarkdown: (t, e)=>{
        var n;
        let i = "";
        const r = ((n = t.attrs) == null ? void 0 : n.language) || "";
        return t.content ? i = [
            `\`\`\`${r}`,
            e.renderChildren(t.content),
            "```"
        ].join(`
`) : i = `\`\`\`${r}

\`\`\``, i;
    },
    addCommands () {
        return {
            setCodeBlock: (t)=>({ commands: e })=>e.setNode(this.name, t),
            toggleCodeBlock: (t)=>({ commands: e })=>e.toggleNode(this.name, "paragraph", t)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-c": ()=>this.editor.commands.toggleCodeBlock(),
            Backspace: ()=>{
                const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
                return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
            },
            Tab: ({ editor: t })=>{
                var e;
                if (!this.options.enableTabIndentation) return !1;
                const n = (e = this.options.tabSize) != null ? e : c9r, { state: i } = t, { selection: r } = i, { $from: s, empty: o } = r;
                if (s.parent.type !== this.type) return !1;
                const a = " ".repeat(n);
                return o ? t.commands.insertContent(a) : t.commands.command(({ tr: l })=>{
                    const { from: c, to: u } = r, p = i.doc.textBetween(c, u, `
`, `
`).split(`
`).map((g)=>a + g).join(`
`);
                    return l.replaceWith(c, u, i.schema.text(p)), !0;
                });
            },
            "Shift-Tab": ({ editor: t })=>{
                var e;
                if (!this.options.enableTabIndentation) return !1;
                const n = (e = this.options.tabSize) != null ? e : c9r, { state: i } = t, { selection: r } = i, { $from: s, empty: o } = r;
                return s.parent.type !== this.type ? !1 : o ? t.commands.command(({ tr: a })=>{
                    var l;
                    const { pos: c } = s, u = s.start(), d = s.end(), p = i.doc.textBetween(u, d, `
`, `
`).split(`
`);
                    let g = 0, f = 0;
                    const _ = c - u;
                    for(let T = 0; T < p.length; T += 1){
                        if (f + p[T].length >= _) {
                            g = T;
                            break;
                        }
                        f += p[T].length + 1;
                    }
                    const y = ((l = p[g].match(/^ */)) == null ? void 0 : l[0]) || "", S = Math.min(y.length, n);
                    if (S === 0) return !0;
                    let k = u;
                    for(let T = 0; T < g; T += 1)k += p[T].length + 1;
                    return a.delete(k, k + S), c - k <= S && a.setSelection(Q_.create(a.doc, k)), !0;
                }) : t.commands.command(({ tr: a })=>{
                    const { from: l, to: c } = r, h = i.doc.textBetween(l, c, `
`, `
`).split(`
`).map((p)=>{
                        var g;
                        const f = ((g = p.match(/^ */)) == null ? void 0 : g[0]) || "", _ = Math.min(f.length, n);
                        return p.slice(_);
                    }).join(`
`);
                    return a.replaceWith(l, c, i.schema.text(h)), !0;
                });
            },
            Enter: ({ editor: t })=>{
                if (!this.options.exitOnTripleEnter) return !1;
                const { state: e } = t, { selection: n } = e, { $from: i, empty: r } = n;
                if (!r || i.parent.type !== this.type) return !1;
                const s = i.parentOffset === i.parent.nodeSize - 2, o = i.parent.textContent.endsWith(`

`);
                return !s || !o ? !1 : t.chain().command(({ tr: a })=>(a.delete(i.pos - 2, i.pos), !0)).exitCode().run();
            },
            ArrowDown: ({ editor: t })=>{
                if (!this.options.exitOnArrowDown) return !1;
                const { state: e } = t, { selection: n, doc: i } = e, { $from: r, empty: s } = n;
                if (!s || r.parent.type !== this.type || !(r.parentOffset === r.parent.nodeSize - 2)) return !1;
                const a = r.after();
                return a === void 0 ? !1 : i.nodeAt(a) ? t.commands.command(({ tr: c })=>(c.setSelection(U1.near(i.resolve(a))), !0)) : t.commands.exitCode();
            }
        };
    },
    addInputRules () {
        return [
            vZo({
                find: JQh,
                type: this.type,
                getAttributes: (t)=>({
                        language: t[1]
                    })
            }),
            vZo({
                find: eJh,
                type: this.type,
                getAttributes: (t)=>({
                        language: t[1]
                    })
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new MS({
                key: new j1("codeBlockVSCodeHandler"),
                props: {
                    handlePaste: (t, e)=>{
                        if (!e.clipboardData || this.editor.isActive(this.type.name)) return !1;
                        const n = e.clipboardData.getData("text/plain"), i = e.clipboardData.getData("vscode-editor-data"), r = i ? JSON.parse(i) : void 0, s = r?.mode;
                        if (!n || !s) return !1;
                        const { tr: o, schema: a } = t.state, l = a.text(n.replace(/\r\n?/g, `
`));
                        return o.replaceSelectionWith(this.type.create({
                            language: s
                        }, l)), o.selection.$from.parent.type !== this.type && o.setSelection(Q_.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), t.dispatch(o), !0;
                    }
                }
            })
        ];
    }
});

}
