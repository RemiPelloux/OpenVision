"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.forkJoin = void 0;
const n = require("./module-51078.js"), s = require("./module-6800.js"), o = require("./module-25619.js"), i = require("./module-65683.js"), a = require("./module-60845.js"), c = require("./module-50231.js");
exports.forkJoin = function(...e) {
    const t = (0, o.popResultSelector)(e), { args: r, keys: l } = (0, s.argsArgArrayOrObject)(e), u = new n.Observable((e)=>{
        const { length: t } = r;
        if (!t) return void e.complete();
        const s = new Array(t);
        let o = t, i = t;
        for(let u = 0; u < t; u++){
            let t = !1;
            (0, n.from)(r[u]).subscribe((0, n.operate)({
                destination: e,
                next: (e)=>{
                    t || (t = !0, i--), s[u] = e;
                },
                complete: ()=>o--,
                finalize: ()=>{
                    o && t || (0 === i ? (e.next(l ? (0, a.createObject)(l, s) : s), e.complete()) : e.error(new c.EmptyError));
                }
            }));
        }
    });
    return t ? (0, i.mapOneOrManyArgs)(t)(u) : u;
};
