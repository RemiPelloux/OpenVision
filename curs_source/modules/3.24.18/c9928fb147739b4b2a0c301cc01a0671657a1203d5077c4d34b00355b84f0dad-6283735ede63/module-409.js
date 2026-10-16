Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TimeInterval = exports.timeInterval = void 0;
const s = require("./module-2665.js"), o = require("./module-1078.js");
exports.timeInterval = function(e = s.asyncScheduler) {
    return (a)=>new o.Observable((n)=>{
            let s = e.now();
            a.subscribe((0, o.operate)({
                destination: n,
                next: (a)=>{
                    const o = e.now(), t = o - s;
                    s = o, n.next(new r(a, t));
                }
            }));
        });
};
class r {
    value;
    interval;
    constructor(e, a){
        this.value = e, this.interval = a;
    }
}
exports.TimeInterval = r;
