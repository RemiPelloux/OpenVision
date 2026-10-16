import { aNi, dql, oDf, oNi, p4t, tDf, vDf } from "./f0s.js";
import { nDf } from "./index_159.js";
import { iDf } from "./index_160.js";
import { uDf } from "./index_161.js";
import { dDf } from "./index_162.js";
import { nZe } from "./index_165.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { AW, A_, Lx, Xf, Yyn, bS, cy, rb, sel, y1, yR, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var yDf, hql, SDf, pql, mql, kDf, gql, fql;
export { SDf, fql, gql, hql, kDf, mql, pql, yDf };
var __wakaru_vql_initialized = false;
export function vql() {
if (__wakaru_vql_initialized) return;
__wakaru_vql_initialized = true;
x(), A_(), M0(), iDf(), iY(), dDf(), nZe(), zS(), nDf(), AW(), uDf(), p4t(), yDf = bS.create({
    name: "characterCount",
    addOptions () {
        return {
            limit: null,
            mode: "textSize",
            textCounter: (e)=>e.length,
            wordCounter: (e)=>e.split(" ").filter((t)=>t !== "").length
        };
    },
    addStorage () {
        return {
            characters: ()=>0,
            words: ()=>0
        };
    },
    onBeforeCreate () {
        this.storage.characters = (e)=>{
            const t = e?.node || this.editor.state.doc;
            if ((e?.mode || this.options.mode) === "textSize") {
                const i = t.textBetween(0, t.content.size, void 0, " ");
                return this.options.textCounter(i);
            }
            return t.nodeSize;
        }, this.storage.words = (e)=>{
            const t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
            return this.options.wordCounter(n);
        };
    },
    addProseMirrorPlugins () {
        let e = !1;
        return [
            new rb({
                key: new cy("characterCount"),
                appendTransaction: (t, n, i)=>{
                    if (e) return;
                    const r = this.options.limit;
                    if (r == null || r === 0) {
                        e = !0;
                        return;
                    }
                    const s = this.storage.characters({
                        node: i.doc
                    });
                    if (s > r) {
                        const o = s - r, a = 0, c = o;
                        console.warn(`[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`);
                        const l = i.tr.deleteRange(a, c);
                        return e = !0, l;
                    }
                    e = !0;
                },
                filterTransaction: (t, n)=>{
                    const i = this.options.limit;
                    if (!t.docChanged || i === 0 || i === null || i === void 0) return !0;
                    const r = this.storage.characters({
                        node: n.doc
                    }), s = this.storage.characters({
                        node: t.doc
                    });
                    if (s <= i || r > i && s > i && s <= r) return !0;
                    if (r > i && s > i && s > r || !t.getMeta("paste")) return !1;
                    const a = t.selection.$head.pos, c = s - i, l = a - c, u = a;
                    return t.deleteRange(l, u), !(this.storage.characters({
                        node: t.doc
                    }) > i);
                }
            })
        ];
    }
}), hql = bS.create({
    name: "dropCursor",
    addOptions () {
        return {
            color: "currentColor",
            width: 1,
            class: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            tDf(this.options)
        ];
    }
}), SDf = bS.create({
    name: "focus",
    addOptions () {
        return {
            className: "has-focus",
            mode: "all"
        };
    },
    addProseMirrorPlugins () {
        return [
            new rb({
                key: new cy("focus"),
                props: {
                    decorations: ({ doc: e, selection: t })=>{
                        const { isEditable: n, isFocused: i } = this.editor, { anchor: r } = t, s = [];
                        if (!n || !i) return Lx.create(e, []);
                        let o = 0;
                        this.options.mode === "deepest" && e.descendants((c, l)=>{
                            if (c.isText) return;
                            if (!(r >= l && r <= l + c.nodeSize - 1)) return !1;
                            o += 1;
                        });
                        let a = 0;
                        return e.descendants((c, l)=>{
                            if (c.isText || !(r >= l && r <= l + c.nodeSize - 1)) return !1;
                            if (a += 1, this.options.mode === "deepest" && o - a > 0 || this.options.mode === "shallowest" && a > 1) return this.options.mode === "deepest";
                            s.push(y1.node(l, l + c.nodeSize, {
                                class: this.options.className
                            }));
                        }), Lx.create(e, s);
                    }
                }
            })
        ];
    }
}), pql = bS.create({
    name: "gapCursor",
    addProseMirrorPlugins () {
        return [
            oDf()
        ];
    },
    extendNodeSchema (e) {
        var t;
        const n = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            allowGapCursor: (t = yR(Xf(e, "allowGapCursor", n))) != null ? t : null
        };
    }
}), mql = bS.create({
    name: "placeholder",
    addOptions () {
        return {
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            placeholder: "Write something \u2026",
            showOnlyWhenEditable: !0,
            showOnlyCurrent: !0,
            includeChildren: !1
        };
    },
    addProseMirrorPlugins () {
        return [
            new rb({
                key: new cy("placeholder"),
                props: {
                    decorations: ({ doc: e, selection: t })=>{
                        const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: i } = t, r = [];
                        if (!n) return null;
                        const s = this.editor.isEmpty;
                        return e.descendants((o, a)=>{
                            const c = i >= a && i <= a + o.nodeSize, l = !o.isLeaf && Yyn(o);
                            if ((c || !this.options.showOnlyCurrent) && l) {
                                const u = [
                                    this.options.emptyNodeClass
                                ];
                                s && u.push(this.options.emptyEditorClass);
                                const h = y1.node(a, a + o.nodeSize, {
                                    class: u.join(" "),
                                    "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                                        editor: this.editor,
                                        node: o,
                                        pos: a,
                                        hasAnchor: c
                                    }) : this.options.placeholder
                                });
                                r.push(h);
                            }
                            return this.options.includeChildren;
                        }), Lx.create(e, r);
                    }
                }
            })
        ];
    }
}), kDf = bS.create({
    name: "selection",
    addOptions () {
        return {
            className: "selection"
        };
    },
    addProseMirrorPlugins () {
        const { editor: e, options: t } = this;
        return [
            new rb({
                key: new cy("selection"),
                props: {
                    decorations (n) {
                        return n.selection.empty || e.isFocused || !e.isEditable || sel(n.selection) || e.view.dragging ? null : Lx.create(n.doc, [
                            y1.inline(n.selection.from, n.selection.to, {
                                class: t.className
                            })
                        ]);
                    }
                }
            })
        ];
    }
}), gql = bS.create({
    name: "trailingNode",
    addOptions () {
        return {
            node: void 0,
            notAfter: []
        };
    },
    addProseMirrorPlugins () {
        var e;
        const t = new cy(this.name), n = this.options.node || ((e = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : e.name) || "paragraph", i = Object.entries(this.editor.schema.nodes).map(([, r])=>r).filter((r)=>(this.options.notAfter || []).concat(n).includes(r.name));
        return [
            new rb({
                key: t,
                appendTransaction: (r, s, o)=>{
                    const { doc: a, tr: c, schema: l } = o, u = t.getState(o), h = a.content.size, p = l.nodes[n];
                    if (u) return c.insert(h, p.create());
                },
                state: {
                    init: (r, s)=>{
                        const o = s.tr.doc.lastChild;
                        return !dql({
                            node: o,
                            types: i
                        });
                    },
                    apply: (r, s)=>{
                        if (!r.docChanged || r.getMeta("__uniqueIDTransaction")) return s;
                        const o = r.doc.lastChild;
                        return !dql({
                            node: o,
                            types: i
                        });
                    }
                }
            })
        ];
    }
}), fql = bS.create({
    name: "undoRedo",
    addOptions () {
        return {
            depth: 100,
            newGroupDelay: 500
        };
    },
    addCommands () {
        return {
            undo: ()=>({ state: e, dispatch: t })=>oNi(e, t),
            redo: ()=>({ state: e, dispatch: t })=>aNi(e, t)
        };
    },
    addProseMirrorPlugins () {
        return [
            vDf(this.options)
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-z": ()=>this.editor.commands.undo(),
            "Shift-Mod-z": ()=>this.editor.commands.redo(),
            "Mod-y": ()=>this.editor.commands.redo(),
            "Mod-\u044F": ()=>this.editor.commands.undo(),
            "Shift-Mod-\u044F": ()=>this.editor.commands.redo()
        };
    }
});

}
