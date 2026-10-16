"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeWhile = void 0;
const n = require("./module-1078.js");
exports.takeWhile = function(e, t = !1) {
    return (r)=>new n.Observable((o)=>{
            let s = 0;
            const i = (0, n.operate)({
                destination: o,
                next: (r)=>{
                    e(r, s++) ? o.next(r) : (i.unsubscribe(), t && o.next(r), o.complete());
                }
            });
            r.subscribe(i);
        });
};
