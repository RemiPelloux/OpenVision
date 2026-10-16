"use strict";
let t, A = Date.now();
const n = [];
function r() {
    A = Date.now();
    let e = n.length, t = 0;
    for(; t < e;){
        const r = n[t];
        0 === r.state ? r.state = A + r.delay : r.state > 0 && A >= r.state && (r.state = -1, r.callback(r.opaque)), -1 === r.state ? (r.state = -2, t !== e - 1 ? n[t] = n.pop() : n.pop(), e -= 1) : t += 1;
    }
    n.length > 0 && o();
}
function o() {
    t && t.refresh ? t.refresh() : (clearTimeout(t), t = setTimeout(r, 1e3), t.unref && t.unref());
}
class s {
    constructor(e, t, A){
        this.callback = e, this.delay = t, this.opaque = A, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (n.push(this), t && 1 !== n.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, t, A)=>t < 1e3 ? setTimeout(e, t, A) : new s(e, t, A),
    clearTimeout (e) {
        e instanceof s ? e.clear() : clearTimeout(e);
    }
};
