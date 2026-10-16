Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.audit = void 0;
const s = require("./module-1078.js");
exports.audit = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = !1, r = null, t = null, i = !1;
            const m = ()=>{
                if (t?.unsubscribe(), t = null, o) {
                    o = !1;
                    const e = r;
                    r = null, n.next(e);
                }
                i && n.complete();
            }, l = ()=>{
                t = null, i && n.complete();
            };
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>{
                    o = !0, r = a, t || (0, s.from)(e(a)).subscribe(t = (0, s.operate)({
                        destination: n,
                        next: m,
                        complete: l
                    }));
                },
                complete: ()=>{
                    i = !0, (!o || !t || t.closed) && n.complete();
                }
            }));
        });
};
