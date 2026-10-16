"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestInit = exports.combineLatest = void 0;
const n = require("./module-51078.js"), o = require("./module-6800.js"), s = require("./module-44896.js"), i = require("./module-60845.js"), a = require("./module-744.js");
function l(e, t = s.identity) {
    return (r)=>{
        const { length: o } = e, s = new Array(o);
        let i = o, a = o;
        for(let l = 0; l < o; l++){
            const o = (0, n.from)(e[l]);
            let c = !1;
            o.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    s[l] = e, c || (c = !0, a--), a || r.next(t(Array.from(s)));
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
    const { args: c, keys: u } = r;
    return 0 === c.length ? a.EMPTY : new n.Observable(l(c, u ? (e)=>(0, i.createObject)(u, e) : t ? (e)=>t(...e) : s.identity));
}, exports.combineLatestInit = l;
