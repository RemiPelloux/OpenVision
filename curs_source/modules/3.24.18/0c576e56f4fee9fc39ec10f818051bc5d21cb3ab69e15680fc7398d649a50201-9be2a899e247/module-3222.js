"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.catchError = void 0;
const n = require("./module-1078.js");
exports.catchError = function e(t) {
    return (r)=>new n.Observable((o)=>{
            let s, i = null, a = !1;
            i = r.subscribe((0, n.operate)({
                destination: o,
                error: (c)=>{
                    s = (0, n.from)(t(c, e(t)(r))), i ? (i.unsubscribe(), i = null, s.subscribe(o)) : a = !0;
                }
            })), a && (i.unsubscribe(), i = null, s.subscribe(o));
        });
};
