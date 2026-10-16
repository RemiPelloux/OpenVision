"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowToggle = void 0;
const n = require("./module-51078.js"), o = require("./module-83043.js"), s = require("./module-64462.js"), i = require("./module-75143.js");
exports.windowToggle = function(e, t) {
    return (r)=>new n.Observable((a)=>{
            const l = [], c = (e)=>{
                for(; 0 < l.length;)l.shift().error(e);
                a.error(e);
            };
            (0, n.from)(e).subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const r = new o.Subject;
                    l.push(r);
                    const u = new n.Subscription;
                    let d;
                    try {
                        d = (0, n.from)(t(e));
                    } catch (e) {
                        return void c(e);
                    }
                    a.next(r), u.add(d.subscribe((0, n.operate)({
                        destination: a,
                        next: ()=>{
                            (0, i.arrRemove)(l, r), r.complete(), u.unsubscribe();
                        },
                        error: c,
                        complete: s.noop
                    })));
                },
                complete: s.noop
            })), r.subscribe((0, n.operate)({
                destination: a,
                next: (e)=>{
                    const t = l.slice();
                    for (const r of t)r.next(e);
                },
                error: c,
                complete: ()=>{
                    for(; 0 < l.length;)l.shift().complete();
                    a.complete();
                },
                finalize: ()=>{
                    for(; 0 < l.length;)l.shift().unsubscribe();
                }
            }));
        });
};
