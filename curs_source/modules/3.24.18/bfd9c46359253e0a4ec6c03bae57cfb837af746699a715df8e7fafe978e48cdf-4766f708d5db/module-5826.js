"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.withLatestFrom = void 0;
const n = require("./module-51078.js"), s = require("./module-44896.js"), o = require("./module-64462.js"), i = require("./module-25619.js");
exports.withLatestFrom = function(...e) {
    const t = (0, i.popResultSelector)(e);
    return (r)=>new n.Observable((i)=>{
            const a = e.length, c = new Array(a);
            let l = e.map(()=>!1), u = !1;
            for(let t = 0; t < a; t++)(0, n.from)(e[t]).subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    c[t] = e, u || l[t] || (l[t] = !0, (u = l.every(s.identity)) && (l = null));
                },
                complete: o.noop
            }));
            r.subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    if (u) {
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
