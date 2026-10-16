"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeout = exports.TimeoutError = void 0;
const n = require("./module-2665.js"), o = require("./module-97842.js"), s = require("./module-51078.js"), i = require("./module-55830.js");
class a extends Error {
    info;
    constructor(e = null){
        super("Timeout has occurred"), this.info = e, this.name = "TimeoutError";
    }
}
function l(e) {
    throw new a(e);
}
exports.TimeoutError = a, exports.timeout = function(e, t) {
    const { first: r, each: a, with: c = l, scheduler: u = t ?? n.asyncScheduler, meta: d = null } = (0, o.isValidDate)(e) ? {
        first: e
    } : "number" == typeof e ? {
        each: e
    } : e;
    if (null == r && null == a) throw new TypeError("No timeout provided.");
    return (e)=>new s.Observable((t)=>{
            let n, o, l = null, p = 0;
            const h = (e)=>{
                o = (0, i.executeSchedule)(t, u, ()=>{
                    try {
                        n.unsubscribe(), (0, s.from)(c({
                            meta: d,
                            lastValue: l,
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
                    o?.unsubscribe(), p++, t.next(l = e), a > 0 && h(a);
                },
                finalize: ()=>{
                    o?.unsubscribe(), l = null;
                }
            })), !p && h(null != r ? "number" == typeof r ? r : +r - u.now() : a);
        });
};
