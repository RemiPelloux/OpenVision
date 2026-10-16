"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestInit = exports.combineLatest = void 0;
const n = require("./module-1078.js"), o = require("./module-6800.js"), s = require("./module-4896.js"), i = require("./module-845.js"), a = require("./module-744.js");
function c(e, t = s.identity) {
    return (r)=>{
        const { length: o } = e, s = new Array(o);
        let i = o, a = o;
        for(let c = 0; c < o; c++){
            const o = (0, n.from)(e[c]);
            let u = !1;
            o.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    s[c] = e, u || (u = !0, a--), a || r.next(t(Array.from(s)));
                },
                complete: ()=>{
                    --i || r.complete();
                }
            }));
        }
    };
}
exports.combineLatest = function(e, t) {
    const r = (0, o.arrayOrObject)(e);
    if (!r) throw new TypeError("sources must be an array or object");
    const { args: u, keys: l } = r;
    return 0 === u.length ? a.EMPTY : new n.Observable(c(u, l ? (e)=>(0, i.createObject)(l, e) : t ? (e)=>t(...e) : s.identity));
}, exports.combineLatestInit = c;
