import { h } from "./tslib.es6.js";
var Wv, nn, lR;
export { Wv, lR, nn };
var __wakaru_j4_initialized = false;
export function j4() {
if (__wakaru_j4_initialized) return;
__wakaru_j4_initialized = true;
"use strict";
h(), Wv = class Tx {
    constructor(t){
        this.element = t, this.next = Tx.Undefined, this.prev = Tx.Undefined;
    }
}, Wv.Undefined = new Wv(void 0), nn = Wv, lR = class {
    constructor(){
        this._first = nn.Undefined, this._last = nn.Undefined, this._size = 0;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._first;
    }
    isEmpty() {
        return this._first === nn.Undefined;
    }
    clear() {
        let e = this._first;
        for(; e !== nn.Undefined;){
            const t = e.next;
            e.prev = nn.Undefined, e.next = nn.Undefined, e = t;
        }
        this._first = nn.Undefined, this._last = nn.Undefined, this._size = 0;
    }
    unshift(e) {
        return this._insert(e, !1);
    }
    push(e) {
        return this._insert(e, !0);
    }
    _insert(e, t) {
        const n = new nn(e);
        if (this._first === nn.Undefined) this._first = n, this._last = n;
        else if (t) {
            const s = this._last;
            this._last = n, n.prev = s, s.next = n;
        } else {
            const s = this._first;
            this._first = n, n.next = s, s.prev = n;
        }
        this._size += 1;
        let r = !1;
        return ()=>{
            r || (r = !0, this._remove(n));
        };
    }
    shift() {
        if (this._first !== nn.Undefined) {
            const e = this._first.element;
            return this._remove(this._first), e;
        }
    }
    pop() {
        if (this._last !== nn.Undefined) {
            const e = this._last.element;
            return this._remove(this._last), e;
        }
    }
    remove(e) {
        this._remove(e);
    }
    _remove(e) {
        if (e.prev !== nn.Undefined && e.next !== nn.Undefined) {
            const t = e.prev;
            t.next = e.next, e.next.prev = t;
        } else e.prev === nn.Undefined && e.next === nn.Undefined ? (this._first = nn.Undefined, this._last = nn.Undefined) : e.next === nn.Undefined ? (this._last = this._last.prev, this._last.next = nn.Undefined) : e.prev === nn.Undefined && (this._first = this._first.next, this._first.prev = nn.Undefined);
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let e = this._first;
        for(; e !== nn.Undefined;)yield e.element, e = e.next;
    }
};

}
