import { AFt, PO, Yge, xvn } from "./diffAlgorithm.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
var Bns, Uns, K8c, Y8c;
export { Bns, K8c, Uns, Y8c };
var __wakaru_X8c_initialized = false;
export function X8c() {
if (__wakaru_X8c_initialized) return;
__wakaru_X8c_initialized = true;
"use strict";
x(), uR(), AFt(), Bns = class {
    compute(e, t, n = xvn.instance) {
        if (e.length === 0 || t.length === 0) return Yge.trivial(e, t);
        const i = e, r = t;
        function s(f, v) {
            for(; f < i.length && v < r.length && i.getElement(f) === r.getElement(v);)f++, v++;
            return f;
        }
        let o = 0;
        const a = new K8c;
        a.set(0, s(0, 0));
        const c = new Y8c;
        c.set(0, a.get(0) === 0 ? null : new Uns(null, 0, 0, a.get(0)));
        let l = 0;
        e: for(;;){
            if (o++, !n.isValid()) return Yge.trivialTimedOut(i, r);
            const f = -Math.min(o, r.length + o % 2), v = Math.min(o, i.length + o % 2);
            for(l = f; l <= v; l += 2){
                if (!n.isValid()) return Yge.trivialTimedOut(i, r);
                let b = 0;
                const y = l === v ? -1 : a.get(l + 1), T = l === f ? -1 : a.get(l - 1) + 1;
                b++;
                const E = Math.min(Math.max(y, T), i.length), A = E - l;
                if (b++, E > i.length || A > r.length) continue;
                const R = s(E, A);
                a.set(l, R);
                const D = E === y ? c.get(l + 1) : c.get(l - 1);
                if (c.set(l, R !== E ? new Uns(D, E, A, R - E) : D), a.get(l) === i.length && a.get(l) - l === r.length) break e;
            }
        }
        let u = c.get(l);
        const h = [];
        let p = i.length, g = r.length;
        for(;;){
            const f = u ? u.x + u.length : 0, v = u ? u.y + u.length : 0;
            if ((f !== p || v !== g) && h.push(new PO(new Mh(f, p), new Mh(v, g))), !u) break;
            p = u.x, g = u.y, u = u.prev;
        }
        return h.reverse(), new Yge(h, !1);
    }
}, Uns = class {
    constructor(e, t, n, i){
        this.prev = e, this.x = t, this.y = n, this.length = i;
    }
}, K8c = class {
    constructor(){
        this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
    }
    get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
        if (e < 0) {
            if (e = -e - 1, e >= this.negativeArr.length) {
                const n = this.negativeArr;
                this.negativeArr = new Int32Array(n.length * 2), this.negativeArr.set(n);
            }
            this.negativeArr[e] = t;
        } else {
            if (e >= this.positiveArr.length) {
                const n = this.positiveArr;
                this.positiveArr = new Int32Array(n.length * 2), this.positiveArr.set(n);
            }
            this.positiveArr[e] = t;
        }
    }
}, Y8c = class {
    constructor(){
        this.positiveArr = [], this.negativeArr = [];
    }
    get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
    }
    set(e, t) {
        e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
    }
};

}
