Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferToggle = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js"), r = require("./module-5143.js");
exports.bufferToggle = function(e, a) {
    return (n)=>new s.Observable((t)=>{
            const i = [];
            (0, s.from)(e).subscribe((0, s.operate)({
                destination: t,
                next: (e)=>{
                    const n = [];
                    i.push(n);
                    const m = new s.Subscription;
                    m.add((0, s.from)(a(e)).subscribe((0, s.operate)({
                        destination: t,
                        next: ()=>{
                            (0, r.arrRemove)(i, n), t.next(n), m.unsubscribe();
                        },
                        complete: o.noop
                    })));
                },
                complete: o.noop
            })), n.subscribe((0, s.operate)({
                destination: t,
                next: (e)=>{
                    for (const a of i)a.push(e);
                },
                complete: ()=>{
                    for(; i.length > 0;)t.next(i.shift());
                    t.complete();
                }
            }));
        });
};
