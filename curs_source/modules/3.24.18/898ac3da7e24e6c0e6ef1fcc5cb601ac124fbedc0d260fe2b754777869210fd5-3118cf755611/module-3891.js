"use strict";
let n, a = Date.now();
const t = [];
function s() {
    a = Date.now();
    let e = t.length, n = 0;
    for(; n < e;){
        const s = t[n];
        0 === s.state ? s.state = a + s.delay : s.state > 0 && a >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, n !== e - 1 ? t[n] = t.pop() : t.pop(), e -= 1) : n += 1;
    }
    t.length > 0 && o();
}
function o() {
    n && n.refresh ? n.refresh() : (clearTimeout(n), n = setTimeout(s, 1e3), n.unref && n.unref());
}
class r {
    constructor(e, n, a){
        this.callback = e, this.delay = n, this.opaque = a, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (t.push(this), n && 1 !== t.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, n, a)=>n < 1e3 ? setTimeout(e, n, a) : new r(e, n, a),
    clearTimeout (e) {
        e instanceof r ? e.clear() : clearTimeout(e);
    }
};
