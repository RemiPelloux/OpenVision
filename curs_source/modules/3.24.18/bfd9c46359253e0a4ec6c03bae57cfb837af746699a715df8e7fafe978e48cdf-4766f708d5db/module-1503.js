"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestInit = exports.combineLatest = void 0;
const n = require("./module-51078.js"), s = require("./module-6800.js"), o = require("./module-44896.js"), i = require("./module-60845.js"), a = require("./module-744.js");
function c(e, t = o.identity) {
    return (r)=>{
        const { length: s } = e, o = new Array(s);
        let i = s, a = s;
        for(let c = 0; c < s; c++){
            const s = (0, n.from)(e[c]);
            let l = !1;
            s.subscribe((0, n.operate)({
                destination: r,
                next: (e)=>{
                    o[c] = e, l || (l = !0, a--), a || r.next(t(Array.from(o)));
                },
                complete: ()=>{
                    --i || r.complete();
                }
            }));
        }
    };
}
exports.combineLatest = function(e, t) {
    const r = (0, s.arrayOrObject)(e);
    if (!r) throw new TypeError("sources must be an array or object");
    const { args: l, keys: u } = r;
    return 0 === l.length ? a.EMPTY : new n.Observable(c(l, u ? (e)=>(0, i.createObject)(u, e) : t ? (e)=>t(...e) : o.identity));
}, exports.combineLatestInit = c;
