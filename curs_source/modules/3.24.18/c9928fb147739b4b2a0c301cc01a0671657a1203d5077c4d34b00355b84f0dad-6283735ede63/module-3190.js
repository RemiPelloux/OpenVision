Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeatWhen = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js");
exports.repeatWhen = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r, t, i = !1, m = !1, l = !1;
            const d = ()=>l && m && (n.complete(), !0), c = ()=>{
                l = !1, r = a.subscribe((0, s.operate)({
                    destination: n,
                    complete: ()=>{
                        l = !0, !d() && (t || (t = new o.Subject, (0, s.from)(e(t)).subscribe((0, s.operate)({
                            destination: n,
                            next: ()=>{
                                r ? c() : i = !0;
                            },
                            complete: ()=>{
                                m = !0, d();
                            }
                        }))), t).next();
                    }
                })), i && (r.unsubscribe(), r = null, i = !1, c());
            };
            c();
        });
};
