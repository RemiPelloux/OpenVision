"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.audit = void 0;
const n = require("./module-1078.js");
exports.audit = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1, s = null, i = null, a = !1;
            const c = ()=>{
                if (i?.unsubscribe(), i = null, o) {
                    o = !1;
                    const e = s;
                    s = null, r.next(e);
                }
                a && r.complete();
            }, u = ()=>{
                i = null, a && r.complete();
            };
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    o = !0, s = t, i || (0, n.from)(e(t)).subscribe(i = (0, n.operate)({
                        destination: r,
                        next: c,
                        complete: u
                    }));
                },
                complete: ()=>{
                    a = !0, (!o || !i || i.closed) && r.complete();
                }
            }));
        });
};
