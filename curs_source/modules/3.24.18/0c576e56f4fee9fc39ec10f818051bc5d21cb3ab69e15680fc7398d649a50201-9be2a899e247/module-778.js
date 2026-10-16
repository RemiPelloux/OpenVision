"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultIfEmpty = void 0;
const n = require("./module-1078.js");
exports.defaultIfEmpty = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    o = !0, r.next(e);
                },
                complete: ()=>{
                    o || r.next(e), r.complete();
                }
            }));
        });
};
