"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindCallbackInternals = void 0;
const n = require("./module-82901.js"), s = require("./module-51078.js"), o = require("./module-65683.js"), i = require("./module-76895.js"), a = require("./module-69880.js");
exports.bindCallbackInternals = function e(t, r, c, l) {
    if (c) {
        if (!(0, n.isScheduler)(c)) return function(...n) {
            return (0, o.mapOneOrManyArgs)(c)(e(t, r, l).apply(this, n));
        };
        l = c;
    }
    return l ? function(...n) {
        return (0, a.scheduled)(e(t, r).apply(this, n), l);
    } : function(...e) {
        const n = new i.AsyncSubject;
        let o = !0;
        return new s.Observable((s)=>{
            const i = n.subscribe(s);
            if (o) {
                o = !1;
                let s = !1, i = !1;
                r.apply(this, [
                    ...e,
                    (...e)=>{
                        if (t) {
                            const t = e.shift();
                            if (null != t) return void n.error(t);
                        }
                        n.next(1 < e.length ? e : e[0]), i = !0, s && n.complete();
                    }
                ]), i && n.complete(), s = !0;
            }
            return i;
        });
    };
};
