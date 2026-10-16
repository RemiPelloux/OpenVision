"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinct = void 0;
const n = require("./module-1078.js"), o = require("./module-4462.js");
exports.distinct = function(e, t) {
    return (r)=>new n.Observable((s)=>{
            const i = new Set;
            r.subscribe((0, n.operate)({
                destination: s,
                next: (t)=>{
                    const r = e ? e(t) : t;
                    i.has(r) || (i.add(r), s.next(t));
                }
            })), t && (0, n.from)(t).subscribe((0, n.operate)({
                destination: s,
                next: ()=>i.clear(),
                complete: o.noop
            }));
        });
};
