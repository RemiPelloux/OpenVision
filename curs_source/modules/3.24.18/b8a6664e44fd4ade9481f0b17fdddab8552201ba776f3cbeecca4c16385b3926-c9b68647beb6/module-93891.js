"use strict";
let e, t = Date.now();
const r = [];
function s() {
    t = Date.now();
    let A = r.length, e = 0;
    for(; e < A;){
        const s = r[e];
        0 === s.state ? s.state = t + s.delay : s.state > 0 && t >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, e !== A - 1 ? r[e] = r.pop() : r.pop(), A -= 1) : e += 1;
    }
    r.length > 0 && o();
}
function o() {
    e && e.refresh ? e.refresh() : (clearTimeout(e), e = setTimeout(s, 1e3), e.unref && e.unref());
}
class n {
    constructor(A, e, t){
        this.callback = A, this.delay = e, this.opaque = t, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (r.push(this), e && 1 !== r.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (A, e, t)=>e < 1e3 ? setTimeout(A, e, t) : new n(A, e, t),
    clearTimeout (A) {
        A instanceof n ? A.clear() : clearTimeout(A);
    }
};
