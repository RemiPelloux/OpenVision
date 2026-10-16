"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.audit = void 0;
const n = require("./module-51078.js");
exports.audit = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = !1, o = null, i = null, a = !1;
            const c = ()=>{
                if (i?.unsubscribe(), i = null, s) {
                    s = !1;
                    const e = o;
                    o = null, r.next(e);
                }
                a && r.complete();
            }, l = ()=>{
                i = null, a && r.complete();
            };
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    s = !0, o = t, i || (0, n.from)(e(t)).subscribe(i = (0, n.operate)({
                        destination: r,
                        next: c,
                        complete: l
                    }));
                },
                complete: ()=>{
                    a = !0, (!s || !i || i.closed) && r.complete();
                }
            }));
        });
};
