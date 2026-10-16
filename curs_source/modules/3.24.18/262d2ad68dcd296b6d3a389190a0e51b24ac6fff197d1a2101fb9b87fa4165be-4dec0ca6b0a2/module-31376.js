"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowTime = void 0;
const n = require("./module-83043.js"), o = require("./module-2665.js"), s = require("./module-51078.js"), i = require("./module-75143.js"), a = require("./module-25619.js"), l = require("./module-55830.js");
exports.windowTime = function(e, ...t) {
    const r = (0, a.popScheduler)(t) ?? o.asyncScheduler, c = t[0] ?? null, u = t[1] || 1 / 0;
    return (t)=>new s.Observable((o)=>{
            let a = [], d = !1;
            const p = (e)=>{
                const { window: t, subs: r } = e;
                t.complete(), r.unsubscribe(), (0, i.arrRemove)(a, e), d && h();
            }, h = ()=>{
                if (a) {
                    const t = new s.Subscription;
                    o.add(t);
                    const i = new n.Subject, c = {
                        window: i,
                        subs: t,
                        seen: 0
                    };
                    a.push(c), o.next(i.asObservable()), (0, l.executeSchedule)(t, r, ()=>p(c), e);
                }
            };
            null !== c && c >= 0 ? (0, l.executeSchedule)(o, r, h, c, !0) : d = !0, h();
            const m = (e)=>a.slice().forEach(e), f = (e)=>{
                m(({ window: t })=>e(t)), e(o), o.unsubscribe();
            };
            return t.subscribe((0, s.operate)({
                destination: o,
                next: (e)=>{
                    m((t)=>{
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
