"use strict";
let n, t = Date.now();
const a = [];
function s() {
    t = Date.now();
    let e = a.length, n = 0;
    for(; n < e;){
        const s = a[n];
        0 === s.state ? s.state = t + s.delay : s.state > 0 && t >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, n !== e - 1 ? a[n] = a.pop() : a.pop(), e -= 1) : n += 1;
    }
    a.length > 0 && o();
}
function o() {
    n && n.refresh ? n.refresh() : (clearTimeout(n), n = setTimeout(s, 1e3), n.unref && n.unref());
}
class r {
    constructor(e, n, t){
        this.callback = e, this.delay = n, this.opaque = t, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (a.push(this), n && 1 !== a.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, n, t)=>n < 1e3 ? setTimeout(e, n, t) : new r(e, n, t),
    clearTimeout (e) {
        e instanceof r ? e.clear() : clearTimeout(e);
    }
};
