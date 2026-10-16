"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounce = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.debounce = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = !1, i = null, a = null;
            const c = ()=>{
                if (a?.unsubscribe(), a = null, s) {
                    s = !1;
                    const e = i;
                    i = null, r.next(e);
                }
            };
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    a?.unsubscribe(), s = !0, i = t, a = (0, n.operate)({
                        destination: r,
                        next: c,
                        complete: o.noop
                    }), (0, n.from)(e(t)).subscribe(a);
                },
                complete: ()=>{
                    c(), r.complete();
                },
                finalize: ()=>{
                    i = a = null;
                }
            }));
        });
};
