"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.single = void 0;
const n = require("./module-51078.js"), s = require("./module-50231.js"), o = require("./module-55841.js"), i = require("./module-65007.js");
exports.single = function(e) {
    return (t)=>new n.Observable((r)=>{
            let a, c = !1, l = !1, u = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (n)=>{
                    l = !0, e && !e(n, u++, t) || (c && r.error(new o.SequenceError("Too many matching values")), c = !0, a = n);
                },
                complete: ()=>{
                    c ? (r.next(a), r.complete()) : r.error(l ? new i.NotFoundError("No matching values") : new s.EmptyError);
                }
            }));
        });
};
