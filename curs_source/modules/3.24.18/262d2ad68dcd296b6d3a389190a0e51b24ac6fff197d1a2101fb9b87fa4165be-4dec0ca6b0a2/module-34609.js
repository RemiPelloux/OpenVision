"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipWhile = void 0;
const n = require("./module-51078.js");
exports.skipWhile = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1, s = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>(o || (o = !e(t, s++))) && r.next(t)
            }));
        });
};
