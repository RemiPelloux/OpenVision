"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowTime = void 0;
const n = require("./module-3043.js"), o = require("./module-2665.js"), s = require("./module-1078.js"), i = require("./module-5143.js"), a = require("./module-5619.js"), c = require("./module-5830.js");
exports.windowTime = function(e, ...t) {
    const r = (0, a.popScheduler)(t) ?? o.asyncScheduler, u = t[0] ?? null, l = t[1] || 1 / 0;
    return (t)=>new s.Observable((o)=>{
            let a = [], d = !1;
            const p = (e)=>{
                const { window: t, subs: r } = e;
                t.complete(), r.unsubscribe(), (0, i.arrRemove)(a, e), d && f();
            }, f = ()=>{
                if (a) {
                    const t = new s.Subscription;
                    o.add(t);
                    const i = new n.Subject, u = {
                        window: i,
                        subs: t,
                        seen: 0
                    };
                    a.push(u), o.next(i.asObservable()), (0, c.executeSchedule)(t, r, ()=>p(u), e);
                }
            };
            null !== u && u >= 0 ? (0, c.executeSchedule)(o, r, f, u, !0) : d = !0, f();
            const h = (e)=>a.slice().forEach(e), m = (e)=>{
                h(({ window: t })=>e(t)), e(o), o.unsubscribe();
            };
            return t.subscribe((0, s.operate)({
                destination: o,
                next: (e)=>{
                    h((t)=>{
                        t.window.next(e), l <= ++t.seen && p(t);
                    });
                },
                error: (e)=>m((t)=>t.error(e)),
                complete: ()=>m((e)=>e.complete())
            })), ()=>{
                a = null;
            };
        });
};
