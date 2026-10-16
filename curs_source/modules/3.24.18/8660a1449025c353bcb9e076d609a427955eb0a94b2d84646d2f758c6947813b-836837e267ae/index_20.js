import { AQd, C6y, DQd, EQd, IQd, MKo, MQd, NQd, PQd, RQd, S6y, SQd, T6y, _6y, b6y, cxr, d6y, dxr, fQd, fne, gQd, k6y, kQd, lxr, mQd, vQd, w6y, xQd, y6y } from "./LYd.js";
import { u6y } from "./index_19.js";
import { E } from "./tslib.es6.js";
var Up, hxr, SO, Sai, Df, DKo, LQd, OQd, NKo, kai, FQd, UHe, BQd, s_n, UQd, LKo, jQd, OKo, FKo, c8t, BKo, $Qd, UKo, o_n, pxr, a_n, wai, jKo, l_n, $Ko;
export { $Ko, $Qd, BKo, BQd, DKo, Df, FKo, FQd, LKo, LQd, NKo, OKo, OQd, SO, Sai, UHe, UKo, UQd, Up, a_n, c8t, hxr, jKo, jQd, kai, l_n, o_n, pxr, s_n, wai };
var __wakaru_$5e_initialized = false;
export function $5e() {
if (__wakaru_$5e_initialized) return;
__wakaru_$5e_initialized = true;
E(), u6y(), Up = class Jge {
    constructor(e, n){
        if (this.content = e, this.size = n || 0, n == null) for(let i = 0; i < e.length; i++)this.size += e[i].nodeSize;
    }
    nodesBetween(e, n, i, r = 0, s) {
        for(let o = 0, a = 0; a < n; o++){
            let l = this.content[o], c = a + l.nodeSize;
            if (c > e && i(l, r + a, s || null, o) !== !1 && l.content.size) {
                let u = a + 1;
                l.nodesBetween(Math.max(0, e - u), Math.min(l.content.size, n - u), i, r + u);
            }
            a = c;
        }
    }
    descendants(e) {
        this.nodesBetween(0, this.size, e);
    }
    textBetween(e, n, i, r) {
        let s = "", o = !0;
        return this.nodesBetween(e, n, (a, l)=>{
            let c = a.isText ? a.text.slice(Math.max(e, l) - l, n - l) : a.isLeaf ? r ? typeof r == "function" ? r(a) : r : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
            a.isBlock && (a.isLeaf && c || a.isTextblock) && i && (o ? o = !1 : s += i), s += c;
        }, 0), s;
    }
    append(e) {
        if (!e.size) return this;
        if (!this.size) return e;
        let n = this.lastChild, i = e.firstChild, r = this.content.slice(), s = 0;
        for(n.isText && n.sameMarkup(i) && (r[r.length - 1] = n.withText(n.text + i.text), s = 1); s < e.content.length; s++)r.push(e.content[s]);
        return new Jge(r, this.size + e.size);
    }
    cut(e, n = this.size) {
        if (e == 0 && n == this.size) return this;
        let i = [], r = 0;
        if (n > e) for(let s = 0, o = 0; o < n; s++){
            let a = this.content[s], l = o + a.nodeSize;
            l > e && ((o < e || l > n) && (a.isText ? a = a.cut(Math.max(0, e - o), Math.min(a.text.length, n - o)) : a = a.cut(Math.max(0, e - o - 1), Math.min(a.content.size, n - o - 1))), i.push(a), r += a.nodeSize), o = l;
        }
        return new Jge(i, r);
    }
    cutByIndex(e, n) {
        return e == n ? Jge.empty : e == 0 && n == this.content.length ? this : new Jge(this.content.slice(e, n));
    }
    replaceChild(e, n) {
        let i = this.content[e];
        if (i == n) return this;
        let r = this.content.slice(), s = this.size + n.nodeSize - i.nodeSize;
        return r[e] = n, new Jge(r, s);
    }
    addToStart(e) {
        return new Jge([
            e
        ].concat(this.content), this.size + e.nodeSize);
    }
    addToEnd(e) {
        return new Jge(this.content.concat(e), this.size + e.nodeSize);
    }
    eq(e) {
        if (this.content.length != e.content.length) return !1;
        for(let n = 0; n < this.content.length; n++)if (!this.content[n].eq(e.content[n])) return !1;
        return !0;
    }
    get firstChild() {
        return this.content.length ? this.content[0] : null;
    }
    get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }
    get childCount() {
        return this.content.length;
    }
    child(e) {
        let n = this.content[e];
        if (!n) throw new RangeError("Index " + e + " out of range for " + this);
        return n;
    }
    maybeChild(e) {
        return this.content[e] || null;
    }
    forEach(e) {
        for(let n = 0, i = 0; n < this.content.length; n++){
            let r = this.content[n];
            e(r, i, n), i += r.nodeSize;
        }
    }
    findDiffStart(e, n = 0) {
        return mQd(this, e, n);
    }
    findDiffEnd(e, n = this.size, i = e.size) {
        return gQd(this, e, n, i);
    }
    findIndex(e, n = -1) {
        if (e == 0) return lxr(0, e);
        if (e == this.size) return lxr(this.content.length, e);
        if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for(let i = 0, r = 0;; i++){
            let s = this.child(i), o = r + s.nodeSize;
            if (o >= e) return o == e || n > 0 ? lxr(i + 1, o) : lxr(i, r);
            r = o;
        }
    }
    toString() {
        return "<" + this.toStringInner() + ">";
    }
    toStringInner() {
        return this.content.join(", ");
    }
    toJSON() {
        return this.content.length ? this.content.map((e)=>e.toJSON()) : null;
    }
    static fromJSON(e, n) {
        if (!n) return Jge.empty;
        if (!Array.isArray(n)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new Jge(n.map(e.nodeFromJSON));
    }
    static fromArray(e) {
        if (!e.length) return Jge.empty;
        let n, i = 0;
        for(let r = 0; r < e.length; r++){
            let s = e[r];
            i += s.nodeSize, r && s.isText && e[r - 1].sameMarkup(s) ? (n || (n = e.slice(0, r)), n[n.length - 1] = s.withText(n[n.length - 1].text + s.text)) : n && n.push(s);
        }
        return new Jge(n || e, i);
    }
    static from(e) {
        if (!e) return Jge.empty;
        if (e instanceof Jge) return e;
        if (Array.isArray(e)) return this.fromArray(e);
        if (e.attrs) return new Jge([
            e
        ], e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}, Up.empty = new Up([], 0), hxr = {
    index: 0,
    offset: 0
}, SO = class DJc {
    constructor(e, n){
        this.type = e, this.attrs = n;
    }
    addToSet(e) {
        let n, i = !1;
        for(let r = 0; r < e.length; r++){
            let s = e[r];
            if (this.eq(s)) return e;
            if (this.type.excludes(s.type)) n || (n = e.slice(0, r));
            else {
                if (s.type.excludes(this.type)) return e;
                !i && s.type.rank > this.type.rank && (n || (n = e.slice(0, r)), n.push(this), i = !0), n && n.push(s);
            }
        }
        return n || (n = e.slice()), i || n.push(this), n;
    }
    removeFromSet(e) {
        for(let n = 0; n < e.length; n++)if (this.eq(e[n])) return e.slice(0, n).concat(e.slice(n + 1));
        return e;
    }
    isInSet(e) {
        for(let n = 0; n < e.length; n++)if (this.eq(e[n])) return !0;
        return !1;
    }
    eq(e) {
        return this == e || this.type == e.type && cxr(this.attrs, e.attrs);
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for(let n in this.attrs){
            e.attrs = this.attrs;
            break;
        }
        return e;
    }
    static fromJSON(e, n) {
        if (!n) throw new RangeError("Invalid input for Mark.fromJSON");
        let i = e.marks[n.type];
        if (!i) throw new RangeError(`There is no mark type ${n.type} in this schema`);
        let r = i.create(n.attrs);
        return i.checkAttrs(r.attrs), r;
    }
    static sameSet(e, n) {
        if (e == n) return !0;
        if (e.length != n.length) return !1;
        for(let i = 0; i < e.length; i++)if (!e[i].eq(n[i])) return !1;
        return !0;
    }
    static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0) return DJc.none;
        if (e instanceof DJc) return [
            e
        ];
        let n = e.slice();
        return n.sort((i, r)=>i.type.rank - r.type.rank), n;
    }
}, SO.none = [], Sai = class extends Error {
}, Df = class i$n {
    constructor(e, n, i){
        this.content = e, this.openStart = n, this.openEnd = i;
    }
    get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(e, n) {
        let i = vQd(this.content, e + this.openStart, n);
        return i && new i$n(i, this.openStart, this.openEnd);
    }
    removeBetween(e, n) {
        return new i$n(fQd(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
    }
    eq(e) {
        return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
    }
    toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    toJSON() {
        if (!this.content.size) return null;
        let e = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
    }
    static fromJSON(e, n) {
        if (!n) return i$n.empty;
        let i = n.openStart || 0, r = n.openEnd || 0;
        if (typeof i != "number" || typeof r != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new i$n(Up.fromJSON(e, n.content), i, r);
    }
    static maxOpen(e, n = !0) {
        let i = 0, r = 0;
        for(let s = e.firstChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.firstChild)i++;
        for(let s = e.lastChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.lastChild)r++;
        return new i$n(e, i, r);
    }
}, Df.empty = new Df(Up.empty, 0, 0), DKo = class NJc {
    constructor(e, n, i){
        this.pos = e, this.path = n, this.parentOffset = i, this.depth = n.length / 3 - 1;
    }
    resolveDepth(e) {
        return e == null ? this.depth : e < 0 ? this.depth + e : e;
    }
    get parent() {
        return this.node(this.depth);
    }
    get doc() {
        return this.node(0);
    }
    node(e) {
        return this.path[this.resolveDepth(e) * 3];
    }
    index(e) {
        return this.path[this.resolveDepth(e) * 3 + 1];
    }
    indexAfter(e) {
        return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
    }
    start(e) {
        return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
    }
    end(e) {
        return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
    }
    before(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position before the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
    }
    after(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position after the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
    }
    get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
        let e = this.parent, n = this.index(this.depth);
        if (n == e.childCount) return null;
        let i = this.pos - this.path[this.path.length - 1], r = e.child(n);
        return i ? e.child(n).cut(i) : r;
    }
    get nodeBefore() {
        let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
        return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
    }
    posAtIndex(e, n) {
        n = this.resolveDepth(n);
        let i = this.path[n * 3], r = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
        for(let s = 0; s < e; s++)r += i.child(s).nodeSize;
        return r;
    }
    marks() {
        let e = this.parent, n = this.index();
        if (e.content.size == 0) return SO.none;
        if (this.textOffset) return e.child(n).marks;
        let i = e.maybeChild(n - 1), r = e.maybeChild(n);
        if (!i) {
            let a = i;
            i = r, r = a;
        }
        let s = i.marks;
        for(var o = 0; o < s.length; o++)s[o].type.spec.inclusive === !1 && (!r || !s[o].isInSet(r.marks)) && (s = s[o--].removeFromSet(s));
        return s;
    }
    marksAcross(e) {
        let n = this.parent.maybeChild(this.index());
        if (!n || !n.isInline) return null;
        let i = n.marks, r = e.parent.maybeChild(e.index());
        for(var s = 0; s < i.length; s++)i[s].type.spec.inclusive === !1 && (!r || !i[s].isInSet(r.marks)) && (i = i[s--].removeFromSet(i));
        return i;
    }
    sharedDepth(e) {
        for(let n = this.depth; n > 0; n--)if (this.start(n) <= e && this.end(n) >= e) return n;
        return 0;
    }
    blockRange(e = this, n) {
        if (e.pos < this.pos) return e.blockRange(this);
        for(let i = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); i >= 0; i--)if (e.pos <= this.end(i) && (!n || n(this.node(i)))) return new kai(this, e, i);
        return null;
    }
    sameParent(e) {
        return this.pos - this.parentOffset == e.pos - e.parentOffset;
    }
    max(e) {
        return e.pos > this.pos ? e : this;
    }
    min(e) {
        return e.pos < this.pos ? e : this;
    }
    toString() {
        let e = "";
        for(let n = 1; n <= this.depth; n++)e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
        return e + ":" + this.parentOffset;
    }
    static resolve(e, n) {
        if (!(n >= 0 && n <= e.content.size)) throw new RangeError("Position " + n + " out of range");
        let i = [], r = 0, s = n;
        for(let o = e;;){
            let { index: a, offset: l } = o.content.findIndex(s), c = s - l;
            if (i.push(o, a, r + l), !c || (o = o.child(a), o.isText)) break;
            s = c - 1, r += l + 1;
        }
        return new NJc(n, i, s);
    }
    static resolveCached(e, n) {
        let i = NKo.get(e);
        if (i) for(let s = 0; s < i.elts.length; s++){
            let o = i.elts[s];
            if (o.pos == n) return o;
        }
        else NKo.set(e, i = new LQd);
        let r = i.elts[i.i] = NJc.resolve(e, n);
        return i.i = (i.i + 1) % OQd, r;
    }
}, LQd = class {
    constructor(){
        this.elts = [], this.i = 0;
    }
}, OQd = 12, NKo = new WeakMap, kai = class {
    constructor(t, e, n){
        this.$from = t, this.$to = e, this.depth = n;
    }
    get start() {
        return this.$from.before(this.depth + 1);
    }
    get end() {
        return this.$to.after(this.depth + 1);
    }
    get parent() {
        return this.$from.node(this.depth);
    }
    get startIndex() {
        return this.$from.index(this.depth);
    }
    get endIndex() {
        return this.$to.indexAfter(this.depth);
    }
}, FQd = Object.create(null), UHe = class LJc {
    constructor(e, n, i, r = SO.none){
        this.type = e, this.attrs = n, this.marks = r, this.content = i || Up.empty;
    }
    get children() {
        return this.content.content;
    }
    get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }
    get childCount() {
        return this.content.childCount;
    }
    child(e) {
        return this.content.child(e);
    }
    maybeChild(e) {
        return this.content.maybeChild(e);
    }
    forEach(e) {
        this.content.forEach(e);
    }
    nodesBetween(e, n, i, r = 0) {
        this.content.nodesBetween(e, n, i, r, this);
    }
    descendants(e) {
        this.nodesBetween(0, this.content.size, e);
    }
    get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    textBetween(e, n, i, r) {
        return this.content.textBetween(e, n, i, r);
    }
    get firstChild() {
        return this.content.firstChild;
    }
    get lastChild() {
        return this.content.lastChild;
    }
    eq(e) {
        return this == e || this.sameMarkup(e) && this.content.eq(e.content);
    }
    sameMarkup(e) {
        return this.hasMarkup(e.type, e.attrs, e.marks);
    }
    hasMarkup(e, n, i) {
        return this.type == e && cxr(this.attrs, n || e.defaultAttrs || FQd) && SO.sameSet(this.marks, i || SO.none);
    }
    copy(e = null) {
        return e == this.content ? this : new LJc(this.type, this.attrs, e, this.marks);
    }
    mark(e) {
        return e == this.marks ? this : new LJc(this.type, this.attrs, this.content, e);
    }
    cut(e, n = this.content.size) {
        return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
    }
    slice(e, n = this.content.size, i = !1) {
        if (e == n) return Df.empty;
        let r = this.resolve(e), s = this.resolve(n), o = i ? 0 : r.sharedDepth(n), a = r.start(o), c = r.node(o).content.cut(r.pos - a, s.pos - a);
        return new Df(c, r.depth - o, s.depth - o);
    }
    replace(e, n, i) {
        return d6y(this.resolve(e), this.resolve(n), i);
    }
    nodeAt(e) {
        for(let n = this;;){
            let { index: i, offset: r } = n.content.findIndex(e);
            if (n = n.maybeChild(i), !n) return null;
            if (r == e || n.isText) return n;
            e -= r + 1;
        }
    }
    childAfter(e) {
        let { index: n, offset: i } = this.content.findIndex(e);
        return {
            node: this.content.maybeChild(n),
            index: n,
            offset: i
        };
    }
    childBefore(e) {
        if (e == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index: n, offset: i } = this.content.findIndex(e);
        if (i < e) return {
            node: this.content.child(n),
            index: n,
            offset: i
        };
        let r = this.content.child(n - 1);
        return {
            node: r,
            index: n - 1,
            offset: i - r.nodeSize
        };
    }
    resolve(e) {
        return DKo.resolveCached(this, e);
    }
    resolveNoCache(e) {
        return DKo.resolve(this, e);
    }
    rangeHasMark(e, n, i) {
        let r = !1;
        return n > e && this.nodesBetween(e, n, (s)=>(i.isInSet(s.marks) && (r = !0), !r)), r;
    }
    get isBlock() {
        return this.type.isBlock;
    }
    get isTextblock() {
        return this.type.isTextblock;
    }
    get inlineContent() {
        return this.type.inlineContent;
    }
    get isInline() {
        return this.type.isInline;
    }
    get isText() {
        return this.type.isText;
    }
    get isLeaf() {
        return this.type.isLeaf;
    }
    get isAtom() {
        return this.type.isAtom;
    }
    toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let e = this.type.name;
        return this.content.size && (e += "(" + this.content.toStringInner() + ")"), SQd(this.marks, e);
    }
    contentMatchAt(e) {
        let n = this.type.contentMatch.matchFragment(this.content, 0, e);
        if (!n) throw new Error("Called contentMatchAt on a node with invalid content");
        return n;
    }
    canReplace(e, n, i = Up.empty, r = 0, s = i.childCount) {
        let o = this.contentMatchAt(e).matchFragment(i, r, s), a = o && o.matchFragment(this.content, n);
        if (!a || !a.validEnd) return !1;
        for(let l = r; l < s; l++)if (!this.type.allowsMarks(i.child(l).marks)) return !1;
        return !0;
    }
    canReplaceWith(e, n, i, r) {
        if (r && !this.type.allowsMarks(r)) return !1;
        let s = this.contentMatchAt(e).matchType(i), o = s && s.matchFragment(this.content, n);
        return o ? o.validEnd : !1;
    }
    canAppend(e) {
        return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
    }
    check() {
        this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
        let e = SO.none;
        for(let n = 0; n < this.marks.length; n++){
            let i = this.marks[n];
            i.type.checkAttrs(i.attrs), e = i.addToSet(e);
        }
        if (!SO.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n)=>n.type.name)}`);
        this.content.forEach((n)=>n.check());
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for(let n in this.attrs){
            e.attrs = this.attrs;
            break;
        }
        return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n)=>n.toJSON())), e;
    }
    static fromJSON(e, n) {
        if (!n) throw new RangeError("Invalid input for Node.fromJSON");
        let i;
        if (n.marks) {
            if (!Array.isArray(n.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            i = n.marks.map(e.markFromJSON);
        }
        if (n.type == "text") {
            if (typeof n.text != "string") throw new RangeError("Invalid text node in JSON");
            return e.text(n.text, i);
        }
        let r = Up.fromJSON(e, n.content), s = e.nodeType(n.type).create(n.attrs, r, i);
        return s.type.checkAttrs(s.attrs), s;
    }
}, UHe.prototype.text = void 0, BQd = class OJc extends UHe {
    constructor(e, n, i, r){
        if (super(e, n, null, r), !i) throw new RangeError("Empty text nodes are not allowed");
        this.text = i;
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : SQd(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(e, n) {
        return this.text.slice(e, n);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(e) {
        return e == this.marks ? this : new OJc(this.type, this.attrs, this.text, e);
    }
    withText(e) {
        return e == this.text ? this : new OJc(this.type, this.attrs, e, this.marks);
    }
    cut(e = 0, n = this.text.length) {
        return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text;
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text, e;
    }
}, s_n = class WRb {
    constructor(e){
        this.validEnd = e, this.next = [], this.wrapCache = [];
    }
    static parse(e, n) {
        let i = new UQd(e, n);
        if (i.next == null) return WRb.empty;
        let r = kQd(i);
        i.next && i.err("Unexpected trailing text");
        let s = b6y(_6y(r));
        return y6y(s, i), s;
    }
    matchType(e) {
        for(let n = 0; n < this.next.length; n++)if (this.next[n].type == e) return this.next[n].next;
        return null;
    }
    matchFragment(e, n = 0, i = e.childCount) {
        let r = this;
        for(let s = n; r && s < i; s++)r = r.matchType(e.child(s).type);
        return r;
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    get defaultType() {
        for(let e = 0; e < this.next.length; e++){
            let { type: n } = this.next[e];
            if (!(n.isText || n.hasRequiredAttrs())) return n;
        }
        return null;
    }
    compatible(e) {
        for(let n = 0; n < this.next.length; n++)for(let i = 0; i < e.next.length; i++)if (this.next[n].type == e.next[i].type) return !0;
        return !1;
    }
    fillBefore(e, n = !1, i = 0) {
        let r = [
            this
        ];
        function s(o, a) {
            let l = o.matchFragment(e, i);
            if (l && (!n || l.validEnd)) return Up.from(a.map((c)=>c.createAndFill()));
            for(let c = 0; c < o.next.length; c++){
                let { type: u, next: d } = o.next[c];
                if (!(u.isText || u.hasRequiredAttrs()) && r.indexOf(d) == -1) {
                    r.push(d);
                    let h = s(d, a.concat(u));
                    if (h) return h;
                }
            }
            return null;
        }
        return s(this, []);
    }
    findWrapping(e) {
        for(let i = 0; i < this.wrapCache.length; i += 2)if (this.wrapCache[i] == e) return this.wrapCache[i + 1];
        let n = this.computeWrapping(e);
        return this.wrapCache.push(e, n), n;
    }
    computeWrapping(e) {
        let n = Object.create(null), i = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        for(; i.length;){
            let r = i.shift(), s = r.match;
            if (s.matchType(e)) {
                let o = [];
                for(let a = r; a.type; a = a.via)o.push(a.type);
                return o.reverse();
            }
            for(let o = 0; o < s.next.length; o++){
                let { type: a, next: l } = s.next[o];
                !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!r.type || l.validEnd) && (i.push({
                    match: a.contentMatch,
                    type: a,
                    via: r
                }), n[a.name] = !0);
            }
        }
        return null;
    }
    get edgeCount() {
        return this.next.length;
    }
    edge(e) {
        if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e];
    }
    toString() {
        let e = [];
        function n(i) {
            e.push(i);
            for(let r = 0; r < i.next.length; r++)e.indexOf(i.next[r].next) == -1 && n(i.next[r].next);
        }
        return n(this), e.map((i, r)=>{
            let s = r + (i.validEnd ? "*" : " ") + " ";
            for(let o = 0; o < i.next.length; o++)s += (o ? ", " : "") + i.next[o].type.name + "->" + e.indexOf(i.next[o].next);
            return s;
        }).join(`
