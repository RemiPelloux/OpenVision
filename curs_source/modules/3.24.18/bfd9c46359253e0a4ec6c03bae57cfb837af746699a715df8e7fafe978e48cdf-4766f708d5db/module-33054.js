"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.share = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js");
function o(e, t, ...r) {
    if (!0 === t) return void e();
    if (!1 === t) return;
    const s = new n.Subscriber({
        next: ()=>{
            s.unsubscribe(), e();
        }
    });
    return (0, n.from)(t(...r)).subscribe(s);
}
exports.share = function(e = {}) {
    const { connector: t = ()=>new s.Subject, resetOnError: r = !0, resetOnComplete: i = !0, resetOnRefCountZero: a = !0 } = e;
    return (e)=>{
        let s, c, l, u = 0, d = !1, p = !1;
        const m = ()=>{
            c?.unsubscribe(), c = void 0;
        }, h = ()=>{
            m(), s = l = void 0, d = p = !1;
        }, f = ()=>{
            const e = s;
            h(), e?.unsubscribe();
        };
        return new n.Observable((g)=>{
            u++, p || d || m();
            const y = l = l ?? t();
            g.add(()=>{
                u--, 0 !== u || p || d || (c = o(f, a));
            }), y.subscribe(g), !s && u > 0 && (s = new n.Subscriber({
                next: (e)=>y.next(e),
                error: (e)=>{
                    p = !0, m(), c = o(h, r, e), y.error(e);
                },
                complete: ()=>{
                    d = !0, m(), c = o(h, i), y.complete();
                }
            }), (0, n.from)(e).subscribe(s));
        });
    };
};
