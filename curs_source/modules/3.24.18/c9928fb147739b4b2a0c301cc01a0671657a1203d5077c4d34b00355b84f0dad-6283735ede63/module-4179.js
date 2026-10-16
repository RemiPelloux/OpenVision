Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.first = void 0;
const s = require("./module-1078.js"), o = require("./module-231.js");
exports.first = function(e, a) {
    const n = arguments.length >= 2;
    return (r)=>new s.Observable((t)=>{
            let i = 0;
            const m = (0, s.operate)({
                destination: t,
                next: (a)=>{
                    (!e || e(a, i++, r)) && (m.unsubscribe(), t.next(a), t.complete());
                },
                complete: ()=>{
                    n ? (t.next(a), t.complete()) : t.error(new o.EmptyError);
                }
            });
            r.subscribe(m);
        });
};
