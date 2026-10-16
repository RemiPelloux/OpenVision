"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipLast = void 0;
const n = require("./module-44896.js"), s = require("./module-51078.js");
exports.skipLast = function(e) {
    return e <= 0 ? n.identity : (t)=>new s.Observable((r)=>{
            let n = new Array(e), o = 0;
            return t.subscribe((0, s.operate)({
                destination: r,
                next: (t)=>{
                    const s = o++;
                    if (s < e) n[s] = t;
                    else {
                        const o = s % e, i = n[o];
                        n[o] = t, r.next(i);
                    }
                }
            })), ()=>{
                n = null;
            };
        });
};
