"use strict";
let A, t = Date.now();
const n = [];
function r() {
    t = Date.now();
    let e = n.length, A = 0;
    for(; A < e;){
        const r = n[A];
        0 === r.state ? r.state = t + r.delay : r.state > 0 && t >= r.state && (r.state = -1, r.callback(r.opaque)), -1 === r.state ? (r.state = -2, A !== e - 1 ? n[A] = n.pop() : n.pop(), e -= 1) : A += 1;
    }
    n.length > 0 && o();
}
function o() {
    A && A.refresh ? A.refresh() : (clearTimeout(A), A = setTimeout(r, 1e3), A.unref && A.unref());
}
class s {
    constructor(e, A, t){
        this.callback = e, this.delay = A, this.opaque = t, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (n.push(this), A && 1 !== n.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, A, t)=>A < 1e3 ? setTimeout(e, A, t) : new s(e, A, t),
    clearTimeout (e) {
        e instanceof s ? e.clear() : clearTimeout(e);
    }
};
