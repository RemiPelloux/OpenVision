import { $jf, Ajf, Ehu, Fjf, Gjf, Ljf, Mjf, Njf, Qiv, Rjf, Xiv, Yiv, Zjf, cru, gru, hru, oqf, pru, txn, ziv } from "./f0s.js";
import { $Oi, FM, xru } from "./index_175.js";
import { ZNs } from "./index_176.js";
import { M0 } from "./index_18.js";
import { A_, BO, If, P0, Xf, bS, qJc, yR, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var C3s, T3s, E3s, Ihu, $xn, Ahu, Rhu, x3s, Jiv;
export { $xn, Ahu, C3s, E3s, Ihu, Jiv, Rhu, T3s, x3s };
var __wakaru_t3i_initialized = false;
export function t3i() {
if (__wakaru_t3i_initialized) return;
__wakaru_t3i_initialized = true;
x(), A_(), M0(), ZNs(), $Oi(), zS(), C3s = BO.create({
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
                parseHTML: (e)=>{
                    var t, n;
                    const i = e.getAttribute("colwidth"), r = i ? i.split(",").map((s)=>parseInt(s, 10)) : null;
                    if (!r) {
                        const s = (t = e.closest("table")) == null ? void 0 : t.querySelectorAll("colgroup > col"), o = Array.from(((n = e.parentElement) == null ? void 0 : n.children) || []).indexOf(e);
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "td",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    }
}), T3s = BO.create({
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
                parseHTML: (e)=>{
                    const t = e.getAttribute("colwidth");
                    return t ? t.split(",").map((i)=>parseInt(i, 10)) : null;
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "th",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    }
}), E3s = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "tr",
            P0(this.options.HTMLAttributes, e),
            0
        ];
    }
}), Ihu = class {
    constructor(e, t){
        this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ehu(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(e) {
        return e.type !== this.node.type ? !1 : (this.node = e, Ehu(e, this.colgroup, this.table, this.cellMinWidth), !0);
    }
    ignoreMutation(e) {
        const t = e.target, n = this.dom.contains(t), i = this.contentDOM.contains(t);
        return !!(n && !i && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
    }
}, $xn = ({ editor: e })=>{
    const { selection: t } = e.state;
    if (!Xiv(t)) return !1;
    let n = 0;
    const i = qJc(t.ranges[0].$from, (s)=>s.type.name === "table");
    return i?.node.descendants((s)=>{
        if (s.type.name === "table") return !1;
        [
            "tableCell",
            "tableHeader"
        ].includes(s.type.name) && (n += 1);
    }), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
}, Ahu = "", Rhu = Qiv, x3s = BO.create({
    name: "table",
    addOptions () {
        return {
            HTMLAttributes: {},
            resizable: !1,
            renderWrapper: !1,
            handleWidth: 5,
            cellMinWidth: 25,
            View: Ihu,
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
    renderHTML ({ node: e, HTMLAttributes: t }) {
        const { colgroup: n, tableWidth: i, tableMinWidth: r } = ziv(e, this.options.cellMinWidth), s = t.style;
        function o() {
            return s || (i ? `width: ${i}` : `min-width: ${r}`);
        }
        const a = [
            "table",
            P0(this.options.HTMLAttributes, t, {
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
    parseMarkdown: (e, t)=>{
        const n = [];
        if (e.header) {
            const i = [];
            e.header.forEach((r)=>{
                i.push(t.createNode("tableHeader", {}, [
                    {
                        type: "paragraph",
                        content: t.parseInline(r.tokens)
                    }
                ]));
            }), n.push(t.createNode("tableRow", {}, i));
        }
        return e.rows && e.rows.forEach((i)=>{
            const r = [];
            i.forEach((s)=>{
                r.push(t.createNode("tableCell", {}, [
                    {
                        type: "paragraph",
                        content: t.parseInline(s.tokens)
                    }
                ]));
            }), n.push(t.createNode("tableRow", {}, r));
        }), t.createNode("table", void 0, n);
    },
    renderMarkdown: (e, t)=>Rhu(e, t),
    addCommands () {
        return {
            insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {})=>({ tr: i, dispatch: r, editor: s })=>{
                    const o = Yiv(s.schema, e, t, n);
                    if (r) {
                        const a = i.selection.from + 1;
                        i.replaceSelectionWith(o).scrollIntoView().setSelection(If.near(i.doc.resolve(a)));
                    }
                    return !0;
                },
            addColumnBefore: ()=>({ state: e, dispatch: t })=>Ajf(e, t),
            addColumnAfter: ()=>({ state: e, dispatch: t })=>Rjf(e, t),
            deleteColumn: ()=>({ state: e, dispatch: t })=>Mjf(e, t),
            addRowBefore: ()=>({ state: e, dispatch: t })=>Ljf(e, t),
            addRowAfter: ()=>({ state: e, dispatch: t })=>Njf(e, t),
            deleteRow: ()=>({ state: e, dispatch: t })=>Fjf(e, t),
            deleteTable: ()=>({ state: e, dispatch: t })=>Gjf(e, t),
            mergeCells: ()=>({ state: e, dispatch: t })=>hru(e, t),
            splitCell: ()=>({ state: e, dispatch: t })=>pru(e, t),
            toggleHeaderColumn: ()=>({ state: e, dispatch: t })=>txn("column")(e, t),
            toggleHeaderRow: ()=>({ state: e, dispatch: t })=>txn("row")(e, t),
            toggleHeaderCell: ()=>({ state: e, dispatch: t })=>xru(e, t),
            mergeOrSplit: ()=>({ state: e, dispatch: t })=>hru(e, t) ? !0 : pru(e, t),
            setCellAttribute: (e, t)=>({ state: n, dispatch: i })=>$jf(e, t)(n, i),
            goToNextCell: ()=>({ state: e, dispatch: t })=>gru(1)(e, t),
            goToPreviousCell: ()=>({ state: e, dispatch: t })=>gru(-1)(e, t),
            fixTables: ()=>({ state: e, dispatch: t })=>(t && cru(e), !0),
            setCellSelection: (e)=>({ tr: t, dispatch: n })=>{
                    if (n) {
                        const i = FM.create(t.doc, e.anchorCell, e.headCell);
                        t.setSelection(i);
                    }
                    return !0;
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            Tab: ()=>this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
            "Shift-Tab": ()=>this.editor.commands.goToPreviousCell(),
            Backspace: $xn,
            "Mod-Backspace": $xn,
            Delete: $xn,
            "Mod-Delete": $xn
        };
    },
    addProseMirrorPlugins () {
        return [
            ...this.options.resizable && this.editor.isEditable ? [
                Zjf({
                    handleWidth: this.options.handleWidth,
                    cellMinWidth: this.options.cellMinWidth,
                    defaultCellMinWidth: this.options.cellMinWidth,
                    View: this.options.View,
                    lastColumnResizable: this.options.lastColumnResizable
                })
            ] : [],
            oqf({
                allowTableNodeSelection: this.options.allowTableNodeSelection
            })
        ];
    },
    extendNodeSchema (e) {
        const t = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            tableRole: yR(Xf(e, "tableRole", t))
        };
    }
}), Jiv = bS.create({
    name: "tableKit",
    addExtensions () {
        const e = [];
        return this.options.table !== !1 && e.push(x3s.configure(this.options.table)), this.options.tableCell !== !1 && e.push(C3s.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(T3s.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(E3s.configure(this.options.tableRow)), e;
    }
});

}
