"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinctUntilChanged = void 0;
const n = require("./module-44896.js"), o = require("./module-51078.js");
function s(e, t) {
    return e === t;
}
exports.distinctUntilChanged = function(e, t = n.identity) {
    return e = e ?? s, (r)=>new o.Observable((n)=>{
            let s, i = !0;
            r.subscribe((0, o.operate)({
                destination: n,
                next: (r)=>{
                    const o = t(r);
                    !i && e(s, o) || (i = !1, s = o, n.next(r));
                }
            }));
        });
};
