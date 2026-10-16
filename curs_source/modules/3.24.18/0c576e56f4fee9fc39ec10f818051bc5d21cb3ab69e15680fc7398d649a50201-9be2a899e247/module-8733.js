"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttle = void 0;
const n = require("./module-1078.js");
exports.throttle = function(e, t) {
    return (r)=>new n.Observable((o)=>{
            const { leading: s = !0, trailing: i = !1 } = t ?? {};
            let a = !1, c = null, u = null, l = !1;
            const d = ()=>{
                u?.unsubscribe(), u = null, i && (h(), l && o.complete());
            }, p = ()=>{
                u = null, l && o.complete();
            }, f = (t)=>u = (0, n.from)(e(t)).subscribe((0, n.operate)({
                    destination: o,
                    next: d,
                    complete: p
                })), h = ()=>{
                if (a) {
                    a = !1;
                    const e = c;
                    c = null, o.next(e), !l && f(e);
                }
            };
            r.subscribe((0, n.operate)({
                destination: o,
                next: (e)=>{
                    a = !0, c = e, (!u || u.closed) && (s ? h() : f(e));
                },
                complete: ()=>{
                    l = !0, (!(i && a && u) || u.closed) && o.complete();
                }
            }));
        });
};
