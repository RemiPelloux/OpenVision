"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowToggle = void 0;
const n = require("./module-1078.js"), o = require("./module-3043.js"), s = require("./module-4462.js"), i = require("./module-5143.js");
exports.windowToggle = function(e, t) {
    return (r)=>new n.Observable((a)=>{
            const c = [], u = (e)=>{
                for(; 0 < c.length;)c.shift().error(e);
                a.error(e);
            };
            (0, n.from)(e).subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const r = new o.Subject;
                    c.push(r);
                    const l = new n.Subscription;
                    let d;
                    try {
                        d = (0, n.from)(t(e));
                    } catch (e) {
                        return void u(e);
                    }
                    a.next(r), l.add(d.subscribe((0, n.operate)({
                        destination: a,
                        next: ()=>{
                            (0, i.arrRemove)(c, r), r.complete(), l.unsubscribe();
                        },
                        error: u,
                        complete: s.noop
                    })));
                },
                complete: s.noop
            })), r.subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const t = c.slice();
                    for (const r of t)r.next(e);
                },
                error: u,
                complete: ()=>{
                    for(; 0 < c.length;)c.shift().complete();
                    a.complete();
                },
                finalize: ()=>{
                    for(; 0 < c.length;)c.shift().unsubscribe();
                }
            }));
        });
};
