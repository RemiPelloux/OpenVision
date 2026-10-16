"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retryWhen = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js");
exports.retryWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s, i, a = !1;
            const c = ()=>{
                s = t.subscribe((0, n.operate)({
                    destination: r,
                    error: (t)=>{
                        i || (i = new o.Subject, (0, n.from)(e(i)).subscribe((0, n.operate)({
                            destination: r,
                            next: ()=>s ? c() : a = !0
                        }))), i && i.next(t);
                    }
                })), a && (s.unsubscribe(), s = null, a = !1, c());
            };
            c();
        });
};
