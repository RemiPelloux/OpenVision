"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scanInternals = void 0;
const n = require("./module-1078.js");
exports.scanInternals = function(e, t, r, o, s, i, a) {
    let c = r, u = t, l = 0;
    i.subscribe((0, n.operate)({
        destination: a,
        next: (t)=>{
            const r = l++;
            u = c ? e(u, t, r) : (c = !0, t), o && a.next(u);
        },
        complete: s ? ()=>{
            c && a.next(u), a.complete();
        } : void 0
    }));
};
