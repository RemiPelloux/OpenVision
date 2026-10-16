"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retryWhen = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js");
exports.retryWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o, i, a = !1;
            const c = ()=>{
                o = t.subscribe((0, n.operate)({
                    destination: r,
                    error: (t)=>{
                        i || (i = new s.Subject, (0, n.from)(e(i)).subscribe((0, n.operate)({
                            destination: r,
                            next: ()=>o ? c() : a = !0
                        }))), i && i.next(t);
                    }
                })), a && (o.unsubscribe(), o = null, a = !1, c());
            };
            c();
        });
};
