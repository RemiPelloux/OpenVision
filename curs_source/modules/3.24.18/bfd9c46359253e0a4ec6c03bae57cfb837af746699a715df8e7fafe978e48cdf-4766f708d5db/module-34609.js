"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipWhile = void 0;
const n = require("./module-51078.js");
exports.skipWhile = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = !1, o = 0;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>(s || (s = !e(t, o++))) && r.next(t)
            }));
        });
};
