Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleArray = void 0;
const s = require("./module-1078.js"), o = require("./module-5830.js");
exports.scheduleArray = function(e, a) {
    return new s.Observable((n)=>{
        let s = 0;
        const r = ()=>{
            s === e.length ? n.complete() : (n.next(e[s++]), (0, o.executeSchedule)(n, a, r));
        };
        return (0, o.executeSchedule)(n, a, r);
    });
};
