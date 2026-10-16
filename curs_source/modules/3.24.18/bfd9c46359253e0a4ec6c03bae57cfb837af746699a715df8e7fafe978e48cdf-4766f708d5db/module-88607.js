"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.buffer = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.buffer = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = [];
            return (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>{
                    const e = o;
                    o = [], r.next(e);
                },
                complete: s.noop
            })), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>o.push(e),
                complete: ()=>{
                    r.next(o), r.complete();
                }
            })), ()=>{
                o = null;
            };
        });
};
