"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttle = void 0;
const n = require("./module-51078.js");
exports.throttle = function(e, t) {
    return (r)=>new n.Observable((s)=>{
            const { leading: o = !0, trailing: i = !1 } = t ?? {};
            let a = !1, c = null, l = null, u = !1;
            const d = ()=>{
                l?.unsubscribe(), l = null, i && (h(), u && s.complete());
            }, p = ()=>{
                l = null, u && s.complete();
            }, m = (t)=>l = (0, n.from)(e(t)).subscribe((0, n.operate)({
                    destination: s,
                    next: d,
                    complete: p
                })), h = ()=>{
                if (a) {
                    a = !1;
                    const e = c;
                    c = null, s.next(e), !u && m(e);
                }
            };
            r.subscribe((0, n.operate)({
                destination: s,
                next: (e)=>{
                    a = !0, c = e, (!l || l.closed) && (o ? h() : m(e));
                },
                complete: ()=>{
                    u = !0, (!(i && a && l) || l.closed) && s.complete();
                }
            }));
        });
};
