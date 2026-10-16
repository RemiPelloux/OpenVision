"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.elementAt = void 0;
const n = require("./module-6129.js"), o = require("./module-1078.js");
exports.elementAt = function(e, t) {
    if (e < 0) throw new n.ArgumentOutOfRangeError;
    const r = arguments.length >= 2;
    return (s)=>new o.Observable((i)=>{
            let a = 0;
            const c = (0, o.operate)({
                destination: i,
                next: (t)=>{
                    a++ === e && (c.unsubscribe(), i.next(t), i.complete());
                },
                complete: ()=>{
                    r ? (i.next(t), i.complete()) : i.error(new n.ArgumentOutOfRangeError);
                }
            });
            s.subscribe(c);
        });
};
