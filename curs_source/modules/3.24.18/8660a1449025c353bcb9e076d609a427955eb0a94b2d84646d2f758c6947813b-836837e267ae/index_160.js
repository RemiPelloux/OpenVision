import { Aih, B_n, Eih, Fy, Rw, SZo, Tz, fE, o6, xSt, xih, yZo } from "./LYd.js";
import { c9S, dJh, u9S } from "./ipa.js";
import { E } from "./tslib.es6.js";
var hJh, pJh, mJh, b1a, y1a, Fgi, u9r, gJh, z1n, d9r, S1a, k1a, w1a, h9r, C1a, T1a, p9r, fJh, E1a, I1a, vJh, _Jh, x1a, A1a, Bgi, bJh, R1a, P1a, d9S;
export { A1a, Bgi, C1a, E1a, Fgi, I1a, P1a, R1a, S1a, T1a, _Jh, b1a, bJh, d9S, d9r, fJh, gJh, h9r, hJh, k1a, mJh, p9r, pJh, u9r, vJh, w1a, x1a, y1a, z1n };
var __wakaru_m9r_initialized = false;
export function m9r() {
if (__wakaru_m9r_initialized) return;
__wakaru_m9r_initialized = true;
E(), Fy(), hJh = Object.defineProperty, pJh = (t, e)=>{
    for(var n in e)hJh(t, n, {
        get: e[n],
        enumerable: !0
    });
}, mJh = "listItem", b1a = "textStyle", y1a = /^\s*([-+*])\s$/, Fgi = o6.create({
    name: "bulletList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: "ul"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "ul",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (t, e)=>t.type !== "list" || t.ordered ? [] : {
            type: "bulletList",
            content: t.items ? e.parseChildren(t.items) : []
        },
    renderMarkdown: (t, e)=>t.content ? e.renderChildren(t.content, `
`) : "",
    markdownOptions: {
        indentsContent: !0
    },
    addCommands () {
        return {
            toggleBulletList: ()=>({ commands: t, chain: e })=>this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(mJh, this.editor.getAttributes(b1a)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-8": ()=>this.editor.commands.toggleBulletList()
        };
    },
    addInputRules () {
        let t = B_n({
            find: y1a,
            type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (t = B_n({
            find: y1a,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: ()=>this.editor.getAttributes(b1a),
            editor: this.editor
        })), [
            t
        ];
    }
}), u9r = o6.create({
    name: "listItem",
    addOptions () {
        return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
        };
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML () {
        return [
            {
                tag: "li"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "li",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    markdownTokenName: "list_item",
    parseMarkdown: (t, e)=>{
        if (t.type !== "list_item") return [];
        let n = [];
        if (t.tokens && t.tokens.length > 0) if (t.tokens.some((r)=>r.type === "paragraph")) n = e.parseChildren(t.tokens);
        else {
            const r = t.tokens[0];
            if (r && r.type === "text" && r.tokens && r.tokens.length > 0) {
                if (n = [
                    {
                        type: "paragraph",
                        content: e.parseInline(r.tokens)
                    }
                ], t.tokens.length > 1) {
                    const o = t.tokens.slice(1), a = e.parseChildren(o);
                    n.push(...a);
                }
            } else n = e.parseChildren(t.tokens);
        }
        return n.length === 0 && (n = [
            {
                type: "paragraph",
                content: []
            }
        ]), {
            type: "listItem",
            content: n
        };
    },
    renderMarkdown: (t, e, n)=>SZo(t, e, (i)=>i.parentType === "bulletList" ? "- " : i.parentType === "orderedList" ? `${i.index + 1}. ` : "- ", n),
    addKeyboardShortcuts () {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
    }
}), gJh = {}, pJh(gJh, {
    findListItemPos: ()=>z1n,
    getNextListDepth: ()=>d9r,
    handleBackspace: ()=>h9r,
    handleDelete: ()=>p9r,
    hasListBefore: ()=>S1a,
    hasListItemAfter: ()=>fJh,
    hasListItemBefore: ()=>k1a,
    listItemHasSubList: ()=>w1a,
    nextListIsDeeper: ()=>C1a,
    nextListIsHigher: ()=>T1a
}), z1n = (t, e)=>{
    const { $from: n } = e.selection, i = Tz(t, e.schema);
    let r = null, s = n.depth, o = n.pos, a = null;
    for(; s > 0 && a === null;)r = n.node(s), r.type === i ? a = s : (s -= 1, o -= 1);
    return a === null ? null : {
        $pos: e.doc.resolve(o),
        depth: a
    };
}, d9r = (t, e)=>{
    const n = z1n(t, e);
    if (!n) return !1;
    const [, i] = Eih(e, t, n.$pos.pos + 4);
    return i;
}, S1a = (t, e, n)=>{
    const { $anchor: i } = t.selection, r = Math.max(0, i.pos - 2), s = t.doc.resolve(r).node();
    return !(!s || !n.includes(s.type.name));
}, k1a = (t, e)=>{
    var n;
    const { $anchor: i } = e.selection, r = e.doc.resolve(i.pos - 2);
    return !(r.index() === 0 || ((n = r.nodeBefore) == null ? void 0 : n.type.name) !== t);
}, w1a = (t, e, n)=>{
    if (!n) return !1;
    const i = Tz(t, e.schema);
    let r = !1;
    return n.descendants((s)=>{
        s.type === i && (r = !0);
    }), r;
}, h9r = (t, e, n)=>{
    if (t.commands.undoInputRule()) return !0;
    if (t.state.selection.from !== t.state.selection.to) return !1;
    if (!xSt(t.state, e) && S1a(t.state, e, n)) {
        const { $anchor: a } = t.state.selection, l = t.state.doc.resolve(a.before() - 1), c = [];
        l.node().descendants((h, p)=>{
            h.type.name === e && c.push({
                node: h,
                pos: p
            });
        });
        const u = c.at(-1);
        if (!u) return !1;
        const d = t.state.doc.resolve(l.start() + u.pos + 1);
        return t.chain().cut({
            from: a.start() - 1,
            to: a.end() + 1
        }, d.end()).joinForward().run();
    }
    if (!xSt(t.state, e) || !Aih(t.state)) return !1;
    const i = z1n(e, t.state);
    if (!i) return !1;
    const s = t.state.doc.resolve(i.$pos.pos - 2).node(i.depth), o = w1a(e, t.state, s);
    return k1a(e, t.state) && !o ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, C1a = (t, e)=>{
    const n = d9r(t, e), i = z1n(t, e);
    return !i || !n ? !1 : n > i.depth;
}, T1a = (t, e)=>{
    const n = d9r(t, e), i = z1n(t, e);
    return !i || !n ? !1 : n < i.depth;
}, p9r = (t, e)=>{
    if (!xSt(t.state, e) || !xih(t.state, e)) return !1;
    const { selection: n } = t.state, { $from: i, $to: r } = n;
    return !n.empty && i.sameParent(r) ? !1 : C1a(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : T1a(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, fJh = (t, e)=>{
    var n;
    const { $anchor: i } = e.selection, r = e.doc.resolve(i.pos - i.parentOffset - 2);
    return !(r.index() === r.parent.childCount - 1 || ((n = r.nodeAfter) == null ? void 0 : n.type.name) !== t);
}, E1a = Rw.create({
    name: "listKeymap",
    addOptions () {
        return {
            listTypes: [
                {
                    itemName: "listItem",
                    wrapperNames: [
                        "bulletList",
                        "orderedList"
                    ]
                },
                {
                    itemName: "taskItem",
                    wrapperNames: [
                        "taskList"
                    ]
                }
            ]
        };
    },
    addKeyboardShortcuts () {
        return {
            Delete: ({ editor: t })=>{
                let e = !1;
                return this.options.listTypes.forEach(({ itemName: n })=>{
                    t.state.schema.nodes[n] !== void 0 && p9r(t, n) && (e = !0);
                }), e;
            },
            "Mod-Delete": ({ editor: t })=>{
                let e = !1;
                return this.options.listTypes.forEach(({ itemName: n })=>{
                    t.state.schema.nodes[n] !== void 0 && p9r(t, n) && (e = !0);
                }), e;
            },
            Backspace: ({ editor: t })=>{
                let e = !1;
                return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i })=>{
                    t.state.schema.nodes[n] !== void 0 && h9r(t, n, i) && (e = !0);
                }), e;
            },
            "Mod-Backspace": ({ editor: t })=>{
                let e = !1;
                return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i })=>{
                    t.state.schema.nodes[n] !== void 0 && h9r(t, n, i) && (e = !0);
                }), e;
            }
        };
    }
}), I1a = /^(\s*)(\d+)\.\s+(.*)$/, vJh = /^\s/, _Jh = "listItem", x1a = "textStyle", A1a = /^(\d+)\.\s$/, Bgi = o6.create({
    name: "orderedList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    addAttributes () {
        return {
            start: {
                default: 1,
                parseHTML: (t)=>t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
            },
            type: {
                default: null,
                parseHTML: (t)=>t.getAttribute("type")
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "ol"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        const { start: e, ...n } = t;
        return e === 1 ? [
            "ol",
            fE(this.options.HTMLAttributes, n),
            0
        ] : [
            "ol",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (t, e)=>{
        if (t.type !== "list" || !t.ordered) return [];
        const n = t.start || 1, i = t.items ? u9S(t.items, e) : [];
        return n !== 1 ? {
            type: "orderedList",
            attrs: {
                start: n
            },
            content: i
        } : {
            type: "orderedList",
            content: i
        };
    },
    renderMarkdown: (t, e)=>t.content ? e.renderChildren(t.content, `
`) : "",
    markdownTokenizer: {
        name: "orderedList",
        level: "block",
        start: (t)=>{
            const e = t.match(/^(\s*)(\d+)\.\s+/), n = e?.index;
            return n !== void 0 ? n : -1;
        },
        tokenize: (t, e, n)=>{
            var i;
            const r = t.split(`
`), [s, o] = c9S(r);
            if (s.length === 0) return;
            const a = dJh(s, 0, n);
            return a.length === 0 ? void 0 : {
                type: "list",
                ordered: !0,
                start: ((i = s[0]) == null ? void 0 : i.number) || 1,
                items: a,
                raw: r.slice(0, o).join(`
`)
            };
        }
    },
    markdownOptions: {
        indentsContent: !0
    },
    addCommands () {
        return {
            toggleOrderedList: ()=>({ commands: t, chain: e })=>this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(_Jh, this.editor.getAttributes(x1a)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-7": ()=>this.editor.commands.toggleOrderedList()
        };
    },
    addInputRules () {
        let t = B_n({
            find: A1a,
            type: this.type,
            getAttributes: (e)=>({
                    start: +e[1]
                }),
            joinPredicate: (e, n)=>n.childCount + n.attrs.start === +e[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (t = B_n({
            find: A1a,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: (e)=>({
                    start: +e[1],
                    ...this.editor.getAttributes(x1a)
                }),
            joinPredicate: (e, n)=>n.childCount + n.attrs.start === +e[1],
            editor: this.editor
        })), [
            t
        ];
    }
}), bJh = /^\s*(\[([( |x])?\])\s$/, R1a = o6.create({
    name: "taskItem",
    addOptions () {
        return {
            nested: !1,
            HTMLAttributes: {},
            taskListTypeName: "taskList",
            a11y: void 0
        };
    },
    content () {
        return this.options.nested ? "paragraph block*" : "paragraph+";
    },
    defining: !0,
    addAttributes () {
        return {
            checked: {
                default: !1,
                keepOnSplit: !1,
                parseHTML: (t)=>{
                    const e = t.getAttribute("data-checked");
                    return e === "" || e === "true";
                },
                renderHTML: (t)=>({
                        "data-checked": t.checked
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `li[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        return [
            "li",
            fE(this.options.HTMLAttributes, e, {
                "data-type": this.name
            }),
            [
                "label",
                [
                    "input",
                    {
                        type: "checkbox",
                        checked: t.attrs.checked ? "checked" : null
                    }
                ],
                [
                    "span"
                ]
            ],
            [
                "div",
                0
            ]
        ];
    },
    parseMarkdown: (t, e)=>{
        const n = [];
        if (t.tokens && t.tokens.length > 0 ? n.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? n.push(e.createNode("paragraph", {}, [
            e.createNode("text", {
                text: t.text
            })
        ])) : n.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
            const i = e.parseChildren(t.nestedTokens);
            n.push(...i);
        }
        return e.createNode("taskItem", {
            checked: t.checked || !1
        }, n);
    },
    renderMarkdown: (t, e)=>{
        var n;
        const r = `- [${(n = t.attrs) != null && n.checked ? "x" : " "}] `;
        return SZo(t, e, r);
    },
    addKeyboardShortcuts () {
        const t = {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
        return this.options.nested ? {
            ...t,
            Tab: ()=>this.editor.commands.sinkListItem(this.name)
        } : t;
    },
    addNodeView () {
        return ({ node: t, HTMLAttributes: e, getPos: n, editor: i })=>{
            const r = document.createElement("li"), s = document.createElement("label"), o = document.createElement("span"), a = document.createElement("input"), l = document.createElement("div"), c = (u)=>{
                var d, h;
                a.ariaLabel = ((h = (d = this.options.a11y) == null ? void 0 : d.checkboxLabel) == null ? void 0 : h.call(d, u, a.checked)) || `Task item checkbox for ${u.textContent || "empty task item"}`;
            };
            return c(t), s.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (u)=>u.preventDefault()), a.addEventListener("change", (u)=>{
                if (!i.isEditable && !this.options.onReadOnlyChecked) {
                    a.checked = !a.checked;
                    return;
                }
                const { checked: d } = u.target;
                i.isEditable && typeof n == "function" && i.chain().focus(void 0, {
                    scrollIntoView: !1
                }).command(({ tr: h })=>{
                    const p = n();
                    if (typeof p != "number") return !1;
                    const g = h.doc.nodeAt(p);
                    return h.setNodeMarkup(p, void 0, {
                        ...g?.attrs,
                        checked: d
                    }), !0;
                }).run(), !i.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, d) || (a.checked = !a.checked));
            }), Object.entries(this.options.HTMLAttributes).forEach(([u, d])=>{
                r.setAttribute(u, d);
            }), r.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, s.append(a, o), r.append(s, l), Object.entries(e).forEach(([u, d])=>{
                r.setAttribute(u, d);
            }), {
                dom: r,
                contentDOM: l,
                update: (u)=>u.type !== this.type ? !1 : (r.dataset.checked = u.attrs.checked, a.checked = u.attrs.checked, c(u), !0)
            };
        };
    },
    addInputRules () {
        return [
            B_n({
                find: bJh,
                type: this.type,
                getAttributes: (t)=>({
                        checked: t[t.length - 1] === "x"
                    })
            })
        ];
    }
}), P1a = o6.create({
    name: "taskList",
    addOptions () {
        return {
            itemTypeName: "taskItem",
            HTMLAttributes: {}
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: `ul[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "ul",
            fE(this.options.HTMLAttributes, t, {
                "data-type": this.name
            }),
            0
        ];
    },
    parseMarkdown: (t, e)=>e.createNode("taskList", {}, e.parseChildren(t.items || [])),
    renderMarkdown: (t, e)=>t.content ? e.renderChildren(t.content, `
`) : "",
    markdownTokenizer: {
        name: "taskList",
        level: "block",
        start (t) {
            var e;
            const n = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
            return n !== void 0 ? n : -1;
        },
        tokenize (t, e, n) {
            const i = (s)=>{
                const o = yZo(s, {
                    itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                    extractItemData: (a)=>({
                            indentLevel: a[1].length,
                            mainContent: a[4],
                            checked: a[3].toLowerCase() === "x"
                        }),
                    createToken: (a, l)=>({
                            type: "taskItem",
                            raw: "",
                            mainContent: a.mainContent,
                            indentLevel: a.indentLevel,
                            checked: a.checked,
                            text: a.mainContent,
                            tokens: n.inlineTokens(a.mainContent),
                            nestedTokens: l
                        }),
                    customNestedParser: i
                }, n);
                return o ? [
                    {
                        type: "taskList",
                        raw: o.raw,
                        items: o.items
                    }
                ] : n.blockTokens(s);
            }, r = yZo(t, {
                itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                extractItemData: (s)=>({
                        indentLevel: s[1].length,
                        mainContent: s[4],
                        checked: s[3].toLowerCase() === "x"
                    }),
                createToken: (s, o)=>({
                        type: "taskItem",
                        raw: "",
                        mainContent: s.mainContent,
                        indentLevel: s.indentLevel,
                        checked: s.checked,
                        text: s.mainContent,
                        tokens: n.inlineTokens(s.mainContent),
                        nestedTokens: o
                    }),
                customNestedParser: i
            }, n);
            if (r) return {
                type: "taskList",
                raw: r.raw,
                items: r.items
            };
        }
    },
    markdownOptions: {
        indentsContent: !0
    },
    addCommands () {
        return {
            toggleTaskList: ()=>({ commands: t })=>t.toggleList(this.name, this.options.itemTypeName)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-9": ()=>this.editor.commands.toggleTaskList()
        };
    }
}), d9S = Rw.create({
    name: "listKit",
    addExtensions () {
        const t = [];
        return this.options.bulletList !== !1 && t.push(Fgi.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(u9r.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(E1a.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(Bgi.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(R1a.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(P1a.configure(this.options.taskList)), t;
    }
});

}
