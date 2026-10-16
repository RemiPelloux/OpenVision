Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.elementAt = void 0;
const s = require("./module-6129.js"), o = require("./module-1078.js");
exports.elementAt = function(e, a) {
    if (e < 0) throw new s.ArgumentOutOfRangeError;
    const n = arguments.length >= 2;
    return (r)=>new o.Observable((t)=>{
            let i = 0;
            const m = (0, o.operate)({
                destination: t,
                next: (a)=>{
                    i++ === e && (m.unsubscribe(), t.next(a), t.complete());
                },
                complete: ()=>{
                    n ? (t.next(a), t.complete()) : t.error(new s.ArgumentOutOfRangeError);
                }
            });
            r.subscribe(m);
        });
};
