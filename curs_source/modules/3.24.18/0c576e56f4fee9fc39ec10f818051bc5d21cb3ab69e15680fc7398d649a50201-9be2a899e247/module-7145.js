"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.every = void 0;
const n = require("./module-1078.js");
exports.every = function(e, t) {
    return (r)=>new n.Observable((o)=>{
            let s = 0;
            r.subscribe((0, n.operate)({
                destination: o,
                next: (n)=>{
                    e.call(t, n, s++, r) || (o.next(!1), o.complete());
                },
                complete: ()=>{
                    o.next(!0), o.complete();
                }
            }));
        });
};
