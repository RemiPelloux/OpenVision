"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.elementAt = void 0;
const n = require("./module-76129.js"), s = require("./module-51078.js");
exports.elementAt = function(e, t) {
    if (e < 0) throw new n.ArgumentOutOfRangeError;
    const r = arguments.length >= 2;
    return (o)=>new s.Observable((i)=>{
            let a = 0;
            const c = (0, s.operate)({
                destination: i,
                next: (t)=>{
                    a++ === e && (c.unsubscribe(), i.next(t), i.complete());
                },
                complete: ()=>{
                    r ? (i.next(t), i.complete()) : i.error(new n.ArgumentOutOfRangeError);
                }
            });
            o.subscribe(c);
        });
};
