import { i } from "./plugin-brand-icon.js";
function CJ(r, e) {
    let a = 0;
    if (e.length < 1e4) r.push(...e);
    else for(; a < e.length;)r.push(...e.slice(a, a + 1e4)), a += 1e4;
}
var $Rt, Aur;
export { $Rt, Aur, CJ };
var __wakaru_q3i_initialized = false;
export function q3i() {
if (__wakaru_q3i_initialized) return;
__wakaru_q3i_initialized = true;
$Rt = class {
    constructor(e){
        this.left = e ? [
            ...e
        ] : [], this.right = [];
    }
    get(e) {
        if (e < 0 || e >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
    }
    get length() {
        return this.left.length + this.right.length;
    }
    shift() {
        return this.setCursor(0), this.right.pop();
    }
    slice(e, a) {
        const s = a ?? Number.POSITIVE_INFINITY;
        return s < this.left.length ? this.left.slice(e, s) : e > this.left.length ? this.right.slice(this.right.length - s + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - s + this.left.length).reverse());
    }
    splice(e, a, s) {
        const l = a || 0;
        this.setCursor(Math.trunc(e));
        const u = this.right.splice(this.right.length - l, Number.POSITIVE_INFINITY);
        return s && CJ(this.left, s), u.reverse();
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(e) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
    }
    pushMany(e) {
        this.setCursor(Number.POSITIVE_INFINITY), CJ(this.left, e);
    }
    unshift(e) {
        this.setCursor(0), this.right.push(e);
    }
    unshiftMany(e) {
        this.setCursor(0), CJ(this.right, e.reverse());
    }
    setCursor(e) {
        if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
            const a = this.left.splice(e, Number.POSITIVE_INFINITY);
            CJ(this.right, a.reverse());
        } else {
            const a = this.right.splice(this.left.length + this.right.length - e, Number.POSITIVE_INFINITY);
            CJ(this.left, a.reverse());
        }
    }
}, i($Rt, "SpliceBuffer"), Aur = $Rt, i(CJ, "chunkedPush");

}
