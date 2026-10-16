"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeWhile = void 0;
const n = require("./module-51078.js");
exports.takeWhile = function(e, t = !1) {
    return (r)=>new n.Observable((s)=>{
            let o = 0;
            const i = (0, n.operate)({
                destination: s,
                next: (r)=>{
                    e(r, o++) ? s.next(r) : (i.unsubscribe(), t && s.next(r), s.complete());
                }
            });
            r.subscribe(i);
        });
};
