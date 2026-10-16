"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.single = void 0;
const n = require("./module-51078.js"), o = require("./module-50231.js"), s = require("./module-55841.js"), i = require("./module-65007.js");
exports.single = function(e) {
    return (t)=>new n.Observable((r)=>{
            let a, l = !1, c = !1, u = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (n)=>{
                    c = !0, e && !e(n, u++, t) || (l && r.error(new s.SequenceError("Too many matching values")), l = !0, a = n);
                },
                complete: ()=>{
                    l ? (r.next(a), r.complete()) : r.error(c ? new i.NotFoundError("No matching values") : new o.EmptyError);
                }
            }));
        });
};
