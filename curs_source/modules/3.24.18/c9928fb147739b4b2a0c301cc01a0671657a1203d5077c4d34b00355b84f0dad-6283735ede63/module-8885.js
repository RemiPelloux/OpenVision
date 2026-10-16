Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowWhen = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js"), r = require("./module-4462.js");
exports.windowWhen = function(e) {
    return (a)=>new s.Observable((n)=>{
            let t, i;
            const m = (e)=>{
                t.error(e), n.error(e);
            }, l = ()=>{
                let a;
                i?.unsubscribe(), t?.complete(), t = new o.Subject, n.next(t.asObservable());
                try {
                    a = (0, s.from)(e());
                } catch (e) {
                    return void m(e);
                }
                a.subscribe(i = (0, s.operate)({
                    destination: n,
                    next: l,
                    error: m,
                    complete: r.noop
                }));
            };
            l(), a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>t.next(e),
                error: m,
                complete: ()=>{
                    t.complete(), n.complete();
                },
                finalize: ()=>{
                    i?.unsubscribe(), t = null;
                }
            }));
        });
};
