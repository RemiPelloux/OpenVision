"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeat = void 0;
const n = require("./module-1078.js"), o = require("./module-744.js"), s = require("./module-444.js");
exports.repeat = function(e) {
    let t, r = 1 / 0;
    return null != e && ("object" == typeof e ? { count: r = 1 / 0, delay: t } = e : r = e), r <= 0 ? ()=>o.EMPTY : (e)=>new n.Observable((o)=>{
            let i, a = 0;
            const c = ()=>{
                if (i?.unsubscribe(), i = null, null != t) {
                    const e = "number" == typeof t ? (0, s.timer)(t) : (0, n.from)(t(a)), r = (0, n.operate)({
                        destination: o,
                        next: ()=>{
                            r.unsubscribe(), u();
                        }
                    });
                    e.subscribe(r);
                } else u();
            }, u = ()=>{
                let t = !1;
                i = e.subscribe((0, n.operate)({
                    destination: o,
                    complete: ()=>{
                        ++a < r ? i ? c() : t = !0 : o.complete();
                    }
                })), t && c();
            };
            u();
        });
};
