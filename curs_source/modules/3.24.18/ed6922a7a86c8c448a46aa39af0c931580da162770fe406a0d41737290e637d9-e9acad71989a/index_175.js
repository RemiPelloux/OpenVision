import { BOi, KNs, OOi, UOi, VNs, fjf, jNs, lbt, txn } from "./f0s.js";
import { Zwe, qd, um } from "./index_15.js";
import { jKe } from "./index_16.js";
import { wCi } from "./index_30.js";
import { AW, If, cy, kCi, tcs, xb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var YNs, XNs, KO, C6e, FM, Tru, Eru, aqf, cqf, xru, Iru, Aru, lse, Rru;
export { Aru, C6e, Eru, FM, Iru, KO, Rru, Tru, XNs, YNs, aqf, cqf, lse, xru };
var __wakaru_$Oi_initialized = false;
export function $Oi() {
if (__wakaru_$Oi_initialized) return;
__wakaru_$Oi_initialized = true;
if (x(), zS(), Zwe(), AW(), wCi(), jKe(), typeof WeakMap < "u") {
    let e = new WeakMap;
    YNs = (t)=>e.get(t), XNs = (t, n)=>(e.set(t, n), n);
} else {
    const e = [];
    let n = 0;
    YNs = (i)=>{
        for(let r = 0; r < e.length; r += 2)if (e[r] == i) return e[r + 1];
    }, XNs = (i, r)=>(n == 10 && (n = 0), e[n++] = i, e[n++] = r);
}
KO = class {
    constructor(e, t, n, i){
        this.width = e, this.height = t, this.map = n, this.problems = i;
    }
    findCell(e) {
        for(let t = 0; t < this.map.length; t++){
            const n = this.map[t];
            if (n != e) continue;
            const i = t % this.width, r = t / this.width | 0;
            let s = i + 1, o = r + 1;
            for(let a = 1; s < this.width && this.map[t + a] == n; a++)s++;
            for(let a = 1; o < this.height && this.map[t + this.width * a] == n; a++)o++;
            return {
                left: i,
                top: r,
                right: s,
                bottom: o
            };
        }
        throw new RangeError(`No cell with offset ${e} found`);
    }
    colCount(e) {
        for(let t = 0; t < this.map.length; t++)if (this.map[t] == e) return t % this.width;
        throw new RangeError(`No cell with offset ${e} found`);
    }
    nextCell(e, t, n) {
        const { left: i, right: r, top: s, bottom: o } = this.findCell(e);
        return t == "horiz" ? (n < 0 ? i == 0 : r == this.width) ? null : this.map[s * this.width + (n < 0 ? i - 1 : r)] : (n < 0 ? s == 0 : o == this.height) ? null : this.map[i + this.width * (n < 0 ? s - 1 : o)];
    }
    rectBetween(e, t) {
        const { left: n, right: i, top: r, bottom: s } = this.findCell(e), { left: o, right: a, top: c, bottom: l } = this.findCell(t);
        return {
            left: Math.min(n, o),
            top: Math.min(r, c),
            right: Math.max(i, a),
            bottom: Math.max(s, l)
        };
    }
    cellsInRect(e) {
        const t = [], n = {};
        for(let i = e.top; i < e.bottom; i++)for(let r = e.left; r < e.right; r++){
            const s = i * this.width + r, o = this.map[s];
            n[o] || (n[o] = !0, !(r == e.left && r && this.map[s - 1] == o || i == e.top && i && this.map[s - this.width] == o) && t.push(o));
        }
        return t;
    }
    positionAt(e, t, n) {
        for(let i = 0, r = 0;; i++){
            const s = r + n.child(i).nodeSize;
            if (i == e) {
                let o = t + e * this.width;
                const a = (e + 1) * this.width;
                for(; o < a && this.map[o] < r;)o++;
                return o == a ? s - 1 : this.map[o];
            }
            r = s;
        }
    }
    static get(e) {
        return YNs(e) || XNs(e, fjf(e));
    }
}, C6e = new cy("selectingCells"), FM = class KWe extends xb {
    constructor(t, n = t){
        const i = t.node(-1), r = KO.get(i), s = t.start(-1), o = r.rectBetween(t.pos - s, n.pos - s), a = t.node(0), c = r.cellsInRect(o).filter((u)=>u != n.pos - s);
        c.unshift(n.pos - s);
        const l = c.map((u)=>{
            const h = i.nodeAt(u);
            if (!h) throw new RangeError(`No cell with offset ${u} found`);
            const p = s + u + 1;
            return new tcs(a.resolve(p), a.resolve(p + h.content.size));
        });
        super(l[0].$from, l[0].$to, l), this.$anchorCell = t, this.$headCell = n;
    }
    map(t, n) {
        const i = t.resolve(n.map(this.$anchorCell.pos)), r = t.resolve(n.map(this.$headCell.pos));
        if (VNs(i) && VNs(r) && jNs(i, r)) {
            const s = this.$anchorCell.node(-1) != i.node(-1);
            return s && this.isRowSelection() ? KWe.rowSelection(i, r) : s && this.isColSelection() ? KWe.colSelection(i, r) : new KWe(i, r);
        }
        return If.between(i, r);
    }
    content() {
        const t = this.$anchorCell.node(-1), n = KO.get(t), i = this.$anchorCell.start(-1), r = n.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i), s = {}, o = [];
        for(let c = r.top; c < r.bottom; c++){
            const l = [];
            for(let u = c * n.width + r.left, h = r.left; h < r.right; h++, u++){
                const p = n.map[u];
                if (s[p]) continue;
                s[p] = !0;
                const g = n.findCell(p);
                let f = t.nodeAt(p);
                if (!f) throw new RangeError(`No cell with offset ${p} found`);
                const v = r.left - g.left, b = g.right - r.right;
                if (v > 0 || b > 0) {
                    let y = f.attrs;
                    if (v > 0 && (y = lbt(y, 0, v)), b > 0 && (y = lbt(y, y.colspan - b, b)), g.left < r.left) {
                        if (f = f.type.createAndFill(y), !f) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
                    } else f = f.type.create(y, f.content);
                }
                if (g.top < r.top || g.bottom > r.bottom) {
                    const y = {
                        ...f.attrs,
                        rowspan: Math.min(g.bottom, r.bottom) - Math.max(g.top, r.top)
                    };
                    g.top < r.top ? f = f.type.createAndFill(y) : f = f.type.create(y, f.content);
                }
                l.push(f);
            }
            o.push(t.child(c).copy(qd.from(l)));
        }
        const a = this.isColSelection() && this.isRowSelection() ? t : o;
        return new um(qd.from(a), 1, 1);
    }
    replace(t, n = um.empty) {
        const i = t.steps.length, r = this.ranges;
        for(let o = 0; o < r.length; o++){
            const { $from: a, $to: c } = r[o], l = t.mapping.slice(i);
            t.replace(l.map(a.pos), l.map(c.pos), o ? um.empty : n);
        }
        const s = xb.findFrom(t.doc.resolve(t.mapping.slice(i).map(this.to)), -1);
        s && t.setSelection(s);
    }
    replaceWith(t, n) {
        this.replace(t, new um(qd.from(n), 0, 0));
    }
    forEachCell(t) {
        const n = this.$anchorCell.node(-1), i = KO.get(n), r = this.$anchorCell.start(-1), s = i.cellsInRect(i.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
        for(let o = 0; o < s.length; o++)t(n.nodeAt(s[o]), r + s[o]);
    }
    isColSelection() {
        const t = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
        if (Math.min(t, n) > 0) return !1;
        const i = t + this.$anchorCell.nodeAfter.attrs.rowspan, r = n + this.$headCell.nodeAfter.attrs.rowspan;
        return Math.max(i, r) == this.$headCell.node(-1).childCount;
    }
    static colSelection(t, n = t) {
        const i = t.node(-1), r = KO.get(i), s = t.start(-1), o = r.findCell(t.pos - s), a = r.findCell(n.pos - s), c = t.node(0);
        return o.top <= a.top ? (o.top > 0 && (t = c.resolve(s + r.map[o.left])), a.bottom < r.height && (n = c.resolve(s + r.map[r.width * (r.height - 1) + a.right - 1]))) : (a.top > 0 && (n = c.resolve(s + r.map[a.left])), o.bottom < r.height && (t = c.resolve(s + r.map[r.width * (r.height - 1) + o.right - 1]))), new KWe(t, n);
    }
    isRowSelection() {
        const t = this.$anchorCell.node(-1), n = KO.get(t), i = this.$anchorCell.start(-1), r = n.colCount(this.$anchorCell.pos - i), s = n.colCount(this.$headCell.pos - i);
        if (Math.min(r, s) > 0) return !1;
        const o = r + this.$anchorCell.nodeAfter.attrs.colspan, a = s + this.$headCell.nodeAfter.attrs.colspan;
        return Math.max(o, a) == n.width;
    }
    eq(t) {
        return t instanceof KWe && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
    }
    static rowSelection(t, n = t) {
        const i = t.node(-1), r = KO.get(i), s = t.start(-1), o = r.findCell(t.pos - s), a = r.findCell(n.pos - s), c = t.node(0);
        return o.left <= a.left ? (o.left > 0 && (t = c.resolve(s + r.map[o.top * r.width])), a.right < r.width && (n = c.resolve(s + r.map[r.width * (a.top + 1) - 1]))) : (a.left > 0 && (n = c.resolve(s + r.map[a.top * r.width])), o.right < r.width && (t = c.resolve(s + r.map[r.width * (o.top + 1) - 1]))), new KWe(t, n);
    }
    toJSON() {
        return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos
        };
    }
    static fromJSON(t, n) {
        return new KWe(t.resolve(n.anchor), t.resolve(n.head));
    }
    static create(t, n, i = n) {
        return new KWe(t.resolve(n), t.resolve(i));
    }
    getBookmark() {
        return new Tru(this.$anchorCell.pos, this.$headCell.pos);
    }
}, FM.prototype.visible = !1, xb.jsonID("cell", FM), Tru = class jwm {
    constructor(t, n){
        this.anchor = t, this.head = n;
    }
    map(t) {
        return new jwm(t.map(this.anchor), t.map(this.head));
    }
    resolve(t) {
        const n = t.resolve(this.anchor), i = t.resolve(this.head);
        return n.parent.type.spec.tableRole == "row" && i.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && i.index() < i.parent.childCount && jNs(n, i) ? new FM(n, i) : xb.near(i, 1);
    }
}, Eru = new cy("fix-tables"), aqf = txn("row", {
    useDeprecatedLogic: !0
}), cqf = txn("column", {
    useDeprecatedLogic: !0
}), xru = txn("cell", {
    useDeprecatedLogic: !0
}), Iru = kCi({
    ArrowLeft: BOi("horiz", -1),
    ArrowRight: BOi("horiz", 1),
    ArrowUp: BOi("vert", -1),
    ArrowDown: BOi("vert", 1),
    "Shift-ArrowLeft": UOi("horiz", -1),
    "Shift-ArrowRight": UOi("horiz", 1),
    "Shift-ArrowUp": UOi("vert", -1),
    "Shift-ArrowDown": UOi("vert", 1),
    Backspace: OOi,
    "Mod-Backspace": OOi,
    Delete: OOi,
    "Mod-Delete": OOi
}), Aru = class {
    constructor(e, t){
        this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), KNs(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(e) {
        return e.type != this.node.type ? !1 : (this.node = e, KNs(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
    }
    ignoreMutation(e) {
        return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
    }
}, lse = new cy("tableColumnResizing"), Rru = class I1r {
    constructor(t, n){
        this.activeHandle = t, this.dragging = n;
    }
    apply(t) {
        const n = this, i = t.getMeta(lse);
        if (i && i.setHandle != null) return new I1r(i.setHandle, !1);
        if (i && i.setDragging !== void 0) return new I1r(n.activeHandle, i.setDragging);
        if (n.activeHandle > -1 && t.docChanged) {
            let r = t.mapping.map(n.activeHandle, -1);
            return VNs(t.doc.resolve(r)) || (r = -1), new I1r(r, n.dragging);
        }
        return n;
    }
};

}
