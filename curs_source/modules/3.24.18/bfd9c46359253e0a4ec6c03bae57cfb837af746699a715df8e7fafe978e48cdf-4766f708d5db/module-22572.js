"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipUntil = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.skipUntil = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = !1;
            const i = (0, n.operate)({
                destination: r,
                next: ()=>{
                    i?.unsubscribe(), o = !0;
                },
                complete: s.noop
            });
            (0, n.from)(e).subscribe(i), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>o && r.next(e)
            }));
        });
};
