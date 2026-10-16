"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.groupBy = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js");
exports.groupBy = function(e, t, r, s) {
    return (i)=>new n.Observable((a)=>{
            let c;
            t && "function" != typeof t ? { duration: r, element: c, connector: s } = t : c = t;
            const u = new Map, l = (e)=>{
                u.forEach(e), e(a);
            }, d = (e)=>l((t)=>t.error(e)), p = (0, n.operate)({
                destination: a,
                next: (t)=>{
                    try {
                        const i = e(t);
                        let l = u.get(i);
                        if (!l) {
                            u.set(i, l = s ? s() : new o.Subject);
                            const e = function(e, t) {
                                const r = new n.Observable((e)=>t.subscribe(e));
                                return r.key = e, r;
                            }(i, l);
                            if (a.next(e), r) {
                                const t = (0, n.operate)({
                                    destination: l,
                                    next: ()=>{
                                        l.complete(), t?.unsubscribe();
                                    },
                                    finalize: ()=>u.delete(i)
                                });
                                p.add((0, n.from)(r(e)).subscribe(t));
                            }
                        }
                        l.next(c ? c(t) : t);
                    } catch (e) {
                        d(e);
                    }
                },
                error: d,
                complete: ()=>l((e)=>e.complete()),
                finalize: ()=>u.clear()
            });
            i.subscribe(p);
        });
};
