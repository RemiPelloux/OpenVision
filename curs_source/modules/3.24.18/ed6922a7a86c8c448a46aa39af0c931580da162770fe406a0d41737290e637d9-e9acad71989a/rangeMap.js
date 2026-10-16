import { ZUc, pns, yyg } from "./qIc.js";
import { Mbi } from "./range_2.js";
import { x } from "./tslib.es6.js";
var QUc;
export { QUc };
var __wakaru_Syg_initialized = false;
export function Syg() {
if (__wakaru_Syg_initialized) return;
__wakaru_Syg_initialized = true;
"use strict";
x(), Mbi(), QUc = class {
    constructor(e){
        this.groups = [], this._size = 0, this._paddingTop = 0, this._paddingTop = e ?? 0, this._size = this._paddingTop;
    }
    get paddingTop() {
        return this._paddingTop;
    }
    set paddingTop(e) {
        this._size = this._size + e - this._paddingTop, this._paddingTop = e;
    }
    splice(e, t, n = []) {
        const i = n.length - t, r = ZUc({
            start: 0,
            end: e
        }, this.groups), s = ZUc({
            start: e + t,
            end: Number.POSITIVE_INFINITY
        }, this.groups).map((a)=>({
                range: pns(a.range, i),
                size: a.size
            })), o = n.map((a, c)=>({
                range: {
                    start: e + c,
                    end: e + c + 1
                },
                size: a.size
            }));
        this.groups = yyg(r, o, s), this._size = this._paddingTop + this.groups.reduce((a, c)=>a + c.size * (c.range.end - c.range.start), 0);
    }
    get count() {
        const e = this.groups.length;
        return e ? this.groups[e - 1].range.end : 0;
    }
    get size() {
        return this._size;
    }
    indexAt(e) {
        if (e < 0) return -1;
        if (e < this._paddingTop) return 0;
        let t = 0, n = this._paddingTop;
        for (const i of this.groups){
            const r = i.range.end - i.range.start, s = n + r * i.size;
            if (e < s) return t + Math.floor((e - n) / i.size);
            t += r, n = s;
        }
        return t;
    }
    indexAfter(e) {
        return Math.min(this.indexAt(e) + 1, this.count);
    }
    positionAt(e) {
        if (e < 0) return -1;
        let t = 0, n = 0;
        for (const i of this.groups){
            const r = i.range.end - i.range.start, s = n + r;
            if (e < s) return this._paddingTop + t + (e - n) * i.size;
            t += r * i.size, n = s;
        }
        return -1;
    }
};

}
