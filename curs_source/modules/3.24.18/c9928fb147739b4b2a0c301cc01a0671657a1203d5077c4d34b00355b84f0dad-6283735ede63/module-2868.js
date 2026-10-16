Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferCount = void 0;
const s = require("./module-1078.js"), o = require("./module-5143.js");
exports.bufferCount = function(e, a = null) {
    return a = a ?? e, (n)=>new s.Observable((r)=>{
            let t = [], i = 0;
            n.subscribe((0, s.operate)({
                destination: r,
                next: (n)=>{
                    let s = null;
                    i++ % a === 0 && t.push([]);
                    for (const a of t)a.push(n), e <= a.length && (s = s ?? [], s.push(a));
                    if (s) for (const e of s)(0, o.arrRemove)(t, e), r.next(e);
                },
                complete: ()=>{
                    for (const e of t)r.next(e);
                    r.complete();
                },
                finalize: ()=>{
                    t = null;
                }
            }));
        });
};
