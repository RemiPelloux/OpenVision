"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.every = void 0;
const n = require("./module-51078.js");
exports.every = function(e, t) {
    return (r)=>new n.Observable((s)=>{
            let o = 0;
            r.subscribe((0, n.operate)({
                destination: s,
                next: (n)=>{
                    e.call(t, n, o++, r) || (s.next(!1), s.complete());
                },
                complete: ()=>{
                    s.next(!0), s.complete();
                }
            }));
        });
};