`);
    }
}, s_n.empty = new s_n(!0), UQd = class {
    constructor(t, e){
        this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(t) {
        return this.next == t && (this.pos++ || !0);
    }
    err(t) {
        throw new SyntaxError(t + " (in content expression '" + this.string + "')");
    }
}, LKo = class GRb {
    constructor(e, n, i){
        this.name = e, this.schema = n, this.spec = i, this.markSet = null, this.groups = i.group ? i.group.split(" ") : [], this.attrs = AQd(e, i.attrs), this.defaultAttrs = EQd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(i.inline || e == "text"), this.isText = e == "text";
    }
    get isInline() {
        return !this.isBlock;
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    get isLeaf() {
        return this.contentMatch == s_n.empty;
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    isInGroup(e) {
        return this.groups.indexOf(e) > -1;
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    hasRequiredAttrs() {
        for(let e in this.attrs)if (this.attrs[e].isRequired) return !0;
        return !1;
    }
    compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch);
    }
    computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : IQd(this.attrs, e);
    }
    create(e = null, n, i) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new UHe(this, this.computeAttrs(e), Up.from(n), SO.setFrom(i));
    }
    createChecked(e = null, n, i) {
        return n = Up.from(n), this.checkContent(n), new UHe(this, this.computeAttrs(e), n, SO.setFrom(i));
    }
    createAndFill(e = null, n, i) {
        if (e = this.computeAttrs(e), n = Up.from(n), n.size) {
            let o = this.contentMatch.fillBefore(n);
            if (!o) return null;
            n = o.append(n);
        }
        let r = this.contentMatch.matchFragment(n), s = r && r.fillBefore(Up.empty, !0);
        return s ? new UHe(this, e, n.append(s), SO.setFrom(i)) : null;
    }
    validContent(e) {
        let n = this.contentMatch.matchFragment(e);
        if (!n || !n.validEnd) return !1;
        for(let i = 0; i < e.childCount; i++)if (!this.allowsMarks(e.child(i).marks)) return !1;
        return !0;
    }
    checkContent(e) {
        if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
    }
    checkAttrs(e) {
        xQd(this.attrs, e, "node", this.name);
    }
    allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1;
    }
    allowsMarks(e) {
        if (this.markSet == null) return !0;
        for(let n = 0; n < e.length; n++)if (!this.allowsMarkType(e[n].type)) return !1;
        return !0;
    }
    allowedMarks(e) {
        if (this.markSet == null) return e;
        let n;
        for(let i = 0; i < e.length; i++)this.allowsMarkType(e[i].type) ? n && n.push(e[i]) : n || (n = e.slice(0, i));
        return n ? n.length ? n : SO.none : e;
    }
    static compile(e, n) {
        let i = Object.create(null);
        e.forEach((s, o)=>i[s] = new GRb(s, n, o));
        let r = n.spec.topNode || "doc";
        if (!i[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
        if (!i.text) throw new RangeError("Every schema needs a 'text' type");
        for(let s in i.text.attrs)throw new RangeError("The text node type should not have attributes");
        return i;
    }
}, jQd = class {
    constructor(t, e, n){
        this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? S6y(t, e, n.validate) : n.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}, OKo = class qRb {
    constructor(e, n, i, r){
        this.name = e, this.rank = n, this.schema = i, this.spec = r, this.attrs = AQd(e, r.attrs), this.excluded = null;
        let s = EQd(this.attrs);
        this.instance = s ? new SO(this, s) : null;
    }
    create(e = null) {
        return !e && this.instance ? this.instance : new SO(this, IQd(this.attrs, e));
    }
    static compile(e, n) {
        let i = Object.create(null), r = 0;
        return e.forEach((s, o)=>i[s] = new qRb(s, r++, n, o)), i;
    }
    removeFromSet(e) {
        for(var n = 0; n < e.length; n++)e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
        return e;
    }
    isInSet(e) {
        for(let n = 0; n < e.length; n++)if (e[n].type == this) return e[n];
    }
    checkAttrs(e) {
        xQd(this.attrs, e, "mark", this.name);
    }
    excludes(e) {
        return this.excluded.indexOf(e) > -1;
    }
}, FKo = class {
    constructor(t){
        this.linebreakReplacement = null, this.cached = Object.create(null);
        let e = this.spec = {};
        for(let i in t)e[i] = t[i];
        e.nodes = fne.from(t.nodes), e.marks = fne.from(t.marks || {}), this.nodes = LKo.compile(this.spec.nodes, this), this.marks = OKo.compile(this.spec.marks, this);
        let n = Object.create(null);
        for(let i in this.nodes){
            if (i in this.marks) throw new RangeError(i + " can not be both a node and a mark");
            let r = this.nodes[i], s = r.spec.content || "", o = r.spec.marks;
            if (r.contentMatch = n[s] || (n[s] = s_n.parse(s, this.nodes)), r.inlineContent = r.contentMatch.inlineContent, r.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!r.isInline || !r.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = r;
            }
            r.markSet = o == "_" ? null : o ? RQd(this, o.split(" ")) : o == "" || !r.inlineContent ? [] : null;
        }
        for(let i in this.marks){
            let r = this.marks[i], s = r.spec.excludes;
            r.excluded = s == null ? [
                r
            ] : s == "" ? [] : RQd(this, s.split(" "));
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
    }
    node(t, e = null, n, i) {
        if (typeof t == "string") t = this.nodeType(t);
        else if (t instanceof LKo) {
            if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")");
        } else throw new RangeError("Invalid node type: " + t);
        return t.createChecked(e, n, i);
    }
    text(t, e) {
        let n = this.nodes.text;
        return new BQd(n, n.defaultAttrs, t, SO.setFrom(e));
    }
    mark(t, e) {
        return typeof t == "string" && (t = this.marks[t]), t.create(e);
    }
    nodeFromJSON(t) {
        return UHe.fromJSON(this, t);
    }
    markFromJSON(t) {
        return SO.fromJSON(this, t);
    }
    nodeType(t) {
        let e = this.nodes[t];
        if (!e) throw new RangeError("Unknown node type: " + t);
        return e;
    }
}, c8t = class FJc {
    constructor(e, n){
        this.schema = e, this.rules = n, this.tags = [], this.styles = [];
        let i = this.matchedStyles = [];
        n.forEach((r)=>{
            if (k6y(r)) this.tags.push(r);
            else if (w6y(r)) {
                let s = /[^=]*/.exec(r.style)[0];
                i.indexOf(s) < 0 && i.push(s), this.styles.push(r);
            }
        }), this.normalizeLists = !this.tags.some((r)=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return !1;
            let s = e.nodes[r.node];
            return s.contentMatch.matchType(s);
        });
    }
    parse(e, n = {}) {
        let i = new jKo(this, n, !1);
        return i.addAll(e, SO.none, n.from, n.to), i.finish();
    }
    parseSlice(e, n = {}) {
        let i = new jKo(this, n, !0);
        return i.addAll(e, SO.none, n.from, n.to), Df.maxOpen(i.finish());
    }
    matchTag(e, n, i) {
        for(let r = i ? this.tags.indexOf(i) + 1 : 0; r < this.tags.length; r++){
            let s = this.tags[r];
            if (T6y(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
                if (s.getAttrs) {
                    let o = s.getAttrs(e);
                    if (o === !1) continue;
                    s.attrs = o || void 0;
                }
                return s;
            }
        }
    }
    matchStyle(e, n, i, r) {
        for(let s = r ? this.styles.indexOf(r) + 1 : 0; s < this.styles.length; s++){
            let o = this.styles[s], a = o.style;
            if (!(a.indexOf(e) != 0 || o.context && !i.matchesContext(o.context) || a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != n))) {
                if (o.getAttrs) {
                    let l = o.getAttrs(n);
                    if (l === !1) continue;
                    o.attrs = l || void 0;
                }
                return o;
            }
        }
    }
    static schemaRules(e) {
        let n = [];
        function i(r) {
            let s = r.priority == null ? 50 : r.priority, o = 0;
            for(; o < n.length; o++){
                let a = n[o];
                if ((a.priority == null ? 50 : a.priority) < s) break;
            }
            n.splice(o, 0, r);
        }
        for(let r in e.marks){
            let s = e.marks[r].spec.parseDOM;
            s && s.forEach((o)=>{
                i(o = MQd(o)), o.mark || o.ignore || o.clearMark || (o.mark = r);
            });
        }
        for(let r in e.nodes){
            let s = e.nodes[r].spec.parseDOM;
            s && s.forEach((o)=>{
                i(o = MQd(o)), o.node || o.ignore || o.mark || (o.node = r);
            });
        }
        return n;
    }
    static fromSchema(e) {
        return e.cached.domParser || (e.cached.domParser = new FJc(e, FJc.schemaRules(e)));
    }
}, BKo = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
}, $Qd = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
}, UKo = {
    ol: !0,
    ul: !0
}, o_n = 1, pxr = 2, a_n = 4, wai = class {
    constructor(t, e, n, i, r, s){
        this.type = t, this.attrs = e, this.marks = n, this.solid = i, this.options = s, this.content = [], this.activeMarks = SO.none, this.match = r || (s & a_n ? null : t.contentMatch);
    }
    findWrapping(t) {
        if (!this.match) {
            if (!this.type) return [];
            let e = this.type.contentMatch.fillBefore(Up.from(t));
            if (e) this.match = this.type.contentMatch.matchFragment(e);
            else {
                let n = this.type.contentMatch, i;
                return (i = n.findWrapping(t.type)) ? (this.match = n, i) : null;
            }
        }
        return this.match.findWrapping(t.type);
    }
    finish(t) {
        if (!(this.options & o_n)) {
            let n = this.content[this.content.length - 1], i;
            if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
                let r = n;
                n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = r.withText(r.text.slice(0, r.text.length - i[0].length));
            }
        }
        let e = Up.from(this.content);
        return !t && this.match && (e = e.append(this.match.fillBefore(Up.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e;
    }
    inlineContext(t) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !BKo.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
    }
}, jKo = class {
    constructor(t, e, n){
        this.parser = t, this.options = e, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
        let i = e.topNode, r, s = PQd(null, e.preserveWhitespace, 0) | (n ? a_n : 0);
        i ? r = new wai(i.type, i.attrs, SO.none, !0, e.topMatch || i.type.contentMatch, s) : n ? r = new wai(null, null, SO.none, !0, null, s) : r = new wai(t.schema.topNodeType, null, SO.none, !0, null, s), this.nodes = [
            r
        ], this.find = e.findPositions, this.needsBlock = !1;
    }
    get top() {
        return this.nodes[this.open];
    }
    addDOM(t, e) {
        t.nodeType == 3 ? this.addTextNode(t, e) : t.nodeType == 1 && this.addElement(t, e);
    }
    addTextNode(t, e) {
        let n = t.nodeValue, i = this.top, r = i.options & pxr ? "full" : this.localPreserveWS || (i.options & o_n) > 0;
        if (r === "full" || i.inlineContext(t) || /[^ \t\r\n\u000c]/.test(n)) {
            if (r) r !== "full" ? n = n.replace(/\r?\n|\r/g, " ") : n = n.replace(/\r\n?/g, `
