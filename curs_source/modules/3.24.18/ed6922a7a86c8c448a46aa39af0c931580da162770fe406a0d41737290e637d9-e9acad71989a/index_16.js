import { IM, Zwe, qd, syn, um } from "./index_15.js";
import { EEg, Gas, Has, IEg, Was, bEg, cEg, cyn, dEg, fEg, gXc, jas, kEg, kXc, lEg, lyn, pEg, qas, uEg, vEg, vwi, xEg, yEg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zas, Kas, Yas, Xas, uyn, Zas, _wi, VKe, Qas, bwi, oj, eY, ywi, Ymt, Swi, dyn, Cfe, LJ, TXc, Jas, ecs, Xmt, kwi;
export { Cfe, Jas, Kas, LJ, Qas, Swi, TXc, VKe, Xas, Xmt, Yas, Ymt, Zas, _wi, bwi, dyn, eY, ecs, kwi, oj, uyn, ywi, zas };
var __wakaru_jKe_initialized = false;
export function jKe() {
if (__wakaru_jKe_initialized) return;
__wakaru_jKe_initialized = true;
x(), Zwe(), zas = 65535, Kas = Math.pow(2, 16), Yas = 1, Xas = 2, uyn = 4, Zas = 8, _wi = class {
    constructor(e, t, n){
        this.pos = e, this.delInfo = t, this.recover = n;
    }
    get deleted() {
        return (this.delInfo & Zas) > 0;
    }
    get deletedBefore() {
        return (this.delInfo & (Yas | uyn)) > 0;
    }
    get deletedAfter() {
        return (this.delInfo & (Xas | uyn)) > 0;
    }
    get deletedAcross() {
        return (this.delInfo & uyn) > 0;
    }
}, VKe = class Lin {
    constructor(t, n = !1){
        if (this.ranges = t, this.inverted = n, !t.length && Lin.empty) return Lin.empty;
    }
    recover(t) {
        let n = 0, i = gXc(t);
        if (!this.inverted) for(let r = 0; r < i; r++)n += this.ranges[r * 3 + 2] - this.ranges[r * 3 + 1];
        return this.ranges[i * 3] + n + lEg(t);
    }
    mapResult(t, n = 1) {
        return this._map(t, n, !1);
    }
    map(t, n = 1) {
        return this._map(t, n, !0);
    }
    _map(t, n, i) {
        let r = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
        for(let a = 0; a < this.ranges.length; a += 3){
            let c = this.ranges[a] - (this.inverted ? r : 0);
            if (c > t) break;
            let l = this.ranges[a + s], u = this.ranges[a + o], h = c + l;
            if (t <= h) {
                let p = l ? t == c ? -1 : t == h ? 1 : n : n, g = c + r + (p < 0 ? 0 : u);
                if (i) return g;
                let f = t == (n < 0 ? c : h) ? null : cEg(a / 3, t - c), v = t == c ? Xas : t == h ? Yas : uyn;
                return (n < 0 ? t != c : t != h) && (v |= Zas), new _wi(g, v, f);
            }
            r += u - l;
        }
        return i ? t + r : new _wi(t + r, 0, null);
    }
    touches(t, n) {
        let i = 0, r = gXc(n), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
        for(let a = 0; a < this.ranges.length; a += 3){
            let c = this.ranges[a] - (this.inverted ? i : 0);
            if (c > t) break;
            let l = this.ranges[a + s], u = c + l;
            if (t <= u && a == r * 3) return !0;
            i += this.ranges[a + o] - l;
        }
        return !1;
    }
    forEach(t) {
        let n = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
        for(let r = 0, s = 0; r < this.ranges.length; r += 3){
            let o = this.ranges[r], a = o - (this.inverted ? s : 0), c = o + (this.inverted ? 0 : s), l = this.ranges[r + n], u = this.ranges[r + i];
            t(a, a + l, c, c + u), s += u - l;
        }
    }
    invert() {
        return new Lin(this.ranges, !this.inverted);
    }
    toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    static offset(t) {
        return t == 0 ? Lin.empty : new Lin(t < 0 ? [
            0,
            -t,
            0
        ] : [
            0,
            0,
            t
        ]);
    }
}, VKe.empty = new VKe([]), Qas = class eAa {
    constructor(t, n, i = 0, r = t ? t.length : 0){
        this.mirror = n, this.from = i, this.to = r, this._maps = t || [], this.ownData = !(t || n);
    }
    get maps() {
        return this._maps;
    }
    slice(t = 0, n = this.maps.length) {
        return new eAa(this._maps, this.mirror, t, n);
    }
    appendMap(t, n) {
        this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(t), n != null && this.setMirror(this._maps.length - 1, n);
    }
    appendMapping(t) {
        for(let n = 0, i = this._maps.length; n < t._maps.length; n++){
            let r = t.getMirror(n);
            this.appendMap(t._maps[n], r != null && r < n ? i + r : void 0);
        }
    }
    getMirror(t) {
        if (this.mirror) {
            for(let n = 0; n < this.mirror.length; n++)if (this.mirror[n] == t) return this.mirror[n + (n % 2 ? -1 : 1)];
        }
    }
    setMirror(t, n) {
        this.mirror || (this.mirror = []), this.mirror.push(t, n);
    }
    appendMappingInverted(t) {
        for(let n = t.maps.length - 1, i = this._maps.length + t._maps.length; n >= 0; n--){
            let r = t.getMirror(n);
            this.appendMap(t._maps[n].invert(), r != null && r > n ? i - r - 1 : void 0);
        }
    }
    invert() {
        let t = new eAa;
        return t.appendMappingInverted(this), t;
    }
    map(t, n = 1) {
        if (this.mirror) return this._map(t, n, !0);
        for(let i = this.from; i < this.to; i++)t = this._maps[i].map(t, n);
        return t;
    }
    mapResult(t, n = 1) {
        return this._map(t, n, !1);
    }
    _map(t, n, i) {
        let r = 0;
        for(let s = this.from; s < this.to; s++){
            let o = this._maps[s], a = o.mapResult(t, n);
            if (a.recover != null) {
                let c = this.getMirror(s);
                if (c != null && c > s && c < this.to) {
                    s = c, t = this._maps[c].recover(a.recover);
                    continue;
                }
            }
            r |= a.delInfo, t = a.pos;
        }
        return i ? t : new _wi(t, r, null);
    }
}, bwi = Object.create(null), oj = class {
    getMap() {
        return VKe.empty;
    }
    merge(e) {
        return null;
    }
    static fromJSON(e, t) {
        if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let n = bwi[t.stepType];
        if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
        return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
        if (e in bwi) throw new RangeError("Duplicate use of step JSON ID " + e);
        return bwi[e] = t, t.prototype.jsonID = e, t;
    }
}, eY = class iQn {
    constructor(t, n){
        this.doc = t, this.failed = n;
    }
    static ok(t) {
        return new iQn(t, null);
    }
    static fail(t) {
        return new iQn(null, t);
    }
    static fromReplace(t, n, i, r) {
        try {
            return iQn.ok(t.replace(n, i, r));
        } catch (s) {
            if (s instanceof syn) return iQn.fail(s.message);
            throw s;
        }
    }
}, ywi = class rQn extends oj {
    constructor(t, n, i){
        super(), this.from = t, this.to = n, this.mark = i;
    }
    apply(t) {
        let n = t.slice(this.from, this.to), i = t.resolve(this.from), r = i.node(i.sharedDepth(this.to)), s = new um(Has(n.content, (o, a)=>!o.isAtom || !a.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), r), n.openStart, n.openEnd);
        return eY.fromReplace(t, this.from, this.to, s);
    }
    invert() {
        return new Ymt(this.from, this.to, this.mark);
    }
    map(t) {
        let n = t.mapResult(this.from, 1), i = t.mapResult(this.to, -1);
        return n.deleted && i.deleted || n.pos >= i.pos ? null : new rQn(n.pos, i.pos, this.mark);
    }
    merge(t) {
        return t instanceof rQn && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new rQn(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    static fromJSON(t, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new rQn(n.from, n.to, t.markFromJSON(n.mark));
    }
}, oj.jsonID("addMark", ywi), Ymt = class sQn extends oj {
    constructor(t, n, i){
        super(), this.from = t, this.to = n, this.mark = i;
    }
    apply(t) {
        let n = t.slice(this.from, this.to), i = new um(Has(n.content, (r)=>r.mark(this.mark.removeFromSet(r.marks)), t), n.openStart, n.openEnd);
        return eY.fromReplace(t, this.from, this.to, i);
    }
    invert() {
        return new ywi(this.from, this.to, this.mark);
    }
    map(t) {
        let n = t.mapResult(this.from, 1), i = t.mapResult(this.to, -1);
        return n.deleted && i.deleted || n.pos >= i.pos ? null : new sQn(n.pos, i.pos, this.mark);
    }
    merge(t) {
        return t instanceof sQn && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new sQn(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    static fromJSON(t, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new sQn(n.from, n.to, t.markFromJSON(n.mark));
    }
}, oj.jsonID("removeMark", Ymt), Swi = class oQn extends oj {
    constructor(t, n){
        super(), this.pos = t, this.mark = n;
    }
    apply(t) {
        let n = t.nodeAt(this.pos);
        if (!n) return eY.fail("No node at mark step's position");
        let i = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
        return eY.fromReplace(t, this.pos, this.pos + 1, new um(qd.from(i), 0, n.isLeaf ? 0 : 1));
    }
    invert(t) {
        let n = t.nodeAt(this.pos);
        if (n) {
            let i = this.mark.addToSet(n.marks);
            if (i.length == n.marks.length) {
                for(let r = 0; r < n.marks.length; r++)if (!n.marks[r].isInSet(i)) return new oQn(this.pos, n.marks[r]);
                return new oQn(this.pos, this.mark);
            }
        }
        return new dyn(this.pos, this.mark);
    }
    map(t) {
        let n = t.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new oQn(n.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    static fromJSON(t, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new oQn(n.pos, t.markFromJSON(n.mark));
    }
}, oj.jsonID("addNodeMark", Swi), dyn = class tAa extends oj {
    constructor(t, n){
        super(), this.pos = t, this.mark = n;
    }
    apply(t) {
        let n = t.nodeAt(this.pos);
        if (!n) return eY.fail("No node at mark step's position");
        let i = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
        return eY.fromReplace(t, this.pos, this.pos + 1, new um(qd.from(i), 0, n.isLeaf ? 0 : 1));
    }
    invert(t) {
        let n = t.nodeAt(this.pos);
        return !n || !this.mark.isInSet(n.marks) ? this : new Swi(this.pos, this.mark);
    }
    map(t) {
        let n = t.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new tAa(n.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    static fromJSON(t, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new tAa(n.pos, t.markFromJSON(n.mark));
    }
}, oj.jsonID("removeNodeMark", dyn), Cfe = class MAt extends oj {
    constructor(t, n, i, r = !1){
        super(), this.from = t, this.to = n, this.slice = i, this.structure = r;
    }
    apply(t) {
        return this.structure && Was(t, this.from, this.to) ? eY.fail("Structure replace would overwrite content") : eY.fromReplace(t, this.from, this.to, this.slice);
    }
    getMap() {
        return new VKe([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(t) {
        return new MAt(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
    }
    map(t) {
        let n = t.mapResult(this.from, 1), i = t.mapResult(this.to, -1);
        return n.deletedAcross && i.deletedAcross ? null : new MAt(n.pos, Math.max(n.pos, i.pos), this.slice, this.structure);
    }
    merge(t) {
        if (!(t instanceof MAt) || t.structure || this.structure) return null;
        if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
            let n = this.slice.size + t.slice.size == 0 ? um.empty : new um(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
            return new MAt(this.from, this.to + (t.to - t.from), n, this.structure);
        } else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
            let n = this.slice.size + t.slice.size == 0 ? um.empty : new um(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
            return new MAt(t.from, this.to, n, this.structure);
        } else return null;
    }
    toJSON() {
        let t = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
    }
    static fromJSON(t, n) {
        if (typeof n.from != "number" || typeof n.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new MAt(n.from, n.to, um.fromJSON(t, n.slice), !!n.structure);
    }
}, oj.jsonID("replace", Cfe), LJ = class C1r extends oj {
    constructor(t, n, i, r, s, o, a = !1){
        super(), this.from = t, this.to = n, this.gapFrom = i, this.gapTo = r, this.slice = s, this.insert = o, this.structure = a;
    }
    apply(t) {
        if (this.structure && (Was(t, this.from, this.gapFrom) || Was(t, this.gapTo, this.to))) return eY.fail("Structure gap-replace would overwrite content");
        let n = t.slice(this.gapFrom, this.gapTo);
        if (n.openStart || n.openEnd) return eY.fail("Gap is not a flat range");
        let i = this.slice.insertAt(this.insert, n.content);
        return i ? eY.fromReplace(t, this.from, this.to, i) : eY.fail("Content does not fit in gap");
    }
    getMap() {
        return new VKe([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(t) {
        let n = this.gapTo - this.gapFrom;
        return new C1r(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(t) {
        let n = t.mapResult(this.from, 1), i = t.mapResult(this.to, -1), r = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1), s = this.to == this.gapTo ? i.pos : t.map(this.gapTo, 1);
        return n.deletedAcross && i.deletedAcross || r < n.pos || s > i.pos ? null : new C1r(n.pos, i.pos, r, s, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
    }
    static fromJSON(t, n) {
        if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new C1r(n.from, n.to, n.gapFrom, n.gapTo, um.fromJSON(t, n.slice), n.insert, !!n.structure);
    }
}, oj.jsonID("replaceAround", LJ), TXc = class {
    constructor(e, t, n){
        this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = qd.empty;
        for(let i = 0; i <= e.depth; i++){
            let r = e.node(i);
            this.frontier.push({
                type: r.type,
                match: r.contentMatchAt(e.indexAfter(i))
            });
        }
        for(let i = e.depth; i > 0; i--)this.placed = qd.from(e.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        for(; this.unplaced.size;){
            let c = this.findFittable();
            c ? this.placeNodes(c) : this.openMore() || this.dropNode();
        }
        let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
        if (!i) return null;
        let r = this.placed, s = n.depth, o = i.depth;
        for(; s && o && r.childCount == 1;)r = r.firstChild.content, s--, o--;
        let a = new um(r, s, o);
        return e > -1 ? new LJ(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new Cfe(n.pos, i.pos, a) : null;
    }
    findFittable() {
        let e = this.unplaced.openStart;
        for(let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++){
            let r = t.firstChild;
            if (t.childCount > 1 && (i = 0), r.type.spec.isolating && i <= n) {
                e = n;
                break;
            }
            t = r.content;
        }
        for(let t = 1; t <= 2; t++)for(let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--){
            let i, r = null;
            n ? (r = jas(this.unplaced.content, n - 1).firstChild, i = r.content) : i = this.unplaced.content;
            let s = i.firstChild;
            for(let o = this.depth; o >= 0; o--){
                let { type: a, match: c } = this.frontier[o], l, u = null;
                if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(qd.from(s), !1)) : r && a.compatibleContent(r.type))) return {
                    sliceDepth: n,
                    frontierDepth: o,
                    parent: r,
                    inject: u
                };
                if (t == 2 && s && (l = c.findWrapping(s.type))) return {
                    sliceDepth: n,
                    frontierDepth: o,
                    parent: r,
                    wrap: l
                };
                if (r && c.matchType(r.type)) break;
            }
        }
    }
    openMore() {
        let { content: e, openStart: t, openEnd: n } = this.unplaced, i = jas(e, t);
        return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new um(e, t + 1, Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)), !0);
    }
    dropNode() {
        let { content: e, openStart: t, openEnd: n } = this.unplaced, i = jas(e, t);
        if (i.childCount <= 1 && t > 0) {
            let r = e.size - t <= t + i.size;
            this.unplaced = new um(cyn(e, t - 1, 1), t - 1, r ? t - 1 : n);
        } else this.unplaced = new um(cyn(e, t, 1), t, n);
    }
    placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: i, wrap: r }) {
        for(; this.depth > t;)this.closeFrontierNode();
        if (r) for(let f = 0; f < r.length; f++)this.openFrontierNode(r[f]);
        let s = this.unplaced, o = n ? n.content : s.content, a = s.openStart - e, c = 0, l = [], { match: u, type: h } = this.frontier[t];
        if (i) {
            for(let f = 0; f < i.childCount; f++)l.push(i.child(f));
            u = u.matchFragment(i);
        }
        let p = o.size + e - (s.content.size - s.openEnd);
        for(; c < o.childCount;){
            let f = o.child(c), v = u.matchType(f.type);
            if (!v) break;
            c++, (c > 1 || a == 0 || f.content.size) && (u = v, l.push(kXc(f.mark(h.allowedMarks(f.marks)), c == 1 ? a : 0, c == o.childCount ? p : -1)));
        }
        let g = c == o.childCount;
        g || (p = -1), this.placed = lyn(this.placed, t, qd.from(l)), this.frontier[t].match = u, g && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for(let f = 0, v = o; f < p; f++){
            let b = v.lastChild;
            this.frontier.push({
                type: b.type,
                match: b.contentMatchAt(b.childCount)
            }), v = b.content;
        }
        this.unplaced = g ? e == 0 ? um.empty : new um(cyn(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new um(cyn(s.content, e, c), s.openStart, s.openEnd);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let e = this.frontier[this.depth], t;
        if (!e.type.isTextblock || !qas(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
        let { depth: n } = this.$to, i = this.$to.after(n);
        for(; n > 1 && i == this.$to.end(--n);)++i;
        return i;
    }
    findCloseLevel(e) {
        e: for(let t = Math.min(this.depth, e.depth); t >= 0; t--){
            let { match: n, type: i } = this.frontier[t], r = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = qas(e, t, i, n, r);
            if (s) {
                for(let o = t - 1; o >= 0; o--){
                    let { match: a, type: c } = this.frontier[o], l = qas(e, o, c, a, !0);
                    if (!l || l.childCount) continue e;
                }
                return {
                    depth: t,
                    fit: s,
                    move: r ? e.doc.resolve(e.after(t + 1)) : e
                };
            }
        }
    }
    close(e) {
        let t = this.findCloseLevel(e);
        if (!t) return null;
        for(; this.depth > t.depth;)this.closeFrontierNode();
        t.fit.childCount && (this.placed = lyn(this.placed, t.depth, t.fit)), e = t.move;
        for(let n = t.depth + 1; n <= e.depth; n++){
            let i = e.node(n), r = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
            this.openFrontierNode(i.type, i.attrs, r);
        }
        return e;
    }
    openFrontierNode(e, t = null, n) {
        let i = this.frontier[this.depth];
        i.match = i.match.matchType(e), this.placed = lyn(this.placed, this.depth, qd.from(e.create(t, n))), this.frontier.push({
            type: e,
            match: e.contentMatch
        });
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(qd.empty, !0);
        t.childCount && (this.placed = lyn(this.placed, this.frontier.length, t));
    }
}, Jas = class T1r extends oj {
    constructor(t, n, i){
        super(), this.pos = t, this.attr = n, this.value = i;
    }
    apply(t) {
        let n = t.nodeAt(this.pos);
        if (!n) return eY.fail("No node at attribute step's position");
        let i = Object.create(null);
        for(let s in n.attrs)i[s] = n.attrs[s];
        i[this.attr] = this.value;
        let r = n.type.create(i, null, n.marks);
        return eY.fromReplace(t, this.pos, this.pos + 1, new um(qd.from(r), 0, n.isLeaf ? 0 : 1));
    }
    getMap() {
        return VKe.empty;
    }
    invert(t) {
        return new T1r(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
    }
    map(t) {
        let n = t.mapResult(this.pos, 1);
        return n.deletedAfter ? null : new T1r(n.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(t, n) {
        if (typeof n.pos != "number" || typeof n.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new T1r(n.pos, n.attr, n.value);
    }
}, oj.jsonID("attr", Jas), ecs = class nAa extends oj {
    constructor(t, n){
        super(), this.attr = t, this.value = n;
    }
    apply(t) {
        let n = Object.create(null);
        for(let r in t.attrs)n[r] = t.attrs[r];
        n[this.attr] = this.value;
        let i = t.type.create(n, t.content, t.marks);
        return eY.ok(i);
    }
    getMap() {
        return VKe.empty;
    }
    invert(t) {
        return new nAa(this.attr, t.attrs[this.attr]);
    }
    map(t) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(t, n) {
        if (typeof n.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new nAa(n.attr, n.value);
    }
}, oj.jsonID("docAttr", ecs), Xmt = class extends Error {
}, Xmt = function e(t) {
    let n = Error.call(this, t);
    return n.__proto__ = e.prototype, n;
}, Xmt.prototype = Object.create(Error.prototype), Xmt.prototype.constructor = Xmt, Xmt.prototype.name = "TransformError", kwi = class {
    constructor(e){
        this.doc = e, this.steps = [], this.docs = [], this.mapping = new Qas;
    }
    get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    step(e) {
        let t = this.maybeStep(e);
        if (t.failed) throw new Xmt(t.failed);
        return this;
    }
    maybeStep(e) {
        let t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc), t;
    }
    get docChanged() {
        return this.steps.length > 0;
    }
    addStep(e, t) {
        this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
    }
    replace(e, t = e, n = um.empty) {
        let i = vwi(this.doc, e, t, n);
        return i && this.step(i), this;
    }
    replaceWith(e, t, n) {
        return this.replace(e, t, new um(qd.from(n), 0, 0));
    }
    delete(e, t) {
        return this.replace(e, t, um.empty);
    }
    insert(e, t) {
        return this.replaceWith(e, e, t);
    }
    replaceRange(e, t, n) {
        return EEg(this, e, t, n), this;
    }
    replaceRangeWith(e, t, n) {
        return xEg(this, e, t, n), this;
    }
    deleteRange(e, t) {
        return IEg(this, e, t), this;
    }
    lift(e, t) {
        return pEg(this, e, t), this;
    }
    join(e, t = 1) {
        return kEg(this, e, t), this;
    }
    wrap(e, t) {
        return fEg(this, e, t), this;
    }
    setBlockType(e, t = e, n, i = null) {
        return vEg(this, e, t, n, i), this;
    }
    setNodeMarkup(e, t, n = null, i) {
        return bEg(this, e, t, n, i), this;
    }
    setNodeAttribute(e, t, n) {
        return this.step(new Jas(e, t, n)), this;
    }
    setDocAttribute(e, t) {
        return this.step(new ecs(e, t)), this;
    }
    addNodeMark(e, t) {
        return this.step(new Swi(e, t)), this;
    }
    removeNodeMark(e, t) {
        let n = this.doc.nodeAt(e);
        if (!n) throw new RangeError("No node at position " + e);
        if (t instanceof IM) t.isInSet(n.marks) && this.step(new dyn(e, t));
        else {
            let i = n.marks, r, s = [];
            for(; r = t.isInSet(i);)s.push(new dyn(e, r)), i = r.removeFromSet(i);
            for(let o = s.length - 1; o >= 0; o--)this.step(s[o]);
        }
        return this;
    }
    split(e, t = 1, n) {
        return yEg(this, e, t, n), this;
    }
    addMark(e, t, n) {
        return uEg(this, e, t, n), this;
    }
    removeMark(e, t, n) {
        return dEg(this, e, t, n), this;
    }
    clearIncompatible(e, t, n) {
        return Gas(this, e, t, n), this;
    }
};

}
