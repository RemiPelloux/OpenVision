"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sequenceEqual = void 0;
const n = require("./module-1078.js");
exports.sequenceEqual = function(e, t = (e, t)=>e === t) {
    return (r)=>new n.Observable((o)=>{
            const s = {
                buffer: [],
                complete: !1
            }, i = {
                buffer: [],
                complete: !1
            }, a = (e)=>{
                o.next(e), o.complete();
            }, c = (e, r)=>{
                const s = (0, n.operate)({
                    destination: o,
                    next: (n)=>{
                        const { buffer: o, complete: s } = r;
                        0 === o.length ? s ? a(!1) : e.buffer.push(n) : !t(n, o.shift()) && a(!1);
                    },
                    complete: ()=>{
                        e.complete = !0;
                        const { complete: t, buffer: n } = r;
                        t && a(0 === n.length), s?.unsubscribe();
                    }
                });
                return s;
            };
            r.subscribe(c(s, i)), (0, n.from)(e).subscribe(c(i, s));
        });
};
