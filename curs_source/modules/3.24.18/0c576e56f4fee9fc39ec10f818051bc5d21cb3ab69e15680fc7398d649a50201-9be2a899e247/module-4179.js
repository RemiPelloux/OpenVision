"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.first = void 0;
const n = require("./module-1078.js"), o = require("./module-231.js");
exports.first = function(e, t) {
    const r = arguments.length >= 2;
    return (s)=>new n.Observable((i)=>{
            let a = 0;
            const c = (0, n.operate)({
                destination: i,
                next: (t)=>{
                    (!e || e(t, a++, s)) && (c.unsubscribe(), i.next(t), i.complete());
                },
                complete: ()=>{
                    r ? (i.next(t), i.complete()) : i.error(new o.EmptyError);
                }
            });
            s.subscribe(c);
        });
};
