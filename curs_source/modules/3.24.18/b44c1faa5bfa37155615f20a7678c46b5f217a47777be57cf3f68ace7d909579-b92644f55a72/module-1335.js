"use strict";
let t, r = Date.now();
const n = [];
function s() {
    r = Date.now();
    let e = n.length, t = 0;
    for(; t < e;){
        const s = n[t];
        0 === s.state ? s.state = r + s.delay : s.state > 0 && r >= s.state && (s.state = -1, s.callback(s.opaque)), -1 === s.state ? (s.state = -2, t !== e - 1 ? n[t] = n.pop() : n.pop(), e -= 1) : t += 1;
    }
    n.length > 0 && o();
}
function o() {
    t && t.refresh ? t.refresh() : (clearTimeout(t), t = setTimeout(s, 1e3), t.unref && t.unref());
}
class i {
    constructor(e, t, r){
        this.callback = e, this.delay = t, this.opaque = r, this.state = -2, this.refresh();
    }
    refresh() {
        -2 === this.state && (n.push(this), t && 1 !== n.length || o()), this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout: (e, t, r)=>t < 1e3 ? setTimeout(e, t, r) : new i(e, t, r),
    clearTimeout (e) {
        e instanceof i ? e.clear() : clearTimeout(e);
    }
};
