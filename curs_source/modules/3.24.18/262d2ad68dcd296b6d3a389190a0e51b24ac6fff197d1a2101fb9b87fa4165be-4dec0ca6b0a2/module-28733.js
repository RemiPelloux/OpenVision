"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttle = void 0;
const n = require("./module-51078.js");
exports.throttle = function(e, t) {
    return (r)=>new n.Observable((o)=>{
            const { leading: s = !0, trailing: i = !1 } = t ?? {};
            let a = !1, l = null, c = null, u = !1;
            const d = ()=>{
                c?.unsubscribe(), c = null, i && (m(), u && o.complete());
            }, p = ()=>{
                c = null, u && o.complete();
            }, h = (t)=>c = (0, n.from)(e(t)).subscribe((0, n.operate)({
                    destination: o,
                    next: d,
                    complete: p
                })), m = ()=>{
                if (a) {
                    a = !1;
                    const e = l;
                    l = null, o.next(e), !u && h(e);
                }
            };
            r.subscribe((0, n.operate)({
                destination: o,
                next: (e)=>{
                    a = !0, l = e, (!c || c.closed) && (s ? m() : h(e));
                },
                complete: ()=>{
                    u = !0, (!(i && a && c) || c.closed) && o.complete();
                }
            }));
        });
};
