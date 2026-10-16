"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeInternals = void 0;
const n = require("./module-1078.js"), o = require("./module-5830.js");
exports.mergeInternals = function(e, t, r, s, i, a, c, u) {
    const l = [];
    let d = 0, p = 0, f = !1;
    const h = ()=>{
        !f || l.length || d || t.complete();
    }, m = (e)=>d < s ? g(e) : l.push(e), g = (e)=>{
        a && t.next(e), d++;
        let u = !1;
        (0, n.from)(r(e, p++)).subscribe((0, n.operate)({
            destination: t,
            next: (e)=>{
                i?.(e), a ? m(e) : t.next(e);
            },
            complete: ()=>{
                u = !0;
            },
            finalize: ()=>{
                if (u) try {
                    for(d--; l.length && d < s;){
                        const e = l.shift();
                        c ? (0, o.executeSchedule)(t, c, ()=>g(e)) : g(e);
                    }
                    h();
                } catch (e) {
                    t.error(e);
                }
            }
        }));
    };
    return e.subscribe((0, n.operate)({
        destination: t,
        next: m,
        complete: ()=>{
            f = !0, h();
        }
    })), ()=>{
        u?.();
    };
};
