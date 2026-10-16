"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.withLatestFrom = void 0;
const n = require("./module-1078.js"), o = require("./module-4896.js"), s = require("./module-4462.js"), i = require("./module-5619.js");
exports.withLatestFrom = function(...e) {
    const t = (0, i.popResultSelector)(e);
    return (r)=>new n.Observable((i)=>{
            const a = e.length, c = new Array(a);
            let u = e.map(()=>!1), l = !1;
            for(let t = 0; t < a; t++)(0, n.from)(e[t]).subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    c[t] = e, l || u[t] || (u[t] = !0, (l = u.every(o.identity)) && (u = null));
                },
                complete: s.noop
            }));
            r.subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    if (l) {
                        const r = [
                            e,
                            ...c
                        ];
                        i.next(t ? t(...r) : r);
                    }
                }
            }));
        });
};
