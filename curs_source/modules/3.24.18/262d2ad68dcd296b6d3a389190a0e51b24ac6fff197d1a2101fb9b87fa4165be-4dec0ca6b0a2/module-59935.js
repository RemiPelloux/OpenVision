"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeInternals = void 0;
const n = require("./module-51078.js"), o = require("./module-55830.js");
exports.mergeInternals = function(e, t, r, s, i, a, l, c) {
    const u = [];
    let d = 0, p = 0, h = !1;
    const m = ()=>{
        !h || u.length || d || t.complete();
    }, f = (e)=>d < s ? g(e) : u.push(e), g = (e)=>{
        a && t.next(e), d++;
        let c = !1;
        (0, n.from)(r(e, p++)).subscribe((0, n.operate)({
            destination: t,
            next: (e)=>{
                i?.(e), a ? f(e) : t.next(e);
            },
            complete: ()=>{
                c = !0;
            },
            finalize: ()=>{
                if (c) try {
                    for(d--; u.length && d < s;){
                        const e = u.shift();
                        l ? (0, o.executeSchedule)(t, l, ()=>g(e)) : g(e);
                    }
                    m();
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
            h = !0, m();
        }
    })), ()=>{
        c?.();
    };
};
