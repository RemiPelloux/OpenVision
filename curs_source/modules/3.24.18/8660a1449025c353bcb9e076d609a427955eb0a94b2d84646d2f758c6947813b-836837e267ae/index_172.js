import { Aw, Dnh, Fy, HQ, MS, Ob, Rw, Rx, X3, cli, j1, wP } from "./LYd.js";
import { f9S } from "./index_165.js";
import { v9S } from "./index_166.js";
import { C9S } from "./index_167.js";
import { T9S } from "./index_168.js";
import { $kt } from "./index_171.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { LJh, P9S, b9r, g9S, jkt, y9S, y9r } from "./ipa.js";
import { E } from "./tslib.es6.js";
var N9S, OJh, L9S, FJh, BJh, O9S, UJh, jJh;
export { BJh, FJh, L9S, N9S, O9S, OJh, UJh, jJh };
var __wakaru_$Jh_initialized = false;
export function $Jh() {
if (__wakaru_$Jh_initialized) return;
__wakaru_$Jh_initialized = true;
E(), Fy(), gE(), v9S(), Doe(), T9S(), $kt(), Aw(), f9S(), HQ(), C9S(), jkt(), N9S = Rw.create({
    name: "characterCount",
    addOptions () {
        return {
            limit: null,
            mode: "textSize",
            textCounter: (t)=>t.length,
            wordCounter: (t)=>t.split(" ").filter((e)=>e !== "").length
        };
    },
    addStorage () {
        return {
            characters: ()=>0,
            words: ()=>0
        };
    },
    onBeforeCreate () {
        this.storage.characters = (t)=>{
            const e = t?.node || this.editor.state.doc;
            if ((t?.mode || this.options.mode) === "textSize") {
                const i = e.textBetween(0, e.content.size, void 0, " ");
                return this.options.textCounter(i);
            }
            return e.nodeSize;
        }, this.storage.words = (t)=>{
            const e = t?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
            return this.options.wordCounter(n);
        };
    },
    addProseMirrorPlugins () {
        let t = !1;
        return [
            new MS({
                key: new j1("characterCount"),
                appendTransaction: (e, n, i)=>{
                    if (t) return;
                    const r = this.options.limit;
                    if (r == null || r === 0) {
                        t = !0;
                        return;
                    }
                    const s = this.storage.characters({
                        node: i.doc
                    });
                    if (s > r) {
                        const o = s - r, a = 0, l = o;
                        console.warn(`[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`);
                        const c = i.tr.deleteRange(a, l);
                        return t = !0, c;
                    }
                    t = !0;
                },
                filterTransaction: (e, n)=>{
                    const i = this.options.limit;
                    if (!e.docChanged || i === 0 || i === null || i === void 0) return !0;
                    const r = this.storage.characters({
                        node: n.doc
                    }), s = this.storage.characters({
                        node: e.doc
                    });
                    if (s <= i || r > i && s > i && s <= r) return !0;
                    if (r > i && s > i && s > r || !e.getMeta("paste")) return !1;
                    const a = e.selection.$head.pos, l = s - i, c = a - l, u = a;
                    return e.deleteRange(c, u), !(this.storage.characters({
                        node: e.doc
                    }) > i);
                }
            })
        ];
    }
}), OJh = Rw.create({
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
            g9S(this.options)
        ];
    }
}), L9S = Rw.create({
    name: "focus",
    addOptions () {
        return {
            className: "has-focus",
            mode: "all"
        };
    },
    addProseMirrorPlugins () {
        return [
            new MS({
                key: new j1("focus"),
                props: {
                    decorations: ({ doc: t, selection: e })=>{
                        const { isEditable: n, isFocused: i } = this.editor, { anchor: r } = e, s = [];
                        if (!n || !i) return wP.create(t, []);
                        let o = 0;
                        this.options.mode === "deepest" && t.descendants((l, c)=>{
                            if (l.isText) return;
                            if (!(r >= c && r <= c + l.nodeSize - 1)) return !1;
                            o += 1;
                        });
                        let a = 0;
                        return t.descendants((l, c)=>{
                            if (l.isText || !(r >= c && r <= c + l.nodeSize - 1)) return !1;
                            if (a += 1, this.options.mode === "deepest" && o - a > 0 || this.options.mode === "shallowest" && a > 1) return this.options.mode === "deepest";
                            s.push(Rx.node(c, c + l.nodeSize, {
                                class: this.options.className
                            }));
                        }), wP.create(t, s);
                    }
                }
            })
        ];
    }
}), FJh = Rw.create({
    name: "gapCursor",
    addProseMirrorPlugins () {
        return [
            y9S()
        ];
    },
    extendNodeSchema (t) {
        var e;
        const n = {
            name: t.name,
            options: t.options,
            storage: t.storage
        };
        return {
            allowGapCursor: (e = X3(Ob(t, "allowGapCursor", n))) != null ? e : null
        };
    }
}), BJh = Rw.create({
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
            new MS({
                key: new j1("placeholder"),
                props: {
                    decorations: ({ doc: t, selection: e })=>{
                        const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: i } = e, r = [];
                        if (!n) return null;
                        const s = this.editor.isEmpty;
                        return t.descendants((o, a)=>{
                            const l = i >= a && i <= a + o.nodeSize, c = !o.isLeaf && cli(o);
                            if ((l || !this.options.showOnlyCurrent) && c) {
                                const u = [
                                    this.options.emptyNodeClass
                                ];
                                s && u.push(this.options.emptyEditorClass);
                                const d = Rx.node(a, a + o.nodeSize, {
                                    class: u.join(" "),
                                    "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                                        editor: this.editor,
                                        node: o,
                                        pos: a,
                                        hasAnchor: l
                                    }) : this.options.placeholder
                                });
                                r.push(d);
                            }
                            return this.options.includeChildren;
                        }), wP.create(t, r);
                    }
                }
            })
        ];
    }
}), O9S = Rw.create({
    name: "selection",
    addOptions () {
        return {
            className: "selection"
        };
    },
    addProseMirrorPlugins () {
        const { editor: t, options: e } = this;
        return [
            new MS({
                key: new j1("selection"),
                props: {
                    decorations (n) {
                        return n.selection.empty || t.isFocused || !t.isEditable || Dnh(n.selection) || t.view.dragging ? null : wP.create(n.doc, [
                            Rx.inline(n.selection.from, n.selection.to, {
                                class: e.className
                            })
                        ]);
                    }
                }
            })
        ];
    }
}), UJh = Rw.create({
    name: "trailingNode",
    addOptions () {
        return {
            node: void 0,
            notAfter: []
        };
    },
    addProseMirrorPlugins () {
        var t;
        const e = new j1(this.name), n = this.options.node || ((t = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : t.name) || "paragraph", i = Object.entries(this.editor.schema.nodes).map(([, r])=>r).filter((r)=>(this.options.notAfter || []).concat(n).includes(r.name));
        return [
            new MS({
                key: e,
                appendTransaction: (r, s, o)=>{
                    const { doc: a, tr: l, schema: c } = o, u = e.getState(o), d = a.content.size, h = c.nodes[n];
                    if (u) return l.insert(d, h.create());
                },
                state: {
                    init: (r, s)=>{
                        const o = s.tr.doc.lastChild;
                        return !LJh({
                            node: o,
                            types: i
                        });
                    },
                    apply: (r, s)=>{
                        if (!r.docChanged || r.getMeta("__uniqueIDTransaction")) return s;
                        const o = r.doc.lastChild;
                        return !LJh({
                            node: o,
                            types: i
                        });
                    }
                }
            })
        ];
    }
}), jJh = Rw.create({
    name: "undoRedo",
    addOptions () {
        return {
            depth: 100,
            newGroupDelay: 500
        };
    },
    addCommands () {
        return {
            undo: ()=>({ state: t, dispatch: e })=>b9r(t, e),
            redo: ()=>({ state: t, dispatch: e })=>y9r(t, e)
        };
    },
    addProseMirrorPlugins () {
        return [
            P9S(this.options)
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
