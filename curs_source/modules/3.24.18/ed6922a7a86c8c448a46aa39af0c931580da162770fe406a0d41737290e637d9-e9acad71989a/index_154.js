import { Hjl, XRf, YRf } from "./f0s.js";
import { A_, BO, EBt, P0, Qel, SU, Sus, bS, etl, nYe, ttl, yus } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Wjl, Gjl, Vjl, xRs, IRs, jTn, ZLi, jjl, d4t, QLi, ARs, RRs, DRs, JLi, MRs, PRs, eNi, qjl, LRs, NRs, zjl, Kjl, ORs, FRs, qTn, Yjl, BRs, URs, ZRf;
export { ARs, BRs, DRs, FRs, Gjl, IRs, JLi, Kjl, LRs, MRs, NRs, ORs, PRs, QLi, RRs, URs, Vjl, Wjl, Yjl, ZLi, ZRf, d4t, eNi, jTn, jjl, qTn, qjl, xRs, zjl };
var __wakaru_tNi_initialized = false;
export function tNi() {
if (__wakaru_tNi_initialized) return;
__wakaru_tNi_initialized = true;
x(), A_(), Wjl = Object.defineProperty, Gjl = (e, t)=>{
    for(var n in t)Wjl(e, n, {
        get: t[n],
        enumerable: !0
    });
}, Vjl = "listItem", xRs = "textStyle", IRs = /^\s*([-+*])\s$/, jTn = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "ul",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (e, t)=>e.type !== "list" || e.ordered ? [] : {
            type: "bulletList",
            content: e.items ? t.parseChildren(e.items) : []
        },
    renderMarkdown: (e, t)=>e.content ? t.renderChildren(e.content, `
`) : "",
    markdownOptions: {
        indentsContent: !0
    },
    addCommands () {
        return {
            toggleBulletList: ()=>({ commands: e, chain: t })=>this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Vjl, this.editor.getAttributes(xRs)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-8": ()=>this.editor.commands.toggleBulletList()
        };
    },
    addInputRules () {
        let e = EBt({
            find: IRs,
            type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = EBt({
            find: IRs,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: ()=>this.editor.getAttributes(xRs),
            editor: this.editor
        })), [
            e
        ];
    }
}), ZLi = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "li",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    markdownTokenName: "list_item",
    parseMarkdown: (e, t)=>{
        if (e.type !== "list_item") return [];
        let n = [];
        if (e.tokens && e.tokens.length > 0) if (e.tokens.some((r)=>r.type === "paragraph")) n = t.parseChildren(e.tokens);
        else {
            const r = e.tokens[0];
            if (r && r.type === "text" && r.tokens && r.tokens.length > 0) {
                if (n = [
                    {
                        type: "paragraph",
                        content: t.parseInline(r.tokens)
                    }
                ], e.tokens.length > 1) {
                    const o = e.tokens.slice(1), a = t.parseChildren(o);
                    n.push(...a);
                }
            } else n = t.parseChildren(e.tokens);
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
    renderMarkdown: (e, t, n)=>Sus(e, t, (i)=>i.parentType === "bulletList" ? "- " : i.parentType === "orderedList" ? `${i.index + 1}. ` : "- ", n),
    addKeyboardShortcuts () {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
    }
}), jjl = {}, Gjl(jjl, {
    findListItemPos: ()=>d4t,
    getNextListDepth: ()=>QLi,
    handleBackspace: ()=>JLi,
    handleDelete: ()=>eNi,
    hasListBefore: ()=>ARs,
    hasListItemAfter: ()=>qjl,
    hasListItemBefore: ()=>RRs,
    listItemHasSubList: ()=>DRs,
    nextListIsDeeper: ()=>MRs,
    nextListIsHigher: ()=>PRs
}), d4t = (e, t)=>{
    const { $from: n } = t.selection, i = SU(e, t.schema);
    let r = null, s = n.depth, o = n.pos, a = null;
    for(; s > 0 && a === null;)r = n.node(s), r.type === i ? a = s : (s -= 1, o -= 1);
    return a === null ? null : {
        $pos: t.doc.resolve(o),
        depth: a
    };
}, QLi = (e, t)=>{
    const n = d4t(e, t);
    if (!n) return !1;
    const [, i] = Qel(t, e, n.$pos.pos + 4);
    return i;
}, ARs = (e, t, n)=>{
    const { $anchor: i } = e.selection, r = Math.max(0, i.pos - 2), s = e.doc.resolve(r).node();
    return !(!s || !n.includes(s.type.name));
}, RRs = (e, t)=>{
    var n;
    const { $anchor: i } = t.selection, r = t.doc.resolve(i.pos - 2);
    return !(r.index() === 0 || ((n = r.nodeBefore) == null ? void 0 : n.type.name) !== e);
}, DRs = (e, t, n)=>{
    if (!n) return !1;
    const i = SU(e, t.schema);
    let r = !1;
    return n.descendants((s)=>{
        s.type === i && (r = !0);
    }), r;
}, JLi = (e, t, n)=>{
    if (e.commands.undoInputRule()) return !0;
    if (e.state.selection.from !== e.state.selection.to) return !1;
    if (!nYe(e.state, t) && ARs(e.state, t, n)) {
        const { $anchor: a } = e.state.selection, c = e.state.doc.resolve(a.before() - 1), l = [];
        c.node().descendants((p, g)=>{
            p.type.name === t && l.push({
                node: p,
                pos: g
            });
        });
        const u = l.at(-1);
        if (!u) return !1;
        const h = e.state.doc.resolve(c.start() + u.pos + 1);
        return e.chain().cut({
            from: a.start() - 1,
            to: a.end() + 1
        }, h.end()).joinForward().run();
    }
    if (!nYe(e.state, t) || !ttl(e.state)) return !1;
    const i = d4t(t, e.state);
    if (!i) return !1;
    const s = e.state.doc.resolve(i.$pos.pos - 2).node(i.depth), o = DRs(t, e.state, s);
    return RRs(t, e.state) && !o ? e.commands.joinItemBackward() : e.chain().liftListItem(t).run();
}, MRs = (e, t)=>{
    const n = QLi(e, t), i = d4t(e, t);
    return !i || !n ? !1 : n > i.depth;
}, PRs = (e, t)=>{
    const n = QLi(e, t), i = d4t(e, t);
    return !i || !n ? !1 : n < i.depth;
}, eNi = (e, t)=>{
    if (!nYe(e.state, t) || !etl(e.state, t)) return !1;
    const { selection: n } = e.state, { $from: i, $to: r } = n;
    return !n.empty && i.sameParent(r) ? !1 : MRs(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : PRs(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, qjl = (e, t)=>{
    var n;
    const { $anchor: i } = t.selection, r = t.doc.resolve(i.pos - i.parentOffset - 2);
    return !(r.index() === r.parent.childCount - 1 || ((n = r.nodeAfter) == null ? void 0 : n.type.name) !== e);
}, LRs = bS.create({
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
            Delete: ({ editor: e })=>{
                let t = !1;
                return this.options.listTypes.forEach(({ itemName: n })=>{
                    e.state.schema.nodes[n] !== void 0 && eNi(e, n) && (t = !0);
                }), t;
            },
            "Mod-Delete": ({ editor: e })=>{
                let t = !1;
                return this.options.listTypes.forEach(({ itemName: n })=>{
                    e.state.schema.nodes[n] !== void 0 && eNi(e, n) && (t = !0);
                }), t;
            },
            Backspace: ({ editor: e })=>{
                let t = !1;
                return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i })=>{
                    e.state.schema.nodes[n] !== void 0 && JLi(e, n, i) && (t = !0);
                }), t;
            },
            "Mod-Backspace": ({ editor: e })=>{
                let t = !1;
                return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i })=>{
                    e.state.schema.nodes[n] !== void 0 && JLi(e, n, i) && (t = !0);
                }), t;
            }
        };
    }
}), NRs = /^(\s*)(\d+)\.\s+(.*)$/, zjl = /^\s/, Kjl = "listItem", ORs = "textStyle", FRs = /^(\d+)\.\s$/, qTn = BO.create({
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
                parseHTML: (e)=>e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
            },
            type: {
                default: null,
                parseHTML: (e)=>e.getAttribute("type")
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
    renderHTML ({ HTMLAttributes: e }) {
        const { start: t, ...n } = e;
        return t === 1 ? [
            "ol",
            P0(this.options.HTMLAttributes, n),
            0
        ] : [
            "ol",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (e, t)=>{
        if (e.type !== "list" || !e.ordered) return [];
        const n = e.start || 1, i = e.items ? XRf(e.items, t) : [];
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
    renderMarkdown: (e, t)=>e.content ? t.renderChildren(e.content, `
`) : "",
    markdownTokenizer: {
        name: "orderedList",
        level: "block",
        start: (e)=>{
            const t = e.match(/^(\s*)(\d+)\.\s+/), n = t?.index;
            return n !== void 0 ? n : -1;
        },
        tokenize: (e, t, n)=>{
            var i;
            const r = e.split(`
`), [s, o] = YRf(r);
            if (s.length === 0) return;
            const a = Hjl(s, 0, n);
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
            toggleOrderedList: ()=>({ commands: e, chain: t })=>this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Kjl, this.editor.getAttributes(ORs)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-7": ()=>this.editor.commands.toggleOrderedList()
        };
    },
    addInputRules () {
        let e = EBt({
            find: FRs,
            type: this.type,
            getAttributes: (t)=>({
                    start: +t[1]
                }),
            joinPredicate: (t, n)=>n.childCount + n.attrs.start === +t[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = EBt({
            find: FRs,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: (t)=>({
                    start: +t[1],
                    ...this.editor.getAttributes(ORs)
                }),
            joinPredicate: (t, n)=>n.childCount + n.attrs.start === +t[1],
            editor: this.editor
        })), [
            e
        ];
    }
}), Yjl = /^\s*(\[([( |x])?\])\s$/, BRs = BO.create({
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
                parseHTML: (e)=>{
                    const t = e.getAttribute("data-checked");
                    return t === "" || t === "true";
                },
                renderHTML: (e)=>({
                        "data-checked": e.checked
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
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "li",
            P0(this.options.HTMLAttributes, t, {
                "data-type": this.name
            }),
            [
                "label",
                [
                    "input",
                    {
                        type: "checkbox",
                        checked: e.attrs.checked ? "checked" : null
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
    parseMarkdown: (e, t)=>{
        const n = [];
        if (e.tokens && e.tokens.length > 0 ? n.push(t.createNode("paragraph", {}, t.parseInline(e.tokens))) : e.text ? n.push(t.createNode("paragraph", {}, [
            t.createNode("text", {
                text: e.text
            })
        ])) : n.push(t.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
            const i = t.parseChildren(e.nestedTokens);
            n.push(...i);
        }
        return t.createNode("taskItem", {
            checked: e.checked || !1
        }, n);
    },
    renderMarkdown: (e, t)=>{
        var n;
        const r = `- [${(n = e.attrs) != null && n.checked ? "x" : " "}] `;
        return Sus(e, t, r);
    },
    addKeyboardShortcuts () {
        const e = {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
        return this.options.nested ? {
            ...e,
            Tab: ()=>this.editor.commands.sinkListItem(this.name)
        } : e;
    },
    addNodeView () {
        return ({ node: e, HTMLAttributes: t, getPos: n, editor: i })=>{
            const r = document.createElement("li"), s = document.createElement("label"), o = document.createElement("span"), a = document.createElement("input"), c = document.createElement("div"), l = (u)=>{
                var h, p;
                a.ariaLabel = ((p = (h = this.options.a11y) == null ? void 0 : h.checkboxLabel) == null ? void 0 : p.call(h, u, a.checked)) || `Task item checkbox for ${u.textContent || "empty task item"}`;
            };
            return l(e), s.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (u)=>u.preventDefault()), a.addEventListener("change", (u)=>{
                if (!i.isEditable && !this.options.onReadOnlyChecked) {
                    a.checked = !a.checked;
                    return;
                }
                const { checked: h } = u.target;
                i.isEditable && typeof n == "function" && i.chain().focus(void 0, {
                    scrollIntoView: !1
                }).command(({ tr: p })=>{
                    const g = n();
                    if (typeof g != "number") return !1;
                    const f = p.doc.nodeAt(g);
                    return p.setNodeMarkup(g, void 0, {
                        ...f?.attrs,
                        checked: h
                    }), !0;
                }).run(), !i.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, h) || (a.checked = !a.checked));
            }), Object.entries(this.options.HTMLAttributes).forEach(([u, h])=>{
                r.setAttribute(u, h);
            }), r.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, s.append(a, o), r.append(s, c), Object.entries(t).forEach(([u, h])=>{
                r.setAttribute(u, h);
            }), {
                dom: r,
                contentDOM: c,
                update: (u)=>u.type !== this.type ? !1 : (r.dataset.checked = u.attrs.checked, a.checked = u.attrs.checked, l(u), !0)
            };
        };
    },
    addInputRules () {
        return [
            EBt({
                find: Yjl,
                type: this.type,
                getAttributes: (e)=>({
                        checked: e[e.length - 1] === "x"
                    })
            })
        ];
    }
}), URs = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "ul",
            P0(this.options.HTMLAttributes, e, {
                "data-type": this.name
            }),
            0
        ];
    },
    parseMarkdown: (e, t)=>t.createNode("taskList", {}, t.parseChildren(e.items || [])),
    renderMarkdown: (e, t)=>e.content ? t.renderChildren(e.content, `
`) : "",
    markdownTokenizer: {
        name: "taskList",
        level: "block",
        start (e) {
            var t;
            const n = (t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : t.index;
            return n !== void 0 ? n : -1;
        },
        tokenize (e, t, n) {
            const i = (s)=>{
                const o = yus(s, {
                    itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                    extractItemData: (a)=>({
                            indentLevel: a[1].length,
                            mainContent: a[4],
                            checked: a[3].toLowerCase() === "x"
                        }),
                    createToken: (a, c)=>({
                            type: "taskItem",
                            raw: "",
                            mainContent: a.mainContent,
                            indentLevel: a.indentLevel,
                            checked: a.checked,
                            text: a.mainContent,
                            tokens: n.inlineTokens(a.mainContent),
                            nestedTokens: c
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
            }, r = yus(e, {
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
            toggleTaskList: ()=>({ commands: e })=>e.toggleList(this.name, this.options.itemTypeName)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-9": ()=>this.editor.commands.toggleTaskList()
        };
    }
}), ZRf = bS.create({
    name: "listKit",
    addExtensions () {
        const e = [];
        return this.options.bulletList !== !1 && e.push(jTn.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(ZLi.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(LRs.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(qTn.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(BRs.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(URs.configure(this.options.taskList)), e;
    }
});

}
