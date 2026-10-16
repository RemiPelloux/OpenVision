"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scanInternals = void 0;
const n = require("./module-51078.js");
exports.scanInternals = function(e, t, r, s, o, i, a) {
    let c = r, l = t, u = 0;
    i.subscribe((0, n.operate)({
        destination: a,
        next: (t)=>{
            const r = u++;
            l = c ? e(l, t, r) : (c = !0, t), s && a.next(l);
        },
        complete: o ? ()=>{
            c && a.next(l), a.complete();
        } : void 0
    }));
};
