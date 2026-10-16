Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindCallbackInternals = void 0;
const s = require("./module-2901.js"), o = require("./module-1078.js"), r = require("./module-5683.js"), t = require("./module-6895.js"), i = require("./module-9880.js");
exports.bindCallbackInternals = function e(a, n, m, l) {
    if (m) {
        if (!(0, s.isScheduler)(m)) return function(...s) {
            return (0, r.mapOneOrManyArgs)(m)(e(a, n, l).apply(this, s));
        };
        l = m;
    }
    return l ? function(...s) {
        return (0, i.scheduled)(e(a, n).apply(this, s), l);
    } : function(...e) {
        const s = new t.AsyncSubject;
        let r = !0;
        return new o.Observable((o)=>{
            const t = s.subscribe(o);
            if (r) {
                r = !1;
                let o = !1, t = !1;
                n.apply(this, [
                    ...e,
                    (...e)=>{
                        if (a) {
                            const a = e.shift();
                            if (null != a) return void s.error(a);
                        }
                        s.next(1 < e.length ? e : e[0]), t = !0, o && s.complete();
                    }
                ]), t && s.complete(), o = !0;
            }
            return t;
        });
    };
};
