Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timer = void 0;
const s = require("./module-1078.js"), o = require("./module-2665.js"), r = require("./module-2901.js"), t = require("./module-7842.js"), i = require("./module-5830.js");
exports.timer = function(e = 0, a, n = o.asyncScheduler) {
    let m = -1;
    return null != a && ((0, r.isScheduler)(a) ? n = a : m = a), new s.Observable((a)=>{
        let s = (0, t.isValidDate)(e) ? +e - n.now() : e;
        s < 0 && (s = 0);
        let o = 0;
        return (0, i.executeSchedule)(a, n, ()=>{
            a.next(o++), 0 <= m ? (0, i.executeSchedule)(a, n, ()=>{
                a.next(o++);
            }, m, !0) : a.complete();
        }, s);
    });
};
