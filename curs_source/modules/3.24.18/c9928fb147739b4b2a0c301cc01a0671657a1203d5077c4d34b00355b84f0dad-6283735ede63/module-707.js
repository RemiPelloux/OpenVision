Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retryWhen = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js");
exports.retryWhen = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r, t, i = !1;
            const m = ()=>{
                r = a.subscribe((0, s.operate)({
                    destination: n,
                    error: (a)=>{
                        t || (t = new o.Subject, (0, s.from)(e(t)).subscribe((0, s.operate)({
                            destination: n,
                            next: ()=>r ? m() : i = !0
                        }))), t && t.next(a);
                    }
                })), i && (r.unsubscribe(), r = null, i = !1, m());
            };
            m();
        });
};
