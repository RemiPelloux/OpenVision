"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.switchScan = void 0;
const n = require("./module-711.js"), o = require("./module-1078.js");
exports.switchScan = function(e, t) {
    return (r)=>new o.Observable((s)=>{
            let i = t;
            return (0, n.switchMap)((t, r)=>e(i, t, r))(r).subscribe((0, o.operate)({
                destination: s,
                next: (e)=>{
                    i = e, s.next(e);
                }
            })), ()=>{
                i = null;
            };
        });
};
