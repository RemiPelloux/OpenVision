import { aB, iRe, noi, rvn } from "./diffAlgorithm.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
var WGo, GGo, kqd, wqd;
export { GGo, WGo, kqd, wqd };
var __wakaru_Cqd_initialized = false;
export function Cqd() {
if (__wakaru_Cqd_initialized) return;
__wakaru_Cqd_initialized = true;
"use strict";
E(), W3(), rvn(), WGo = class {
    compute(t, e, n = noi.instance) {
        if (t.length === 0 || e.length === 0) return iRe.trivial(t, e);
        const i = t, r = e;
        function s(g, f) {
            for(; g < i.length && f < r.length && i.getElement(g) === r.getElement(f);)g++, f++;
            return g;
        }
        let o = 0;
        const a = new kqd;
        a.set(0, s(0, 0));
        const l = new wqd;
        l.set(0, a.get(0) === 0 ? null : new GGo(null, 0, 0, a.get(0)));
        let c = 0;
        e: for(;;){
            if (o++, !n.isValid()) return iRe.trivialTimedOut(i, r);
            const g = -Math.min(o, r.length + o % 2), f = Math.min(o, i.length + o % 2);
            for(c = g; c <= f; c += 2){
                if (!n.isValid()) return iRe.trivialTimedOut(i, r);
                let _ = 0;
                const b = c === f ? -1 : a.get(c + 1), y = c === g ? -1 : a.get(c - 1) + 1;
                _++;
                const S = Math.min(Math.max(b, y), i.length), k = S - c;
                if (_++, S > i.length || k > r.length) continue;
                const C = s(S, k);
                a.set(c, C);
                const T = S === b ? l.get(c + 1) : l.get(c - 1);
                if (l.set(c, C !== S ? new GGo(T, S, k, C - S) : T), a.get(c) === i.length && a.get(c) - c === r.length) break e;
            }
        }
        let u = l.get(c);
        const d = [];
        let h = i.length, p = r.length;
        for(;;){
            const g = u ? u.x + u.length : 0, f = u ? u.y + u.length : 0;
            if ((g !== h || f !== p) && d.push(new aB(new Im(g, h), new Im(f, p))), !u) break;
            h = u.x, p = u.y, u = u.prev;
        }
        return d.reverse(), new iRe(d, !1);
    }
}, GGo = class {
    constructor(t, e, n, i){
        this.prev = t, this.x = e, this.y = n, this.length = i;
    }
}, kqd = class {
    constructor(){
        this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
    }
    get(t) {
        return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
    }
    set(t, e) {
        if (t < 0) {
            if (t = -t - 1, t >= this.negativeArr.length) {
                const n = this.negativeArr;
                this.negativeArr = new Int32Array(n.length * 2), this.negativeArr.set(n);
            }
            this.negativeArr[t] = e;
        } else {
            if (t >= this.positiveArr.length) {
                const n = this.positiveArr;
                this.positiveArr = new Int32Array(n.length * 2), this.positiveArr.set(n);
            }
            this.positiveArr[t] = e;
        }
    }
}, wqd = class {
    constructor(){
        this.positiveArr = [], this.negativeArr = [];
    }
    get(t) {
        return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
    }
    set(t, e) {
        t < 0 ? (t = -t - 1, this.negativeArr[t] = e) : this.positiveArr[t] = e;
    }
};

}
