"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowCount = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js");
exports.windowCount = function(e, t = 0) {
    const r = t > 0 ? t : e;
    return (t)=>new n.Observable((o)=>{
            let i = [
                new s.Subject
            ], a = [], c = 0;
            o.next(i[0].asObservable()), t.subscribe((0, n.operate)({
                destination: o,
                next: (t)=>{
                    for (const e of i)e.next(t);
                    const n = c - e + 1;
                    if (n >= 0 && n % r === 0 && i.shift().complete(), ++c % r === 0) {
                        const e = new s.Subject;
                        i.push(e), o.next(e.asObservable());
                    }
                },
                error: (e)=>{
                    for(; i.length > 0;)i.shift().error(e);
                    o.error(e);
                },
                complete: ()=>{
                    for(; i.length > 0;)i.shift().complete();
                    o.complete();
                },
                finalize: ()=>{
                    a = null, i = null;
                }
            }));
        });
};
