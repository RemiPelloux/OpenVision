"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.withLatestFrom = void 0;
const n = require("./module-51078.js"), o = require("./module-44896.js"), s = require("./module-64462.js"), i = require("./module-25619.js");
exports.withLatestFrom = function(...e) {
    const t = (0, i.popResultSelector)(e);
    return (r)=>new n.Observable((i)=>{
            const a = e.length, l = new Array(a);
            let c = e.map(()=>!1), u = !1;
            for(let t = 0; t < a; t++)(0, n.from)(e[t]).subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    l[t] = e, u || c[t] || (c[t] = !0, (u = c.every(o.identity)) && (c = null));
                },
                complete: s.noop
            }));
            r.subscribe((0, n.operate)({
                destination: i,
                next: (e)=>{
                    if (u) {
                        const r = [
                            e,
                            ...l
                        ];
                        i.next(t ? t(...r) : r);
                    }
                }
            }));
        });
};
