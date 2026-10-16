"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferWhen = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.bufferWhen = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = null, i = null;
            const a = ()=>{
                i?.unsubscribe();
                const t = o;
                o = [], t && r.next(t), (0, n.from)(e()).subscribe(i = (0, n.operate)({
                    destination: r,
                    next: a,
                    complete: s.noop
                }));
            };
            a(), t.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>o?.push(e),
                complete: ()=>{
                    o && r.next(o), r.complete();
                },
                finalize: ()=>o = i = null
            }));
        });
};
