import { Ei, xh } from "./Iwo.js";
import { sL, zve } from "./cursorColumns.js";
import { Ftt, IQ } from "./length.js";
import { Xve, nfn } from "./smallImmutableSet.js";
import { E } from "./tslib.es6.js";
import { $2y, ND, hwe } from "./ze.js";
var l0r, Rjo, S5e, c0r, $Bd, u0r, Pjo, HBd, d0r, nyt, Mjo, WBd;
export { $Bd, HBd, Mjo, Pjo, Rjo, S5e, WBd, c0r, d0r, l0r, nyt, u0r };
var __wakaru_h0r_initialized = false;
export function h0r() {
if (__wakaru_h0r_initialized) return;
__wakaru_h0r_initialized = true;
"use strict";
E(), Ei(), zve(), Ftt(), nfn(), l0r = class {
    get length() {
        return this._length;
    }
    constructor(t){
        this._length = t;
    }
}, Rjo = class KYs extends l0r {
    constructor(e, n, i, r, s){
        super(e), this.openingBracket = n, this.child = i, this.closingBracket = r, this.missingOpeningBracketIds = s;
    }
    static create(e, n, i) {
        let r = e.length;
        return n && (r = ND(r, n.length)), i && (r = ND(r, i.length)), new KYs(r, e, n, i, n ? n.missingOpeningBracketIds : Xve.getEmpty());
    }
    get kind() {
        return 2;
    }
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 3;
    }
    getChild(e) {
        switch(e){
            case 0:
                return this.openingBracket;
            case 1:
                return this.child;
            case 2:
                return this.closingBracket;
        }
        throw new Error("Invalid child index");
    }
    get children() {
        const e = [];
        return e.push(this.openingBracket), this.child && e.push(this.child), this.closingBracket && e.push(this.closingBracket), e;
    }
    canBeReused(e) {
        return !(this.closingBracket === null || e.intersects(this.missingOpeningBracketIds));
    }
    flattenLists() {
        return KYs.create(this.openingBracket.flattenLists(), this.child && this.child.flattenLists(), this.closingBracket && this.closingBracket.flattenLists());
    }
    deepClone() {
        return new KYs(this.length, this.openingBracket.deepClone(), this.child && this.child.deepClone(), this.closingBracket && this.closingBracket.deepClone(), this.missingOpeningBracketIds);
    }
    computeMinIndentation(e, n) {
        return this.child ? this.child.computeMinIndentation(ND(e, this.openingBracket.length), n) : Number.MAX_SAFE_INTEGER;
    }
}, S5e = class IAb extends l0r {
    constructor(e, n, i){
        super(e), this.listHeight = n, this._missingOpeningBracketIds = i, this.cachedMinIndentation = -1;
    }
    static create23(e, n, i, r = !1) {
        let s = e.length, o = e.missingOpeningBracketIds;
        if (e.listHeight !== n.listHeight) throw new Error("Invalid list heights");
        if (s = ND(s, n.length), o = o.merge(n.missingOpeningBracketIds), i) {
            if (e.listHeight !== i.listHeight) throw new Error("Invalid list heights");
            s = ND(s, i.length), o = o.merge(i.missingOpeningBracketIds);
        }
        return r ? new $Bd(s, e.listHeight + 1, e, n, i, o) : new c0r(s, e.listHeight + 1, e, n, i, o);
    }
    static create(e, n = !1) {
        if (e.length === 0) return this.getEmpty();
        {
            let i = e[0].length, r = e[0].missingOpeningBracketIds;
            for(let s = 1; s < e.length; s++)i = ND(i, e[s].length), r = r.merge(e[s].missingOpeningBracketIds);
            return n ? new Pjo(i, e[0].listHeight + 1, e, r) : new u0r(i, e[0].listHeight + 1, e, r);
        }
    }
    static getEmpty() {
        return new Pjo(IQ, 0, [], Xve.getEmpty());
    }
    get kind() {
        return 4;
    }
    get missingOpeningBracketIds() {
        return this._missingOpeningBracketIds;
    }
    throwIfImmutable() {}
    makeLastElementMutable() {
        this.throwIfImmutable();
        const e = this.childrenLength;
        if (e === 0) return;
        const n = this.getChild(e - 1), i = n.kind === 4 ? n.toMutable() : n;
        return n !== i && this.setChild(e - 1, i), i;
    }
    makeFirstElementMutable() {
        if (this.throwIfImmutable(), this.childrenLength === 0) return;
        const n = this.getChild(0), i = n.kind === 4 ? n.toMutable() : n;
        return n !== i && this.setChild(0, i), i;
    }
    canBeReused(e) {
        if (e.intersects(this.missingOpeningBracketIds) || this.childrenLength === 0) return !1;
        let n = this;
        for(; n.kind === 4;){
            const i = n.childrenLength;
            if (i === 0) throw new xh;
            n = n.getChild(i - 1);
        }
        return n.canBeReused(e);
    }
    handleChildrenChanged() {
        this.throwIfImmutable();
        const e = this.childrenLength;
        let n = this.getChild(0).length, i = this.getChild(0).missingOpeningBracketIds;
        for(let r = 1; r < e; r++){
            const s = this.getChild(r);
            n = ND(n, s.length), i = i.merge(s.missingOpeningBracketIds);
        }
        this._length = n, this._missingOpeningBracketIds = i, this.cachedMinIndentation = -1;
    }
    flattenLists() {
        const e = [];
        for (const n of this.children){
            const i = n.flattenLists();
            i.kind === 4 ? e.push(...i.children) : e.push(i);
        }
        return IAb.create(e);
    }
    computeMinIndentation(e, n) {
        if (this.cachedMinIndentation !== -1) return this.cachedMinIndentation;
        let i = Number.MAX_SAFE_INTEGER, r = e;
        for(let s = 0; s < this.childrenLength; s++){
            const o = this.getChild(s);
            o && (i = Math.min(i, o.computeMinIndentation(r, n)), r = ND(r, o.length));
        }
        return this.cachedMinIndentation = i, i;
    }
}, c0r = class xAb extends S5e {
    constructor(e, n, i, r, s, o){
        super(e, n, o), this._item1 = i, this._item2 = r, this._item3 = s;
    }
    get childrenLength() {
        return this._item3 !== null ? 3 : 2;
    }
    getChild(e) {
        switch(e){
            case 0:
                return this._item1;
            case 1:
                return this._item2;
            case 2:
                return this._item3;
        }
        throw new Error("Invalid child index");
    }
    setChild(e, n) {
        switch(e){
            case 0:
                this._item1 = n;
                return;
            case 1:
                this._item2 = n;
                return;
            case 2:
                this._item3 = n;
                return;
        }
        throw new Error("Invalid child index");
    }
    get children() {
        return this._item3 ? [
            this._item1,
            this._item2,
            this._item3
        ] : [
            this._item1,
            this._item2
        ];
    }
    get item1() {
        return this._item1;
    }
    get item2() {
        return this._item2;
    }
    get item3() {
        return this._item3;
    }
    deepClone() {
        return new xAb(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3 ? this._item3.deepClone() : null, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(e) {
        if (this._item3) throw new Error("Cannot append to a full (2,3) tree node");
        this.throwIfImmutable(), this._item3 = e, this.handleChildrenChanged();
    }
    unappendChild() {
        if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
        this.throwIfImmutable();
        const e = this._item3;
        return this._item3 = null, this.handleChildrenChanged(), e;
    }
    prependChildOfSameHeight(e) {
        if (this._item3) throw new Error("Cannot prepend to a full (2,3) tree node");
        this.throwIfImmutable(), this._item3 = this._item2, this._item2 = this._item1, this._item1 = e, this.handleChildrenChanged();
    }
    unprependChild() {
        if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
        this.throwIfImmutable();
        const e = this._item1;
        return this._item1 = this._item2, this._item2 = this._item3, this._item3 = null, this.handleChildrenChanged(), e;
    }
    toMutable() {
        return this;
    }
}, $Bd = class extends c0r {
    toMutable() {
        return new c0r(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error("this instance is immutable");
    }
}, u0r = class AAb extends S5e {
    constructor(e, n, i, r){
        super(e, n, r), this._children = i;
    }
    get childrenLength() {
        return this._children.length;
    }
    getChild(e) {
        return this._children[e];
    }
    setChild(e, n) {
        this._children[e] = n;
    }
    get children() {
        return this._children;
    }
    deepClone() {
        const e = new Array(this._children.length);
        for(let n = 0; n < this._children.length; n++)e[n] = this._children[n].deepClone();
        return new AAb(this.length, this.listHeight, e, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(e) {
        this.throwIfImmutable(), this._children.push(e), this.handleChildrenChanged();
    }
    unappendChild() {
        this.throwIfImmutable();
        const e = this._children.pop();
        return this.handleChildrenChanged(), e;
    }
    prependChildOfSameHeight(e) {
        this.throwIfImmutable(), this._children.unshift(e), this.handleChildrenChanged();
    }
    unprependChild() {
        this.throwIfImmutable();
        const e = this._children.shift();
        return this.handleChildrenChanged(), e;
    }
    toMutable() {
        return this;
    }
}, Pjo = class extends u0r {
    toMutable() {
        return new u0r(this.length, this.listHeight, [
            ...this.children
        ], this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error("this instance is immutable");
    }
}, HBd = [], d0r = class extends l0r {
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 0;
    }
    getChild(t) {
        return null;
    }
    get children() {
        return HBd;
    }
    flattenLists() {
        return this;
    }
    deepClone() {
        return this;
    }
}, nyt = class extends d0r {
    get kind() {
        return 0;
    }
    get missingOpeningBracketIds() {
        return Xve.getEmpty();
    }
    canBeReused(t) {
        return !0;
    }
    computeMinIndentation(t, e) {
        const n = hwe(t), i = (n.columnCount === 0 ? n.lineCount : n.lineCount + 1) + 1, r = $2y(ND(t, this.length)) + 1;
        let s = Number.MAX_SAFE_INTEGER;
        for(let o = i; o <= r; o++){
            const a = e.getLineFirstNonWhitespaceColumn(o), l = e.getLineContent(o);
            if (a === 0) continue;
            const c = sL.visibleColumnFromColumn(l, a, e.getOptions().tabSize);
            s = Math.min(s, c);
        }
        return s;
    }
}, Mjo = class RAb extends d0r {
    constructor(e, n, i){
        super(e), this.bracketInfo = n, this.bracketIds = i;
    }
    static create(e, n, i) {
        return new RAb(e, n, i);
    }
    get kind() {
        return 1;
    }
    get missingOpeningBracketIds() {
        return Xve.getEmpty();
    }
    get text() {
        return this.bracketInfo.bracketText;
    }
    get languageId() {
        return this.bracketInfo.languageId;
    }
    canBeReused(e) {
        return !1;
    }
    computeMinIndentation(e, n) {
        return Number.MAX_SAFE_INTEGER;
    }
}, WBd = class extends d0r {
    get kind() {
        return 3;
    }
    constructor(t, e){
        super(e), this.missingOpeningBracketIds = t;
    }
    canBeReused(t) {
        return !t.intersects(this.missingOpeningBracketIds);
    }
    computeMinIndentation(t, e) {
        return Number.MAX_SAFE_INTEGER;
    }
};

}
