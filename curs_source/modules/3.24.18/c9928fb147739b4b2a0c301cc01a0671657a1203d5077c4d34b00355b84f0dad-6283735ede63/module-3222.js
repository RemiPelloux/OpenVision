Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.catchError = void 0;
const s = require("./module-1078.js");
exports.catchError = function e(a) {
    return (n)=>new s.Observable((o)=>{
            let r, t = null, i = !1;
            t = n.subscribe((0, s.operate)({
                destination: o,
                error: (m)=>{
                    r = (0, s.from)(a(m, e(a)(n))), t ? (t.unsubscribe(), t = null, r.subscribe(o)) : i = !0;
                }
            })), i && (t.unsubscribe(), t = null, r.subscribe(o));
        });
};