`);
            else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
                let s = i.content[i.content.length - 1], o = t.previousSibling;
                (!s || o && o.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (n = n.slice(1));
            }
            n && this.insertNode(this.parser.schema.text(n), e, !/\S/.test(n)), this.findInText(t);
        } else this.findInside(t);
    }
    addElement(t, e, n) {
        let i = this.localPreserveWS, r = this.top;
        (t.tagName == "PRE" || /pre/.test(t.style && t.style.whiteSpace)) && (this.localPreserveWS = !0);
        let s = t.nodeName.toLowerCase(), o;
        UKo.hasOwnProperty(s) && this.parser.normalizeLists && C6y(t);
        let a = this.options.ruleFromNode && this.options.ruleFromNode(t) || (o = this.parser.matchTag(t, this, n));
        e: if (a ? a.ignore : $Qd.hasOwnProperty(s)) this.findInside(t), this.ignoreFallback(t, e);
        else if (!a || a.skip || a.closeParent) {
            a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (t = a.skip);
            let l, c = this.needsBlock;
            if (BKo.hasOwnProperty(s)) r.content.length && r.content[0].isInline && this.open && (this.open--, r = this.top), l = !0, r.type || (this.needsBlock = !0);
            else if (!t.firstChild) {
                this.leafFallback(t, e);
                break e;
            }
            let u = a && a.skip ? e : this.readStyles(t, e);
            u && this.addAll(t, u), l && this.sync(r), this.needsBlock = c;
        } else {
            let l = this.readStyles(t, e);
            l && this.addElementByRule(t, a, l, a.consuming === !1 ? o : void 0);
        }
        this.localPreserveWS = i;
    }
    leafFallback(t, e) {
        t.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode(`
