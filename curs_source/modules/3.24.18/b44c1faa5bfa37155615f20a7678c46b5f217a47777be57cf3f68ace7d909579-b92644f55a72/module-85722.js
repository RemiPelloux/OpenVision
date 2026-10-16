"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounce = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.debounce = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1, i = null, a = null;
            const c = ()=>{
                if (a?.unsubscribe(), a = null, o) {
                    o = !1;
                    const e = i;
                    i = null, r.next(e);
                }
            };
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    a?.unsubscribe(), o = !0, i = t, a = (0, n.operate)({
                        destination: r,
                        next: c,
                        complete: s.noop
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
