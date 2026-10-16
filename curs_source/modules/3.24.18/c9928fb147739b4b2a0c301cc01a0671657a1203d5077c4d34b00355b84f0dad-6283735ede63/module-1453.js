Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.last = void 0;
const s = require("./module-1078.js"), o = require("./module-231.js");
exports.last = function(e, a) {
    const n = arguments.length >= 2;
    return (r)=>new s.Observable((t)=>{
            let i, m = 0, l = !1;
            r.subscribe((0, s.operate)({
                destination: t,
                next (a) {
                    e && !e(a, m++, r) || (l = !0, i = a);
                },
                complete () {
                    l ? (t.next(i), t.complete()) : n ? (t.next(a), t.complete()) : t.error(new o.EmptyError);
                }
            }));
        });
};
