Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounce = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.debounce = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r = !1, t = null, i = null;
            const m = ()=>{
                if (i?.unsubscribe(), i = null, r) {
                    r = !1;
                    const e = t;
                    t = null, n.next(e);
                }
            };
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>{
                    i?.unsubscribe(), r = !0, t = a, i = (0, s.operate)({
                        destination: n,
                        next: m,
                        complete: o.noop
                    }), (0, s.from)(e(a)).subscribe(i);
                },
                complete: ()=>{
                    m(), n.complete();
                },
                finalize: ()=>{
                    t = i = null;
                }
            }));
        });
};
