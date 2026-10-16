"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retry = void 0;
const n = require("./module-1078.js"), o = require("./module-4896.js"), s = require("./module-444.js");
exports.retry = function(e = 1 / 0) {
    let t;
    t = e && "object" == typeof e ? e : {
        count: e
    };
    const { count: r = 1 / 0, delay: i, resetOnSuccess: a = !1 } = t;
    return r <= 0 ? o.identity : (e)=>new n.Observable((t)=>{
            let o, c = 0;
            const u = ()=>{
                let l = !1;
                o = e.subscribe((0, n.operate)({
                    destination: t,
                    next: (e)=>{
                        a && (c = 0), t.next(e);
                    },
                    error: (e)=>{
                        if (c++ < r) {
                            const r = ()=>{
                                o ? (o.unsubscribe(), o = null, u()) : l = !0;
                            };
                            if (null != i) {
                                const o = "number" == typeof i ? (0, s.timer)(i) : (0, n.from)(i(e, c)), a = (0, n.operate)({
                                    destination: t,
                                    next: ()=>{
                                        a.unsubscribe(), r();
                                    },
                                    complete: ()=>{
                                        t.complete();
                                    }
                                });
                                o.subscribe(a);
                            } else r();
                        } else t.error(e);
                    }
                })), l && (o.unsubscribe(), o = null, u());
            };
            u();
        });
};
