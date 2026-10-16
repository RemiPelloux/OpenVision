"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowTime = void 0;
const n = require("./module-83043.js"), s = require("./module-2665.js"), o = require("./module-51078.js"), i = require("./module-75143.js"), a = require("./module-25619.js"), c = require("./module-55830.js");
exports.windowTime = function(e, ...t) {
    const r = (0, a.popScheduler)(t) ?? s.asyncScheduler, l = t[0] ?? null, u = t[1] || 1 / 0;
    return (t)=>new o.Observable((s)=>{
            let a = [], d = !1;
            const p = (e)=>{
                const { window: t, subs: r } = e;
                t.complete(), r.unsubscribe(), (0, i.arrRemove)(a, e), d && m();
            }, m = ()=>{
                if (a) {
                    const t = new o.Subscription;
                    s.add(t);
                    const i = new n.Subject, l = {
                        window: i,
                        subs: t,
                        seen: 0
                    };
                    a.push(l), s.next(i.asObservable()), (0, c.executeSchedule)(t, r, ()=>p(l), e);
                }
            };
            null !== l && l >= 0 ? (0, c.executeSchedule)(s, r, m, l, !0) : d = !0, m();
            const h = (e)=>a.slice().forEach(e), f = (e)=>{
                h(({ window: t })=>e(t)), e(s), s.unsubscribe();
            };
            return t.subscribe((0, o.operate)({
                destination: s,
                next: (e)=>{
                    h((t)=>{
                        t.window.next(e), u <= ++t.seen && p(t);
                    });
                },
                error: (e)=>f((t)=>t.error(e)),
                complete: ()=>f((e)=>e.complete())
            })), ()=>{
                a = null;
            };
        });
};
