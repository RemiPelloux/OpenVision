import { Aw, Fy, Ob, Q_, Rw, X3, fE, o6, ynh } from "./LYd.js";
import { DO, EUr, ovp } from "./index_181.js";
import { LIa } from "./index_182.js";
import { gE } from "./index_23.js";
import { $fp, Ba1, CC1, Da1, Fa1, IC1, Kfp, La1, Ma1, Nvi, TC1, Wa1, Xxp, cl1, el1, ja1, kC1, qfp, za1, zfp } from "./ipa.js";
import { E } from "./tslib.es6.js";
var gMa, fMa, vMa, Qxp, hbi, Jxp, eAp, _Ma, xC1;
export { Jxp, Qxp, _Ma, eAp, fMa, gMa, hbi, vMa, xC1 };
var __wakaru_oHr_initialized = false;
export function oHr() {
if (__wakaru_oHr_initialized) return;
__wakaru_oHr_initialized = true;
E(), Fy(), gE(), LIa(), EUr(), Aw(), gMa = o6.create({
    name: "tableCell",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (t)=>{
                    var e, n;
                    const i = t.getAttribute("colwidth"), r = i ? i.split(",").map((s)=>parseInt(s, 10)) : null;
                    if (!r) {
                        const s = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), o = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
                        if (o && o > -1 && s && s[o]) {
                            const a = s[o].getAttribute("width");
                            return a ? [
                                parseInt(a, 10)
                            ] : null;
                        }
                    }
                    return r;
                }
            }
        };
    },
    tableRole: "cell",
    isolating: !0,
    parseHTML () {
        return [
            {
                tag: "td"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "td",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    }
}), fMa = o6.create({
    name: "tableHeader",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (t)=>{
                    const e = t.getAttribute("colwidth");
                    return e ? e.split(",").map((i)=>parseInt(i, 10)) : null;
                }
            }
        };
    },
    tableRole: "header_cell",
    isolating: !0,
    parseHTML () {
        return [
            {
                tag: "th"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "th",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    }
}), vMa = o6.create({
    name: "tableRow",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "(tableCell | tableHeader)*",
    tableRole: "row",
    parseHTML () {
        return [
            {
                tag: "tr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "tr",
            fE(this.options.HTMLAttributes, t),
            0
        ];
    }
}), Qxp = class {
    constructor(t, e){
        this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Xxp(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(t) {
        return t.type !== this.node.type ? !1 : (this.node = t, Xxp(t, this.colgroup, this.table, this.cellMinWidth), !0);
    }
    ignoreMutation(t) {
        const e = t.target, n = this.dom.contains(e), i = this.contentDOM.contains(e);
        return !!(n && !i && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
    }
}, hbi = ({ editor: t })=>{
    const { selection: e } = t.state;
    if (!TC1(e)) return !1;
    let n = 0;
    const i = ynh(e.ranges[0].$from, (s)=>s.type.name === "table");
    return i?.node.descendants((s)=>{
        if (s.type.name === "table") return !1;
        [
            "tableCell",
            "tableHeader"
        ].includes(s.type.name) && (n += 1);
    }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Jxp = "", eAp = IC1, _Ma = o6.create({
    name: "table",
    addOptions () {
        return {
            HTMLAttributes: {},
            resizable: !1,
            renderWrapper: !1,
            handleWidth: 5,
            cellMinWidth: 25,
            View: Qxp,
            lastColumnResizable: !0,
            allowTableNodeSelection: !1
        };
    },
    content: "tableRow+",
    tableRole: "table",
    isolating: !0,
    group: "block",
    parseHTML () {
        return [
            {
                tag: "table"
            }
        ];
    },
    renderHTML ({ node: t, HTMLAttributes: e }) {
        const { colgroup: n, tableWidth: i, tableMinWidth: r } = kC1(t, this.options.cellMinWidth), s = e.style;
        function o() {
            return s || (i ? `width: ${i}` : `min-width: ${r}`);
        }
        const a = [
            "table",
            fE(this.options.HTMLAttributes, e, {
                style: o()
            }),
            n,
            [
                "tbody",
                0
            ]
        ];
        return this.options.renderWrapper ? [
            "div",
            {
                class: "tableWrapper"
            },
            a
        ] : a;
    },
    parseMarkdown: (t, e)=>{
        const n = [];
        if (t.header) {
            const i = [];
            t.header.forEach((r)=>{
                i.push(e.createNode("tableHeader", {}, [
                    {
                        type: "paragraph",
                        content: e.parseInline(r.tokens)
                    }
                ]));
            }), n.push(e.createNode("tableRow", {}, i));
        }
        return t.rows && t.rows.forEach((i)=>{
            const r = [];
            i.forEach((s)=>{
                r.push(e.createNode("tableCell", {}, [
                    {
                        type: "paragraph",
                        content: e.parseInline(s.tokens)
                    }
                ]));
            }), n.push(e.createNode("tableRow", {}, r));
        }), e.createNode("table", void 0, n);
    },
    renderMarkdown: (t, e)=>eAp(t, e),
    addCommands () {
        return {
            insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {})=>({ tr: i, dispatch: r, editor: s })=>{
                    const o = CC1(s.schema, t, e, n);
                    if (r) {
                        const a = i.selection.from + 1;
                        i.replaceSelectionWith(o).scrollIntoView().setSelection(Q_.near(i.doc.resolve(a)));
                    }
                    return !0;
                },
            addColumnBefore: ()=>({ state: t, dispatch: e })=>Ma1(t, e),
            addColumnAfter: ()=>({ state: t, dispatch: e })=>Da1(t, e),
            deleteColumn: ()=>({ state: t, dispatch: e })=>La1(t, e),
            addRowBefore: ()=>({ state: t, dispatch: e })=>Fa1(t, e),
            addRowAfter: ()=>({ state: t, dispatch: e })=>Ba1(t, e),
            deleteRow: ()=>({ state: t, dispatch: e })=>ja1(t, e),
            deleteTable: ()=>({ state: t, dispatch: e })=>za1(t, e),
            mergeCells: ()=>({ state: t, dispatch: e })=>qfp(t, e),
            splitCell: ()=>({ state: t, dispatch: e })=>zfp(t, e),
            toggleHeaderColumn: ()=>({ state: t, dispatch: e })=>Nvi("column")(t, e),
            toggleHeaderRow: ()=>({ state: t, dispatch: e })=>Nvi("row")(t, e),
            toggleHeaderCell: ()=>({ state: t, dispatch: e })=>ovp(t, e),
            mergeOrSplit: ()=>({ state: t, dispatch: e })=>qfp(t, e) ? !0 : zfp(t, e),
            setCellAttribute: (t, e)=>({ state: n, dispatch: i })=>Wa1(t, e)(n, i),
            goToNextCell: ()=>({ state: t, dispatch: e })=>Kfp(1)(t, e),
            goToPreviousCell: ()=>({ state: t, dispatch: e })=>Kfp(-1)(t, e),
            fixTables: ()=>({ state: t, dispatch: e })=>(e && $fp(t), !0),
            setCellSelection: (t)=>({ tr: e, dispatch: n })=>{
                    if (n) {
                        const i = DO.create(e.doc, t.anchorCell, t.headCell);
                        e.setSelection(i);
                    }
                    return !0;
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            Tab: ()=>this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
            "Shift-Tab": ()=>this.editor.commands.goToPreviousCell(),
            Backspace: hbi,
            "Mod-Backspace": hbi,
            Delete: hbi,
            "Mod-Delete": hbi
        };
    },
    addProseMirrorPlugins () {
        return [
            ...this.options.resizable && this.editor.isEditable ? [
                el1({
                    handleWidth: this.options.handleWidth,
                    cellMinWidth: this.options.cellMinWidth,
                    defaultCellMinWidth: this.options.cellMinWidth,
                    View: this.options.View,
                    lastColumnResizable: this.options.lastColumnResizable
                })
            ] : [],
            cl1({
                allowTableNodeSelection: this.options.allowTableNodeSelection
            })
        ];
    },
    extendNodeSchema (t) {
        const e = {
            name: t.name,
            options: t.options,
            storage: t.storage
        };
        return {
            tableRole: X3(Ob(t, "tableRole", e))
        };
    }
}), xC1 = Rw.create({
    name: "tableKit",
    addExtensions () {
        const t = [];
        return this.options.table !== !1 && t.push(_Ma.configure(this.options.table)), this.options.tableCell !== !1 && t.push(gMa.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(fMa.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(vMa.configure(this.options.tableRow)), t;
    }
});

}
