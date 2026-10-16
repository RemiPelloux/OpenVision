"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferTime = void 0;
const n = require("./module-51078.js"), s = require("./module-75143.js"), o = require("./module-2665.js"), i = require("./module-25619.js"), a = require("./module-55830.js");
exports.bufferTime = function(e, ...t) {
    const r = (0, i.popScheduler)(t) ?? o.asyncScheduler, c = t[0] ?? null, l = t[1] || 1 / 0;
    return (t)=>new n.Observable((o)=>{
            let i = [], u = !1;
            const d = (e)=>{
                const { buffer: t, subs: r } = e;
                r.unsubscribe(), (0, s.arrRemove)(i, e), o.next(t), u && p();
            }, p = ()=>{
                if (i) {
                    const t = new n.Subscription;
                    o.add(t);
                    const s = {
                        buffer: [],
                        subs: t
                    };
                    i.push(s), (0, a.executeSchedule)(t, r, ()=>d(s), e);
                }
            };
            null !== c && c >= 0 ? (0, a.executeSchedule)(o, r, p, c, !0) : u = !0, p();
            const m = (0, n.operate)({
                destination: o,
                next: (e)=>{
                    const t = i.slice();
                    for (const r of t){
                        const { buffer: t } = r;
                        t.push(e), l <= t.length && d(r);
                    }
                },
                complete: ()=>{
                    for(; i?.length;)o.next(i.shift().buffer);
                    m?.unsubscribe(), o.complete(), o.unsubscribe();
                },
                finalize: ()=>i = null
            });
            t.subscribe(m);
        });
};
