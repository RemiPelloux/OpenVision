"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retry = void 0;
const n = require("./module-51078.js"), s = require("./module-44896.js"), o = require("./module-80444.js");
exports.retry = function(e = 1 / 0) {
    let t;
    t = e && "object" == typeof e ? e : {
        count: e
    };
    const { count: r = 1 / 0, delay: i, resetOnSuccess: a = !1 } = t;
    return r <= 0 ? s.identity : (e)=>new n.Observable((t)=>{
            let s, c = 0;
            const l = ()=>{
                let u = !1;
                s = e.subscribe((0, n.operate)({
                    destination: t,
                    next: (e)=>{
                        a && (c = 0), t.next(e);
                    },
                    error: (e)=>{
                        if (c++ < r) {
                            const r = ()=>{
                                s ? (s.unsubscribe(), s = null, l()) : u = !0;
                            };
                            if (null != i) {
                                const s = "number" == typeof i ? (0, o.timer)(i) : (0, n.from)(i(e, c)), a = (0, n.operate)({
                                    destination: t,
                                    next: ()=>{
                                        a.unsubscribe(), r();
                                    },
                                    complete: ()=>{
                                        t.complete();
                                    }
                                });
                                s.subscribe(a);
                            } else r();
                        } else t.error(e);
                    }
                })), u && (s.unsubscribe(), s = null, l());
            };
            l();
        });
};
