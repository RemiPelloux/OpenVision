"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferCount = void 0;
const n = require("./module-51078.js"), o = require("./module-75143.js");
exports.bufferCount = function(e, t = null) {
    return t = t ?? e, (r)=>new n.Observable((s)=>{
            let i = [], a = 0;
            r.subscribe((0, n.operate)({
                destination: s,
                next: (r)=>{
                    let n = null;
                    a++ % t === 0 && i.push([]);
                    for (const t of i)t.push(r), e <= t.length && (n = n ?? [], n.push(t));
                    if (n) for (const e of n)(0, o.arrRemove)(i, e), s.next(e);
                },
                complete: ()=>{
                    for (const e of i)s.next(e);
                    s.complete();
                },
                finalize: ()=>{
                    i = null;
                }
            }));
        });
};
