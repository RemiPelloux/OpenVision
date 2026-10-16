"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.catchError = void 0;
const n = require("./module-51078.js");
exports.catchError = function e(t) {
    return (r)=>new n.Observable((s)=>{
            let o, i = null, a = !1;
            i = r.subscribe((0, n.operate)({
                destination: s,
                error: (c)=>{
                    o = (0, n.from)(t(c, e(t)(r))), i ? (i.unsubscribe(), i = null, o.subscribe(s)) : a = !0;
                }
            })), a && (i.unsubscribe(), i = null, o.subscribe(s));
        });
};
