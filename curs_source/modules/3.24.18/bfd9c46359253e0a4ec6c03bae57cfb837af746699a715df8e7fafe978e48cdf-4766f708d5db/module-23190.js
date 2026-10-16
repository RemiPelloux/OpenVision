"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeatWhen = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js");
exports.repeatWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o, i, a = !1, c = !1, l = !1;
            const u = ()=>l && c && (r.complete(), !0), d = ()=>{
                l = !1, o = t.subscribe((0, n.operate)({
                    destination: r,
                    complete: ()=>{
                        l = !0, !u() && (i || (i = new s.Subject, (0, n.from)(e(i)).subscribe((0, n.operate)({
                            destination: r,
                            next: ()=>{
                                o ? d() : a = !0;
                            },
                            complete: ()=>{
                                c = !0, u();
                            }
                        }))), i).next();
                    }
                })), a && (o.unsubscribe(), o = null, a = !1, d());
            };
            d();
        });
};
