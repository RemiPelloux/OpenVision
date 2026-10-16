"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.forkJoin = void 0;
const n = require("./module-51078.js"), o = require("./module-6800.js"), s = require("./module-25619.js"), i = require("./module-65683.js"), a = require("./module-60845.js"), l = require("./module-50231.js");
exports.forkJoin = function(...e) {
    const t = (0, s.popResultSelector)(e), { args: r, keys: c } = (0, o.argsArgArrayOrObject)(e), u = new n.Observable((e)=>{
        const { length: t } = r;
        if (!t) return void e.complete();
        const o = new Array(t);
        let s = t, i = t;
        for(let u = 0; u < t; u++){
            let t = !1;
            (0, n.from)(r[u]).subscribe((0, n.operate)({
                destination: e,
                next: (e)=>{
                    t || (t = !0, i--), o[u] = e;
                },
                complete: ()=>s--,
                finalize: ()=>{
                    s && t || (0 === i ? (e.next(c ? (0, a.createObject)(c, o) : o), e.complete()) : e.error(new l.EmptyError));
                }
            }));
        }
    });
    return t ? (0, i.mapOneOrManyArgs)(t)(u) : u;
};
