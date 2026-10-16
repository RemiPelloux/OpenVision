"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferTime = void 0;
const n = require("./module-1078.js"), o = require("./module-5143.js"), s = require("./module-2665.js"), i = require("./module-5619.js"), a = require("./module-5830.js");
exports.bufferTime = function(e, ...t) {
    const r = (0, i.popScheduler)(t) ?? s.asyncScheduler, c = t[0] ?? null, u = t[1] || 1 / 0;
    return (t)=>new n.Observable((s)=>{
            let i = [], l = !1;
            const d = (e)=>{
                const { buffer: t, subs: r } = e;
                r.unsubscribe(), (0, o.arrRemove)(i, e), s.next(t), l && p();
            }, p = ()=>{
                if (i) {
                    const t = new n.Subscription;
                    s.add(t);
                    const o = {
                        buffer: [],
                        subs: t
                    };
                    i.push(o), (0, a.executeSchedule)(t, r, ()=>d(o), e);
                }
            };
            null !== c && c >= 0 ? (0, a.executeSchedule)(s, r, p, c, !0) : l = !0, p();
            const f = (0, n.operate)({
                destination: s,
                next: (e)=>{
                    const t = i.slice();
                    for (const r of t){
                        const { buffer: t } = r;
                        t.push(e), u <= t.length && d(r);
                    }
                },
                complete: ()=>{
                    for(; i?.length;)s.next(i.shift().buffer);
                    f?.unsubscribe(), s.complete(), s.unsubscribe();
                },
                finalize: ()=>i = null
            });
            t.subscribe(f);
        });
};
