"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filter = void 0;
const n = require("./module-51078.js");
exports.filter = function(e, t) {
    return (r)=>new n.Observable((s)=>{
            let o = 0;
            r.subscribe((0, n.operate)({
                destination: s,
                next: (r)=>e.call(t, r, o++) && s.next(r)
            }));
        });
};
