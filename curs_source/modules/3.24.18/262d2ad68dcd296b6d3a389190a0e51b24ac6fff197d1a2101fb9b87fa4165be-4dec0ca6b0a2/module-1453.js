"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.last = void 0;
const n = require("./module-51078.js"), o = require("./module-50231.js");
exports.last = function(e, t) {
    const r = arguments.length >= 2;
    return (s)=>new n.Observable((i)=>{
            let a, l = 0, c = !1;
            s.subscribe((0, n.operate)({
                destination: i,
                next (t) {
                    e && !e(t, l++, s) || (c = !0, a = t);
                },
                complete () {
                    c ? (i.next(a), i.complete()) : r ? (i.next(t), i.complete()) : i.error(new o.EmptyError);
                }
            }));
        });
};
