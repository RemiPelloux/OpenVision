"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeout = exports.TimeoutError = void 0;
const n = require("./module-2665.js"), o = require("./module-7842.js"), s = require("./module-1078.js"), i = require("./module-5830.js");
class a extends Error {
    info;
    constructor(e = null){
        super("Timeout has occurred"), this.info = e, this.name = "TimeoutError";
    }
}
function c(e) {
    throw new a(e);
}
exports.TimeoutError = a, exports.timeout = function(e, t) {
    const { first: r, each: a, with: u = c, scheduler: l = t ?? n.asyncScheduler, meta: d = null } = (0, o.isValidDate)(e) ? {
        first: e
    } : "number" == typeof e ? {
        each: e
    } : e;
    if (null == r && null == a) throw new TypeError("No timeout provided.");
    return (e)=>new s.Observable((t)=>{
            let n, o, c = null, p = 0;
            const f = (e)=>{
                o = (0, i.executeSchedule)(t, l, ()=>{
                    try {
                        n.unsubscribe(), (0, s.from)(u({
                            meta: d,
                            lastValue: c,
                            seen: p
                        })).subscribe(t);
                    } catch (e) {
                        t.error(e);
                    }
                }, e);
            };
            n = e.subscribe((0, s.operate)({
                destination: t,
                next: (e)=>{
                    o?.unsubscribe(), p++, t.next(c = e), a > 0 && f(a);
                },
                finalize: ()=>{
                    o?.unsubscribe(), c = null;
                }
            })), !p && f(null != r ? "number" == typeof r ? r : +r - l.now() : a);
        });
};
