"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sequenceEqual = void 0;
const n = require("./module-51078.js");
exports.sequenceEqual = function(e, t = (e, t)=>e === t) {
    return (r)=>new n.Observable((s)=>{
            const o = {
                buffer: [],
                complete: !1
            }, i = {
                buffer: [],
                complete: !1
            }, a = (e)=>{
                s.next(e), s.complete();
            }, c = (e, r)=>{
                const o = (0, n.operate)({
                    destination: s,
                    next: (n)=>{
                        const { buffer: s, complete: o } = r;
                        0 === s.length ? o ? a(!1) : e.buffer.push(n) : !t(n, s.shift()) && a(!1);
                    },
                    complete: ()=>{
                        e.complete = !0;
                        const { complete: t, buffer: n } = r;
                        t && a(0 === n.length), o?.unsubscribe();
                    }
                });
                return o;
            };
            r.subscribe(c(o, i)), (0, n.from)(e).subscribe(c(i, o));
        });
};
