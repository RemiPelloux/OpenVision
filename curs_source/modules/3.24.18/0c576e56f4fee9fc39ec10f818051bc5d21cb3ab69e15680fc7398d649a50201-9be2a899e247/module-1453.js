"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.last = void 0;
const n = require("./module-1078.js"), o = require("./module-231.js");
exports.last = function(e, t) {
    const r = arguments.length >= 2;
    return (s)=>new n.Observable((i)=>{
            let a, c = 0, u = !1;
            s.subscribe((0, n.operate)({
                destination: i,
                next (t) {
                    e && !e(t, c++, s) || (u = !0, a = t);
                },
                complete () {
                    u ? (i.next(a), i.complete()) : r ? (i.next(t), i.complete()) : i.error(new o.EmptyError);
                }
            }));
        });
};
