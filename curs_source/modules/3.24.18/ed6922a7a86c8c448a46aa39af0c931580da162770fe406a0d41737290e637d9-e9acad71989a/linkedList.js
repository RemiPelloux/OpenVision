import { x } from "./tslib.es6.js";
var Zpi, SO, oA;
export { SO, Zpi, oA };
var __wakaru_JN_initialized = false;
export function JN() {
if (__wakaru_JN_initialized) return;
__wakaru_JN_initialized = true;
"use strict";
x(), Zpi = class oIa {
    constructor(t){
        this.element = t, this.next = oIa.Undefined, this.prev = oIa.Undefined;
    }
}, Zpi.Undefined = new Zpi(void 0), SO = Zpi, oA = class {
    constructor(){
        this._first = SO.Undefined, this._last = SO.Undefined, this._size = 0;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._first;
    }
    isEmpty() {
        return this._first === SO.Undefined;
    }
    clear() {
        let e = this._first;
        for(; e !== SO.Undefined;){
            const t = e.next;
            e.prev = SO.Undefined, e.next = SO.Undefined, e = t;
        }
        this._first = SO.Undefined, this._last = SO.Undefined, this._size = 0;
    }
    unshift(e) {
        return this._insert(e, !1);
    }
    push(e) {
        return this._insert(e, !0);
    }
    _insert(e, t) {
        const n = new SO(e);
        if (this._first === SO.Undefined) this._first = n, this._last = n;
        else if (t) {
            const r = this._last;
            this._last = n, n.prev = r, r.next = n;
        } else {
            const r = this._first;
            this._first = n, n.next = r, r.prev = n;
        }
        this._size += 1;
        let i = !1;
        return ()=>{
            i || (i = !0, this._remove(n));
        };
    }
    shift() {
        if (this._first !== SO.Undefined) {
            const e = this._first.element;
            return this._remove(this._first), e;
        }
    }
    pop() {
        if (this._last !== SO.Undefined) {
            const e = this._last.element;
            return this._remove(this._last), e;
        }
    }
    remove(e) {
        this._remove(e);
    }
    _remove(e) {
        if (e.prev !== SO.Undefined && e.next !== SO.Undefined) {
            const t = e.prev;
            t.next = e.next, e.next.prev = t;
        } else e.prev === SO.Undefined && e.next === SO.Undefined ? (this._first = SO.Undefined, this._last = SO.Undefined) : e.next === SO.Undefined ? (this._last = this._last.prev, this._last.next = SO.Undefined) : e.prev === SO.Undefined && (this._first = this._first.next, this._first.prev = SO.Undefined);
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let e = this._first;
        for(; e !== SO.Undefined;)yield e.element, e = e.next;
    }
};

}
