import { Zwe, um } from "./index_15.js";
import { jKe } from "./index_16.js";
import { GKe, I_, If, J3t, Mxg, Qwe, R5e, aQc, cQc, fBt, fwi, ils, nls, oQc, rQc, rls, sQc, sls, vwi, xb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var cCi, ols, uQc, dQc, als, cls, lls, hQc, pQc, mQc, uls, dls, hls, pls, mls, gQc, gls, fls, vls, lCi, _ls, P5e, fQc, Nxg;
export { Nxg, P5e, _ls, als, cCi, cls, dQc, dls, fQc, fls, gQc, gls, hQc, hls, lCi, lls, mQc, mls, ols, pQc, pls, uQc, uls, vls };
var __wakaru_bls_initialized = false;
export function bls() {
if (__wakaru_bls_initialized) return;
__wakaru_bls_initialized = true;
x(), jKe(), Zwe(), zS(), cCi = (e, t)=>e.selection.empty ? !1 : (t && t(e.tr.deleteSelection().scrollIntoView()), !0), ols = (e, t, n)=>{
    let i = rQc(e, n);
    if (!i) return !1;
    let r = nls(i);
    if (!r) {
        let o = i.blockRange(), a = o && J3t(o);
        return a == null ? !1 : (t && t(e.tr.lift(o, a).scrollIntoView()), !0);
    }
    let s = r.nodeBefore;
    if (aQc(e, r, t, -1)) return !0;
    if (i.parent.content.size == 0 && (fBt(s, "end") || I_.isSelectable(s))) for(let o = i.depth;; o--){
        let a = vwi(e.doc, i.before(o), i.after(o), um.empty);
        if (a && a.slice.size < a.to - a.from) {
            if (t) {
                let c = e.tr.step(a);
                c.setSelection(fBt(s, "end") ? xb.findFrom(c.doc.resolve(c.mapping.map(r.pos, -1)), -1) : I_.create(c.doc, r.pos - s.nodeSize)), t(c.scrollIntoView());
            }
            return !0;
        }
        if (o == 1 || i.node(o - 1).childCount > 1) break;
    }
    return s.isAtom && r.depth == i.depth - 1 ? (t && t(e.tr.delete(r.pos - s.nodeSize, r.pos).scrollIntoView()), !0) : !1;
}, uQc = (e, t, n)=>{
    let i = rQc(e, n);
    if (!i) return !1;
    let r = nls(i);
    return r ? sQc(e, r, t) : !1;
}, dQc = (e, t, n)=>{
    let i = oQc(e, n);
    if (!i) return !1;
    let r = ils(i);
    return r ? sQc(e, r, t) : !1;
}, als = (e, t, n)=>{
    let { $head: i, empty: r } = e.selection, s = i;
    if (!r) return !1;
    if (i.parent.isTextblock) {
        if (n ? !n.endOfTextblock("backward", e) : i.parentOffset > 0) return !1;
        s = nls(i);
    }
    let o = s && s.nodeBefore;
    return !o || !I_.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(I_.create(e.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
}, cls = (e, t, n)=>{
    let i = oQc(e, n);
    if (!i) return !1;
    let r = ils(i);
    if (!r) return !1;
    let s = r.nodeAfter;
    if (aQc(e, r, t, 1)) return !0;
    if (i.parent.content.size == 0 && (fBt(s, "start") || I_.isSelectable(s))) {
        let o = vwi(e.doc, i.before(), i.after(), um.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (t) {
                let a = e.tr.step(o);
                a.setSelection(fBt(s, "start") ? xb.findFrom(a.doc.resolve(a.mapping.map(r.pos)), 1) : I_.create(a.doc, a.mapping.map(r.pos))), t(a.scrollIntoView());
            }
            return !0;
        }
    }
    return s.isAtom && r.depth == i.depth - 1 ? (t && t(e.tr.delete(r.pos, r.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, lls = (e, t, n)=>{
    let { $head: i, empty: r } = e.selection, s = i;
    if (!r) return !1;
    if (i.parent.isTextblock) {
        if (n ? !n.endOfTextblock("forward", e) : i.parentOffset < i.parent.content.size) return !1;
        s = ils(i);
    }
    let o = s && s.nodeAfter;
    return !o || !I_.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(I_.create(e.doc, s.pos)).scrollIntoView()), !0);
}, hQc = (e, t)=>{
    let n = e.selection, i = n instanceof I_, r;
    if (i) {
        if (n.node.isTextblock || !GKe(e.doc, n.from)) return !1;
        r = n.from;
    } else if (r = fwi(e.doc, n.from, -1), r == null) return !1;
    if (t) {
        let s = e.tr.join(r);
        i && s.setSelection(I_.create(s.doc, r - e.doc.resolve(r).nodeBefore.nodeSize)), t(s.scrollIntoView());
    }
    return !0;
}, pQc = (e, t)=>{
    let n = e.selection, i;
    if (n instanceof I_) {
        if (n.node.isTextblock || !GKe(e.doc, n.to)) return !1;
        i = n.to;
    } else if (i = fwi(e.doc, n.to, 1), i == null) return !1;
    return t && t(e.tr.join(i).scrollIntoView()), !0;
}, mQc = (e, t)=>{
    let { $from: n, $to: i } = e.selection, r = n.blockRange(i), s = r && J3t(r);
    return s == null ? !1 : (t && t(e.tr.lift(r, s).scrollIntoView()), !0);
}, uls = (e, t)=>{
    let { $head: n, $anchor: i } = e.selection;
    return !n.parent.type.spec.code || !n.sameParent(i) ? !1 : (t && t(e.tr.insertText(`
`).scrollIntoView()), !0);
}, dls = (e, t)=>{
    let { $head: n, $anchor: i } = e.selection;
    if (!n.parent.type.spec.code || !n.sameParent(i)) return !1;
    let r = n.node(-1), s = n.indexAfter(-1), o = rls(r.contentMatchAt(s));
    if (!o || !r.canReplaceWith(s, s, o)) return !1;
    if (t) {
        let a = n.after(), c = e.tr.replaceWith(a, a, o.createAndFill());
        c.setSelection(xb.near(c.doc.resolve(a), 1)), t(c.scrollIntoView());
    }
    return !0;
}, hls = (e, t)=>{
    let n = e.selection, { $from: i, $to: r } = n;
    if (n instanceof Qwe || i.parent.inlineContent || r.parent.inlineContent) return !1;
    let s = rls(r.parent.contentMatchAt(r.indexAfter()));
    if (!s || !s.isTextblock) return !1;
    if (t) {
        let o = (!i.parentOffset && r.index() < r.parent.childCount ? i : r).pos, a = e.tr.insert(o, s.createAndFill());
        a.setSelection(If.create(a.doc, o + 1)), t(a.scrollIntoView());
    }
    return !0;
}, pls = (e, t)=>{
    let { $cursor: n } = e.selection;
    if (!n || n.parent.content.size) return !1;
    if (n.depth > 1 && n.after() != n.end(-1)) {
        let s = n.before();
        if (R5e(e.doc, s)) return t && t(e.tr.split(s).scrollIntoView()), !0;
    }
    let i = n.blockRange(), r = i && J3t(i);
    return r == null ? !1 : (t && t(e.tr.lift(i, r).scrollIntoView()), !0);
}, mls = Mxg(), gQc = (e, t)=>{
    let { $from: n, to: i } = e.selection, r, s = n.sharedDepth(i);
    return s == 0 ? !1 : (r = n.before(s), t && t(e.tr.setSelection(I_.create(e.doc, r))), !0);
}, gls = (e, t)=>(t && t(e.tr.setSelection(new Qwe(e.doc))), !0), fls = cQc(-1), vls = cQc(1), lCi = sls(cCi, ols, als), _ls = sls(cCi, cls, lls), P5e = {
    Enter: sls(uls, hls, pls, mls),
    "Mod-Enter": dls,
    Backspace: lCi,
    "Mod-Backspace": lCi,
    "Shift-Backspace": lCi,
    Delete: _ls,
    "Mod-Delete": _ls,
    "Mod-a": gls
}, fQc = {
    "Ctrl-h": P5e.Backspace,
    "Alt-Backspace": P5e["Mod-Backspace"],
    "Ctrl-d": P5e.Delete,
    "Ctrl-Alt-Backspace": P5e["Mod-Delete"],
    "Alt-Delete": P5e["Mod-Delete"],
    "Alt-d": P5e["Mod-Delete"],
    "Ctrl-a": fls,
    "Ctrl-e": vls
};
for(let e in P5e)fQc[e] = P5e[e];
Nxg = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform ? os.platform() == "darwin" : !1;

}
