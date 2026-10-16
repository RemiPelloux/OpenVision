Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowToggle = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js"), r = require("./module-4462.js"), t = require("./module-5143.js");
exports.windowToggle = function(e, a) {
    return (n)=>new s.Observable((i)=>{
            const m = [], l = (e)=>{
                for(; 0 < m.length;)m.shift().error(e);
                i.error(e);
            };
            (0, s.from)(e).subscribe((0, s.operate)({
                destination: i,
                next: (e)=>{
                    const n = new o.Subject;
                    m.push(n);
                    const d = new s.Subscription;
                    let c;
                    try {
                        c = (0, s.from)(a(e));
                    } catch (e) {
                        return void l(e);
                    }
                    i.next(n), d.add(c.subscribe((0, s.operate)({
                        destination: i,
                        next: ()=>{
                            (0, t.arrRemove)(m, n), n.complete(), d.unsubscribe();
                        },
                        error: l,
                        complete: r.noop
                    })));
                },
                complete: r.noop
            })), n.subscribe((0, s.operate)({
                destination: i,
                next: (e)=>{
                    const a = m.slice();
                    for (const n of a)n.next(e);
                },
                error: l,
                complete: ()=>{
                    for(; 0 < m.length;)m.shift().complete();
                    i.complete();
                },
                finalize: ()=>{
                    for(; 0 < m.length;)m.shift().unsubscribe();
                }
            }));
        });
};
