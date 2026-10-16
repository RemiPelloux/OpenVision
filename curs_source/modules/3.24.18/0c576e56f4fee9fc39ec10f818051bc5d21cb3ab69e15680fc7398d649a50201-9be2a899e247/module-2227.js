"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sample = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.sample = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = !1, i = null;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    s = !0, i = e;
                }
            })), (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>{
                    if (s) {
                        s = !1;
                        const e = i;
                        i = null, r.next(e);
                    }
                },
                complete: o.noop
            }));
        });
};
