"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.buffer = void 0;
const n = require("./module-51078.js"), o = require("./module-64462.js");
exports.buffer = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = [];
            return (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>{
                    const e = s;
                    s = [], r.next(e);
                },
                complete: o.noop
            })), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>s.push(e),
                complete: ()=>{
                    r.next(s), r.complete();
                }
            })), ()=>{
                s = null;
            };
        });
};
