import { Zu, si } from "./HVr.js";
import { _D, nre } from "./cursorColumns.js";
import { WBe, uW } from "./length.js";
import { Bgg, Sle, pA } from "./qIc.js";
import { dre, mOt } from "./smallImmutableSet.js";
import { x } from "./tslib.es6.js";
var Cvi, bQr, vwe, Tvi, hFc, Evi, yQr, pFc, xvi, Tze, SQr, mFc;
export { Cvi, Evi, SQr, Tvi, Tze, bQr, hFc, mFc, pFc, vwe, xvi, yQr };
var __wakaru_Ivi_initialized = false;
export function Ivi() {
if (__wakaru_Ivi_initialized) return;
__wakaru_Ivi_initialized = true;
"use strict";
x(), si(), nre(), WBe(), mOt(), Cvi = class {
    get length() {
        return this._length;
    }
    constructor(e){
        this._length = e;
    }
}, bQr = class a1r extends Cvi {
    constructor(t, n, i, r, s){
        super(t), this.openingBracket = n, this.child = i, this.closingBracket = r, this.missingOpeningBracketIds = s;
    }
    static create(t, n, i) {
        let r = t.length;
        return n && (r = pA(r, n.length)), i && (r = pA(r, i.length)), new a1r(r, t, n, i, n ? n.missingOpeningBracketIds : dre.getEmpty());
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
    getChild(t) {
        switch(t){
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
        const t = [];
        return t.push(this.openingBracket), this.child && t.push(this.child), this.closingBracket && t.push(this.closingBracket), t;
    }
    canBeReused(t) {
        return !(this.closingBracket === null || t.intersects(this.missingOpeningBracketIds));
    }
    flattenLists() {
        return a1r.create(this.openingBracket.flattenLists(), this.child && this.child.flattenLists(), this.closingBracket && this.closingBracket.flattenLists());
    }
    deepClone() {
        return new a1r(this.length, this.openingBracket.deepClone(), this.child && this.child.deepClone(), this.closingBracket && this.closingBracket.deepClone(), this.missingOpeningBracketIds);
    }
    computeMinIndentation(t, n) {
        return this.child ? this.child.computeMinIndentation(pA(t, this.openingBracket.length), n) : Number.MAX_SAFE_INTEGER;
    }
}, vwe = class nkm extends Cvi {
    constructor(t, n, i){
        super(t), this.listHeight = n, this._missingOpeningBracketIds = i, this.cachedMinIndentation = -1;
    }
    static create23(t, n, i, r = !1) {
        let s = t.length, o = t.missingOpeningBracketIds;
        if (t.listHeight !== n.listHeight) throw new Error("Invalid list heights");
        if (s = pA(s, n.length), o = o.merge(n.missingOpeningBracketIds), i) {
            if (t.listHeight !== i.listHeight) throw new Error("Invalid list heights");
            s = pA(s, i.length), o = o.merge(i.missingOpeningBracketIds);
        }
        return r ? new hFc(s, t.listHeight + 1, t, n, i, o) : new Tvi(s, t.listHeight + 1, t, n, i, o);
    }
    static create(t, n = !1) {
        if (t.length === 0) return this.getEmpty();
        {
            let i = t[0].length, r = t[0].missingOpeningBracketIds;
            for(let s = 1; s < t.length; s++)i = pA(i, t[s].length), r = r.merge(t[s].missingOpeningBracketIds);
            return n ? new yQr(i, t[0].listHeight + 1, t, r) : new Evi(i, t[0].listHeight + 1, t, r);
        }
    }
    static getEmpty() {
        return new yQr(uW, 0, [], dre.getEmpty());
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
        const t = this.childrenLength;
        if (t === 0) return;
        const n = this.getChild(t - 1), i = n.kind === 4 ? n.toMutable() : n;
        return n !== i && this.setChild(t - 1, i), i;
    }
    makeFirstElementMutable() {
        if (this.throwIfImmutable(), this.childrenLength === 0) return;
        const n = this.getChild(0), i = n.kind === 4 ? n.toMutable() : n;
        return n !== i && this.setChild(0, i), i;
    }
    canBeReused(t) {
        if (t.intersects(this.missingOpeningBracketIds) || this.childrenLength === 0) return !1;
        let n = this;
        for(; n.kind === 4;){
            const i = n.childrenLength;
            if (i === 0) throw new Zu;
            n = n.getChild(i - 1);
        }
        return n.canBeReused(t);
    }
    handleChildrenChanged() {
        this.throwIfImmutable();
        const t = this.childrenLength;
        let n = this.getChild(0).length, i = this.getChild(0).missingOpeningBracketIds;
        for(let r = 1; r < t; r++){
            const s = this.getChild(r);
            n = pA(n, s.length), i = i.merge(s.missingOpeningBracketIds);
        }
        this._length = n, this._missingOpeningBracketIds = i, this.cachedMinIndentation = -1;
    }
    flattenLists() {
        const t = [];
        for (const n of this.children){
            const i = n.flattenLists();
            i.kind === 4 ? t.push(...i.children) : t.push(i);
        }
        return nkm.create(t);
    }
    computeMinIndentation(t, n) {
        if (this.cachedMinIndentation !== -1) return this.cachedMinIndentation;
        let i = Number.MAX_SAFE_INTEGER, r = t;
        for(let s = 0; s < this.childrenLength; s++){
            const o = this.getChild(s);
            o && (i = Math.min(i, o.computeMinIndentation(r, n)), r = pA(r, o.length));
        }
        return this.cachedMinIndentation = i, i;
    }
}, Tvi = class ikm extends vwe {
    constructor(t, n, i, r, s, o){
        super(t, n, o), this._item1 = i, this._item2 = r, this._item3 = s;
    }
    get childrenLength() {
        return this._item3 !== null ? 3 : 2;
    }
    getChild(t) {
        switch(t){
            case 0:
                return this._item1;
            case 1:
                return this._item2;
            case 2:
                return this._item3;
        }
        throw new Error("Invalid child index");
    }
    setChild(t, n) {
        switch(t){
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
        return new ikm(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3 ? this._item3.deepClone() : null, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(t) {
        if (this._item3) throw new Error("Cannot append to a full (2,3) tree node");
        this.throwIfImmutable(), this._item3 = t, this.handleChildrenChanged();
    }
    unappendChild() {
        if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
        this.throwIfImmutable();
        const t = this._item3;
        return this._item3 = null, this.handleChildrenChanged(), t;
    }
    prependChildOfSameHeight(t) {
        if (this._item3) throw new Error("Cannot prepend to a full (2,3) tree node");
        this.throwIfImmutable(), this._item3 = this._item2, this._item2 = this._item1, this._item1 = t, this.handleChildrenChanged();
    }
    unprependChild() {
        if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
        this.throwIfImmutable();
        const t = this._item1;
        return this._item1 = this._item2, this._item2 = this._item3, this._item3 = null, this.handleChildrenChanged(), t;
    }
    toMutable() {
        return this;
    }
}, hFc = class extends Tvi {
    toMutable() {
        return new Tvi(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error("this instance is immutable");
    }
}, Evi = class rkm extends vwe {
    constructor(t, n, i, r){
        super(t, n, r), this._children = i;
    }
    get childrenLength() {
        return this._children.length;
    }
    getChild(t) {
        return this._children[t];
    }
    setChild(t, n) {
        this._children[t] = n;
    }
    get children() {
        return this._children;
    }
    deepClone() {
        const t = new Array(this._children.length);
        for(let n = 0; n < this._children.length; n++)t[n] = this._children[n].deepClone();
        return new rkm(this.length, this.listHeight, t, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(t) {
        this.throwIfImmutable(), this._children.push(t), this.handleChildrenChanged();
    }
    unappendChild() {
        this.throwIfImmutable();
        const t = this._children.pop();
        return this.handleChildrenChanged(), t;
    }
    prependChildOfSameHeight(t) {
        this.throwIfImmutable(), this._children.unshift(t), this.handleChildrenChanged();
    }
    unprependChild() {
        this.throwIfImmutable();
        const t = this._children.shift();
        return this.handleChildrenChanged(), t;
    }
    toMutable() {
        return this;
    }
}, yQr = class extends Evi {
    toMutable() {
        return new Evi(this.length, this.listHeight, [
            ...this.children
        ], this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error("this instance is immutable");
    }
}, pFc = [], xvi = class extends Cvi {
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 0;
    }
    getChild(e) {
        return null;
    }
    get children() {
        return pFc;
    }
    flattenLists() {
        return this;
    }
    deepClone() {
        return this;
    }
}, Tze = class extends xvi {
    get kind() {
        return 0;
    }
    get missingOpeningBracketIds() {
        return dre.getEmpty();
    }
    canBeReused(e) {
        return !0;
    }
    computeMinIndentation(e, t) {
        const n = Sle(e), i = (n.columnCount === 0 ? n.lineCount : n.lineCount + 1) + 1, r = Bgg(pA(e, this.length)) + 1;
        let s = Number.MAX_SAFE_INTEGER;
        for(let o = i; o <= r; o++){
            const a = t.getLineFirstNonWhitespaceColumn(o), c = t.getLineContent(o);
            if (a === 0) continue;
            const l = _D.visibleColumnFromColumn(c, a, t.getOptions().tabSize);
            s = Math.min(s, l);
        }
        return s;
    }
}, SQr = class skm extends xvi {
    constructor(t, n, i){
        super(t), this.bracketInfo = n, this.bracketIds = i;
    }
    static create(t, n, i) {
        return new skm(t, n, i);
    }
    get kind() {
        return 1;
    }
    get missingOpeningBracketIds() {
        return dre.getEmpty();
    }
    get text() {
        return this.bracketInfo.bracketText;
    }
    get languageId() {
        return this.bracketInfo.languageId;
    }
    canBeReused(t) {
        return !1;
    }
    computeMinIndentation(t, n) {
        return Number.MAX_SAFE_INTEGER;
    }
}, mFc = class extends xvi {
    get kind() {
        return 3;
    }
    constructor(e, t){
        super(t), this.missingOpeningBracketIds = e;
    }
    canBeReused(e) {
        return !e.intersects(this.missingOpeningBracketIds);
    }
    computeMinIndentation(e, t) {
        return Number.MAX_SAFE_INTEGER;
    }
};

}
