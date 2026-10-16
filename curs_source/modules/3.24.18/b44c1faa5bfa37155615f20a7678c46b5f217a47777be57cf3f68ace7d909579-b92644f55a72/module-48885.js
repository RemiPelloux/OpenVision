"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowWhen = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js"), o = require("./module-64462.js");
exports.windowWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let i, a;
            const c = (e)=>{
                i.error(e), r.error(e);
            }, l = ()=>{
                let t;
                a?.unsubscribe(), i?.complete(), i = new s.Subject, r.next(i.asObservable());
                try {
                    t = (0, n.from)(e());
                } catch (e) {
                    return void c(e);
                }
                t.subscribe(a = (0, n.operate)({
                    destination: r,
                    next: l,
                    error: c,
                    complete: o.noop
                }));
            };
            l(), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>i.next(e),
                error: c,
                complete: ()=>{
                    i.complete(), r.complete();
                },
                finalize: ()=>{
                    a?.unsubscribe(), i = null;
                }
            }));
        });
};
