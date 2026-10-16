Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.groupBy = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js");
exports.groupBy = function(e, a, n, r) {
    return (t)=>new s.Observable((i)=>{
            let m;
            a && "function" != typeof a ? { duration: n, element: m, connector: r } = a : m = a;
            const l = new Map, d = (e)=>{
                l.forEach(e), e(i);
            }, c = (e)=>d((a)=>a.error(e)), T = (0, s.operate)({
                destination: i,
                next: (a)=>{
                    try {
                        const t = e(a);
                        let d = l.get(t);
                        if (!d) {
                            l.set(t, d = r ? r() : new o.Subject);
                            const e = function(e, a) {
                                const n = new s.Observable((e)=>a.subscribe(e));
                                return n.key = e, n;
                            }(t, d);
                            if (i.next(e), n) {
                                const a = (0, s.operate)({
                                    destination: d,
                                    next: ()=>{
                                        d.complete(), a?.unsubscribe();
                                    },
                                    finalize: ()=>l.delete(t)
                                });
                                T.add((0, s.from)(n(e)).subscribe(a));
                            }
                        }
                        d.next(m ? m(a) : a);
                    } catch (e) {
                        c(e);
                    }
                },
                error: c,
                complete: ()=>d((e)=>e.complete()),
                finalize: ()=>l.clear()
            });
            t.subscribe(T);
        });
};