`), e);
    }
    ignoreFallback(t, e) {
        t.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), e, !0);
    }
    readStyles(t, e) {
        let n = t.style;
        if (n && n.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let r = this.parser.matchedStyles[i], s = n.getPropertyValue(r);
            if (s) for(let o = void 0;;){
                let a = this.parser.matchStyle(r, s, this, o);
                if (!a) break;
                if (a.ignore) return null;
                if (a.clearMark ? e = e.filter((l)=>!a.clearMark(l)) : e = e.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1) o = a;
                else break;
            }
        }
        return e;
    }
    addElementByRule(t, e, n, i) {
        let r, s;
        if (e.node) if (s = this.parser.schema.nodes[e.node], s.isLeaf) this.insertNode(s.create(e.attrs), n, t.nodeName == "BR") || this.leafFallback(t, n);
        else {
            let a = this.enter(s, e.attrs || null, n, e.preserveWhitespace);
            a && (r = !0, n = a);
        }
        else {
            let a = this.parser.schema.marks[e.mark];
            n = n.concat(a.create(e.attrs));
        }
        let o = this.top;
        if (s && s.isLeaf) this.findInside(t);
        else if (i) this.addElement(t, n, i);
        else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach((a)=>this.insertNode(a, n, !1));
        else {
            let a = t;
            typeof e.contentElement == "string" ? a = t.querySelector(e.contentElement) : typeof e.contentElement == "function" ? a = e.contentElement(t) : e.contentElement && (a = e.contentElement), this.findAround(t, a, !0), this.addAll(a, n), this.findAround(t, a, !1);
        }
        r && this.sync(o) && this.open--;
    }
    addAll(t, e, n, i) {
        let r = n || 0;
        for(let s = n ? t.childNodes[n] : t.firstChild, o = i == null ? null : t.childNodes[i]; s != o; s = s.nextSibling, ++r)this.findAtPoint(t, r), this.addDOM(s, e);
        this.findAtPoint(t, r);
    }
    findPlace(t, e, n) {
        let i, r;
        for(let s = this.open, o = 0; s >= 0; s--){
            let a = this.nodes[s], l = a.findWrapping(t);
            if (l && (!i || i.length > l.length + o) && (i = l, r = a, !l.length)) break;
            if (a.solid) {
                if (n) break;
                o += 2;
            }
        }
        if (!i) return null;
        this.sync(r);
        for(let s = 0; s < i.length; s++)e = this.enterInner(i[s], null, e, !1);
        return e;
    }
    insertNode(t, e, n) {
        if (t.isInline && this.needsBlock && !this.top.type) {
            let r = this.textblockFromContext();
            r && (e = this.enterInner(r, null, e));
        }
        let i = this.findPlace(t, e, n);
        if (i) {
            this.closeExtra();
            let r = this.top;
            r.match && (r.match = r.match.matchType(t.type));
            let s = SO.none;
            for (let o of i.concat(t.marks))(r.type ? r.type.allowsMarkType(o.type) : DQd(o.type, t.type)) && (s = o.addToSet(s));
            return r.content.push(t.mark(s)), !0;
        }
        return !1;
    }
    enter(t, e, n, i) {
        let r = this.findPlace(t.create(e), n, !1);
        return r && (r = this.enterInner(t, e, n, !0, i)), r;
    }
    enterInner(t, e, n, i = !1, r) {
        this.closeExtra();
        let s = this.top;
        s.match = s.match && s.match.matchType(t);
        let o = PQd(t, r, s.options);
        s.options & a_n && s.content.length == 0 && (o |= a_n);
        let a = SO.none;
        return n = n.filter((l)=>(s.type ? s.type.allowsMarkType(l.type) : DQd(l.type, t)) ? (a = l.addToSet(a), !1) : !0), this.nodes.push(new wai(t, e, a, i, null, o)), this.open++, n;
    }
    closeExtra(t = !1) {
        let e = this.nodes.length - 1;
        if (e > this.open) {
            for(; e > this.open; e--)this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(t) {
        for(let e = this.open; e >= 0; e--){
            if (this.nodes[e] == t) return this.open = e, !0;
            this.localPreserveWS && (this.nodes[e].options |= o_n);
        }
        return !1;
    }
    get currentPos() {
        this.closeExtra();
        let t = 0;
        for(let e = this.open; e >= 0; e--){
            let n = this.nodes[e].content;
            for(let i = n.length - 1; i >= 0; i--)t += n[i].nodeSize;
            e && t++;
        }
        return t;
    }
    findAtPoint(t, e) {
        if (this.find) for(let n = 0; n < this.find.length; n++)this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos);
    }
    findInside(t) {
        if (this.find) for(let e = 0; e < this.find.length; e++)this.find[e].pos == null && t.nodeType == 1 && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos);
    }
    findAround(t, e, n) {
        if (t != e && this.find) for(let i = 0; i < this.find.length; i++)this.find[i].pos == null && t.nodeType == 1 && t.contains(this.find[i].node) && e.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
    }
    findInText(t) {
        if (this.find) for(let e = 0; e < this.find.length; e++)this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset));
    }
    matchesContext(t) {
        if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
        let e = t.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), r = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), s = (o, a)=>{
            for(; o >= 0; o--){
                let l = e[o];
                if (l == "") {
                    if (o == e.length - 1 || o == 0) continue;
                    for(; a >= r; a--)if (s(o - 1, a)) return !0;
                    return !1;
                } else {
                    let c = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= r ? n.node(a - r).type : null;
                    if (!c || c.name != l && !c.isInGroup(l)) return !1;
                    a--;
                }
            }
            return !0;
        };
        return s(e.length - 1, this.open);
    }
    textblockFromContext() {
        let t = this.options.context;
        if (t) for(let e = t.depth; e >= 0; e--){
            let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
            if (n && n.isTextblock && n.defaultAttrs) return n;
        }
        for(let e in this.parser.schema.nodes){
            let n = this.parser.schema.nodes[e];
            if (n.isTextblock && n.defaultAttrs) return n;
        }
    }
}, l_n = class zRb {
    constructor(e, n){
        this.nodes = e, this.marks = n;
    }
    serializeFragment(e, n = {}, i) {
        i || (i = MKo(n).createDocumentFragment());
        let r = i, s = [];
        return e.forEach((o)=>{
            if (s.length || o.marks.length) {
                let a = 0, l = 0;
                for(; a < s.length && l < o.marks.length;){
                    let c = o.marks[l];
                    if (!this.marks[c.type.name]) {
                        l++;
                        continue;
                    }
                    if (!c.eq(s[a][0]) || c.type.spec.spanning === !1) break;
                    a++, l++;
                }
                for(; a < s.length;)r = s.pop()[1];
                for(; l < o.marks.length;){
                    let c = o.marks[l++], u = this.serializeMark(c, o.isInline, n);
                    u && (s.push([
                        c,
                        r
                    ]), r.appendChild(u.dom), r = u.contentDOM || u.dom);
                }
            }
            r.appendChild(this.serializeNodeInner(o, n));
        }), i;
    }
    serializeNodeInner(e, n) {
        let { dom: i, contentDOM: r } = dxr(MKo(n), this.nodes[e.type.name](e), null, e.attrs);
        if (r) {
            if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, n, r);
        }
        return i;
    }
    serializeNode(e, n = {}) {
        let i = this.serializeNodeInner(e, n);
        for(let r = e.marks.length - 1; r >= 0; r--){
            let s = this.serializeMark(e.marks[r], e.isInline, n);
            s && ((s.contentDOM || s.dom).appendChild(i), i = s.dom);
        }
        return i;
    }
    serializeMark(e, n, i = {}) {
        let r = this.marks[e.type.name];
        return r && dxr(MKo(i), r(e, n), null, e.attrs);
    }
    static renderSpec(e, n, i = null, r) {
        return dxr(e, n, i, r);
    }
    static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new zRb(this.nodesFromSchema(e), this.marksFromSchema(e)));
    }
    static nodesFromSchema(e) {
        let n = NQd(e.nodes);
        return n.text || (n.text = (i)=>i.text), n;
    }
    static marksFromSchema(e) {
        return NQd(e.marks);
    }
}, $Ko = new WeakMap;

}
