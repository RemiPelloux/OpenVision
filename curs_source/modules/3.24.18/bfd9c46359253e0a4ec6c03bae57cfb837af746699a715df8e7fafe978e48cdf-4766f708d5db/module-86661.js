"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.window = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js"), o = require("./module-64462.js");
exports.window = function(e) {
    return (t)=>new n.Observable((r)=>{
            let i = new s.Subject;
            r.next(i.asObservable());
            const a = (e)=>{
                i.error(e), r.error(e);
            };
            return t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>i?.next(e),
                complete: ()=>{
                    i.complete(), r.complete();
                },
                error: a
            })), (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>{
                    i.complete(), r.next(i = new s.Subject);
                },
                complete: o.noop,
                error: a
            })), ()=>{
                i?.unsubscribe(), i = null;
            };
        });
};
