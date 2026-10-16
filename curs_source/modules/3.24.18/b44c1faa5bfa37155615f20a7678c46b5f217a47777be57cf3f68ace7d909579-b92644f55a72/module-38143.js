"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.map = void 0;
const n = require("./module-51078.js");
exports.map = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    r.next(e(t, s++));
                }
            }));
        });
};
