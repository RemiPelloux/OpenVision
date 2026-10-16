import { E } from "./tslib.es6.js";
var Kpr, V9, tL;
export { Kpr, V9, tL };
var __wakaru_a7_initialized = false;
export function a7() {
if (__wakaru_a7_initialized) return;
__wakaru_a7_initialized = true;
"use strict";
E(), Kpr = class $Qc {
    constructor(e){
        this.element = e, this.next = $Qc.Undefined, this.prev = $Qc.Undefined;
    }
}, Kpr.Undefined = new Kpr(void 0), V9 = Kpr, tL = class {
    constructor(){
        this._first = V9.Undefined, this._last = V9.Undefined, this._size = 0;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._first;
    }
    isEmpty() {
        return this._first === V9.Undefined;
    }
    clear() {
        let t = this._first;
        for(; t !== V9.Undefined;){
            const e = t.next;
            t.prev = V9.Undefined, t.next = V9.Undefined, t = e;
        }
        this._first = V9.Undefined, this._last = V9.Undefined, this._size = 0;
    }
    unshift(t) {
        return this._insert(t, !1);
    }
    push(t) {
        return this._insert(t, !0);
    }
    _insert(t, e) {
        const n = new V9(t);
        if (this._first === V9.Undefined) this._first = n, this._last = n;
        else if (e) {
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
        if (this._first !== V9.Undefined) {
            const t = this._first.element;
            return this._remove(this._first), t;
        }
    }
    pop() {
        if (this._last !== V9.Undefined) {
            const t = this._last.element;
            return this._remove(this._last), t;
        }
    }
    remove(t) {
        this._remove(t);
    }
    _remove(t) {
        if (t.prev !== V9.Undefined && t.next !== V9.Undefined) {
            const e = t.prev;
            e.next = t.next, t.next.prev = e;
        } else t.prev === V9.Undefined && t.next === V9.Undefined ? (this._first = V9.Undefined, this._last = V9.Undefined) : t.next === V9.Undefined ? (this._last = this._last.prev, this._last.next = V9.Undefined) : t.prev === V9.Undefined && (this._first = this._first.next, this._first.prev = V9.Undefined);
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let t = this._first;
        for(; t !== V9.Undefined;)yield t.element, t = t.next;
    }
};

}
