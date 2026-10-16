"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throwIfEmpty = void 0;
const n = require("./module-50231.js"), s = require("./module-51078.js");
function o() {
    return new n.EmptyError;
}
exports.throwIfEmpty = function(e = o) {
    return (t)=>new s.Observable((r)=>{
            let n = !1;
            t.subscribe((0, s.operate)({
                destination: r,
                next: (e)=>{
                    n = !0, r.next(e);
                },
                complete: ()=>n ? r.complete() : r.error(e())
            }));
        });
};
