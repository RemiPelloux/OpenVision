"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowWhen = void 0;
const n = require("./module-51078.js"), o = require("./module-83043.js"), s = require("./module-64462.js");
exports.windowWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let i, a;
            const l = (e)=>{
                i.error(e), r.error(e);
            }, c = ()=>{
                let t;
                a?.unsubscribe(), i?.complete(), i = new o.Subject, r.next(i.asObservable());
                try {
                    t = (0, n.from)(e());
                } catch (e) {
                    return void l(e);
                }
                t.subscribe(a = (0, n.operate)({
                    destination: r,
                    next: c,
                    error: l,
                    complete: s.noop
                }));
            };
            c(), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>i.next(e),
                error: l,
                complete: ()=>{
                    i.complete(), r.complete();
                },
                finalize: ()=>{
                    a?.unsubscribe(), i = null;
                }
            }));
        });
};
