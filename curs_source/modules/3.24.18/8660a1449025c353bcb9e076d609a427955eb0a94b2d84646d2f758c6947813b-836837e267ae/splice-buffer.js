import { Iui } from "./LYd.js";
import { E } from "./tslib.es6.js";
var qfh;
export { qfh };
var __wakaru_qZy_initialized = false;
export function qZy() {
if (__wakaru_qZy_initialized) return;
__wakaru_qZy_initialized = true;
E(), qfh = class {
    constructor(t){
        this.left = t ? [
            ...t
        ] : [], this.right = [];
    }
    get(t) {
        if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
    }
    get length() {
        return this.left.length + this.right.length;
    }
    shift() {
        return this.setCursor(0), this.right.pop();
    }
    slice(t, e) {
        const n = e ?? Number.POSITIVE_INFINITY;
        return n < this.left.length ? this.left.slice(t, n) : t > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
    }
    splice(t, e, n) {
        const i = e || 0;
        this.setCursor(Math.trunc(t));
        const r = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return n && Iui(this.left, n), r.reverse();
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(t) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
    }
    pushMany(t) {
        this.setCursor(Number.POSITIVE_INFINITY), Iui(this.left, t);
    }
    unshift(t) {
        this.setCursor(0), this.right.push(t);
    }
    unshiftMany(t) {
        this.setCursor(0), Iui(this.right, t.reverse());
    }
    setCursor(t) {
        if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0)) if (t < this.left.length) {
            const e = this.left.splice(t, Number.POSITIVE_INFINITY);
            Iui(this.right, e.reverse());
        } else {
            const e = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
            Iui(this.left, e.reverse());
        }
    }
};

}
