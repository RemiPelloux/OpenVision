"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.last = void 0;
const n = require("./module-51078.js"), s = require("./module-50231.js");
exports.last = function(e, t) {
    const r = arguments.length >= 2;
    return (o)=>new n.Observable((i)=>{
            let a, c = 0, l = !1;
            o.subscribe((0, n.operate)({
                destination: i,
                next (t) {
                    e && !e(t, c++, o) || (l = !0, a = t);
                },
                complete () {
                    l ? (i.next(a), i.complete()) : r ? (i.next(t), i.complete()) : i.error(new s.EmptyError);
                }
            }));
        });
};
