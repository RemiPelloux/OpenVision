"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferTime = void 0;
const n = require("./module-51078.js"), o = require("./module-75143.js"), s = require("./module-2665.js"), i = require("./module-25619.js"), a = require("./module-55830.js");
exports.bufferTime = function(e, ...t) {
    const r = (0, i.popScheduler)(t) ?? s.asyncScheduler, l = t[0] ?? null, c = t[1] || 1 / 0;
    return (t)=>new n.Observable((s)=>{
            let i = [], u = !1;
            const d = (e)=>{
                const { buffer: t, subs: r } = e;
                r.unsubscribe(), (0, o.arrRemove)(i, e), s.next(t), u && p();
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
            null !== l && l >= 0 ? (0, a.executeSchedule)(s, r, p, l, !0) : u = !0, p();
            const h = (0, n.operate)({
                destination: s,
                next: (e)=>{
                    const t = i.slice();
                    for (const r of t){
                        const { buffer: t } = r;
                        t.push(e), c <= t.length && d(r);
                    }
                },
                complete: ()=>{
                    for(; i?.length;)s.next(i.shift().buffer);
                    h?.unsubscribe(), s.complete(), s.unsubscribe();
                },
                finalize: ()=>i = null
            });
            t.subscribe(h);
        });
};
