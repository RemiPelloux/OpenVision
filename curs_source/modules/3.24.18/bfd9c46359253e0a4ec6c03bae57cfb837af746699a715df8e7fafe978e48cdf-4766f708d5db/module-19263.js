"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounceTime = void 0;
const n = require("./module-2665.js"), s = require("./module-51078.js"), o = require("./module-55830.js");
exports.debounceTime = function(e, t = n.asyncScheduler) {
    return (r)=>new s.Observable((n)=>{
            let i, a;
            r.subscribe((0, s.operate)({
                destination: n,
                next: (r)=>{
                    i = r, a?.unsubscribe(), a = (0, o.executeSchedule)(n, t, ()=>{
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
