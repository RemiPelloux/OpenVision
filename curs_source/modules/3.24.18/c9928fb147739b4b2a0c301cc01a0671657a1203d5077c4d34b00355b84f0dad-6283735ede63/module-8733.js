Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttle = void 0;
const s = require("./module-1078.js");
exports.throttle = function(e, a) {
    return (n)=>new s.Observable((o)=>{
            const { leading: r = !0, trailing: t = !1 } = a ?? {};
            let i = !1, m = null, l = null, d = !1;
            const c = ()=>{
                l?.unsubscribe(), l = null, t && (_(), d && o.complete());
            }, T = ()=>{
                l = null, d && o.complete();
            }, p = (a)=>l = (0, s.from)(e(a)).subscribe((0, s.operate)({
                    destination: o,
                    next: c,
                    complete: T
                })), _ = ()=>{
                if (i) {
                    i = !1;
                    const e = m;
                    m = null, o.next(e), !d && p(e);
                }
            };
            n.subscribe((0, s.operate)({
                destination: o,
                next: (e)=>{
                    i = !0, m = e, (!l || l.closed) && (r ? _() : p(e));
                },
                complete: ()=>{
                    d = !0, (!(t && i && l) || l.closed) && o.complete();
                }
            }));
        });
};
