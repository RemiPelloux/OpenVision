Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowTime = void 0;
const s = require("./module-3043.js"), o = require("./module-2665.js"), r = require("./module-1078.js"), t = require("./module-5143.js"), i = require("./module-5619.js"), m = require("./module-5830.js");
exports.windowTime = function(e, ...a) {
    const n = (0, i.popScheduler)(a) ?? o.asyncScheduler, l = a[0] ?? null, d = a[1] || 1 / 0;
    return (a)=>new r.Observable((o)=>{
            let i = [], c = !1;
            const T = (e)=>{
                const { window: a, subs: n } = e;
                a.complete(), n.unsubscribe(), (0, t.arrRemove)(i, e), c && p();
            }, p = ()=>{
                if (i) {
                    const a = new r.Subscription;
                    o.add(a);
                    const t = new s.Subject, l = {
                        window: t,
                        subs: a,
                        seen: 0
                    };
                    i.push(l), o.next(t.asObservable()), (0, m.executeSchedule)(a, n, ()=>T(l), e);
                }
            };
            null !== l && l >= 0 ? (0, m.executeSchedule)(o, n, p, l, !0) : c = !0, p();
            const _ = (e)=>i.slice().forEach(e), k = (e)=>{
                _(({ window: a })=>e(a)), e(o), o.unsubscribe();
            };
            return a.subscribe((0, r.operate)({
                destination: o,
                next: (e)=>{
                    _((a)=>{
                        a.window.next(e), d <= ++a.seen && T(a);
                    });
                },
                error: (e)=>k((a)=>a.error(e)),
                complete: ()=>k((e)=>e.complete())
            })), ()=>{
                i = null;
            };
        });
};
