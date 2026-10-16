"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinct = void 0;
const n = require("./module-51078.js"), s = require("./module-64462.js");
exports.distinct = function(e, t) {
    return (r)=>new n.Observable((o)=>{
            const i = new Set;
            r.subscribe((0, n.operate)({
                destination: o,
                next: (t)=>{
                    const r = e ? e(t) : t;
                    i.has(r) || (i.add(r), o.next(t));
                }
            })), t && (0, n.from)(t).subscribe((0, n.operate)({
                destination: o,
                next: ()=>i.clear(),
                complete: s.noop
            }));
        });
};
