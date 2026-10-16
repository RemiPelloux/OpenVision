"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeatWhen = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js");
exports.repeatWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s, i, a = !1, c = !1, u = !1;
            const l = ()=>u && c && (r.complete(), !0), d = ()=>{
                u = !1, s = t.subscribe((0, n.operate)({
                    destination: r,
                    complete: ()=>{
                        u = !0, !l() && (i || (i = new o.Subject, (0, n.from)(e(i)).subscribe((0, n.operate)({
                            destination: r,
                            next: ()=>{
                                s ? d() : a = !0;
                            },
                            complete: ()=>{
                                c = !0, l();
                            }
                        }))), i).next();
                    }
                })), a && (s.unsubscribe(), s = null, a = !1, d());
            };
            d();
        });
};
