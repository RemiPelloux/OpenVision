"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferToggle = void 0;
const n = require("./module-51078.js"), o = require("./module-64462.js"), s = require("./module-75143.js");
exports.bufferToggle = function(e, t) {
    return (r)=>new n.Observable((i)=>{
            const a = [];
            (0, n.from)(e).subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    const r = [];
                    a.push(r);
                    const l = new n.Subscription;
                    l.add((0, n.from)(t(e)).subscribe((0, n.operate)({
                        destination: i,
                        next: ()=>{
                            (0, s.arrRemove)(a, r), i.next(r), l.unsubscribe();
                        },
                        complete: o.noop
                    })));
                },
                complete: o.noop
            })), r.subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    for (const t of a)t.push(e);
                },
                complete: ()=>{
                    for(; a.length > 0;)i.next(a.shift());
                    i.complete();
                }
            }));
        });
};
