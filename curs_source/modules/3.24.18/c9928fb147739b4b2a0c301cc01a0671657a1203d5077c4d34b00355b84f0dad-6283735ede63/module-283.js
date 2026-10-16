Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.retry = void 0;
const s = require("./module-1078.js"), o = require("./module-4896.js"), r = require("./module-444.js");
exports.retry = function(e = 1 / 0) {
    let a;
    a = e && "object" == typeof e ? e : {
        count: e
    };
    const { count: n = 1 / 0, delay: t, resetOnSuccess: i = !1 } = a;
    return n <= 0 ? o.identity : (e)=>new s.Observable((a)=>{
            let o, m = 0;
            const l = ()=>{
                let d = !1;
                o = e.subscribe((0, s.operate)({
                    destination: a,
                    next: (e)=>{
                        i && (m = 0), a.next(e);
                    },
                    error: (e)=>{
                        if (m++ < n) {
                            const n = ()=>{
                                o ? (o.unsubscribe(), o = null, l()) : d = !0;
                            };
                            if (null != t) {
                                const o = "number" == typeof t ? (0, r.timer)(t) : (0, s.from)(t(e, m)), i = (0, s.operate)({
                                    destination: a,
                                    next: ()=>{
                                        i.unsubscribe(), n();
                                    },
                                    complete: ()=>{
                                        a.complete();
                                    }
                                });
                                o.subscribe(i);
                            } else n();
                        } else a.error(e);
                    }
                })), d && (o.unsubscribe(), o = null, l());
            };
            l();
        });
};
