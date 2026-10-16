"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipLast = void 0;
const n = require("./module-44896.js"), o = require("./module-51078.js");
exports.skipLast = function(e) {
    return e <= 0 ? n.identity : (t)=>new o.Observable((r)=>{
            let n = new Array(e), s = 0;
            return t.subscribe((0, o.operate)({
                destination: r,
                next: (t)=>{
                    const o = s++;
                    if (o < e) n[o] = t;
                    else {
                        const s = o % e, i = n[s];
                        n[s] = t, r.next(i);
                    }
                }
            })), ()=>{
                n = null;
            };
        });
};
