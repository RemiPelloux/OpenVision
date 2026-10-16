Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.range = void 0;
const s = require("./module-1078.js"), o = require("./module-744.js"), r = require("./module-5830.js");
exports.range = function(e, a, n) {
    if (null == a && (a = e, e = 0), a <= 0) return o.EMPTY;
    const t = a + e;
    return new s.Observable(n ? (a)=>{
        let s = e;
        const o = ()=>{
            s < t ? (a.next(s++), a.closed || (0, r.executeSchedule)(a, n, o)) : a.complete();
        };
        (0, r.executeSchedule)(a, n, o);
    } : (a)=>{
        let n = e;
        for(; n < t && !a.closed;)a.next(n++);
        a.complete();
    });
};
