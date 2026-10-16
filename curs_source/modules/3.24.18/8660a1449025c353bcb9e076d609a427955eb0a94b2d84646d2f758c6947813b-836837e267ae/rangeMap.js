import { sTr } from "./range_2.js";
import { E } from "./tslib.es6.js";
import { fGo, pNy, yGd } from "./ze.js";
var SGd;
export { SGd };
var __wakaru_mNy_initialized = false;
export function mNy() {
if (__wakaru_mNy_initialized) return;
__wakaru_mNy_initialized = true;
"use strict";
E(), sTr(), SGd = class {
    constructor(t){
        this.groups = [], this._size = 0, this._paddingTop = 0, this._paddingTop = t ?? 0, this._size = this._paddingTop;
    }
    get paddingTop() {
        return this._paddingTop;
    }
    set paddingTop(t) {
        this._size = this._size + t - this._paddingTop, this._paddingTop = t;
    }
    splice(t, e, n = []) {
        const i = n.length - e, r = yGd({
            start: 0,
            end: t
        }, this.groups), s = yGd({
            start: t + e,
            end: Number.POSITIVE_INFINITY
        }, this.groups).map((a)=>({
                range: fGo(a.range, i),
                size: a.size
            })), o = n.map((a, l)=>({
                range: {
                    start: t + l,
                    end: t + l + 1
                },
                size: a.size
            }));
        this.groups = pNy(r, o, s), this._size = this._paddingTop + this.groups.reduce((a, l)=>a + l.size * (l.range.end - l.range.start), 0);
    }
    get count() {
        const t = this.groups.length;
        return t ? this.groups[t - 1].range.end : 0;
    }
    get size() {
        return this._size;
    }
    indexAt(t) {
        if (t < 0) return -1;
        if (t < this._paddingTop) return 0;
        let e = 0, n = this._paddingTop;
        for (const i of this.groups){
            const r = i.range.end - i.range.start, s = n + r * i.size;
            if (t < s) return e + Math.floor((t - n) / i.size);
            e += r, n = s;
        }
        return e;
    }
    indexAfter(t) {
        return Math.min(this.indexAt(t) + 1, this.count);
    }
    positionAt(t) {
        if (t < 0) return -1;
        let e = 0, n = 0;
        for (const i of this.groups){
            const r = i.range.end - i.range.start, s = n + r;
            if (t < s) return this._paddingTop + e + (t - n) * i.size;
            e += r * i.size, n = s;
        }
        return -1;
    }
};

}
