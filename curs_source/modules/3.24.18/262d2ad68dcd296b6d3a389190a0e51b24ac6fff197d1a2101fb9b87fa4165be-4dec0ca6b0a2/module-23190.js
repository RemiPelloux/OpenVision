"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeatWhen = void 0;
const n = require("./module-51078.js"), o = require("./module-83043.js");
exports.repeatWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s, i, a = !1, l = !1, c = !1;
            const u = ()=>c && l && (r.complete(), !0), d = ()=>{
                c = !1, s = t.subscribe((0, n.operate)({
                    destination: r,
                    complete: ()=>{
                        c = !0, !u() && (i || (i = new o.Subject, (0, n.from)(e(i)).subscribe((0, n.operate)({
                            destination: r,
                            next: ()=>{
                                s ? d() : a = !0;
                            },
                            complete: ()=>{
                                l = !0, u();
                            }
                        }))), i).next();
                    }
                })), a && (s.unsubscribe(), s = null, a = !1, d());
            };
            d();
        });
};
