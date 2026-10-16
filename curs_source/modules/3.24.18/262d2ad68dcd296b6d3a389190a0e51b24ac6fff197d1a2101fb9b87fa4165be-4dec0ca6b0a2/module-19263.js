"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounceTime = void 0;
const n = require("./module-2665.js"), o = require("./module-51078.js"), s = require("./module-55830.js");
exports.debounceTime = function(e, t = n.asyncScheduler) {
    return (r)=>new o.Observable((n)=>{
            let i, a;
            r.subscribe((0, o.operate)({
                destination: n,
                next: (r)=>{
                    i = r, a?.unsubscribe(), a = (0, s.executeSchedule)(n, t, ()=>{
                        a = void 0;
                        const e = i;
                        i = null, n.next(e);
                    }, e);
                },
                complete: ()=>{
                    a && n.next(i), n.complete();
                },
                finalize: ()=>{
                    i = a = null;
                }
            }));
        });
};
