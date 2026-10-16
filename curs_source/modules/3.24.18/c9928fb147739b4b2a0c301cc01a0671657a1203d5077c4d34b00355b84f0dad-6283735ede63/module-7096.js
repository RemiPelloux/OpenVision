Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleIterable = void 0;
const s = require("./module-1078.js"), o = require("./module-5292.js"), r = require("./module-5830.js");
exports.scheduleIterable = function(e, a) {
    return new s.Observable((n)=>{
        let t;
        return (0, r.executeSchedule)(n, a, ()=>{
            t = e[o.iterator](), (0, r.executeSchedule)(n, a, ()=>{
                let e, a;
                try {
                    ({ value: e, done: a } = t.next());
                } catch (e) {
                    return void n.error(e);
                }
                a ? n.complete() : n.next(e);
            }, 0, !0);
        }), ()=>(0, s.isFunction)(t?.return) && t.return();
    });
};
