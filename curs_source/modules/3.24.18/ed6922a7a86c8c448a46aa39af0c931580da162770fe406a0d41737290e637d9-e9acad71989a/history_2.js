import { Se, cn } from "./HVr.js";
import { MEc, lge } from "./collections.js";
import { NHc, bkg } from "./navigator.js";
import { x } from "./tslib.es6.js";
var Uyi, n3t;
export { Uyi, n3t };
var __wakaru_o_n_initialized = false;
export function o_n() {
if (__wakaru_o_n_initialized) return;
__wakaru_o_n_initialized = true;
"use strict";
x(), lge(), Se(), bkg(), Uyi = class {
    constructor(e = new Set, t = 10){
        this._history = e, this._limit = t, this._onChange(), this._history.onDidChange && (this._disposable = new cn, this._disposable.value = this._history.onDidChange(()=>this._onChange()));
    }
    getHistory() {
        return this._elements;
    }
    add(e) {
        this._history.delete(e), this._history.add(e), this._onChange();
    }
    next() {
        return this._navigator.next();
    }
    previous() {
        return this._currentPosition() !== 0 ? this._navigator.previous() : null;
    }
    current() {
        return this._navigator.current();
    }
    first() {
        return this._navigator.first();
    }
    last() {
        return this._navigator.last();
    }
    isFirst() {
        return this._currentPosition() === 0;
    }
    isLast() {
        return this._currentPosition() >= this._elements.length - 1;
    }
    isNowhere() {
        return this._navigator.current() === null;
    }
    has(e) {
        return this._history.has(e);
    }
    clear() {
        this._history.clear(), this._onChange();
    }
    _onChange() {
        this._reduceToLimit();
        const e = this._elements;
        this._navigator = new NHc(e, 0, e.length, e.length);
    }
    _reduceToLimit() {
        const e = this._elements;
        if (e.length > this._limit) {
            const t = e.slice(e.length - this._limit);
            this._history.replace ? this._history.replace(t) : this._history = new Set(t);
        }
    }
    _currentPosition() {
        const e = this._navigator.current();
        return e ? this._elements.indexOf(e) : -1;
    }
    get _elements() {
        const e = [];
        return this._history.forEach((t)=>e.push(t)), e;
    }
    dispose() {
        this._disposable?.dispose();
    }
}, n3t = class {
    constructor(e, t = 10, n = (i)=>i){
        if (this.capacity = t, this.identityFn = n, e.length < 1) throw new Error("not supported");
        this._size = 1, this.head = this.tail = this.cursor = {
            value: e[0],
            previous: void 0,
            next: void 0
        }, this.valueSet = new MEc([
            e[0]
        ], n);
        for(let i = 1; i < e.length; i++)this.add(e[i]);
    }
    get size() {
        return this._size;
    }
    add(e) {
        const t = {
            value: e,
            previous: this.tail,
            next: void 0
        };
        for(this.tail.next = t, this.tail = t, this.cursor = this.tail, this._size++, this.valueSet.has(e) ? this._deleteFromList(e) : this.valueSet.add(e); this._size > this.capacity;)this.valueSet.delete(this.head.value), this.head = this.head.next, this.head.previous = void 0, this._size--;
    }
    replaceLast(e) {
        if (this.identityFn(this.tail.value) === this.identityFn(e)) return e;
        const t = this.tail.value;
        return this.valueSet.delete(t), this.tail.value = e, this.valueSet.has(e) ? this._deleteFromList(e) : this.valueSet.add(e), t;
    }
    prepend(e) {
        if (this._size === this.capacity || this.valueSet.has(e)) return;
        const t = {
            value: e,
            previous: void 0,
            next: this.head
        };
        this.head.previous = t, this.head = t, this._size++, this.valueSet.add(e);
    }
    isAtEnd() {
        return this.cursor === this.tail;
    }
    current() {
        return this.cursor.value;
    }
    previous() {
        return this.cursor.previous && (this.cursor = this.cursor.previous), this.cursor.value;
    }
    next() {
        return this.cursor.next && (this.cursor = this.cursor.next), this.cursor.value;
    }
    has(e) {
        return this.valueSet.has(e);
    }
    resetCursor() {
        return this.cursor = this.tail, this.cursor.value;
    }
    *[Symbol.iterator]() {
        let e = this.head;
        for(; e;)yield e.value, e = e.next;
    }
    _deleteFromList(e) {
        let t = this.head;
        const n = this.identityFn(e);
        for(; t !== this.tail;)this.identityFn(t.value) === n && (t === this.head ? (this.head = this.head.next, this.head.previous = void 0) : (t.previous.next = t.next, t.next.previous = t.previous), this._size--), t = t.next;
    }
};

}
