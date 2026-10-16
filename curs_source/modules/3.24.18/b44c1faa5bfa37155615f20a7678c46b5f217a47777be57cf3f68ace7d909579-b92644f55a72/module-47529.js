"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinctUntilChanged = void 0;
const n = require("./module-44896.js"), s = require("./module-51078.js");
function o(e, t) {
    return e === t;
}
exports.distinctUntilChanged = function(e, t = n.identity) {
    return e = e ?? o, (r)=>new s.Observable((n)=>{
            let o, i = !0;
            r.subscribe((0, s.operate)({
                destination: n,
                next: (r)=>{
                    const s = t(r);
                    !i && e(o, s) || (i = !1, o = s, n.next(r));
                }
            }));
        });
};
