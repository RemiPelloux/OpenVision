"use strict";
let a, n = Date.now();
const t = [];
function s() {
    n = Date.now();
    let e = t.length, a = 0;
    for(; a < e;){
        const s = t[a];
        0 === s.state ? s.state = n + s.delay : s.state > 0 && n >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, a !== e - 1 ? t[a] = t.pop() : t.pop(), e -= 1) : a += 1;
    }
    t.length > 0 && o();
}
function o() {
    a && a.refresh ? a.refresh() : (clearTimeout(a), a = setTimeout(s, 1e3), a.unref && a.unref());
}
class r {
    constructor(e, a, n){
        this.callback = e, this.delay = a, this.opaque = n, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (t.push(this), a && 1 !== t.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, a, n)=>a < 1e3 ? setTimeout(e, a, n) : new r(e, a, n),
    clearTimeout (e) {
        e instanceof r ? e.clear() : clearTimeout(e);
    }
};
