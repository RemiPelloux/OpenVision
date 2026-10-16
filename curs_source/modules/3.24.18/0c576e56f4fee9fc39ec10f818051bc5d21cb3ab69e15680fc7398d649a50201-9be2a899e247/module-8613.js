"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throwIfEmpty = void 0;
const n = require("./module-231.js"), o = require("./module-1078.js");
function s() {
    return new n.EmptyError;
}
exports.throwIfEmpty = function(e = s) {
    return (t)=>new o.Observable((r)=>{
            let n = !1;
            t.subscribe((0, o.operate)({
                destination: r,
                next: (e)=>{
                    n = !0, r.next(e);
                },
                complete: ()=>n ? r.complete() : r.error(e())
            }));
        });
};
