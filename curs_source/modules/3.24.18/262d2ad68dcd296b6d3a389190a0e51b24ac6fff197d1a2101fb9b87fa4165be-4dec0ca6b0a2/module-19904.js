"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scanInternals = void 0;
const n = require("./module-51078.js");
exports.scanInternals = function(e, t, r, o, s, i, a) {
    let l = r, c = t, u = 0;
    i.subscribe((0, n.operate)({
        destination: a,
        next: (t)=>{
            const r = u++;
            c = l ? e(c, t, r) : (l = !0, t), o && a.next(c);
        },
        complete: s ? ()=>{
            l && a.next(c), a.complete();
        } : void 0
    }));
};
