"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeScan = void 0;
const n = require("./module-51078.js"), s = require("./module-59935.js");
exports.mergeScan = function(e, t, r = 1 / 0) {
    return (o)=>new n.Observable((n)=>{
            let i = t;
            return (0, s.mergeInternals)(o, n, (t, r)=>e(i, t, r), r, (e)=>{
                i = e;
            }, !1, void 0, ()=>i = null);
        });
};
