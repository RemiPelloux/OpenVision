import { Zu, si } from "./HVr.js";
import { NFt, yre } from "./point.js";
import { x } from "./tslib.es6.js";
var bN;
export { bN };
var __wakaru_pQe_initialized = false;
export function pQe() {
if (__wakaru_pQe_initialized) return;
__wakaru_pQe_initialized = true;
"use strict";
x(), si(), NFt(), bN = class FF {
    constructor(t, n, i, r){
        if (this.left = t, this.top = n, this.right = i, this.bottom = r, t > i || n > r) throw new Zu("Invalid arguments");
    }
    static fromPoint(t) {
        return new FF(t.x, t.y, t.x, t.y);
    }
    static fromPoints(t, n) {
        return new FF(t.x, t.y, n.x, n.y);
    }
    static fromPointSize(t, n) {
        return new FF(t.x, t.y, t.x + n.x, t.y + n.y);
    }
    static fromLeftTopRightBottom(t, n, i, r) {
        return new FF(t, n, i, r);
    }
    static fromLeftTopWidthHeight(t, n, i, r) {
        return new FF(t, n, t + i, n + r);
    }
    static fromRanges(t, n) {
        return new FF(t.start, n.start, t.endExclusive, n.endExclusive);
    }
    static hull(t) {
        let n = Number.MAX_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER, r = Number.MIN_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
        for (const o of t)n = Math.min(n, o.left), i = Math.min(i, o.top), r = Math.max(r, o.right), s = Math.max(s, o.bottom);
        return new FF(n, i, r, s);
    }
    get width() {
        return this.right - this.left;
    }
    get height() {
        return this.bottom - this.top;
    }
    withMargin(t, n, i, r) {
        let s, o, a, c;
        return n === void 0 && i === void 0 && r === void 0 ? s = o = a = c = t : i === void 0 && r === void 0 ? (s = o = n, a = c = t) : (s = r, o = n, a = t, c = i), new FF(this.left - s, this.top - a, this.right + o, this.bottom + c);
    }
    intersectVertical(t) {
        const n = Math.max(this.top, t.start), i = Math.min(this.bottom, t.endExclusive);
        return new FF(this.left, n, this.right, Math.max(n, i));
    }
    intersectHorizontal(t) {
        const n = Math.max(this.left, t.start), i = Math.min(this.right, t.endExclusive);
        return new FF(n, this.top, Math.max(n, i), this.bottom);
    }
    toString() {
        return `Rect{(${this.left},${this.top}), (${this.right},${this.bottom})}`;
    }
    intersect(t) {
        const n = Math.max(this.left, t.left), i = Math.min(this.right, t.right), r = Math.max(this.top, t.top), s = Math.min(this.bottom, t.bottom);
        if (!(n > i || r > s)) return new FF(n, r, i, s);
    }
    union(t) {
        return new FF(Math.min(this.left, t.left), Math.min(this.top, t.top), Math.max(this.right, t.right), Math.max(this.bottom, t.bottom));
    }
    containsRect(t) {
        return this.left <= t.left && this.top <= t.top && this.right >= t.right && this.bottom >= t.bottom;
    }
    containsPoint(t) {
        return this.left <= t.x && this.top <= t.y && this.right >= t.x && this.bottom >= t.y;
    }
    moveToBeContainedIn(t) {
        const n = this.width, i = this.height;
        let r = this.left, s = this.top;
        return r < t.left ? r = t.left : r + n > t.right && (r = t.right - n), s < t.top ? s = t.top : s + i > t.bottom && (s = t.bottom - i), new FF(r, s, r + n, s + i);
    }
    withWidth(t) {
        return new FF(this.left, this.top, this.left + t, this.bottom);
    }
    withHeight(t) {
        return new FF(this.left, this.top, this.right, this.top + t);
    }
    withTop(t) {
        return new FF(this.left, t, this.right, this.bottom);
    }
    withLeft(t) {
        return new FF(t, this.top, this.right, this.bottom);
    }
    translateX(t) {
        return new FF(this.left + t, this.top, this.right + t, this.bottom);
    }
    translateY(t) {
        return new FF(this.left, this.top + t, this.right, this.bottom + t);
    }
    deltaRight(t) {
        return new FF(this.left, this.top, this.right + t, this.bottom);
    }
    deltaTop(t) {
        return new FF(this.left, this.top + t, this.right, this.bottom);
    }
    deltaLeft(t) {
        return new FF(this.left + t, this.top, this.right, this.bottom);
    }
    deltaBottom(t) {
        return new FF(this.left, this.top, this.right, this.bottom + t);
    }
    getLeftBottom() {
        return new yre(this.left, this.bottom);
    }
    getRightBottom() {
        return new yre(this.right, this.bottom);
    }
    getLeftTop() {
        return new yre(this.left, this.top);
    }
    getRightTop() {
        return new yre(this.right, this.top);
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
