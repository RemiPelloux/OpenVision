import { Aw, Deh, H5e, Leh, Meh, Neh, Oeh, PS, Q_, U1, X4y, c_n, gxr, iXo, mxr, nXo, pSt, rXo, sXo, x_n, xnt } from "./LYd.js";
import { $5e, Df } from "./index_20.js";
import { gSt } from "./index_21.js";
import { E } from "./tslib.es6.js";
var lAr, oXo, Beh, Ueh, aXo, lXo, cXo, jeh, $eh, Heh, uXo, dXo, hXo, pXo, mXo, Weh, gXo, fXo, vXo, cAr, _Xo, Pnt, Geh, J4y;
export { $eh, Beh, Geh, Heh, J4y, Pnt, Ueh, Weh, _Xo, aXo, cAr, cXo, dXo, fXo, gXo, hXo, jeh, lAr, lXo, mXo, oXo, pXo, uXo, vXo };
var __wakaru_bXo_initialized = false;
export function bXo() {
if (__wakaru_bXo_initialized) return;
__wakaru_bXo_initialized = true;
E(), gSt(), $5e(), Aw(), lAr = (t, e)=>t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0), oXo = (t, e, n)=>{
    let i = Meh(t, n);
    if (!i) return !1;
    let r = nXo(i);
    if (!r) {
        let o = i.blockRange(), a = o && c_n(o);
        return a == null ? !1 : (e && e(t.tr.lift(o, a).scrollIntoView()), !0);
    }
    let s = r.nodeBefore;
    if (Leh(t, r, e, -1)) return !0;
    if (i.parent.content.size == 0 && (x_n(s, "end") || PS.isSelectable(s))) for(let o = i.depth;; o--){
        let a = gxr(t.doc, i.before(o), i.after(o), Df.empty);
        if (a && a.slice.size < a.to - a.from) {
            if (e) {
                let l = t.tr.step(a);
                l.setSelection(x_n(s, "end") ? U1.findFrom(l.doc.resolve(l.mapping.map(r.pos, -1)), -1) : PS.create(l.doc, r.pos - s.nodeSize)), e(l.scrollIntoView());
            }
            return !0;
        }
        if (o == 1 || i.node(o - 1).childCount > 1) break;
    }
    return s.isAtom && r.depth == i.depth - 1 ? (e && e(t.tr.delete(r.pos - s.nodeSize, r.pos).scrollIntoView()), !0) : !1;
}, Beh = (t, e, n)=>{
    let i = Meh(t, n);
    if (!i) return !1;
    let r = nXo(i);
    return r ? Deh(t, r, e) : !1;
}, Ueh = (t, e, n)=>{
    let i = Neh(t, n);
    if (!i) return !1;
    let r = iXo(i);
    return r ? Deh(t, r, e) : !1;
}, aXo = (t, e, n)=>{
    let { $head: i, empty: r } = t.selection, s = i;
    if (!r) return !1;
    if (i.parent.isTextblock) {
        if (n ? !n.endOfTextblock("backward", t) : i.parentOffset > 0) return !1;
        s = nXo(i);
    }
    let o = s && s.nodeBefore;
    return !o || !PS.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(PS.create(t.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
}, lXo = (t, e, n)=>{
    let i = Neh(t, n);
    if (!i) return !1;
    let r = iXo(i);
    if (!r) return !1;
    let s = r.nodeAfter;
    if (Leh(t, r, e, 1)) return !0;
    if (i.parent.content.size == 0 && (x_n(s, "start") || PS.isSelectable(s))) {
        let o = gxr(t.doc, i.before(), i.after(), Df.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (e) {
                let a = t.tr.step(o);
                a.setSelection(x_n(s, "start") ? U1.findFrom(a.doc.resolve(a.mapping.map(r.pos)), 1) : PS.create(a.doc, a.mapping.map(r.pos))), e(a.scrollIntoView());
            }
            return !0;
        }
    }
    return s.isAtom && r.depth == i.depth - 1 ? (e && e(t.tr.delete(r.pos, r.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, cXo = (t, e, n)=>{
    let { $head: i, empty: r } = t.selection, s = i;
    if (!r) return !1;
    if (i.parent.isTextblock) {
        if (n ? !n.endOfTextblock("forward", t) : i.parentOffset < i.parent.content.size) return !1;
        s = iXo(i);
    }
    let o = s && s.nodeAfter;
    return !o || !PS.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(PS.create(t.doc, s.pos)).scrollIntoView()), !0);
}, jeh = (t, e)=>{
    let n = t.selection, i = n instanceof PS, r;
    if (i) {
        if (n.node.isTextblock || !pSt(t.doc, n.from)) return !1;
        r = n.from;
    } else if (r = mxr(t.doc, n.from, -1), r == null) return !1;
    if (e) {
        let s = t.tr.join(r);
        i && s.setSelection(PS.create(s.doc, r - t.doc.resolve(r).nodeBefore.nodeSize)), e(s.scrollIntoView());
    }
    return !0;
}, $eh = (t, e)=>{
    let n = t.selection, i;
    if (n instanceof PS) {
        if (n.node.isTextblock || !pSt(t.doc, n.to)) return !1;
        i = n.to;
    } else if (i = mxr(t.doc, n.to, 1), i == null) return !1;
    return e && e(t.tr.join(i).scrollIntoView()), !0;
}, Heh = (t, e)=>{
    let { $from: n, $to: i } = t.selection, r = n.blockRange(i), s = r && c_n(r);
    return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
}, uXo = (t, e)=>{
    let { $head: n, $anchor: i } = t.selection;
    return !n.parent.type.spec.code || !n.sameParent(i) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
}, dXo = (t, e)=>{
    let { $head: n, $anchor: i } = t.selection;
    if (!n.parent.type.spec.code || !n.sameParent(i)) return !1;
    let r = n.node(-1), s = n.indexAfter(-1), o = rXo(r.contentMatchAt(s));
    if (!o || !r.canReplaceWith(s, s, o)) return !1;
    if (e) {
        let a = n.after(), l = t.tr.replaceWith(a, a, o.createAndFill());
        l.setSelection(U1.near(l.doc.resolve(a), 1)), e(l.scrollIntoView());
    }
    return !0;
}, hXo = (t, e)=>{
    let n = t.selection, { $from: i, $to: r } = n;
    if (n instanceof H5e || i.parent.inlineContent || r.parent.inlineContent) return !1;
    let s = rXo(r.parent.contentMatchAt(r.indexAfter()));
    if (!s || !s.isTextblock) return !1;
    if (e) {
        let o = (!i.parentOffset && r.index() < r.parent.childCount ? i : r).pos, a = t.tr.insert(o, s.createAndFill());
        a.setSelection(Q_.create(a.doc, o + 1)), e(a.scrollIntoView());
    }
    return !0;
}, pXo = (t, e)=>{
    let { $cursor: n } = t.selection;
    if (!n || n.parent.content.size) return !1;
    if (n.depth > 1 && n.after() != n.end(-1)) {
        let s = n.before();
        if (xnt(t.doc, s)) return e && e(t.tr.split(s).scrollIntoView()), !0;
    }
    let i = n.blockRange(), r = i && c_n(i);
    return r == null ? !1 : (e && e(t.tr.lift(i, r).scrollIntoView()), !0);
}, mXo = X4y(), Weh = (t, e)=>{
    let { $from: n, to: i } = t.selection, r, s = n.sharedDepth(i);
    return s == 0 ? !1 : (r = n.before(s), e && e(t.tr.setSelection(PS.create(t.doc, r))), !0);
}, gXo = (t, e)=>(e && e(t.tr.setSelection(new H5e(t.doc))), !0), fXo = Oeh(-1), vXo = Oeh(1), cAr = sXo(lAr, oXo, aXo), _Xo = sXo(lAr, lXo, cXo), Pnt = {
    Enter: sXo(uXo, hXo, pXo, mXo),
    "Mod-Enter": dXo,
    Backspace: cAr,
    "Mod-Backspace": cAr,
    "Shift-Backspace": cAr,
    Delete: _Xo,
    "Mod-Delete": _Xo,
    "Mod-a": gXo
}, Geh = {
    "Ctrl-h": Pnt.Backspace,
    "Alt-Backspace": Pnt["Mod-Backspace"],
    "Ctrl-d": Pnt.Delete,
    "Ctrl-Alt-Backspace": Pnt["Mod-Delete"],
    "Alt-Delete": Pnt["Mod-Delete"],
    "Alt-d": Pnt["Mod-Delete"],
    "Ctrl-a": fXo,
    "Ctrl-e": vXo
};
for(let t in Pnt)Geh[t] = Pnt[t];
J4y = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform ? os.platform() == "darwin" : !1;

}
