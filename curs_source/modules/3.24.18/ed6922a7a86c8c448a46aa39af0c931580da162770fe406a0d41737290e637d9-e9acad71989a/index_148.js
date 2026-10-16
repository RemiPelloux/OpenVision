import { M0 } from "./index_18.js";
import { A_, BO, If, P0, cy, rb, vus, xb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var XLi, Ajl, Rjl, Djl;
export { Ajl, Djl, Rjl, XLi };
var __wakaru_GRf_initialized = false;
export function GRf() {
if (__wakaru_GRf_initialized) return;
__wakaru_GRf_initialized = true;
x(), A_(), M0(), zS(), XLi = 4, Ajl = /^```([a-z]+)?[\s\n]$/, Rjl = /^~~~([a-z]+)?[\s\n]$/, Djl = BO.create({
    name: "codeBlock",
    addOptions () {
        return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            defaultLanguage: null,
            enableTabIndentation: !1,
            tabSize: XLi,
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
                parseHTML: (e)=>{
                    var t;
                    const { languageClassPrefix: n } = this.options;
                    if (!n) return null;
                    const s = [
                        ...((t = e.firstElementChild) == null ? void 0 : t.classList) || []
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
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "pre",
            P0(this.options.HTMLAttributes, t),
            [
                "code",
                {
                    class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
                },
                0
            ]
        ];
    },
    markdownTokenName: "code",
    parseMarkdown: (e, t)=>{
        var n;
        return ((n = e.raw) == null ? void 0 : n.startsWith("```")) === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode("codeBlock", {
            language: e.lang || null
        }, e.text ? [
            t.createTextNode(e.text)
        ] : []);
    },
    renderMarkdown: (e, t)=>{
        var n;
        let i = "";
        const r = ((n = e.attrs) == null ? void 0 : n.language) || "";
        return e.content ? i = [
            `\`\`\`${r}`,
            t.renderChildren(e.content),
            "```"
        ].join(`
`) : i = `\`\`\`${r}

\`\`\``, i;
    },
    addCommands () {
        return {
            setCodeBlock: (e)=>({ commands: t })=>t.setNode(this.name, e),
            toggleCodeBlock: (e)=>({ commands: t })=>t.toggleNode(this.name, "paragraph", e)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-c": ()=>this.editor.commands.toggleCodeBlock(),
            Backspace: ()=>{
                const { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
                return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
            },
            Tab: ({ editor: e })=>{
                var t;
                if (!this.options.enableTabIndentation) return !1;
                const n = (t = this.options.tabSize) != null ? t : XLi, { state: i } = e, { selection: r } = i, { $from: s, empty: o } = r;
                if (s.parent.type !== this.type) return !1;
                const a = " ".repeat(n);
                return o ? e.commands.insertContent(a) : e.commands.command(({ tr: c })=>{
                    const { from: l, to: u } = r, g = i.doc.textBetween(l, u, `
`, `
`).split(`
`).map((f)=>a + f).join(`
`);
                    return c.replaceWith(l, u, i.schema.text(g)), !0;
                });
            },
            "Shift-Tab": ({ editor: e })=>{
                var t;
                if (!this.options.enableTabIndentation) return !1;
                const n = (t = this.options.tabSize) != null ? t : XLi, { state: i } = e, { selection: r } = i, { $from: s, empty: o } = r;
                return s.parent.type !== this.type ? !1 : o ? e.commands.command(({ tr: a })=>{
                    var c;
                    const { pos: l } = s, u = s.start(), h = s.end(), g = i.doc.textBetween(u, h, `
`, `
`).split(`
`);
                    let f = 0, v = 0;
                    const b = l - u;
                    for(let D = 0; D < g.length; D += 1){
                        if (v + g[D].length >= b) {
                            f = D;
                            break;
                        }
                        v += g[D].length + 1;
                    }
                    const T = ((c = g[f].match(/^ */)) == null ? void 0 : c[0]) || "", E = Math.min(T.length, n);
                    if (E === 0) return !0;
                    let A = u;
                    for(let D = 0; D < f; D += 1)A += g[D].length + 1;
                    return a.delete(A, A + E), l - A <= E && a.setSelection(If.create(a.doc, A)), !0;
                }) : e.commands.command(({ tr: a })=>{
                    const { from: c, to: l } = r, p = i.doc.textBetween(c, l, `
`, `
`).split(`
`).map((g)=>{
                        var f;
                        const v = ((f = g.match(/^ */)) == null ? void 0 : f[0]) || "", b = Math.min(v.length, n);
                        return g.slice(b);
                    }).join(`
`);
                    return a.replaceWith(c, l, i.schema.text(p)), !0;
                });
            },
            Enter: ({ editor: e })=>{
                if (!this.options.exitOnTripleEnter) return !1;
                const { state: t } = e, { selection: n } = t, { $from: i, empty: r } = n;
                if (!r || i.parent.type !== this.type) return !1;
                const s = i.parentOffset === i.parent.nodeSize - 2, o = i.parent.textContent.endsWith(`

`);
                return !s || !o ? !1 : e.chain().command(({ tr: a })=>(a.delete(i.pos - 2, i.pos), !0)).exitCode().run();
            },
            ArrowDown: ({ editor: e })=>{
                if (!this.options.exitOnArrowDown) return !1;
                const { state: t } = e, { selection: n, doc: i } = t, { $from: r, empty: s } = n;
                if (!s || r.parent.type !== this.type || !(r.parentOffset === r.parent.nodeSize - 2)) return !1;
                const a = r.after();
                return a === void 0 ? !1 : i.nodeAt(a) ? e.commands.command(({ tr: l })=>(l.setSelection(xb.near(i.resolve(a))), !0)) : e.commands.exitCode();
            }
        };
    },
    addInputRules () {
        return [
            vus({
                find: Ajl,
                type: this.type,
                getAttributes: (e)=>({
                        language: e[1]
                    })
            }),
            vus({
                find: Rjl,
                type: this.type,
                getAttributes: (e)=>({
                        language: e[1]
                    })
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new rb({
                key: new cy("codeBlockVSCodeHandler"),
                props: {
                    handlePaste: (e, t)=>{
                        if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
                        const n = t.clipboardData.getData("text/plain"), i = t.clipboardData.getData("vscode-editor-data"), r = i ? JSON.parse(i) : void 0, s = r?.mode;
                        if (!n || !s) return !1;
                        const { tr: o, schema: a } = e.state, c = a.text(n.replace(/\r\n?/g, `
`));
                        return o.replaceSelectionWith(this.type.create({
                            language: s
                        }, c)), o.selection.$from.parent.type !== this.type && o.setSelection(If.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), e.dispatch(o), !0;
                    }
                }
            })
        ];
    }
});

}
