"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowToggle = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js"), o = require("./module-64462.js"), i = require("./module-75143.js");
exports.windowToggle = function(e, t) {
    return (r)=>new n.Observable((a)=>{
            const c = [], l = (e)=>{
                for(; 0 < c.length;)c.shift().error(e);
                a.error(e);
            };
            (0, n.from)(e).subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const r = new s.Subject;
                    c.push(r);
                    const u = new n.Subscription;
                    let d;
                    try {
                        d = (0, n.from)(t(e));
                    } catch (e) {
                        return void l(e);
                    }
                    a.next(r), u.add(d.subscribe((0, n.operate)({
                        destination: a,
                        next: ()=>{
                            (0, i.arrRemove)(c, r), r.complete(), u.unsubscribe();
                        },
                        error: l,
                        complete: o.noop
                    })));
                },
                complete: o.noop
            })), r.subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const t = c.slice();
                    for (const r of t)r.next(e);
                },
                error: l,
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
