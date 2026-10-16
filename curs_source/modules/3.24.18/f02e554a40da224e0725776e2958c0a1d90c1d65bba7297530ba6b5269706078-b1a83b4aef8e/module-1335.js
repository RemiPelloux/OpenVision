"use strict";
let e, r = Date.now();
const n = [];
function s() {
    r = Date.now();
    let t = n.length, e = 0;
    for(; e < t;){
        const s = n[e];
        0 === s.state ? s.state = r + s.delay : s.state > 0 && r >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, e !== t - 1 ? n[e] = n.pop() : n.pop(), t -= 1) : e += 1;
    }
    n.length > 0 && i();
}
function i() {
    e && e.refresh ? e.refresh() : (clearTimeout(e), e = setTimeout(s, 1e3), e.unref && e.unref());
}
class o {
    constructor(t, e, r){
        this.callback = t, this.delay = e, this.opaque = r, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (n.push(this), e && 1 !== n.length || i()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (t, e, r)=>e < 1e3 ? setTimeout(t, e, r) : new o(t, e, r),
    clearTimeout (t) {
        t instanceof o ? t.clear() : clearTimeout(t);
    }
};
