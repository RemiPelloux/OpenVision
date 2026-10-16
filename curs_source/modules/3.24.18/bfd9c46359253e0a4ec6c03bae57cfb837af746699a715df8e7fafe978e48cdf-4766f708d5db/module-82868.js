"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferCount = void 0;
const n = require("./module-51078.js"), s = require("./module-75143.js");
exports.bufferCount = function(e, t = null) {
    return t = t ?? e, (r)=>new n.Observable((o)=>{
            let i = [], a = 0;
            r.subscribe((0, n.operate)({
                destination: o,
                next: (r)=>{
                    let n = null;
                    a++ % t === 0 && i.push([]);
                    for (const t of i)t.push(r), e <= t.length && (n = n ?? [], n.push(t));
                    if (n) for (const e of n)(0, s.arrRemove)(i, e), o.next(e);
                },
                complete: ()=>{
                    for (const e of i)o.next(e);
                    o.complete();
                },
                finalize: ()=>{
                    i = null;
                }
            }));
        });
};
