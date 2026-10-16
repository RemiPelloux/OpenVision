"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowCount = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js");
exports.windowCount = function(e, t = 0) {
    const r = t > 0 ? t : e;
    return (t)=>new n.Observable((s)=>{
            let i = [
                new o.Subject
            ], a = [], c = 0;
            s.next(i[0].asObservable()), t.subscribe((0, n.operate)({
                destination: s,
                next: (t)=>{
                    for (const e of i)e.next(t);
                    const n = c - e + 1;
                    if (n >= 0 && n % r === 0 && i.shift().complete(), ++c % r === 0) {
                        const e = new o.Subject;
                        i.push(e), s.next(e.asObservable());
                    }
                },
                error: (e)=>{
                    for(; i.length > 0;)i.shift().error(e);
                    s.error(e);
                },
                complete: ()=>{
                    for(; i.length > 0;)i.shift().complete();
                    s.complete();
                },
                finalize: ()=>{
                    a = null, i = null;
                }
            }));
        });
};
