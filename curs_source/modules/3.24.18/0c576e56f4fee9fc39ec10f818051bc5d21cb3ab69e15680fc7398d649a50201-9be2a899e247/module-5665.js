"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.forkJoin = void 0;
const n = require("./module-1078.js"), o = require("./module-6800.js"), s = require("./module-5619.js"), i = require("./module-5683.js"), a = require("./module-845.js"), c = require("./module-231.js");
exports.forkJoin = function(...e) {
    const t = (0, s.popResultSelector)(e), { args: r, keys: u } = (0, o.argsArgArrayOrObject)(e), l = new n.Observable((e)=>{
        const { length: t } = r;
        if (!t) return void e.complete();
        const o = new Array(t);
        let s = t, i = t;
        for(let l = 0; l < t; l++){
            let t = !1;
            (0, n.from)(r[l]).subscribe((0, n.operate)({
                destination: e,
                next: (e)=>{
                    t || (t = !0, i--), o[l] = e;
                },
                complete: ()=>s--,
                finalize: ()=>{
                    s && t || (0 === i ? (e.next(u ? (0, a.createObject)(u, o) : o), e.complete()) : e.error(new c.EmptyError));
                }
            }));
        }
    });
    return t ? (0, i.mapOneOrManyArgs)(t)(l) : l;
};
