"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.share = void 0;
const n = require("./module-51078.js"), o = require("./module-83043.js");
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
        let o, l, c, u = 0, d = !1, p = !1;
        const h = ()=>{
            l?.unsubscribe(), l = void 0;
        }, m = ()=>{
            h(), o = c = void 0, d = p = !1;
        }, f = ()=>{
            const e = o;
            m(), e?.unsubscribe();
        };
        return new n.Observable((g)=>{
            u++, p || d || h();
            const y = c = c ?? t();
            g.add(()=>{
                u--, 0 !== u || p || d || (l = s(f, a));
            }), y.subscribe(g), !o && u > 0 && (o = new n.Subscriber({
                next: (e)=>y.next(e),
                error: (e)=>{
                    p = !0, h(), l = s(m, r, e), y.error(e);
                },
                complete: ()=>{
                    d = !0, h(), l = s(m, i), y.complete();
                }
            }), (0, n.from)(e).subscribe(o));
        });
    };
};
