"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFind = exports.find = void 0;
const n = require("./module-51078.js");
function s(e, t, r, s) {
    const o = "index" === t;
    let i = 0;
    r.subscribe((0, n.operate)({
        destination: s,
        next: (t)=>{
            const n = i++;
            e(t, n, r) && (s.next(o ? n : t), s.complete());
        },
        complete: ()=>{
            s.next(o ? -1 : void 0), s.complete();
        }
    }));
}
exports.find = function(e) {
    return (t)=>new n.Observable((r)=>s(e, "value", t, r));
}, exports.createFind = s;
