import { Aw, HQ, Q_, U1, j1, kAr, nYo } from "./LYd.js";
import { $5e, Df, Up } from "./index_20.js";
import { gSt } from "./index_21.js";
import { wAr } from "./index_35.js";
import { AIa, CUr, MIa, Nvi, TUr, ba1, iHt, kUr, xIa } from "./ipa.js";
import { E } from "./tslib.es6.js";
var DIa, NIa, kB, Vrt, DO, rvp, svp, ul1, dl1, ovp, avp, lvp, tbe, cvp;
export { DIa, DO, NIa, Vrt, avp, cvp, dl1, kB, lvp, ovp, rvp, svp, tbe, ul1 };
var __wakaru_EUr_initialized = false;
export function EUr() {
if (__wakaru_EUr_initialized) return;
__wakaru_EUr_initialized = true;
if (E(), Aw(), $5e(), HQ(), wAr(), gSt(), typeof WeakMap < "u") {
    let t = new WeakMap;
    DIa = (e)=>t.get(e), NIa = (e, n)=>(t.set(e, n), n);
} else {
    const t = [];
    let n = 0;
    DIa = (i)=>{
        for(let r = 0; r < t.length; r += 2)if (t[r] == i) return t[r + 1];
    }, NIa = (i, r)=>(n == 10 && (n = 0), t[n++] = i, t[n++] = r);
}
kB = class {
    constructor(t, e, n, i){
        this.width = t, this.height = e, this.map = n, this.problems = i;
    }
    findCell(t) {
        for(let e = 0; e < this.map.length; e++){
            const n = this.map[e];
            if (n != t) continue;
            const i = e % this.width, r = e / this.width | 0;
            let s = i + 1, o = r + 1;
            for(let a = 1; s < this.width && this.map[e + a] == n; a++)s++;
            for(let a = 1; o < this.height && this.map[e + this.width * a] == n; a++)o++;
            return {
                left: i,
                top: r,
                right: s,
                bottom: o
            };
        }
        throw new RangeError(`No cell with offset ${t} found`);
    }
    colCount(t) {
        for(let e = 0; e < this.map.length; e++)if (this.map[e] == t) return e % this.width;
        throw new RangeError(`No cell with offset ${t} found`);
    }
    nextCell(t, e, n) {
        const { left: i, right: r, top: s, bottom: o } = this.findCell(t);
        return e == "horiz" ? (n < 0 ? i == 0 : r == this.width) ? null : this.map[s * this.width + (n < 0 ? i - 1 : r)] : (n < 0 ? s == 0 : o == this.height) ? null : this.map[i + this.width * (n < 0 ? s - 1 : o)];
    }
    rectBetween(t, e) {
        const { left: n, right: i, top: r, bottom: s } = this.findCell(t), { left: o, right: a, top: l, bottom: c } = this.findCell(e);
        return {
            left: Math.min(n, o),
            top: Math.min(r, l),
            right: Math.max(i, a),
            bottom: Math.max(s, c)
        };
    }
    cellsInRect(t) {
        const e = [], n = {};
        for(let i = t.top; i < t.bottom; i++)for(let r = t.left; r < t.right; r++){
            const s = i * this.width + r, o = this.map[s];
            n[o] || (n[o] = !0, !(r == t.left && r && this.map[s - 1] == o || i == t.top && i && this.map[s - this.width] == o) && e.push(o));
        }
        return e;
    }
    positionAt(t, e, n) {
        for(let i = 0, r = 0;; i++){
            const s = r + n.child(i).nodeSize;
            if (i == t) {
                let o = e + t * this.width;
                const a = (t + 1) * this.width;
                for(; o < a && this.map[o] < r;)o++;
                return o == a ? s - 1 : this.map[o];
            }
            r = s;
        }
    }
    static get(t) {
        return DIa(t) || NIa(t, ba1(t));
    }
}, Vrt = new j1("selectingCells"), DO = class mmt extends U1 {
    constructor(e, n = e){
        const i = e.node(-1), r = kB.get(i), s = e.start(-1), o = r.rectBetween(e.pos - s, n.pos - s), a = e.node(0), l = r.cellsInRect(o).filter((u)=>u != n.pos - s);
        l.unshift(n.pos - s);
        const c = l.map((u)=>{
            const d = i.nodeAt(u);
            if (!d) throw new RangeError(`No cell with offset ${u} found`);
            const h = s + u + 1;
            return new nYo(a.resolve(h), a.resolve(h + d.content.size));
        });
        super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
    }
    map(e, n) {
        const i = e.resolve(n.map(this.$anchorCell.pos)), r = e.resolve(n.map(this.$headCell.pos));
        if (xIa(i) && xIa(r) && AIa(i, r)) {
            const s = this.$anchorCell.node(-1) != i.node(-1);
            return s && this.isRowSelection() ? mmt.rowSelection(i, r) : s && this.isColSelection() ? mmt.colSelection(i, r) : new mmt(i, r);
        }
        return Q_.between(i, r);
    }
    content() {
        const e = this.$anchorCell.node(-1), n = kB.get(e), i = this.$anchorCell.start(-1), r = n.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i), s = {}, o = [];
        for(let l = r.top; l < r.bottom; l++){
            const c = [];
            for(let u = l * n.width + r.left, d = r.left; d < r.right; d++, u++){
                const h = n.map[u];
                if (s[h]) continue;
                s[h] = !0;
                const p = n.findCell(h);
                let g = e.nodeAt(h);
                if (!g) throw new RangeError(`No cell with offset ${h} found`);
                const f = r.left - p.left, _ = p.right - r.right;
                if (f > 0 || _ > 0) {
                    let b = g.attrs;
                    if (f > 0 && (b = iHt(b, 0, f)), _ > 0 && (b = iHt(b, b.colspan - _, _)), p.left < r.left) {
                        if (g = g.type.createAndFill(b), !g) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
                    } else g = g.type.create(b, g.content);
                }
                if (p.top < r.top || p.bottom > r.bottom) {
                    const b = {
                        ...g.attrs,
                        rowspan: Math.min(p.bottom, r.bottom) - Math.max(p.top, r.top)
                    };
                    p.top < r.top ? g = g.type.createAndFill(b) : g = g.type.create(b, g.content);
                }
                c.push(g);
            }
            o.push(e.child(l).copy(Up.from(c)));
        }
        const a = this.isColSelection() && this.isRowSelection() ? e : o;
        return new Df(Up.from(a), 1, 1);
    }
    replace(e, n = Df.empty) {
        const i = e.steps.length, r = this.ranges;
        for(let o = 0; o < r.length; o++){
            const { $from: a, $to: l } = r[o], c = e.mapping.slice(i);
            e.replace(c.map(a.pos), c.map(l.pos), o ? Df.empty : n);
        }
        const s = U1.findFrom(e.doc.resolve(e.mapping.slice(i).map(this.to)), -1);
        s && e.setSelection(s);
    }
    replaceWith(e, n) {
        this.replace(e, new Df(Up.from(n), 0, 0));
    }
    forEachCell(e) {
        const n = this.$anchorCell.node(-1), i = kB.get(n), r = this.$anchorCell.start(-1), s = i.cellsInRect(i.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
        for(let o = 0; o < s.length; o++)e(n.nodeAt(s[o]), r + s[o]);
    }
    isColSelection() {
        const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
        if (Math.min(e, n) > 0) return !1;
        const i = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = n + this.$headCell.nodeAfter.attrs.rowspan;
        return Math.max(i, r) == this.$headCell.node(-1).childCount;
    }
    static colSelection(e, n = e) {
        const i = e.node(-1), r = kB.get(i), s = e.start(-1), o = r.findCell(e.pos - s), a = r.findCell(n.pos - s), l = e.node(0);
        return o.top <= a.top ? (o.top > 0 && (e = l.resolve(s + r.map[o.left])), a.bottom < r.height && (n = l.resolve(s + r.map[r.width * (r.height - 1) + a.right - 1]))) : (a.top > 0 && (n = l.resolve(s + r.map[a.left])), o.bottom < r.height && (e = l.resolve(s + r.map[r.width * (r.height - 1) + o.right - 1]))), new mmt(e, n);
    }
    isRowSelection() {
        const e = this.$anchorCell.node(-1), n = kB.get(e), i = this.$anchorCell.start(-1), r = n.colCount(this.$anchorCell.pos - i), s = n.colCount(this.$headCell.pos - i);
        if (Math.min(r, s) > 0) return !1;
        const o = r + this.$anchorCell.nodeAfter.attrs.colspan, a = s + this.$headCell.nodeAfter.attrs.colspan;
        return Math.max(o, a) == n.width;
    }
    eq(e) {
        return e instanceof mmt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
    }
    static rowSelection(e, n = e) {
        const i = e.node(-1), r = kB.get(i), s = e.start(-1), o = r.findCell(e.pos - s), a = r.findCell(n.pos - s), l = e.node(0);
        return o.left <= a.left ? (o.left > 0 && (e = l.resolve(s + r.map[o.top * r.width])), a.right < r.width && (n = l.resolve(s + r.map[r.width * (a.top + 1) - 1]))) : (a.left > 0 && (n = l.resolve(s + r.map[a.top * r.width])), o.right < r.width && (e = l.resolve(s + r.map[r.width * (o.top + 1) - 1]))), new mmt(e, n);
    }
    toJSON() {
        return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos
        };
    }
    static fromJSON(e, n) {
        return new mmt(e.resolve(n.anchor), e.resolve(n.head));
    }
    static create(e, n, i = n) {
        return new mmt(e.resolve(n), e.resolve(i));
    }
    getBookmark() {
        return new rvp(this.$anchorCell.pos, this.$headCell.pos);
    }
}, DO.prototype.visible = !1, U1.jsonID("cell", DO), rvp = class E2b {
    constructor(e, n){
        this.anchor = e, this.head = n;
    }
    map(e) {
        return new E2b(e.map(this.anchor), e.map(this.head));
    }
    resolve(e) {
        const n = e.resolve(this.anchor), i = e.resolve(this.head);
        return n.parent.type.spec.tableRole == "row" && i.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && i.index() < i.parent.childCount && AIa(n, i) ? new DO(n, i) : U1.near(i, 1);
    }
}, svp = new j1("fix-tables"), ul1 = Nvi("row", {
    useDeprecatedLogic: !0
}), dl1 = Nvi("column", {
    useDeprecatedLogic: !0
}), ovp = Nvi("cell", {
    useDeprecatedLogic: !0
}), avp = kAr({
    ArrowLeft: CUr("horiz", -1),
    ArrowRight: CUr("horiz", 1),
    ArrowUp: CUr("vert", -1),
    ArrowDown: CUr("vert", 1),
    "Shift-ArrowLeft": TUr("horiz", -1),
    "Shift-ArrowRight": TUr("horiz", 1),
    "Shift-ArrowUp": TUr("vert", -1),
    "Shift-ArrowDown": TUr("vert", 1),
    Backspace: kUr,
    "Mod-Backspace": kUr,
    Delete: kUr,
    "Mod-Delete": kUr
}), lvp = class {
    constructor(t, e){
        this.node = t, this.defaultCellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${e}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), MIa(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(t) {
        return t.type != this.node.type ? !1 : (this.node = t, MIa(t, this.colgroup, this.table, this.defaultCellMinWidth), !0);
    }
    ignoreMutation(t) {
        return t.type == "attributes" && (t.target == this.table || this.colgroup.contains(t.target));
    }
}, tbe = new j1("tableColumnResizing"), cvp = class _Xs {
    constructor(e, n){
        this.activeHandle = e, this.dragging = n;
    }
    apply(e) {
        const n = this, i = e.getMeta(tbe);
        if (i && i.setHandle != null) return new _Xs(i.setHandle, !1);
        if (i && i.setDragging !== void 0) return new _Xs(n.activeHandle, i.setDragging);
        if (n.activeHandle > -1 && e.docChanged) {
            let r = e.mapping.map(n.activeHandle, -1);
            return xIa(e.doc.resolve(r)) || (r = -1), new _Xs(r, n.dragging);
        }
        return n;
    }
};

}
