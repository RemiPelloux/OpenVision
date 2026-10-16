Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.single = void 0;
const s = require("./module-1078.js"), o = require("./module-231.js"), r = require("./module-5841.js"), t = require("./module-5007.js");
exports.single = function(e) {
    return (a)=>new s.Observable((n)=>{
            let i, m = !1, l = !1, d = 0;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (s)=>{
                    l = !0, e && !e(s, d++, a) || (m && n.error(new r.SequenceError("Too many matching values")), m = !0, i = s);
                },
                complete: ()=>{
                    m ? (n.next(i), n.complete()) : n.error(l ? new t.NotFoundError("No matching values") : new o.EmptyError);
                }
            }));
        });
};
