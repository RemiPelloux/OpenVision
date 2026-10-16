"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipUntil = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.skipUntil = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = !1;
            const i = (0, n.operate)({
                destination: r,
                next: ()=>{
                    i?.unsubscribe(), s = !0;
                },
                complete: o.noop
            });
            (0, n.from)(e).subscribe(i), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>s && r.next(e)
            }));
        });
};
