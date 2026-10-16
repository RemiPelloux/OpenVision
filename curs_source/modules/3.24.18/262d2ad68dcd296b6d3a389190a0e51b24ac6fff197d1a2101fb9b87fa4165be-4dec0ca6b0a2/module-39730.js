"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFind = exports.find = void 0;
const n = require("./module-51078.js");
function o(e, t, r, o) {
    const s = "index" === t;
    let i = 0;
    r.subscribe((0, n.operate)({
        destination: o,
        next: (t)=>{
            const n = i++;
            e(t, n, r) && (o.next(s ? n : t), o.complete());
        },
        complete: ()=>{
            o.next(s ? -1 : void 0), o.complete();
        }
    }));
}
exports.find = function(e) {
    return (t)=>new n.Observable((r)=>o(e, "value", t, r));
}, exports.createFind = o;
