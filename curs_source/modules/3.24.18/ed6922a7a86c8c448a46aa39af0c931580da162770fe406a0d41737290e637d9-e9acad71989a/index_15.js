import { VTg } from "./index_14.js";
import { Das, GYc, HYc, JTg, JYc, KYc, QTg, VYc, WYc, YYc, aXc, dwi, eEg, eXc, iEg, iXc, jTg, nEg, nXc, oXc, pwi, rEg, rXc, sEg, sXc, sj, tEg, tXc, uwi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var qd, mwi, IM, syn, um, Mas, cXc, lXc, Pas, oyn, uXc, DRe, dXc, Y3t, hXc, Las, pXc, Nas, Oas, Kmt, Fas, mXc, Bas, X3t, gwi, Z3t, ayn, Uas, Q3t, $as;
export { $as, Bas, DRe, Fas, IM, Kmt, Las, Mas, Nas, Oas, Pas, Q3t, Uas, X3t, Y3t, Z3t, ayn, cXc, dXc, gwi, hXc, lXc, mXc, mwi, oyn, pXc, qd, syn, uXc, um };
var __wakaru_Zwe_initialized = false;
export function Zwe() {
if (__wakaru_Zwe_initialized) return;
__wakaru_Zwe_initialized = true;
x(), VTg(), qd = class yne {
    constructor(t, n){
        if (this.content = t, this.size = n || 0, n == null) for(let i = 0; i < t.length; i++)this.size += t[i].nodeSize;
    }
    nodesBetween(t, n, i, r = 0, s) {
        for(let o = 0, a = 0; a < n; o++){
            let c = this.content[o], l = a + c.nodeSize;
            if (l > t && i(c, r + a, s || null, o) !== !1 && c.content.size) {
                let u = a + 1;
                c.nodesBetween(Math.max(0, t - u), Math.min(c.content.size, n - u), i, r + u);
            }
            a = l;
        }
    }
    descendants(t) {
        this.nodesBetween(0, this.size, t);
    }
    textBetween(t, n, i, r) {
        let s = "", o = !0;
        return this.nodesBetween(t, n, (a, c)=>{
            let l = a.isText ? a.text.slice(Math.max(t, c) - c, n - c) : a.isLeaf ? r ? typeof r == "function" ? r(a) : r : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
            a.isBlock && (a.isLeaf && l || a.isTextblock) && i && (o ? o = !1 : s += i), s += l;
        }, 0), s;
    }
    append(t) {
        if (!t.size) return this;
        if (!this.size) return t;
        let n = this.lastChild, i = t.firstChild, r = this.content.slice(), s = 0;
        for(n.isText && n.sameMarkup(i) && (r[r.length - 1] = n.withText(n.text + i.text), s = 1); s < t.content.length; s++)r.push(t.content[s]);
        return new yne(r, this.size + t.size);
    }
    cut(t, n = this.size) {
        if (t == 0 && n == this.size) return this;
        let i = [], r = 0;
        if (n > t) for(let s = 0, o = 0; o < n; s++){
            let a = this.content[s], c = o + a.nodeSize;
            c > t && ((o < t || c > n) && (a.isText ? a = a.cut(Math.max(0, t - o), Math.min(a.text.length, n - o)) : a = a.cut(Math.max(0, t - o - 1), Math.min(a.content.size, n - o - 1))), i.push(a), r += a.nodeSize), o = c;
        }
        return new yne(i, r);
    }
    cutByIndex(t, n) {
        return t == n ? yne.empty : t == 0 && n == this.content.length ? this : new yne(this.content.slice(t, n));
    }
    replaceChild(t, n) {
        let i = this.content[t];
        if (i == n) return this;
        let r = this.content.slice(), s = this.size + n.nodeSize - i.nodeSize;
        return r[t] = n, new yne(r, s);
    }
    addToStart(t) {
        return new yne([
            t
        ].concat(this.content), this.size + t.nodeSize);
    }
    addToEnd(t) {
        return new yne(this.content.concat(t), this.size + t.nodeSize);
    }
    eq(t) {
        if (this.content.length != t.content.length) return !1;
        for(let n = 0; n < this.content.length; n++)if (!this.content[n].eq(t.content[n])) return !1;
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
    child(t) {
        let n = this.content[t];
        if (!n) throw new RangeError("Index " + t + " out of range for " + this);
        return n;
    }
    maybeChild(t) {
        return this.content[t] || null;
    }
    forEach(t) {
        for(let n = 0, i = 0; n < this.content.length; n++){
            let r = this.content[n];
            t(r, i, n), i += r.nodeSize;
        }
    }
    findDiffStart(t, n = 0) {
        return HYc(this, t, n);
    }
    findDiffEnd(t, n = this.size, i = t.size) {
        return WYc(this, t, n, i);
    }
    findIndex(t, n = -1) {
        if (t == 0) return uwi(0, t);
        if (t == this.size) return uwi(this.content.length, t);
        if (t > this.size || t < 0) throw new RangeError(`Position ${t} outside of fragment (${this})`);
        for(let i = 0, r = 0;; i++){
            let s = this.child(i), o = r + s.nodeSize;
            if (o >= t) return o == t || n > 0 ? uwi(i + 1, o) : uwi(i, r);
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
        return this.content.length ? this.content.map((t)=>t.toJSON()) : null;
    }
    static fromJSON(t, n) {
        if (!n) return yne.empty;
        if (!Array.isArray(n)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new yne(n.map(t.nodeFromJSON));
    }
    static fromArray(t) {
        if (!t.length) return yne.empty;
        let n, i = 0;
        for(let r = 0; r < t.length; r++){
            let s = t[r];
            i += s.nodeSize, r && s.isText && t[r - 1].sameMarkup(s) ? (n || (n = t.slice(0, r)), n[n.length - 1] = s.withText(n[n.length - 1].text + s.text)) : n && n.push(s);
        }
        return new yne(n || t, i);
    }
    static from(t) {
        if (!t) return yne.empty;
        if (t instanceof yne) return t;
        if (Array.isArray(t)) return this.fromArray(t);
        if (t.attrs) return new yne([
            t
        ], t.nodeSize);
        throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}, qd.empty = new qd([], 0), mwi = {
    index: 0,
    offset: 0
}, IM = class YIa {
    constructor(t, n){
        this.type = t, this.attrs = n;
    }
    addToSet(t) {
        let n, i = !1;
        for(let r = 0; r < t.length; r++){
            let s = t[r];
            if (this.eq(s)) return t;
            if (this.type.excludes(s.type)) n || (n = t.slice(0, r));
            else {
                if (s.type.excludes(this.type)) return t;
                !i && s.type.rank > this.type.rank && (n || (n = t.slice(0, r)), n.push(this), i = !0), n && n.push(s);
            }
        }
        return n || (n = t.slice()), i || n.push(this), n;
    }
    removeFromSet(t) {
        for(let n = 0; n < t.length; n++)if (this.eq(t[n])) return t.slice(0, n).concat(t.slice(n + 1));
        return t;
    }
    isInSet(t) {
        for(let n = 0; n < t.length; n++)if (this.eq(t[n])) return !0;
        return !1;
    }
    eq(t) {
        return this == t || this.type == t.type && dwi(this.attrs, t.attrs);
    }
    toJSON() {
        let t = {
            type: this.type.name
        };
        for(let n in this.attrs){
            t.attrs = this.attrs;
            break;
        }
        return t;
    }
    static fromJSON(t, n) {
        if (!n) throw new RangeError("Invalid input for Mark.fromJSON");
        let i = t.marks[n.type];
        if (!i) throw new RangeError(`There is no mark type ${n.type} in this schema`);
        let r = i.create(n.attrs);
        return i.checkAttrs(r.attrs), r;
    }
    static sameSet(t, n) {
        if (t == n) return !0;
        if (t.length != n.length) return !1;
        for(let i = 0; i < t.length; i++)if (!t[i].eq(n[i])) return !1;
        return !0;
    }
    static setFrom(t) {
        if (!t || Array.isArray(t) && t.length == 0) return YIa.none;
        if (t instanceof YIa) return [
            t
        ];
        let n = t.slice();
        return n.sort((i, r)=>i.type.rank - r.type.rank), n;
    }
}, IM.none = [], syn = class extends Error {
}, um = class Pin {
    constructor(t, n, i){
        this.content = t, this.openStart = n, this.openEnd = i;
    }
    get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(t, n) {
        let i = VYc(this.content, t + this.openStart, n);
        return i && new Pin(i, this.openStart, this.openEnd);
    }
    removeBetween(t, n) {
        return new Pin(GYc(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
    }
    eq(t) {
        return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
    }
    toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    toJSON() {
        if (!this.content.size) return null;
        let t = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
    }
    static fromJSON(t, n) {
        if (!n) return Pin.empty;
        let i = n.openStart || 0, r = n.openEnd || 0;
        if (typeof i != "number" || typeof r != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new Pin(qd.fromJSON(t, n.content), i, r);
    }
    static maxOpen(t, n = !0) {
        let i = 0, r = 0;
        for(let s = t.firstChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.firstChild)i++;
        for(let s = t.lastChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.lastChild)r++;
        return new Pin(t, i, r);
    }
}, um.empty = new um(qd.empty, 0, 0), Mas = class XIa {
    constructor(t, n, i){
        this.pos = t, this.path = n, this.parentOffset = i, this.depth = n.length / 3 - 1;
    }
    resolveDepth(t) {
        return t == null ? this.depth : t < 0 ? this.depth + t : t;
    }
    get parent() {
        return this.node(this.depth);
    }
    get doc() {
        return this.node(0);
    }
    node(t) {
        return this.path[this.resolveDepth(t) * 3];
    }
    index(t) {
        return this.path[this.resolveDepth(t) * 3 + 1];
    }
    indexAfter(t) {
        return t = this.resolveDepth(t), this.index(t) + (t == this.depth && !this.textOffset ? 0 : 1);
    }
    start(t) {
        return t = this.resolveDepth(t), t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    }
    end(t) {
        return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size;
    }
    before(t) {
        if (t = this.resolveDepth(t), !t) throw new RangeError("There is no position before the top-level node");
        return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1];
    }
    after(t) {
        if (t = this.resolveDepth(t), !t) throw new RangeError("There is no position after the top-level node");
        return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1] + this.path[t * 3].nodeSize;
    }
    get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
        let t = this.parent, n = this.index(this.depth);
        if (n == t.childCount) return null;
        let i = this.pos - this.path[this.path.length - 1], r = t.child(n);
        return i ? t.child(n).cut(i) : r;
    }
    get nodeBefore() {
        let t = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
        return n ? this.parent.child(t).cut(0, n) : t == 0 ? null : this.parent.child(t - 1);
    }
    posAtIndex(t, n) {
        n = this.resolveDepth(n);
        let i = this.path[n * 3], r = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
        for(let s = 0; s < t; s++)r += i.child(s).nodeSize;
        return r;
    }
    marks() {
        let t = this.parent, n = this.index();
        if (t.content.size == 0) return IM.none;
        if (this.textOffset) return t.child(n).marks;
        let i = t.maybeChild(n - 1), r = t.maybeChild(n);
        if (!i) {
            let a = i;
            i = r, r = a;
        }
        let s = i.marks;
        for(var o = 0; o < s.length; o++)s[o].type.spec.inclusive === !1 && (!r || !s[o].isInSet(r.marks)) && (s = s[o--].removeFromSet(s));
        return s;
    }
    marksAcross(t) {
        let n = this.parent.maybeChild(this.index());
        if (!n || !n.isInline) return null;
        let i = n.marks, r = t.parent.maybeChild(t.index());
        for(var s = 0; s < i.length; s++)i[s].type.spec.inclusive === !1 && (!r || !i[s].isInSet(r.marks)) && (i = i[s--].removeFromSet(i));
        return i;
    }
    sharedDepth(t) {
        for(let n = this.depth; n > 0; n--)if (this.start(n) <= t && this.end(n) >= t) return n;
        return 0;
    }
    blockRange(t = this, n) {
        if (t.pos < this.pos) return t.blockRange(this);
        for(let i = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); i >= 0; i--)if (t.pos <= this.end(i) && (!n || n(this.node(i)))) return new oyn(this, t, i);
        return null;
    }
    sameParent(t) {
        return this.pos - this.parentOffset == t.pos - t.parentOffset;
    }
    max(t) {
        return t.pos > this.pos ? t : this;
    }
    min(t) {
        return t.pos < this.pos ? t : this;
    }
    toString() {
        let t = "";
        for(let n = 1; n <= this.depth; n++)t += (t ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
        return t + ":" + this.parentOffset;
    }
    static resolve(t, n) {
        if (!(n >= 0 && n <= t.content.size)) throw new RangeError("Position " + n + " out of range");
        let i = [], r = 0, s = n;
        for(let o = t;;){
            let { index: a, offset: c } = o.content.findIndex(s), l = s - c;
            if (i.push(o, a, r + c), !l || (o = o.child(a), o.isText)) break;
            s = l - 1, r += c + 1;
        }
        return new XIa(n, i, s);
    }
    static resolveCached(t, n) {
        let i = Pas.get(t);
        if (i) for(let s = 0; s < i.elts.length; s++){
            let o = i.elts[s];
            if (o.pos == n) return o;
        }
        else Pas.set(t, i = new cXc);
        let r = i.elts[i.i] = XIa.resolve(t, n);
        return i.i = (i.i + 1) % lXc, r;
    }
}, cXc = class {
    constructor(){
        this.elts = [], this.i = 0;
    }
}, lXc = 12, Pas = new WeakMap, oyn = class {
    constructor(e, t, n){
        this.$from = e, this.$to = t, this.depth = n;
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
}, uXc = Object.create(null), DRe = class ZIa {
    constructor(t, n, i, r = IM.none){
        this.type = t, this.attrs = n, this.marks = r, this.content = i || qd.empty;
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
    child(t) {
        return this.content.child(t);
    }
    maybeChild(t) {
        return this.content.maybeChild(t);
    }
    forEach(t) {
        this.content.forEach(t);
    }
    nodesBetween(t, n, i, r = 0) {
        this.content.nodesBetween(t, n, i, r, this);
    }
    descendants(t) {
        this.nodesBetween(0, this.content.size, t);
    }
    get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    textBetween(t, n, i, r) {
        return this.content.textBetween(t, n, i, r);
    }
    get firstChild() {
        return this.content.firstChild;
    }
    get lastChild() {
        return this.content.lastChild;
    }
    eq(t) {
        return this == t || this.sameMarkup(t) && this.content.eq(t.content);
    }
    sameMarkup(t) {
        return this.hasMarkup(t.type, t.attrs, t.marks);
    }
    hasMarkup(t, n, i) {
        return this.type == t && dwi(this.attrs, n || t.defaultAttrs || uXc) && IM.sameSet(this.marks, i || IM.none);
    }
    copy(t = null) {
        return t == this.content ? this : new ZIa(this.type, this.attrs, t, this.marks);
    }
    mark(t) {
        return t == this.marks ? this : new ZIa(this.type, this.attrs, this.content, t);
    }
    cut(t, n = this.content.size) {
        return t == 0 && n == this.content.size ? this : this.copy(this.content.cut(t, n));
    }
    slice(t, n = this.content.size, i = !1) {
        if (t == n) return um.empty;
        let r = this.resolve(t), s = this.resolve(n), o = i ? 0 : r.sharedDepth(n), a = r.start(o), l = r.node(o).content.cut(r.pos - a, s.pos - a);
        return new um(l, r.depth - o, s.depth - o);
    }
    replace(t, n, i) {
        return jTg(this.resolve(t), this.resolve(n), i);
    }
    nodeAt(t) {
        for(let n = this;;){
            let { index: i, offset: r } = n.content.findIndex(t);
            if (n = n.maybeChild(i), !n) return null;
            if (r == t || n.isText) return n;
            t -= r + 1;
        }
    }
    childAfter(t) {
        let { index: n, offset: i } = this.content.findIndex(t);
        return {
            node: this.content.maybeChild(n),
            index: n,
            offset: i
        };
    }
    childBefore(t) {
        if (t == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index: n, offset: i } = this.content.findIndex(t);
        if (i < t) return {
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
    resolve(t) {
        return Mas.resolveCached(this, t);
    }
    resolveNoCache(t) {
        return Mas.resolve(this, t);
    }
    rangeHasMark(t, n, i) {
        let r = !1;
        return n > t && this.nodesBetween(t, n, (s)=>(i.isInSet(s.marks) && (r = !0), !r)), r;
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
        let t = this.type.name;
        return this.content.size && (t += "(" + this.content.toStringInner() + ")"), KYc(this.marks, t);
    }
    contentMatchAt(t) {
        let n = this.type.contentMatch.matchFragment(this.content, 0, t);
        if (!n) throw new Error("Called contentMatchAt on a node with invalid content");
        return n;
    }
    canReplace(t, n, i = qd.empty, r = 0, s = i.childCount) {
        let o = this.contentMatchAt(t).matchFragment(i, r, s), a = o && o.matchFragment(this.content, n);
        if (!a || !a.validEnd) return !1;
        for(let c = r; c < s; c++)if (!this.type.allowsMarks(i.child(c).marks)) return !1;
        return !0;
    }
    canReplaceWith(t, n, i, r) {
        if (r && !this.type.allowsMarks(r)) return !1;
        let s = this.contentMatchAt(t).matchType(i), o = s && s.matchFragment(this.content, n);
        return o ? o.validEnd : !1;
    }
    canAppend(t) {
        return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
    }
    check() {
        this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
        let t = IM.none;
        for(let n = 0; n < this.marks.length; n++){
            let i = this.marks[n];
            i.type.checkAttrs(i.attrs), t = i.addToSet(t);
        }
        if (!IM.sameSet(t, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n)=>n.type.name)}`);
        this.content.forEach((n)=>n.check());
    }
    toJSON() {
        let t = {
            type: this.type.name
        };
        for(let n in this.attrs){
            t.attrs = this.attrs;
            break;
        }
        return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map((n)=>n.toJSON())), t;
    }
    static fromJSON(t, n) {
        if (!n) throw new RangeError("Invalid input for Node.fromJSON");
        let i;
        if (n.marks) {
            if (!Array.isArray(n.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            i = n.marks.map(t.markFromJSON);
        }
        if (n.type == "text") {
            if (typeof n.text != "string") throw new RangeError("Invalid text node in JSON");
            return t.text(n.text, i);
        }
        let r = qd.fromJSON(t, n.content), s = t.nodeType(n.type).create(n.attrs, r, i);
        return s.type.checkAttrs(s.attrs), s;
    }
}, DRe.prototype.text = void 0, dXc = class QIa extends DRe {
    constructor(t, n, i, r){
        if (super(t, n, null, r), !i) throw new RangeError("Empty text nodes are not allowed");
        this.text = i;
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : KYc(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(t, n) {
        return this.text.slice(t, n);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(t) {
        return t == this.marks ? this : new QIa(this.type, this.attrs, this.text, t);
    }
    withText(t) {
        return t == this.text ? this : new QIa(this.type, this.attrs, t, this.marks);
    }
    cut(t = 0, n = this.text.length) {
        return t == 0 && n == this.text.length ? this : this.withText(this.text.slice(t, n));
    }
    eq(t) {
        return this.sameMarkup(t) && this.text == t.text;
    }
    toJSON() {
        let t = super.toJSON();
        return t.text = this.text, t;
    }
}, Y3t = class cwm {
    constructor(t){
        this.validEnd = t, this.next = [], this.wrapCache = [];
    }
    static parse(t, n) {
        let i = new hXc(t, n);
        if (i.next == null) return cwm.empty;
        let r = YYc(i);
        i.next && i.err("Unexpected trailing text");
        let s = JTg(QTg(r));
        return eEg(s, i), s;
    }
    matchType(t) {
        for(let n = 0; n < this.next.length; n++)if (this.next[n].type == t) return this.next[n].next;
        return null;
    }
    matchFragment(t, n = 0, i = t.childCount) {
        let r = this;
        for(let s = n; r && s < i; s++)r = r.matchType(t.child(s).type);
        return r;
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    get defaultType() {
        for(let t = 0; t < this.next.length; t++){
            let { type: n } = this.next[t];
            if (!(n.isText || n.hasRequiredAttrs())) return n;
        }
        return null;
    }
    compatible(t) {
        for(let n = 0; n < this.next.length; n++)for(let i = 0; i < t.next.length; i++)if (this.next[n].type == t.next[i].type) return !0;
        return !1;
    }
    fillBefore(t, n = !1, i = 0) {
        let r = [
            this
        ];
        function s(o, a) {
            let c = o.matchFragment(t, i);
            if (c && (!n || c.validEnd)) return qd.from(a.map((l)=>l.createAndFill()));
            for(let l = 0; l < o.next.length; l++){
                let { type: u, next: h } = o.next[l];
                if (!(u.isText || u.hasRequiredAttrs()) && r.indexOf(h) == -1) {
                    r.push(h);
                    let p = s(h, a.concat(u));
                    if (p) return p;
                }
            }
            return null;
        }
        return s(this, []);
    }
    findWrapping(t) {
        for(let i = 0; i < this.wrapCache.length; i += 2)if (this.wrapCache[i] == t) return this.wrapCache[i + 1];
        let n = this.computeWrapping(t);
        return this.wrapCache.push(t, n), n;
    }
    computeWrapping(t) {
        let n = Object.create(null), i = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        for(; i.length;){
            let r = i.shift(), s = r.match;
            if (s.matchType(t)) {
                let o = [];
                for(let a = r; a.type; a = a.via)o.push(a.type);
                return o.reverse();
            }
            for(let o = 0; o < s.next.length; o++){
                let { type: a, next: c } = s.next[o];
                !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!r.type || c.validEnd) && (i.push({
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
    edge(t) {
        if (t >= this.next.length) throw new RangeError(`There's no ${t}th edge in this content match`);
        return this.next[t];
    }
    toString() {
        let t = [];
        function n(i) {
            t.push(i);
            for(let r = 0; r < i.next.length; r++)t.indexOf(i.next[r].next) == -1 && n(i.next[r].next);
        }
        return n(this), t.map((i, r)=>{
            let s = r + (i.validEnd ? "*" : " ") + " ";
            for(let o = 0; o < i.next.length; o++)s += (o ? ", " : "") + i.next[o].type.name + "->" + t.indexOf(i.next[o].next);
            return s;
        }).join(`
`);
    }
}, Y3t.empty = new Y3t(!0), hXc = class {
    constructor(e, t){
        this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(e) {
        return this.next == e && (this.pos++ || !0);
    }
    err(e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')");
    }
}, Las = class lwm {
    constructor(t, n, i){
        this.name = t, this.schema = n, this.spec = i, this.markSet = null, this.groups = i.group ? i.group.split(" ") : [], this.attrs = nXc(t, i.attrs), this.defaultAttrs = JYc(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(i.inline || t == "text"), this.isText = t == "text";
    }
    get isInline() {
        return !this.isBlock;
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    get isLeaf() {
        return this.contentMatch == Y3t.empty;
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    isInGroup(t) {
        return this.groups.indexOf(t) > -1;
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    hasRequiredAttrs() {
        for(let t in this.attrs)if (this.attrs[t].isRequired) return !0;
        return !1;
    }
    compatibleContent(t) {
        return this == t || this.contentMatch.compatible(t.contentMatch);
    }
    computeAttrs(t) {
        return !t && this.defaultAttrs ? this.defaultAttrs : eXc(this.attrs, t);
    }
    create(t = null, n, i) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new DRe(this, this.computeAttrs(t), qd.from(n), IM.setFrom(i));
    }
    createChecked(t = null, n, i) {
        return n = qd.from(n), this.checkContent(n), new DRe(this, this.computeAttrs(t), n, IM.setFrom(i));
    }
    createAndFill(t = null, n, i) {
        if (t = this.computeAttrs(t), n = qd.from(n), n.size) {
            let o = this.contentMatch.fillBefore(n);
            if (!o) return null;
            n = o.append(n);
        }
        let r = this.contentMatch.matchFragment(n), s = r && r.fillBefore(qd.empty, !0);
        return s ? new DRe(this, t, n.append(s), IM.setFrom(i)) : null;
    }
    validContent(t) {
        let n = this.contentMatch.matchFragment(t);
        if (!n || !n.validEnd) return !1;
        for(let i = 0; i < t.childCount; i++)if (!this.allowsMarks(t.child(i).marks)) return !1;
        return !0;
    }
    checkContent(t) {
        if (!this.validContent(t)) throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`);
    }
    checkAttrs(t) {
        tXc(this.attrs, t, "node", this.name);
    }
    allowsMarkType(t) {
        return this.markSet == null || this.markSet.indexOf(t) > -1;
    }
    allowsMarks(t) {
        if (this.markSet == null) return !0;
        for(let n = 0; n < t.length; n++)if (!this.allowsMarkType(t[n].type)) return !1;
        return !0;
    }
    allowedMarks(t) {
        if (this.markSet == null) return t;
        let n;
        for(let i = 0; i < t.length; i++)this.allowsMarkType(t[i].type) ? n && n.push(t[i]) : n || (n = t.slice(0, i));
        return n ? n.length ? n : IM.none : t;
    }
    static compile(t, n) {
        let i = Object.create(null);
        t.forEach((s, o)=>i[s] = new lwm(s, n, o));
        let r = n.spec.topNode || "doc";
        if (!i[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
        if (!i.text) throw new RangeError("Every schema needs a 'text' type");
        for(let s in i.text.attrs)throw new RangeError("The text node type should not have attributes");
        return i;
    }
}, pXc = class {
    constructor(e, t, n){
        this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? tEg(e, t, n.validate) : n.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}, Nas = class uwm {
    constructor(t, n, i, r){
        this.name = t, this.rank = n, this.schema = i, this.spec = r, this.attrs = nXc(t, r.attrs), this.excluded = null;
        let s = JYc(this.attrs);
        this.instance = s ? new IM(this, s) : null;
    }
    create(t = null) {
        return !t && this.instance ? this.instance : new IM(this, eXc(this.attrs, t));
    }
    static compile(t, n) {
        let i = Object.create(null), r = 0;
        return t.forEach((s, o)=>i[s] = new uwm(s, r++, n, o)), i;
    }
    removeFromSet(t) {
        for(var n = 0; n < t.length; n++)t[n].type == this && (t = t.slice(0, n).concat(t.slice(n + 1)), n--);
        return t;
    }
    isInSet(t) {
        for(let n = 0; n < t.length; n++)if (t[n].type == this) return t[n];
    }
    checkAttrs(t) {
        tXc(this.attrs, t, "mark", this.name);
    }
    excludes(t) {
        return this.excluded.indexOf(t) > -1;
    }
}, Oas = class {
    constructor(e){
        this.linebreakReplacement = null, this.cached = Object.create(null);
        let t = this.spec = {};
        for(let i in e)t[i] = e[i];
        t.nodes = sj.from(e.nodes), t.marks = sj.from(e.marks || {}), this.nodes = Las.compile(this.spec.nodes, this), this.marks = Nas.compile(this.spec.marks, this);
        let n = Object.create(null);
        for(let i in this.nodes){
            if (i in this.marks) throw new RangeError(i + " can not be both a node and a mark");
            let r = this.nodes[i], s = r.spec.content || "", o = r.spec.marks;
            if (r.contentMatch = n[s] || (n[s] = Y3t.parse(s, this.nodes)), r.inlineContent = r.contentMatch.inlineContent, r.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!r.isInline || !r.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = r;
            }
            r.markSet = o == "_" ? null : o ? iXc(this, o.split(" ")) : o == "" || !r.inlineContent ? [] : null;
        }
        for(let i in this.marks){
            let r = this.marks[i], s = r.spec.excludes;
            r.excluded = s == null ? [
                r
            ] : s == "" ? [] : iXc(this, s.split(" "));
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
    }
    node(e, t = null, n, i) {
        if (typeof e == "string") e = this.nodeType(e);
        else if (e instanceof Las) {
            if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")");
        } else throw new RangeError("Invalid node type: " + e);
        return e.createChecked(t, n, i);
    }
    text(e, t) {
        let n = this.nodes.text;
        return new dXc(n, n.defaultAttrs, e, IM.setFrom(t));
    }
    mark(e, t) {
        return typeof e == "string" && (e = this.marks[e]), e.create(t);
    }
    nodeFromJSON(e) {
        return DRe.fromJSON(this, e);
    }
    markFromJSON(e) {
        return IM.fromJSON(this, e);
    }
    nodeType(e) {
        let t = this.nodes[e];
        if (!t) throw new RangeError("Unknown node type: " + e);
        return t;
    }
}, Kmt = class JIa {
    constructor(t, n){
        this.schema = t, this.rules = n, this.tags = [], this.styles = [];
        let i = this.matchedStyles = [];
        n.forEach((r)=>{
            if (nEg(r)) this.tags.push(r);
            else if (iEg(r)) {
                let s = /[^=]*/.exec(r.style)[0];
                i.indexOf(s) < 0 && i.push(s), this.styles.push(r);
            }
        }), this.normalizeLists = !this.tags.some((r)=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return !1;
            let s = t.nodes[r.node];
            return s.contentMatch.matchType(s);
        });
    }
    parse(t, n = {}) {
        let i = new Uas(this, n, !1);
        return i.addAll(t, IM.none, n.from, n.to), i.finish();
    }
    parseSlice(t, n = {}) {
        let i = new Uas(this, n, !0);
        return i.addAll(t, IM.none, n.from, n.to), um.maxOpen(i.finish());
    }
    matchTag(t, n, i) {
        for(let r = i ? this.tags.indexOf(i) + 1 : 0; r < this.tags.length; r++){
            let s = this.tags[r];
            if (sEg(t, s.tag) && (s.namespace === void 0 || t.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
                if (s.getAttrs) {
                    let o = s.getAttrs(t);
                    if (o === !1) continue;
                    s.attrs = o || void 0;
                }
                return s;
            }
        }
    }
    matchStyle(t, n, i, r) {
        for(let s = r ? this.styles.indexOf(r) + 1 : 0; s < this.styles.length; s++){
            let o = this.styles[s], a = o.style;
            if (!(a.indexOf(t) != 0 || o.context && !i.matchesContext(o.context) || a.length > t.length && (a.charCodeAt(t.length) != 61 || a.slice(t.length + 1) != n))) {
                if (o.getAttrs) {
                    let c = o.getAttrs(n);
                    if (c === !1) continue;
                    o.attrs = c || void 0;
                }
                return o;
            }
        }
    }
    static schemaRules(t) {
        let n = [];
        function i(r) {
            let s = r.priority == null ? 50 : r.priority, o = 0;
            for(; o < n.length; o++){
                let a = n[o];
                if ((a.priority == null ? 50 : a.priority) < s) break;
            }
            n.splice(o, 0, r);
        }
        for(let r in t.marks){
            let s = t.marks[r].spec.parseDOM;
            s && s.forEach((o)=>{
                i(o = sXc(o)), o.mark || o.ignore || o.clearMark || (o.mark = r);
            });
        }
        for(let r in t.nodes){
            let s = t.nodes[r].spec.parseDOM;
            s && s.forEach((o)=>{
                i(o = sXc(o)), o.node || o.ignore || o.mark || (o.node = r);
            });
        }
        return n;
    }
    static fromSchema(t) {
        return t.cached.domParser || (t.cached.domParser = new JIa(t, JIa.schemaRules(t)));
    }
}, Fas = {
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
}, mXc = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
}, Bas = {
    ol: !0,
    ul: !0
}, X3t = 1, gwi = 2, Z3t = 4, ayn = class {
    constructor(e, t, n, i, r, s){
        this.type = e, this.attrs = t, this.marks = n, this.solid = i, this.options = s, this.content = [], this.activeMarks = IM.none, this.match = r || (s & Z3t ? null : e.contentMatch);
    }
    findWrapping(e) {
        if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(qd.from(e));
            if (t) this.match = this.type.contentMatch.matchFragment(t);
            else {
                let n = this.type.contentMatch, i;
                return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null;
            }
        }
        return this.match.findWrapping(e.type);
    }
    finish(e) {
        if (!(this.options & X3t)) {
            let n = this.content[this.content.length - 1], i;
            if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
                let r = n;
                n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = r.withText(r.text.slice(0, r.text.length - i[0].length));
            }
        }
        let t = qd.from(this.content);
        return !e && this.match && (t = t.append(this.match.fillBefore(qd.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
    }
    inlineContext(e) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Fas.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
    }
}, Uas = class {
    constructor(e, t, n){
        this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
        let i = t.topNode, r, s = rXc(null, t.preserveWhitespace, 0) | (n ? Z3t : 0);
        i ? r = new ayn(i.type, i.attrs, IM.none, !0, t.topMatch || i.type.contentMatch, s) : n ? r = new ayn(null, null, IM.none, !0, null, s) : r = new ayn(e.schema.topNodeType, null, IM.none, !0, null, s), this.nodes = [
            r
        ], this.find = t.findPositions, this.needsBlock = !1;
    }
    get top() {
        return this.nodes[this.open];
    }
    addDOM(e, t) {
        e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
    }
    addTextNode(e, t) {
        let n = e.nodeValue, i = this.top, r = i.options & gwi ? "full" : this.localPreserveWS || (i.options & X3t) > 0;
        if (r === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
            if (r) r !== "full" ? n = n.replace(/\r?\n|\r/g, " ") : n = n.replace(/\r\n?/g, `
`);
            else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
                let s = i.content[i.content.length - 1], o = e.previousSibling;
                (!s || o && o.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (n = n.slice(1));
            }
            n && this.insertNode(this.parser.schema.text(n), t, !/\S/.test(n)), this.findInText(e);
        } else this.findInside(e);
    }
    addElement(e, t, n) {
        let i = this.localPreserveWS, r = this.top;
        (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
        let s = e.nodeName.toLowerCase(), o;
        Bas.hasOwnProperty(s) && this.parser.normalizeLists && rEg(e);
        let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
        e: if (a ? a.ignore : mXc.hasOwnProperty(s)) this.findInside(e), this.ignoreFallback(e, t);
        else if (!a || a.skip || a.closeParent) {
            a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
            let c, l = this.needsBlock;
            if (Fas.hasOwnProperty(s)) r.content.length && r.content[0].isInline && this.open && (this.open--, r = this.top), c = !0, r.type || (this.needsBlock = !0);
            else if (!e.firstChild) {
                this.leafFallback(e, t);
                break e;
            }
            let u = a && a.skip ? t : this.readStyles(e, t);
            u && this.addAll(e, u), c && this.sync(r), this.needsBlock = l;
        } else {
            let c = this.readStyles(e, t);
            c && this.addElementByRule(e, a, c, a.consuming === !1 ? o : void 0);
        }
        this.localPreserveWS = i;
    }
    leafFallback(e, t) {
        e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
    }
    ignoreFallback(e, t) {
        e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
    }
    readStyles(e, t) {
        let n = e.style;
        if (n && n.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let r = this.parser.matchedStyles[i], s = n.getPropertyValue(r);
            if (s) for(let o = void 0;;){
                let a = this.parser.matchStyle(r, s, this, o);
                if (!a) break;
                if (a.ignore) return null;
                if (a.clearMark ? t = t.filter((c)=>!a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1) o = a;
                else break;
            }
        }
        return t;
    }
    addElementByRule(e, t, n, i) {
        let r, s;
        if (t.node) if (s = this.parser.schema.nodes[t.node], s.isLeaf) this.insertNode(s.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
        else {
            let a = this.enter(s, t.attrs || null, n, t.preserveWhitespace);
            a && (r = !0, n = a);
        }
        else {
            let a = this.parser.schema.marks[t.mark];
            n = n.concat(a.create(t.attrs));
        }
        let o = this.top;
        if (s && s.isLeaf) this.findInside(e);
        else if (i) this.addElement(e, n, i);
        else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((a)=>this.insertNode(a, n, !1));
        else {
            let a = e;
            typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, n), this.findAround(e, a, !1);
        }
        r && this.sync(o) && this.open--;
    }
    addAll(e, t, n, i) {
        let r = n || 0;
        for(let s = n ? e.childNodes[n] : e.firstChild, o = i == null ? null : e.childNodes[i]; s != o; s = s.nextSibling, ++r)this.findAtPoint(e, r), this.addDOM(s, t);
        this.findAtPoint(e, r);
    }
    findPlace(e, t, n) {
        let i, r;
        for(let s = this.open, o = 0; s >= 0; s--){
            let a = this.nodes[s], c = a.findWrapping(e);
            if (c && (!i || i.length > c.length + o) && (i = c, r = a, !c.length)) break;
            if (a.solid) {
                if (n) break;
                o += 2;
            }
        }
        if (!i) return null;
        this.sync(r);
        for(let s = 0; s < i.length; s++)t = this.enterInner(i[s], null, t, !1);
        return t;
    }
    insertNode(e, t, n) {
        if (e.isInline && this.needsBlock && !this.top.type) {
            let r = this.textblockFromContext();
            r && (t = this.enterInner(r, null, t));
        }
        let i = this.findPlace(e, t, n);
        if (i) {
            this.closeExtra();
            let r = this.top;
            r.match && (r.match = r.match.matchType(e.type));
            let s = IM.none;
            for (let o of i.concat(e.marks))(r.type ? r.type.allowsMarkType(o.type) : oXc(o.type, e.type)) && (s = o.addToSet(s));
            return r.content.push(e.mark(s)), !0;
        }
        return !1;
    }
    enter(e, t, n, i) {
        let r = this.findPlace(e.create(t), n, !1);
        return r && (r = this.enterInner(e, t, n, !0, i)), r;
    }
    enterInner(e, t, n, i = !1, r) {
        this.closeExtra();
        let s = this.top;
        s.match = s.match && s.match.matchType(e);
        let o = rXc(e, r, s.options);
        s.options & Z3t && s.content.length == 0 && (o |= Z3t);
        let a = IM.none;
        return n = n.filter((c)=>(s.type ? s.type.allowsMarkType(c.type) : oXc(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new ayn(e, t, a, i, null, o)), this.open++, n;
    }
    closeExtra(e = !1) {
        let t = this.nodes.length - 1;
        if (t > this.open) {
            for(; t > this.open; t--)this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(e) {
        for(let t = this.open; t >= 0; t--){
            if (this.nodes[t] == e) return this.open = t, !0;
            this.localPreserveWS && (this.nodes[t].options |= X3t);
        }
        return !1;
    }
    get currentPos() {
        this.closeExtra();
        let e = 0;
        for(let t = this.open; t >= 0; t--){
            let n = this.nodes[t].content;
            for(let i = n.length - 1; i >= 0; i--)e += n[i].nodeSize;
            t && e++;
        }
        return e;
    }
    findAtPoint(e, t) {
        if (this.find) for(let n = 0; n < this.find.length; n++)this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
    }
    findInside(e) {
        if (this.find) for(let t = 0; t < this.find.length; t++)this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
    }
    findAround(e, t, n) {
        if (e != t && this.find) for(let i = 0; i < this.find.length; i++)this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
    }
    findInText(e) {
        if (this.find) for(let t = 0; t < this.find.length; t++)this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
    matchesContext(e) {
        if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
        let t = e.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), r = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), s = (o, a)=>{
            for(; o >= 0; o--){
                let c = t[o];
                if (c == "") {
                    if (o == t.length - 1 || o == 0) continue;
                    for(; a >= r; a--)if (s(o - 1, a)) return !0;
                    return !1;
                } else {
                    let l = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= r ? n.node(a - r).type : null;
                    if (!l || l.name != c && !l.isInGroup(c)) return !1;
                    a--;
                }
            }
            return !0;
        };
        return s(t.length - 1, this.open);
    }
    textblockFromContext() {
        let e = this.options.context;
        if (e) for(let t = e.depth; t >= 0; t--){
            let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
            if (n && n.isTextblock && n.defaultAttrs) return n;
        }
        for(let t in this.parser.schema.nodes){
            let n = this.parser.schema.nodes[t];
            if (n.isTextblock && n.defaultAttrs) return n;
        }
    }
}, Q3t = class dwm {
    constructor(t, n){
        this.nodes = t, this.marks = n;
    }
    serializeFragment(t, n = {}, i) {
        i || (i = Das(n).createDocumentFragment());
        let r = i, s = [];
        return t.forEach((o)=>{
            if (s.length || o.marks.length) {
                let a = 0, c = 0;
                for(; a < s.length && c < o.marks.length;){
                    let l = o.marks[c];
                    if (!this.marks[l.type.name]) {
                        c++;
                        continue;
                    }
                    if (!l.eq(s[a][0]) || l.type.spec.spanning === !1) break;
                    a++, c++;
                }
                for(; a < s.length;)r = s.pop()[1];
                for(; c < o.marks.length;){
                    let l = o.marks[c++], u = this.serializeMark(l, o.isInline, n);
                    u && (s.push([
                        l,
                        r
                    ]), r.appendChild(u.dom), r = u.contentDOM || u.dom);
                }
            }
            r.appendChild(this.serializeNodeInner(o, n));
        }), i;
    }
    serializeNodeInner(t, n) {
        let { dom: i, contentDOM: r } = pwi(Das(n), this.nodes[t.type.name](t), null, t.attrs);
        if (r) {
            if (t.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(t.content, n, r);
        }
        return i;
    }
    serializeNode(t, n = {}) {
        let i = this.serializeNodeInner(t, n);
        for(let r = t.marks.length - 1; r >= 0; r--){
            let s = this.serializeMark(t.marks[r], t.isInline, n);
            s && ((s.contentDOM || s.dom).appendChild(i), i = s.dom);
        }
        return i;
    }
    serializeMark(t, n, i = {}) {
        let r = this.marks[t.type.name];
        return r && pwi(Das(i), r(t, n), null, t.attrs);
    }
    static renderSpec(t, n, i = null, r) {
        return pwi(t, n, i, r);
    }
    static fromSchema(t) {
        return t.cached.domSerializer || (t.cached.domSerializer = new dwm(this.nodesFromSchema(t), this.marksFromSchema(t)));
    }
    static nodesFromSchema(t) {
        let n = aXc(t.nodes);
        return n.text || (n.text = (i)=>i.text), n;
    }
    static marksFromSchema(t) {
        return aXc(t.marks);
    }
}, $as = new WeakMap;

}
