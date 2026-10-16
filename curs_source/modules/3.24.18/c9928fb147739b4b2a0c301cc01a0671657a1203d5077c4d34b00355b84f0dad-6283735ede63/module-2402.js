Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeout = exports.TimeoutError = void 0;
const s = require("./module-2665.js"), o = require("./module-7842.js"), r = require("./module-1078.js"), t = require("./module-5830.js");
class i extends Error {
    info;
    constructor(e = null){
        super("Timeout has occurred"), this.info = e, this.name = "TimeoutError";
    }
}
function m(e) {
    throw new i(e);
}
exports.TimeoutError = i, exports.timeout = function(e, a) {
    const { first: n, each: i, with: l = m, scheduler: d = a ?? s.asyncScheduler, meta: c = null } = (0, o.isValidDate)(e) ? {
        first: e
    } : "number" == typeof e ? {
        each: e
    } : e;
    if (null == n && null == i) throw new TypeError("No timeout provided.");
    return (e)=>new r.Observable((a)=>{
            let s, o, m = null, T = 0;
            const p = (e)=>{
                o = (0, t.executeSchedule)(a, d, ()=>{
                    try {
                        s.unsubscribe(), (0, r.from)(l({
                            meta: c,
                            lastValue: m,
                            seen: T
                        })).subscribe(a);
                    } catch (e) {
                        a.error(e);
                    }
                }, e);
            };
            s = e.subscribe((0, r.operate)({
                destination: a,
                next: (e)=>{
                    o?.unsubscribe(), T++, a.next(m = e), i > 0 && p(i);
                },
                finalize: ()=>{
                    o?.unsubscribe(), m = null;
                }
            })), !T && p(null != n ? "number" == typeof n ? n : +n - d.now() : i);
        });
};
