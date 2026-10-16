Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowCount = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js");
exports.windowCount = function(e, a = 0) {
    const n = a > 0 ? a : e;
    return (a)=>new s.Observable((r)=>{
            let t = [
                new o.Subject
            ], i = [], m = 0;
            r.next(t[0].asObservable()), a.subscribe((0, s.operate)({
                destination: r,
                next: (a)=>{
                    for (const e of t)e.next(a);
                    const s = m - e + 1;
                    if (s >= 0 && s % n === 0 && t.shift().complete(), ++m % n === 0) {
                        const e = new o.Subject;
                        t.push(e), r.next(e.asObservable());
                    }
                },
                error: (e)=>{
                    for(; t.length > 0;)t.shift().error(e);
                    r.error(e);
                },
                complete: ()=>{
                    for(; t.length > 0;)t.shift().complete();
                    r.complete();
                },
                finalize: ()=>{
                    i = null, t = null;
                }
            }));
        });
};
