"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sample = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.sample = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1, i = null;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    o = !0, i = e;
                }
            })), (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>{
                    if (o) {
                        o = !1;
                        const e = i;
                        i = null, r.next(e);
                    }
                },
                complete: s.noop
            }));
        });
};
