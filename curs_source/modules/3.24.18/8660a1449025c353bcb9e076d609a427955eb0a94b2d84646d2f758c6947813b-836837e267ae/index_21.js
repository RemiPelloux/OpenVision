import { A6y, Cai, D6y, F6y, GKo, H6y, HKo, HQd, K6y, O6y, P6y, R6y, Tai, U6y, V6y, VKo, WKo, YQd, gxr, j6y, x6y, z6y, zKo } from "./LYd.js";
import { $5e, Df, SO, Sai, Up } from "./index_20.js";
import { E } from "./tslib.es6.js";
var KKo, YKo, XKo, ZKo, Eai, QKo, fxr, mSt, JKo, vxr, vne, Roe, _xr, u8t, bxr, Iai, TRe, phe, QQd, eYo, tYo, d8t, yxr;
export { Eai, Iai, JKo, KKo, QKo, QQd, Roe, TRe, XKo, YKo, ZKo, _xr, bxr, d8t, eYo, fxr, mSt, phe, tYo, u8t, vne, vxr, yxr };
var __wakaru_gSt_initialized = false;
export function gSt() {
if (__wakaru_gSt_initialized) return;
__wakaru_gSt_initialized = true;
E(), $5e(), KKo = 65535, YKo = Math.pow(2, 16), XKo = 1, ZKo = 2, Eai = 4, QKo = 8, fxr = class {
    constructor(t, e, n){
        this.pos = t, this.delInfo = e, this.recover = n;
    }
    get deleted() {
        return (this.delInfo & QKo) > 0;
    }
    get deletedBefore() {
        return (this.delInfo & (XKo | Eai)) > 0;
    }
    get deletedAfter() {
        return (this.delInfo & (ZKo | Eai)) > 0;
    }
    get deletedAcross() {
        return (this.delInfo & Eai) > 0;
    }
}, mSt = class r$n {
    constructor(e, n = !1){
        if (this.ranges = e, this.inverted = n, !e.length && r$n.empty) return r$n.empty;
    }
    recover(e) {
        let n = 0, i = HQd(e);
        if (!this.inverted) for(let r = 0; r < i; r++)n += this.ranges[r * 3 + 2] - this.ranges[r * 3 + 1];
        return this.ranges[i * 3] + n + A6y(e);
    }
    mapResult(e, n = 1) {
        return this._map(e, n, !1);
    }
    map(e, n = 1) {
        return this._map(e, n, !0);
    }
    _map(e, n, i) {
        let r = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
        for(let a = 0; a < this.ranges.length; a += 3){
            let l = this.ranges[a] - (this.inverted ? r : 0);
            if (l > e) break;
            let c = this.ranges[a + s], u = this.ranges[a + o], d = l + c;
            if (e <= d) {
                let h = c ? e == l ? -1 : e == d ? 1 : n : n, p = l + r + (h < 0 ? 0 : u);
                if (i) return p;
                let g = e == (n < 0 ? l : d) ? null : x6y(a / 3, e - l), f = e == l ? ZKo : e == d ? XKo : Eai;
                return (n < 0 ? e != l : e != d) && (f |= QKo), new fxr(p, f, g);
            }
            r += u - c;
        }
        return i ? e + r : new fxr(e + r, 0, null);
    }
    touches(e, n) {
        let i = 0, r = HQd(n), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
        for(let a = 0; a < this.ranges.length; a += 3){
            let l = this.ranges[a] - (this.inverted ? i : 0);
            if (l > e) break;
            let c = this.ranges[a + s], u = l + c;
            if (e <= u && a == r * 3) return !0;
            i += this.ranges[a + o] - c;
        }
        return !1;
    }
    forEach(e) {
        let n = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
        for(let r = 0, s = 0; r < this.ranges.length; r += 3){
            let o = this.ranges[r], a = o - (this.inverted ? s : 0), l = o + (this.inverted ? 0 : s), c = this.ranges[r + n], u = this.ranges[r + i];
            e(a, a + c, l, l + u), s += u - c;
        }
    }
    invert() {
        return new r$n(this.ranges, !this.inverted);
    }
    toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    static offset(e) {
        return e == 0 ? r$n.empty : new r$n(e < 0 ? [
            0,
            -e,
            0
        ] : [
            0,
            0,
            e
        ]);
    }
}, mSt.empty = new mSt([]), JKo = class BJc {
    constructor(e, n, i = 0, r = e ? e.length : 0){
        this.mirror = n, this.from = i, this.to = r, this._maps = e || [], this.ownData = !(e || n);
    }
    get maps() {
        return this._maps;
    }
    slice(e = 0, n = this.maps.length) {
        return new BJc(this._maps, this.mirror, e, n);
    }
    appendMap(e, n) {
        this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
    }
    appendMapping(e) {
        for(let n = 0, i = this._maps.length; n < e._maps.length; n++){
            let r = e.getMirror(n);
            this.appendMap(e._maps[n], r != null && r < n ? i + r : void 0);
        }
    }
    getMirror(e) {
        if (this.mirror) {
            for(let n = 0; n < this.mirror.length; n++)if (this.mirror[n] == e) return this.mirror[n + (n % 2 ? -1 : 1)];
        }
    }
    setMirror(e, n) {
        this.mirror || (this.mirror = []), this.mirror.push(e, n);
    }
    appendMappingInverted(e) {
        for(let n = e.maps.length - 1, i = this._maps.length + e._maps.length; n >= 0; n--){
            let r = e.getMirror(n);
            this.appendMap(e._maps[n].invert(), r != null && r > n ? i - r - 1 : void 0);
        }
    }
    invert() {
        let e = new BJc;
        return e.appendMappingInverted(this), e;
    }
    map(e, n = 1) {
        if (this.mirror) return this._map(e, n, !0);
        for(let i = this.from; i < this.to; i++)e = this._maps[i].map(e, n);
        return e;
    }
    mapResult(e, n = 1) {
        return this._map(e, n, !1);
    }
    _map(e, n, i) {
        let r = 0;
        for(let s = this.from; s < this.to; s++){
            let o = this._maps[s], a = o.mapResult(e, n);
            if (a.recover != null) {
                let l = this.getMirror(s);
                if (l != null && l > s && l < this.to) {
                    s = l, e = this._maps[l].recover(a.recover);
                    continue;
                }
            }
            r |= a.delInfo, e = a.pos;
        }
        return i ? e : new fxr(e, r, null);
    }
}, vxr = Object.create(null), vne = class {
    getMap() {
        return mSt.empty;
    }
    merge(t) {
        return null;
    }
    static fromJSON(t, e) {
        if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let n = vxr[e.stepType];
        if (!n) throw new RangeError(`No step type ${e.stepType} defined`);
        return n.fromJSON(t, e);
    }
    static jsonID(t, e) {
        if (t in vxr) throw new RangeError("Duplicate use of step JSON ID " + t);
        return vxr[t] = e, e.prototype.jsonID = t, e;
    }
}, Roe = class DZi {
    constructor(e, n){
        this.doc = e, this.failed = n;
    }
    static ok(e) {
        return new DZi(e, null);
    }
    static fail(e) {
        return new DZi(null, e);
    }
    static fromReplace(e, n, i, r) {
        try {
            return DZi.ok(e.replace(n, i, r));
        } catch (s) {
            if (s instanceof Sai) return DZi.fail(s.message);
            throw s;
        }
    }
}, _xr = class NZi extends vne {
    constructor(e, n, i){
        super(), this.from = e, this.to = n, this.mark = i;
    }
    apply(e) {
        let n = e.slice(this.from, this.to), i = e.resolve(this.from), r = i.node(i.sharedDepth(this.to)), s = new Df(HKo(n.content, (o, a)=>!o.isAtom || !a.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), r), n.openStart, n.openEnd);
        return Roe.fromReplace(e, this.from, this.to, s);
    }
    invert() {
        return new u8t(this.from, this.to, this.mark);
    }
    map(e) {
        let n = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
        return n.deleted && i.deleted || n.pos >= i.pos ? null : new NZi(n.pos, i.pos, this.mark);
    }
    merge(e) {
        return e instanceof NZi && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new NZi(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new NZi(n.from, n.to, e.markFromJSON(n.mark));
    }
}, vne.jsonID("addMark", _xr), u8t = class LZi extends vne {
    constructor(e, n, i){
        super(), this.from = e, this.to = n, this.mark = i;
    }
    apply(e) {
        let n = e.slice(this.from, this.to), i = new Df(HKo(n.content, (r)=>r.mark(this.mark.removeFromSet(r.marks)), e), n.openStart, n.openEnd);
        return Roe.fromReplace(e, this.from, this.to, i);
    }
    invert() {
        return new _xr(this.from, this.to, this.mark);
    }
    map(e) {
        let n = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
        return n.deleted && i.deleted || n.pos >= i.pos ? null : new LZi(n.pos, i.pos, this.mark);
    }
    merge(e) {
        return e instanceof LZi && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new LZi(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new LZi(n.from, n.to, e.markFromJSON(n.mark));
    }
}, vne.jsonID("removeMark", u8t), bxr = class OZi extends vne {
    constructor(e, n){
        super(), this.pos = e, this.mark = n;
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return Roe.fail("No node at mark step's position");
        let i = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
        return Roe.fromReplace(e, this.pos, this.pos + 1, new Df(Up.from(i), 0, n.isLeaf ? 0 : 1));
    }
    invert(e) {
        let n = e.nodeAt(this.pos);
        if (n) {
            let i = this.mark.addToSet(n.marks);
            if (i.length == n.marks.length) {
                for(let r = 0; r < n.marks.length; r++)if (!n.marks[r].isInSet(i)) return new OZi(this.pos, n.marks[r]);
                return new OZi(this.pos, this.mark);
            }
        }
        return new Iai(this.pos, this.mark);
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new OZi(n.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new OZi(n.pos, e.markFromJSON(n.mark));
    }
}, vne.jsonID("addNodeMark", bxr), Iai = class UJc extends vne {
    constructor(e, n){
        super(), this.pos = e, this.mark = n;
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return Roe.fail("No node at mark step's position");
        let i = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
        return Roe.fromReplace(e, this.pos, this.pos + 1, new Df(Up.from(i), 0, n.isLeaf ? 0 : 1));
    }
    invert(e) {
        let n = e.nodeAt(this.pos);
        return !n || !this.mark.isInSet(n.marks) ? this : new bxr(this.pos, this.mark);
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new UJc(n.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new UJc(n.pos, e.markFromJSON(n.mark));
    }
}, vne.jsonID("removeNodeMark", Iai), TRe = class Osn extends vne {
    constructor(e, n, i, r = !1){
        super(), this.from = e, this.to = n, this.slice = i, this.structure = r;
    }
    apply(e) {
        return this.structure && WKo(e, this.from, this.to) ? Roe.fail("Structure replace would overwrite content") : Roe.fromReplace(e, this.from, this.to, this.slice);
    }
    getMap() {
        return new mSt([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(e) {
        return new Osn(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
    }
    map(e) {
        let n = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
        return n.deletedAcross && i.deletedAcross ? null : new Osn(n.pos, Math.max(n.pos, i.pos), this.slice, this.structure);
    }
    merge(e) {
        if (!(e instanceof Osn) || e.structure || this.structure) return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let n = this.slice.size + e.slice.size == 0 ? Df.empty : new Df(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
            return new Osn(this.from, this.to + (e.to - e.from), n, this.structure);
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let n = this.slice.size + e.slice.size == 0 ? Df.empty : new Df(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
            return new Osn(e.from, this.to, n, this.structure);
        } else return null;
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new Osn(n.from, n.to, Df.fromJSON(e, n.slice), !!n.structure);
    }
}, vne.jsonID("replace", TRe), phe = class mXs extends vne {
    constructor(e, n, i, r, s, o, a = !1){
        super(), this.from = e, this.to = n, this.gapFrom = i, this.gapTo = r, this.slice = s, this.insert = o, this.structure = a;
    }
    apply(e) {
        if (this.structure && (WKo(e, this.from, this.gapFrom) || WKo(e, this.gapTo, this.to))) return Roe.fail("Structure gap-replace would overwrite content");
        let n = e.slice(this.gapFrom, this.gapTo);
        if (n.openStart || n.openEnd) return Roe.fail("Gap is not a flat range");
        let i = this.slice.insertAt(this.insert, n.content);
        return i ? Roe.fromReplace(e, this.from, this.to, i) : Roe.fail("Content does not fit in gap");
    }
    getMap() {
        return new mSt([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(e) {
        let n = this.gapTo - this.gapFrom;
        return new mXs(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(e) {
        let n = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1), r = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? i.pos : e.map(this.gapTo, 1);
        return n.deletedAcross && i.deletedAcross || r < n.pos || s > i.pos ? null : new mXs(n.pos, i.pos, r, s, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    static fromJSON(e, n) {
        if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new mXs(n.from, n.to, n.gapFrom, n.gapTo, Df.fromJSON(e, n.slice), n.insert, !!n.structure);
    }
}, vne.jsonID("replaceAround", phe), QQd = class {
    constructor(t, e, n){
        this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = Up.empty;
        for(let i = 0; i <= t.depth; i++){
            let r = t.node(i);
            this.frontier.push({
                type: r.type,
                match: r.contentMatchAt(t.indexAfter(i))
            });
        }
        for(let i = t.depth; i > 0; i--)this.placed = Up.from(t.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        for(; this.unplaced.size;){
            let l = this.findFittable();
            l ? this.placeNodes(l) : this.openMore() || this.dropNode();
        }
        let t = this.mustMoveInline(), e = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(t < 0 ? this.$to : n.doc.resolve(t));
        if (!i) return null;
        let r = this.placed, s = n.depth, o = i.depth;
        for(; s && o && r.childCount == 1;)r = r.firstChild.content, s--, o--;
        let a = new Df(r, s, o);
        return t > -1 ? new phe(n.pos, t, this.$to.pos, this.$to.end(), a, e) : a.size || n.pos != this.$to.pos ? new TRe(n.pos, i.pos, a) : null;
    }
    findFittable() {
        let t = this.unplaced.openStart;
        for(let e = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < t; n++){
            let r = e.firstChild;
            if (e.childCount > 1 && (i = 0), r.type.spec.isolating && i <= n) {
                t = n;
                break;
            }
            e = r.content;
        }
        for(let e = 1; e <= 2; e++)for(let n = e == 1 ? t : this.unplaced.openStart; n >= 0; n--){
            let i, r = null;
            n ? (r = zKo(this.unplaced.content, n - 1).firstChild, i = r.content) : i = this.unplaced.content;
            let s = i.firstChild;
            for(let o = this.depth; o >= 0; o--){
                let { type: a, match: l } = this.frontier[o], c, u = null;
                if (e == 1 && (s ? l.matchType(s.type) || (u = l.fillBefore(Up.from(s), !1)) : r && a.compatibleContent(r.type))) return {
                    sliceDepth: n,
                    frontierDepth: o,
                    parent: r,
                    inject: u
                };
                if (e == 2 && s && (c = l.findWrapping(s.type))) return {
                    sliceDepth: n,
                    frontierDepth: o,
                    parent: r,
                    wrap: c
                };
                if (r && l.matchType(r.type)) break;
            }
        }
    }
    openMore() {
        let { content: t, openStart: e, openEnd: n } = this.unplaced, i = zKo(t, e);
        return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new Df(t, e + 1, Math.max(n, i.size + e >= t.size - n ? e + 1 : 0)), !0);
    }
    dropNode() {
        let { content: t, openStart: e, openEnd: n } = this.unplaced, i = zKo(t, e);
        if (i.childCount <= 1 && e > 0) {
            let r = t.size - e <= e + i.size;
            this.unplaced = new Df(Cai(t, e - 1, 1), e - 1, r ? e - 1 : n);
        } else this.unplaced = new Df(Cai(t, e, 1), e, n);
    }
    placeNodes({ sliceDepth: t, frontierDepth: e, parent: n, inject: i, wrap: r }) {
        for(; this.depth > e;)this.closeFrontierNode();
        if (r) for(let g = 0; g < r.length; g++)this.openFrontierNode(r[g]);
        let s = this.unplaced, o = n ? n.content : s.content, a = s.openStart - t, l = 0, c = [], { match: u, type: d } = this.frontier[e];
        if (i) {
            for(let g = 0; g < i.childCount; g++)c.push(i.child(g));
            u = u.matchFragment(i);
        }
        let h = o.size + t - (s.content.size - s.openEnd);
        for(; l < o.childCount;){
            let g = o.child(l), f = u.matchType(g.type);
            if (!f) break;
            l++, (l > 1 || a == 0 || g.content.size) && (u = f, c.push(YQd(g.mark(d.allowedMarks(g.marks)), l == 1 ? a : 0, l == o.childCount ? h : -1)));
        }
        let p = l == o.childCount;
        p || (h = -1), this.placed = Tai(this.placed, e, Up.from(c)), this.frontier[e].match = u, p && h < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for(let g = 0, f = o; g < h; g++){
            let _ = f.lastChild;
            this.frontier.push({
                type: _.type,
                match: _.contentMatchAt(_.childCount)
            }), f = _.content;
        }
        this.unplaced = p ? t == 0 ? Df.empty : new Df(Cai(s.content, t - 1, 1), t - 1, h < 0 ? s.openEnd : t - 1) : new Df(Cai(s.content, t, l), s.openStart, s.openEnd);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let t = this.frontier[this.depth], e;
        if (!t.type.isTextblock || !VKo(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth) return -1;
        let { depth: n } = this.$to, i = this.$to.after(n);
        for(; n > 1 && i == this.$to.end(--n);)++i;
        return i;
    }
    findCloseLevel(t) {
        e: for(let e = Math.min(this.depth, t.depth); e >= 0; e--){
            let { match: n, type: i } = this.frontier[e], r = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), s = VKo(t, e, i, n, r);
            if (s) {
                for(let o = e - 1; o >= 0; o--){
                    let { match: a, type: l } = this.frontier[o], c = VKo(t, o, l, a, !0);
                    if (!c || c.childCount) continue e;
                }
                return {
                    depth: e,
                    fit: s,
                    move: r ? t.doc.resolve(t.after(e + 1)) : t
                };
            }
        }
    }
    close(t) {
        let e = this.findCloseLevel(t);
        if (!e) return null;
        for(; this.depth > e.depth;)this.closeFrontierNode();
        e.fit.childCount && (this.placed = Tai(this.placed, e.depth, e.fit)), t = e.move;
        for(let n = e.depth + 1; n <= t.depth; n++){
            let i = t.node(n), r = i.type.contentMatch.fillBefore(i.content, !0, t.index(n));
            this.openFrontierNode(i.type, i.attrs, r);
        }
        return t;
    }
    openFrontierNode(t, e = null, n) {
        let i = this.frontier[this.depth];
        i.match = i.match.matchType(t), this.placed = Tai(this.placed, this.depth, Up.from(t.create(e, n))), this.frontier.push({
            type: t,
            match: t.contentMatch
        });
    }
    closeFrontierNode() {
        let e = this.frontier.pop().match.fillBefore(Up.empty, !0);
        e.childCount && (this.placed = Tai(this.placed, this.frontier.length, e));
    }
}, eYo = class gXs extends vne {
    constructor(e, n, i){
        super(), this.pos = e, this.attr = n, this.value = i;
    }
    apply(e) {
        let n = e.nodeAt(this.pos);
        if (!n) return Roe.fail("No node at attribute step's position");
        let i = Object.create(null);
        for(let s in n.attrs)i[s] = n.attrs[s];
        i[this.attr] = this.value;
        let r = n.type.create(i, null, n.marks);
        return Roe.fromReplace(e, this.pos, this.pos + 1, new Df(Up.from(r), 0, n.isLeaf ? 0 : 1));
    }
    getMap() {
        return mSt.empty;
    }
    invert(e) {
        return new gXs(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
    }
    map(e) {
        let n = e.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new gXs(n.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number" || typeof n.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new gXs(n.pos, n.attr, n.value);
    }
}, vne.jsonID("attr", eYo), tYo = class jJc extends vne {
    constructor(e, n){
        super(), this.attr = e, this.value = n;
    }
    apply(e) {
        let n = Object.create(null);
        for(let r in e.attrs)n[r] = e.attrs[r];
        n[this.attr] = this.value;
        let i = e.type.create(n, e.content, e.marks);
        return Roe.ok(i);
    }
    getMap() {
        return mSt.empty;
    }
    invert(e) {
        return new jJc(this.attr, e.attrs[this.attr]);
    }
    map(e) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(e, n) {
        if (typeof n.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new jJc(n.attr, n.value);
    }
}, vne.jsonID("docAttr", tYo), d8t = class extends Error {
}, d8t = function t(e) {
    let n = Error.call(this, e);
    return n.__proto__ = t.prototype, n;
}, d8t.prototype = Object.create(Error.prototype), d8t.prototype.constructor = d8t, d8t.prototype.name = "TransformError", yxr = class {
    constructor(t){
        this.doc = t, this.steps = [], this.docs = [], this.mapping = new JKo;
    }
    get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    step(t) {
        let e = this.maybeStep(t);
        if (e.failed) throw new d8t(e.failed);
        return this;
    }
    maybeStep(t) {
        let e = t.apply(this.doc);
        return e.failed || this.addStep(t, e.doc), e;
    }
    get docChanged() {
        return this.steps.length > 0;
    }
    addStep(t, e) {
        this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e;
    }
    replace(t, e = t, n = Df.empty) {
        let i = gxr(this.doc, t, e, n);
        return i && this.step(i), this;
    }
    replaceWith(t, e, n) {
        return this.replace(t, e, new Df(Up.from(n), 0, 0));
    }
    delete(t, e) {
        return this.replace(t, e, Df.empty);
    }
    insert(t, e) {
        return this.replaceWith(t, t, e);
    }
    replaceRange(t, e, n) {
        return z6y(this, t, e, n), this;
    }
    replaceRangeWith(t, e, n) {
        return V6y(this, t, e, n), this;
    }
    deleteRange(t, e) {
        return K6y(this, t, e), this;
    }
    lift(t, e) {
        return D6y(this, t, e), this;
    }
    join(t, e = 1) {
        return H6y(this, t, e), this;
    }
    wrap(t, e) {
        return O6y(this, t, e), this;
    }
    setBlockType(t, e = t, n, i = null) {
        return F6y(this, t, e, n, i), this;
    }
    setNodeMarkup(t, e, n = null, i) {
        return U6y(this, t, e, n, i), this;
    }
    setNodeAttribute(t, e, n) {
        return this.step(new eYo(t, e, n)), this;
    }
    setDocAttribute(t, e) {
        return this.step(new tYo(t, e)), this;
    }
    addNodeMark(t, e) {
        return this.step(new bxr(t, e)), this;
    }
    removeNodeMark(t, e) {
        let n = this.doc.nodeAt(t);
        if (!n) throw new RangeError("No node at position " + t);
        if (e instanceof SO) e.isInSet(n.marks) && this.step(new Iai(t, e));
        else {
            let i = n.marks, r, s = [];
            for(; r = e.isInSet(i);)s.push(new Iai(t, r)), i = r.removeFromSet(i);
            for(let o = s.length - 1; o >= 0; o--)this.step(s[o]);
        }
        return this;
    }
    split(t, e = 1, n) {
        return j6y(this, t, e, n), this;
    }
    addMark(t, e, n) {
        return R6y(this, t, e, n), this;
    }
    removeMark(t, e, n) {
        return P6y(this, t, e, n), this;
    }
    clearIncompatible(t, e, n) {
        return GKo(this, t, e, n), this;
    }
};

}
