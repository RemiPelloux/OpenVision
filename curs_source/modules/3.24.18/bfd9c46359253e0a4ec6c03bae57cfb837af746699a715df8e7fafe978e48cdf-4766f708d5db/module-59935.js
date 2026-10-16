"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeInternals = void 0;
const n = require("./module-51078.js"), s = require("./module-55830.js");
exports.mergeInternals = function(e, t, r, o, i, a, c, l) {
    const u = [];
    let d = 0, p = 0, m = !1;
    const h = ()=>{
        !m || u.length || d || t.complete();
    }, f = (e)=>d < o ? g(e) : u.push(e), g = (e)=>{
        a && t.next(e), d++;
        let l = !1;
        (0, n.from)(r(e, p++)).subscribe((0, n.operate)({
            destination: t,
            next: (e)=>{
                i?.(e), a ? f(e) : t.next(e);
            },
            complete: ()=>{
                l = !0;
            },
            finalize: ()=>{
                if (l) try {
                    for(d--; u.length && d < o;){
                        const e = u.shift();
                        c ? (0, s.executeSchedule)(t, c, ()=>g(e)) : g(e);
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
        next: f,
        complete: ()=>{
            m = !0, h();
        }
    })), ()=>{
        l?.();
    };
};
