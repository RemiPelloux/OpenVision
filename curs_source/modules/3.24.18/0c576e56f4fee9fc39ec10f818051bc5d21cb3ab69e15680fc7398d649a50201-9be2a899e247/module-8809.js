"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.single = void 0;
const n = require("./module-1078.js"), o = require("./module-231.js"), s = require("./module-5841.js"), i = require("./module-5007.js");
exports.single = function(e) {
    return (t)=>new n.Observable((r)=>{
            let a, c = !1, u = !1, l = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (n)=>{
                    u = !0, e && !e(n, l++, t) || (c && r.error(new s.SequenceError("Too many matching values")), c = !0, a = n);
                },
                complete: ()=>{
                    c ? (r.next(a), r.complete()) : r.error(u ? new i.NotFoundError("No matching values") : new o.EmptyError);
                }
            }));
        });
};
