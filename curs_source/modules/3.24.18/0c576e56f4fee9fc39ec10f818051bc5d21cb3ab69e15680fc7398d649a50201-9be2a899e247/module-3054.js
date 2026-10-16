"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.share = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js");
function s(e, t, ...r) {
    if (!0 === t) return void e();
    if (!1 === t) return;
    const o = new n.Subscriber({
        next: ()=>{
            o.unsubscribe(), e();
        }
    });
    return (0, n.from)(t(...r)).subscribe(o);
}
exports.share = function(e = {}) {
    const { connector: t = ()=>new o.Subject, resetOnError: r = !0, resetOnComplete: i = !0, resetOnRefCountZero: a = !0 } = e;
    return (e)=>{
        let o, c, u, l = 0, d = !1, p = !1;
        const f = ()=>{
            c?.unsubscribe(), c = void 0;
        }, h = ()=>{
            f(), o = u = void 0, d = p = !1;
        }, m = ()=>{
            const e = o;
            h(), e?.unsubscribe();
        };
        return new n.Observable((g)=>{
            l++, p || d || f();
            const y = u = u ?? t();
            g.add(()=>{
                l--, 0 !== l || p || d || (c = s(m, a));
            }), y.subscribe(g), !o && l > 0 && (o = new n.Subscriber({
                next: (e)=>y.next(e),
                error: (e)=>{
                    p = !0, f(), c = s(h, r, e), y.error(e);
                },
                complete: ()=>{
                    d = !0, f(), c = s(h, i), y.complete();
                }
            }), (0, n.from)(e).subscribe(o));
        });
    };
};
