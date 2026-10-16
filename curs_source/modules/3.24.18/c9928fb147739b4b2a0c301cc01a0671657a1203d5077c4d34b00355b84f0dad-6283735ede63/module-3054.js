Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.share = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js");
function r(e, a, ...n) {
    if (!0 === a) return void e();
    if (!1 === a) return;
    const o = new s.Subscriber({
        next: ()=>{
            o.unsubscribe(), e();
        }
    });
    return (0, s.from)(a(...n)).subscribe(o);
}
exports.share = function(e = {}) {
    const { connector: a = ()=>new o.Subject, resetOnError: n = !0, resetOnComplete: t = !0, resetOnRefCountZero: i = !0 } = e;
    return (e)=>{
        let o, m, l, d = 0, c = !1, T = !1;
        const p = ()=>{
            m?.unsubscribe(), m = void 0;
        }, _ = ()=>{
            p(), o = l = void 0, c = T = !1;
        }, k = ()=>{
            const e = o;
            _(), e?.unsubscribe();
        };
        return new s.Observable((u)=>{
            d++, T || c || p();
            const g = l = l ?? a();
            u.add(()=>{
                d--, 0 !== d || T || c || (m = r(k, i));
            }), g.subscribe(u), !o && d > 0 && (o = new s.Subscriber({
                next: (e)=>g.next(e),
                error: (e)=>{
                    T = !0, p(), m = r(_, n, e), g.error(e);
                },
                complete: ()=>{
                    c = !0, p(), m = r(_, t), g.complete();
                }
            }), (0, s.from)(e).subscribe(o));
        });
    };
};
