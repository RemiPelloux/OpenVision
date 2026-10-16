"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindCallbackInternals = void 0;
const n = require("./module-82901.js"), o = require("./module-51078.js"), s = require("./module-65683.js"), i = require("./module-76895.js"), a = require("./module-69880.js");
exports.bindCallbackInternals = function e(t, r, l, c) {
    if (l) {
        if (!(0, n.isScheduler)(l)) return function(...n) {
            return (0, s.mapOneOrManyArgs)(l)(e(t, r, c).apply(this, n));
        };
        c = l;
    }
    return c ? function(...n) {
        return (0, a.scheduled)(e(t, r).apply(this, n), c);
    } : function(...e) {
        const n = new i.AsyncSubject;
        let s = !0;
        return new o.Observable((o)=>{
            const i = n.subscribe(o);
            if (s) {
                s = !1;
                let o = !1, i = !1;
                r.apply(this, [
                    ...e,
                    (...e)=>{
                        if (t) {
                            const t = e.shift();
                            if (null != t) return void n.error(t);
                        }
                        n.next(1 < e.length ? e : e[0]), i = !0, o && n.complete();
                    }
                ]), i && n.complete(), o = !0;
            }
            return i;
        });
    };
};
