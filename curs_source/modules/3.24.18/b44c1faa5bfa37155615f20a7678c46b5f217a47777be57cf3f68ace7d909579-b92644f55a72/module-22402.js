"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeout = exports.TimeoutError = void 0;
const n = require("./module-2665.js"), s = require("./module-97842.js"), o = require("./module-51078.js"), i = require("./module-55830.js");
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
    const { first: r, each: a, with: l = c, scheduler: u = t ?? n.asyncScheduler, meta: d = null } = (0, s.isValidDate)(e) ? {
        first: e
    } : "number" == typeof e ? {
        each: e
    } : e;
    if (null == r && null == a) throw new TypeError("No timeout provided.");
    return (e)=>new o.Observable((t)=>{
            let n, s, c = null, p = 0;
            const m = (e)=>{
                s = (0, i.executeSchedule)(t, u, ()=>{
                    try {
                        n.unsubscribe(), (0, o.from)(l({
                            meta: d,
                            lastValue: c,
                            seen: p
                        })).subscribe(t);
                    } catch (e) {
                        t.error(e);
                    }
                }, e);
            };
            n = e.subscribe((0, o.operate)({
                destination: t,
                next: (e)=>{
                    s?.unsubscribe(), p++, t.next(c = e), a > 0 && m(a);
                },
                finalize: ()=>{
                    s?.unsubscribe(), c = null;
                }
            })), !p && m(null != r ? "number" == typeof r ? r : +r - u.now() : a);
        });
};
