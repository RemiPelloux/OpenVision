"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferWhen = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.bufferWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = null, i = null;
            const a = ()=>{
                i?.unsubscribe();
                const t = s;
                s = [], t && r.next(t), (0, n.from)(e()).subscribe(i = (0, n.operate)({
                    destination: r,
                    next: a,
                    complete: o.noop
                }));
            };
            a(), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>s?.push(e),
                complete: ()=>{
                    s && r.next(s), r.complete();
                },
                finalize: ()=>s = i = null
            }));
        });
};
