import { Ei, xh } from "./Iwo.js";
import { avn, s_e } from "./point.js";
import { E } from "./tslib.es6.js";
var _6;
export { _6 };
var __wakaru_t0t_initialized = false;
export function t0t() {
if (__wakaru_t0t_initialized) return;
__wakaru_t0t_initialized = true;
"use strict";
E(), Ei(), avn(), _6 = class A8 {
    constructor(e, n, i, r){
        if (this.left = e, this.top = n, this.right = i, this.bottom = r, e > i || n > r) throw new xh("Invalid arguments");
    }
    static fromPoint(e) {
        return new A8(e.x, e.y, e.x, e.y);
    }
    static fromPoints(e, n) {
        return new A8(e.x, e.y, n.x, n.y);
    }
    static fromPointSize(e, n) {
        return new A8(e.x, e.y, e.x + n.x, e.y + n.y);
    }
    static fromLeftTopRightBottom(e, n, i, r) {
        return new A8(e, n, i, r);
    }
    static fromLeftTopWidthHeight(e, n, i, r) {
        return new A8(e, n, e + i, n + r);
    }
    static fromRanges(e, n) {
        return new A8(e.start, n.start, e.endExclusive, n.endExclusive);
    }
    static hull(e) {
        let n = Number.MAX_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER, r = Number.MIN_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
        for (const o of e)n = Math.min(n, o.left), i = Math.min(i, o.top), r = Math.max(r, o.right), s = Math.max(s, o.bottom);
        return new A8(n, i, r, s);
    }
    get width() {
        return this.right - this.left;
    }
    get height() {
        return this.bottom - this.top;
    }
    withMargin(e, n, i, r) {
        let s, o, a, l;
        return n === void 0 && i === void 0 && r === void 0 ? s = o = a = l = e : i === void 0 && r === void 0 ? (s = o = n, a = l = e) : (s = r, o = n, a = e, l = i), new A8(this.left - s, this.top - a, this.right + o, this.bottom + l);
    }
    intersectVertical(e) {
        const n = Math.max(this.top, e.start), i = Math.min(this.bottom, e.endExclusive);
        return new A8(this.left, n, this.right, Math.max(n, i));
    }
    intersectHorizontal(e) {
        const n = Math.max(this.left, e.start), i = Math.min(this.right, e.endExclusive);
        return new A8(n, this.top, Math.max(n, i), this.bottom);
    }
    toString() {
        return `Rect{(${this.left},${this.top}), (${this.right},${this.bottom})}`;
    }
    intersect(e) {
        const n = Math.max(this.left, e.left), i = Math.min(this.right, e.right), r = Math.max(this.top, e.top), s = Math.min(this.bottom, e.bottom);
        if (!(n > i || r > s)) return new A8(n, r, i, s);
    }
    union(e) {
        return new A8(Math.min(this.left, e.left), Math.min(this.top, e.top), Math.max(this.right, e.right), Math.max(this.bottom, e.bottom));
    }
    containsRect(e) {
        return this.left <= e.left && this.top <= e.top && this.right >= e.right && this.bottom >= e.bottom;
    }
    containsPoint(e) {
        return this.left <= e.x && this.top <= e.y && this.right >= e.x && this.bottom >= e.y;
    }
    moveToBeContainedIn(e) {
        const n = this.width, i = this.height;
        let r = this.left, s = this.top;
        return r < e.left ? r = e.left : r + n > e.right && (r = e.right - n), s < e.top ? s = e.top : s + i > e.bottom && (s = e.bottom - i), new A8(r, s, r + n, s + i);
    }
    withWidth(e) {
        return new A8(this.left, this.top, this.left + e, this.bottom);
    }
    withHeight(e) {
        return new A8(this.left, this.top, this.right, this.top + e);
    }
    withTop(e) {
        return new A8(this.left, e, this.right, this.bottom);
    }
    withLeft(e) {
        return new A8(e, this.top, this.right, this.bottom);
    }
    translateX(e) {
        return new A8(this.left + e, this.top, this.right + e, this.bottom);
    }
    translateY(e) {
        return new A8(this.left, this.top + e, this.right, this.bottom + e);
    }
    deltaRight(e) {
        return new A8(this.left, this.top, this.right + e, this.bottom);
    }
    deltaTop(e) {
        return new A8(this.left, this.top + e, this.right, this.bottom);
    }
    deltaLeft(e) {
        return new A8(this.left + e, this.top, this.right, this.bottom);
    }
    deltaBottom(e) {
        return new A8(this.left, this.top, this.right, this.bottom + e);
    }
    getLeftBottom() {
        return new s_e(this.left, this.bottom);
    }
    getRightBottom() {
        return new s_e(this.right, this.bottom);
    }
    getLeftTop() {
        return new s_e(this.left, this.top);
    }
    getRightTop() {
        return new s_e(this.right, this.top);
    }
    toStyles() {
        return {
            position: "absolute",
            left: `${this.left}px`,
            top: `${this.top}px`,
            width: `${this.width}px`,
            height: `${this.height}px`
        };
    }
};

}
