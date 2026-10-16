Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferTime = void 0;
const s = require("./module-1078.js"), o = require("./module-5143.js"), r = require("./module-2665.js"), t = require("./module-5619.js"), i = require("./module-5830.js");
exports.bufferTime = function(e, ...a) {
    const n = (0, t.popScheduler)(a) ?? r.asyncScheduler, m = a[0] ?? null, l = a[1] || 1 / 0;
    return (a)=>new s.Observable((r)=>{
            let t = [], d = !1;
            const c = (e)=>{
                const { buffer: a, subs: n } = e;
                n.unsubscribe(), (0, o.arrRemove)(t, e), r.next(a), d && T();
            }, T = ()=>{
                if (t) {
                    const a = new s.Subscription;
                    r.add(a);
                    const o = {
                        buffer: [],
                        subs: a
                    };
                    t.push(o), (0, i.executeSchedule)(a, n, ()=>c(o), e);
                }
            };
            null !== m && m >= 0 ? (0, i.executeSchedule)(r, n, T, m, !0) : d = !0, T();
            const p = (0, s.operate)({
                destination: r,
                next: (e)=>{
                    const a = t.slice();
                    for (const n of a){
                        const { buffer: a } = n;
                        a.push(e), l <= a.length && c(n);
                    }
                },
                complete: ()=>{
                    for(; t?.length;)r.next(t.shift().buffer);
                    p?.unsubscribe(), r.complete(), r.unsubscribe();
                },
                finalize: ()=>t = null
            });
            a.subscribe(p);
        });
};
