"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.switchScan = void 0;
const n = require("./module-20711.js"), s = require("./module-51078.js");
exports.switchScan = function(e, t) {
    return (r)=>new s.Observable((o)=>{
            let i = t;
            return (0, n.switchMap)((t, r)=>e(i, t, r))(r).subscribe((0, s.operate)({
                destination: o,
                next: (e)=>{
                    i = e, o.next(e);
                }
            })), ()=>{
                i = null;
            };
        });
};
